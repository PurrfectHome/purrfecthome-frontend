import { Image, View } from "react-native";

export default function Logo() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        paddingBottom: 8,
      }}
    >
      <Image
        source={require("../img/logo.png")}
        style={{ width: 52.5, height: 40 }}
      />
      <Image
        source={require("../img/nameLogo.png")}
        style={{ width: 90, height: 15 }}
      />
    </View>
  );
}
