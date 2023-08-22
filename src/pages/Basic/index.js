import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal} from 'react-native';

import { styles } from './style';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/theme';

export default function Basic() {
  
  const [open, setOpen] = useState(false);
 
  return (
   <View style={styles.container}>
      <View  style={styles.header}>
        <Feather name='arrow-left' size={34} color={theme.colors.secondary} />
      </View>
      
      <View  style={styles.content}>
        <Text style={styles.title} >
        Para melhor execução dos exercícios, relaxe o corpo, posicione-se em frente ao espelho e repita três vezes cada movimento . Agora chegou a sua vez de treinar !
        </Text>

        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText} >LABIOS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText} >BOCHECHAS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText} >LÍNGUA</Text>
        </TouchableOpacity>

      </View>

      {/* EXERCICIOS */}
      <Modal
        visible={open}
        animationType='fade'
        onRequestClose={ () => setOpen(false)}     
      >
        <Text>
          nivel 1s
        </Text>
      </Modal>
      
   </View>
  );
}
