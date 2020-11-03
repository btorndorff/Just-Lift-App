import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './ScreenStyles'
import FeedScreen from './FeedScreen'
import LoadingScreen from './LoadingScreen'
import * as Facebook from 'expo-facebook';
import * as SecureStore from 'expo-secure-store';


export default class HomeScreen extends React.Component {

  constructor() {
    super();
    this.state = { loading: true, token: null };
  }

  componentDidMount(){
   setTimeout (()=>{this.checkForToken()},2000)
  }


  //Check Async Storage if token is available
  //If it is available set loading state to false 
  async checkForToken(){
     let token = await SecureStore.getItemAsync('token')
     //console.log(token)
    this.setState({
      token: token,
      loading: false
    })
  }

  //Write token to secure storage. 
  async saveTokenToSecureStorage(token){
     SecureStore.setItemAsync("token", token)
     this.setState({
       token: token
     })
  }  
    
  render() {
    if(this.state.loading === true){
        return(<LoadingScreen/>)
    }
    else if(this.state.token === null){
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
            <Image source={require("../assets/dumbell.png")} style={styles.logo} /> 
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
            <Button title="Login With Facebook" onPress={()=>this.logIn()}/>
            </LinearGradient>
        </View>
        );
    }
    else{
        return (<FeedScreen/>)
    }
  }
  
  async logIn() {
    try {
      //Seed documentation on course site at mobileappdev.teachable.com
      //For default user names and passwords.
      await Facebook.initializeAsync('576677119727703');//576677119727703 //184462529575747
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        this.saveTokenToSecureStorage(token)
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
}

