import { createStackNavigator } from "@react-navigation/stack"
import Preload from "../pages/Preload"
import Login from "../pages/Login"
import Register from "../pages/Register"
import DrawerNavigator from "./DrawerNavigator"
import { MainStackParamList } from "./StackNavigator"
import PictureOption from "../pages/PictureOption"


const Stack = createStackNavigator<MainStackParamList>()
const AuthStackNavigator = () => {
    return(
        <Stack.Navigator
            screenOptions={{headerShown : false}} 
        >
            <Stack.Screen
                name="Preload"
                component={Preload}
            />
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Register"
                component={Register}
            />
            <Stack.Screen
                name="UserPicture"
                component={PictureOption}
            />
            <Stack.Screen
                name="MainApp"
                component={DrawerNavigator}
            />
        </Stack.Navigator>
    )
}

export default AuthStackNavigator