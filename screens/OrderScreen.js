import LottieView from "lottie-react-native";
import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const OrderScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <SafeAreaView
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 20 }}>
            Please wait for confirmation
          </Text>
          <ActivityIndicator size="large" color="red" />
        </SafeAreaView>
      ) : (
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
              marginTop: 100,
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Order placed Successfully!
          </Text>

          <View
            style={{
              marginTop: 150,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Pressable
              onPress={() => navigation.navigate("home")}
              style={{
                width: 150,
                paddingVertical: 15,
                backgroundColor: "#088f8f",
                color: "white",
                fontWeight: "600",
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Home
            </Pressable>
          </View>

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
      )}
    </>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
