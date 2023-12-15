import { Image, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Profile({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.5, backgroundColor: "black" }}></View>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("../img/catie.jpeg")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100 / 2,
              borderWidth: 3,
              borderColor: "#DC5B93",
            }}
          />
        </View>
        <View>
          <Text
            style={{ fontWeight: "bold", fontSize: 18, textAlign: "center" }}
          >
            Caca da Breeder
          </Text>
          <Text style={{ textAlign: "center" }}>username: caca's</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialIcons name="email" size={24} color="#DC5B93" />
            <Text>caca@mail.com</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
