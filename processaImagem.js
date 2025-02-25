import { getModel } from './model.js';
import { readFileSync } from "fs";
import { GoogleAIFileManager } from "@google/generative-ai/server";


const model = await getModel("gemini-1.5-flash");

function fileToGenerativePart(path, mimeType) {
    return {
        inlineData: {
            data: Buffer.from(readFileSync(path)).toString("base64"),
            mimeType
        },
    };
}

export async function processaImagem(imagem) {
    const prompt = "Me fale tudo que puder sobre o destino mostrado nessa imagem";

    const imageParts = [
        fileToGenerativePart(imagem, "image/jpeg"),
    ];

    const result = await model.generateContent([prompt, ...imageParts]);

    console.log(result.response.text());
}