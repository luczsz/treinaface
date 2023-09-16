import React, {useContext, useState} from 'react';
import { View, Text, ImageBackground, TextInput, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import { styles } from './style';
import { theme } from '../../global/theme';
import BgImage from '../../assets/6.png';

import { AuthContext } from '../../contexts/auth';

export default function SingIn() {
 
  const navigation = useNavigation();
  const { SingIn, loading } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
 

  function Logar(){
    if(email == ''){
      alert('sem dados');
      return;
    }{
      if(senha == ''){
        alert('sem dados')
        return; 
      }{
        SingIn(email, senha);

      }
    }
  }



  return (
   <ImageBackground
      source={BgImage}
      style={styles.container}
   >
        <KeyboardAvoidingView style={styles.card} >

            <View style={{flexDirection: 'row',marginBottom: 10, alignItems:'center' }}>
                <Text style={styles.subTitle} >TREINA</Text>
                <Text style={styles.title} >FACE</Text>
            </View>



            <View style={styles.inputs}>
              <Feather name='user' size={25} color={theme.colors.secondary} />
              <TextInput
                placeholder='Email'
                autoCorrect={false}
                autoCapitalize='none'
                value={email}
                onChangeText={ (text) => setEmail(text)}
                placeholderTextColor={'#c4c4c4'}
              />
            </View>



            <View style={styles.inputs}>
            <Feather name='key' size={25} color={theme.colors.secondary} />
              <TextInput
                placeholder='Senha'
                keyboardType={'numeric'}
                secureTextEntry={true}
                autoCapitalize='none'
                autoCorrect={false}
                value={senha}
                onChangeText={(text) => setSenha(text)}
                placeholderTextColor={'#c4c4c4'}
                />
            </View>

                <Text style={styles.foget} >Esqueci a senha</Text>
            
            <TouchableOpacity 
              style={styles.singinBnt}
              onPress={ () => {
                //setLoading(false);
                Logar();
              }}
            >

                {loading ? 
                  
                  <Text style={styles.bntText} >A C E S S A R</Text>
                  
                  :

                  <ActivityIndicator
                    size={25}
                    color={theme.colors.white090}
                  />
              
                }

            </TouchableOpacity>

            <View style={{flexDirection: 'row', gap: 8, marginTop: 10,}}>
                <Text style={{fontFamily: theme.fonts.text400,}}>Ainda não tem uma conta? </Text>
                <TouchableOpacity 
                  activeOpacity={0.8}
                  onPress={ () => navigation.navigate('Cadastro')}
                >
                  <Text style={styles.singon} >
                    Cadastre-se
                  </Text>
                </TouchableOpacity>
            </View>


        </KeyboardAvoidingView>
   </ImageBackground>
  );
}
