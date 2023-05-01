import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPUVD4CFWarML5doBlbWueho7Pd3lr-kbFmmPpcbhaidELFcAyD6JJ6qpm8HUZyZstpcQ&usqp=CAU",
    "https://st.depositphotos.com/3877249/56765/v/450/depositphotos_567650102-stock-illustration-laundry-room-with-washing-machine.jpg",
  ];
  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor="#13274f"
        inactiveDotColor="#90a4ae"
        imageComponentStyle={{
          borderRadius: 6,
          width: "94%",
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
