import { BottomBar } from "@/components/common/navigation/bottom-bar";
import { Tabs, useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { useAuthStore } from "src/store/auth";

export default function TabsLayout() {
  const { accessToken } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      router.replace("/(auth)/login");
    }
  }, [accessToken, router]);


  if (!accessToken) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomBar {...props} />}
    />
  );
}
