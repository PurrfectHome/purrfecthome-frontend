import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import Carousel from "react-native-snap-carousel-new";
import tw from "twrnc";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function CarouselImage({ image }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Image source={{ uri: item.image }} style={tw`w-full h-80`} />
      </View>
    );
  };

  const carouselItems = image?.map((el) => {
    return { image: el };
  });
  console.log(carouselItems);

  const pagination = () => {
    if (carouselItems) {
      return (
        <View style={styles.paginationContainer}>
          {carouselItems?.map((item, key) => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={key}
              style={[styles.dot, activeIndex === key ? styles.dotActive : {}]}
              onPress={() => carouselRef.current.snapToItem(key)}
            />
          ))}
        </View>
      );
    }
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
        activeSlideAlignment={"start"}
        containerCustomStyle={styles.carouselContainer}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      {pagination()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  carouselContainer: {
    height: height / 2.7,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
  paginationContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
});
