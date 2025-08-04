import { GradientText } from "components/shared/gradient-text";
import {
  JukeboxChallengeMap,
  challengeTextStyles,
} from "config/jukebox-challenge.config";
import { Challenge } from "model/jukebox-challenge.model";
import { StyleSheet, Text, View } from "react-native";
import { ChallengeProgressBar } from "./challenge-progress-bar";
import { IconChallenge } from "./icon-challenge/icon-challenge";

export const JukeboxChallengeCard = () => {
  const mockChallengeType = Challenge.MANAGER;
  const mockChallengeData = JukeboxChallengeMap[mockChallengeType];
  const style = challengeTextStyles[mockChallengeType];

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <IconChallenge challenge={mockChallengeType} />
        <View style={styles.details}>
          <GradientText
            text={mockChallengeData.challenge}
            textStyle={{
              fontSize: 16,
              fontWeight: "700",
              textShadowColor: style.textShadowColor,
              textShadowOffset: style.textShadowOffset,
              textShadowRadius: style.textShadowRadius,
            }}
            gradientColors={style.gradientColors}
            angle={style.gradientAngle}
          />
          <Text style={styles.description}>
            {mockChallengeData.description}
          </Text>
        </View>
      </View>
      <ChallengeProgressBar
        firstValue={mockChallengeData.firstLevelValue}
        secondValue={mockChallengeData.secondLevelValue}
        maxProgressValue={mockChallengeData.progressBarValue}
        progressBarValue={15}
        challenge={mockChallengeType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 343,
    height: 117,
    padding: 16,
    borderWidth: 1,
    borderRadius: 24,
    borderStyle: "solid",
    borderColor: "#808080",
    backgroundColor: "#080808",
    position: "relative",
    top: 220,
    rowGap: 4,
  },
  row: {
    flexDirection: "row",
    columnGap: 8,
    alignItems: "center",
  },
  details: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
  },
  description: {
    color: "#BAF7CD",
    fontSize: 10,
    lineHeight: 15,
  },
});
