import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Home from './screens/Home';
import Menu from './screens/Menu';
import Profile from './screens/Profiler'; 
import Camera from './screens/New';// Altere o caminho de acordo com sua estrutura de pastas
import History from './screens/Historico';


const Tab = createBottomTabNavigator();

export default function TabRoutes() {
return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
            iconName = 'home';
        } else if (route.name === 'Profile') {
            iconName = 'user';
        } else if (route.name === 'Menu') {
            iconName = 'menu';
        }
        else if (route.name === 'Scanear') {
            iconName = 'camera';
        }
        else if (route.name === 'Nova Tabela') {
            iconName = '';
        }


        return <Feather name={iconName} size={size} color={color} />;
        },
    })}
    >
    <Tab.Screen name="Blocos" component={Home} />
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="Menu" component={Menu} />
    <Tab.Screen name="Scanear" component={Camera} />
    <Tab.Screen name="Nova Tabela " component={History} 
    />
    </Tab.Navigator>
);
}
