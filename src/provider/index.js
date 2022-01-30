import React, { useState, useEffect } from "react";
import { ThemeContext } from "../service/helpers";
import { Spinner } from "../components/common";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config'
import { supplier } from '../schema'

export const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ ...supplier, phoneNumberPrimary: user.phoneNumber, uid: user.uid })
      }
      setLoading(false)
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ user, setUser }}>
      {loading ? <Spinner /> : children}
    </ThemeContext.Provider>
  );
};
