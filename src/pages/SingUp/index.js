import React from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';
import { theme } from '../../global/theme';
import { Feather } from '@expo/vector-icons';

export default function SingUp() {
  
  const navigation = useNavigation();

  return (
   <KeyboardAvoidingView style={styles.container}>
        <View style={styles.header} >
          <TouchableOpacity 
            style={styles.backButton}
            onPress={ () => navigation.goBack() }
          >
          
              <Feather
                name='arrow-left-circle'
                size={34}
                color={ theme.colors.secondary}
              />

          </TouchableOpacity>
            <Text style={{color: theme.colors.secondary, fontSize: 20, fontWeight: 'bold'}}  >Voltar</Text>
        </View>
        
        <View style={styles.content} >

          <View style={styles.inputs} > 
            <Feather name='user' size={25} color={theme.colors.secondary} />
            <TextInput
              placeholder='Nome'
              placeholderTextColor={'#b5b5b5'}
            />
          </View>
          <View style={styles.inputs} > 
            <Feather name='mail' size={25} color={theme.colors.secondary} />
            <TextInput
              placeholder='Email'
              placeholderTextColor={'#b5b5b5'}
            />
          </View>
          <View style={styles.inputs} > 
            <Feather name='key' size={25} color={theme.colors.secondary} />
            <TextInput
              placeholder='Senha'
              placeholderTextColor={'#b5b5b5'}
            />
          </View>

        </View>

        <View style={styles.buttons} >
          <TouchableOpacity
            style={styles.submit}
            activeOpacity={0.6}
          >
            <Text style={styles.submitText} >C a d a s t r a r</Text>
          </TouchableOpacity>
          
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10, gap: 8,}} >
            <Text style={styles.title} >Já tem uma conta? </Text>
              <TouchableOpacity
                activeOpacity={0.6}
              >
                  <Text style={styles.subTitle} >Entre !</Text>
              </TouchableOpacity>
          </View>
        </View>
   </KeyboardAvoidingView>
  );
}
