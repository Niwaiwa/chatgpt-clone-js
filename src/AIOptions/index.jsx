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
        description: 'Corrects sentences into standard English.'
    },
    {
        name: 'Summarize for a 2nd grader',
        id: 'summary',
        description: 'Translates difficult text into simpler concepts.'
    },
    {
        name: 'Natural language to OpenAI API',
        id: 'naturalLanguage',
        description: 'Create code to call to the OpenAI API using a natural language instruction.'
    },
    {
        name: 'Text to command',
        id: 'textToCommand',
        description: 'Translate text into programmatic commands.'
    },
    {
        name: 'English to other languages',
        id: 'englishToOtherLanguages',
        description: 'Translates English text into French, Spanish and Japanese.'
    },
    {
        name: 'Natural language to Stripe API',
        id: 'naturalLanguage',
        description: 'Create code to call the Stripe API using natural language.'
    },
    {
        name: 'SQL translate',
        id: 'sqlTranslate',
        description: 'Translate natural language to SQL queries.'
    },
    {
        name: 'Parse unstructured data',
        id: 'parseUnstructuredData',
        description: 'Create tables from long form text.'
    },
    {
        name: 'Classification',
        id: 'classification',
        description: 'Classify items into categories via example.'
    },
    {
        name: 'Python to natural language',
        id: 'pythonToNaturalLanguage',
        description: 'Explain a piece of Python code in human understandable language.'
    },
]