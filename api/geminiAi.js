import { GoogleGenerativeAI } from "@google/generative-ai";
import { apiKey } from "../constants";


const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



export const handleRes = async (prompt)=>{
    const result = await model.generateContent(prompt);
console.log(result.response.text());

const geminiRes =result.response.text().replace(/\*/g,"")

return geminiRes

}
