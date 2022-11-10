import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeatureRow = ({ title, description, id }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>
      <Text className="text-xs px-4 text-gray-500">{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="pt-4"
      >
        <RestaurantCard
          id={"5555"}
          imgUrl="https://links.papareact.com/gn7"
          title="Ya! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St."
          short_description="This is a Test Description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={"5555"}
          imgUrl="https://links.papareact.com/gn7"
          title="Ya! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St."
          short_description="This is a Test Description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={"5555"}
          imgUrl="https://links.papareact.com/gn7"
          title="Ya! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St."
          short_description="This is a Test Description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
