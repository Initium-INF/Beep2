import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Home from './screens/Home';
import Profile from './screens/Profiler';
import Camera from './screens/Camera';
import History from './screens/Historico';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Blocos') {
            iconName = 'grid';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          } else if (route.name === 'Scanear') {
            iconName = 'camera';
          } else if (route.name === 'Historico') {
            iconName = 'file-text';
          }
          
          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarLabel: '', // Adiciona esta linha para remover o texto abaixo dos ícones
      })}
    >
      <Tab.Screen name="Blocos" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Scanear" component={Camera} />
      <Tab.Screen name="Historico" component={History} />
    </Tab.Navigator>
  );
}
