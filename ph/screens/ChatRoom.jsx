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
      {/* CONVO HERE */}
      <ChatList />
      {/* CHAT INPUT START HERE! */}
      <View
        style={{
          justifyContent: "center",
          backgroundColor: "#F3F7FF",
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
            }}
          >
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
              placeholder="Type Message..."
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
