import React, { useState } from "react";
import { ImageBackground, Modal, StyleSheet, Text, View } from "react-native";

import { GenericButton } from "components/shared/button/generic-button";
import { GenericProgressBar } from "components/shared/chart/generic-progress-bar";
import { QuizQuestions } from "config/quiz.config";
import type { Answer, QuizData } from "model/quiz-data.model";
import { QuizAnswersWrapper } from "./quiz-answers-wrapper";
import { QuizButtonActionsWrapper } from "./quiz-buttons-actions-wrapper";

const backgroundImages: Record<number, any> = {
  1: require("@/assets/images/background/quiz/quiz-question-variant-1.jpg"),
  2: require("@/assets/images/background/quiz/quiz-question-variant-2.png"),
  3: require("@/assets/images/background/quiz/quiz-question-variant-3.jpg"),
  4: require("@/assets/images/background/quiz/quiz-question-variant-4.png"),
};

interface QuizMainWrapperProperties {
  setQuizCompleted: (value: boolean) => void;
  setPlayQuiz: (value: boolean) => void;
}
export function QuizMainWrapper({
  setQuizCompleted,
  setPlayQuiz,
}: QuizMainWrapperProperties) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const currentQuestion: QuizData = QuizQuestions[currentIndex];
  const isCorrect = selectedAnswer?.isCorrect === true;

  const handleAnswerPress = (answer: Answer) => {
    if (hasSubmitted) return;
    setSelectedAnswer(answer);
  };

  const handleButtonPress = () => {
    if (!selectedAnswer) return;

    if (!hasSubmitted) {
      setHasSubmitted(true);
    } else {
      const nextIndex = currentIndex + 1;
      if (nextIndex < QuizQuestions.length) {
        setCurrentIndex(nextIndex);
        setSelectedAnswer(null);
        setHasSubmitted(false);
      } else {
        setQuizCompleted(true);
        setPlayQuiz(false);
      }
    }
  };

  return (
    <Modal visible transparent animationType="fade">
      <ImageBackground
        source={backgroundImages[currentQuestion.id]}
        style={styles.root}
        resizeMode="cover"
      >
        <View style={styles.overlay} />

        <View style={styles.content}>
          <QuizButtonActionsWrapper />
          <GenericProgressBar
            progress={
              (currentIndex + (hasSubmitted && isCorrect ? 1 : 0)) /
              QuizQuestions.length
            }
          />

          <Text style={styles.question}>{currentQuestion.question}</Text>

          <QuizAnswersWrapper
            currentQuestion={currentQuestion}
            selectedAnswer={selectedAnswer}
            hasSubmitted={hasSubmitted}
            handleAnswerPress={handleAnswerPress}
          />

          <GenericButton
            label={!hasSubmitted ? "Scegli" : isCorrect ? "Prosegui" : "Scegli"}
            variant={
              !hasSubmitted
                ? "primary-shadow"
                : isCorrect
                ? "primary"
                : "primary-shadow"
            }
            onPress={handleButtonPress}
            disabled={!selectedAnswer || (hasSubmitted && !isCorrect)}
            style={{ width: 90 }}
          />
        </View>
      </ImageBackground>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  content: {
    borderRadius: 8,
    zIndex: 1,
    width: 311,
    rowGap: 24,
  },
  question: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 33.6,
    color: "#D6FBDA",
    textAlign: "left",
  },
});
