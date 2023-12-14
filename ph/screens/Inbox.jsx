import { Image, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Inbox({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      {/* HEADER */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#B0C3F0",
          paddingTop: 50,
        }}
      >
        <TouchableOpacity
          style={{ alignSelf: "center", paddingHorizontal: 10 }}
        >
          <FontAwesome name="angle-left" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity style={{}}>
            <Image source={require("../img/catie.jpeg")} style={{}} />
            <View style={{}}>
              <Text style={{}}>Caca da Breeder</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
