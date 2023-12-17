import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function CardHome({ post, navigation }) {
  return (
    <>
      <View
        style={[
          tw`h-60 w-4/9`,
          {
            backgroundColor: "#F3F7FF",
            borderRadius: 10,
            shadowColor: "#000000",
            shadowOpacity: 0.3,
            shadowRadius: 2,
            shadowOffset: { width: 0, height: 2 },
            elevation: 5,
          },
        ]}
      >
        <View style={[tw`h-2/3`]}>
          <Image
            source={{ uri: `${post.photo[0]}` }}
            style={[
              tw`h-full w-full`,
              { borderTopLeftRadius: 10, borderTopRightRadius: 10 },
            ]}
          />
        </View>
        <View style={tw`p-2 gap-1`}>
          <View style={tw`flex-row justify-between`}>
            <Text style={{ fontSize: 20 }}>{post.name}</Text>
            {post.gender === "female" ? (
              <Ionicons name="female" size={20} style={{ color: "#DC5B93" }} />
            ) : (
              <Ionicons name="male" size={20} style={{ color: "#DC5B93" }} />
            )}
          </View>
          <Text style={{ color: "#849ACE" }}>{post.breed}</Text>
          <View style={tw`flex-row justify-between`}>
            <Text style={{ fontSize: 13, color: "#849ACE" }}>{post.age}</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Detail", {
                  id: post._id,
                });
              }}
            >
              <Ionicons
                name="arrow-forward-outline"
                size={20}
                style={{ color: "#DC5B93", opacity: 0.7 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
