import React, {useState, useEffect, useContext} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebaseConfig from '../../services/firebaseConnection';

import { styles } from './style';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/theme';

import { AuthContext } from '../../contexts/auth';

//Firebase
import { getDatabase, ref, set, get } from 'firebase/database';

export default function Registre() {

  const navigation = useNavigation();
  const { user } = useContext(AuthContext);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [password, setPassword] = useState('');
  const [logs, setLogs] = useState(false);

  useEffect( () => {
    async function loadDados(){
      const database = getDatabase(firebaseConfig);
      const databaseRef = ref(database, 'usuarios/' + user.id);

      get(databaseRef)
      .then((snap) => {
        if(snap.exists()){
          const userData = snap.val();
          setNome(userData.nome);
          setEmail(userData.email);
          setSenha('*****');
          setPassword(userData.senha);

        } else{
          setEmail('Email não encontrado');
          setNome('Nome não encontrado');
          setSenha('*****');
        }
      })
      .catch((error) => {
        console.log('Erro ao buscar dados', error);
      })

    }
    loadDados();

  },[]);

  function editable(){
    setSenha(password);
    setLogs(true);
    
  }

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
              value={nome}
              onChangeText={ (text)=> setNome(text)}
              placeholderTextColor={'#b5b5b5'}
            />
        </View>
        
        <View style={styles.input} > 
            <Feather name='mail' size={30} color={theme.colors.primary} />
            <TextInput
              placeholder='Seu email...'
              autoCapitalize='none'
              autoCorrect={false}
              value={email}
              onChangeText={ (text)=> setEmail(text)}
              placeholderTextColor={'#b5b5b5'}
            />
        </View>

        <View style={[styles.input, styles.password]} > 
            <View style={{justifyContent: 'center', flexDirection: 'row', gap: 10,}}>
            <Feather name='lock' size={30} color={theme.colors.primary} />
            <TextInput
              placeholder='Sua senha...'
              autoCapitalize='none'
              textContentType='password'
              autoCorrect={false}
              value={senha}
              onChangeText={ (text)=> setSenha(text)}
              placeholderTextColor={'#b5b5b5'}
            />
            </View>

            <TouchableOpacity onPress={ () => editable()} >
              {logs ?
                <Feather name='eye' size={30} color={theme.colors.primary} />
                :
                <Feather name='eye-off' size={30} color={theme.colors.primary} />
              }
            </TouchableOpacity>
        </View>
        <Text style={styles.alertas} >
          Atenção, sua senha ela não será alterada aqui.
        </Text>

      </View>


      {/* <View  style={styles.buttons}>
        <TouchableOpacity
          style={styles.submit}
          activeOpacity={0.8}
        >
          <Text style={styles.submitText}>
            E d i t a r
          </Text>
        </TouchableOpacity>
      </View> */}

   </View>
  );
}
