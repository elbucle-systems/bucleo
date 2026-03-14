import type { KnowledgeSubtype } from "../../types";

export const cognitiveTasks: KnowledgeSubtype = {
  name: "cognitiveTasks",
  definition:
    "Knowledge about cognitive tasks; awareness that tasks vary in difficulty, make differential demands, require different strategies; includes conditional knowledge of when/why to use strategies",
  content: {
    includes:
      "task difficulty, task demands, differential strategy requirements, conditional knowledge of when/why to use strategies, situational/cultural norms for strategy use",
    basis:
      "reflects what strategies to use and how; requires conditional knowledge for strategies; learner develops knowledge of conditions/tasks for appropriate strategy use",
    precision:
      "understanding that different tasks require different approaches; awareness of cognitive demands; strategies as cognitive 'tools' that are better suited to some tasks than others",
  },
  characteristics: {
    quantity:
      "accumulated knowledge about task types and appropriate strategy use",
    precision:
      "differential understanding of difficulty/demands; distinguish task types; procedural knowledge insufficient - need conditional knowledge",
    basis:
      "strategies better suited to different tasks; knowledge of metacognitive use situations; cultural/social norms for strategy use",
  },
  distinguishedFrom: {
    target: "strategic knowledge and procedural knowledge",
    basis:
      "conditional knowledge (when/why) vs strategic knowledge (what); metacognitive use situations vs procedural knowledge (subject-specific skills/algorithms/methods)",
  },
  buildsUpon:
    "Strategic knowledge - task/condition understanding determines strategy application; procedural knowledge insufficient for expertise without conditional knowledge",
  learningImplications:
    "Need conditional knowledge, not just procedural; develop when/why knowledge; general heuristics for ill-defined problems, procedural for well-defined; cultural/social norms affect appropriateness; knowing norms helps adapt to cultural demands",
  expertiseIndicators:
    "Aware tasks make differential demands; assess task difficulty; understand when strategies appropriate; know conditional use (when/why); aware of cultural/social norms; adapt to contexts",
  examples: {
    taskDifficulty: {
      recallVsRecognition:
        "knowledge that recall tasks (i.e., short-answer items) generally make more demands on the individual's memory system than recognition tasks (i.e., multiple-choice items); recall requires person to search memory actively and retrieve relevant information, whereas recognition task requires person to discriminate among alternatives and select correct or most appropriate answer",
      sourceComplexity:
        "knowledge that a primary source book may be more difficult to understand than a general textbook or popular book",
      memorizationSimplicity:
        "knowledge that a simple memorization task (e.g., remembering a phone number) may require only rehearsal",
      elaborationForComprehension:
        "knowledge that elaboration strategies like summarizing and paraphrasing can result in deeper levels of comprehension",
    },
    toolAnalogy: {
      strategiesAsTools:
        "strategies as cognitive 'tools' that help students construct understanding; different cognitive tasks require different tools, just as carpenter uses different tools for performing all tasks that go into building a house; one tool (hammer) can be used in many different ways for different tasks, but not necessarily most adaptive use; particularly if other tools are better suited to some tasks",
    },
    conditionalUse: {
      illDefinedProblems:
        "if one confronts a novel problem that is ill-defined, then general problem-solving heuristics may be useful; knowledge that general problem-solving heuristics may be most useful when the individual lacks relevant subject- or task-specific knowledge or in the absence of specific procedural knowledge",
      wellDefinedProblems:
        "if one confronts a physics problem about the second law of thermodynamics, then more specific procedural knowledge is more useful and adaptive",
      strategicFlexibility:
        "knowledge of the local and general social, conventional, and cultural norms for how, when, and why to use different strategies",
    },
    culturalNorms: {
      classroomVsWork:
        "knowledge that strategies used in a classroom learning situation may not be the most appropriate ones to use in a work setting; knowledge of different situations and cultural norms regarding use of different strategies within those situations",
      culturalDifferences:
        "teacher may encourage use of certain strategy for monitoring reading comprehension; student who knows that strategy is better able to meet demands of teacher's classroom; different cultures and subcultures may have norms for use of different strategies and ways of thinking about problems; knowing these norms helps students adapt to demands of culture in terms of solving problems",
    },
  },
};
