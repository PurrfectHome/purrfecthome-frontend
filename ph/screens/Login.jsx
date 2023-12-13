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
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#DBE4FA" }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 90,
          }}
        >
          <Image
            source={require("../img/logo.png")}
            style={{ width: 230, height: 230 }}
          />
        </View>
        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 20 }}
        >
          <View style={styles.icon}>
            <Image source={require("../img/cat.png")} />
          </View>

          <TextInput
            // value={input.username}
            style={styles.textInput}
            placeholder="username"
            // onChangeText={(text) => handleChange("username", text)}
          />
        </View>
        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 20 }}
        >
          <View style={styles.icon}>
            <Image source={require("../img/Lock.png")} />
          </View>

          <TextInput
            // value={input.password}
            style={styles.textInput}
            placeholder="password"
            // onChangeText={(text) => handleChange("password", text)}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.logButton}>
          {/* {loading ? (
              <ActivityIndicator />
            ) : ( */}
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            LOGIN
          </Text>
          {/* )} */}
        </TouchableOpacity>
        <View
          style={{ alignItems: "center", marginTop: 20, paddingBottom: 30 }}
        >
          <Text style={{ marginBottom: 10 }}>Don't have an account? </Text>
          <TouchableOpacity
          //   onPress={() => navigation.navigate("Register")}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 16, color: "#8596BE" }}
            >
              Register
            </Text>
          </TouchableOpacity>
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
  },
});
