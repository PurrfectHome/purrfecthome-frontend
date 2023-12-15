import { ActivityIndicator, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import tw from "twrnc"
import Ionicons from "react-native-vector-icons/Ionicons";
import ModalComponentRelease from "../components/modalRelease";

export default function AdoptableCat({ navigation }) {

  return (
    <>
      <ScrollView style={{ backgroundColor: '#EAEDFC', flex: 1 }}>
        <View style={tw`m-2 gap-1`}>
          <View style={{ backgroundColor: 'white', flexDirection: 'row' }}>
            <View style={tw`p-3`}>
              <Image source={{ uri: 'https://rawznaturalpetfood.com/wp-content/uploads/russian-blue-cats.jpg' }} style={tw`w-20 h-20 rounded-md`} />
            </View>
            <View style={tw`flex-row justify-between flex-1 my-3`}>
              <View>
                <View style={tw`flex-row gap-2 items-center`}>
                  <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                    Olla
                  </Text>
                  <Ionicons name="female" size={25} style={{ color: '#DC5B93' }} />
                </View>
                <Text style={{ color: '#92aae2' }}>Himalaya</Text>
                <View>

                </View>
              </View>
              <View style={tw`justify-between`}>
                <View >
                  <Text style={{ opacity: 0.5 }}>15-12-2023</Text>
                </View>
                <TouchableOpacity>
                  <ModalComponentRelease />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: 'white', flexDirection: 'row' }}>
            <View style={tw`p-3`}>
              <Image source={{ uri: 'https://rawznaturalpetfood.com/wp-content/uploads/russian-blue-cats.jpg' }} style={tw`w-20 h-20 rounded-md`} />
            </View>
            <View style={tw`flex-row justify-between flex-1 my-3`}>
              <View>
                <View style={tw`flex-row gap-2 items-center`}>
                  <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                    Ollie
                  </Text>
                  <Ionicons name="female" size={25} style={{ color: '#DC5B93' }} />
                </View>
                <Text style={{ color: '#92aae2' }}>Himalaya</Text>
                <View>

                </View>
              </View>
              <View style={tw`justify-between`}>
                <View>
                  <Text style={{ opacity: 0.5 }}>15-12-2023</Text>
                </View>
                <TouchableOpacity>
                  <ModalComponentRelease />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
