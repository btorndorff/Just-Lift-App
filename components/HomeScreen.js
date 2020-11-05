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

import * as firebaseApp from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCTmakAv2P965rn8RXxfocQC9EDmfbtGik",
    authDomain: "justliftapp-52af0.firebaseapp.com",
    databaseURL: "https://justliftapp-52af0.firebaseio.com",
    projectId: "justliftapp-52af0",
    storageBucket: "justliftapp-52af0.appspot.com",
    messagingSenderId: "459347127352",
    appId: "1:459347127352:web:c4dc3739b2d35ce1dccacd",
    measurementId: "G-KRT9MBHW9T"
  };
  // Initialize Firebase
if (!firebaseApp.apps.length) {
  firebaseApp.initializeApp(firebaseConfig);
}

export default class HomeScreen extends React.Component {

  constructor() {
    super();
    this.state = { loading: true, token: null };
  }

  // componentDidMount(){
  //  setTimeout (()=>{
  //    this.checkForToken()
  //   },2000);
  //  this.checkForFirebaseCredential();
  //   // Listen for authentication state to change.
  //   //var user;
  //   firebaseApp.auth().onAuthStateChanged(user => {
  //     if (user != null) {
  //       console.log('We are authenticated now!');
  //       Alert.alert('We authneticated with Fireabse!', `Hi ${user}`);
  //     }
  //     else{
  //       console.log('did not authenticate, user was null');
  //     }
  //   });
  // }


  // //Check Async Storage if token is available
  // //If it is available set loading state to false 
  // async checkForToken(){
  //   let token = await SecureStore.getItemAsync('token')
  //   this.setState({
  //     token: token,
  //     loading: false,
  //   });
  // }

  // async checkForFirebaseCredential() {
  //   let credential = await SecureStore.getItemAsync('firebaseCredential');
  //   if (credential) {
  //     firebaseApp
  //       .auth()
  //       .signInWithCredential(credential)
  //       .catch(error => {
  //         console.log('Auth failed and here the error' + JSON.stringify(error));
  //       });
  //   }
  // }

  // //Write token to secure storage. 
  // async saveTokenToSecureStorage(token, credential){
  //    SecureStore.setItemAsync('token', token);
  //    //save firebase credential
  //    SecureStore.setItemAsync('firebaseCredential', credential);
  //    this.setState({
  //      token: token
  //    });
  // }  

  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user != null) {
          console.log(user);
      }
    });
  }

  async Facebooklogin() {
    try{
      await Facebook.initializeAsync({appId : '576677119727703', appName : 'JustLift'});

      const { type, token } = await
        Facebook.logInWithReadPermissionsAsync(
        {
            permission: "public_profile"
        });
      if (type === "success") {

        const credential = firebaseApp.auth.FacebookAuthProvider.credential(token);

        firebaseApp
        .auth().signInWithCredential(credential).catch(error => {
          console.log('Auth failed and here is the error(1) ' + JSON.stringify(error))
        });
      }
    
  }catch ({ message }) {
         alert(`Facebook Login Error: ${message}`);
  }
}
  
    
  render() {
    // if(this.state.loading === true){
    //     return(<LoadingScreen/>)
    // }
    //else if(this.state.token === null){
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
            <TouchableOpacity 
              onPress={()=>this.Facebooklogin()} style={styles.button_login}>
              <Text style={styles.buttonLText}>Login With Facebook</Text>
            </TouchableOpacity>
            </LinearGradient>
        </View>
        );
    //}
    // else{
    //     return (<FeedScreen/>)
    // }
  }
  
  // async logIn() {
  //   try {
  //     //Seed documentation on course site at mobileappdev.teachable.com
  //     //For default user names and passwords.
  //     await Facebook.initializeAsync({appId : '576677119727703'});
  //     const {
  //       type,
  //       token,
  //       expires,
  //       permissions,
  //       declinedPermissions,
  //     } = await Facebook.logInWithReadPermissionsAsync({
  //       //permissions: ['public_profile'],
  //     });
  //     if (type === 'success') {
  //       // Get the user's name using Facebook's Graph API
  //       // const response = await fetch(
  //       //   `https://graph.facebook.com/me?access_token=${token}`
  //       // );

  //       var credential = firebaseApp.auth.FacebookAuthProvider.credential(token);
        
  //       firebaseApp
  //         .auth()
  //         .signInWithCredential(credential)
  //         .catch(error => {
  //           console.log(
  //             'Auth failed and here is the error(1) ' + JSON.stringify(error)
  //           );
  //         });
        
  //       this.saveTokenToSecureStorage(token, credential)
  //       //Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
  //     } else {
  //       // type === 'cancel'
  //     }
  //   } catch ({ message }) {
  //     alert(`Facebook Login Error: ${message}`);
  //   }
  // }
}

