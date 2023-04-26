import React, { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import * as Location from "expo-location";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import DressItem from "../components/DressItem";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../ProductReducer";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);

  const navigation = useNavigation();

  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "We are loading your location"
  );
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);

  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location services not enabled",
        "Please enable the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("cancel presssed"),
            style: "cancel",
          },
          {
            text: "Ok",
            onPress: () => console.log("Ok pressed"),
          },
        ],
        { cancelable: false }
      );
    } else {
      setLocationServicesEnabled(enabled);
    }
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("cancel presssed"),
            style: "cancel",
          },
          {
            text: "Ok",
            onPress: () => console.log("Ok pressed"),
          },
        ],
        { cancelable: false }
      );
    }
    const { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        setDisplayCurrentAddress(address);
      }
    }
  };

  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (product.length > 0) return;

    const fetchProducts = () => {
      services.map((service) => dispatch(getProducts(service)));
    };
    fetchProducts();
  }, []);

  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      name: "Shirt",
      quantity: "0",
      price: 10,
    },
    {
      id: "1",
      image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      name: "Shirt",
      quantity: "0",
      price: 10,
    },
    {
      id: "2",
      image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      name: "Shirt",
      quantity: "0",
      price: 10,
    },
    {
      id: "3",
      image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      name: "Shirt",
      quantity: "0",
      price: 10,
    },
    {
      id: "4",
      image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      name: "Shirt",
      quantity: "0",
      price: 10,
    },
    {
      id: "5",
      image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      name: "Shirt",
      quantity: "0",
      price: 10,
    },
  ];

  return (
    <>
      <ScrollView
        style={{ backgroundColor: "#f0f0f0", flex: 1, marginTop: 50 }}
      >
        {/* Location and profile */}
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        >
          <MaterialIcons name="location-on" size={30} color="#fd5c63" />
          <View>
            <Text style={{ fontSize: 18, fontWeight: 600 }}>Home</Text>
            <Text>Current location</Text>
          </View>

          <Pressable style={{ marginLeft: "auto", marginRight: 7 }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "red",
              }}
              source={{ uri: "" }}
            />
          </Pressable>
        </View>

        {/* Search bar */}

        <View
          style={{
            margin: 10,
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 0.8,
            borderColor: "#c0c0c0",
            borderRadius: 7,
          }}
        >
          <TextInput placeholder="Search for items" />
          <Feather name="search" size={24} color="#fd5c63" />
        </View>

        {/* Image Carousel */}
        <Carousel />

        {/* Services */}
        <Services />

        {/* Render products */}
        {product.map((item, index) => (
          <DressItem item={item} key={index} />
        ))}
      </ScrollView>
      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#088f8f",
            padding: 10,
            marginBottom: 30,
            margin: 15,
            borderRadius: 7,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              {cart.length} items | ${total}
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "400",
                color: "white",
                marginVertical: 6,
              }}
            >
              Extra charges might apply
            </Text>
          </View>
          <Pressable onPress={() => navigation.navigate("pickup")}>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              Proceed to pickup
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
