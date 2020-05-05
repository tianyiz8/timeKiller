import * as React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style = {styles.title}>COVID19 TimeKiller</Text>
        <Image source = {require('./pictures/guess.jpg')} style = {styles.images} ></Image>
        <View style = {styles.buttons}>
            <Button title = 'Guessing Number!' onPress={() => navigation.navigate('Number')}/>
        </View>
        <Image source = {require('./pictures/icon.png')} style = {styles.images}></Image>
        <View style = {styles.buttons}>
            <Button title = 'Reaction!' color = 'red' onPress={() => navigation.navigate('Reaction')}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    buttons: {
        marginVertical: '5%',
        width: 200
    },
    title: {
        fontSize: 40,
        marginBottom: '5%',
        fontFamily: 'Roboto'
    },
    images: {
        width: 300,
        height: 200
    },
    particle: {
        zIndex: -1
    },
    container: {
        flex: 1, 
        alignItems: 'center',
        zIndex: 100
    }
});