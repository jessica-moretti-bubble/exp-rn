import { GenericButton } from "components/shared/button/generic-button";
import { GenericInput } from "components/shared/input/generic-input";
import { GenericOtpInput } from "components/shared/input/otp-input";
import { StyleSheet, Text, View } from "react-native";

export const PasswordResetOtpView = () => {
  return (
    <View style={styles.innerContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Recupera password</Text>
        <Text style={styles.subtext}>Inserisci il codice otp</Text>
      </View>
      <View style={{
        flex: 1
      }}>
        <GenericOtpInput />
      </View>
      <GenericInput
        placeholder="Inserisci la password"
        keyboardType="visible-password"
      />
      <GenericInput
        placeholder="Ripeti la password"
        keyboardType="visible-password"
      />

      <View
        style={{
          columnGap: 16,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <GenericButton
          label="Annulla"
          onPress={() => {}}
          variant="natural-outline"
          style={{
            maxWidth: 88,
          }}
        />
        <GenericButton
          label="Reset password"
          onPress={() => {}}
          variant="primary-shadow"
          style={{
            maxWidth: 134,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "#EEAEF3",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 33.6,
  },
  headerContainer: {
    rowGap: 8,
    justifyContent: "flex-start",
  },
  subtext: {
    color: "#808080",
    fontSize: 14,
    lineHeight: 21,
  },
  innerContainer: {
    rowGap: 24,
  },
});
