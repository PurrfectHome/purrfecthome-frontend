import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Profile({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../img/banner.jpeg")}
        style={{ flex: 0.5, opacity: 0.8 }}
        resizeMode={"cover"}
      >
        <View style={{ flex: 0.5 }}></View>
      </ImageBackground>

      <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("../img/catie.jpeg")}
            style={{
              width: 150,
              height: 150,
              borderRadius: 150 / 2,
              borderWidth: 2,
              borderColor: "#8596BE",
              position: "absolute",
              zIndex: 2,
            }}
          />
        </View>
        <View style={{ marginTop: 80 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
            }}
          >
            Caca da Breeder
          </Text>
          {/* <Text style={{ textAlign: "center" }}>username: caca's</Text> */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 5,
            }}
          >
            <MaterialIcons name="email" size={25} color="#8596BE" />
            <View
              style={{
                justifyContent: "center",
                marginLeft: 8,
              }}
            >
              <Text style={{ color: "#8596BE", fontWeight: "500" }}>
                caca@mail.com
              </Text>
            </View>
          </View>
        </View>
        {/* list post START HERE */}
        <ScrollView>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <TouchableOpacity
              style={{
                flex: 1,
                paddingVertical: 15,
                // backgroundColor: "#DC5B93",
                backgroundColor: "#B0C3F0",
                justifyContent: "center",
                alignItems: "center",
                // borderRadius: 3,
                elevation: 2,
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 17 }}
              >
                Released
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                paddingVertical: 15,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#B0C3F0",
                // borderRadius: 3,
                elevation: 2,
              }}
            >
              <Text
                style={{ color: "#B0C3F0", fontWeight: "bold", fontSize: 17 }}
              >
                Adopted
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
