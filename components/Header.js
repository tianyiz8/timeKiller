import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {
  return (
    <View style = {styles.header}>
         <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        flex:1,
        backgroundColor:'blue',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 1
    },
    headerTitle: {
        color: 'white',
        fontSize: 23,
        fontWeight:'bold'
    }
});

export default Header;