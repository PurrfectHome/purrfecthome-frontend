import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View className="mx-4 flex-row justify-between flex-wrap">
      <TouchableOpacity
        style={{ width: 50, height: 50 }}
        className="flex justify-end relative p-4 py-6 space-y-2 mb-5"
      >
        <Image
          source={"../img/logo.png"}
          style={{ width: 50, height: 50, borderRadius: 35 }}
          className="absolute"
        />
        <Text>Test Title Card</Text>
      </TouchableOpacity>
    </View>
  );
}
