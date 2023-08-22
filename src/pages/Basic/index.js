import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable} from 'react-native';
import { Video } from 'expo-av';

import firebaseConfig from '../../services/firebaseConnection';

import { styles, styled } from './style';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/theme';

//Firebase
import { getDatabase, ref, onValue } from 'firebase/database';

export default function Basic() {
  
  const [open, setOpen] = useState(false);
  const [dados, setDados] = useState([]);
  const [itens, setItens] = useState([]);

  const [titulo, setTitulo] = useState([]);
  const [descrição, setDescrição] = useState([]);
  const [url, setUrl] = useState([]);

  const video = useRef(null);
  const [status, setStatus] = useState({});

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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
            };
            
            const list = [listItem];
            

            setDados(oldArray => [...oldArray, ...list].reverse());
            //console.log(list);
          })
        })
      };

      loadingDados();
  },[]);

  async function dates(key){
        const database = getDatabase(firebaseConfig);
        const niveis = ref(database, `niveis/um/${key}`);

        onValue(niveis, (snap) => {
          setTitulo(snap.val().titulo);
          setDescrição(snap.val().descrição);
          setUrl(snap.val().video);
          setOpen(true);
        })
  }
 
  return (
   <View style={styles.container}>
      <View  style={styles.header}>
        <Feather name='arrow-left' size={34} color={theme.colors.secondary} />
      </View>
      
      <View  style={styles.content}>
        <Text style={styles.title} >
        Para melhor execução dos exercícios, relaxe o corpo, posicione-se em frente ao espelho e repita três vezes cada movimento . Agora chegou a sua vez de treinar !
        </Text>

        {dados.map( (item) =>(
          <TouchableOpacity
            key={item.key}
            style={styles.button}
            onPress={() => dates(item.key)}
          >
            <Text style={styles.buttonText} > {item.key} </Text>
          </TouchableOpacity>
        ))}

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
                onPlaybackStatusUpdate={ status => {setStatus( () => status )}}
                
              />
            </Pressable>
            <Text>
              {titulo} + {url} + {isVideoLoaded}
            </Text>

          </View>
        </View>
      </Modal>
      
   </View>
  );
}
