
import { GoogleGenAI } from "@google/genai";
import { SERVICES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the AI Beauty Consultant for 'The BEAUTY CORNER' luxury salon. 
Your goal is to help clients choose the best service based on their needs.
Our services are: ${SERVICES.map(s => `${s.name} (R${s.price})`).join(', ')}.
All prices are in South African Rand (ZAR), denoted by 'R'.
Be professional, warm, and South African friendly. Always suggest specific services from our list.
If a user asks about pricing, availability, or general beauty tips, answer politely and redirect them to our booking system or specific services.
`;

export async function getBeautyAdvice(prompt: string, history: { role: 'user' | 'model', text: string }[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having a little trouble connecting. Please feel free to browse our service menu directly!";
  }
}
