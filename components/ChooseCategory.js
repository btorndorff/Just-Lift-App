import React , {usestate} from 'react';
import { View, StyleSheet, Text, Image, Button, TextInput, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const ChooseCategory = ({route}) => {
    //const [exercise, setExercise] = useState('AboutReact');
  
    return (
        <ScrollView style={{width: "100%"}}>
            <View style={styles.container}>
            <TouchableOpacity
                //val is array of id and name for exercise categories
                onPress={() =>  console.log(route.params.categories) }
                style={styles.button_login}>
                <Text style={styles.buttonLText}>Select Category</Text>  
            </TouchableOpacity>
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