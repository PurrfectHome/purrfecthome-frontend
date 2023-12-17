import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Ionicons from "react-native-vector-icons/Ionicons";
import ImagePick from "../components/imagePicker";
import tw from "twrnc";
import * as Location from "expo-location";
import { useIsFocused } from "@react-navigation/native";
import { gql, useMutation } from "@apollo/client";

const ADD_POST = gql`
  mutation AddPost(
    $name: String
    $size: String
    $age: String
    $breed: String
    $gender: String
    $color: String
    $description: String
    $photo: [String]
    $statusPrice: String
    $long: Float
    $lat: Float
  ) {
    addPost(
      name: $name
      size: $size
      age: $age
      breed: $breed
      gender: $gender
      color: $color
      description: $description
      photo: $photo
      statusPrice: $statusPrice
      long: $long
      lat: $lat
    ) {
      code
      message
    }
  }
`;

const EDIT = gql`
  mutation EditPost(
    $postId: String
    $name: String
    $size: String
    $age: String
    $breed: String
    $gender: String
    $color: String
    $description: String
    $status: String
    $statusPrice: String
    $photo: [String]
  ) {
    editPost(
      PostId: $postId
      name: $name
      size: $size
      age: $age
      breed: $breed
      gender: $gender
      color: $color
      description: $description
      status: $status
      statusPrice: $statusPrice
      photo: $photo
    ) {
      message
      code
    }
  }
`;

