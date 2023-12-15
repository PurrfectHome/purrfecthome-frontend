import { Text, TouchableOpacity, View } from "react-native";
// import { LoginContext } from "../context/LoginContext";
// import { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Logout() {
  //   const { logoutAction } = useContext(LoginContext);

  return (
    <View style={{ marginRight: 10 }}>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 6,
          paddingHorizontal: 10,
          borderRadius: 10,
        }}
        // onPress={() => logoutAction("token")}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "red" }}>
          Log Out
        </Text>
        {/* <Ionicons name="log-out-outline" size={24} color="black" /> */}
      </TouchableOpacity>
    </View>
  );
}
