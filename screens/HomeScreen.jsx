import { SafeAreaView, Text, View, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

export const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size="20" color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size="35" color="#00CCBB" />
      </View>
      {/* Search */}
      <View className="flex-row px-4 space-x-2 pb-2 items-center">
        <View className="flex-row flex-1 space-x-2 p-3 first-line:bg-gray-200 ">
          <MagnifyingGlassIcon size="20" color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            className="flex-1"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
