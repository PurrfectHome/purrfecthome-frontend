import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

const ALL_CONVO = gql`
  query ConvosByUser {
    convosByUser {
      Conversation {
        _id
        user1 {
          _id
          fullname
          username
          email
        }
        user2 {
          _id
          fullname
          username
          email
        }
        Messages {
          _id
          message
          ConversationID
          User1
        }
      }
      UserLoggedIn
    }
  }
`;

export default function Inbox({ navigation }) {
  const { data, loading, error, refetch } = useQuery(ALL_CONVO);
  const [convo, setConvo] = useState([]);
  const [login, setUserLogin] = useState("");
  const focus = useIsFocused();

  useEffect(() => {
    if (data) {
      console.log(data);
      setConvo(data.convosByUser.Conversation);
      setUserLogin(data.convosByUser.UserLoggedIn);
    }
  }, [data]);

  useEffect(() => {
    if (focus) {
      refetch();
    }
  }, [focus, refetch]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F3F7FF" }}>
      {/* HEADER */}
      {convo?.map((c, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => navigation.navigate("ChatRoom", { id: c._id })}
          style={styles.tOp}
        >
          <View style={styles.pfp}>
            <View style={{ flexDirection: "row", flex: 4 }}>
              <Image
                source={{
                  uri: `https://www.gravatar.com/avatar/${c?.user1?._id !== login ? login : c?.user2?._id}?s=200&r=pg&d=robohash`,
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
              <View style={styles.uname}>
                <Text style={{ fontWeight: "bold" }}>
                  {c.user1._id == login
                    ? `${c.user2.fullname}`
                    : `${c.user1.fullname}`}
                </Text>
                <Text style={styles.msg}>
                  {c.Messages.length > 0
                    ? `${c.Messages[c.Messages.length - 1].message}`
                    : ``}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tOp: {
    flexDirection: "row",
    backgroundColor: "transparent", // => here
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#B0C3F0",
  },
  pfp: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 10,
  },
  uname: {
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  msg: {
    color: "#8596BE",
    fontSize: 10,
  },
});
