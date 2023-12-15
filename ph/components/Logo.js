import { Image, View } from "react-native";

export default function Logo() {
  return (
    <View style={{ paddingLeft: 10, paddingBottom: 8 }}>
      <Image
        source={require("../img/logo.png")}
        style={{ width: 40, height: 40 }}
      />
    </View>
  );
}
