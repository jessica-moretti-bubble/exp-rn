import { QuizData } from "model/quiz-data.model";

export const QuizQuestions: QuizData[] = [
  {
      id: 1,
      question: "Quale di questi artisti ha pubblicato l'album “25”?",
      answers: [
          {
              id: 1,
              title: 'Billie Eilish',
              isCorrect: false
          },
          {
              id: 2,
              title: 'Adele',
              isCorrect: true
          },
          {
              id: 3,
              title: 'Lady Gaga',
              isCorrect: false
          },
          {
              id: 4,
              title: 'Beyoncé',
              isCorrect: false
          }
      ],
      image: "@assets/images/background/quiz/quiz-question-variant-1.jpg"
  },

  {
      id: 2,
      question: "Qual è il nome del cantante dei Coldplay",
      answers: [
          {
              id: 1,
              title: 'Chris Martin',
              isCorrect: true
          },
          {
              id: 2,
              title: 'Ed Sheeran',
              isCorrect: false
          },
          {
              id: 3,
              title: 'Sam Smith',
              isCorrect: false
          },
          {
              id: 4,
              title: 'Shawn Mendes',
              isCorrect: false
          }
      ],
      image: "@assets/images/background/quiz/quiz-question-variant-2.png"

  },

  {
      id: 3,
      question: "Quanto dura in media una canzone pop radiofonica",
      answers: [
          {
              id: 1,
              title: '5 minuti',
              isCorrect: false
          },
          {
              id: 2,
              title: '2 minuti',
              isCorrect: false
          },
          {
              id: 3,
              title: '3 minuti',
              isCorrect: true
          },
          {
              id: 4,
              title: '6 minuti',
              isCorrect: false
          }
      ],
      image: "@assets/images/background/quiz/quiz-question-variant-3.jpg"

  },

  {
      id: 4,
      question: 'Quale icona musicale è nota come "The Boss"?',
      answers: [
          {
              id: 1,
              title: 'Bruce Springsteen',
              isCorrect: true
          },
          {
              id: 2,
              title: 'Elvis Presley',
              isCorrect: false
          },
          {
              id: 3,
              title: 'Michael Jackson',
              isCorrect: false
          },
          {
              id: 4,
              title: 'Freddie Mercury',
              isCorrect: false
          }
      ],
      image: "@assets/images/background/quiz/quiz-question-variant-4.png"

  },
  
];
