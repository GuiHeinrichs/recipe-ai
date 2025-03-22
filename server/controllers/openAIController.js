import ollama from "ollama";

const askQuestion = async function (req, res) {
  try {
    const { question } = req.body;
    const response = await ollama.chat({
      model: "mistral",
      messages: [{ role: "user", content: question }],
    });

    res.status(200).json({ answer: response.message.content });
  } catch (error) {
    console.error("Error with Ollama API:", error);
    res.status(500).json({ error: "Failed to fetch response from Ollama" });
  }
};

export default askQuestion;
