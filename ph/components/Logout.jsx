import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";
import tw from "twrnc"

export default function Logout({ navigation }) {
  const { logoutAction } = useContext(LoginContext);

  return (
    <TouchableOpacity onPress={() => logoutAction("token")} style={[tw`flex-row items-center rounded-full p-1`, { backgroundColor: 'white' }]}>
      <Ionicons name="log-out-outline" size={25} style={{ color: 'red', paddingLeft: 2 }} />
    </TouchableOpacity>
  );
}
