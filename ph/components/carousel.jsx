import React, { useState, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
} from 'react-native';
import Carousel from 'react-native-snap-carousel-new';
import tw from "twrnc"

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function CarouselImage() {

    const [activeIndex, setActiveIndex] = useState(0);;

    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide}>
                <Image source={{ uri: item.image }} style={tw`w-full h-80`}/>
            </View>
        );
    };

    const carouselItems = [
        { image: 'https://rawznaturalpetfood.com/wp-content/uploads/russian-blue-cats.jpg' },
        { image: 'https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/03/russian-blue-768x510.jpg' },
        { image: 'https://www.dailypaws.com/thmb/595g0xRVhpc3FdG7U7h3OGlm2Ls=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/russian-blue-cat-lounging-653846760-2000-6a72f95cede242b09f15cfe1917730ad.jpg' },
    ];

    const pagination = () => {
        return (
            <View style={styles.paginationContainer}>
                {carouselItems.map((item, key) => (
                    <TouchableOpacity
                        activeOpacity={0.7}
                        key={key}
                        style={[
                            styles.dot,
                            activeIndex === key ? styles.dotActive : {},
                        ]}
                        onPress={() => carouselRef.current.snapToItem(key)}
                    />
                ))}
            </View>
        );
    };

    const carouselRef = useRef(null);

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                data={carouselItems}
                renderItem={_renderItem}
                sliderWidth={width}
                itemWidth={width}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                enableMomentum={true}
                activeSlideAlignment={'start'}
                containerCustomStyle={styles.carouselContainer}
                onSnapToItem={(index) => setActiveIndex(index)}
            />
            {pagination()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    carouselContainer: {
        height: height / 2.7,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
    },
    paginationContainer: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    dotActive: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'rgba(0, 0, 0, 1)',
    },
});
