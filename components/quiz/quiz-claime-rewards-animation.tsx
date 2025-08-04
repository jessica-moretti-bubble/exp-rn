import { GenericButton } from "components/shared/button/generic-button";
import LottieView from "lottie-react-native";
import { Reward } from "model/quiz-data.model";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { QuizReward } from "./rewards/quiz-reward";

interface QuizClaimeRewardsAnimationProperties {
    rewards: Reward[]
}

export default function QuizClaimeRewardsAnimation({rewards}: QuizClaimeRewardsAnimationProperties) {
  const [play, setPlay] = useState(false);
  return (
    <View style={[styles.container]}>
      <LottieView
        source={require("../../assets/animations/claime_rewards_mobile.json")}
        autoPlay={play}
        loop={false}
        resizeMode="contain"
        style={styles.animation}
      />
      <View style={styles.rewardsContainer}>
        {rewards.map((reward, index) => <QuizReward type={reward} key={index}/> ) }
      </View>
      <GenericButton
        variant="primary-shadow"
        label="Riscatta"
        onPress={() => setPlay(true)}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  animation: {
    width: 311,
    height: 384,
  },
  rewardsContainer: {
    width: 248,
    height: 94,
    borderWidth: 1,
    borderColor: "#BAF7CD",
    backgroundColor: "#171717",
    borderRadius: 16,
    position: "absolute",
    top: 215,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40
    

  },
  button: {
    position: "absolute",
    top: 321,
  },
});
