
import * as ImagePicker from "expo-image-picker"
import { useEffect, useState } from "react"
import { Button, Image, Platform, ScrollView, View } from "react-native"
import Constant from "expo-constants"
import tw from "twrnc"

export default function ImagePick({setImageUrlAdd}) {
    const [image, setImages] = useState([])
    const [imageUrl, setImageUrl] = useState([])

    useEffect(() => {
        const cek = async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
                if (status !== 'granted') {
                    alert('Permission denided')
                }
            }
        }

        cek()
    }, [])

    const PickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            // allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            allowsMultipleSelection: true
        })

        if (!result.canceled) {
            const selectedImages = result.assets.map((asset) => asset.uri); 
            setImages((prevImages) => [...prevImages, ...selectedImages]);
            
            result.assets.forEach( async (asset) => {
                let newFile = {
                    uri: asset.uri, 
                    type: `ph/${asset.uri.split('.')[1]}`,
                    name: `ph.${asset.uri.split('.')[1]}`
                }
                await handleUpload(newFile)
            })
        }
    }

    const handleUpload = async (image) => {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'pf_home')
        data.append('cloud_name', 'dbnwxas35')

        try {
            const response = await fetch('https://api.cloudinary.com/v1_1/dbnwxas35/image/upload', {
                method: 'POST',
                body: data
            })

            const responseData = await response.json()
            setImageUrl((prevUrls) => [...prevUrls, responseData.url]);
            setImageUrlAdd((prevUrls) => [...prevUrls, responseData.url])
        } catch (error) {
            console.log(error)
        }
            
    }

    return (
        <>
            <View style={tw`justify-center items-center h-full`}>
                <Button title="Select Image" onPress={PickImage} />
                <ScrollView horizontal style={tw`flex-row`}>
                    {imageUrl && imageUrl.map((el, i) => (<Image key={i} source={{ uri: el }} style={[tw`w-28 h-28 mx-1`,{borderRadius: 5}]} />))}
                </ScrollView>
            </View>
        </>
    )
}