import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import ModalComponentRelease from "../components/modalRelease";
import { gql } from "@apollo/client";

const POSTED = gql`
  query PostsByPosterId($posterId: String, $status: String) {
    postsByPosterId(PosterId: $posterId, status: $status) {
      _id
      name
      size
      age
      breed
      gender
      color
      description
      long
      lat
      AdopterId
      PosterId
      status
      statusPrice
      photo
    }
  }
`;

export default function AdoptableCat({ navigation }) {
  return (
    <>
      <ScrollView style={{ backgroundColor: "#EAEDFC", flex: 1 }}>
        <View style={tw`m-2 gap-1`}>
          {/* start HERE */}
          <View style={{ backgroundColor: "white", flexDirection: "row" }}>
            <View style={tw`p-3`}>
              <Image
                source={{
                  uri: "https://rawznaturalpetfood.com/wp-content/uploads/russian-blue-cats.jpg",
                }}
                style={tw`w-20 h-20 rounded-md`}
              />
            </View>
            <View style={tw`flex-row justify-between flex-1 my-3`}>
              <View>
                <View style={tw`flex-row gap-1 items-center`}>
                  <Text style={{ fontSize: 25, fontWeight: "bold" }}>Olla</Text>
                  <Ionicons
                    name="female"
                    size={25}
                    style={{ color: "#DC5B93" }}
                  />
                </View>
                <Text style={{ color: "#92aae2" }}>Himalaya</Text>
                <View>
                  <TouchableOpacity style={{ marginTop: 5 }}>
                    <ModalComponentRelease />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={tw`justify-between items-end mr-3`}>
                <View>
                  <Text style={{ opacity: 0.5 }}>15-12-2023</Text>
                </View>
                <View style={tw`flex-row gap-3 items-center`}>
                  <TouchableOpacity style={tw`flex-row items-end`}>
                    <Ionicons name="pencil" size={20} color={"#92aae2"} />
                    <Text style={{ fontSize: 12, color: "#92aae2" }}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Ionicons name="trash-outline" size={25} color={"red"} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
