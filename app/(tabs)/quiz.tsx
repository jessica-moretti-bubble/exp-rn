import { QuizMainWrapper } from "components/quiz/quiz-main-wrapper";
import { QuizRoot } from "components/quiz/quiz-root";
import { useState } from "react";

// QuizQuestions

export default function QuizPage() {
  const [playQuiz, setPlayQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  return (
    <>
      {playQuiz ? (
        <QuizMainWrapper
          setQuizCompleted={setQuizCompleted}
          setPlayQuiz={setPlayQuiz}
        />
      ) : (
        <QuizRoot setPlayQuiz={setPlayQuiz} quizCompleted={quizCompleted} />
      )}
    </>
  );
}
