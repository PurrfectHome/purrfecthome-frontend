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
import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

const AVAILABLE = gql`
  query PostsByPosterId($status: String) {
    postsByPosterId(status: $status) {
      AdopterId
      PosterId
      _id
      age
      breed
      color
      gender
      description
      name
      photo
      size
      status
      statusPrice
    }
  }
`;

const DELETE = gql`
  mutation DeletePost($postId: ID) {
    deletePost(PostId: $postId) {
      message
      code
    }
  }
`;

export default function AdoptableCat({ navigation }) {
  const { data, loading, error, refetch } = useQuery(AVAILABLE, {
    variables: {
      status: "available",
    },
  });

  console.log(data, loading, error);
  const [posts, setPosts] = useState([]);
  const [del, { data: d, loading: l, error: e }] = useMutation(DELETE);
  const focus = useIsFocused();

  useEffect(() => {
    if (data) {
      setPosts(data?.postsByPosterId);
      console.log(data);
    }
  }, [data]);

  const released = () => {
    refetch();
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await del({
        variables: { postId: id },
      });
      console.log(id);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (focus) {
      refetch();
    }
  }, [focus, refetch]);

  return (
    <>
      <ScrollView style={{ backgroundColor: "#EAEDFC", flex: 1 }}>
        <View
          style={
            [
              tw`flex-row justify-between px-3 py-2 my-3`,
              {
                backgroundColor: '#DC5B93',
                shadowColor: "#000000",
                shadowOpacity: 0.3,
                shadowRadius: 2,
                shadowOffset: { width: 0, height: 2 },
                elevation: 5,

              }]}
        >
          <View>
            <View style={[tw`py-2`,{width: 200}]}>
              <Text style={{fontSize: 10, color: 'white'}}>Release your cat, allowing you to edit their profiles or mark them as adopted when they find their <Text style={{fontSize: 12, fontWeight: 'bold', color: '#aabbe6'}}>purrfectHome</Text></Text>
            </View>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white'}}>Release Your Cat:</Text>
            <View style={tw`py-1 pl-2`}>
              <Text style={{ color: 'white', fontSize: 11 }}>- Press <Text style={{color: '#aabbe6'}}>Release</Text> button</Text>
              <Text style={{ color: 'white', fontSize: 11 }}>- <Text style={{color: '#aabbe6'}}>Search</Text> user who adopted</Text>
              <Text style={{ color: 'white', fontSize: 11 }}>- Press <Text style={{color: '#aabbe6'}}>add</Text> button to release your cat</Text>
            </View>
          </View>
          <Image source={{ uri: 'https://i.imgur.com/rs16mnd.png' }} style={tw`w-32 h-32`} />
        </View>
        <View style={tw`mx-2 mb-2 gap-1`}>
          {/* start HERE */}
          {posts?.map((post, index) => (
            <View
              key={index}
              style={{
                backgroundColor: "white",
                flexDirection: "row",
                height: 103,
              }}
            >
              <View style={tw`p-3`}>
                <Image
                  source={{
                    uri: `${post.photo[0]}`,
                  }}
                  style={tw`w-20 h-20 rounded-md`}
                />
              </View>
              <View style={tw`flex-row justify-between flex-1 my-3`}>
                <View>
                  <View style={tw`flex-row gap-1 items-center`}>
                    <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                      {post.name}
                    </Text>
                    {post.gender === "female" ? (
                      <Ionicons
                        name="female"
                        size={20}
                        style={{ color: "#DC5B93" }}
                      />
                    ) : (
                      <Ionicons
                        name="male"
                        size={20}
                        style={{ color: "#DC5B93" }}
                      />
                    )}
                  </View>
                  <Text style={{ color: "#92aae2" }}>{post.breed}</Text>
                </View>
                <View style={tw`justify-between`}>
                  <View style={tw`justify-between items-end mr-3`}>
                    <View style={tw`flex-row gap-3 items-center`}>
                      {/* EDIT BUTTON */}
                      <TouchableOpacity
                        style={tw`flex-row items-end`}
                        onPress={() => {
                          navigation.navigate("Add", {
                            dataEdit: post,
                          });
                        }}
                      >
                        <Ionicons name="pencil" size={20} color={"#92aae2"} />
                        <Text style={{ fontSize: 12, color: "#92aae2" }}>
                          Edit
                        </Text>
                      </TouchableOpacity>
                      {/* DELETE BUTTON */}
                      <TouchableOpacity onPress={() => handleDelete(post._id)}>
                        <Ionicons
                          name="trash-outline"
                          size={25}
                          color={"red"}
                        />
                      </TouchableOpacity>
                    </View>
                    {/* RELEASE */}
                    <View style={tw`mt-6 ml-2`}>
                      <TouchableOpacity style={tw`items-end justify-end`}>
                        <ModalComponentRelease
                          postId={post._id}
                          refetch={released}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
