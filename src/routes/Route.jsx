import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../page/Home";
import Icon from "react-native-vector-icons/FontAwesome5";
import Mid from "../page/Mid";

const Tab = createBottomTabNavigator();
const Route = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#2967FF",
          borderRadius: 25,
          height: 60,
          position: "absolute",
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Icon
              name="home"
              size={size}
              style={
                focused
                  ? {
                      backgroundColor: "white",
                      paddingHorizontal: 8,
                      paddingVertical: 8,
                      borderRadius: 10,
                    }
                  : {}
              }
              color={focused ? "#2967FF" : "white"}
            />
          ),
        }}
        component={Home}
        name="home"
      />
      <Tab.Screen
        name="mid"
        component={Mid}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Icon
              style={{
                bottom: 30,
                backgroundColor: "#21A5B1",
                padding: 15,
                borderRadius: 50
              }}
              name="smile"
              size={30}
              color={focused ? "#2967FF" : "white"}
            />
          ),
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Icon
              name="user-alt"
              size={size}
              style={
                focused
                  ? {
                      backgroundColor: "white",
                      paddingHorizontal: 8,
                      paddingVertical: 8,
                      borderRadius: 10,
                    }
                  : {}
              }
              color={focused ? "#2967FF" : "white"}
            />
          ),
        }}
        component={Home}
        name="profile"
      />
    </Tab.Navigator>
  );
};

export default Route;
