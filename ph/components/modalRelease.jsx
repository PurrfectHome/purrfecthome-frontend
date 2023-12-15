import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Modal,
    TouchableHighlight,
    ScrollView,
    TextInput,
    Image,
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import tw from "twrnc"

export default function ModalComponentRelease() {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <View>

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={toggleModal}
                >
                    <View style={{ flex: 1, paddingHorizontal: 10, paddingTop: '20%', paddingBottom: '40%' }}>
                        <View style={{ paddingHorizontal: 10, marginTop: '20%', backgroundColor: 'white', paddingTop: 10, borderRadius: 10, paddingBottom: 20, borderWidth: 1, borderColor: '#92aae2' }}>
                            <ScrollView>
                                <View style={tw`flex-row w-full items-center justify-center`}>
                                    <TextInput placeholder='find adopter' style={[tw`pl-3 w-4/5 h-10 rounded-l-full`, { backgroundColor: '#DBE4FA' }]} placeholderTextColor={'#92aae2'} />
                                    <View style={[tw`h-10 p-2 rounded-r-full`, { backgroundColor: '#DBE4FA' }]}>
                                        <Ionicons name='search-outline' size={20} style={{ color: '#92aae2' }} />
                                    </View>
                                </View>
                                <View style={tw`p-5 gap-3`}>
                                    <View style={tw`flex-row justify-between items-center`}>
                                        <View style={tw`flex-row items-center gap-3`}>
                                            <Image source={{ uri: 'https://rawznaturalpetfood.com/wp-content/uploads/russian-blue-cats.jpg' }} style={tw`w-15 h-15 rounded-full`} />
                                            <View>
                                                <Text>
                                                    Smitty Werben Man Jensen
                                                </Text>
                                            </View>
                                        </View>
                                        <View>
                                            <TouchableHighlight
                                                onPress={toggleModal}
                                            >
                                                <Ionicons name='add-circle-outline' size={30} style={{color: '#92aae2'}}/>
                                            </TouchableHighlight>
                                        </View>
                                    </View>
                                    <View style={tw`flex-row justify-between items-center`}>
                                        <View style={tw`flex-row items-center gap-3`}>
                                            <Image source={{ uri: 'https://rawznaturalpetfood.com/wp-content/uploads/russian-blue-cats.jpg' }} style={tw`w-15 h-15 rounded-full`} />
                                            <View>
                                                <Text>
                                                    Puff
                                                </Text>
                                            </View>
                                        </View>
                                        <View>
                                            <TouchableHighlight
                                                onPress={toggleModal}
                                            >
                                                <Ionicons name='add-circle-outline' size={30} style={{color: '#92aae2'}}/>
                                            </TouchableHighlight>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                            <View style={tw`flex-row justify-center items-center gap-5`}>
                                <TouchableHighlight
                                    style={{ ...styles.openButton, backgroundColor: '#DC5B93', marginTop: 10 }}
                                    onPress={toggleModal}
                                >
                                    <Text style={styles.textStyle}>Cancel</Text>
                                </TouchableHighlight>

                            </View>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={toggleModal}
                >
                    <View style={[tw`p-2 mr-3 rounded-md`, { backgroundColor: '#92aae2' }]}>
                        <Text style={{ color: 'white' }}>Release</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        backgroundColor: 'red',
        borderRadius: 7,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});