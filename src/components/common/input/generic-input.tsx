import { InputStatus } from "@/types/model/generic-input.model";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    View,
} from "react-native";
import IconCheckCircle from "src/components/svg/icon-check-circle";
import IconEye from "src/components/svg/icon-eye";
import IconEyeOff from "src/components/svg/icon-eye-off";
import IconXCircle from "src/components/svg/icon-x-circle";
import { INPUT_CONFIG } from "src/config/generic-input.config";

interface GenericInputProperties extends TextInputProps {
  svg?: React.ReactNode;
  error?: boolean;
  success?: boolean;
}

const getInputStatus = (
  props: GenericInputProperties,
  isEmpty: boolean
): InputStatus => {
  if (isEmpty) return "default";
  if (props.error) return "error";
  if (props.success) return "success";
  return "default";
};

export const GenericInput = (properties: GenericInputProperties) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPasswordField = properties.keyboardType === "visible-password";
  const maxLength = 160;
  const charactersLeft = maxLength - (properties.value?.length || 0);
  const isEmpty = !properties.value?.length;

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const status = getInputStatus(properties, isEmpty);

  const borderColor = INPUT_CONFIG.getBorderColor(status, isFocused);
  const textColor = INPUT_CONFIG.getTextColor(status);

  return (
    <View style={[styles.inputWrapper, { borderColor }]}>
      <TextInput
        style={[styles.input, { color: textColor }]}
        placeholder={properties.placeholder}
        placeholderTextColor="#aaa"
        autoCapitalize="none"
        secureTextEntry={isPasswordField && !isPasswordVisible}
        keyboardType={properties.keyboardType}
        value={properties.value}
        onChangeText={properties.onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        maxLength={isPasswordField ? maxLength : undefined}
      />
      {status === "default" && properties.svg}
      {status === "error" && <IconXCircle />}
      {status === "success" && <IconCheckCircle />}

      {isPasswordField && status === "default" && (
        <View style={styles.passwordActions}>
          {!isEmpty && (
            <Text style={[styles.counter, { color: textColor }]}>
              {charactersLeft}
            </Text>
          )}
          <TouchableOpacity onPress={togglePasswordVisibility}>
            {isPasswordVisible ? <IconEye /> : <IconEyeOff />}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "row",
    height: 48,
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignItems: "center",
    gap: 8,
    alignSelf: "stretch",
    borderRadius: 8,
    borderWidth: 2,
    backgroundColor: "rgba(128, 128, 128, 0.2)",
    overflow: "hidden",
  },
  input: {
    flex: 1,
  },
  passwordActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  counter: {
    fontSize: 12,
    marginLeft: 4,
  },
});
