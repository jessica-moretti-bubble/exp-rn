import { BlurView } from "expo-blur";
import { ReactNode } from "react";
import { Modal, Platform, StyleSheet, View } from "react-native";
import { GenericButton } from "../button/generic-button";

interface GenericModalProperties {
  visible: boolean;
  children: ReactNode;
  handleCloseButton?: () => void
  handleConfirmButton?: () => void

}
export const GenericModal = ({ visible, children, handleCloseButton}: GenericModalProperties) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <BlurView intensity={50} tint="dark" style={styles.blurContainer}>
          <View style={styles.secondaryModal}>
            <View style={styles.secondaryModalInner}>{children}
           </View>
           <View style={styles.buttonsContainer}>
              <GenericButton
                label="Annulla"
                onPress={() => handleCloseButton?.()}
                variant="primary-outline"
              />

              <GenericButton
                label="Conferma"
                variant="primary"
                onPress={() => {}}
              />
            </View>
            
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  blurContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryModal: {
    width: 310,
    height: 570,
    backgroundColor: "rgba(23, 23, 23, 0.80)",
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 32,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#BAF7CD",
    ...Platform.select({
      ios: {
        shadowColor: "#BAF7CD",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 15,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  secondaryModalInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 16
  }
});
