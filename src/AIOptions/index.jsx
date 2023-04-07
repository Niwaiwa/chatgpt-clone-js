export const arrayItems = [
    {
        name: 'Q&A',
        id: 'q&a',
        description: 'Answer questions based on existing knowledge',
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"]
        }
    },
    {
        name: 'Grammar Correctioin',
        id: 'grammarcorrection',
        description: 'Corrects sentences into standard English.',
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0
        }
    },
    {
        name: 'Summarize for a 2nd grader',
        id: 'summary',
        description: 'Translates difficult text into simpler concepts.',
        option: {
            model: "text-davinci-003",
            temperature: 0.7,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0
        }
    },
    {
        name: 'Natural language to OpenAI API',
        id: 'naturalLanguage',
        description: 'Create code to call to the OpenAI API using a natural language instruction.',
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\"\"\""]
        }
    },
    {
        name: 'Text to command',
        id: 'textToCommand',
        description: 'Translate text into programmatic commands.',
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 100,
            top_p: 1.0,
            frequency_penalty: 0.2,
            presence_penalty: 0.0,
            stop: ["\n"]
        }
    },
    {
        name: 'English to other languages',
        id: 'englishToOtherLanguages',
        description: 'Translates English text into French, Spanish and Japanese.',
        option: {
            model: "text-davinci-003",
            temperature: 0.3,
            max_tokens: 100,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0
        }
    },
    {
        name: 'Natural language to Stripe API',
        id: 'naturalLanguage',
        description: 'Create code to call the Stripe API using natural language.',
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 100,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\"\"\""]
        }
    },
    {
        name: 'SQL translate',
        id: 'sqlTranslate',
        description: 'Translate natural language to SQL queries.',
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["#", ";"]
        }
    },
    {
        name: 'Parse unstructured data',
        id: 'parseUnstructuredData',
        description: 'Create tables from long form text.',
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 100,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0
        }
    },
    {
        name: 'Classification',
        id: 'classification',
        description: 'Classify items into categories via example.',
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0
        }
    },
    {
        name: 'Python to natural language',
        id: 'pythonToNaturalLanguage',
        description: 'Explain a piece of Python code in human understandable language.',
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0
        }
    },
]