import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Post from "./Post"

function SocialScreen() {
    return (
        <ScrollView style={{width:"100%"}}>
            <View style={styles.container}>
                <Post/>
                <Post />
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
})

export default SocialScreen;