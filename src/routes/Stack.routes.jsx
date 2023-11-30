import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/Login';
import SignUpScreen from './screens/Cadastro';
import PasswordRecoveryScreen from './screens/RecoverPass';


const Stack = createStackNavigator();

export default function StackRoutes() {
return (
    <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="PasswordRecovery" component={PasswordRecoveryScreen} />
    <Stack.Screen name="Cadastro" component={SignUpScreen} />
    </Stack.Navigator>

);
}
