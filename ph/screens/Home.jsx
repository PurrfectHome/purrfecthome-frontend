import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc"
import CardHome from "../components/CardHome";
import SelectDropdown from "react-native-select-dropdown";

export default function Home({ navigation }) {
  const breeds = [
    "Maine Coon",
    "Siamese",
    "Persian",
    "British Shorthair",
    "Bengal",
    "Ragdoll",
    "Sphynx",
    "Abyssinian",
    "Scottish Fold",
    "Norwegian Forest Cat",
    "Siberian",
    "Exotic Shorthair",
    "Ragamuffin",
    "Burmese",
    "Russian Blue", 
  "Indonesian Domestic"
  ];

  return (
    <ScrollView style={[tw`flex-1 p-5`, { backgroundColor: 'white' }]}>
      <View style={tw`justify-center items-center mb-5`}>
        <SelectDropdown
          buttonStyle={{
            width: 170,
            height: 40,
            elevation: 5,
            backgroundColor: '#F3F7FF',
            paddingLeft: 10,
            borderRadius: 10,
            borderWidth: 0.5
          }}
          data={breeds}
          defaultButtonText="breed"
          dropdownStyle={{
            backgroundColor: "white",
            borderRadius: 10,
            height: 170
          }}
          dropdownOverlayColor="transparent"
        />
      </View>
      <View style={tw`flex-row flex-wrap justify-center gap-5`}>
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
      </View>
    </ScrollView>
  );
}
