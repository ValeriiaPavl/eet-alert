import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import ShortProduct from "./ShortProduct";

export default function ProductList() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await fetch(process.env.EXPO_PUBLIC_BACKEND_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*",
          },
        });
        const data = await response.json();
        setAllProducts(data);
        return data;
      } catch (error) {
        console.error(error);
      }
    };
    getAllProducts();
  }, []);
  return (
    <FlatList
      className=""
      data={allProducts}
      renderItem={({ item }) => <ShortProduct item={item} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{
        gap: 10,
        marginBottom: 10,
        width: "100%",
      }}
    ></FlatList>
  );
}
