import { useState } from "react";
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
import { gql, useMutation } from "@apollo/client";

const REGISTER = gql`
  mutation Mutation(
    $fullname: String
    $username: String
    $email: String
    $password: String
  ) {
    register(
      fullname: $fullname
      username: $username
      email: $email
      password: $password
    ) {
      code
      message
    }
  }
`;

export default function Register({ navigation }) {
  const [input, setInput] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const [register, { data, loading, error }] = useMutation(REGISTER);
  const handleChange = (name, text) => {
    console.log(text);
    setInput({ ...input, [name]: text });
  };

  const handleRegister = async () => {
    try {
      if (loading) return;
      console.log(input);
      await register({
        variables: {
          fullname: input.fullname,
          username: input.username,
          email: input.email,
          password: input.password,
        },
      });
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data, error, loading);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#DBE4FA",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
          marginBottom: 50,
        }}
      >
        <Text
          style={{
            marginTop: 50,
            fontSize: 30,
            color: "#8596BE",
            fontWeight: "bold",
          }}
        >
          REGISTER
        </Text>
      </View>
      <View style={{ gap: 10 }}>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 30,
          }}
        >
          <TextInput
            value={input.fullname}
            style={styles.textInput}
            placeholder="full name"
            onChangeText={(text) => handleChange("fullname", text)}
          />
        </View>
        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 15 }}
        >
          <TextInput
            value={input.username}
            style={styles.textInput}
            placeholder="username"
            onChangeText={(text) => handleChange("username", text)}
          />
        </View>
        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 15 }}
        >
          <TextInput
            value={input.email}
            style={styles.textInput}
            placeholder="email"
            onChangeText={(text) => handleChange("email", text)}
          />
        </View>
        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 15 }}
        >
          <TextInput
            value={input.password}
            style={styles.textInput}
            placeholder="password"
            onChangeText={(text) => handleChange("password", text)}
            secureTextEntry={true}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.regButton} onPress={handleRegister}>
        {loading ? (
          <ActivityIndicator color="#DC5B93" />
        ) : (
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Register
          </Text>
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
        <Text style={{ marginStart: 70 }}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: "#8596BE",
              marginLeft: 5,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#F9FAFF",
    flex: 1,
    borderRadius: 15,
    paddingVertical: 15,
    elevation: 2,
    paddingLeft: 25,
    width: 287,
    height: 51,
  },
  //   icon: {
  //     justifyContent: "center",
  //     alignItems: "center",
  //     backgroundColor: "#F9FAFF",
  //     width: 50,
  //     borderBottomLeftRadius: 15,
  //     borderTopLeftRadius: 15,
  //     elevation: 2,
  //   },
  regButton: {
    backgroundColor: "#B2C9FF",
    paddingVertical: 14,
    marginTop: 30,
    marginHorizontal: 30,
    borderRadius: 10,
    elevation: 2,
    width: 300,
    height: 51,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
