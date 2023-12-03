
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import TabRoutes from './Tab.routes';
import StackRoutes from './Stack.routes';

import Profile from './screens/Profiler';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
return (

    
    <Drawer.Navigator screenOptions={{ title: ' ' }}>
    <Drawer.Screen
        name="Login"
        component={StackRoutes}
        options={{
        drawerIcon: ({ color, size }) => (
            <Feather name="log-in" color={color} size={size} />
        ),
        drawerLabel: 'Login',
        }}
    />
          <Drawer.Screen
        name="Perfil "
        component={Profile}
        options={{
        drawerIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
        ),
        drawerLabel: 'Profile',
        }}
    />
    <Drawer.Screen
        name="Blocos "
        component={TabRoutes}
        options={{
        drawerIcon: ({ color, size }) => (
            <Feather name="grid" color={color} size={size} />
        ),
        drawerLabel: 'Blocos',
        }}
    />

    </Drawer.Navigator>
);
}
