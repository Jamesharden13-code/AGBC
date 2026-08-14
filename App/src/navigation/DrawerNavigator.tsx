import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { MainStackNavigator } from './StackNavigator';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import User from '../pages/User';
import Login from '../pages/Login';
import { COLORS } from "../styles/Style"

export type DrawerParamList = {
  Home: undefined;
  User: undefined;
  Déconnexion : undefined
}

const Drawer = createDrawerNavigator<DrawerParamList>();

//function to color background in linear gradient
const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return(
    <LinearGradient
      start={{ x: 0, y: 0}}
      end={{ x: 1, y: 1}}
      colors={COLORS.active}
      style={{ flex: 1 }}
    >
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    </LinearGradient>
  )
}
// Side Navigation
const DrawerNavigator = () => {
    return(
        <Drawer.Navigator
          screenOptions={{
            drawerActiveTintColor: '#FFFFFF',
            drawerInactiveTintColor: '#FFFFFF',
            headerShown: false,
            drawerStyle: { backgroundColor: 'transparent' }, // we make it transparent to see the gradient
          }}
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
              <Drawer.Screen
                name={"Home"}
                component={MainStackNavigator}  //The “Home” screen that points to MainStackNavigator
                options={{
                  drawerIcon: ({ focused, size }) => (
                    <Icon
                      name="home"
                      type='font-awesome'
                      size={size}
                      color={focused ? '#FFFFFF' : '#FFFFFF'}
                    />
                  ),
                }}
              />
              <Drawer.Screen
                name={"User"}
                component={User}
                options={{
                  drawerIcon: ({ focused, size }) => (
                    <Icon
                      name="user"
                      type='font-awesome'
                      size={size}
                      color={focused ? '#FFFFFF' : '#FFFFFF'}
                    />
                  ),
                }}
              />
              <Drawer.Screen
                name={"Déconnexion"}
                component={Login}
                options={{
                  drawerIcon: ({ focused, size }) => (
                    <Icon
                      name="sign-out"
                      type='font-awesome'
                      size={size}
                      color={focused ? '#FFFFFF' : '#FFFFFF'}
                    />
                  ),
                }}
              />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;