import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import CardHome from "../components/CardHome";
import SelectDropdown from "react-native-select-dropdown";
import { gql, useQuery } from "@apollo/client";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

const POSTS = gql`
  query PostsByRadius($breed: String, $lat: Float, $long: Float) {
    postsByRadius(breed: $breed, lat: $lat, long: $long) {
      _id
      name
      size
      age
      breed
      gender
      color
      description
      loc {
        coordinates
        type
      }
      AdopterId
      PosterId
      InformationId
      status
      statusPrice
      photo
      createdAt
      updatedAt
    }
  }
`;

export default function Home({ navigation }) {
  const breeds = [
    "Maine Coon",
    "Siamese",
    "Persian",
    "British Shorthair",
    "Bengal",
    "Ragdoll",
    "Sphynx",
    "Abyssinian",
    "Scottish Fold",
    "Norwegian Forest Cat",
    "Siberian",
    "Exotic Shorthair",
    "Ragamuffin",
    "Burmese",
    "Russian Blue",
    "Indonesian Domestic",
  ];

  const [breed, setBreed] = useState("");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const { data, loading, error, refetch } = useQuery(POSTS, {
    variables: {
      breed: breed,
      lat: location?.coords?.latitude,
      long: location?.coords?.longitude,
    },
  });

  console.log(data, loading, error);
  const [posts, setPosts] = useState([]);
  const focus = useIsFocused();

  useEffect(() => {
    if (data) {
      setPosts(data?.postsByRadius);
      console.log(data);
    }
  }, [data]);

  // FIND RADIUS

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      if (Location) {
        setLocation(location);
      }
    })();
  }, []);

  useEffect(() => {
    if (focus) {
      refetch();
    }
  }, [focus, refetch]);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    // PADDING DARI 5 => 2
    <View style={[tw`flex-1 p-2`, { backgroundColor: "white" }]}>
      <ScrollView>
        <View style={tw`justify-center items-center mb-5`}>
          <SelectDropdown
            buttonStyle={{
              width: 170,
              height: 40,
              elevation: 5,
              backgroundColor: "#F3F7FF",
              paddingLeft: 10,
              borderRadius: 10,
              borderWidth: 0.5,
            }}
            data={breeds}
            defaultButtonText="breed"
            dropdownStyle={{
              backgroundColor: "white",
              borderRadius: 10,
              height: 170,
            }}
            dropdownOverlayColor="transparent"
            onSelect={(b) => setBreed(b)}
          />
        </View>
        <View style={tw`flex-row flex-wrap justify-center gap-5`}>
          {posts?.map((post, index) => (
            <CardHome key={index} post={post} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
