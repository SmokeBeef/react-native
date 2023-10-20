import { View, Text, Image, Appearance, StyleSheet } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome5";
import Box1 from "../assets/Box1";
import DarkMode from "../utils/DarkMode";
import Trophy from "../assets/Trophy";
import Book from "../assets/Book";

const Home = () => {
  const [fontsLoaded] = useFonts({
    garamon: require("../../assets/font/garamond/CormorantGaramond-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <Text className="flex-1 justify-center items-center">loading</Text>;
  }
  // console.log(DarkMode);
  return (
    <View className={`flex-1 ${DarkMode ? "bg-black" : "bg-[#69C2CA]"}`}>
      <Text
        style={{ fontFamily: "garamon" }}
        className="text-center mt-[46px] text-3xl text-white"
      >
        WiGolern!
      </Text>

      <View className="justify-between mx-4 mt-[10]  flex-row">
        <Text className="font-bold text-base">XI MIPA</Text>
        <View className="flex-row gap-2">
          <Text className="font-bold text-md">Username</Text>
          <Icon name="user-circle" size={20} />
        </View>
      </View>
      <View
        style={style.shadow}
        className="mt-[25px]  justify-between pt-[10px] px-[15] mx-auto bg-[#0046FB] w-[350px] rounded-[30px] h-[150px] flex-row"
      >
        <View>
          <Text className="text-xl text-white font-semibold">
            Special Offers
          </Text>
          <View className="pl-[40px] mt-[19px]">
            <Text className="text-3xl text-white font-bold ">Subscribe </Text>
            <Text className="text-3xl text-white font-bold ">50% OFF</Text>
          </View>
        </View>
        <Box1 />
      </View>
      <View className="flex-row justify-between mt-[20px] mx-auto w-[350px]">
        <View style={style.shadow} className="bg-[#0046FB] w-[165px] flex-row h-[100px] items-center rounded-[30px]">
          <Book width={50} height={50} />
          <Text className="text-white font-bold text-[20px]">WiGo-Read</Text>
        </View>
        <View style={style.shadow} className="bg-[#0046FB] w-[165px] flex-row h-[100px] items-center rounded-[30px]">
          <Trophy />
          <Text className="text-white font-bold text-[20px]">WiGo-Quiz</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
