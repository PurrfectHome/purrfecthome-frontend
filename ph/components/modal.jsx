import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Modal,
    TouchableHighlight,
    ScrollView,
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ModalComponent() {
    const [modalVisible, setModalVisible] = useState(false);

    const food = 'Kucing Persia memerlukan makanan berkualitas tinggi yang sesuai dengan kebutuhan mereka. Pilih makanan yang kaya akan protein, rendah karbohidrat, dan lemak sehat. Jika memungkinkan, pilih makanan khusus yang dirancang untuk kucing Persia dengan kebutuhan nutrisi yang sesuai dengan bulu panjang mereka.'
    const treatment = `Sikat Rutin: Bulu kucing Persia perlu disikat setiap hari untuk mencegah gumpalan bulu dan menjaga kilau serta kebersihan bulu mereka.
    Pembersihan dan Penanganan Bulu: Mandikan kucing Persia secara teratur (sekitar satu hingga dua kali sebulan) untuk menjaga kebersihan bulu mereka. Pastikan pengeringan yang baik untuk mencegah masalah kulit.
    Perhatian Khusus di Area Matanya: Bersihkan mata mereka secara rutin dengan kapas yang dibasahi air hangat untuk mencegah penumpukan kotoran.`
    const fisik = `Kucing Persia cenderung kurang aktif daripada beberapa ras lainnya. Mereka biasanya lebih suka bermain dalam sesi yang lebih pendek, jadi sediakan mainan yang sesuai dengan preferensi mereka.
    Bantu kucing Persia untuk tetap aktif dengan sesi bermain singkat setiap hari. Ini dapat membantu menjaga berat badan yang sehat dan kesehatan secara keseluruhan.`
    const kesehatan = `Kunjungan Rutin ke Dokter Hewan: Penting untuk membawa kucing Persia Anda ke dokter hewan secara berkala untuk pemeriksaan rutin, vaksinasi yang diperlukan, dan penanganan masalah kesehatan yang mungkin muncul.
    Perhatian pada Masalah Kesehatan Khusus: Kucing Persia rentan terhadap masalah pernapasan karena bentuk wajah pesek mereka. Perhatikan tanda-tanda sesak napas atau gangguan pernapasan lainnya dan konsultasikan dengan dokter hewan jika ada kekhawatiran.`

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
                    <View style={{flex: 1, paddingHorizontal: 10, paddingTop: '20%', paddingBottom: '40%'}}>
                        <View style={{ paddingHorizontal: 10, marginTop: '20%', backgroundColor: 'white', opacity: 0.9, paddingTop: 10, borderRadius: 10, paddingBottom: 20 }}>
                            <ScrollView>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Persia</Text>
                                </View>
                                <View style={{ gap: 3 }}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                                        Food:
                                    </Text>
                                    <Text style={{ marginLeft: 20 }}>
                                        {food}
                                    </Text>
                                </View>
                                <View style={{ gap: 3 }}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 15 }}>
                                        Treatment Bulu:
                                    </Text>
                                    <Text style={{ marginLeft: 20 }}>
                                        {treatment}
                                    </Text>
                                </View>
                                <View style={{ gap: 3 }}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 15 }}>
                                        Aktivitas Fisik:
                                    </Text>
                                    <Text style={{ marginLeft: 20 }}>
                                        {fisik}
                                    </Text>
                                </View>
                                <View style={{ gap: 3 }}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 15 }}>
                                        Kesehatan:
                                    </Text>
                                    <Text style={{ marginLeft: 20 }}>
                                        {kesehatan}
                                    </Text>
                                </View>
                            </ScrollView>

                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: '#DC5B93', marginTop: 10 }}
                                onPress={toggleModal}
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={toggleModal}
                >
                    <Ionicons name='information-circle-outline' size={15} style={{ color: 'red' }} />
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
        borderRadius: 20,
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