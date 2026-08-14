import { CommonActions } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParamList } from "navigation/StackNavigator";
import TopNavigation from "../navigation/TopNavigation";
import { Style } from "../styles/Style"
import { Image } from "react-native-elements";
import StandBy from "../components/common/StandBy";

type Props = StackScreenProps<MainStackParamList, 'Video'>

const Video = ({ navigation } : Props ) => {
    return(
        <View style={Style.screenContainer}>
            <TopNavigation dataShowSearch={true} dataNavigator={navigation} />
            <StandBy />
        </View>
    )
}

export default Video;