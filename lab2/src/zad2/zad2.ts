// Fragment kodu do uzupełnienia
import {
  questionsChatGpt as questions,
  type Question,
} from "./questions-chatgpt";

interface TTopThreeWordsResult {
  word: string;
  count: number;
}

function topThreeWords(questionsChatGpt: Question[]): TTopThreeWordsResult[] {
  const questions: string[] = questionsChatGpt.map(
    ({ question }: Question) => question,
  );

  const wordCounter: Record<string, number> = {};
  for (const question of questions) {
    const words: string[] = question.split(" ");

    for (const word of words) {
      wordCounter[word]
        ? (wordCounter[word] = wordCounter[word] + 1)
        : (wordCounter[word] = 1);
    }
  }

  const result: TTopThreeWordsResult[] = Object.entries(wordCounter)
    .toSorted((a: [string, number], b: [string, number]) => b[1] - a[1])
    .slice(0, 3)
    .reduce(
      (acc: TTopThreeWordsResult[], [key, value]: [string, number]) => [
        ...acc,
        { word: key, count: value },
      ],
      [],
    );

  return result;
}

const topThree: TTopThreeWordsResult[] = topThreeWords(questions);
console.log(topThree);

// Oczekiwany output
// [
//   { word: "Jakie", count: 18 },
//   { word: "są", count: 18 },
//   { word: "najlepsze", count: 17 },
// ];
