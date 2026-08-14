import React, { useRef, useEffect } from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import I18n from "../services/I18n";
import { useTranslation } from "react-i18next";
import  Home  from "../pages/Home";
import { View, TouchableOpacity, Dimensions  } from "react-native";
import { Style } from "../styles/Style";
import { Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import MaskedView from "@react-native-masked-view/masked-view";
import Gradient from "../components/common/Gradient";
import User from "../pages/User";
import Map from "../pages/Map";
import Search from "../pages/Search";
import Video from "../pages/Video";

export type BottomTabParamList = {
    Video: undefined;
    Search: undefined;
    Home: undefined;
    Map: undefined;
    User: undefined;
}

const Tab = createBottomTabNavigator<BottomTabParamList>();

const Tabar: any[] = [
    { route: 'Video', label: 'Video', type : 'font-awesome', activeIcon: 'video-camera', component : Video },
    { route: 'Search', label: 'Search', type : 'font-awesome', activeIcon: 'search', component : Search },
    { route: 'Home', label: 'Home', type : 'font-awesome', activeIcon: 'home', component : Home },
    { route:'Map', label: 'Map', type: 'font-awesome', activeIcon: 'map-marker', component: Map},
    { route: 'User', label: 'User', type: 'font-awesome', activeIcon: 'user', component: User},
]

interface TabButtonItem {
    type: string;
    activeIcon: string;
    route: string;
    label: string;
    component: React.ComponentType<any>
}

interface BottomNavigationProps {
    item : TabButtonItem;
    //onPress?: () => void;
    onPress?: (e?: any) => void;
    isFocused: boolean;
}

const initI18n = I18n;

//animation for bottom selected
const animate1 = { 0: { scale : 0.5 , translateY : 0}, 1: { scale : 1.5 , translateY: -24 }  };
//animation for bottom not selected
const animate2 = { 0: { scale : 1.5 , translateY : -24}, 1: { scale : 1 , translateY: 0 }  };

const TabButton: React.FC<BottomNavigationProps> = ({ item, onPress, isFocused }) => {

    const {t, i18n} = useTranslation();
    const viewRef = useRef<Animatable.View & View>(null);
    //const viewRef = useRef(null);
    const [firstLoad, setFirstLoad] = React.useState(true);

    useEffect(() => {
        if (!viewRef.current) return;

        if (isFocused) {
            viewRef.current.animate(animate1, 300);
        } else {
            viewRef.current.animate(animate2 , 300);
        }
    }, [isFocused]);


    return(
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={[Style.centered, Style.mainContainer]}
        >
            <Animatable.View
                ref={viewRef}
                duration={1000}
                style={[
                    Style.outerCircle, Style.centered,
                    { borderColor: isFocused ? "#ffffff" : "#000" }
                ]}
            >
                { isFocused ? (
                    <MaskedView
                        maskElement={
                             <Icon
                                type={item.type}
                                name={item.activeIcon}
                                color="black"
                            />
                        }
                    >
                        <Gradient>
                                <View style={{ width: 25, height: 25 }} />
                        </Gradient>
                    </MaskedView>
                ) : (
                     <Icon
                        type={item.type}
                        name={item.activeIcon}
                        color="#ffff"
                    />
                ) }

            </Animatable.View>
        </TouchableOpacity>
    )
};



//tabbed browsing (Bottom Tab).
export default function BottomNavigation() {

    const [selected, setSelected] = React.useState('Home');
    const { width } = Dimensions.get("screen");

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { 
                    height: 55,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: '#000', 
                    shadowOpacity: 0.3,  // ✅ pour iOS (superposition)
                    zIndex: 100
                }
            }} 
        >
            {Tabar.map((item, index) => {
                return(
                    <Tab.Screen 
                        key={item.route}
                        name={item.route}
                        component={item.component}
                        options={{
                            tabBarButton: (props) => {
                                const { onPress: originalOnPress, ...restProps } = props;
                                return(
                                    <TabButton 
                                        {...restProps} 
                                        item={item} 
                                        isFocused={selected==item.route}
                                        onPress={(e) => {
                                        setSelected(item.route)
                                        originalOnPress?.(e);
                                    }}    
                            />
                                )
                            }
                        }}
                    />
                )
            })}
        </Tab.Navigator>
    )
}