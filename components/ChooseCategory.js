import React , {useState} from 'react';
import { View, StyleSheet, Text, Image, Button, TextInput, TouchableOpacity, } from 'react-native';
import { ScrollView} from 'react-native-gesture-handler';
import {Picker} from '@react-native-community/picker';
import ExercisePlaylistView from './ExercisePlaylistView';
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
  // Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const ChooseCategory = ({route, navigation}) => {
    const [Category, setCategory] = useState({id: 10, name: "Abs"});
    const [Exercises, setExercises] = useState([]);


    function getExercises(id) {
      var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic Ym9yZmY6ODgyMjI3NTEzYzk1ZDJhZTQyZTYwZDJlODEyMjM2MmM0YTUzYTcxMQ==");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };
      return fetch("https://wger.de/api/v2/exercise/?language=2&category=" + id + "&status=2", requestOptions)
        .then(r => r.json().then(data => ({
          status:r.status,
          body:data
        })))
        .then((obj) => {
          let arr = obj.body.results;
          return arr;
        })
    }

    

    const items = route.params.categories.map(x => <Picker.Item label={x.name} value={x.id} key={x.id} />)

    return (
        <ScrollView style={{width: "100%"}}>
            <View style={styles.container}>
              <Text style={{fontSize: 30}}>Select A Muscle</Text>
              <Picker
                selectedValue={Category}
                style={{height: 50, width: 100, marginBottom: 150}}
                onValueChange={(itemValue, itemIndex) => {
                  setCategory(itemValue);
                  getExercises(itemValue)
                    .then(exc => {
                      //console.log(exc)
                      setExercises(exc)
                    });
                }
              }>
                <Picker.Item label="" value={10} key={-1} />
                {items}
              </Picker>
              <View style={styles.container}>
                {Exercises.map(x => 
                  <TouchableOpacity
                    onPress={() =>  navigation.navigate('ExerciseNums', {exercise: x})} 
                    key={x.id}
                    style={styles.container}>
                      <ExercisePlaylistView name={x.name} reps={0} sets={0} weight={0}/>
                  </TouchableOpacity>
                )}
              </View>
            </View>
        </ScrollView>
    );
  };

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

export default ChooseCategory;