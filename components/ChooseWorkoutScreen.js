import React, { useState } from 'react';
import {View, StyleSheet, Text, Image, ScrollView, Button, TextInput, TouchableOpacity} from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import Workout3View from './Workout3View'
import Icon from 'react-native-vector-icons/Feather';
import * as firebase from 'firebase'
import { LinearGradient } from 'expo-linear-gradient';


function ChooseWorkoutScreen({navigation}) {
    return(
        <LinearGradient
          colors={['#D4EFF5', '#B4EDFF', '#026479']}
          start ={[1,1.4]}
          end = {[0.1, 0.1]}
          style={{
            flex: 1, 
            flexDirection: 'column',
            width: "100%",
            justifyContent: 'center', 
            alignItems: 'center',
          }}>
        <ScrollView style={{width:"100%"}}>
            <View style={styles.container}>
                <Workout3View navigation={navigation}/>
        
                {/* <View style={styles.horContainer} onStartShouldSetResponder={() => navigation.navigate('CreateWorkoutScreen')}>
                    <Image source={require("../assets/add.jpg")} style={styles.thumb}/>
                    <View style={styles.container}>
                        <Text style={styles.leftText}>Create Workout</Text>
                    </View>
                    <Image source={require("../assets/arrow.png")} style={styles.arrow}/>
                </View> */}
            </View>
            
        </ScrollView>
        </LinearGradient>
    );   
}  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        alignSelf: "center",
        margin: 10,
        
    },
    crcontainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        alignSelf: "center",
        margin: 10,
        backgroundColor : "#505050"
        
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
      arrow: {
        height: 50,
        width: 50,
        alignSelf: "center"
    },
    hcontainer: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#ecf0f1',
        padding: 8,
        flexDirection:'row',
        alignItems:'center',
        
    
    
      },
      button_login: {
        backgroundColor: "black",
        padding: 20,
        borderRadius: 5,
      },
      horContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        backgroundColor: "#505050",
        margin: 10 
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
      leftText: {
        minWidth: "90%",
        textAlign: "left",
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
    thumb: {
        height: 100,
        width: 100,
    },
})

export default ChooseWorkoutScreen;
//     constructor() {
//         super();
//         this.state = { create : false, title : ""};
//     }
    

//     goToCreate(){
//         this.setState({create : true})
//     }
//     goToChoose(){
//         this.setState({create : false})
//     }

//     handleTitle = (text) => {
//         this.setState({ title: text })
//      }

//     render(){

//         //choose workout
//         if(this.state.create == false){
//             return(

//                 <ScrollView style={{width:"100%"}}>
//                     <View style={styles.container}>
//                     <Workout3View />
//                     <Button
//                         onPress={() => this.goToCreate()}
//                         title="Create New Workout"
//                         color="#841584"
//                     />
//                     </View>
//                 </ScrollView>

//             );
//         }


//         //create workout
//         return(
//             <ScrollView style={{width: "100%"}}>
//                 <View style={styles.container}>

//                     {/* add support for user to add custom image */}
//                     <Image 
//                         source={require('../assets/add.jpg')} style={{height: 150, width: 150, marginTop: 50}}
//                     />
//                     <TextInput style = {styles.input}
//                         underlineColorAndroid = "transparent"
//                         placeholder = "Title of Workout"
//                         placeholderTextColor = "#9a73ef"
//                         autoCapitalize = "none"
//                         onChangeText = {this.handleTitle}/>
//                     <View style={styles.hContainer}>
//                         <TouchableOpacity
//                             onPress={() => alert("get exercise api working here")} style={styles.button_login}>
//                             <Text style={styles.buttonLText}>Add Excercise</Text>  
//                         </TouchableOpacity> 
//                     </View>
//                     <Button
//                         onPress={() => this.goToChoose()}
//                         title="Cancel"
//                         color="#841584"
//                     />
//                 </View>
                
                
                
//             </ScrollView>
//         );
//     }
// }

