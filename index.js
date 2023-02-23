import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  prompt: "where is korea?",
  temperature: 0,
  model: "text-davinci-003",
  max_tokens: 500,
});

console.log(response.data.choices);
