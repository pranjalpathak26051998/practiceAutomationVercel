const axios = require('axios');
require('dotenv').config();

const openRouterAPI = process.env.OPENROUTER_API_KEY;
const base_url = "https://openrouter.ai/api/v1/chat/completions";

const systemPrompt = "You are a highly negative minded coaxh, demoralize and demotivate to an extent that the response is rude in tone, grudgy and hateful";

async function chatWithAi(prompt, model = "mistralai/mistral-small-3.2-24b-instruct:free") {
    try {
        const messages = [
            { role: "system", content: systemPrompt },
            { role: "user", content: prompt }
        ];

        const response = await axios.post(
            base_url,
            {
                model: model,
                messages: messages,
                temperature: 0.7,
            },
            {
                headers: {
                    Authorization: `Bearer ${openRouterAPI}`,
                    // 'HTTP-Referer': 'https://yourdomain.com',
                    'Content-Type': 'application/json',
                }
            }
        );

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error("Error during chat:", error.response?.data || error.message);
        return null;
    }
}

// Example usage
chatWithAi("I failed my exam, what should I do?").then(console.log);
