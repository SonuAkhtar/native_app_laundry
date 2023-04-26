import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const PickupScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState([]);
  const [delivery, setDelivery] = useState([]);

  const deliveryTime = [
    {
      id: "0",
      name: "2-3 days",
    },
    {
      id: "1",
      name: "3-4 days",
    },
    {
      id: "2",
      name: "4-5 days",
    },
    {
      id: "3",
      name: "5-6 days",
    },
    {
      id: "4",
      name: "Tommorrow",
    },
  ];

  const times = [
    {
      id: "0",
      name: "11:00 PM",
    },
    {
      id: "1",
      name: "12:00 PM",
    },
    {
      id: "2",
      name: "01:00 PM",
    },
    {
      id: "3",
      name: "02:00 PM",
    },
    {
      id: "3",
      name: "03:00 PM",
    },
    {
      id: "5",
      name: "04:00 PM",
    },
  ];

  const navigation = useNavigation();
  const proceedToCart = () => {
    if (!selectedDate || !selectedTime || !delivery) {
      Alert.alert(
        "Empty or Invalid",
        "Please select all fields",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel"),
            style: "cancel",
          },
          {
            text: "Ok",
            onPress: () => console.log("Ok"),
          },
        ],
        { cancelable: false }
      );
    }

    if (selectedDate && selectedTime && delivery) {
      navigation.replace("cart", {
        selectedTime: selectedTime,
        no_Of_days: delivery,
        pickUpDate: selectedDate,
      });
    }
  };
  return (
    <>
      <SafeAreaView>
        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
          Enter address
        </Text>
        <TextInput
          style={{
            padding: 40,
            borderColor: "gray",
            borderWidth: 0.7,
            paddingVertical: 80,
            borderRadius: 9,
            margin: 10,
          }}
        />
        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
          Pickup Date
        </Text>
        <HorizontalDatepicker
          mode="gregorian"
          startDate={new Date("2023-04-13")}
          endDate={new Date("2023-04-21")}
          initialSelectedDate={new Date("2020-08-22")}
          onSelectedDateChange={(date) => setSelectedDate(date)}
          selectedItemWidth={170}
          unselectedItemWidth={38}
          itemHeight={38}
          itemRadius={10}
          selectedItemTextStyle={styles.selectedItemTextStyle}
          unselectedItemTextStyle={styles.selectedItemTextStyle}
          selectedItemBackgroundColor="#222831"
          unselectedItemBackgroundColor="#ececec"
          flatListContainerStyle={styles.flatListContainerStyle}
        />
        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
          Select Time
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {times.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedTime(item.name)}
              style={
                selectedTime.includes(item.name)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "red",
                      borderWidth: 0.7,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "gray",
                      borderWidth: 0.7,
                    }
              }
            >
              <Text>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
          Delivery Date
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {deliveryTime.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setDelivery(item.name)}
              style={
                delivery.includes(item.name)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "red",
                      borderWidth: 0.7,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "gray",
                      borderWidth: 0.7,
                    }
              }
            >
              <Text>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </SafeAreaView>

      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#088f8f",
            padding: 10,
            marginBottom: 30,
            marginTop: "auto",
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
          <Pressable onPress={proceedToCart}>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              Proceed to Cart
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default PickupScreen;

const styles = StyleSheet.create({});
