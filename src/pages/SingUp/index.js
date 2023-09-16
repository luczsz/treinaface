import React, {useState, useContext} from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';
import { theme } from '../../global/theme';
import { Feather } from '@expo/vector-icons';


import { AuthContext } from '../../contexts/auth';

export default function SingUp() {

  
  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  
  const [ mensage, setMensage ] = useState('');
  
  const [load,setLoad] = useState(false);
  const { SingUp } = useContext(AuthContext);
  
  function cadastrar(){
      SingUp( nome, email, senha );
    }


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
            <Text style={{color: theme.colors.secondary, fontSize: 20, fontFamily: theme.fonts.title700}}  >Voltar</Text>
        </View>
        
        <View style={styles.content} >

          <View style={styles.inputs} > 
            <Feather name='user' size={25} color={theme.colors.secondary} />
            <TextInput
              placeholder='Seu nome...'
              autoCapitalize='none'
              autoCorrect={false}
              value={nome}
              onChangeText={ (text)=> setNome(text)}
              placeholderTextColor={'#b5b5b5'}
            />
          </View>
          <View style={styles.inputs} > 
            <Feather name='mail' size={25} color={theme.colors.secondary} />
            <TextInput
              placeholder='Seu email...'
              autoCapitalize='none'
              autoCorrect={false}
              value={email}
              onChangeText={ (text) => setEmail(text)}
              placeholderTextColor={'#b5b5b5'}
            />
          </View>
          <View style={styles.inputs} > 
            <Feather name='key' size={25} color={theme.colors.secondary} />
            <TextInput
              placeholder='Sua senha...'
              keyboardType={'numeric'}
              secureTextEntry={true}
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={ (text) => setSenha(text)}
              placeholderTextColor={'#b5b5b5'}
            />
          </View>

        </View>

        <View style={styles.buttons} >
          <TouchableOpacity
            style={styles.submit}
            activeOpacity={0.6}
            onPress={ () => cadastrar()}
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
