import { createContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

export const LoginContext = createContext();

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  return result;
}

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function loginAction(key, value) {
    try {
      await SecureStore.setItemAsync(key, value);
      console.log(key, value); //
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function logoutAction(key) {
    try {
      await SecureStore.deleteItemAsync(key);
      console.log(key); //
      setIsLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getValueFor("token").then((data) => {
      console.log(data);
      if (data) {
        setIsLoggedIn(true);
      }
    });
  }, []);

  return (
    <LoginContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, loginAction, logoutAction }}
    >
      {children}
    </LoginContext.Provider>
  );
};
