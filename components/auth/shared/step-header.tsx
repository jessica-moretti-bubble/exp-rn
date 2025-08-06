// components/ui/StepHeader.tsx
import IconRefresh from "components/svg/icon-refresh";
import IconUser from "components/svg/icon-user";
import { StepHeaderType } from "model/auth.model";
import React from "react";
import { StyleSheet, View } from "react-native";

interface StepHeaderProps {
  type: StepHeaderType;
  currentStep: number;
}

export const StepHeader: React.FC<StepHeaderProps> = ({
  type,
  currentStep,
}) => {
  const GREEN = "#BAF7CD";
  const GREY = "#808080";

  return (
    <View style={styles.container}>
      {type === StepHeaderType.PASSWORD_RESET && (
        <>
          <IconUser
            height={32}
            width={32}
            fill={currentStep >= 1 ? GREEN : GREY}
          />
          <View style={styles.row} />
          <IconRefresh
            height={32}
            width={32}
            fill={currentStep >= 2 ? GREEN : GREY}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    columnGap: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    width: 60,
    height: 3,
    backgroundColor: "#808080",
  },
});
