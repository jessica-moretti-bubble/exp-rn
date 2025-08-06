// components/ui/StepHeader.tsx
import { StepHeaderType } from "@/types/model/auth.model";
import React from "react";
import { StyleSheet, View } from "react-native";
import IconRefresh from "src/components/svg/icon-refresh";
import IconUser from "src/components/svg/icon-user";

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
