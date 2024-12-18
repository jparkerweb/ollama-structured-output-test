# 🥼 Ollama Structured Output Test

A Node.js application that demonstrates how to get structured JSON responses from Ollama using Zod schemas.

## Prerequisites

- Node.js 18+
- [Ollama](https://ollama.ai/) running locally or remotely
- Ollama model installed (e.g. `llama3.2:1b`)
  - `ollama pull llama3.2:1b`

## Setup

1. Clone the repository
2. Install dependencies: 

```bash
npm ci
```

3. Update the `.env` file in the root directory with your Ollama host and model:

```env
OLLAMA_HOST=http://localhost:11434  # Or your Ollama host
OLLAMA_MODEL=llama3.2:1b            # Or your preferred model
```

## Usage

Run the application:
```bash
npm start
```

The example queries Ollama about Disney World and returns a structured response containing:
- Name
- City
- Attractions
- Rides
- Fun facts

### Example Output

```json
{
  "name": "Disney World",
  "city": "Orlando, FL",
  "attractions": ["Magic Kingdom", "EPCOT", "Hollywood Studios", "Animal Kingdom"],
  "rides": ["Space Mountain", "Test Track", "Avatar Flight of Passage", "Kilimanjaro Safaris"],
  "fun_facts": ["Disney World is the most visited theme park in the world.", "The Magic Kingdom is the most popular park at Disney World."]
}
```

## Dependencies

- [ollama](https://github.com/ollama/ollama-js) - Ollama JavaScript client
- [zod](https://github.com/colinhacks/zod) - TypeScript-first schema validation
- [zod-to-json-schema](https://github.com/StefanTerdell/zod-to-json-schema) - Converts Zod schemas to JSON Schema
- [dotenv](https://github.com/motdotla/dotenv) - Environment variable management

## License

MIT


