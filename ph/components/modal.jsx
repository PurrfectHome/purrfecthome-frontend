import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Modal,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ModalComponent({ data }) {
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
          <View
            style={{
              flex: 1,
              paddingHorizontal: 10,
              paddingTop: "20%",
              paddingBottom: "40%",
            }}
          >
            <View
              style={{
                paddingHorizontal: 10,
                marginTop: "20%",
                backgroundColor: "white",
                paddingTop: 10,
                borderRadius: 10,
                paddingBottom: 20,
              }}
            >
              <ScrollView>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    {data?.breed}
                  </Text>
                </View>
                <View style={{ gap: 3 }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    {`Makanan ${data?.description?.makanan?.emoji}:`}
                  </Text>
                  <Text style={{ marginLeft: 20 }}>
                    {data?.description?.makanan?.deskripsi}
                  </Text>
                </View>
                <View style={{ gap: 3 }}>
                  <Text
                    style={{ fontSize: 15, fontWeight: "bold", marginTop: 15 }}
                  >
                    {`Kebersihan: ${data?.description?.kebersihan?.emoji}`}
                  </Text>
                  <Text style={{ marginLeft: 20 }}>
                    {data?.description?.kebersihan?.deskripsi}
                  </Text>
                </View>
                <View style={{ gap: 3 }}>
                  <Text
                    style={{ fontSize: 15, fontWeight: "bold", marginTop: 15 }}
                  >
                    {`Aktivitas Fisik ${data?.description?.aktivitas?.emoji}:`}
                  </Text>
                  <Text style={{ marginLeft: 20 }}>
                    {data?.description?.aktivitas?.deskripsi}
                  </Text>
                </View>
                <View style={{ gap: 3 }}>
                  <Text
                    style={{ fontSize: 15, fontWeight: "bold", marginTop: 15 }}
                  >
                    {`Kesehatan ${data?.description?.kesehatan?.emoji}:`}
                  </Text>
                  <Text style={{ marginLeft: 20 }}>
                    {data?.description?.kesehatan?.deskripsi}
                  </Text>
                </View>
                <View style={{ gap: 3 }}>
                  <Text
                    style={{ fontSize: 15, fontWeight: "bold", marginTop: 15 }}
                  >
                    {`Tempat Istirahat ${data?.description?.tempat_beristirahat?.emoji}:`}
                  </Text>
                  <Text style={{ marginLeft: 20 }}>
                    {data?.description?.tempat_beristirahat?.deskripsi}
                  </Text>
                </View>
              </ScrollView>

              <TouchableHighlight
                style={{
                  ...styles.openButton,
                  backgroundColor: "#DC5B93",
                  marginTop: 10,
                }}
                onPress={toggleModal}
              >
                <Text style={styles.textStyle}>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight onPress={toggleModal}>
          <Ionicons
            name="information-circle-outline"
            size={15}
            style={{ color: "red" }}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "red",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
