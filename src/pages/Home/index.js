import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native'


import { styles, styled } from './style';
import Header from '../../components/Header';
import { theme } from '../../global/theme';

export default function Home() {

  const navigate = useNavigation();
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);

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

  function alerts(){
    setOpen(true);
  }

  return (
   <View>
        <Header nivel={count} aviso={alerts} />
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
            onPress={ () => navigate.navigate('Two')}
          >
            <Text style={styles.title}>
              Intermediário
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.button, {backgroundColor: theme.colors.tercery }]}
            onPress={ () => navigate.navigate('Tree')}
          >
            <Text style={styles.title}>
              Difícil
            </Text>
          </TouchableOpacity>

          <Modal
            transparent={true}
            visible={open}
            animationType='fade'
            onRequestClose={ () => setOpen(false)}
          >
              <TouchableOpacity onPress={() => setOpen(false)} style={styled.containerModal} > 
                <View style={styled.contentModal} >
                <Text style={styled.title} >ATENÇÃO USUARIO: {`\n`}</Text>
                  <Text style={styled.title} >  
                  - Esse aplicativo não substitui ou dispensa
                    as sessões de fonoaudiologia, mas permite
                    auxiliar o usuário no processo terapêutico
                    e de fortalecimento muscular.{`\n`}
                  </Text>
                  <Text style={styled.title} >
                  - Em caso de duvidas, é recomendado
                    buscar ajuda profissional 
                  </Text>
                </View>
              </TouchableOpacity>
          </Modal>


        </View>
   </View>
  );
}
