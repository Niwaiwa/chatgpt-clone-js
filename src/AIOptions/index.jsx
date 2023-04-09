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
    {
        name: 'Movie to Emoji',
        id: 'movieToEmoji',
        description: 'Convert movie titles into emoji.',
        option: {
            model: "text-davinci-003",
            temperature: 0.8,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
        }
    },
    {
        name: 'Calculate Time Complexity',
        id: 'calculateTimeComplexity',
        description: 'Find the time complexity of a function.',
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
        }
    },
    {
        name: 'Translate programming languages',
        id: 'translateProgrammingLanguages',
        description: 'Translate from one programming language to another.',
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["###"],
        }
    },
    {
        name: 'Advanced tweet classifier',
        id: 'advancedTweetClassifier',
        description: 'Advanced sentiment detection for a piece of text.',
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Explain code',
        id: 'explainCode',
        description: 'Explain a complicated piece of code.',
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\"\"\""],
        }
    },
    {
        name: 'Keywords',
        id: 'keywords',
        description: 'Extract keywords from a block of text.',
        option: {
            model: "text-davinci-003",
            temperature: 0.5,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.8,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Factual answering',
        id: 'factualAnswering',
        description: 'Direct the model to provide factual answers and address knowledge gaps.',
        option: {
            model: "text-davinci-003",
            temperature: 0.5,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.8,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Ad from product description',
        id: 'adFromProductDescription',
        description: 'Turn a product description into ad copy.',
        option: {
            model: "text-davinci-003",
            temperature: 0.5,
            max_tokens: 100,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Product name generator',
        id: 'productNameGenerator',
        description: 'Create product names from examples words.',
        option: {
            model: "text-davinci-003",
            temperature: 0.8,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'TL;DR summarization',
        id: 'tldrSummarization',
        description: "Summarize text by adding a 'tl;dr:' to the end of a text passage.",
        option: {
            model: "text-davinci-003",
            temperature: 0.7,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 1,
        }
    },
    {
        name: 'Python bug fixer',
        id: 'pythonBugFixer',
        description: "Find and fix bugs in source code.",
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 182,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["###"],
        }
    },
    {
        name: 'Spreadsheet creator',
        id: 'spreadsheetCreator',
        description: "Create spreadsheets of various kinds of data.",
        option: {
            model: "text-davinci-003",
            temperature: 0.5,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'JavaScript helper chatbot',
        id: 'javascriptHelperChatbot',
        description: "Message-style bot that answers JavaScript questions.",
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
            stop: ["You:"],
        }
    },
    {
        name: 'ML/AI language model tutor.',
        id: 'mlaiLanguageModelTutor',
        description: "Bot that answers questions about language models",
        option: {
            model: "text-davinci-003",
            temperature: 0.3,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
            stop: ["You:"],
        }
    },
    {
        name: 'Science fiction book list maker',
        id: 'scienceFictionBookListMaker',
        description: "Create a list of items for a given topic.",
        option: {
            model: "text-davinci-003",
            temperature: 0.5,
            max_tokens: 200,
            top_p: 1.0,
            frequency_penalty: 0.52,
            presence_penalty: 0.5,
            stop: ["11."],
        }
    },
    {
        name: 'Tweet classifier',
        id: 'tweetClassifier',
        description: "Basic sentiment detection for a piece of text.",
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Airport code extractor',
        id: 'airportCodeExtractor',
        description: "Extract airport codes from text.",
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
        }
    },
    {
        name: 'SQL request',
        id: 'sqlRequest',
        description: "Create simple SQL queries.",
        option: {
            model: "text-davinci-003",
            temperature: 0.3,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Extract contact information',
        id: 'extractContactInformation',
        description: "Extract contact information from a block of text.",
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'JavaScript to Python',
        id: 'javascriptToPython',
        description: "Convert simple JavaScript expressions into Python.",
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Mood to color',
        id: 'moodToColor',
        description: "Turn a text description into a color.",
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: [";"],
        }
    },
    {
        name: 'Write a Python docstring',
        id: 'writeAPythonDocstring',
        description: "Write a docstring for a Python function.",
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["#", "\"\"\""],
        }
    },
    {
        name: 'Analogy maker',
        id: 'analogyMaker',
        description: "Create analogies.",
        option: {
            model: "text-davinci-003",
            temperature: 0.5,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'JavaScript one line function',
        id: 'javascriptOneLineFunction',
        description: "Turn a JavaScript function into a one liner.",
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: [";"],
        }
    },
    {
        name: 'Micro horror story creator',
        id: 'microHorrorStoryCreator',
        description: "Creates two to three sentence short horror stories from a topic input.",
        option: {
            model: "text-davinci-003",
            temperature: 0.8,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Third-person converter',
        id: 'thirdPersonConverter',
        description: "Converts first-person POV to the third-person.",
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Notes to summary',
        id: 'notesToSummary',
        description: "Turn meeting notes into a summary.",
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'VR fitness idea generator',
        id: 'vrFitnessIdeaGenerator',
        description: "Create ideas for fitness and virtual reality games.",
        option: {
            model: "text-davinci-003",
            temperature: 0.6,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 1,
            presence_penalty: 1,
        }
    },
    {
        name: 'Essay outline',
        id: 'essayOutline',
        description: "Generate an outline for a research topic.",
        option: {
            model: "text-davinci-003",
            temperature: 0.3,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Recipe creator (eat at your own risk)',
        id: 'recipeCreator',
        description: "Create a recipe from a list of ingredients.",
        option: {
            model: "text-davinci-003",
            temperature: 0.3,
            max_tokens: 120,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Chat',
        id: 'chat',
        description: "Open ended conversation with an AI assistant.",
        option: {
            model: "text-davinci-003",
            temperature: 0.9,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.6,
            stop: [" Human:", " AI:"],
        }
    },
    {
        name: 'Marv the sarcastic chat bot',
        id: 'marvTheSarcasticChatBot',
        description: "Marv is a factual chatbot that is also sarcastic.",
        option: {
            model: "text-davinci-003",
            temperature: 0.5,
            max_tokens: 60,
            top_p: 0.3,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Turn by turn directions',
        id: 'turnByTurnDirections',
        description: "Convert natural language to turn-by-turn directions.",
        option: {
            model: "text-davinci-003",
            temperature: 0.3,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Restaurant review creator',
        id: 'restaurantReviewCreator',
        description: "Turn a few words into a restaurant review.",
        option: {
            model: "text-davinci-003",
            temperature: 0.5,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Create study notes',
        id: 'createStudyNotes',
        description: "Provide a topic and get study notes.",
        option: {
            model: "text-davinci-003",
            temperature: 0.3,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Interview questions',
        id: 'interviewQuestions',
        description: "Create interview questions.",
        option: {
            model: "text-davinci-003",
            temperature: 0.5,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
]