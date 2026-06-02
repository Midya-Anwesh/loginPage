export interface AssessmentQuestion {
  id: number,
  question: string;
  score: number;
}

export interface CoachInfo {
  name: string;
  avatarInitial: string;
}

export interface MatchCard {
  id: string;
  isNew: boolean;
  matchType: string;
  opponent?: string; // Optional since the second card doesn't have it
  location?: string; // Optional since the second card doesn't have it
  result: 'Win' | 'Loss';
  sets: string;
  questions: AssessmentQuestion[];
  coach: CoachInfo;
}

export const matchCardsData: MatchCard[] = [
  {
    id: "match-001",
    isNew: true,
    matchType: "Practice Match",
    opponent: "Shane Warne",
    location: "Australia • Australian Open",
    result: "Win",
    sets: "2 Sets",
    questions: [
      {
        id: 1,
        question: "On a scale of 1 to 10, How did you play?",
        score: 7
      },
      {
        id: 2,
        question: "On a scale of 1 to 10, How good did you feel?",
        score: 7
      },
      {
        id: 3,
        question: "On a scale of 1 to 10, How well did you accept & deal with your previous question?",
        score: 7
      }
    ],
    coach: {
      name: "Steve Smith",
      avatarInitial: "S"
    }
  },
  {
    id: "match-002",
    isNew: false,
    matchType: "Practice Match",
    result: "Win",
    sets: "2 Sets",
    questions: [
      {
        id: 4,
        question: "On a scale of 1 to 10, How did you play?",
        score: 7
      },
      {
        id: 5,
        question: "On a scale of 1 to 10, How good did you feel?",
        score: 7
      },
      {
        id: 6,
        question: "On a scale of 1 to 10, How well did you accept & deal with your previous question?",
        score: 7
      }
    ],
    coach: {
      name: "Steve Smith",
      avatarInitial: "S"
    }
  },
{
    id: "match-003",
    isNew: false,
    matchType: "Practice Match",
    result: "Win",
    sets: "2 Sets",
    questions: [
      {
        id: 4,
        question: "On a scale of 1 to 10, How did you play?",
        score: 7
      },
      {
        id: 5,
        question: "On a scale of 1 to 10, How good did you feel?",
        score: 7
      },
      {
        id: 6,
        question: "On a scale of 1 to 10, How well did you accept & deal with your previous question?",
        score: 7
      }
    ],
    coach: {
      name: "Steve Smith",
      avatarInitial: "S"
    }
  }
];