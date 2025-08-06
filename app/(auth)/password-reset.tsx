import { PasswordResetEmailView } from "components/auth/reset/password-reset-email-view";
import { PasswordResetOtpView } from "components/auth/reset/password-reset-opt-view";
import { StepHeader } from "components/auth/shared/step-header";
import { ResetPasswordSteps, StepHeaderType } from "model/auth.model";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function PasswordReset() {
  const [step, setStep] = useState<ResetPasswordSteps>(
    ResetPasswordSteps.EMAIL_STEP
  );

  return (
    <View style={styles.container}>
      <StepHeader type={StepHeaderType.PASSWORD_RESET} currentStep={step === ResetPasswordSteps.EMAIL_STEP ? 1 : 2} />
      {step === ResetPasswordSteps.EMAIL_STEP ? (
        <PasswordResetEmailView setStep={setStep } />
      ) : (
        <PasswordResetOtpView />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    rowGap: 80,
    paddingHorizontal: 32,
    flex: 1,
    paddingTop: 65 //TODO USA SEMPRE QUESTO PADDING PER TUTTE LE ALTRE SCHERMATE
  },
});