export default function AddPost({ navigation, route }) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [status, setStatus] = useState("");
  const [size, setSize] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrlAdd, setImgUrlAdd] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const isFocused = useIsFocused();
  const dataEdit = route.params;

  const breedList = [
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

  const [add, { data, loading, error }] = useMutation(ADD_POST);
  const [edit, { data: d, loading: l, error: e }] = useMutation(EDIT);

  const handleAdd = async () => {
    const data = {
      name,
      color,
      statusPrice: status,
      size,
      age,
      breed,
      gender,
      description,
      photo: imgUrlAdd,
      lat: location?.coords?.latitude,
      long: location?.coords?.longitude,
    };
    try {
      if (loading) return;
      console.log(data);
      const response = await edit({
        variables: data,
      });
      console.log(response);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };

  // EDIT
  const handleEdit = async () => {
    const data = {
      postId: dataEdit?.dataEdit?._id,
      name,
      size,
      age,
      breed,
      gender,
      color,
      description,
      status: "available", // => harusnya x usah
      statusPrice: status,
      photo: imgUrlAdd,
    };
    console.log(data, ">>>> DATA EDIT DARI ADOPT");
    try {
      if (l) return;
      console.log(data);
      const response = await edit({
        variables: data,
      });
      console.log(response);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      if (location) {
        setLocation(location);
      }
    })();
  }, [isFocused]);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    // TAMBAHAN OKA
    <ScrollView style={{ paddingVertical: "10%", backgroundColor: "white" }}>
      <View style={[tw`justify-between flex-row items-center px-5`]}>
        <TouchableOpacity
          onPress={() => {
            dataEdit
              ? navigation.navigate("Adoptable")
              : navigation.navigate("Home");
          }}
        >
          {loading || l ? (
            <ActivityIndicator />
          ) : (
            <Ionicons name="chevron-back" size={25} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={dataEdit?.dataEdit ? handleEdit : handleAdd}
          style={[tw`flex-row items-center`]}
        >
          <Text>Post</Text>
        </TouchableOpacity>
      </View>
      <View style={[tw`px-22`, { flex: 1, backgroundColor: "white" }]}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 100,
          }}
        ></View>
        <View
          style={{ justifyContent: "center", alignItems: "center", gap: 10 }}
        >
          <View style={{ marginTop: 10, gap: 10 }}>
            <Text style={{ color: "#DC5B93", fontWeight: "bold" }}>Name</Text>
            <TextInput
              defaultValue={
                dataEdit?.dataEdit ? dataEdit?.dataEdit?.name : name
              }
              style={[
                tw`h-10 rounded-md`,
                { backgroundColor: "#eff4ff", width: 307, elevation: 5 },
              ]}
              //  {
              //   name ?
              //   onChangeText={(e) => setName(e)} : setName(defaultValue)
              // }
            />
          </View>
          <View style={[tw`flex-row items-center`, { marginTop: 10, gap: 10 }]}>
            <View style={{ gap: 10 }}>
              <Text style={{ color: "#DC5B93", fontWeight: "bold" }}>
                Color
              </Text>
              <TextInput
                defaultValue={
                  dataEdit?.dataEdit ? dataEdit?.dataEdit?.color : color
                }
                style={[
                  tw`h-10 rounded-md`,
                  { backgroundColor: "#eff4ff", width: 150, elevation: 5 },
                ]}
                onChangeText={(e) => setColor(e)}
              />
            </View>
            <View style={{ gap: 10 }}>
              <Text style={{ color: "#DC5B93", fontWeight: "bold" }}>
                Status Payable
              </Text>
              <SelectDropdown
                defaultValue={
                  dataEdit?.dataEdit ? dataEdit?.dataEdit?.statusPrice : status
                }
                buttonStyle={[
                  tw`h-10 rounded-md`,
                  {
                    width: 150,
                    elevation: 5,
                    backgroundColor: "#eff4ff",
                    paddingLeft: 10,
                  },
                ]}
                data={["Without Adoption Fee", "With Adoption Fee"]}
                defaultButtonText="--"
                dropdownStyle={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  height: 170,
                }}
                onSelect={(e) => setStatus(e)}
              />
            </View>
          </View>
          <View style={{ marginTop: 10, flexDirection: "row", gap: 10 }}>
            <View style={{ gap: 10 }}>
              <Text style={{ color: "#DC5B93", fontWeight: "bold" }}>Size</Text>
              <SelectDropdown
                defaultValue={
                  dataEdit?.dataEdit ? dataEdit?.dataEdit?.size : size
                }
                buttonStyle={[
                  tw`h-10 rounded-md`,
                  {
                    width: 150,
                    elevation: 5,
                    backgroundColor: "#eff4ff",
                    paddingLeft: 10,
                  },
                ]}
                data={["Small", "Medium", "Large"]}
                defaultButtonText="--"
                dropdownStyle={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  height: 170,
                }}
                onSelect={(e) => setSize(e)}
              />
            </View>
            <View style={{ gap: 10 }}>
              <Text style={{ color: "#DC5B93", fontWeight: "bold" }}>Age</Text>
              <SelectDropdown
                defaultValue={
                  dataEdit?.dataEdit ? dataEdit?.dataEdit?.age : age
                }
                buttonStyle={[
                  tw`h-10 rounded-md`,
                  {
                    width: 150,
                    elevation: 5,
                    backgroundColor: "#eff4ff",
                    paddingLeft: 10,
                  },
                ]}
                data={["Baby", "Young", "Adult", "Senior"]}
                defaultButtonText="--"
                dropdownStyle={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  height: 170,
                }}
                onSelect={(e) => setAge(e)}
              />
            </View>
          </View>
          <View style={{ marginTop: 10, flexDirection: "row", gap: 10 }}>
            <View style={{ gap: 10 }}>
              <Text style={{ color: "#DC5B93", fontWeight: "bold" }}>
                Breed
              </Text>
              <SelectDropdown
                defaultValue={
                  dataEdit?.dataEdit ? dataEdit?.dataEdit?.breed : breed
                }
                buttonStyle={[
                  tw`h-10 rounded-md`,
                  {
                    width: 150,
                    elevation: 5,
                    backgroundColor: "#eff4ff",
                    paddingLeft: 10,
                  },
                ]}
                data={breedList}
                defaultButtonText="--"
                dropdownStyle={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  height: 170,
                }}
                onSelect={(e) => setBreed(e)}
              />
            </View>
            <View style={{ gap: 10 }}>
              <Text style={{ color: "#DC5B93", fontWeight: "bold" }}>
                Gender
              </Text>
              <SelectDropdown
                defaultValue={
                  dataEdit?.dataEdit ? dataEdit?.dataEdit?.gender : gender
                }
                buttonStyle={[
                  tw`h-10 rounded-md`,
                  {
                    width: 150,
                    elevation: 5,
                    backgroundColor: "#eff4ff",
                    paddingLeft: 10,
                  },
                ]}
                data={["Male", "Female"]}
                defaultButtonText="--"
                dropdownStyle={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  height: 170,
                }}
                onSelect={(e) => setGender(e)}
              />
            </View>
          </View>
          <View style={{ marginTop: 10, gap: 10 }}>
            <Text style={{ color: "#DC5B93", fontWeight: "bold" }}>
              Description
            </Text>
            <TextInput
              defaultValue={
                dataEdit?.dataEdit
                  ? dataEdit?.dataEdit?.description
                  : description
              }
              style={[
                tw`rounded-md w-full`,
                {
                  height: 100,
                  paddingHorizontal: "48%",
                  elevation: 5,
                  backgroundColor: "#eff4ff",
                },
              ]}
              multiline
              numberOfLines={3}
              placeholder="Other description..."
              onChangeText={(e) => setDescription(e)}
            />
          </View>
          <View style={{ marginTop: 10, gap: 10, marginBottom: 15 }}>
            <Text style={{ color: "#DC5B93", fontWeight: "bold" }}>Image</Text>
            <View
              style={{
                height: 140,
                width: 307,
                borderRadius: 5,
                backgroundColor: "#eff4ff",
                elevation: 5,
              }}
            >
              <ImagePick
                setImageUrlAdd={setImgUrlAdd}
                editImg={dataEdit?.dataEdit?.photo}
              />
            </View>
          </View>
        </View>
        {/* </ScrollView> => MAS LULUS*/}

        {/* TAMBAHAN OKA */}
      </View>
    </ScrollView>
  );
}
