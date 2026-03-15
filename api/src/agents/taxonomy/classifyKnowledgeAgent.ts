import { OpenRouter, tool, hasToolCall } from "@openrouter/sdk";
import { z } from "zod";
import type {
  KnowledgeDimension,
  KnowledgeSubtypeName,
  KnowledgeType,
  KnowledgeSubtype,
} from "../../taxonomy/types";
import { factualKnowledge } from "../../taxonomy/knowledgeDimension/factualKnowledge";
import { conceptualKnowledge } from "../../taxonomy/knowledgeDimension/conceptualKnowledge";
import { proceduralKnowledge } from "../../taxonomy/knowledgeDimension/proceduralKnowledge";
import { metacognitiveKnowledge } from "../../taxonomy/knowledgeDimension/metacognitiveKnowledge";

const dimensionMap: Record<KnowledgeDimension, KnowledgeType> = {
  factual: factualKnowledge,
  conceptual: conceptualKnowledge,
  procedural: proceduralKnowledge,
  metacognitive: metacognitiveKnowledge,
};

const subtypeMap: Record<KnowledgeSubtypeName, KnowledgeSubtype> = {
  ...factualKnowledge.subtypes,
  ...conceptualKnowledge.subtypes,
  ...proceduralKnowledge.subtypes,
  ...metacognitiveKnowledge.subtypes,
} as Record<KnowledgeSubtypeName, KnowledgeSubtype>;

const classifyKnowledgeDimensionTool = tool({
  name: "classify_knowledge_dimension",
  description:
    "Classify a learning objective into its Bloom's Revised Taxonomy knowledge dimension and subtype. " +
    "Dimensions: factual (basic isolated elements of a discipline), conceptual (organized categories, schemas, and theories), " +
    "procedural (subject-specific how-to skills and algorithms), metacognitive (knowledge about cognition and self). " +
    "Subtypes — factual: terminology, specificDetailsAndElements; " +
    "conceptual: classificationsAndCategories, principlesAndGeneralizations, theoriesModelsAndStructures; " +
    "procedural: subjectSpecificSkillsAndAlgorithms, subjectSpecificTechniquesAndMethods, criteriaForUsingProcedures; " +
    "metacognitive: strategicKnowledge, cognitiveTasks, selfKnowledge.",
  inputSchema: z.object({
    dimension: z
      .enum(["factual", "conceptual", "procedural", "metacognitive"])
      .describe(
        "The knowledge dimension: " +
          "factual (isolated basic elements such as vocabulary, symbols, specific facts), " +
          "conceptual (organized relationships — categories, principles, theories, models), " +
          "procedural (subject-specific how-to knowledge — skills, algorithms, techniques, and when to use them), " +
          "metacognitive (knowledge about cognition itself — learning strategies, task awareness, self-knowledge)",
      ),
    subtype: z
      .enum([
        "terminology",
        "specificDetailsAndElements",
        "classificationsAndCategories",
        "principlesAndGeneralizations",
        "theoriesModelsAndStructures",
        "subjectSpecificSkillsAndAlgorithms",
        "subjectSpecificTechniquesAndMethods",
        "criteriaForUsingProcedures",
        "strategicKnowledge",
        "cognitiveTasks",
        "selfKnowledge",
      ])
      .describe(
        "The knowledge subtype: " +
          "terminology (labels and symbols that form the basic language of a discipline), " +
          "specificDetailsAndElements (discrete facts about specific instances, events, people, dates), " +
          "classificationsAndCategories (categories and systems used to structure or systematize phenomena), " +
          "principlesAndGeneralizations (abstractions that summarize observations and interrelationships), " +
          "theoriesModelsAndStructures (integrated sets of principles forming coherent frameworks for explaining phenomena), " +
          "subjectSpecificSkillsAndAlgorithms (step-by-step discipline-specific sequences and fixed procedures), " +
          "subjectSpecificTechniquesAndMethods (discipline-specific techniques and methods less fixed than algorithms), " +
          "criteriaForUsingProcedures (knowledge of when and why to apply subject-specific procedures), " +
          "strategicKnowledge (general learning and thinking strategies applicable across domains), " +
          "cognitiveTasks (knowledge of which tasks require which strategies and the conditional when/why), " +
          "selfKnowledge (awareness of one's own cognitive strengths, weaknesses, and motivational beliefs)",
      ),
  }),
  execute: false,
});

export async function classifyKnowledgeAgent(
  learningObjective: string,
): Promise<{ dimension: KnowledgeType; subtype: KnowledgeSubtype }> {
  const openrouter = new OpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY,
  });

  const result = openrouter.callModel({
    model: "openrouter/hunter-alpha",
    input:
      `You are an expert in Bloom's Revised Taxonomy (Anderson & Krathwohl, 2001). ` +
      `Classify the following learning objective into the correct knowledge dimension and subtype ` +
      `by calling the classify_knowledge_dimension tool.\n\n` +
      `Learning objective: ${learningObjective}`,
    tools: [classifyKnowledgeDimensionTool],
    stopWhen: hasToolCall("classify_knowledge_dimension"),
  });

  const toolCalls = await result.getToolCalls();
  const first = toolCalls[0];

  if (!first) {
    throw new Error(
      "Agent did not return a classification for the learning objective",
    );
  }

  const { dimension, subtype } = first.arguments as {
    dimension: KnowledgeDimension;
    subtype: KnowledgeSubtypeName;
  };

  return {
    dimension: {
      ...dimensionMap[dimension],
      subtypes: { [subtype]: subtypeMap[subtype] },
    },
    subtype: subtypeMap[subtype],
  };
}
