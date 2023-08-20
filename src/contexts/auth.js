import React, {useState, useEffect, createContext} from 'react';

import firebaseConfig from '../services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Criando base 
import { getDatabase, ref, set, child, get } from 'firebase/database';
//Criando auth
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

//Exportando contexto
export const AuthContext = createContext({});

export default function AuthProvaider({ children }){

    const [ user, setUser ] = useState(null);
    const [loading, setLoading] = useState(true);
    const [ loadingAuth, setLoadingAuth ] = useState(false);


    // Analisar usuario logado
    // Logando usuario
    async function SingIn(email, senha){
        setLoading(false);

        signInWithEmailAndPassword(getAuth(firebaseConfig), email, senha)
        .then((userCredential) => {
            const user = userCredential.user;

            const database = getDatabase(firebaseConfig);
            const databaseRef = ref(database, 'usuarios/' + user.uid); // Referência para o nó do usuário

            get(databaseRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              const userData = snapshot.val();
              let data = {
                nome: userData.nome,
                email: userData.email,
                id: userData.id,
              };
              setUser(data);
              //storageUser(data);
              setLoading(true);

            } else {
              console.log('Usuário não encontrado');
            }
          })
          .catch((error) => {
            console.log('Erro ao buscar dados:', error);
          });

      })
      .catch((error) => {
        // Ocorreu um erro no login
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Erro no login:', errorCode, errorMessage);
      });

    }

    // Cadastrando  usuario
    async function SingUp(nome, email, senha){
        createUserWithEmailAndPassword(getAuth(firebaseConfig), email, senha)
        .then((userCredential) => {
            const userId = userCredential.user.uid;

            const database = getDatabase(firebaseConfig);
            const databaseRef = ref(database, 'usuarios/' + userId);

            const data ={
                nome: nome,
                email: email,
                senha: senha,
                id: userId,
            };

            set(databaseRef, data)
            .then( () => {
                let data = {
                    nome: nome,
                    email: email,
                    senha: senha,
                    id: userId
                };
                setUser(data);
            })
            .catch((error) => {
                alert('Erro ao salvar dados:', error);
              });
        })
        .catch((error) => {
            alert('Erro ao salvar dados:', error);
          });
     
    }

    // Deslogando  usuario
        

    // Dadado offline do  usuario

    return(
        <AuthContext.Provider value={{ signed: !user, user, loading, SingIn, SingUp  }}>
            {children}
        </AuthContext.Provider>
    );
};
