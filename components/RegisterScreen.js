import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './ScreenStyles'

import dumbell from '../assets/dumbell.png'; 

export default class RegisterScreen extends React.Component {
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

  