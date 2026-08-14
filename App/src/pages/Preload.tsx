import { useEffect } from "react";
import { View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParamList } from "navigation/StackNavigator";

type Props = StackScreenProps<MainStackParamList>

const Preload = ({ navigation } : Props) => {

    useEffect(() =>{
        setTimeout(() => {
            navigation.replace("Login");
        }, 2000)
    }, [])
    return(
        <View>
            <Text>Preload</Text>
        </View>
    )
}

export default Preload;