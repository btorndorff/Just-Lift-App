import React from 'react';
import { View, StyleSheet, Text, Image, Button, TextInput, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ExercisePlaylistView from './ExercisePlaylistView'


function CreateWorkoutScreen({navigation}) {
    function getExercise() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic Ym9yZmY6ODgyMjI3NTEzYzk1ZDJhZTQyZTYwZDJlODEyMjM2MmM0YTUzYTcxMQ==");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };
        //fetch("https://wger.de/api/v2/exercise/?language=2&exercisecategory=8&status=2", requestOptions)
        // fetch("https://wger.de/api/v2/exercisecategory/", requestOptions)
        //     .then(response => response.json())
        //     .then(result => (result.results))
        //     .catch(error => console.log('error', error));

        return fetch("https:wger.de/api/v2/exercisecategory/", requestOptions)
            .then(r => r.json().then(data => ({
                status:r.status,
                body:data
            })))
            .then((obj) => {
            let arr = obj.body.results;
            return arr; //array of exercise categories (arms, abs, chest, ...)
          })
    
    }
    
    
    let exercise = "";

    return (
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
                        //val is array of id and name for exercise categories
                        onPress={() => getExercise().then((val) => {
                            navigation.navigate('ChooseCategory', {categories: val}) 
                        })}
                            
                            // getExercise().then((val)=>{
                            // for(let i = 0; i <val.length; i++ ){
                            //     console.log(val[i].name, val[i].id);
                            // }
                            // })} 
                        
                        style={styles.button_login}>
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