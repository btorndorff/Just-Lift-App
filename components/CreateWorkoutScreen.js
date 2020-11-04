import React from 'react';
import { View, StyleSheet, Text, Image, Button, TextInput, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ExercisePlaylistView from './ExercisePlaylistView'

function CreateWorkoutScreen({navigation}) {
    function getExercise(name) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic Ym9yZmY6ODgyMjI3NTEzYzk1ZDJhZTQyZTYwZDJlODEyMjM2MmM0YTUzYTcxMQ==");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };
        fetch("https://wger.de/api/v2/exercise/", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    
    let exercise = "";

    return (
        // <ScrollView style={{width: "100%"}}>
        //     <View style={styles.container}>
        //         <Image source={require('../assets/add.jpg')} style={{height: 200, width: 200, marginTop: 50}}/>
        //         <Text style={{fontSize: 30}}>Push Day</Text>
        //         <Text style={{marginBottom: 20}}>6 Excercises</Text>
        //         <ExercisePlaylistView />
        //         <View style={styles.horContainer}>
        //             <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        //                 <Text style={{textAlign: "left", minWidth: "90%", fontSize:20}}>Add Excercise</Text>
        //             </View>
        //             <Image source={require("../assets/arrow.png")} style={styles.arrow}/>
        //         </View>
        //     </View>
        // </ScrollView>
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
                /> 
                <ExercisePlaylistView />
                <View style={styles.hContainer}>
                    <TouchableOpacity
                        onPress={() => getExercise("Arnold Press")} style={styles.button_login}>
                        <Text style={styles.buttonLText}>Add Excercise</Text>  
                    </TouchableOpacity> 
                </View>
                <Button
                    onPress={() => navigation.navigate('EditScreen')}
                    title="Cancel"
                    color="#841584"
                />
            </View>
        </ScrollView>
    );
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

export default CreateWorkoutScreen;