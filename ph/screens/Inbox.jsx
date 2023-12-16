import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Inbox({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F3F7FF" }}>
      {/* HEADER */}
      <TouchableOpacity
        onPress={() => navigation.navigate("ChatRoom")}
        style={styles.tOp}
      >
        <View style={styles.pfp}>
          <View style={{ flexDirection: "row", flex: 4 }}>
            <Image
              source={require("../img/catie.jpeg")}
              style={{ height: 40, width: 40, borderRadius: 32.5 }}
            />
            <View style={styles.uname}>
              <Text style={{ fontWeight: "bold" }}>Caca da Breeder</Text>
              <Text style={styles.msg}>
                Hello, I would like to adopt Daisy...
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* PART KEDUA */}
      <TouchableOpacity style={styles.tOp}>
        <View style={styles.pfp}>
          <View style={{ flexDirection: "row", flex: 4 }}>
            <Image
              source={require("../img/catie.jpeg")}
              style={{ height: 40, width: 40, borderRadius: 32.5 }}
            />
            <View style={styles.uname}>
              <Text style={{ fontWeight: "bold" }}>Caca da Breeder</Text>
              <Text style={styles.msg}>
                Hello, I would like to adopt Daisy...
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
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
