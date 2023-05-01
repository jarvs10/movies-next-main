import { createContext, useContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import { auth } from '@/pages/firebase';

export const MovieContext = createContext();

export const movieandseries = () => {
  const context = useContext(MovieContext);

  return context;
}

const MovieContextProvider = ({children}) => {

  const [favorito, setFavorito] = useState([]);

  const [user, setUser] = useState(null);

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    })
  }, [])

  const logout = () => {
    return signOut(auth);
  }

  return (
    <MovieContext.Provider value={{favorito, setFavorito, register, login, logout, user}}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieContextProvider