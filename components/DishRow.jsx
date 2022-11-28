import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import { useTailwind } from "tailwind-rn";

const DishRow = ({ id, name, description, price, image }) => {
  const tw = useTailwind();
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={tw("bg-white border p-4 border-gray-200")}
        onPress={() => setIsPressed(!isPressed)}
      >
        <View style={tw("flex-row")}>
          <View style={tw("flex-1 pr-2")}>
            <Text style={tw("text-lg mb-1")}>{name}</Text>
            <Text style={tw("text-gray-400")}>{description}</Text>
            <Text style={tw("text-gray-400 mt-2")}>
              <Currency quantity={price} currency="USD" />
            </Text>
          </View>
          <Image
            source={{ uri: urlFor(image).url() }}
            style={tw("h-20 w-20 bg-gray-300 p-4")}
          />
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View>
          <View>
            <TouchableOpacity>
              <MinusCircleIcon />
              <PlusCircleIcon />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
