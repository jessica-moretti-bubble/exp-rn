import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface JukeboxButtonsProperties {
  spin: () => void;
  purchase: () => void;
}

export const JukeboxButtons = ({ spin, purchase }: JukeboxButtonsProperties) => {
  return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.buttonAction, styles.buttonPurchaseAction]} onPress={purchase}>
          <Text style={[styles.buttonText, styles.buttonPurchaseText]}>acquista vinile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonAction, styles.buttonSpinAction]}>
          <Text style={[styles.buttonText, styles.buttonSpinText]} onPress={spin}>utilizza vinile</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
 
  container: {
    justifyContent: "center",
    alignItems: "center",
    rowGap: 5,
    position: 'absolute',
    top: 55,
    left: 105
  },
  buttonAction: {
    width: 85,
    borderRadius: 24,
    borderWidth: 2,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },

  buttonPurchaseAction: {
    borderColor: "#EEAEF3",
    shadowColor: "#E3BDFF",
    shadowOffset: {
      width: 0.7,
      height: 0.7,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6,
  },

  buttonSpinAction: {
    borderColor: "#BAF7CD",
    shadowColor: '#E3BDFF',
    shadowOffset: {
      width: 0.7, 
      height: 0.7,
    },
    shadowOpacity: 0.49, 
    shadowRadius: 8, 
    elevation: 6,
  },

  buttonText: {
    fontSize: 8,
    fontWeight: "800",
    fontStyle: "italic",
    textTransform: "uppercase",
    color: "black",
  },

  buttonPurchaseText: {
    color: '#EEAEF3'
  },

  buttonSpinText: {
    color: '#BAF7CD'
  }
});
