import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect, useState } from "react";
import CarouselImage from "../components/carousel";
import ModalComponent from "../components/modal";
import { gql, useQuery } from "@apollo/client";

const DETAIL_POST = gql`
  query PostsById($postId: String) {
    postsById(PostId: $postId) {
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
      Information {
        _id
        breed
        description {
          makanan {
            deskripsi
            emoji
          }
          kesehatan {
            deskripsi
            emoji
          }
          kebersihan {
            deskripsi
            emoji
          }
          aktivitas {
            deskripsi
            emoji
          }
          tempat_beristirahat {
            deskripsi
            emoji
          }
        }
      }
      status
      statusPrice
      photo
      createdAt
      updatedAt
      InformationId
    }
  }
`;

export default function DetailPost({ navigation, route }) {
  const [more, setMore] = useState(false);
  const [post, setPost] = useState("");
  const { id } = route.params;

  const { data, error, loading, refetch } = useQuery(DETAIL_POST, {
    variables: { postId: id },
  });

  useEffect(() => {
    if (data) {
      setPost(data.postsById);
      console.log(data);
    }
  }, [data]);

  let desc;
  if (data) {
    desc = post?.description?.substring(0, 150);
  }
  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: "#DBE4FA" }}>
        <View>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <>
              <CarouselImage image={post?.photo} />
              <View>
                <View style={tw`mx-5 mt-5 flex-row justify-between`}>
                  <View style={tw`flex-row gap-3 items-center`}>
                    <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                      {post?.name}
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
                  <TouchableOpacity
                    onPress={() => navigation.navigate("ChatRoom")}
                  >
                    <Ionicons
                      name="chatbubble-ellipses-outline"
                      size={30}
                      style={{ color: "#DC5B93" }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={tw`mx-5 mt-5 flex-row justify-between`}>
                  <View style={tw`gap-2 justify-center items-center`}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      Breed
                    </Text>
                    <View style={tw`flex-row gap-1 items-center`}>
                      <Text>{post?.breed}</Text>
                      <ModalComponent data={post?.Information} />
                    </View>
                  </View>
                  <View style={{ borderWidth: 0.5, opacity: 0.2 }}></View>
                  <View style={tw`gap-2 justify-center items-center`}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      Age
                    </Text>
                    <Text>{post?.age}</Text>
                  </View>
                  <View style={{ borderWidth: 0.5, opacity: 0.2 }}></View>
                  <View style={tw`gap-2 justify-center items-center`}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      Size
                    </Text>
                    <Text>{post?.size}</Text>
                  </View>
                  <View style={{ borderWidth: 0.5, opacity: 0.2 }}></View>
                  <View style={tw`gap-2 justify-center items-center`}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      Color
                    </Text>
                    <Text>{post?.color}</Text>
                  </View>
                </View>
                <View style={tw`mx-5 mt-5`}>
                  <View style={tw`gap-2`}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      Status
                    </Text>
                    <View style={tw`flex-row gap-1 items-center`}>
                      <View
                        style={{
                          borderRadius: 7,
                          backgroundColor:
                            post.statusPrice === "Without Adoption Fee"
                              ? "#92aae2"
                              : "#DC5B93",
                          padding: 5,
                        }}
                      >
                        <Text style={{ fontSize: 15, color: "white" }}>
                          {post?.statusPrice}
                        </Text>
                      </View>
                      <Ionicons
                        name="pricetag"
                        size={17}
                        style={{
                          color:
                            post.statusPrice === "Without Adoption Fee"
                              ? "#92aae2"
                              : "#DC5B93",
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View style={tw`mx-5 mt-5`}>
                  <View style={tw`gap-2`}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      Description
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        !more ? setMore(true) : setMore(false);
                      }}
                      style={tw`pb-5`}
                    >
                      <Text>
                        {!more
                          ? `${
                              desc
                                ? desc.length === 150
                                  ? `${desc}...`
                                  : desc
                                : "Loading..."
                            }`
                          : `${post?.description}`}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </>
  );
}
