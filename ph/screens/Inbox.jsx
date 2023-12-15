import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function Inbox({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F3F7FF" }}>
      {/* HEADER */}
      <TouchableOpacity
        onPress={() => navigation.navigate("ChatRoom")}
        style={{
          flexDirection: "row",
          backgroundColor: "transparent", // => here
          paddingTop: 10,
          paddingBottom: 10,
          alignItems: "center",
          // border here
          borderTopWidth: 1,
          borderTopColor: "#B0C3F0",
          borderBottomWidth: 1,
          borderBottomColor: "#B0C3F0",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 1,
            paddingHorizontal: 10,
          }}
        >
          <View style={{ flexDirection: "row", flex: 4 }}>
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
              <Text
                style={{
                  // color: "#B59BFF",
                  color: "#8596BE",
                  fontSize: 10,
                }}
              >
                Hello, I would like to adopt Daisy...
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          backgroundColor: "transparent", // => here
          paddingTop: 10,
          paddingBottom: 10,
          alignItems: "center",
          // border here
          borderBottomWidth: 1,
          borderBottomColor: "#B0C3F0",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 1,
            paddingHorizontal: 10,
          }}
        >
          <View style={{ flexDirection: "row", flex: 4 }}>
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
              <Text style={{ color: "#B59BFF", fontSize: 10 }}>
                Hello, I would like to adopt Daisy...
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}
