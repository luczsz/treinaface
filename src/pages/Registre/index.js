import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/theme';

export default function Registre() {

  const navigation = useNavigation();

 return (
   <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={ () => navigation.goBack()}
        >
          <Feather name='arrow-left-circle' size={30} color={theme.colors.primary}/>
        </TouchableOpacity>
        <Text style={styles.title}> SEUS DADOS</Text>

      </View>

      <View style={styles.content} >
        <View style={styles.input} > 
            <Feather name='user' size={30} color={theme.colors.primary} />
            <TextInput
              placeholder='Seu nome...'
              autoCapitalize='none'
              autoCorrect={false}
             /*  value={nome}
              onChangeText={ (text)=> setNome(text)} */
              placeholderTextColor={'#b5b5b5'}
            />
        </View>
        
        <View style={styles.input} > 
            <Feather name='mail' size={30} color={theme.colors.primary} />
            <TextInput
              placeholder='Seu email...'
              autoCapitalize='none'
              autoCorrect={false}
             /*  value={nome}
              onChangeText={ (text)=> setNome(text)} */
              placeholderTextColor={'#b5b5b5'}
            />
        </View>

        <View style={[styles.input, styles.password]} > 
            <View style={{justifyContent: 'center', flexDirection: 'row', gap: 10,}}>
            <Feather name='lock' size={30} color={theme.colors.primary} />
            <TextInput
              placeholder='Sua senha...'
              autoCapitalize='none'
              autoCorrect={false}
             /*  value={nome}
              onChangeText={ (text)=> setNome(text)} */
              placeholderTextColor={'#b5b5b5'}
            />
            </View>
            <Feather name='eye-off' size={30} color={theme.colors.primary} />
        </View>
        <Text style={styles.alertas} >
          Atenção, sua senha ela não será alterada aqui.
        </Text>

      </View>


      <View  style={styles.buttons}>
        <TouchableOpacity
          style={styles.submit}
          activeOpacity={0.8}
        >
          <Text style={styles.submitText}>
            E d i t a r
          </Text>
        </TouchableOpacity>
      </View>

   </View>
  );
}
