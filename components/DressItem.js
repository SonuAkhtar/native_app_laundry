import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreamentQuantity,
  increamentQuantity,
} from "../CartReducer";
import { decreamentQty, increamentQty } from "../ProductReducer";

const DressItem = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const addItemToCardt = () => {
    dispatch(addToCart(item));
    dispatch(increamentQty(item));
  };

  return (
    <View>
      <Pressable
        style={{
          backgroundColor: "#f8f8f8",
          borderRadius: 8,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 14,
        }}
      >
        <View>
          <Image
            source={{ uri: item.image }}
            style={{ width: 70, height: 70 }}
          />
        </View>
        <View>
          <Text
            style={{
              width: 83,
              fontSize: 17,
              fontWeight: "500",
              marginBottom: 7,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              width: 60,
              color: "gray",
              fontSize: 15,
            }}
          >
            ${item.price}
          </Text>
        </View>

        {cart.some((c) => c.id === item.id) ? (
          <Pressable
            style={{
              flexDirection: "row",
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <Pressable
              onPress={() => {
                dispatch(decreamentQuantity(item));
                dispatch(decreamentQty(item));
              }}
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderColor: "#bebebe",
                backgroundColor: "#e0e0e0",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#088f8f",
                  paddingHorizontal: 6,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                -
              </Text>
            </Pressable>
            <Pressable>
              <Text
                style={{
                  fontSize: 19,
                  color: "#088f8f",
                  paddingHorizontal: 6,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                {item.quantity}
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                dispatch(increamentQuantity(item));
                dispatch(increamentQty(item));
              }}
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderColor: "#bebebe",
                backgroundColor: "#e0e0e0",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#088f8f",
                  paddingHorizontal: 6,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                +
              </Text>
            </Pressable>
          </Pressable>
        ) : (
          <Pressable style={{ width: 80 }} onPress={addItemToCardt}>
            <Text
              style={{
                borderColor: "gray",
                borderWidth: 0.8,
                marginVertical: 10,
                color: "#088f8f",
                textAlign: "center",
                padding: 5,
                borderRadius: 4,
                fontSize: 17,
                fontWeight: "bold",
              }}
            >
              Add
            </Text>
          </Pressable>
        )}
      </Pressable>
    </View>
  );
};

export default DressItem;

const styles = StyleSheet.create({});
