import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import dumbell from './assets/dumbell.png'; 


export default function App() {
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

      <TouchableOpacity onPress={() => alert('click to login')} style={styles.button_login}>
        <Text style={styles.buttonLText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('click to sign in')} style={styles.button_register}>
        <Text style={styles.buttonRText}>Sign Up</Text>
      </TouchableOpacity>
      </LinearGradient>
    </View>
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