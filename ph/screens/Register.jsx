import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Register({ navigation }) {
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
        {/* <Image
          source={require("../img/logo.png")}
          style={{ marginTop: 50, width: 200, height: 200, marginBottom: 0 }}
        /> */}
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
          <View style={styles.icon}>
            {/* <MaterialIcons name="font-download" size={22} color="black" /> */}
          </View>

          <TextInput
            //   value={input.name}
            style={styles.textInput}
            placeholder="full name"
            //   onChangeText={(text) => handleChange("name", text)}
          />
        </View>
        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 15 }}
        >
          <View style={styles.icon}>
            {/* <Ionicons name="at-circle" size={22} color="black" /> */}
          </View>

          <TextInput
            //   value={input.username}
            style={styles.textInput}
            placeholder="username"
            onChangeText={(text) => handleChange("username", text)}
          />
        </View>
        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 15 }}
        >
          <View style={styles.icon}>
            {/* <Ionicons name="mail" size={22} color="black" /> */}
          </View>

          <TextInput
            //   value={input.email}
            style={styles.textInput}
            placeholder="email"
            onChangeText={(text) => handleChange("email", text)}
          />
        </View>
        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 15 }}
        >
          <View style={styles.icon}>
            {/* <Ionicons name="lock-closed" size={22} color="black" /> */}
          </View>

          <TextInput
            //   value={input.password}
            style={styles.textInput}
            placeholder="password"
            //   onChangeText={(text) => handleChange("password", text)}
            secureTextEntry={true}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.regButton}>
        {/* {loading ? (
          <ActivityIndicator />
        ) : ( */}
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
        {/* )} */}
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
  },
});
