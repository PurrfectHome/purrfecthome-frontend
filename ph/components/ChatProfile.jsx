import { Image, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function ChatProfile() {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: "center",
      }}
    >
      {/* BACK BUTTON */}
      {/* <TouchableOpacity style={{ alignSelf: "center", paddingHorizontal: 10 }}>
        <FontAwesome name="angle-left" size={24} color="black" />
      </TouchableOpacity> */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 1,
          //   pa,
        }}
      >
        <TouchableOpacity style={{ flexDirection: "row", flex: 4 }}>
          <Image
            source={require("../img/catie.jpeg")}
            style={{ height: 40, width: 40, borderRadius: 32.5 }}
          />
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Caca da Breeder</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
