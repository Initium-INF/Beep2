import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import TabRoutes from './Tab.routes';
import StackRoutes from './Stack.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  const drawerIcon = (iconName) => ({ color, size }) => (
    <Feather name={iconName} color={color} size={size} />
  );

  return (
    <Drawer.Navigator screenOptions={{ title: ' ' }}>
      <Drawer.Screen
        name="Login"
        component={StackRoutes}
        options={{
          drawerIcon: drawerIcon('log-in'),
        }}
      />
      <Drawer.Screen
        name="Blocos"
        component={TabRoutes}
        options={{
          drawerIcon: drawerIcon('grid'),
        }}
      />
    </Drawer.Navigator>
  );
}
