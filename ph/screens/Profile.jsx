import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import tw from "twrnc";
import Logout from "../components/Logout";

export default function Profile({ navigation }) {
  const [more, setMore] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../img/banner.jpeg")}
        style={{ flex: 0.375, opacity: 0.8 }}
        resizeMode={"cover"}
      >
        <View style={{ flex: 0.5 }}></View>
      </ImageBackground>

      <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={require("../img/catie.jpeg")} style={styles.pfp} />
        </View>
        <View style={{ marginTop: 80 }}>
          <Text style={styles.name}>Caca da Breeder</Text>
          {/* <Text style={{ textAlign: "center" }}>username: caca's</Text> */}
          <View style={styles.email}>
            <MaterialIcons name="email" size={25} color="#B0C3F0" />
            <View
              style={{
                justifyContent: "center",
                marginLeft: 8,
              }}
            >
              <Text style={{ color: "#8596BE", fontWeight: "400" }}>
                caca@mail.com
              </Text>
            </View>
            <Logout />
          </View>
        </View>
        {/* list post START HERE */}

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          {/* RELEASED BUTTON */}
          <TouchableOpacity
            style={{
              flex: 1,
              paddingVertical: 15,
              backgroundColor: more ? "#DC5B93" : "white",
              justifyContent: "center",
              alignItems: "center",
              elevation: 2,
            }}
            onPress={() => {
              setMore(true);
            }}
          >
            <Text
              style={{
                color: more ? "white" : "#DC5B93",
                fontWeight: "bold",
                fontSize: 17,
              }}
            >
              Released
            </Text>
          </TouchableOpacity>
          {/* ADOPTED BUTTON */}
          <TouchableOpacity
            style={{
              flex: 1,
              paddingVertical: 15,
              backgroundColor: more ? "white" : "#DC5B93",
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#DC5B93",
              elevation: 2,
            }}
            onPress={() => {
              setMore(false);
            }}
          >
            <Text
              style={{
                color: more ? "#DC5B93" : "white",
                fontWeight: "bold",
                fontSize: 17,
              }}
            >
              Adopted
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            {more ? (
              <>
                <TouchableOpacity style={styles.gridPost}>
                  <Image
                    source={{
                      uri: "https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/03/russian-blue-768x510.jpg",
                    }}
                    style={[tw`w-full h-full`]}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridPost}>
                  <Image
                    source={{
                      uri: "https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/03/russian-blue-768x510.jpg",
                    }}
                    style={[tw`w-full h-full`]}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridPost}>
                  <Image
                    source={{
                      uri: "https://source.unsplash.com/featured/?cat",
                    }}
                    style={[tw`w-full h-full`]}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridPost}>
                  <Image
                    source={{
                      uri: "https://source.unsplash.com/featured/?cat",
                    }}
                    style={[tw`w-full h-full`]}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridPost}>
                  <Image
                    source={{
                      uri: "https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/03/russian-blue-768x510.jpg",
                    }}
                    style={[tw`w-full h-full`]}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridPost}>
                  <Image
                    source={{
                      uri: "https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/03/russian-blue-768x510.jpg",
                    }}
                    style={[tw`w-full h-full`]}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridPost}>
                  <Image
                    source={{
                      uri: "https://source.unsplash.com/featured/?cat",
                    }}
                    style={[tw`w-full h-full`]}
                  />
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  style={styles.gridPost}
                  onPress={() => navigation.navigate("Detail")}
                >
                  <Image
                    source={{
                      uri: "https://source.unsplash.com/featured/?cat",
                    }}
                    style={[tw`w-full h-full`]}
                  />
                </TouchableOpacity>
              </>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gridPost: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#B0C3F0",
    color: "white",
    padding: 5,
    margin: 5,
    height: 110,
    width: 110,
    textAlign: "center",
    textAlignVertical: "center",
  },
  pfp: {
    width: 125,
    height: 125,
    borderRadius: 150 / 2,
    borderWidth: 2,
    borderColor: "#8596BE",
    position: "absolute",
    zIndex: 2,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  email: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
});
