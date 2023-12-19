import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
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
      adopter {
        _id
        fullname
        username
      }
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
      PosterId
      InformationId
      status
      statusPrice
      photo
      createdAt
      updatedAt
      AdopterId
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
  const { height, width } = useWindowDimensions()

  useEffect(() => {
    if (data) {
      setProfile(data?.usersProfile);
    }
  }, [data]);

  useEffect(() => {
    if (isFocused) {
      refetch()
    }
  }, [isFocused, refetch])

  if (!loading) {
    console.log(data.usersProfile)
  }

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
          <Image source={{ uri: `https://www.gravatar.com/avatar/${profile._id}?s=200&r=pg&d=robohash` }} style={styles.pfp} />
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
          <View style={[{ flex: 1, flexDirection: "row", flexWrap: "wrap", paddingLeft: 5, alignItems: 'center', marginVertical: 10, gap: 8 }]}>
            {more ? (
              <>
                {
                  profile?.Release?.map((el, i) => (
                    <TouchableOpacity key={i}
                      style={
                        [
                          { width: width * 0.47, 
                            height: 73, elevation: 5, 
                            backgroundColor: 'white', 
                            overflow: 'hidden',
                            shadowColor: "#000000",
                            shadowOpacity: 0.3,
                            shadowRadius: 2,
                            shadowOffset: { width: 0, height: 2 } 
                          }, tw`p-1 rounded-lg flex-row gap-1 justify-between`
                        ]
                      }
                      onPress={() => navigation.navigate("Detail", {
                        id: el._id,
                      })}
                    >
                      <View style={[tw`flex-row gap-2 w-3/4`]}>
                        <Image source={{ uri: el.photo[0] }} style={{ height: 65, width: 65, borderRadius: 5 }} />
                        <View style={[tw`justify-between`]}>
                          <View>
                            <View style={[tw`flex-row gap-1`]}>
                              <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{el.name}</Text>
                              {el.gender === "female" ? (
                                <Ionicons
                                  name="female"
                                  size={12}
                                  style={{ color: "#DC5B93" }}
                                />
                              ) : (
                                <Ionicons
                                  name="male"
                                  size={12}
                                  style={{ color: "#92aae2" }}
                                />
                              )}
                            </View>
                            <Text style={{fontSize: 8, color: '#aabbe6'}}>{el.breed}</Text>
                          </View>
                          <View style={[{}]}>
                            {
                              el.adopter ?
                              <View>
                              <Text style={{ fontSize: 7 }}>Adopted by: </Text>
                                <Text style={{ fontSize: 10, color: '#aabbe6' }}>{el.adopter.fullname}</Text> 
                                </View> :
                                // <Text> - </Text> 
                                ''
                            }
                          </View>
                        </View>
                      </View>
                      <View style={[tw`pb-5 pl-26`, { position: 'absolute' }]}>
                        <View style={[tw`justify-center items-center`, { opacity: 0.8, width: 100, height: 13, backgroundColor: el.status === 'adopted' ? '#DC5B93' : '#B0C3F0', marginTop: 10, borderRadius: 20, transform: [{ rotate: '45deg' }] }]}>
                          <Text style={{ fontSize: 8, color: el.status === 'adopted' ? 'white' : 'black' }}>{el.status}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))
                }
              </>
            ) : (
              <>
                {
                  profile?.Adoption?.map((el, i) => (
                    <TouchableOpacity key={i}
                      style={
                        [
                          { width: width * 0.47, 
                            height: 73, 
                            elevation: 5, 
                            backgroundColor: 'white', 
                            overflow: 'hidden',
                            shadowColor: "#000000",
                            shadowOpacity: 0.3,
                            shadowRadius: 2,
                            shadowOffset: { width: 0, height: 2 } 
                          }, 
                          tw`p-1 rounded-lg flex-row gap-1 justify-between`
                        ]
                      }
                      onPress={() => navigation.navigate("Detail", {
                        id: el._id,
                      })}
                    >
                      <View style={[tw`flex-row gap-2 w-3/4`]}>
                        <Image source={{ uri: el.photo[0] }} style={{ height: 65, width: 65, borderRadius: 5 }} />
                        <View style={[tw`justify-between`]}>
                          <View>
                            <View style={[tw`flex-row gap-1`]}>
                              <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{el.name}</Text>
                              {el.gender === "female" ? (
                                <Ionicons
                                  name="female"
                                  size={12}
                                  style={{ color: "#DC5B93" }}
                                />
                              ) : (
                                <Ionicons
                                  name="male"
                                  size={12}
                                  style={{ color: "#92aae2" }}
                                />
                              )}
                            </View>
                            <Text style={{fontSize: 8, color: '#aabbe6'}}>{el.breed}</Text>
                          </View>
                        </View>
                      </View>
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
    backgroundColor: 'white'
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
