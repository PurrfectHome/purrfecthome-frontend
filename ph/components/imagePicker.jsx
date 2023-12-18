import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import {
  Button,
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Constant from "expo-constants";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

export default function ImagePick({ setImageUrlAdd, editImg }) {
  const [image, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const cek = async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Permission denided");
        }
      }
    };

    cek();
  }, []);

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      const selectedImages = result.assets.map((asset) => asset.uri);
      setImages((prevImages) => [...prevImages, ...selectedImages]);

      result.assets.forEach(async (asset) => {
        let newFile = {
          uri: asset.uri,
          type: `ph/${asset.uri.split(".")[1]}`,
          name: `ph.${asset.uri.split(".")[1]}`,
        };
        await handleUpload(newFile);
      });
    }
  };

  const handleUpload = async (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "pf_home");
    data.append("cloud_name", "dbnwxas35");

    setLoad(true);

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dbnwxas35/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const responseData = await response.json();

      console.log(load, ">>> load console");

      setImageUrl((prevUrls) => [...prevUrls, responseData.url]);
      setImageUrlAdd((prevUrls) => [...prevUrls, responseData.url]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  };

  let arrImg;

  if (editImg) {
    arrImg = [...imageUrl, ...editImg];
  }

  return (
    <>
      <View style={tw`justify-center items-center h-full`}>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            flexDirection: "row",
            gap: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={PickImage}
        >
          <Text style={{ fontSize: 12, color: "#DC5B93" }}>Choose Image</Text>
          <Ionicons name="images" size={24} color="#DC5B93" />
        </TouchableOpacity>
        <ScrollView horizontal style={tw`flex-row`}>
          {load ? (
            <View style={[tw`items-center`, { marginTop: "10%" }]}>
              <Text
                style={{ color: "#92aae2", fontSize: 10, fontWeight: "bold" }}
              >
                Loading Image...
              </Text>
            </View>
          ) : editImg ? (
            arrImg.map((el, i) => (
              <Image
                key={i}
                source={{ uri: el }}
                style={[tw`w-20 h-20 mx-1`, { borderRadius: 5 }]}
              />
            ))
          ) : (
            imageUrl &&
            imageUrl.map((el, i) => (
              <Image
                key={i}
                source={{ uri: el }}
                style={[tw`w-20 h-20 mx-1`, { borderRadius: 5 }]}
              />
            ))
          )}
        </ScrollView>
      </View>
    </>
  );
}
