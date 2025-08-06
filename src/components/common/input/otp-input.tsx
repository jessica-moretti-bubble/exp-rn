import React from "react";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { OtpInput } from "react-native-otp-entry";

interface GenericOtpInputProps {
  success?: boolean;
  error?: boolean;
  onChange?: (value: string) => void;
}

export const GenericOtpInput: React.FC<GenericOtpInputProps> = ({
  success,
  error,
  onChange,
}) => {
  const getBorderColor = (): string => {
    if (success) return "#BAF7CD"; 
    if (error) return "#EF6464";   
    return "#808080";            
  };

  const dynamicStyles = StyleSheet.create({
    pinCodeContainer: {
      borderRadius: 2.3,
      borderWidth: 1.2,
      borderColor: getBorderColor(),
      marginHorizontal: 4,
      height: 50.4,
      width: 46.8,
    } as ViewStyle,

    focusedPinCodeContainer: {
      borderColor: "#808080", 
      borderWidth: 2
    } as ViewStyle,
  });

  return (
    <OtpInput
      numberOfDigits={6}
      onTextChange={onChange || ((text) => console.log(text))}
      theme={{
        containerStyle: styles.container,
        pinCodeContainerStyle: dynamicStyles.pinCodeContainer,
        pinCodeTextStyle: styles.pinCodeText,
        focusedPinCodeContainerStyle: dynamicStyles.focusedPinCodeContainer,
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
  } as ViewStyle,

  pinCodeText: {
    fontSize: 38.4,
    color: "#808080",
  } as TextStyle,
});
