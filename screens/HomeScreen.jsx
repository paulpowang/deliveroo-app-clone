import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import { useTailwind } from "tailwind-rn";
import Categories from "../components/Categories";
import FeatureRow from "../components/FeatureRow";
import sanityClient from "../sanity";

export const HomeScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        ` *[_type == "featured"]{
      ...,
      restaurants[]->{
        ...,
        dish[]->
      }
    }[]`
      )
      .then((data) => setFeaturedCategories(data));
  }, []);

  return (
    <SafeAreaView style={tw("bg-white pt-5")}>
      {/* Header */}
      <View style={tw("flex-row pb-3 items-center mx-4 space-x-2")}>
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          style={tw("h-7 w-7 bg-gray-300 p-4 rounded-full")}
        />
        <View className="flex-1">
          <Text style={tw("font-bold text-gray-400 text-xs")}>Deliver Now</Text>
          <Text style={tw("font-bold text-xl")}>
            Current Location
            <ChevronDownIcon size="20" color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size="35" color="#00CCBB" />
      </View>
      {/* Search */}
      <View style={tw("flex-row px-4 space-x-2 pb-2 items-center")}>
        <View
          style={tw("flex-row flex-1 space-x-2 p-3 first-line:bg-gray-200")}
        >
          <MagnifyingGlassIcon size="20" color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            style={tw("flex-1")}
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      <ScrollView
        style={tw("bg-gray-300")}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        {featuredCategories?.map((category) => {
          return (
            <FeatureRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
