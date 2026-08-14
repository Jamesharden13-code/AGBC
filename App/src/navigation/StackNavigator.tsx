import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import I18n from "../services/I18n"
import { useTranslation } from 'react-i18next';
import BottomNavigation from './BottomNavigation';

const initI18n = I18n;

export type MainStackParamList = {
    Accueil: undefined;
    Video: undefined;
    Preload: undefined;
    Register: undefined;
    MainApp: undefined;
    Login: undefined
    UserPicture: undefined;
    Map: undefined;
    User: undefined;
    Search: undefined
}

const Stack = createStackNavigator<MainStackParamList>();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: 'black',
    },
    headerTitleStyle: {
        fontSize:   16,
    },
    headerTintColor: "red",
    headerBackTitle: "Back", 
};


//manage hierarchical navigation (open/close pages, go back)
const MainStackNavigator: React.FC = () => {
    const { t, i18n } = useTranslation();
    return (
        <Stack.Navigator screenOptions = {screenOptionStyle}>
            <Stack.Screen
                name ="Accueil"
                options= {{ headerShown: false}}
                component={BottomNavigation}
            />
            <Stack.Screen
                name ="Video"
                options= {{ headerShown: false}}
                component={BottomNavigation}
            />
            <Stack.Screen
                name ="Map"
                options= {{ headerShown: false}}
                component={BottomNavigation}
            />
            <Stack.Screen
                name ="User"
                options= {{ headerShown: false}}
                component={BottomNavigation}
            />
            <Stack.Screen
                name ="Search"
                options= {{ headerShown: false}}
                component={BottomNavigation}
            />
        </Stack.Navigator>
    );
};

export { MainStackNavigator };