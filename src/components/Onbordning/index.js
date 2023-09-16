import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { theme } from '../../global/theme';

export default function Onbordning({ item }) {
 return (
    <View style={[styles.slide, {backgroundColor: item.backgroundColor}]}>
        <Image source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
  );
}

export const styles = StyleSheet.create({
    slide:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
      resizeMode: 'cover',
      width: '100%',
      height: '73%',  
    },

    title:{
        width: '80%',
        color: '#f5f5f5',
        fontSize: 35,
        marginTop: 10,
        fontFamily: theme.fonts.title700,
    },
    text:{
        width: '80%',
        color: '#f5f5f5',
        fontSize: 22,
        fontFamily: theme.fonts.text400,
        marginTop: 8,
    }
})
