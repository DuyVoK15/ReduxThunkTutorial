import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getAllProduct, getDetailProduct } from "../features/productSlice";
import Spinner from "react-native-loading-spinner-overlay";
import { login } from "../features/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Product = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const listProduct = useAppSelector((state) => state.product.list);
  const detail = useAppSelector((state) => state.product.detail);
  const isLoading = useAppSelector((state) => state.product.loading);

  const fetchProduct = async () => {
    await dispatch(getAllProduct()).then((res) => {
      console.log(JSON.stringify(res, null, 2));
    });
  };

  const fetchDetailProduct = async (id) => {
    await dispatch(getDetailProduct(id)).then((res) => {
      console.log(JSON.stringify(res, null, 2));
    });
  };
  // React.useEffect(() => {
  //   const fetchProduct = async () => {
  //     await dispatch(getAllProduct()).then((res) => {
  //       console.log(JSON.stringify(res, null, 2));
  //     });
  //   };
  //   fetchProduct();
  // }, []);
  const [data, setData] = useState("");
  const onChange = () => {
    setData("123123");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async () => {
    console.log("username: " + username, "password: " + password);
    await dispatch(login({ userName: username, passwordHash: password })).then(
      (res) => {
        console.log(JSON.stringify(res, null, 2));
      }
    );
  };
  const getAccessToken = async () => {
    const accessToken = await AsyncStorage.getItem("ACCESS_TOKEN");
    console.log("AccessToken: " + "<< " + accessToken + " >>");
  };

  useEffect(() => {
    getAccessToken();
  }, [getAccessToken]);

  return (
    <View>
      <Spinner visible={isLoading} />
      <Button title="Naviate to Cart" onPress={() => navigation.push("Cart")} />

      <TextInput
        style={{
          height: 50,
          borderRadius: 10,
          marginVertical: 10,
          marginHorizontal: 20,
          borderWidth: 1,
          padding: 10,
        }}
        placeholder="username"
        onChangeText={(value) => setUsername(value)}
      />
      <TextInput
        style={{
          height: 50,
          borderRadius: 10,
          marginVertical: 10,
          marginHorizontal: 20,
          borderWidth: 1,
          padding: 10,
        }}
        placeholder="password"
        onChangeText={(value) => setPassword(value)}
      />
      <Button title="Login" onPress={onSubmit} color={'green'} />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
