import { useState } from "react";
import { QuizMainWrapper } from "src/components/quiz/quiz-main-wrapper";
import { QuizRoot } from "src/components/quiz/quiz-root";


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
