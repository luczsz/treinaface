import React, { useState, useEffect, useRef, useContext } from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable, ActivityIndicator, ScrollView, FlatList} from 'react-native';
import { Video } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from '../../contexts/auth';


import { styles, styled } from './style';
import { Feather, Entypo } from '@expo/vector-icons';
import { theme } from '../../global/theme';
import ListSelect from '../../components/ListSelect';

//Firebase
import firebaseConfig from '../../services/firebaseConnection';
import { getDatabase, ref, onValue, set } from 'firebase/database';

import { useNavigation } from '@react-navigation/native';

const blueBg = theme.colors.primary;

export default function Basic() {

  const navigate = useNavigation();
  const { user } = useContext(AuthContext);
  const uid = user.id;
    
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [dados, setDados] = useState([]);
  const [itens, setItens] = useState([]);

  const [count, setCount] = useState(0);

  const [titulo, setTitulo] = useState([]);
  const [descrição, setDescrição] = useState([]);
  const [url, setUrl] = useState([]);

  const video = useRef(null);
  const [status, setStatus] = useState({});

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(true);

  const phrafe = typeof descrição === 'string' ? descrição.split(';') : [];


  function handlePlayer(){
    status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync()
  }

  useEffect( () => {
      async function loadingDados(){
        const database = getDatabase(firebaseConfig);
        const niveis = ref(database, 'niveis/um');

        onValue(niveis, (snap) => {
          setDados([]);

          snap.forEach( (item) => {
            const listItem = {
              key: item.key,
              titulo: item.val().titulo,
              descrição: item.val().descrição,
              url: item.val().video,
              status: item.val().status,
            };
            
            const list = [listItem];
            

            setDados(oldArray => [...oldArray, ...list].reverse());
            setLoading(false);
            //console.log(list);
          })
        })
      };

      async function loadCount(){
        try{
          const savedCount = await AsyncStorage.getItem('clickCount');
          if(savedCount !== null){
            setCount(parseInt(savedCount));
          }
        } catch (error) {
          console.error('Erro ao carregar', error);
        }
      };

      loadingDados();
      loadCount();
  },[]);

  async function dates(key){
        const database = getDatabase(firebaseConfig);
        const niveis = ref(database, `niveis/um/${key}`);

        onValue(niveis, (snap) => {
          setTitulo(snap.val().titulo);
          setDescrição(snap.val().descrição);
          setUrl(snap.val().video);
          setOpen(true);
          setTime(true);
        })
  }

  // ESTAGIOS DAS SELEÇÕES
  function transfor(status){
    if(status.status === count){
      setOpenAlert(true);
      return;
    }{
      dates(status.key);
      return;

    }
  }

  async function add(){
    const database = getDatabase(firebaseConfig);
    const databaseRef = ref(database, 'progress/' + uid );

    const data ={
      status: 1,
    };

    set(databaseRef, data)
    .then( () => {
      setOpen(false);
    })
    .catch((error) => {
      alert('Houve um erro ao atualizar o status, por favor verifique' + error);
    })
  }

  //fazendo a contagem
  async function startCount(){
    try{
      const newCount = count + 1;
      setCount(newCount);
      setOpen(false);

      {count == 2? estagioInicio() : setOpenAlert(true)  }


      await AsyncStorage.setItem('clickCount', newCount.toString());
    } catch (error) {
      console.error('Erro ao contar', error);
    }
  };

  //Concluindo o nível
  async function estagioInicio(){
    try{
      const newCount = count + 1;

      await AsyncStorage.setItem('stagioInicio', newCount.toString());
    } catch (error) {
      console.error('Erro ao contar', error);
    }
  };

  async function remove(){
    AsyncStorage.removeItem('clickCount')
  .then(() => {
    console.log('Item removido com sucesso.');
  })
  .catch((error) => {
    console.error('Ocorreu um erro ao remover o item:', error);
  });
  }

  setTimeout(() => {
    setTime(false);
  }, 15000);
 
  return (
   <View style={styles.container}>
      <View  style={styles.header}>
        <TouchableOpacity onPress={ () => /* remove() */  navigate.goBack()  } >
          <Feather name='arrow-left' size={34} color={theme.colors.secondary} />
        </TouchableOpacity>
          <View style={styles.progress} >
            <Text style={styles.progressTitle}>NÍVEL</Text>
            <Text style={styles.progressSubTitle}> {count} </Text>

          </View>
      </View>
      
      <View  style={styles.content}>
        <Text style={styles.title} >
        Para melhor execução dos exercícios, relaxe o corpo, posicione-se em frente ao espelho e repita três vezes cada movimento . Agora chegou a sua vez de treinar ! 
        </Text>

        {loading ? <ActivityIndicator color={theme.colors.secondary} size='large' /> : <></>}
      
        {/* {dados.map( (item) =>(
          const 
          
          <TouchableOpacity
          key={item.key}
          style={styles.button}
          onPress={() => dates(item.key)}
        >
          <Text style={styles.buttonText} > {item.key} </Text>
        </TouchableOpacity>

        ))} */}

        <FlatList
          showsVerticalScrollIndicator={false}
          data={dados}
          keyExtractor={(item) => item.id}
          renderItem={ ({item}) => <ListSelect data={item} infor={transfor} color={blueBg}/> }
        />
      


      </View>

      {/* EXERCICIOS */}
      <Modal
        visible={open}
        animationType='fade'
        onRequestClose={ () => setOpen(false)}     
      >

        <View style={styled.modalContainer} >
          <View style={styled.modalHeader}>
            <TouchableOpacity
              onPress={ () => setOpen(false)}
            >
              <Feather name='arrow-left-circle' size={34} color={theme.colors.primary} />
            </TouchableOpacity>
          </View>
          <View style={styled.modalContent} >
            
              <Pressable onPress={handlePlayer} style={styled.modalUrl} >
        
              <Video
                ref={video}
                shouldPlay={false}
                isMuted={false}
                source={{ uri: url }}
                style={{ width: '100%', height: '100%', borderRadius: 8, }}
                resizeMode="cover"
                isLooping
                onPlaybackStatusUpdate={ status => {[setStatus( () => status ),]}
              }
                
              />
              
              </Pressable>

              
            <ScrollView>
              <Text style={styled.description} >
                {titulo}
              </Text>
              <View>
              {phrafe.map((phrase, index) => (
                  <Text key={index} style={styled.description} >{phrase}</Text>
                ))}
              </View>

                {time?
                <TouchableOpacity
                  style={styled.finishBack}
                  activeOpacity={1}
                >
                    {count === 3? 
                      <Text style={styled.textFinishBack}>CARREGANDO...</Text>
                      :
                      <Text style={styled.textFinishBack}>CARREGANDO...</Text>
                    } 


                    
                </TouchableOpacity>
                :
                <TouchableOpacity
                  style={styled.finish}
                  activeOpacity={0.8}
                  onPress={ () => {count === 3? alert('ok') : startCount() }}
                >
                    
                    {count === 2? 
                      <Text style={styled.textFinish}>FINALIZAR...</Text>
                      :
                      <Text style={styled.textFinish}>PROSSEGUIR...</Text>
                    } 
                </TouchableOpacity>
                }
                             

            </ScrollView>

          </View>
        </View>
      </Modal>

      {/* ALERTA */}
      <Modal
        visible={openAlert}
        animationType='none'
        onRequestClose={ () => setOpenAlert(false)}  
        transparent={true}   
      >
          <View style={styled.containerAlert} >
            <View style={styled.contentAlert} >

              <View style={styled.headerAlert} >
              <TouchableOpacity
                onPress={() => setOpenAlert(false)}
              >
                <Feather name='x-circle' size={34} color={'#f5f5f5'} />
              </TouchableOpacity>
              </View>

              <View style={styled.textAlert} >
                  <Text style={styled.titleAlert} >
                  Parabéns, você concluiu o primeiro nível.
                  </Text>
                  {count == 1? 
                    <Entypo name='progress-one' size={44} color={'#f5f5f5'} />
                    :
                    <></>
                  }
                  {count == 2?
                    <Entypo name='progress-two' size={44} color={'#f5f5f5'} />
                    :
                    <></>
                  }
                  {count == 3?
                    <Entypo name='progress-full' size={44} color={'#f5f5f5'} />
                    :
                    <></>
                  }
              </View>
            
            </View>

          </View>
      </Modal>
      
   </View>
  );
}
