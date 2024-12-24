// screens/HomeScreen.js - Tela Inicial (HomeScreen): Exemplo de uma tela inicial simples com um botão para navegação:
import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, Alert } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function HomeScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginPress = () => {
    // Lógica de autenticação
    if (email === 'user@example.com' && password === 'password') {
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      setIsAuthenticated(true);
      navigation.navigate('Training'); // Exemplo de navegação após login
    } else {
      Alert.alert('Erro', 'Credenciais inválidas. Tente novamente.');
    }
  };

  const handleRegisterPress = () => {
    Alert.alert('Registrar-se', 'Funcionalidade de registro em breve.');
  };

  return (
    <ImageBackground 
      source={require('../assets/img/imgHome.jpg')} // Substitua pelo caminho da sua imagem
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Bem-vindo à Academia</Text>

        {!isAuthenticated ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#ccc"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#ccc"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <View style={styles.buttonContainer}>
              <CustomButton title="Login" onPress={handleLoginPress} />
              <CustomButton title="Registrar-se" onPress={handleRegisterPress} />
            </View>
          </>
        ) : (
          <Text style={styles.successMessage}>Você já está autenticado!</Text>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente sobre a imagem
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '90%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  successMessage: {
    fontSize: 18,
    color: '#0f0',
    marginTop: 20,
  },
});
