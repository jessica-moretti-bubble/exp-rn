import IconInfo from "components/svg/icon-info";
import { Reward } from "model/quiz-data.model";
import { StyleSheet, Text, View } from "react-native";
import { IconQuizReward } from "./icon-quiz-reward";


interface QuizRewardProperties {
  type: Reward;
  
}

export const QuizReward = ({ type }: QuizRewardProperties) => {
  return (
    <View style={styles.buttonWrapper}>
        <IconQuizReward type={type}/>
      <View style={styles.buttonInfoContainer}>
        <Text style={styles.valueText}>1</Text>
        {type !== Reward.CUBBLE &&  <IconInfo width={16} height={16} fill="#BAF7CD" /> }
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    rowGap: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  buttonInfoContainer: {
    flexDirection: "row",
    columnGap: 6,
  },
  valueText: {
    color: "#BAF7CD",
    fontSize: 12,
    fontWeight: 700,
  },
});
