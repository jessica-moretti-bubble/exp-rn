import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import "react-native-devsettings";

export default function Index() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/(app)/jukebox");
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator />
    </View>
  );
}
