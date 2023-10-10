// Fragment kodu do uzupełnienia
import {
  questionsChatGpt as questions,
  type Question,
} from "./questions-chatgpt";

type TopThreeWordsResult = { word: string; count: number }[];

function topThreeWords(questionsChatGpt: Question[]) {
  const questions = questionsChatGpt.map(({ question }) => question);

  const wordCounter: Record<string, number> = {};
  for (const question of questions) {
    const words = question.split(" ");

    for (const word of words) {
      wordCounter[word]
        ? (wordCounter[word] = wordCounter[word] + 1)
        : (wordCounter[word] = 1);
    }
  }

  const result = Object.entries(wordCounter)
    .toSorted((a, b) => b[1] - a[1])
    .slice(0, 3)
    .reduce((acc: TopThreeWordsResult, [key, value]) => {
      return [...acc, { word: key, count: value }];
    }, []);

  return result;
}

const topThree = topThreeWords(questions);
console.log(topThree);

// Oczekiwany output
// [
//   { word: "Jakie", count: 18 },
//   { word: "są", count: 18 },
//   { word: "najlepsze", count: 17 },
// ];
