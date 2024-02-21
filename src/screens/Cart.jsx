import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getDetailProduct } from "../features/productSlice";

const Cart = () => {
  const dispatch = useAppDispatch();

  const detail = useAppSelector((state) => state.product.detail);
  
  const fetchDetailProduct = async (id) => {
    await dispatch(getDetailProduct(id)).then((res) => {
      console.log(JSON.stringify(res, null, 2));
    });
  };

  return (
    <View>
      <Text style={{ fontSize: 24 }}>Cart</Text>
      {/* {listProduct?.map((product, index) => (
        <Text key={index}>{product?.category}</Text>
      ))} */}
      <Text>{detail?.title}</Text>
      <Button title="Get data" onPress={() => fetchDetailProduct(2)} />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
