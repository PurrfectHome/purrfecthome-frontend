
import { useState } from "react";
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function AddPost({ navigation }) {

  const [content, setContent] = useState('')
  const [tag, setTag] = useState('')
  const [imgUrl, setImgUrl] = useState('')

  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: '5%' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 100 }}>
          {/* <TouchableOpacity>
            {
              loading ? <ActivityIndicator /> : <Ionicons name='paper-plane-outline' size={30} color={'#15bd06'} />
            }
          </TouchableOpacity> */}

        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ marginTop: 10 }}>
            <TextInput value={imgUrl}
              style={{
                width: 350,
                height: 50,
                elevation: 5,
                paddingLeft: 10
              }}
              placeholder='name'
              onChangeText={e => setImgUrl(e)} />
          </View>
          <View style={{ marginTop: 10 }}>
            <TextInput value={imgUrl}
              style={{
                width: 350,
                height: 50,
                elevation: 5,
                paddingLeft: 10
              }}
              placeholder='color'
              onChangeText={e => setImgUrl(e)} />
          </View>
          <View style={{ marginTop: 10, flexDirection: 'row', gap: 10 }}>
            <SelectDropdown
              buttonStyle={{
                width: 170,
                height: 50,
                elevation: 5,
                backgroundColor: 'white',
                paddingLeft: 10,
              }}
              data={['small', 'medium', 'big']}
              defaultButtonText="size"
            />
            <SelectDropdown
              buttonStyle={{
                width: 170,
                height: 50,
                elevation: 5,
                backgroundColor: 'white',
                paddingLeft: 10
              }}
              data={['kitten', 'adult', 'old']}
              defaultButtonText="age"
            />
          </View>
          <View style={{ marginTop: 10, flexDirection: 'row', gap: 10 }}>
            <SelectDropdown
              buttonStyle={{
                width: 170,
                height: 50,
                elevation: 5,
                backgroundColor: 'white',
                paddingLeft: 10,
              }}
              data={['small', 'medium', 'big']}
              defaultButtonText="breed"
            />
            <SelectDropdown
              buttonStyle={{
                width: 170,
                height: 50,
                elevation: 5,
                backgroundColor: 'white',
                paddingLeft: 10
              }}
              data={['kitten', 'adult', 'old']}
              defaultButtonText="gender"
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <TextInput value={content}
              style={{
                width: 350,
                height: 100,
                paddingLeft: 10,
                borderRadius: 15,
                elevation: 5
              }}
              multiline
              numberOfLines={3}
              placeholder="Other description..."
              onChangeText={e => setContent(e)} />
          </View>
          <View style={{ marginTop: 10 }}>
            <TextInput value={tag}
              style={{
                width: 350,
                height: 50,
                paddingLeft: 10,
                borderRadius: 15,
                elevation: 5
              }}
              placeholder='Upload your image'
              onChangeText={e => setTag(e)} />
          </View>
        </View>
      </View>
    </>
  );
}
