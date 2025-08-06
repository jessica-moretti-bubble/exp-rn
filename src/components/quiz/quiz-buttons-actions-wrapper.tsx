import { GenericButton } from "@/components/common/button/generic-button";
import { StyleSheet, Text, View } from "react-native";
import IconClock from "src/components/svg/icon-clock";
import IconInfo from "src/components/svg/icon-info";
import IconRepeat from "src/components/svg/icon-repeat";
import IconUsers from "src/components/svg/icon-users";

export const QuizButtonActionsWrapper = () => {
  return (
    <View style={styles.buttonsWrapper}>
      <View style={styles.buttonWrapper}>
        <GenericButton
          onPress={() => console.log("Icon only")}
          iconLeft={<IconUsers width={20} height={20} />}
          iconOnly
          variant="primary-shadow"
        />
        <View style={styles.buttonInfoContainer}>
          <Text style={styles.valueText}>1</Text>
          <IconInfo width={16} height={16} fill="#BAF7CD" />
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <GenericButton
          onPress={() => console.log("Icon only")}
          iconLeft={<IconRepeat width={20} height={20} />}
          iconOnly
          disabled
        />
        <View style={styles.buttonInfoContainer}>
          <Text style={styles.valueText}>1</Text>
          <IconInfo width={16} height={16} fill="#BAF7CD" />
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <GenericButton
          onPress={() => console.log("Icon only")}
          iconLeft={<IconClock width={20} height={20} />}
          iconOnly
          variant="primary-shadow"
        />
        <View style={styles.buttonInfoContainer}>
          <Text style={styles.valueText}>1</Text>
          <IconInfo width={16} height={16} fill="#BAF7CD" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  buttonWrapper: {
    rowGap: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  buttonInfoContainer: {
    flexDirection: "row",
    columnGap: 6,
  },
  valueText: {
    color: "#BAF7CD",
    fontSize: 12,
    fontWeight: 700,
  },
});
