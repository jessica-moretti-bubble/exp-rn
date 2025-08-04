import IconBubbleWhite from "components/svg/logo/icon-bubble-white";
import { StyleSheet, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { GenericButton } from "../button/generic-button";


export function AuthTopBar() {
  return (
    <SafeAreaView edges={["top"]}>
      <View style={styles.container}>
        <IconBubbleWhite width={40} height={40} fill="#fff" />
        <View style={styles.buttonsContainer}>
          <GenericButton label="Registrati" variant="primary-outline" onPress={() => {}}/>
          <GenericButton label="Accedi" variant="primary" onPress={() => {}}/>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingHorizontal: 32,
    paddingVertical: 16,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: 'row',


  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16

  }
});
