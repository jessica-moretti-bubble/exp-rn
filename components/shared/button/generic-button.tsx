import React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

type ButtonVariant = "primary" | "primary-outline" | "primary-shadow";

interface ButtonProps {
  label?: string;
  onPress: (event: GestureResponderEvent) => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconOnly?: boolean;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

export const GenericButton = ({
  label,
  onPress,
  variant = "primary",
  disabled = false,
  iconLeft,
  iconRight,
  iconOnly = false,
  style,
  labelStyle,
}: ButtonProps) => {
  const variantStyle = getVariantStyles(variant, disabled);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.buttonBase,
        iconOnly && styles.iconOnlyButton,
        variantStyle.button,
        style,
      ]}
      activeOpacity={0.8}
    >
      {iconLeft && <View style={styles.icon}>{iconLeft}</View>}
      {!iconOnly && label && (
        <Text style={[styles.labelBase, variantStyle.label, labelStyle]}>
          {label}
        </Text>
      )}
      {iconRight && <View style={styles.icon}>{iconRight}</View>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    borderRadius: 6,
    height: 40,
  },
  iconOnlyButton: {
    width: 44,
    height: 45,
    paddingHorizontal: 0,
  },
  labelBase: {
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
  },
  icon: {
    marginHorizontal: 6,
  },
});

const getVariantStyles = (variant: ButtonVariant, disabled: boolean) => {
  if (disabled) {
    return {
      button: {
        backgroundColor: "#171717",
      },
      label: {
        color: "#808080",
      },
    };
  }

  switch (variant) {
    case "primary":
      return {
        button: {
          backgroundColor: "#BAF7CD",
        },
        label: {
          color: "#000",
        },
      };
    case "primary-outline":
      return {
        button: {
          borderColor: "#BAF7CD",
          borderWidth: 1,
        },
        label: {
          color: "#BAF7CD",
        },
      };
    case "primary-shadow":
      return {
        button: {
          backgroundColor: "#171717",
          shadowColor: "#BAF7CD",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.8,
          shadowRadius: 10,
          elevation: 8,
        },
        label: {
          color: "#BAF7CD",
        },
      };
    default:
      return {
        button: {},
        label: {},
      };
  }
};
