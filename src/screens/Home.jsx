import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppDispatch } from "../app/hooks";
import { logout } from "../features/userSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    await dispatch(logout());
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
      <Button title="Logout" color={"red"} onPress={handleLogout} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
