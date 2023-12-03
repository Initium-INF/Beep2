import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const PasswordRecoveryScreen = () => {
const [email, setEmail] = useState('');

const handlePasswordRecovery = () => {
    // Lógica de recuperação de senha aqui
};

return (
    <View>
    <Text>Tela de Recuperação de Senha</Text>
    <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={text => setEmail(text)}
    />
    <Button title="Recuperar Senha" onPress={handlePasswordRecovery} />
    </View>
);
};

export default PasswordRecoveryScreen;
