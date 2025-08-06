import { GenericButton } from "components/shared/button/generic-button";
import { GenericInput } from "components/shared/input/generic-input";
import IconUser from "components/svg/icon-user";
import { ResetPasswordSteps } from "model/auth.model";
import { StyleSheet, Text, View } from "react-native";


interface PasswordResetEmailViewProperties{
  setStep: (value: ResetPasswordSteps) => void
}
export const PasswordResetEmailView = (properties: PasswordResetEmailViewProperties) => {
  return (
    <View style={styles.innerContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Password dimenticata?</Text>
        <Text style={styles.subtext}>
          Inserisci l email utilizzata durante la tua {"\n"}registrazione
        </Text>
      </View>
      <GenericInput placeholder="Inserisci la tua email" svg={<IconUser />} />
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
          onPress={() => {
          }}
          variant="natural-outline"
          style={{
            maxWidth: 88,
          }}
        />
        <GenericButton
          label="Continua"
          onPress={() => {
            properties.setStep(ResetPasswordSteps.PASSWORD_STEP)

          }}
          
          variant="primary-shadow"
          style={{
            maxWidth: 88,
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
