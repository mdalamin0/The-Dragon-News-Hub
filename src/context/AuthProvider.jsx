import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const creatUser = (email, passowrd) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, passowrd);
  }
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  }

  const loginWithGitHub = () => {
    return signInWithPopup(auth, gitHubProvider);
  }
  const logOutUser = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unSubscribe()
    }
  }, [])

  const authData = {
    user,
    setUser,
    creatUser,
    signInUser,
    loginWithGoogle,
    loginWithGitHub,
    logOutUser,
    loading
  }
  return (
    <AuthContext value={authData}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;