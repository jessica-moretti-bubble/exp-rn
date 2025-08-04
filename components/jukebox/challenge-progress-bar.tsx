import { Challenge } from "model/jukebox-challenge.model";
import { StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { IconChallengeBadge } from "./icon-challenge/icon-challenge-badge";

interface ChallengeProgressBarProperties {
  firstValue: number;
  secondValue: number;
  progressBarValue: number;
  maxProgressValue: number;
  challenge: Challenge
}

export const ChallengeProgressBar = ({
  firstValue,
  secondValue,
  progressBarValue,
  maxProgressValue,
  challenge
}: ChallengeProgressBarProperties) => {
  const totalWidth = 311;
  const usableWidth = totalWidth - 8;
  const clampedProgress = Math.max(
    0,
    Math.min(progressBarValue, maxProgressValue)
  );
  const progressRatio = clampedProgress / maxProgressValue;
  const progressWidth = progressRatio * usableWidth;

  return (
    <View style={styles.container}>
      <View style={styles.progressWrapper}>
        <LinearGradient
          colors={["#BAF7CD", "#90D3AE"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={[styles.progressBar, { width: progressWidth }]}
        >
          {progressWidth > 30 && (
            <Text style={[styles.progressText, styles.rightAlignedText]}>
              {clampedProgress} / {maxProgressValue}
            </Text>
          )}
        </LinearGradient>
      </View>

    <IconChallengeBadge challenge={challenge} firstValue={firstValue} secondValue={secondValue}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 311,
    height: 32,
    borderRadius: 25,
    backgroundColor: "#292929",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 4,
    position: "relative",
    overflow: "hidden",
  },
  progressWrapper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    marginLeft: 8,
    zIndex: 0,
  },
  progressBar: {
    height: 24,
    backgroundColor: "#6DB091",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  progressText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },

  rightAlignedText: {
   
    color: "black",
    marginRight: 40
  },
});
