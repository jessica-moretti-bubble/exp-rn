import IconGrayBadge from "components/svg/challenge/icon-gray-badge";
import IconGreenBadge from "components/svg/challenge/icon-green-badge";
import IconOrangeBadge from "components/svg/challenge/icon-orange-badge";
import IconPinkBadge from "components/svg/challenge/icon-pink-badge";
import IconRedBadge from "components/svg/challenge/icon-red-badge";
import { Challenge } from "model/jukebox-challenge.model";
import { StyleSheet, Text, View } from "react-native";

interface IconChallengeBadgeProperties {
  challenge: Challenge;
  firstValue: number;
  secondValue: number;
}

export const IconChallengeBadge = ({
  challenge,
  firstValue,
  secondValue,
}: IconChallengeBadgeProperties) => {
  switch (challenge) {
    case Challenge.SCOUT:
      return (
        <>
          <View style={styles.iconWrapper}>
            <IconGrayBadge style={StyleSheet.absoluteFill} />
            <Text style={styles.value}>{firstValue}</Text>
          </View>

          <View style={styles.iconWrapper}>
            <IconGreenBadge style={StyleSheet.absoluteFill} />
            <Text style={styles.value}>{secondValue}</Text>
          </View>
        </>
      );
    case Challenge.TALENT:
      return (
        <>
          <View style={styles.iconWrapper}>
            <IconGreenBadge style={StyleSheet.absoluteFill} />
            <Text style={styles.value}>{firstValue}</Text>
          </View>

          <View style={styles.iconWrapper}>
            <IconPinkBadge style={StyleSheet.absoluteFill} />
            <Text style={styles.value}>{secondValue}</Text>
          </View>
        </>
      );
    case Challenge.MANAGER:
      return (
        <>
          <View style={styles.iconWrapper}>
            <IconPinkBadge style={StyleSheet.absoluteFill} />
            <Text style={styles.value}>{firstValue}</Text>
          </View>

          <View style={styles.iconWrapper}>
            <IconOrangeBadge style={StyleSheet.absoluteFill} />
            <Text style={styles.value}>{secondValue}</Text>
          </View>
        </>
      );

    case Challenge.DIRECTOR:
      return (
        <>
          <View style={styles.iconWrapper}>
            <IconOrangeBadge style={StyleSheet.absoluteFill} />
            <Text style={styles.value}>{firstValue}</Text>
          </View>

          <View style={styles.iconWrapper}>
            <IconRedBadge style={StyleSheet.absoluteFill} />
            <Text style={styles.value}>{secondValue}</Text>
          </View>
        </>
      );
    case Challenge.PRODUCER:
      return (
        <>
          <View style={styles.iconWrapper}>
            <IconRedBadge style={StyleSheet.absoluteFill} />
            <Text style={styles.value}>{firstValue}</Text>
          </View>
        </>
      );
  }
};

const styles = StyleSheet.create({
  iconWrapper: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  },
  value: {
    color: "white",
    fontWeight: "600",
    fontSize: 12,
    zIndex: 2,
  },
});
