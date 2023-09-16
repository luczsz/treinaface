import React, {useEffect, useState, useContext} from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

import { styles } from './style';
import { Feather } from '@expo/vector-icons';
import ProfileIdoso from '../../assets/7.jpg';
import { theme } from '../../global/theme';
import { TouchableOpacity } from 'react-native';

export default function Header({nivel, aviso}) {

    const { user } = useContext(AuthContext);
    const navigation = useNavigation();

    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
      const currentDate = new Date();
      const formatted = formatDate(currentDate);
      setFormattedDate(formatted);
    }, []);


    const formatDate = (date) => {
        const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        const months = [
          'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
        ];
      
        const dayOfWeek = daysOfWeek[date.getDay()];
        const day = date.getDate();
        const month = months[date.getMonth()];
      
        return `${dayOfWeek}, ${day} ${month}`;
    };

 return (
   <View style={styles.container} >
        <View style={styles.content} >
            <Image
                source={ProfileIdoso}
                style={styles.profile}
            />
            
            <View style={{ flex: 1, paddingLeft: 10, height: 60}} >
                <Text style={styles.username} >Olá, {user.nome} </Text>
                <Text style={styles.usernivel} >
                  {nivel !== 1? 'Nível 1 - Concluido' : 'Nível 1 - em Progresso' }
                </Text>
                
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={ () => aviso()}
              style={{marginRight: 10,}}
            >
              <Feather name='alert-octagon' size={34} color={theme.colors.secondary}/>
            </TouchableOpacity>
            
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={ () => navigation.navigate('Notificar')}
            >
              <Feather name='bell' size={34} color={theme.colors.secondary}/>
            </TouchableOpacity>
            
        </View>
        <View style={styles.clock} >
            <Text style={{ fontSize: 22, fontFamily:theme.fonts.title700, color: theme.colors.secondary}} > HOJE</Text>
            <Text style={{ fontSize: 18, fontFamily: theme.fonts.text400}} > {formattedDate} </Text>

        </View>
   </View>
  );
}
