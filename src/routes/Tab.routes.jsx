import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Home from './screens/Home';
import Menu from './screens/Menu';
import Profile from './screens/Profiler'; 
import Camera from './screens/Camera';
import History from './screens/Historico';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Blocos') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          } else if (route.name === 'Menu') {
            iconName = 'menu';
          } else if (route.name === 'Scanear') {
            iconName = 'camera';
          } else if (route.name === 'Nova Tabela') {
            iconName = 'list'; // Altere para o ícone desejado (por exemplo, 'list')
          }

          return <Feather name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Blocos" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Scanear" component={Camera} />
      <Tab.Screen name="Nova Tabela" component={History} />
    </Tab.Navigator>
  );
}
