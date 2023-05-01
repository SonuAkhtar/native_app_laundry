import LottieView from "lottie-react-native";
import React from "react";
import { Pressable, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OrderScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      {/* <LottieView
        source={require("../assets/splash.png")}
        style={{
          height: 360,
          width: 300,
          alignSelf: "center",
          marginTop: 40,
          justifyContent: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      /> */}
      <Text
        style={{
          marginTop: 40,
          fontSize: 19,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Your order has been placed
      </Text>

      <Pressable onPress={() => navigation.navigate("home")}>
        Go back to Home
      </Pressable>

      {/* <LottieView
        source={require("../assets/splash.png")}
        style={{
          height: 300,
          width: 300,
          top: 100,
          position: "absolute",
          alignSelf: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      /> */}
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
