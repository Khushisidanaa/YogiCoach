import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HomeScreen from "./screens/HomeScreen";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./screens/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import QuoteLanding from "./screens/QuoteLanding";
import Login from "./screens/Login";

export default function App() {
  const [loaded] = useFonts({
    BRHendrix: require("./assets/fonts/BRHendrix-Bold.ttf"),
    BRHendrixitalic: require("./assets/fonts/BRHendrix-BoldItalic.ttf"),
    BRHendrixsemi: require("./assets/fonts/BRHendrix-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
