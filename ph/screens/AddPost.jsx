
import { useState } from "react";
import { ActivityIndicator, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Ionicons from "react-native-vector-icons/Ionicons";
import ImagePick from "../components/imagePicker";
import tw from "twrnc"

export default function AddPost({ navigation }) {

  const [content, setContent] = useState('')
  const [tag, setTag] = useState('')
  const [imgUrlAdd, setImgUrlAdd] = useState([])
  const [imgUrl, setImgUrl] = useState('')

  return (
    <>
      <ScrollView style={[tw`px-22`, { flex: 1, backgroundColor: 'white', paddingTop: '20%' }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 100 }}>
          {/* <TouchableOpacity>
            {
              loading ? <ActivityIndicator /> : <Ionicons name='paper-plane-outline' size={30} color={'#15bd06'} />
            }
          </TouchableOpacity> */}

        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', gap: 10 }}>
          <View style={{ marginTop: 10, gap: 10 }}>
            <Text style={{ color: '#DC5B93', fontWeight: 'bold' }}>Name</Text>
            <TextInput value={imgUrl}
              style={[tw`h-10 w-full rounded-md`, { backgroundColor: '#eff4ff', paddingHorizontal: '70%' }]}
              placeholder='name'
              onChangeText={e => setImgUrl(e)} />
          </View>
          <View style={{ marginTop: 10, gap: 10 }}>
            <Text style={{ color: '#DC5B93', fontWeight: 'bold' }}>Color</Text>
            <TextInput value={imgUrl}
              style={[tw`h-10 w-full rounded-md`, { backgroundColor: '#eff4ff', paddingHorizontal: '70%' }]}
              placeholder='color'
              onChangeText={e => setImgUrl(e)} />
          </View>
          <View style={{ marginTop: 10, flexDirection: 'row', gap: 10 }}>
            <View style={{ gap: 10 }}>
              <Text style={{ color: '#DC5B93', fontWeight: 'bold' }}>Size</Text>
              <SelectDropdown
                buttonStyle={[tw`h-10 rounded-md`, {
                  width: 150,
                  elevation: 5,
                  backgroundColor: '#eff4ff',
                  paddingLeft: 10,
                }]}
                data={['small', 'medium', 'Large']}
                defaultButtonText="--"
                dropdownStyle={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  height: 170,
                }}
              />
            </View>
            <View style={{ gap: 10 }}>
              <Text style={{ color: '#DC5B93', fontWeight: 'bold' }}>Age</Text>
              <SelectDropdown
                buttonStyle={[tw`h-10 rounded-md`, {
                  width: 150,
                  elevation: 5,
                  backgroundColor: '#eff4ff',
                  paddingLeft: 10
                }]}
                data={['kitten', 'adult', 'old']}
                defaultButtonText="--"
                dropdownStyle={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  height: 170,
                }}
              />
            </View>
          </View>
          <View style={{ marginTop: 10, flexDirection: 'row', gap: 10 }}>
            <View style={{ gap: 10 }}>
              <Text style={{ color: '#DC5B93', fontWeight: 'bold' }}>Breed</Text>
              <SelectDropdown
                buttonStyle={[tw`h-10 rounded-md`, {
                  width: 150,
                  elevation: 5,
                  backgroundColor: '#eff4ff',
                  paddingLeft: 10
                }]}
                data={['small', 'medium', 'Large']}
                defaultButtonText="--"
                dropdownStyle={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  height: 170,
                }}
              />
            </View>
            <View style={{ gap: 10 }}>
              <Text style={{ color: '#DC5B93', fontWeight: 'bold' }}>Gender</Text>
              <SelectDropdown
                buttonStyle={[tw`h-10 rounded-md`, {
                  width: 150,
                  elevation: 5,
                  backgroundColor: '#eff4ff',
                  paddingLeft: 10
                }]}
                data={['baby', 'young', 'adult', 'senior']}
                defaultButtonText="--"
                dropdownStyle={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  height: 170,
                }}
              />
            </View>
          </View>
          <View style={{ marginTop: 10, gap: 10 }}>
            <Text style={{ color: '#DC5B93', fontWeight: 'bold' }}>Description</Text>
            <TextInput value={content}
              style={[tw`rounded-md w-full`, {
                height: 100,
                paddingHorizontal: '48%',
                elevation: 5,
                backgroundColor: '#eff4ff'
              }]}
              multiline
              numberOfLines={3}
              placeholder="Other description..."
              onChangeText={e => setContent(e)} />
          </View>
          <View style={{ marginTop: 10, gap: 10 }}>
            <Text style={{ color: '#DC5B93', fontWeight: 'bold' }}>Image</Text>
            <View style={{height: 170, width: 307, borderRadius: 5, backgroundColor: '#eff4ff'}}>
              <ImagePick setImageUrlAdd={setImgUrlAdd} />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
