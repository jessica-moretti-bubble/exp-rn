
export enum Challenge {
    SCOUT = 'SCOUT',
    TALENT = 'TALENT',
    MANAGER = 'MANAGER',
    DIRECTOR = 'DIRECTOR',
    PRODUCER = 'PRODUCER'
}


export interface JukeboxChallenge {
    challenge: string,
    description: string,
    firstLevelValue: number,
    secondLevelValue: number,
    progressBarValue: number
}


export type ChallengeTextStyle = {
    textShadowColor: string;
    textShadowOffset: { width: number; height: number };
    textShadowRadius: number;
    gradientColors: string[];
    gradientAngle: number; // in gradi
  };