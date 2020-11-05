import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './ScreenStyles'
import FeedScreen from './FeedScreen'
import LoadingScreen from './LoadingScreen'
import * as Facebook from 'expo-facebook';
import * as SecureStore from 'expo-secure-store';
import * as firebaseApp from 'firebase'
import {Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base'

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
var database = firebaseApp.database();

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    let u = firebaseApp.auth().currentUser;
    this.state = ({
      email: '',
      password: '',
      loading: false,
      token: null,
      user: u
    });
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password < 6) {
        alert("Password must be at least 6 characters");
        return;
      }

      firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
          console.log(user.user.uid)
          firebaseApp.database().ref('users/' + user.user.uid).set({
            email: user.user.email,
            workouts: {
              temp: {
                name: "temp",
                exercises: {
                  0: {
                    name: "temp",
                    sets: 0,
                    reps: 0,
                    weight: 0
                  }
                }
              }
            }
          })
        })
    }
    catch (error) {
      console.log(error.toString())
    }
  }

  loginUser = (email, password) => {
    try {
      firebaseApp.auth().signInWithEmailAndPassword(email,password)
        .then(user => {
          //console.log(user)
        })
    }
    catch (error) {
      console.log(error.toString())
    }
  }

  checkForUser = () => {
      if (firebaseApp.auth().currentUser != null) {
        console.log("user")
      } else {
        console.log("no user")
      }
  }
  componentDidMount(){
   setTimeout (()=>{this.checkForUser()},2000);

    // Listen for authentication state to change.
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user != null) {
        console.log('We are authenticated now!');
        console.log('We authneticated with Fireabse!' + `Hi ${user.email}`);
        this.setState({user: firebaseApp.auth().currentUser})
      }
      else{
        console.log('did not authenticate, user was null');
      }
    });
  }

//   async Facebooklogin() {
//     try{
//       await Facebook.initializeAsync({appId : '576677119727703', appName : 'JustLift'});

//       const { type, token } = await
//         Facebook.logInWithReadPermissionsAsync(
//         {
//             permission: "public_profile"
//         });
//       if (type === "success") {

//         const credential = firebaseApp.auth.FacebookAuthProvider.credential(token);

//         firebaseApp
//         .auth().signInWithCredential(credential).catch(error => {
//           console.log('Auth failed and here is the error(1) ' + JSON.stringify(error))
//         });
//       }
    
//   }catch ({ message }) {
//          alert(`Facebook Login Error: ${message}`);
//   }
// }
  
    
 
    // if(this.state.loading === true){
    //     return(<LoadingScreen/>)
    // }
    //else if(this.state.token === null){
  //Check Async Storage if token is available
  //If it is available set loading state to false 
  /*async checkForToken(){
     let token = await SecureStore.getItemAsync('token')
     //console.log(token)
    this.setState({
      token: token,
      loading: false
    })
  }*/

  /*async checkForFirebaseCredential() {
    let credential = await SecureStore.getItemAsync('firebaseCredential');
    if (credential) {
      firebaseApp
        .auth()
        .signInWithCredential(credential)
        .catch(error => {
          console.log('Auth failed and here the error' + JSON.stringify(error));
        });
    }
  }*/

  //Write token to secure storage. 
  /*async saveTokenToSecureStorage(token){
     SecureStore.setItemAsync("token", token)
     this.setState({
       token: token
     })
  }  */
    
  render() {
    if(this.state.loading === true){
        return(<LoadingScreen/>)
    }
    else if(this.state.user === null){
        return (
        /*<View style={styles.container}>
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
        </View>*/
            <Container style={{flex:1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
              <Form style={{width: "100%"}}>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input autoCorrect={false} autoCapitalize="none"
                    onChangeText={email => this.setState({email})}/>
                </Item>

                <Item floatingLabel>
                  <Label>Password</Label>
                  <Input autoCorrect={false} autoCapitalize="none" secureTextEntry={true}
                    onChangeText={password => this.setState({password})}/>
                </Item>

                <Button style={{marginTop: 10}}
                  full rounded success
                  onPress={() => this.loginUser(this.state.email, this.state.password)}>
                  <Text style={{color: 'white'}}>Log In</Text>
                </Button>
                <Button style={{marginTop: 10}}
                  full rounded primary
                  onPress={() => this.signUpUser(this.state.email, this.state.password)}>
                  <Text style={{color: 'white'}}>Register</Text>
                </Button>
              </Form>
            </Container>
        );
    //}
    // else{
    //     return (<FeedScreen/>)
    // }
  }
}
  /*async logIn() {
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

        let credential = firebaseApp.auth.FacebookAuthProvider.credential(
          token
        );
        firebaseApp
          .auth()
          .signInWithCredential(credential)
          .catch(error => {
            console.log(
              'Auth failed and here is the error ' + JSON.stringify(error)
            );
          });

        this.saveTokenToSecureStorage(token)
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
}*/
      }

