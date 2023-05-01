import { signOut } from "firebase/auth";
import React from "react";
import { Pressable, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const user = auth.currentUser;
  const navigation = useNavigation();

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Pressable>
        <Text>Welcome {user.email}</Text>
      </Pressable>
      <Pressable onPress={signOutUser}>
        <Text>Sign-Out</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
