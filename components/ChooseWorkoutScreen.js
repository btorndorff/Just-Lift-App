import React, { useState } from 'react';
import {View, StyleSheet, Text, Image, ScrollView, Button, TextInput, TouchableOpacity} from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import Workout3View from './Workout3View'
import Icon from 'react-native-vector-icons/Feather';
import * as firebase from 'firebase'

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

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default class ChooseWorkoutScreen extends React.Component {

    constructor() {
        super();
        this.state = { create : false, title : ""};
    }
    

    goToCreate(){
        this.setState({create : true})
    }
    goToChoose(){
        this.setState({create : false})
    }

    handleTitle = (text) => {
        this.setState({ title: text })
     }

    render(){

        //choose workout
        if(this.state.create == false){
            return(

                <ScrollView style={{width:"100%"}}>
                    <View style={styles.container}>
                    <Workout3View />
                    <Button
                        onPress={() => this.goToCreate()}
                        title="Create New Workout"
                        color="#841584"
                    />
                    </View>
                </ScrollView>

            );
        }


        //create workout
        return(
            <ScrollView style={{width: "100%"}}>
                <View style={styles.container}>

                    {/* add support for user to add custom image */}
                    <Image 
                        source={require('../assets/add.jpg')} style={{height: 150, width: 150, marginTop: 50}}
                    />
                    <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Title of Workout"
                        placeholderTextColor = "#9a73ef"
                        autoCapitalize = "none"
                        onChangeText = {this.handleTitle}/>
                    <View style={styles.hContainer}>
                        <TouchableOpacity
                            onPress={() => alert("get exercise api working here")} style={styles.button_login}>
                            <Text style={styles.buttonLText}>Add Excercise</Text>  
                        </TouchableOpacity> 
                    </View>
                    <Button
                        onPress={() => this.goToChoose()}
                        title="Cancel"
                        color="#841584"
                    />
                </View>
                
                
                
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
      },
    buttonLText: {
        fontSize: 20,
        color: '#FFFFFF',
      },
    hcontainer: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#ecf0f1',
        padding: 8,
        flexDirection:'row',
        alignItems:'center'
    
    
      },
      button_login: {
        backgroundColor: "black",
        padding: 20,
        borderRadius: 5,
      },
    horContainer: {
        flex: 1,
        minWidth: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
    },
    arrow: {
        height: 50,
        width: 50,
        //alignSelf: "bottom"
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
     },
      textInputContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        borderColor: 'black',
        borderBottomWidth: 1,
        paddingRight: 10,
        paddingBottom: 10,
      },
})