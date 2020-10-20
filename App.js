import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import dumbell from './assets/dumbell.png'; 

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#D4EFF5', '#B4EDFF', '#026479']}
          start ={[1,1]}
          end = {[0.1, 0.1]}
          style={{
            flex: 1, 
            flexDirection: 'column',
            width: "100%",
            justifyContent: 'center', 
            alignItems: 'center',
          }}>
        <Image source={dumbell} style={styles.logo} /> 
        <Text style={styles.instructions}>
          JustLift
        </Text>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Login')} style={styles.button_login}>
          <Text style={styles.buttonLText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Register')} style={styles.button_register}>
          <Text style={styles.buttonRText}>Register</Text>
        </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Login')} style={styles.button_login}>
          <Text style={styles.buttonLText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Home')} style={styles.button_login}>
          <Text style={styles.buttonLText}>Back to Home Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class RegisterScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Register Screen</Text>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Register')} style={styles.button_login}>
          <Text style={styles.buttonLText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Home')} style={styles.button_login}>
          <Text style={styles.buttonLText}>Back to Home Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 219,
    height: 230,
    marginBottom: 20,
  },
  instructions: {
    fontWeight: 'bold',
    fontSize: 72,
    alignItems: 'center',
    textAlign: 'center',
    color: '#2E3A59',
  },
  button_register: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 5,
  },
  button_login: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
  },
  buttonRText: {
    fontSize: 20,
    color: '#ffffff',
  }, 
  buttonLText: {
    fontSize: 20,
    color: '#000000',
  },
});

export default App;