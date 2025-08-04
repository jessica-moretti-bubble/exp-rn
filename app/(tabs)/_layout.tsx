// app/(tabs)/_layout.tsx
import { BottomBar } from "components/shared/navigation/bottom-bar";
import { Tabs, useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { useAuthStore } from "store/auth";


export default function TabsLayout() {
  const { user } = useAuthStore();
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.replace("/(auth)/login");
    }
  }, [user]);
  
  if (!user) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
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


 

