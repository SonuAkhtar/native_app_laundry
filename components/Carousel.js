import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9-BxrefNQGvh1WDDCDLyjA9NRlCvrfoWYNeUc7wHc&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwB5Jiv-83Buqay0BUtRDCRScQM5a3VtpHmCjYS3ME&s",
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
