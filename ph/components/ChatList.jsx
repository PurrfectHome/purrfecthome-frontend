import { ScrollView, Text, View } from "react-native";

export default function ChatList() {
  return (
    <ScrollView style={{ backgroundColor: "#F3F7FF" }}>
      {/* MESSAGE */}
      <View style={{ paddingVertical: 10, marginVertical: 5, gap: 10 }}>
        {/* LEFT */}
        <View
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
          <View style={{ backgroundColor: "transparent", maxWidth: "80%" }}>
            <Text
              style={{ color: "black", alignSelf: "flex-start", fontSize: 15 }}
            >
              MESSAGE FROM ADOPTER hi! i would like to adopt a cat can i?
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "transparent",
              justifyContent: "flex-end",
              paddingLeft: 10,
            }}
          >
            <Text style={{ fontSize: 8, color: "darkgray" }}>00:00 pm</Text>
          </View>
        </View>
        {/* RIGHT */}
        <View
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
          <View style={{ backgroundColor: "transparent", maxWidth: "80%" }}>
            <Text
              style={{ color: "white", alignSelf: "flex-start", fontSize: 15 }}
            >
              MESSAGE FROM POSTER: OFC you can, which cat do you like to adopt?
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "transparent",
              justifyContent: "flex-end",
              paddingLeft: 10,
            }}
          >
            <Text style={{ fontSize: 8 }}>00:00 pm</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
