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

import ChatList from "../components/ChatList";

export default function ChatRoom({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#F3F7FF" }}>
      {/* HEADER */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#B0C3F0",
          paddingTop: 10,
          paddingBottom: 10,
          alignItems: "center",
        }}
      >
        {/* BACK BUTTON */}
        <TouchableOpacity
          style={{ alignSelf: "center", paddingHorizontal: 10 }}
        >
          <FontAwesome name="angle-left" size={24} color="black" />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 1,
            paddingHorizontal: 10,
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
      {/* CONVO HERE */}
      <ChatList />
      {/* CHAT INPUT START HERE! */}
      <View
        style={{
          justifyContent: "center",
          backgroundColor: "#F3F7FF",
          // position: "absolute",
        }}
      >
        <View
          style={{
            paddingHorizontal: 10,
            marginHorizontal: 10,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            paddingVertical: 10,
            backgroundColor: "#F3F7FF",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              marginRight: 10,
              paddingVertical: 10,
              borderRadius: 55,
              alignItems: "center",
              // justifyContent: "space-between",
            }}
          >
            {/* emo button */}
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 15,
              }}
            >
              <FontAwesome name="picture-o" size={20} color="#DC5B93" />
            </TouchableOpacity>
            <TextInput
              multiline
              placeholder="Type something..."
              style={{
                backgroundColor: "transparent",
                paddingLeft: 20,
                flex: 3,
                height: 30,
                fontSize: 15,
                alignSelf: "center",
              }}
            />
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingRight: 15,
                paddingLeft: 10,
                // borderLeftWidth: 2.5,
                // borderLeftColor: "#DC5B93",
              }}
            >
              <MaterialIcons name="send" size={24} color="#DC5B93" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
