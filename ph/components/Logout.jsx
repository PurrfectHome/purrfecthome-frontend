import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";

export default function Logout({ navigation }) {
  const { logoutAction } = useContext(LoginContext);

  return (
    <TouchableOpacity onPress={() => logoutAction("token")}>
      <Text style={{ fontSize: 10, color: "red" }}>Log Out</Text>
    </TouchableOpacity>
  );
}
