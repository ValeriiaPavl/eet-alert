import { Product } from "@/types/product";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { Badge, BadgeText } from "@/components/ui/badge";
import { View } from "react-native";
export default function ShortProduct(props: { item: Product }) {
  return (
    <View
      className="flex-1 flex-row items-center flex-shrink justify-end"
      style={{ justifyContent: "space-between", padding: 5 }}
    >
      <Image
        source={{ uri: props.item.productImage }}
        alt="product image"
        style={{ alignItems: "center", width: 100 }}
      />
      <View
        className=" flex-1 inline-flex flex-wrap items-start"
        style={{
          flexWrap: "wrap",
          maxWidth: "70%",
          width: "60%",
          paddingLeft: 10,
        }}
      >
        <Text
          size="2xl"
          className="font-bold flex-1 text-left flex-shrink inline-flex flex-wrap border-solid"
          style={{ flexWrap: "wrap", maxWidth: "80%", textAlign: "left" }}
        >
          {props.item.productName}
        </Text>
        <Text>{props.item.identificationMarks}</Text>
      </View>
      <Badge
        size="sm"
        variant="outline"
        action="info"
        className="inline-flex"
        style={{ maxWidth: "30%", marginRight: 2, marginLeft: 2 }}
      >
        <BadgeText className="">{props.item.level}</BadgeText>
      </Badge>
    </View>
  );
}
