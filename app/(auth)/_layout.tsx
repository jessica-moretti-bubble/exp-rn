import { AuthTopBar } from "components/shared/navigation/auth-top-bar";
import { Stack } from "expo-router";
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
} from "react-native";

const background = require("../../assets/images/background/bubble-bg.png");

export default function AuthLayout() {
  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.background}
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content" 
      />
       <AuthTopBar />

      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: "transparent" },
          
        }}
      >
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
            
          
          }}
        />
        <Stack.Screen
          name="signup"
          options={{
            headerShown: false
          }}
        />
         <Stack.Screen
          name="password-reset"
          options={{
            headerShown: false
          }}
        />
      </Stack>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
