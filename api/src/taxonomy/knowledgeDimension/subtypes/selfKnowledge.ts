import type { KnowledgeSubtype } from "../../types";

export const selfKnowledge: KnowledgeSubtype = {
  name: "selfKnowledge",
  definition:
    "Knowledge of own cognition (strengths/weaknesses in learning) and motivation",
  content: {
    includes:
      "cognition/learning strengths/weaknesses, strategy preferences, knowledge base breadth/depth, motivational beliefs (self-efficacy, goals, values, interests, task utility)",
    basis:
      "important metacognition component; includes cognitive and motivational beliefs as social cognitive constructs",
    precision:
      "accurate perceptions and judgments of knowledge base and expertise; not inflated or false impressions",
  },
  characteristics: {
    quantity:
      "includes cognitive self-knowledge and motivational beliefs across domains",
    precision:
      "accurate self-knowledge crucial, not inflated self-esteem; experts know what they know/don't know",
    basis:
      "enables studying for test types; finding information; strategy awareness; adjusting overreliance on particular strategies",
  },
  distinguishedFrom: {
    target: "strategic knowledge and cognitive tasks knowledge",
    basis:
      "knowledge about self (person variable) vs knowledge about strategies and tasks; self-awareness vs strategic or conditional knowledge",
  },
  buildsUpon:
    "Strategic knowledge and cognitive tasks knowledge - self-knowledge helps students apply strategies appropriately based on their own capabilities",
  learningImplications:
    "Knowing test-taking strengths useful for studying; experts know limits without false impressions; need strategy awareness to adjust overreliance; develop cognitive and motivational self-knowledge; accuracy crucial - not inflated self-esteem; accurate perceptions enable learning gaps recognition; teachers should foster accurate assessments, not inflate self-esteem",
  expertiseIndicators:
    "Know limits without false impressions; accurate self-knowledge; aware of knowledge base breadth/depth; understand strengths/weaknesses; aware of strategy preferences; adjust overreliance; accurate motivational beliefs",
  examples: {
    cognitiveAwareness: {
      domainVariability:
        "knowledge that one is knowledgeable in some areas but not in others",
      strategyPreference:
        "knowledge that one tends to rely on one type of 'cognitive tool' (strategy) in certain situations",
      accurateCapabilities:
        "knowledge of one's capabilities to perform a particular task that are accurate, not inflated (e.g., overconfident)",
    },
    motivationalBeliefs: {
      selfEfficacy:
        "students' judgments of their capability to accomplish a specific task (self-efficacy beliefs); students need accurate perceptions, not inflated self-esteem",
      goalBeliefs:
        "knowledge of one's goals for performing a task; beliefs about the goals or reasons students have for pursuing a specific task (e.g., learning vs. getting a good grade)",
      personalInterest:
        "knowledge of one's personal interest in a task; value and interest beliefs, which represent students' perceptions of their personal interest (liking) for a task",
      taskUtility:
        "knowledge of one's judgments about the relative utility value of a task; judgments of how important and useful the task is to them",
    },
  },
};
