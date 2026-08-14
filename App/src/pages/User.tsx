import { View, Text } from "react-native"
import TopNavigation from "../navigation/TopNavigation";
import StandBy from "../components/common/StandBy";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParamList } from "navigation/StackNavigator";
import { Style } from "../styles/Style";

type Props = StackScreenProps<MainStackParamList, 'User'>

const User = ({navigation} : Props) => {
    return(
        <View style={Style.screenContainer}>
            <TopNavigation dataShowSearch={true} dataNavigator={navigation} />
            <StandBy />
        </View>
    )
}


export default User;