import { GoogleGenerativeAI } from '@google/generative-ai';

export async function getModel(modelName) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  const model = genAI.getGenerativeModel({
    model: modelName,
  });

  return model;
}