import { Image } from "react-native";

export default function Logo() {
  return (
    <Image
      source={require("../img/logo.png")}
      style={{ width: 40, height: 40 }}
    />
  );
}
