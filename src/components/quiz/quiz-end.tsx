import { Reward } from "@/types/model/quiz-data.model";
import { useState } from "react";
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import IconGift from "src/components/svg/icon-gift";
import QuizClaimeRewardsAnimation from "./quiz-claime-rewards-animation";

export const QuizEnd = () => {
  const [showRewardsAnimationBox, setShowRewardsAnimationBox] = useState(false);

  console.log(showRewardsAnimationBox, 'show')
  return (
    <>
      {showRewardsAnimationBox ? (
        <QuizClaimeRewardsAnimation rewards={[Reward.BOH, Reward.CUBBLE, Reward.BOH]} />
      ) : (
        <>
          
          <View>
            <Text style={styles.questionNumbers}>5/5</Text>
            <Text style={styles.title}>Quiz completato!</Text>
          </View>
          <Text style={styles.quizDescription}>
            Lorem ipsum dolor sit amet consectetur. Neque sed integer lobortis
            ipsum eget. Consequat feugiat non urna mauris neque interdum amet
            mauris quis. Auctor sit tristique praesent fringilla id quis quis.
          </Text>
          <TouchableOpacity onPress={() => setShowRewardsAnimationBox(true)}>
            <ImageBackground
              source={require("../../assets/images/quiz/play-quiz-texture.png")}
              style={styles.button}
              imageStyle={styles.buttonImage}
            >
              <IconGift />
            </ImageBackground>
          </TouchableOpacity>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  questionNumbers: {
    color: "#BAF7CD",
    fontSize: 22,
    lineHeight: 35.2,
  },
  title: {
    color: "#F4CEF0",
    fontSize: 32,
    lineHeight: 41.6,
    fontWeight: "700",
  },
  quizDescription: {
    color: "#D6FBDA",
    fontSize: 16,
    lineHeight: 24,
  },

  button: {
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonImage: {
    borderRadius: 999,
  },
});
