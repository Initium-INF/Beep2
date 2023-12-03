import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const SignUpScreen = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSignUp = () => {
    // Lógica de cadastro aqui
};

return (
    <View>
    <Text>Tela de Cadastro</Text>
    <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={text => setEmail(text)}
    />
    <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
    />
    <Button title="Cadastrar" onPress={handleSignUp} />
    </View>
);
};

export default SignUpScreen;
