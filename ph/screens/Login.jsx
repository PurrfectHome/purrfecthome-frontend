import { useContext, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginContext } from "../context/LoginContext";
import { gql, useMutation } from "@apollo/client";

const LOGIN = gql`
  mutation Mutation($username: String, $password: String) {
    login(username: $username, password: $password) {
      accessToken
    }
  }
`;

export default function Login({ navigation }) {
  const { loginAction } = useContext(LoginContext);
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const [login, { data, loading, error }] = useMutation(LOGIN);

  const handleChange = (name, text) => {
    console.log(text);
    setInput({ ...input, [name]: text });
  };

  const handleLogin = async () => {
    try {
      if (loading) return;
      console.log(input);
      const { data } = await login({
        variables: {
          username: input.username,
          password: input.password,
        },
      });
      console.log(data);
      await loginAction("token", data.login.accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data, error, loading);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#DBE4FA" }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../img/logo.png")}
            style={{ marginTop: 50, width: 200, height: 200, marginBottom: 0 }}
          />
          <Text
            style={{
              marginTop: 10,
              fontSize: 30,
              color: "#8596BE",
              fontWeight: "bold",
            }}
          >
            LOGIN
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 20 }}
        >
          <View style={styles.icon}>
            <Image
              style={{ width: 29, height: 26 }}
              source={require("../img/cat.png")}
            />
          </View>

          <TextInput
            value={input.username}
            style={styles.textInput}
            placeholder="username"
            onChangeText={(text) => handleChange("username", text)}
          />
        </View>
        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 20 }}
        >
          <View style={styles.icon}>
            <Image
              style={{ width: 29, height: 26 }}
              source={require("../img/Lock.png")}
            />
          </View>

          <TextInput
            value={input.password}
            style={styles.textInput}
            placeholder="password"
            onChangeText={(text) => handleChange("password", text)}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.logButton} onPress={handleLogin}>
          {loading ? (
            <ActivityIndicator color="#DC5B93" />
          ) : (
            <Text style={styles.loginText}>Login</Text>
          )}
        </TouchableOpacity>
        <View
          style={{
            alignItems: "center",
            marginTop: 20,
            paddingBottom: 10,
            flexDirection: "row",
          }}
        >
          <Text style={{ marginStart: 70 }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.regisText}>Register</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Text>or</Text>
          <Image
            source={require("../img/goo.png")}
            style={{ marginTop: 20, width: 300, height: 40 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#F9FAFF",
    flex: 1,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 15,
    elevation: 2,
    paddingLeft: 10,
    width: 287,
    height: 51,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9FAFF",
    width: 50,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    elevation: 2,
  },
  logButton: {
    backgroundColor: "#B2C9FF",
    paddingVertical: 14,
    marginTop: 30,
    marginHorizontal: 30,
    borderRadius: 10,
    elevation: 2,
    width: 300,
    height: 51,
  },
  loginText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  regisText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#8596BE",
    marginLeft: 5,
  },
});
