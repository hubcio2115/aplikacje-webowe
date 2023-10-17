import { Component } from "@angular/core";
import questions from "./mock/questions";

@Component({
  selector: "app-exercise",
  templateUrl: "./exercise.component.html",
})
export class ExerciseComponent {
  questions = questions;

  topThreeWords() {
    const questions: string[] = this.questions.map(
      ({ question }) => question,
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

    const result= Object.entries(wordCounter)

    result.sort((a, b) => b[1] - a[1]);

    return result
      .slice(0, 3)
      .reduce(
        (acc: {word: string, count: number}[], [key, value]) =>[
          ...acc,
          { word: key, count: value },
        ],
        [],
      );
  }
}


