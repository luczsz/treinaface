import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Progress() {
 return (
   <View style={styles.container} >
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }} >
            Olá Usuario, pagina em desenvolvimento.
        </Text>
   </View>
  );
}

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
