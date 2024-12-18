import { Ollama } from 'ollama';
import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import dotenv from 'dotenv';

dotenv.config();

const ollama = new Ollama({ host: process.env.OLLAMA_HOST })

const Country = z.object({
    name: z.string(),
    city: z.string(), 
    attractions: z.array(z.string()),
    rides: z.array(z.string()),
    fun_facts: z.array(z.string()),
});

const response = await ollama.chat({
    model: process.env.OLLAMA_MODEL,
    messages: [{ role: 'user', content: 'Tell me why Disney World is the best place on earth.' }],
    format: zodToJsonSchema(Country),
    options: {
        temperature: 0.1
    }
});

const country = Country.parse(JSON.parse(response.message.content));
console.log(country);