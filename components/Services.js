import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from "react-native";

const Services = () => {
  const services = [
    {
      id: "0",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgve4DCmsabz_NbIOJRLSnjtTB9JsAbaWQk7dVaEZENzl6yrrWuogEgedaezrxO_u9w10&usqp=CAU",
      name: "Washing",
    },

    {
      id: "1",
      image:
        "https://st.depositphotos.com/3877249/56765/v/450/depositphotos_567650102-stock-illustratiohttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPXxzOVNuDQmWaTOGq725okQedPVYyqJaE8Q&usqp=CAUn-laundry-room-with-washing-machine.jpg",
      name: "Ironing",
    },
    {
      id: "2",
      image: "https://cdn-icons-png.flaticon.com/128/3003/3003984.png",
      name: "Laundry",
    },
    {
      id: "3",
      image:
        "https://www.shutterstock.com/image-vector/vector-isometric-dry-cleaning-illustration-260nw-1901181745.jpg",
      name: "Dry Clean",
    },
  ];
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "500", marginBottom: 7 }}>
        Services available
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {services.map((service, index) => (
          <Pressable
            key={index}
            style={{
              margin: 10,
              backgroundColor: "white",
              padding: 20,
              borderRadius: 7,
            }}
          >
            <Image
              source={{ uri: service.image }}
              style={{ width: 70, height: 70 }}
            />
            <Text style={{ textAlign: "center", marginTop: 10 }}>
              {service.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({});
