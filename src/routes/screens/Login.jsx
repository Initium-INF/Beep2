import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

// Função de autenticação fornecida
export function signIn(email, password) {
  return new Promise((resolve, reject) => {
    // Lógica de autenticação simular
    setTimeout(() => {
      if (email === 'thiagomarinho@rockeseat.com.br' && password === 'senha') {
        resolve({
          token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
          name: 'Thiago',
          email: 'thiagomarinho@rockeseat.com.br',
        });
      } else {
        reject(new Error('Credenciais inválidas'));
      }
    }, 2000);
  });
}

const TelaLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      // Lógica de autenticação fornecida
      const user = await signIn(email, password);

      // Verifique se a resposta contém um token
      if (user.token) {
        await AsyncStorage.setItem('isLoggedIn', 'true');
        // Pode armazenar outras informações do usuário se necessário
        await AsyncStorage.setItem('userToken', user.token);
        navigation.navigate('Home'); // Navegue para a tela Home após o login bem-sucedido
      } else {
        alert('Login falhou. Verifique suas credenciais.');
      }
    } catch (error) {
      console.error('Erro durante a autenticação:', error);
      alert('Ocorreu um erro durante a autenticação. Tente novamente.');
    }
  };

  const handleSignUpPress = () => {
    navigation.navigate('Cadastro'); // Navegue para a tela de cadastro (SignUpScreen)
  };

  return (
    <View style={styles.container}>
      <View style={styles.centerizedView}>
        <View style={styles.authBox}>
          <View style={styles.logoBox}>
            {/* Conteúdo do logotipo aqui */}
          </View>
          <Text style={styles.loginTitleText}>Tela de Login</Text>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          {/* TouchableOpacity para o botão de login */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          {/* TouchableOpacity para criar uma conta */}
          <TouchableOpacity onPress={handleSignUpPress}>
            <Text style={styles.registerText}>Criar Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fafafa',
},
centerizedView: {
    width: '100%',
    height: '25%',
    top: '15%',
    alignItems: 'center',
    justifyContent: 'center',
},
authBox: {
    width: '80%',
    backgroundColor: '#096816a',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
},
logoBox: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -50,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
},
loginTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 5,
},
inputBox: {
    marginTop: 10,
},
inputLabel: {
    fontSize: 18,
    marginBottom: 6,
},
input: {
    width: '100%',
    height: 40,
    backgroundColor: '#e6e9ec',
    borderRadius: 4,
    paddingHorizontal: 10,
},
loginButton: {
    backgroundColor: '#ff4756',
    marginTop: 13,
    paddingVertical: 10,
    borderRadius: 4,
},
loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
},
registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
},
});

export default TelaLogin;
