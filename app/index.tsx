import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { useAuthStore } from "../store/auth";

export default function Index() {
  const { user } = useAuthStore();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace(user ? "/(tabs)/jukebox" : "/(auth)/login");
    }, 0);

    return () => clearTimeout(timeout);
  }, [user]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator />
    </View>
  );
}
