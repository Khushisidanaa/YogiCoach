import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./SignUp";
import { useNavigation } from "@react-navigation/native";
import QuoteLanding from "./QuoteLanding";
import Login from "./Login";

const HomeScreen = () => {
  const [loaded] = useFonts({
    BRHendrix: require("../assets/fonts/BRHendrix-Bold.ttf"),
    BRHendrixBlack: require("../assets/fonts/BRHendrix-Regular.ttf"),
  });

  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#3FC089", "#287761"]}
      style={styles.linearGradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <StatusBar hidden={true} />
      <Image
        source={require("../assets/landingimg.png")}
        style={{ alignItems: "center", height: 500, width: "100%" }}
      />
      <Text
        style={{
          fontFamily: "BRHendrix",
          fontSize: 44,
          color: "white",
          letterSpacing: 0.7,
          textAlign: "left",
          paddingLeft: 30,
          paddingTop: 50,
          lineHeight: 60,
        }}
      >
        Welcome to YogiCoach
      </Text>
      <Text
        style={{
          fontFamily: " BRHendrixBlack",
          color: "white",
          paddingLeft: 30,
          padding: 10,
          paddingTop: 20,
          lineHeight: 20,
          fontSize: 15,
        }}
      >
        Welcome to YogiCoach. Come join us on this personalised experience
        specially curated for you!
      </Text>
      <TouchableOpacity
        style={{
          width: 340,
          height: 55,
          backgroundColor: "#FFFFFF",
          padding: 10,
          marginHorizontal: 44,
          alignItems: "center",
          borderRadius: 30,
          justifyContent: "center",
          marginBottom: 10,
          marginTop: 40,
        }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text
          style={{ color: "#42A37F", fontFamily: "BRHendrix", fontSize: 18 }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: "center", marginTop: 4 }}>
        <Text
          style={{
            color: "white",
            fontFamily: "BRHendrix",
          }}
        >
          Already a member? Login
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});
