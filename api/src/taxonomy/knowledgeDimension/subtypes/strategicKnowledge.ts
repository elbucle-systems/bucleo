import type { KnowledgeSubtype } from "../../types";

export const strategicKnowledge: KnowledgeSubtype = {
  name: "strategicKnowledge",
  definition:
    "Knowledge of general strategies for learning, thinking, and problem solving that can be used across many different tasks and subject matters",
  content: {
    includes:
      "learning strategies (rehearsal, elaboration, organizational), metacognitive strategies for planning/monitoring/regulating cognition, memory strategies, comprehension strategies, problem-solving strategies",
    basis:
      "general strategies applicable across domains rather than being most useful for one particular type of task in one specific subject area",
    precision:
      "strategies grouped into categories; effectiveness varies by depth of processing required",
  },
  characteristics: {
    quantity: "large number of different learning strategies",
    precision:
      "can be categorized (rehearsal, elaboration, organizational); vary in effectiveness for depth of learning",
    basis:
      "strategies for memorizing, extracting meaning, comprehension, planning, monitoring, and regulating cognition",
  },
  distinguishedFrom: {
    target: "subject-specific procedures and cognitive tasks knowledge",
    basis:
      "general cross-disciplinary strategies vs subject-specific procedures; knowledge of strategies vs knowledge of when/why to use them (tasks)",
  },
  buildsUpon:
    "None - foundational metacognitive knowledge that can be applied across domains",
  learningImplications:
    "Students know strategies to plan (subgoals, monitor, question) and regulate cognition (re-read, repair); organizational/elaboration more effective than rehearsal; refers to knowledge, not actual use",
  expertiseIndicators:
    "Know variety of learning strategies; understand planning, monitoring, regulating; categorize and select for learning goals; know problem-solving heuristics",
  examples: {
    rehearsal: {
      definition:
        "repeating words or terms to be recalled over and over to oneself",
      effectiveness:
        "generally not most effective for deeper levels of learning and comprehension",
      examples:
        "knowledge that rehearsal of information is one way to retain the information; repeating vocabulary words, memorizing formulas by repetition",
    },
    elaboration: {
      definition:
        "use of various mnemonics for memory tasks as well as techniques such as summarizing, paraphrasing, and selecting main idea from texts",
      effectiveness:
        "foster deeper processing of material; result in better comprehension and learning than rehearsal",
      examples:
        "knowledge of various mnemonic strategies for memory (e.g., use of acronyms such as Roy G Biv for colors of spectrum); knowledge of various elaboration strategies such as paraphrasing and summarizing",
    },
    organizational: {
      definition:
        "various forms of outlining, drawing cognitive maps or concept mapping, and note taking; students transform material from one form to another",
      effectiveness:
        "usually result in better comprehension and learning than rehearsal strategies",
      examples:
        "knowledge of various organizational strategies such as outlining or diagramming; outlining texts, creating concept maps, note-taking systems",
    },
    metacognitive: {
      planning:
        "knowledge of planning strategies such as setting goals for reading; strategies to plan cognition (e.g., set subgoals, ask questions as reading text)",
      monitoring:
        "knowledge of comprehension-monitoring strategies such as self-testing or self-questioning; strategies to monitor cognition (e.g., check answer to math problem)",
      regulating:
        "strategies to regulate cognition (e.g., re-read something they don't understand, go back and repair calculating mistake in math problem)",
    },
    problemSolving: {
      heuristics:
        "general heuristics students can use to solve problems, particularly ill-defined problems with no definitive solution method",
      meansEndsAnalysis:
        "knowledge of means-ends analysis as a heuristic for solving an ill-defined problem",
      workingBackward:
        "working backward from the desired goal state; in addition to problem-solving strategies, general strategies for deductive and inductive thinking",
      logicalReasoning:
        "evaluating validity of different logical statements; avoiding circularity in arguments; making appropriate inferences from different sources of data",
      samplingInferences:
        "drawing on appropriate samples to make inferences; knowledge of availability heuristic and the problems of failing to sample in an unbiased manner (avoiding making decisions from convenient instead of representative symbols)",
    },
  },
};
