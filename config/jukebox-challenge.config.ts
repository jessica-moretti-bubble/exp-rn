import { Challenge, ChallengeTextStyle, JukeboxChallenge } from "model/jukebox-challenge.model";

export const JukeboxChallengeMap: Record<Challenge, JukeboxChallenge> = {
  [Challenge.SCOUT]: {
    challenge: 'Scout',
    description: "Entra per 5 giorni e riceverai 1 card comune",
    firstLevelValue: 1,
    secondLevelValue: 2,
    progressBarValue: 5,
  },
  [Challenge.TALENT]: {
    challenge: 'Talent',
    description: "Entra per 15 giorni e riceverai 1 card oro + 1 booster",
    firstLevelValue: 2,
    secondLevelValue: 3,
    progressBarValue: 15,
  },
  [Challenge.MANAGER]: {
    challenge: 'Manager',
    description: "Entra per 30 giorni e riceverai 1 vinile oro + 2 Jolly",
    firstLevelValue: 3,
    secondLevelValue: 4,
    progressBarValue: 30,
  },
  [Challenge.DIRECTOR]: {
    challenge: 'Direttore',
    description:
      "Entra per 60 giorni e riceverai 1 card platino + 1 vinile raro + 1 Cubble Pack Star",
    firstLevelValue: 4,
    secondLevelValue: 5,
    progressBarValue: 60,
  },
  [Challenge.PRODUCER]: {
    challenge: 'Produttore',
    description:
      "Entra per 100 giorni e riceverai 1 card unica + 1 Jolly extra + 1 vinile raro + booster full",
    firstLevelValue: 5,
    secondLevelValue: 6,
    progressBarValue: 100,
  },
};




export const challengeTextStyles: Record<Challenge, ChallengeTextStyle> = {
  [Challenge.SCOUT]: {
    textShadowColor: "rgba(203, 218, 230, 0.5)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
    gradientColors: ["#ECF8F8", "#82B5C6", "#475270"],
    gradientAngle: 40,
  },
  [Challenge.TALENT]: {
    textShadowColor: "rgba(108, 223, 118, 0.5)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
    gradientColors: ["#20171A", "#24713E", "#29BDAB", "#517FA9"],
    gradientAngle: 221,
  },
  [Challenge.MANAGER]: {
    textShadowColor: "rgba(255, 22, 135, 0.5)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
    gradientColors: ["#3E131E", "#CB40D9", "#FCA2FC"],
    gradientAngle: 220,
  },
  [Challenge.DIRECTOR]: {
    textShadowColor: "rgba(255, 22, 26, 0.5)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
    gradientColors: ["#2E2925", "#BF5E34", "#F07635", "#EFAD7D"],
    gradientAngle: 214,
  },
  [Challenge.PRODUCER]: {
    textShadowColor: "rgba(253, 0, 4, 0.5)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
    gradientColors: ["#4F0101", "#670001", "#F50005", "#820500"],
    gradientAngle: 220,
  },
};
