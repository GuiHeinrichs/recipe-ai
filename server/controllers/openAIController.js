import ollama from "ollama";

export default async function askQuestion(req, res) {
  const { question } = req.body;
  const response = await ollama.chat({
    model: "mistral",
    messages: [{ role: "user", content: question }],
  });

  res.status(200).json({ answer: response.message.content });
}
