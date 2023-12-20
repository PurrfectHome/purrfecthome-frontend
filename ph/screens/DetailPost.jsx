import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect, useState } from "react";
import CarouselImage from "../components/carousel";
import ModalComponent from "../components/modal";
import { gql, useMutation, useQuery } from "@apollo/client";

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

const ADD_CONVO = gql`
  mutation AddConvo($userId2: ID) {
    addConvo(UserId2: $userId2) {
      code
      data
      message
    }
  }
`;

export default function DetailPost({ navigation, route }) {
  const [more, setMore] = useState(false);
  const [post, setPost] = useState("");
  const { id } = route.params;
  const { height, width } = useWindowDimensions();
  const [moreInfo, setMoreInfo] = useState(false)

  const { data, error, loading, refetch } = useQuery(DETAIL_POST, {
    variables: { postId: id },
  });

  const [addConvo, { data: d, error: e, loading: l }] = useMutation(ADD_CONVO);

  useEffect(() => {
    if (data) {
      setPost(data.postsById);
    }
  }, [data]);

  let desc;
  if (data) {
    desc = post?.description?.substring(0, 150);
  }

  // ADD NEW CONVERSATION:
  const handleAddConvo = async (PosterId) => {
    console.log(PosterId, ">>> USER ID");
    try {
      const response = await addConvo({
        variables: { userId2: PosterId },
      });
      console.log(response);
      if (d) {
        navigation.navigate("ChatRoom", { id: d.addConvo.data });
      }
    } catch (error) {
      console.log(error.message);
      const id = error.message;
      if (id) {
        navigation.navigate("ChatRoom", { id: id });
      }
    }
  };

  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: "#DBE4FA" }}>
        <View>
          {loading ? (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: height * 0.35,
              }}
            >
              <ActivityIndicator size={50} />
            </View>
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
                        style={{ color: "#92aae2" }}
                      />
                    )}
                  </View>
                  <TouchableOpacity
                    onPress={() => handleAddConvo(post.PosterId)}
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
                      {/* <ModalComponent data={post?.Information} /> */}
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
                          ? `${desc
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
                <View style={tw`mx-5`}>
                  <View style={tw`gap-2`}>
                    <TouchableOpacity
                      onPress={() => {
                        !moreInfo ? setMoreInfo(true) : setMoreInfo(false);
                      }}
                      style={{}}>
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        About <Text style={{color: '#DC5B93'}}>{post?.breed}</Text> 
                      </Text>
                      {
                        moreInfo ? '' :
                      <View style={[tw`pb-5`]}>
                        <Text style={{fontSize: 9, color: '#DC5B93'}}>{`(Press here to get more information about breed)`}</Text>
                      </View>
                      }
                    </TouchableOpacity>
                    {
                      !moreInfo ? '' :
                        <View style={[tw`mb-5`]}>
                          <View style={{ gap: 3 }}>
                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                              {`Makanan ${post?.Information?.description?.makanan?.emoji}:`}
                            </Text>
                            <Text style={{ marginLeft: 20 }}>
                              {post?.Information?.description?.makanan?.deskripsi}
                            </Text>
                          </View>
                          <View style={{ gap: 3 }}>
                            <Text
                              style={{ fontSize: 15, fontWeight: "bold", marginTop: 15 }}
                            >
                              {`Kebersihan: ${post?.Information?.description?.kebersihan?.emoji}`}
                            </Text>
                            <Text style={{ marginLeft: 20 }}>
                              {post?.Information?.description?.kebersihan?.deskripsi}
                            </Text>
                          </View>
                          <View style={{ gap: 3 }}>
                            <Text
                              style={{ fontSize: 15, fontWeight: "bold", marginTop: 15 }}
                            >
                              {`Aktivitas Fisik ${post?.Information?.description?.aktivitas?.emoji}:`}
                            </Text>
                            <Text style={{ marginLeft: 20 }}>
                              {post?.Information?.description?.aktivitas?.deskripsi}
                            </Text>
                          </View>
                          <View style={{ gap: 3 }}>
                            <Text
                              style={{ fontSize: 15, fontWeight: "bold", marginTop: 15 }}
                            >
                              {`Kesehatan ${post?.Information?.description?.kesehatan?.emoji}:`}
                            </Text>
                            <Text style={{ marginLeft: 20 }}>
                              {post?.Information?.description?.kesehatan?.deskripsi}
                            </Text>
                          </View>
                          <View style={{ gap: 3 }}>
                            <Text
                              style={{ fontSize: 15, fontWeight: "bold", marginTop: 15 }}
                            >
                              {`Tempat Istirahat ${post?.Information?.description?.tempat_beristirahat?.emoji}:`}
                            </Text>
                            <Text style={{ marginLeft: 20 }}>
                              {post?.Information?.description?.tempat_beristirahat?.deskripsi}
                            </Text>
                          </View>
                        </View>
                    }
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
