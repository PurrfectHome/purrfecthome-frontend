import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
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
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import tw from "twrnc";

const SEARCH = gql`
  query UsersByUsername($username: String) {
    usersByUsername(username: $username) {
      _id
      fullname
      username
      email
      password
      accountType
      createdAt
      updatedAt
    }
  }
`;

const UPDATE = gql`
  mutation UpdateAdopter($adopterId: ID, $postId: ID) {
    updateAdopter(AdopterId: $adopterId, PostId: $postId) {
      code
      message
    }
  }
`;

export default function ModalComponentRelease({ postId, refetch }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  const [release, { data: d, loading: l, error: e }] = useMutation(UPDATE);

  const { data, error, loading } = useQuery(SEARCH, {
    variables: { username: search },
  });

  const getSearch = (e) => {
    setSearch(e);
  };

  const handleSearch = async () => {
    try {
      if (data) {
        setUsers(data.usersByUsername);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRelease = async (id) => {
    const data = {
      adopterId: id,
      postId,
    };
    try {
      if (loading) return;
      console.log(data);
      const response = await release({
        variables: data,
      });
      console.log(response);
      toggleModal();
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(postId);
  console.log(users);

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
                borderWidth: 1,
                borderColor: "#92aae2",
              }}
            >
              <ScrollView>
                <View style={tw`flex-row w-full items-center justify-center`}>
                  <TextInput
                    onChangeText={getSearch}
                    placeholder="find adopter"
                    style={[
                      tw`pl-3 w-4/5 h-10 rounded-l-full`,
                      { backgroundColor: "#DBE4FA" },
                    ]}
                    placeholderTextColor={"#92aae2"}
                  />
                  <TouchableOpacity
                    onPress={handleSearch}
                    style={[
                      tw`h-10 p-2 rounded-r-full`,
                      { backgroundColor: "#DC5B93" },
                    ]}
                  >
                    <Ionicons
                      name="search-outline"
                      size={20}
                      style={{ color: "white" }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={tw`p-5 gap-3`}>
                  {users?.map((el, i) => (
                    <View
                      key={i}
                      style={tw`flex-row justify-between items-center`}
                    >
                      <View style={tw`flex-row items-center gap-3`}>
                        <Image
                          source={{
                            uri: `https://www.gravatar.com/avatar/${el._id}?s=200&r=pg&d=robohash`,
                          }}
                          style={tw`w-15 h-15 rounded-full`}
                        />
                        <View>
                          <Text>{el.fullname}</Text>
                        </View>
                      </View>
                      <View>
                        <TouchableHighlight
                          onPress={() => handleRelease(el._id)}
                        >
                          <Ionicons
                            name="add-circle-outline"
                            size={30}
                            style={{ color: "#92aae2" }}
                          />
                        </TouchableHighlight>
                      </View>
                    </View>
                  ))}
                </View>
              </ScrollView>
              <View style={tw`flex-row justify-center items-center gap-5`}>
                <TouchableHighlight
                  style={{
                    ...styles.openButton,
                    backgroundColor: "#DC5B93",
                    marginTop: 10,
                  }}
                  onPress={toggleModal}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableHighlight onPress={toggleModal}>
          <View
            style={[tw`px-2 py-1 mr-1 rounded-md`, { backgroundColor: "#92aae2" }]}
          >
            <Text style={{ color: "white" }}>Release</Text>
          </View>
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
    borderRadius: 7,
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
