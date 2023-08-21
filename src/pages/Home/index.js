import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native'


import { styles } from './style';
import Header from '../../components/Header';
import { theme } from '../../global/theme';

export default function Home() {

  const navigate = useNavigation();

  return (
   <View>
        <Header/>
        <View style={styles.content} >

        <Text style={{fontSize: 22, fontWeight: '500', color: theme.colors.secondary, marginBottom: 10,}}>
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
              Intermediario
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
