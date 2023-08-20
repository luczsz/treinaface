import React, {useState, useEffect, createContext} from 'react';

import firebaseConfig from '../services/firebaseConnection';
//Async Configu

//Criando base 
import { getDatabase, ref, set, child, get } from 'firebase/database';
//Criando auth
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

//Exportando contexto
export const AuthContexto = createContext({});

export default function AuthProvaider({ children }){
    // Analisar usuario logado
    // Logando usuario
    // Cadastrando  usuario
    // Deslogando  usuario
    // Dadado offline do  usuario

    return(
        <AuthContexto.Provider>
            {children}
        </AuthContexto.Provider>
    );
};
