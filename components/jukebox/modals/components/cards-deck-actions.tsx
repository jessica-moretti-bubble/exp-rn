import IconCards from "components/svg/icon-cards";
import IconCheck from "components/svg/icon-check";
import IconCopy from "components/svg/icon-copy";
import IconCubble from "components/svg/icon-cubble";
import IconInfo from "components/svg/icon-info";
import IconShopping from "components/svg/icon-shopping";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

interface CardsDeckActionsProperties {
  removeCard: () => void;
  setSellModalVisibility: (value: boolean) => void
}
export const CardsDeckActions = ({ removeCard, setSellModalVisibility }: CardsDeckActionsProperties) => {
  return (
    <View style={styles.actionsContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <IconCubble width={16} height={16} />
          <Text style={styles.infoText}>Value</Text>
        </View>
        <View style={styles.info}>
          <IconCards color="#BAF7CD" width={16} height={16} />
          <Text style={styles.infoText}>4/100</Text>
        </View>
        <View style={styles.info}>
          <IconCopy color="#BAF7CD" width={16} height={16} />
          <Text style={styles.infoText}>Duplicato</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
      <TouchableOpacity onPress={() => setSellModalVisibility(true)}>
      <LinearGradient
          colors={["#BAF7CD", "#90D3AE"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={styles.primaryButton}
        >
          <IconShopping width={24} height={24} />
        </LinearGradient>
      </TouchableOpacity>

      
        <LinearGradient
          colors={["#F4CEF0", "#EEAEF3"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={styles.secondaryButton}
        >
          <IconInfo width={20} height={20} />
        </LinearGradient>
        <TouchableOpacity onPress={removeCard}>
          <LinearGradient
            colors={["#BAF7CD", "#90D3AE"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            style={styles.primaryButton}
          >
            <IconCheck width={24} height={24} />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionsContainer: {
    position: "absolute",
    bottom: 200,
    alignItems: "center",
    width: "100%",
    gap: 16,
  },

  infoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },

  info: {
    width: 60,
    height: 20,
    marginHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 4,
  },

  infoText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: 800,
  },

  buttonsContainer: {
    flexDirection: "row",
    width: 299,
    height: 88,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "#808080",
    columnGap: 40,
  },
  primaryButton: {
    width: 56,
    height: 56,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  secondaryButton: {
    width: 44,
    height: 44,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});
