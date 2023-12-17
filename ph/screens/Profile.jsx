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
import { useEffect, useState } from "react";
import tw from "twrnc";
import Logout from "../components/Logout";
import Ionicons from "react-native-vector-icons/Ionicons";
import { gql, useQuery } from "@apollo/client";
import { useIsFocused } from '@react-navigation/native';

const PROFILE = gql`
  query UsersProfile {
  usersProfile {
    _id
    fullname
    username
    email
    Release {
      _id
      name
      size
      age
      breed
      gender
      color
      description
      AdopterId
      PosterId
      InformationId
      status
      statusPrice
      photo
      createdAt
      updatedAt
    }
    Adoption {
      _id
      name
      size
      age
      breed
      gender
      color
      description
      AdopterId
      PosterId
      InformationId
      status
      statusPrice
      photo
      createdAt
      updatedAt
    }
    accountType
    createdAt
    updatedAt
  }
}
`

export default function Profile({ navigation }) {
  const [more, setMore] = useState(true);
  const [profile, setProfile] = useState('')
  const { data, loading, error, refetch } = useQuery(PROFILE)
  const isFocused = useIsFocused()

  useEffect(() => {
    if (data) {
      setProfile(data?.usersProfile);
    }
  }, [data]);

  useEffect(() => {
    if(isFocused) {
      refetch()
    }
  },[isFocused, refetch])

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={{ uri: 'https://i.imgur.com/2qqvytP.jpg' }}
        style={{ flex: 0.375, opacity: 0.8 }}
        resizeMode={"cover"}
      >
        <View style={{ flex: 0.5 }}></View>
        <View style={[tw`items-end justify-start h-3/4 pr-5 pt-2`]}>
          <Logout />
        </View>
      </ImageBackground>

      <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={{uri: `https://www.gravatar.com/avatar/${profile._id}?s=200&r=pg&d=robohash`}} style={styles.pfp} />
        </View>
        <View style={{ marginTop: 80 }}>
          <View style={tw`flex-row justify-center items-center gap-1`}>
            <Text style={styles.name}>{profile?.fullname}</Text>
          </View>
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
                {profile?.email}
              </Text>
            </View>
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
              borderWidth: 0.25,
              borderColor: "#DC5B93",
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
              borderWidth: 0.25,
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
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: 'center', alignItems: 'center' }}>
            {more ? (
              <>
                {
                  profile?.Release?.map((el, i) => (
                    <TouchableOpacity key={i}
                      style={styles.gridPost}
                      onPress={() =>  navigation.navigate("Detail", {
                        id: el._id,
                      })}
                    >
                      <Image
                        source={{
                          uri: `${el.photo[0]}`,
                        }}
                        style={[tw`w-full h-full`]}
                      />
                    </TouchableOpacity>
                  ))
                }
              </>
            ) : (
              <>
                {
                  profile?.Adoption?.map((el, i) => (
                    <TouchableOpacity key={i}
                      style={styles.gridPost}
                      onPress={() =>  navigation.navigate("Detail", {
                        id: el._id,
                      })}
                    >
                      <Image
                        source={{
                          uri: `${el.photo[0]}`,
                        }}
                        style={[tw`w-full h-full`]}
                      />
                    </TouchableOpacity>
                  ))
                }
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
