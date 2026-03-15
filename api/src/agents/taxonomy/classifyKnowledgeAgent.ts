import { OpenRouter, tool } from "@openrouter/sdk";
import { z } from "zod";

export type KnowledgeClassificationResult = {
  dimension: {
    name: string;
    explanation: string;
  };
  subtype: {
    name: string;
    explanation: string;
  };
  examples: {
    scenario: string;
    howItAppliesToObjective: string;
  }[];
};

const classifyInputSchema = z.object({
  dimension: z
    .enum(["factual", "conceptual", "procedural", "metacognitive"])
    .describe(
      "The knowledge dimension key used for internal classification: " +
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
      "The knowledge subtype key used for internal classification: " +
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
  dimensionName: z
    .string()
    .describe(
      "Human-readable name of the knowledge dimension, suitable for teachers and instructional designers. " +
        "E.g. 'Factual Knowledge', 'Conceptual Knowledge', 'Procedural Knowledge', 'Metacognitive Knowledge'.",
    ),
  dimensionExplanation: z
    .string()
    .describe(
      "A clear, jargon-free explanation of why this specific learning objective belongs to this knowledge dimension. " +
        "Write directly for the teacher or instructional designer who wrote the objective. " +
        "Reference the actual content and action of the learning objective.",
    ),
  subtypeName: z
    .string()
    .describe(
      "Human-readable name of the knowledge subtype, suitable for teachers and instructional designers. " +
        "E.g. 'Terminology', 'Specific Details and Elements', 'Classifications and Categories', etc.",
    ),
  subtypeExplanation: z
    .string()
    .describe(
      "A clear, jargon-free explanation of what this subtype means in the specific context of this learning objective. " +
        "Explain concretely what the student is expected to know or do, referencing the subject matter of the objective.",
    ),
  examples: z
    .array(
      z.object({
        scenario: z
          .string()
          .describe(
            "A realistic classroom or real-world situation directly related to the learning objective's subject matter.",
          ),
        howItAppliesToObjective: z
          .string()
          .describe(
            "A concrete explanation of how this scenario demonstrates the knowledge type in the context of the learning objective.",
          ),
      }),
    )
    .describe(
      "A set of concrete, contextualized examples that illustrate the knowledge dimension and subtype " +
        "as they apply to this specific learning objective. Each example must be grounded in the subject matter " +
        "and domain of the learning objective — no generic or abstract examples.",
    ),
});

const classifyKnowledgeDimensionTool = tool({
  name: "classify_knowledge_dimension",
  description:
    "Classify a learning objective into its Bloom's Revised Taxonomy knowledge dimension and subtype. " +
    "Then generate a human-friendly explanation and contextualized examples targeted at teachers and instructional designers. " +
    "All explanations and examples must be directly tied to the given learning objective — no generic descriptions. " +
    "Dimensions: factual (basic isolated elements of a discipline), conceptual (organized categories, schemas, and theories), " +
    "procedural (subject-specific how-to skills and algorithms), metacognitive (knowledge about cognition and self). " +
    "Subtypes — factual: terminology, specificDetailsAndElements; " +
    "conceptual: classificationsAndCategories, principlesAndGeneralizations, theoriesModelsAndStructures; " +
    "procedural: subjectSpecificSkillsAndAlgorithms, subjectSpecificTechniquesAndMethods, criteriaForUsingProcedures; " +
    "metacognitive: strategicKnowledge, cognitiveTasks, selfKnowledge.",
  inputSchema: classifyInputSchema,
  execute: false,
});

export async function classifyKnowledgeAgent(
  learningObjective: string,
): Promise<KnowledgeClassificationResult> {
  const openrouter = new OpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY,
  });

  const result = openrouter.callModel({
    model: "openrouter/hunter-alpha",
    instructions:
      "You are an expert in Bloom's Revised Taxonomy (Anderson & Krathwohl, 2001) and instructional design. " +
      "Your task is to classify a learning objective into the correct knowledge dimension and subtype, " +
      "then generate a human-friendly explanation and contextualized examples for teachers and instructional designers. " +
      "All explanations and examples must be directly tied to the specific subject matter and action of the given learning objective. " +
      "Never produce generic descriptions — always ground your response in the learning objective itself.",
    input: `Classify this learning objective: ${learningObjective}`,
    tools: [classifyKnowledgeDimensionTool],
  });

  const toolCalls = await result.getToolCalls();
  const first = toolCalls[0];

  if (!first) {
    throw new Error(
      "Agent did not return a classification for the learning objective",
    );
  }

  const args = first.arguments as z.infer<typeof classifyInputSchema>;

  return {
    dimension: {
      name: args.dimensionName,
      explanation: args.dimensionExplanation,
    },
    subtype: {
      name: args.subtypeName,
      explanation: args.subtypeExplanation,
    },
    examples: args.examples,
  };
}
