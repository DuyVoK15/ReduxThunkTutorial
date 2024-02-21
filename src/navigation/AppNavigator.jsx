import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Product from "../screens/Product";
import Cart from "../screens/Cart";
import Home from "../screens/Home";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { loadAuthState } from "../features/userSlice";
import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  const dispatch = useAppDispatch();
  const authenticated = useAppSelector((state) => state.user.authenticated);

  const fetchLoadAuthState = async () => {
    await dispatch(loadAuthState());
  };
  console.log("authenticated: ", authenticated);
  React.useEffect(() => {
    fetchLoadAuthState();
  }, []);

  return authenticated ? <HomeNavigator /> : <AuthNavigator />;
};

export default AppNavigator;

const styles = StyleSheet.create({});
