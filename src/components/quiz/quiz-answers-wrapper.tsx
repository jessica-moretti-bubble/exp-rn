import { Answer, QuizData } from "@/types/model/quiz-data.model";
import { BlurView } from "expo-blur";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IconCheckCircle from "src/components/svg/icon-check-circle";
import IconXCircle from "src/components/svg/icon-x-circle";

interface QuizAnswersWrapperProperties {
  currentQuestion: QuizData;
  selectedAnswer: Answer | null;
  hasSubmitted: boolean;
  handleAnswerPress: (answer: Answer) => void;
}

export const QuizAnswersWrapper = (
  properties: QuizAnswersWrapperProperties
) => {
  return (
    <View style={styles.answersContainer}>
      {properties.currentQuestion.answers.map((answer) => {
        const isSelected = properties.selectedAnswer?.id === answer.id;
        const isAnswerCorrect =
          properties.hasSubmitted && answer.isCorrect && isSelected;
        const isAnswerIncorrect =
          properties.hasSubmitted && !answer.isCorrect && isSelected;

        return (
          <TouchableOpacity
            key={answer.id}
            onPress={() => properties.handleAnswerPress(answer)}
            style={[
              styles.answerWrapper,
              isSelected && styles.selectedAnswerWrapper,
              isAnswerCorrect && styles.correctAnswer,
              isAnswerIncorrect && styles.incorrectAnswer,
            ]}
          >
            <BlurView intensity={50} tint="dark" style={styles.blur}>
              <View style={styles.answerContent}>
                <Text style={styles.answerText}>{answer.title}</Text>
                {isAnswerCorrect && <IconCheckCircle width={20} height={20} />}
                {isAnswerIncorrect && <IconXCircle width={20} height={20} />}
              </View>
            </BlurView>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  answersContainer: {
    rowGap: 16,
  },
  answerWrapper: {
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.4)",
  },
  blur: {
    padding: 12,
    backgroundColor: "rgba(128, 128, 128, 0.2)",
  },
  answerText: {
    color: "#999",
    fontSize: 16,
    textAlign: "left",
  },
  selectedAnswerWrapper: {
    borderColor: "#B3B3B3",
  },
  correctAnswer: {
    borderColor: "#BAF7CD",
    borderWidth: 2,
  },
  incorrectAnswer: {
    borderColor: "#EF6464",
    borderWidth: 2,
  },
  answerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
});
