import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function askQuestion(req, res) {
    try {
        const { question } = req.body;

        if (!question) {
            return res.status(400).json({ error: 'Question is required' });
        }

        const response = await openai.chat.completions.create({
            model: 'gpt-4o-2024-08-06',
            messages: [{ role: 'user', content: question }],
            max_tokens: 2000, // Evita ultrapassar limites
            temperature: 0.7,
        });

        res.status(200).json({ answer: response.choices[0].message.content.trim() });
    } catch (error) {
        console.error('Error with OpenAI API:', error);
        res.status(500).json({ error: 'Failed to fetch response from OpenAI' });
    }
};
