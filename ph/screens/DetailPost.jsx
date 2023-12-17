import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import CarouselImage from "../components/carousel";
import ModalComponent from "../components/modal";

export default function DetailPost({ navigation }) {
  const [more, setMore] = useState(false);
  const originalString =
    "Ini adalah kucing yang penuh dengan kelembutan, siap memberikan kehangatan melalui belaian lembutnya. Dengan mata yang penuh kecerdasan dan keingintahuan yang tak terbatas, dia siap untuk menjadi teman setia dalam petualangan dan membagikan kasih sayangnya kepada yang menerimanya dalam keluarga baru.";
  const substring = originalString.substring(0, 150);
  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: "#DBE4FA"}}>
        <View>
          <CarouselImage />
          <View>
            <View style={tw`mx-5 mt-5 flex-row justify-between`}>
              <View style={tw`flex-row gap-3 items-center`}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>Olla</Text>
                <Ionicons
                  name="female"
                  size={25}
                  style={{ color: "#DC5B93" }}
                />
              </View>
              <TouchableOpacity onPress={() => navigation.navigate("ChatRoom")}>
                <Ionicons
                  name="chatbubble-ellipses-outline"
                  size={30}
                  style={{ color: "#DC5B93" }}
                />
              </TouchableOpacity>
            </View>
            <View style={tw`mx-5 mt-5 flex-row justify-between`}>
              <View style={tw`gap-2 justify-center items-center`}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Breed</Text>
                <View style={tw`flex-row gap-1 items-center`}>
                  <Text>Persia</Text>
                  <ModalComponent />
                </View>
              </View>
              <View style={{ borderWidth: 0.5, opacity: 0.2 }}></View>
              <View style={tw`gap-2 justify-center items-center`}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Age</Text>
                <Text>Adult</Text>
              </View>
              <View style={{ borderWidth: 0.5, opacity: 0.2 }}></View>
              <View style={tw`gap-2 justify-center items-center`}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Size</Text>
                <Text>Medium</Text>
              </View>
              <View style={{ borderWidth: 0.5, opacity: 0.2 }}></View>
              <View style={tw`gap-2 justify-center items-center`}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Color</Text>
                <Text>Grey</Text>
              </View>
            </View>
            <View style={tw`mx-5 mt-5`}>
              <View style={tw`gap-2`}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Status</Text>
                <View style={tw`flex-row gap-1 items-center`}>
                  <View
                    style={{
                      borderRadius: 7,
                      backgroundColor: "#92aae2",
                      padding: 5,
                    }}
                  >
                    <Text style={{ fontSize: 15, color: "white" }}>
                      Without Adoption Fee
                    </Text>
                  </View>
                  <Ionicons
                    name="pricetag"
                    size={17}
                    style={{ color: "#92aae2" }}
                  />
                </View>
                {/* <View style={tw`flex-row gap-1 items-center`}>
                  <View style={{borderRadius: 7, backgroundColor: '#DC5B93', padding: 5 }}>
                    <Text style={{ fontSize: 15, color: 'white'}}>
                      With Adoption Fee
                    </Text>
                  </View>
                  <Ionicons name="pricetag" size={17} style={{ color: '#DC5B93' }} />
                </View> */}
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
                  <Text>{!more ? `${substring}...` : `${originalString}`}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
