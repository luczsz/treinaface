import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { theme } from '../../global/theme';
import { Ionicons } from '@expo/vector-icons';

export default function ListNotification({data}) {
 return (
   <View style={styles.container} >
        <Ionicons name='ios-alert-circle' size={30} color={theme.colors.primary}/>
        <View style={{width: '90%', gap: 8, } } >
            <Text numberOfLines={2} style={styles.title} > {data.mensage} </Text>
            <Text style={styles.subTitle} > {data.username} </Text>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.colors.heading,
        
        marginBottom:12,
        gap: 10,

        alignItems: 'center',
        flexDirection: 'row',
        padding: 14,
        borderRadius: 12,
    },
    title:{
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.primary,
        textAlign: 'left',
    },
    subTitle:{
        fontSize: 16,
        fontFamily: theme.fonts.text400,
        color: theme.colors.secondary100
    }
})
