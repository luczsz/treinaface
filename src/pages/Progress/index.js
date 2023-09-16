import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './style';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { theme } from '../../global/theme';

export default function Progress() {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

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
   <View style={styles.container} >
        <View style={styles.header} >
            <MaterialCommunityIcons name='progress-star' size={34} color={theme.colors.secondary} />

            <Text style={{ fontSize: 22, fontFamily: theme.fonts.title700, color: theme.colors.secondary }} >
                Seu progresso
            </Text>
        </View>
        <View style={styles.content} >
            <View style={styles.progresed}>
                {count == 3?
                    <Entypo name='progress-full' size={34} color={theme.colors.primary} />
                    : 
                    <Entypo name='progress-one' size={34} color={theme.colors.primary} />

                }
                <Text style={styles.title} >
                    nível 1
                </Text>
                <Text style={styles.subTitle} >
                {count == 3?
                    ' - Concluido'
                    : 
                    '- Em progresso'
                }
                </Text>
            </View>

            <View style={styles.progresed}>
                {count2 == 3?
                    <Entypo name='progress-full' size={34} color={theme.colors.secondary} />
                    : 
                    <Entypo name='progress-two' size={34} color={theme.colors.secondary} />
                }
                <Text style={styles.title} >
                    nível 2
                </Text>
                <Text style={styles.subTitle} >
                {count2 == 3?
                    ' - Concluido'
                    : 
                    '- Em progresso'
                }
                </Text>
            </View>
            
            <View style={styles.progresed}>
                {count3 == 3?
                    <Entypo name='progress-full' size={34} color={theme.colors.tercery} />
                    : 
                    <Entypo name='progress-one' size={34} color={theme.colors.tercery} />

                }
                <Text style={styles.title} >
                    nível 3
                </Text>
                <Text style={styles.subTitle} >
                {count3 == 3?
                    ' - Concluido'
                    : 
                    '- Em progresso'
                }
                </Text>
            </View>


        </View>
   </View>
  );
}
