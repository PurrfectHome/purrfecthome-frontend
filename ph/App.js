import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainStack from "./navigators/MainStack";
import { LoginProvider } from "./context/LoginContext";
import { ApolloProvider } from "@apollo/client";
import client from "./config/apollo";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <LoginProvider>
        <MainStack />
      </LoginProvider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
