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
        <View style={tw`m-2 gap-1`}>
          {/* start HERE */}
          {posts?.map((post, index) => (
            <View
              key={index}
              style={{
                backgroundColor: "white",
                flexDirection: "row",
                height: 100,
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
                <View style={tw`justify-between mar`}>
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
                    <View>
                      <TouchableOpacity style={{ marginTop: 5 }}>
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
