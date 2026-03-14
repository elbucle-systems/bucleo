import type { CognitiveProcess } from "../../types";

export const summarizing: CognitiveProcess = {
  name: "summarizing",
  alternativeNames: ["abstracting", "generalizing"],
  definition:
    "Abstracting a general theme or major points from presented information",
  characteristics: {
    cognitiveAction:
      "construct representation of information (such as meaning of scene in play); abstract summary from it (determining theme or main points)",
    complexity:
      "moderate to high; requires identifying main ideas and omitting details; involves both constructing and abstracting",
    typicalContext:
      "writing summaries, identifying themes, abstracting key points, determining main points, generalizing from detailed information",
  },
  distinguishedFrom: {
    target: "interpreting and organizing",
    basis:
      "abstracting general theme or main points vs transforming format or structuring; creates condensed single-statement representation vs changing form or building structure; themes more abstract than summaries",
  },
  buildsUpon:
    "Understanding content deeply enough to distinguish essential from non-essential and construct representative statements",
  learningImplications:
    "Requires comprehension and judgment; students select important information and construct coherent abbreviated representation; must provide summary or abstract general theme; develops synthesis and abstraction skills",
  assessmentMethods:
    "Constructed response: write summaries, state themes; selected response: select themes or titles; themes more abstract than summaries",
  expertiseIndicators:
    "Identify core themes efficiently; create accurate, concise summaries; preserve meaning while condensing; distinguish essential from peripheral; abstract general themes from detailed content",
  examples: {
    history:
      "Write short summaries of events portrayed pictorially; summarize major contributions of famous scientists after reading several writings",
    media:
      "Watch videotape on French Revolution and write short summary; similarly for natural sciences",
    computerScience:
      "Summarize purposes of various subroutines in program; write sentence describing subgoal each program section accomplishes within overall program",
    literature:
      "Read selected writings about Charles Darwin and summarize major points; identify themes in passages (read California Gold Rush passage, select appropriate title)",
  },
};
