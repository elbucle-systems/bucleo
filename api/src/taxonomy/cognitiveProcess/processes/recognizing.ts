import type { CognitiveProcess } from "../../types";

export const recognizing: CognitiveProcess = {
  name: "recognizing",
  alternativeNames: ["identifying"],
  definition:
    "Retrieving relevant knowledge from long-term memory to compare with presented information",
  characteristics: {
    cognitiveAction:
      "search long-term memory for match with presented information; determine if information corresponds to previously learned knowledge",
    complexity: "low; basic retrieval process with external cues",
    typicalContext:
      "recognition tasks under conditions similar to learning; verification, matching, forced-choice formats",
  },
  distinguishedFrom: {
    target: "recalling",
    basis:
      "comparing presented information with memory vs retrieving without cues; recognition easier than recall; matching vs generating",
  },
  buildsUpon: "Prior encoding of information into long-term memory",
  learningImplications:
    "Foundation for retention; assessed under conditions similar to learning with little extension expected; essential for meaningful learning when integrated within larger tasks of constructing knowledge or solving problems",
  assessmentMethods:
    "Verification (true-false), matching (two lists correspondence), forced choice (multiple-choice); student given prompt with information and determines correctness or best match",
  expertiseIndicators:
    "Quickly identify relevant information from cues; accurate matching of presented information to stored knowledge; recognize similarities between new and learned material",
  examples: {
    history:
      "Recognize correct dates of important events in U.S. history (true-false format)",
    literature:
      "Recognize authors of British literary works (matching test with author list and novel list)",
    mathematics:
      "Recognize numbers of sides in geometric shapes (multiple-choice: pentagon has (a) four, (b) five, (c) six, (d) seven)",
    language:
      "Match Spanish words in one list with English equivalents in second list",
  },
};
