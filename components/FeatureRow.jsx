import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";
import { useTailwind } from "tailwind-rn";

const FeatureRow = ({ title, description, id }) => {
  const tw = useTailwind();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured" && _id==$id]{
          restaurants[]->{
            ...,
            dishes[]->
          }
        }[0]`,
        { id }
      )
      .then((data) => setRestaurants(data?.restaurants));
  }, [id]);

  return (
    <View>
      <View style={tw("mt-4 flex-row items-center justify-between px-4")}>
        <Text style={tw("font-bold text-lg")}>{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>
      <Text style={tw("text-xs px-4 text-gray-500")}>{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        style={tw("pt-4")}
      >
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.title}
            rating={restaurant.rating}
            genre="Japanese"
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
