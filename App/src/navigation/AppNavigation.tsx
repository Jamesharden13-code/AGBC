import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import  { Style } from "../styles/Style";
import AuthStackNavigator from "./AuthStackNavigator";

//composant basic for a navigation, it's the base
//loading a composant DrawerNavigator (side navigation)
const AppNavigation = () => {
    return (
       <NavigationContainer>
            <SafeAreaView style={Style.mainContainer}>
                {/* <DrawerNavigator/> */}
                <AuthStackNavigator/>
            </SafeAreaView>
       </NavigationContainer>
    )
}

export default AppNavigation;