import React from 'react';
import { View, Text } from 'react-native';
import { DrawerActions, NavigationProp } from '@react-navigation/native';
import { Style } from '../styles/Style';
import { iconData } from '../data/FakeData';
import GradientIcon from '../components/common/GradientIcon';
import GradientText from '../components/common/GradientText';

interface TopNavigationProps {
    dataNavigator: NavigationProp<any>;
    dataShowSearch?: boolean
}

interface TopNavigationState {
    navigator: NavigationProp<any>
}

export default class TopNavigation extends React.Component<TopNavigationProps, TopNavigationState> {
    constructor(props: TopNavigationProps) {
        super(props);

        this.state = {
            navigator: this.props.dataNavigator
        }
    }

    render() {
        return (
            <View>
                <View style={[Style.divTopNavigation, Style.row] }>
                    <View style={{flexDirection: 'row', alignItems: 'center' }}>
                        <View style={[Style.iconCircle, Style.centered]}>
                                <GradientIcon 
                                    name="bars"
                                    size={20}
                                    type="font-awesome"
                                    onPress={() => {
                                        this.state.navigator.dispatch(DrawerActions.openDrawer());
                                    }}
                                />
                        </View>
                        <View style={{ marginLeft: 10 }} >
                            <Text style={[Style.titleMedium, Style.fontSerif]}>
                                Bonjour, 
                            </Text>
                            <GradientText text="Tolotra" style={[Style.titleMedium, Style.textBold, Style.fontSerif]} />
                        </View>
                    </View>
                    <View style={[Style.alignRight, Style.centered, Style.g20, Style.mr20, Style.row]}>
                        {
                            iconData.map((value) => {
                                return(

                                    <View key={value.id}>
                                        <GradientIcon
                                            name={value.name}
                                            size={value.size}
                                            type={value.type}
                                            onPress={() => {
                                                this.state.navigator.dispatch(DrawerActions.openDrawer());
                                            }}
                                        />
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        )
    }
}