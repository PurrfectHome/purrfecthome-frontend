import { ScrollView, Text, View } from "react-native";

export default function ChatList({ userMsg, handleSetMsg, userLogin }) {
  // console.log(userMsg, ">>>> dr CHATLIST");
  console.log(userLogin, ">>>> dr CHATLIST");

  return (
    <ScrollView style={{ backgroundColor: "#F3F7FF" }}>
      {/* MESSAGE */}
      <View style={{ paddingVertical: 10, marginVertical: 5, gap: 10 }}>
        {userMsg?.Messages?.map((m, i) =>
          m.User1 === userLogin ? (
            <>
              {/* RIGHT */}
              <View
                key={i}
                style={{
                  backgroundColor: "#B0C3F0",
                  maxWidth: "80%",
                  alignSelf: "flex-end",
                  flexDirection: "row",
                  borderRadius: 15,
                  borderTopRightRadius: 0,
                  paddingHorizontal: 10,
                  marginHorizontal: 10,
                  paddingTop: 5,
                  paddingBottom: 10,
                  elevation: 2,
                }}
              >
                <View
                  style={{ backgroundColor: "transparent", maxWidth: "80%" }}
                >
                  <Text
                    style={{
                      color: "white",
                      alignSelf: "flex-start",
                      fontSize: 15,
                    }}
                  >
                    {m.message}
                  </Text>
                </View>
              </View>
            </>
          ) : (
            <>
              {/* LEFT */}
              <View
                key={i}
                style={{
                  backgroundColor: "white",
                  maxWidth: "80%",
                  alignSelf: "flex-start",
                  flexDirection: "row",
                  borderRadius: 15,
                  borderTopLeftRadius: 0,
                  paddingHorizontal: 10,
                  marginHorizontal: 10,
                  paddingTop: 5,
                  paddingBottom: 10,
                  elevation: 2,
                }}
              >
                <View
                  style={{ backgroundColor: "transparent", maxWidth: "80%" }}
                >
                  <Text
                    style={{
                      color: "black",
                      alignSelf: "flex-start",
                      fontSize: 15,
                    }}
                  >
                    {m.message}
                  </Text>
                </View>
              </View>
            </>
          )
        )}
      </View>
    </ScrollView>
  );
}
