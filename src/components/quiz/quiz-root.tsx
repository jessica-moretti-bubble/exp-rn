import { ImageBackground, StyleSheet, View } from "react-native";
import { QuizEnd } from "./quiz-end";
import { QuizStart } from "./quiz-start";

interface QuizRootProperties {
  setPlayQuiz: (value: boolean) => void;
  quizCompleted: boolean;
}
export function QuizRoot({ setPlayQuiz, quizCompleted }: QuizRootProperties) {
  return (
    <ImageBackground
      source={require("../../assets/images/quiz/quiz-root-background.png")}
      style={styles.root}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      {quizCompleted ? <QuizEnd/> : <QuizStart setPlayQuiz={setPlayQuiz} />}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    rowGap: 32,
    paddingHorizontal: 32,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
});
