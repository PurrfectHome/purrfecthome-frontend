import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import ChatList from "../components/ChatList";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

const ADD_MSG = gql`
  mutation AddMsg($message: String, $conversationId: ID) {
    addMsg(message: $message, ConversationID: $conversationId) {
      code
      message
    }
  }
`;

const GET_MSG = gql`
  query ConvoById($convoId: String) {
    convoById(convoId: $convoId) {
      Conversation {
        _id
        user1 {
          _id
          fullname
          username
        }
        user2 {
          _id
          fullname
          username
        }
        Messages {
          _id
          message
          ConversationID
          User1
          createdAt
          updatedAt
        }
      }
      UserLoggedIn
    }
  }
`;

export default function ChatRoom({ navigation, route }) {
  const { id } = route.params;
  const [addMsg, { data, error, loading, refetch }] = useMutation(ADD_MSG);
  const [message, setMessage] = useState("");
  const [login, setUserLogin] = useState("");
  const { height, width } = useWindowDimensions();

  const {
    data: d,
    loading: l,
    error: e,
    refetch: r,
  } = useQuery(GET_MSG, {
    variables: {
      convoId: id,
    },
  });

  const [socket, setSocket] = useState(null);
  const [userMsg, setUserMsg] = useState([]);
  const handleMessage = async () => {
    try {
      socket.emit("sendMessage", {
        User1: login,
        message: message
      })
      const response = await addMsg({
        variables: { message: message, conversationId: id },
      });

      setUserMsg([...userMsg, {
        User1: login,
        message: message
      }]);
      r();
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (d) {
      setUserMsg(d?.convoById?.Conversation?.Messages);
      setUserLogin(d?.convoById?.UserLoggedIn);
    }
  }, [d]);

  useEffect(() => {
    const socket = io('https://2f6a-2001-448a-3021-571f-1d86-c7c6-e227-3e6c.ngrok-free.app/')
    setSocket(socket)

    socket.on('new-message', (payload) => {
      setUserMsg((prev) => {
        return[...prev, payload]
      })
    })
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: "#F3F7FF" }}>
      {/* HEADER */}
      <View
        style={{
          height: height * 0.13,
          width: width,
          backgroundColor: "#DC5B93",
          elevation: 5,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            height: height * 0.18,
            justifyContent: "center",
            alignItems: "flex-start",
            paddingLeft: 15,
            width: 50,
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
        {/* PROFILE PIC */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: height * 0.048,
          }}
        >
          <Image
            source={{
              uri: `https://www.gravatar.com/avatar/${d?.convoById?.Conversation?.user1?._id !== login ? d?.convoById?.Conversation?.user1?._id : d?.convoById?.Conversation?.user2?._id}?s=200&r=pg&d=robohash`,
            }}
            style={{
              height: 40,
              width: 40,
              borderRadius: 32.5,
              backgroundColor: "white",
              borderWidth: 0.5,
              borderColor: "#DC5B93",
            }}
          />
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white" }}>
              {login == d?.convoById?.Conversation.user1?._id
                ? `${d?.convoById?.Conversation.user2.fullname}`
                : `${d?.convoById?.Conversation.user1.fullname}`}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* CONVO HERE */}
      {l ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size={50} />
        </View>
      ) : (
        <ChatList
          userMsg={userMsg}
          userLogin={login}
        />  
      )}

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
              onChangeText={(e) => setMessage(e)}
              defaultValue={message}
            />
            <TouchableOpacity
              // HANDLE MSG
              onPress={handleMessage}
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingRight: 15,
                paddingLeft: 10,
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
