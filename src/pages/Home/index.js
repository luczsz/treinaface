import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native'


import { styles } from './style';
import Header from '../../components/Header';
import { theme } from '../../global/theme';

export default function Home() {

  const navigate = useNavigation();
  const [count, setCount] = useState(0);

  useEffect( () => {
    async function loadCount(){
      try{
        const savedCount = await AsyncStorage.getItem('stagioInicio');
        if(savedCount !== null){
          setCount(parseInt(savedCount));
        }
      } catch (error) {
        console.error('Erro ao carregar', error);
      }
    }
    loadCount();
  },[])

  return (
   <View>
        <Header nivel={count} />
        <View style={styles.content} >

        <Text style={{fontSize: 22, fontFamily: theme.fonts.text400, color: theme.colors.secondary, marginBottom: 10,}}>
        Escolha uma categoria abaixo e vamos começar ?
        </Text>

          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.button, {backgroundColor: theme.colors.primary }]}
            onPress={ () => navigate.navigate('One')}
          >
            <Text style={styles.title} >
              básico
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.button, {backgroundColor: theme.colors.secondary }]}
          >
            <Text style={styles.title}>
              Intermediário
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.button, {backgroundColor: theme.colors.tercery }]}
          >
            <Text style={styles.title}>
              Difícil
            </Text>
          </TouchableOpacity>


        </View>
   </View>
  );
}
