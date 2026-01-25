// Comprehensive Question Bank - Multiple questions per topic with rotation system
// Each topic has 3-5 exam-quality questions that rotate on each test

// Question usage tracking - stored in localStorage
function getQuestionUsage() {
    const stored = localStorage.getItem('questionUsage');
    return stored ? JSON.parse(stored) : {};
}

function saveQuestionUsage(usage) {
    localStorage.setItem('questionUsage', JSON.stringify(usage));
}

function getNextQuestionIndex(topicKey, totalQuestions) {
    const usage = getQuestionUsage();
    const key = topicKey;
    
    if (!usage[key]) {
        usage[key] = { lastUsed: -1, count: 0 };
    }
    
    // Rotate through questions
    usage[key].lastUsed = (usage[key].lastUsed + 1) % totalQuestions;
    usage[key].count++;
    
    saveQuestionUsage(usage);
    return usage[key].lastUsed;
}

// Question bank organized by course and topic
const questionBank = {
    "LIN 101": {
        "Definition of Language": [
            {
                question: "Language is best defined as:",
                options: [
                    "A collection of words in a dictionary",
                    "A system of arbitrary vocal symbols used for communication",
                    "Only written forms of communication",
                    "Simple sounds made by humans"
                ],
                correct: 1,
                explanation: "Language is a system of arbitrary vocal symbols used by human beings for communication. It consists of sounds, words, sentences, and meaning, forming a complex rule-governed system."
            },
            {
                question: "Which statement accurately describes human language?",
                options: [
                    "Language is only used for speaking",
                    "Language is a rule-governed system with sounds, words, and sentences",
                    "Language cannot express abstract ideas",
                    "Language is the same for all humans"
                ],
                correct: 1,
                explanation: "Language is a complex, rule-governed system that includes sounds (phonetics/phonology), words (morphology), sentences (syntax), and meaning (semantics)."
            },
            {
                question: "What makes language unique to humans?",
                options: [
                    "The ability to make sounds",
                    "The complex system of arbitrary symbols for communication",
                    "The ability to write",
                    "The ability to learn words"
                ],
                correct: 1,
                explanation: "Language is unique to humans because it is a complex system of arbitrary vocal symbols that allows for infinite creativity and expression of abstract thoughts."
            },
            {
                question: "Language enables humans to:",
                options: [
                    "Only communicate basic needs",
                    "Share knowledge, express creativity, and preserve culture",
                    "Only speak to each other",
                    "Only write documents"
                ],
                correct: 1,
                explanation: "Language enables humans to share knowledge, express creativity, build relationships, and preserve culture across generations."
            },
            {
                question: "Language consists of:",
                options: [
                    "Only words",
                    "Sounds, words, sentences, and meaning",
                    "Only sounds",
                    "Only sentences"
                ],
                correct: 1,
                explanation: "Language consists of sounds (phonetics/phonology), words (morphology), sentences (syntax), and meaning (semantics)."
            },
            {
                question: "Language is acquired:",
                options: [
                    "Genetically",
                    "Naturally through exposure during childhood",
                    "Only through teaching",
                    "Only through writing"
                ],
                correct: 1,
                explanation: "Language is acquired naturally through exposure during childhood - children learn language from their community without formal instruction."
            }
        ],
        "Definition of Linguistics": [
            {
                question: "Linguistics is the:",
                options: [
                    "Study of multiple languages only",
                    "Scientific study of language structure, function, and use",
                    "Art of learning languages quickly",
                    "Practice of teaching languages"
                ],
                correct: 1,
                explanation: "Linguistics is the scientific study of language, examining its structure, function, acquisition, and use at various levels including sounds, words, sentences, and meaning."
            },
            {
                question: "What does linguistics analyze?",
                options: [
                    "Only grammar rules",
                    "Language at various levels: sounds, word formation, sentence structure, and meaning",
                    "Only vocabulary",
                    "Only pronunciation"
                ],
                correct: 1,
                explanation: "Linguistics analyzes language at various levels: sounds (phonetics/phonology), word formation (morphology), sentence structure (syntax), meaning (semantics), and language use in context (pragmatics)."
            },
            {
                question: "Linguistics studies both:",
                options: [
                    "Only spoken language",
                    "Universal properties of human language and specific characteristics of individual languages",
                    "Only written language",
                    "Only modern languages"
                ],
                correct: 1,
                explanation: "Linguists study both the universal properties of human language (what all languages share) and the specific characteristics of individual languages."
            },
            {
                question: "Applied linguistics involves:",
                options: [
                    "Only theoretical research",
                    "Using linguistic knowledge in education, technology, and therapy",
                    "Only language teaching",
                    "Only language learning"
                ],
                correct: 1,
                explanation: "Applied linguistics involves practical applications of linguistic knowledge in education, technology, therapy, and other real-world contexts."
            }
        ],
        "Branches of Linguistics": [
            {
                question: "Which branch of linguistics studies speech sounds?",
                options: ["Syntax", "Phonetics", "Semantics", "Pragmatics"],
                correct: 1,
                explanation: "Phonetics is the branch that studies speech sounds - how they are produced, transmitted, and perceived."
            },
            {
                question: "Morphology is the study of:",
                options: [
                    "Sentence structure",
                    "Word formation",
                    "Meaning",
                    "Language use in context"
                ],
                correct: 1,
                explanation: "Morphology is the branch of linguistics that studies word formation and the structure of words."
            },
            {
                question: "Which branch studies how language functions in society?",
                options: ["Syntax", "Phonology", "Sociolinguistics", "Morphology"],
                correct: 2,
                explanation: "Sociolinguistics is the branch that studies language and society, examining how language varies across social groups and contexts."
            },
            {
                question: "Pragmatics studies:",
                options: [
                    "Word meanings",
                    "Language use in context and how meaning is conveyed beyond words",
                    "Sentence structure",
                    "Sound systems"
                ],
                correct: 1,
                explanation: "Pragmatics is the branch of linguistics that studies language use in context and how meaning is conveyed beyond the literal words."
            },
            {
                question: "Historical linguistics examines:",
                options: [
                    "Current language use",
                    "How languages change and evolve over time",
                    "Only grammar rules",
                    "Only vocabulary"
                ],
                correct: 1,
                explanation: "Historical linguistics (diachronic linguistics) studies how languages change, evolve, and develop over time."
            }
        ],
        "Micro and Macro Linguistics": [
            {
                question: "Micro-linguistics focuses on:",
                options: [
                    "Language in society",
                    "The internal structure of language",
                    "Language acquisition",
                    "Language change over time"
                ],
                correct: 1,
                explanation: "Micro-linguistics focuses on the internal structure of language - phonetics, phonology, morphology, syntax, and semantics."
            },
            {
                question: "Macro-linguistics examines:",
                options: [
                    "Sentence structure only",
                    "Language in relation to external factors like society and psychology",
                    "Word formation only",
                    "Sound systems only"
                ],
                correct: 1,
                explanation: "Macro-linguistics examines language in relation to external factors - how language interacts with society, psychology, culture, and other disciplines."
            },
            {
                question: "The main difference between micro and macro linguistics is:",
                options: [
                    "Micro is easier to study",
                    "Micro focuses on internal structure, macro on external factors",
                    "Macro is more important",
                    "There is no real difference"
                ],
                correct: 1,
                explanation: "Micro-linguistics asks 'How does language work?' (internal structure), while macro-linguistics asks 'How does language function in the world?' (external factors)."
            },
            {
                question: "Which is an example of macro-linguistics?",
                options: ["Phonology", "Syntax", "Psycholinguistics", "Morphology"],
                correct: 2,
                explanation: "Psycholinguistics is part of macro-linguistics, studying the relationship between language and the mind."
            },
            {
                question: "Which is an example of micro-linguistics?",
                options: ["Sociolinguistics", "Syntax", "Psycholinguistics", "Anthropological linguistics"],
                correct: 1,
                explanation: "Syntax is part of micro-linguistics, studying the internal structure of language (sentence structure)."
            },
            {
                question: "Micro-linguistics includes:",
                options: [
                    "Sociolinguistics and psycholinguistics",
                    "Phonetics, phonology, morphology, syntax, and semantics",
                    "Only applied linguistics",
                    "Only historical linguistics"
                ],
                correct: 1,
                explanation: "Micro-linguistics includes phonetics, phonology, morphology, syntax, and semantics - the formal systems within language."
            },
            {
                question: "Macro-linguistics includes:",
                options: [
                    "Only syntax",
                    "Sociolinguistics, psycholinguistics, neurolinguistics, and applied linguistics",
                    "Only phonology",
                    "Only morphology"
                ],
                correct: 1,
                explanation: "Macro-linguistics includes sociolinguistics, psycholinguistics, neurolinguistics, anthropological linguistics, and applied linguistics."
            }
        ],
        "Characteristics of Language": [
            {
                question: "Arbitrariness in language means:",
                options: [
                    "Words resemble what they represent",
                    "The relationship between words and meanings is conventional, not natural",
                    "Words are always logical",
                    "All languages use the same words"
                ],
                correct: 1,
                explanation: "Arbitrariness means the relationship between words and their meanings is conventional (agreed upon), not natural - there's no inherent connection between the word and its meaning."
            },
            {
                question: "Productivity in language refers to:",
                options: [
                    "Language efficiency",
                    "The ability to create infinite new sentences",
                    "Language speed",
                    "Language complexity"
                ],
                correct: 1,
                explanation: "Productivity (creativity) is the ability to produce and understand infinite new sentences using finite linguistic resources."
            },
            {
                question: "Displacement allows language to:",
                options: [
                    "Refer only to present objects",
                    "Refer to things not present in time or space",
                    "Only describe actions",
                    "Only express emotions"
                ],
                correct: 1,
                explanation: "Displacement allows language to refer to things not present in time or space - past events, future plans, or distant places."
            },
            {
                question: "Cultural transmission means language is:",
                options: [
                    "Inherited biologically",
                    "Learned from the community",
                    "Automatic at birth",
                    "The same for everyone"
                ],
                correct: 1,
                explanation: "Cultural transmission means language is learned from the community, not inherited biologically. Children learn language through exposure."
            },
            {
                question: "Duality of patterning refers to:",
                options: [
                    "Language having one level",
                    "Language having two levels - meaningless sounds form meaningful units",
                    "Language having many unrelated levels",
                    "Language having no structure"
                ],
                correct: 1,
                explanation: "Duality of patterning means language has two levels: meaningless sounds combine to form meaningful units (words, sentences)."
            },
            {
                question: "Discreteness in language means:",
                options: [
                    "Language is continuous",
                    "Language uses distinct, separate units",
                    "Language is unclear",
                    "Language has no structure"
                ],
                correct: 1,
                explanation: "Discreteness means language uses distinct, separate units (sounds, words) rather than continuous signals."
            },
            {
                question: "Reflexivity in language allows:",
                options: [
                    "Only talking about objects",
                    "Using language to talk about language itself",
                    "Only making sounds",
                    "Only writing words"
                ],
                correct: 1,
                explanation: "Reflexivity means language can be used to talk about language itself - like defining words or discussing grammar."
            },
            {
                question: "Which is NOT a characteristic of human language?",
                options: [
                    "Arbitrariness",
                    "Productivity",
                    "Immutability",
                    "Displacement"
                ],
                correct: 2,
                explanation: "Immutability is NOT a characteristic - languages change over time. Language is dynamic, not fixed."
            }
        ],
        "Competence and performance": [
            {
                question: "Competence refers to:",
                options: [
                    "Actual language use",
                    "A speaker's underlying knowledge of their language",
                    "Language errors",
                    "Speaking ability only"
                ],
                correct: 1,
                explanation: "Competence refers to a speaker's underlying knowledge of their language - the mental grammar that allows production and understanding of sentences."
            },
            {
                question: "Performance is:",
                options: [
                    "Language knowledge",
                    "The actual use of language in real situations",
                    "Language rules",
                    "Grammar knowledge only"
                ],
                correct: 1,
                explanation: "Performance is the actual use of language in real situations - what speakers actually say, including errors, hesitations, and variations."
            },
            {
                question: "The distinction between competence and performance was introduced by:",
                options: [
                    "Ferdinand de Saussure",
                    "Noam Chomsky",
                    "William Labov",
                    "Leonard Bloomfield"
                ],
                correct: 1,
                explanation: "Noam Chomsky introduced the distinction between competence (knowledge) and performance (actual use) to separate what speakers know from how they use that knowledge."
            },
            {
                question: "Performance can be affected by:",
                options: [
                    "Only grammar knowledge",
                    "Memory limitations, distractions, emotions, and other factors",
                    "Only vocabulary",
                    "Only pronunciation"
                ],
                correct: 1,
                explanation: "Performance can be affected by memory limitations, distractions, emotions, and other factors, while competence represents stable linguistic knowledge."
            },
            {
                question: "Which statement about competence is true?",
                options: [
                    "It changes with every conversation",
                    "It represents ideal, perfect knowledge of language rules",
                    "It includes speech errors",
                    "It is the same as performance"
                ],
                correct: 1,
                explanation: "Competence is abstract and stable - it represents the ideal, perfect knowledge of language rules that speakers have."
            },
            {
                question: "A speaker's competence allows them to:",
                options: [
                    "Only speak correctly",
                    "Produce and understand sentences according to language rules",
                    "Only understand language",
                    "Only write correctly"
                ],
                correct: 1,
                explanation: "Competence is the mental grammar that allows speakers to produce and understand sentences according to the rules of their language."
            }
        ],
        "Relationship between Language and Linguistics": [
            {
                question: "The relationship between language and linguistics is similar to:",
                options: [
                    "Teacher and student",
                    "Biology and living organisms - biology studies life, linguistics studies language",
                    "Math and numbers",
                    "History and events"
                ],
                correct: 1,
                explanation: "Language is the object of study, while linguistics is the discipline that studies it - similar to how biology studies living organisms."
            },
            {
                question: "Linguists observe language to:",
                options: [
                    "Only correct mistakes",
                    "Identify patterns, formulate theories, and develop methods to study language",
                    "Only teach languages",
                    "Only translate languages"
                ],
                correct: 1,
                explanation: "Linguists observe language use, identify patterns, formulate theories, and develop methods to study language systematically."
            },
            {
                question: "Linguistics helps us understand:",
                options: [
                    "Only grammar",
                    "How language works, how it's acquired, how it changes, and how it functions in society",
                    "Only vocabulary",
                    "Only pronunciation"
                ],
                correct: 1,
                explanation: "Linguistics helps us understand how language works, how it's acquired, how it changes, and how it functions in human society."
            }
        ]
    },
    
    "LIN 103": {
        "Definition of Phonetics": [
            {
                question: "Phonetics is the:",
                options: [
                    "Study of word formation",
                    "Scientific study of speech sounds",
                    "Study of sentence structure",
                    "Study of meaning"
                ],
                correct: 1,
                explanation: "Phonetics is the scientific study of speech sounds - how they are produced, transmitted, and perceived."
            },
            {
                question: "Phonetics focuses on:",
                options: [
                    "Only written symbols",
                    "The physical properties of sounds humans can produce",
                    "Only meaning",
                    "Only grammar"
                ],
                correct: 1,
                explanation: "Phonetics focuses on the physical properties of sounds, examining the actual sounds humans can produce regardless of language."
            },
            {
                question: "The International Phonetic Alphabet (IPA) is used to:",
                options: [
                    "Write languages",
                    "Provide symbols for every possible human speech sound",
                    "Translate languages",
                    "Teach languages"
                ],
                correct: 1,
                explanation: "The IPA provides symbols for every possible human speech sound, allowing accurate transcription of any language."
            },
            {
                question: "Unlike phonology, phonetics studies:",
                options: [
                    "How sounds function in specific languages",
                    "The universal physical properties of all speech sounds",
                    "Only meaning",
                    "Only grammar"
                ],
                correct: 1,
                explanation: "Unlike phonology (which studies how sounds function in specific languages), phonetics studies the universal physical properties of all speech sounds."
            },
            {
                question: "Phonetics describes sounds:",
                options: [
                    "Subjectively based on meaning",
                    "Objectively using the International Phonetic Alphabet",
                    "Only in writing",
                    "Only for English"
                ],
                correct: 1,
                explanation: "Phonetics describes sounds objectively using the International Phonetic Alphabet (IPA), which provides standardized symbols for all speech sounds."
            },
            {
                question: "The main goal of phonetics is to:",
                options: [
                    "Prescribe correct pronunciation",
                    "Describe and analyze all possible human speech sounds",
                    "Only study grammar",
                    "Only study meaning"
                ],
                correct: 1,
                explanation: "The main goal of phonetics is to describe and analyze all possible human speech sounds, regardless of which language uses them."
            }
        ],
        "Branches of Phonetics": [
            {
                question: "Articulatory phonetics studies:",
                options: [
                    "Sound waves",
                    "How speech sounds are produced by vocal organs",
                    "Sound perception",
                    "Sound meaning"
                ],
                correct: 1,
                explanation: "Articulatory phonetics studies how speech sounds are produced by the vocal organs (tongue, lips, vocal cords, etc.)."
            },
            {
                question: "Acoustic phonetics analyzes:",
                options: [
                    "Sound production",
                    "The physical properties of sound waves",
                    "Sound perception",
                    "Sound meaning"
                ],
                correct: 1,
                explanation: "Acoustic phonetics studies the physical properties of sound waves produced during speech, analyzing frequency, amplitude, and duration."
            },
            {
                question: "Auditory phonetics examines:",
                options: [
                    "Sound production",
                    "How speech sounds are perceived and processed by the ear and brain",
                    "Sound waves",
                    "Sound meaning"
                ],
                correct: 1,
                explanation: "Auditory phonetics studies how speech sounds are perceived and processed by the ear and brain."
            },
            {
                question: "The three branches of phonetics together provide:",
                options: [
                    "Only production information",
                    "A complete picture of how sounds are produced, transmitted, and understood",
                    "Only perception information",
                    "Only acoustic information"
                ],
                correct: 1,
                explanation: "The three branches (articulatory, acoustic, auditory) together give a complete picture of how sounds are produced, transmitted, and understood."
            },
            {
                question: "Articulatory phonetics focuses on:",
                options: [
                    "Sound waves only",
                    "Movements and positions of articulators (tongue, lips, vocal cords)",
                    "Only perception",
                    "Only meaning"
                ],
                correct: 1,
                explanation: "Articulatory phonetics focuses on the movements and positions of articulators like the tongue, lips, and vocal cords during sound production."
            },
            {
                question: "Acoustic phonetics measures:",
                options: [
                    "Only meaning",
                    "Frequency, amplitude, and duration of sound waves",
                    "Only production",
                    "Only perception"
                ],
                correct: 1,
                explanation: "Acoustic phonetics measures the physical properties of sound waves including frequency (pitch), amplitude (loudness), and duration (length)."
            }
        ],
        "Speech Organs": [
            {
                question: "The most flexible articulator is the:",
                options: ["Lips", "Tongue", "Teeth", "Palate"],
                correct: 1,
                explanation: "The tongue is the most flexible articulator and can move to different positions to produce various sounds."
            },
            {
                question: "The larynx contains:",
                options: [
                    "The tongue",
                    "The vocal cords that produce voicing",
                    "The teeth",
                    "The lips"
                ],
                correct: 1,
                explanation: "The larynx (voice box) contains the vocal cords, which produce voicing when they vibrate."
            },
            {
                question: "Nasal sounds are produced when:",
                options: [
                    "The velum is raised",
                    "The velum is lowered, allowing air through the nose",
                    "The lips are closed",
                    "The tongue is raised"
                ],
                correct: 1,
                explanation: "Nasal sounds are produced when the velum (soft palate) is lowered, allowing air to flow through the nasal cavity."
            },
            {
                question: "Oral sounds are produced when:",
                options: [
                    "The velum is lowered",
                    "The velum is raised, blocking the nasal cavity",
                    "The lips are open",
                    "The tongue is lowered"
                ],
                correct: 1,
                explanation: "Oral sounds are produced when the velum is raised, blocking the nasal cavity so air flows only through the mouth."
            },
            {
                question: "The alveolar ridge is located:",
                options: [
                    "In the throat",
                    "Behind the upper front teeth",
                    "In the nose",
                    "On the tongue"
                ],
                correct: 1,
                explanation: "The alveolar ridge is the ridge behind the upper front teeth, where sounds like /t/, /d/, /s/, /n/ are produced."
            },
            {
                question: "The hard palate is:",
                options: [
                    "The soft part at the back of the mouth",
                    "The bony front part of the roof of the mouth",
                    "The tongue",
                    "The lips"
                ],
                correct: 1,
                explanation: "The hard palate is the bony front part of the roof of the mouth, used in producing palatal sounds."
            },
            {
                question: "The velum (soft palate) can:",
                options: [
                    "Only stay in one position",
                    "Be raised or lowered to control nasal airflow",
                    "Only produce sounds",
                    "Only block air"
                ],
                correct: 1,
                explanation: "The velum (soft palate) can be raised (for oral sounds) or lowered (for nasal sounds) to control whether air flows through the nose."
            }
        ],
        "Place and manner of Articulation": [
            {
                question: "Bilabial sounds are produced:",
                options: [
                    "With the tongue and teeth",
                    "With both lips",
                    "At the alveolar ridge",
                    "At the velum"
                ],
                correct: 1,
                explanation: "Bilabial sounds (like /p/, /b/, /m/) are produced with both lips coming together."
            },
            {
                question: "Alveolar sounds are produced:",
                options: [
                    "With the lips",
                    "At the alveolar ridge (behind the upper teeth)",
                    "At the velum",
                    "At the glottis"
                ],
                correct: 1,
                explanation: "Alveolar sounds (like /t/, /d/, /s/, /n/) are produced at the alveolar ridge, the ridge behind the upper front teeth."
            },
            {
                question: "A stop (plosive) is produced by:",
                options: [
                    "Creating a narrow opening",
                    "Complete closure then release of air",
                    "Continuous airflow",
                    "Nasal airflow"
                ],
                correct: 1,
                explanation: "Stops/plosives (like /p/, /t/, /k/) are produced by complete closure of the vocal tract, then release of air."
            },
            {
                question: "A fricative is produced by:",
                options: [
                    "Complete closure",
                    "Narrow opening creating friction",
                    "Nasal airflow",
                    "Vowel-like airflow"
                ],
                correct: 1,
                explanation: "Fricatives (like /f/, /s/, /v/, /z/) are produced by creating a narrow opening that causes friction as air passes through."
            },
            {
                question: "Velar sounds are produced:",
                options: [
                    "At the lips",
                    "At the velum (soft palate)",
                    "At the teeth",
                    "At the glottis"
                ],
                correct: 1,
                explanation: "Velar sounds (like /k/, /g/, /ŋ/) are produced at the velum (soft palate) at the back of the mouth."
            },
            {
                question: "An affricate combines:",
                options: [
                    "Two vowels",
                    "A stop followed by a fricative",
                    "Two fricatives",
                    "A vowel and consonant"
                ],
                correct: 1,
                explanation: "An affricate (like /tʃ/, /dʒ/) combines a stop followed by a fricative in one sound."
            },
            {
                question: "Labiodental sounds are produced:",
                options: [
                    "With both lips",
                    "With the lower lip and upper teeth",
                    "At the alveolar ridge",
                    "At the velum"
                ],
                correct: 1,
                explanation: "Labiodental sounds (like /f/, /v/) are produced with the lower lip touching the upper teeth."
            }
        ],
        "Voicing": [
            {
                question: "Voiced sounds have:",
                options: [
                    "No vocal cord vibration",
                    "Vibrating vocal cords",
                    "Only airflow",
                    "Only friction"
                ],
                correct: 1,
                explanation: "Voiced sounds (like /b/, /d/, /g/, /v/, /z/) have vibrating vocal cords during production."
            },
            {
                question: "Voiceless sounds have:",
                options: [
                    "Vibrating vocal cords",
                    "No vocal cord vibration",
                    "Only nasal airflow",
                    "Only oral airflow"
                ],
                correct: 1,
                explanation: "Voiceless sounds (like /p/, /t/, /k/, /f/, /s/) have no vocal cord vibration during production."
            },
            {
                question: "The main difference between /p/ and /b/ is:",
                options: [
                    "Place of articulation",
                    "Voicing - /b/ is voiced, /p/ is voiceless",
                    "Manner of articulation",
                    "Both are the same"
                ],
                correct: 1,
                explanation: "/p/ and /b/ differ only in voicing - /b/ has vocal cord vibration (voiced), /p/ does not (voiceless)."
            },
            {
                question: "You can feel voicing by:",
                options: [
                    "Looking at the mouth",
                    "Placing fingers on your throat - voiced sounds produce vibration",
                    "Listening only",
                    "Watching the lips"
                ],
                correct: 1,
                explanation: "You can feel voicing by placing your fingers on your throat - voiced sounds produce vibration, voiceless sounds don't."
            },
            {
                question: "All vowels are:",
                options: [
                    "Voiceless",
                    "Voiced - they always have vocal cord vibration",
                    "Sometimes voiced",
                    "Never voiced"
                ],
                correct: 1,
                explanation: "All vowels are voiced - they always have vocal cord vibration during production."
            },
            {
                question: "The difference between /s/ and /z/ is:",
                options: [
                    "Place of articulation",
                    "Voicing - /z/ is voiced, /s/ is voiceless",
                    "Manner of articulation",
                    "Both are the same"
                ],
                correct: 1,
                explanation: "/s/ and /z/ differ only in voicing - /z/ has vocal cord vibration (voiced), /s/ does not (voiceless)."
            }
        ],
        "Air stream mechanism": [
            {
                question: "The most common air stream mechanism in English is:",
                options: [
                    "Pulmonic ingressive",
                    "Pulmonic egressive - air flows out from the lungs",
                    "Glottalic egressive",
                    "Velaric ingressive"
                ],
                correct: 1,
                explanation: "Pulmonic egressive (air flows out from the lungs) is the most common mechanism, used in all English sounds."
            },
            {
                question: "Click sounds use which air stream mechanism?",
                options: [
                    "Pulmonic egressive",
                    "Velaric ingressive - air is rarefied by tongue movement",
                    "Glottalic egressive",
                    "Pulmonic ingressive"
                ],
                correct: 1,
                explanation: "Click sounds (found in some African languages) use velaric ingressive mechanism, where air is rarefied by tongue movement."
            },
            {
                question: "Ejective sounds use:",
                options: [
                    "Pulmonic egressive",
                    "Glottalic egressive - air compressed by raising glottis",
                    "Velaric ingressive",
                    "Pulmonic ingressive"
                ],
                correct: 1,
                explanation: "Ejective sounds use glottalic egressive mechanism, where air is compressed by raising the glottis."
            },
            {
                question: "Pulmonic egressive means:",
                options: [
                    "Air flows in",
                    "Air flows out from the lungs",
                    "Air is compressed",
                    "Air is rarefied"
                ],
                correct: 1,
                explanation: "Pulmonic egressive means air flows out from the lungs - this is used for all English sounds."
            },
            {
                question: "Implosive sounds use:",
                options: [
                    "Pulmonic egressive",
                    "Glottalic ingressive - air is rarefied by lowering glottis",
                    "Velaric ingressive",
                    "Pulmonic ingressive"
                ],
                correct: 1,
                explanation: "Implosive sounds use glottalic ingressive mechanism, where air is rarefied by lowering the glottis."
            }
        ],
        "IPA chart": [
            {
                question: "The IPA (International Phonetic Alphabet) provides:",
                options: [
                    "Only English sounds",
                    "Symbols for every possible human speech sound",
                    "Only consonants",
                    "Only vowels"
                ],
                correct: 1,
                explanation: "The IPA provides symbols for every possible human speech sound, allowing accurate transcription of any language."
            },
            {
                question: "The IPA chart organizes sounds by:",
                options: [
                    "Only alphabetically",
                    "Place and manner of articulation for consonants, tongue position for vowels",
                    "Only by language",
                    "Only by difficulty"
                ],
                correct: 1,
                explanation: "The IPA chart organizes sounds by place and manner of articulation for consonants, and by tongue position and lip rounding for vowels."
            },
            {
                question: "Using IPA allows linguists to:",
                options: [
                    "Only write English",
                    "Transcribe any language accurately and consistently",
                    "Only teach pronunciation",
                    "Only study grammar"
                ],
                correct: 1,
                explanation: "The IPA allows linguists to transcribe any language accurately and consistently, regardless of the language's writing system."
            },
            {
                question: "Vowels in the IPA chart are organized by:",
                options: [
                    "Only height",
                    "Tongue position (height and backness) and lip rounding",
                    "Only backness",
                    "Only lip rounding"
                ],
                correct: 1,
                explanation: "Vowels are organized by tongue height (high/mid/low), tongue backness (front/central/back), and lip rounding (rounded/unrounded)."
            }
        ]
    },
    
    "LIN 105": {
        "What is Grammar?": [
            {
                question: "Grammar is the:",
                options: [
                    "Study of vocabulary only",
                    "System of rules that govern how words combine to form meaningful sentences",
                    "Study of pronunciation only",
                    "Collection of words"
                ],
                correct: 1,
                explanation: "Grammar is the system of rules that govern how words are combined to form meaningful sentences, including word formation, sentence structure, and meaning."
            },
            {
                question: "Descriptive grammar:",
                options: [
                    "Prescribes how language should be used",
                    "Describes how language is actually used by speakers",
                    "Only studies written language",
                    "Only studies formal language"
                ],
                correct: 1,
                explanation: "Descriptive grammar describes how language is actually used by speakers, focusing on understanding how language works rather than prescribing rules."
            },
            {
                question: "Modern linguistics focuses on:",
                options: [
                    "Prescriptive grammar only",
                    "Descriptive grammar - understanding how language actually works",
                    "Only written standards",
                    "Only formal language"
                ],
                correct: 1,
                explanation: "Modern linguistics focuses on descriptive grammar - understanding how language actually works rather than prescribing how it should be used."
            }
        ],
        "Word classes": [
            {
                question: "Word classes (parts of speech) classify words based on:",
                options: [
                    "Only meaning",
                    "Grammatical function, morphological properties, and semantic properties",
                    "Only spelling",
                    "Only pronunciation"
                ],
                correct: 1,
                explanation: "Word classes classify words based on syntactic behavior (where they appear), morphological properties (how they change), and semantic properties (what they mean)."
            },
            {
                question: "The main word classes include:",
                options: [
                    "Only nouns and verbs",
                    "Nouns, verbs, adjectives, adverbs, pronouns, prepositions, conjunctions, interjections",
                    "Only content words",
                    "Only function words"
                ],
                correct: 1,
                explanation: "The main word classes are: nouns, verbs, adjectives, adverbs, pronouns, prepositions, conjunctions, and interjections."
            }
        ],
        "Open class": [
            {
                question: "Open class words:",
                options: [
                    "Rarely accept new members",
                    "Readily accept new members and include nouns, verbs, adjectives, adverbs",
                    "Never change",
                    "Only include function words"
                ],
                correct: 1,
                explanation: "Open class words (content words) readily accept new members and include nouns, verbs, adjectives, and adverbs. New words are constantly added."
            },
            {
                question: "Open class words are also called:",
                options: [
                    "Function words",
                    "Content words - they carry the main meaning",
                    "Closed words",
                    "Fixed words"
                ],
                correct: 1,
                explanation: "Open class words are content words that carry the main meaning in sentences and are typically stressed in speech."
            }
        ],
        "Closed class": [
            {
                question: "Closed class words:",
                options: [
                    "Constantly accept new members",
                    "Rarely accept new members and include pronouns, prepositions, conjunctions",
                    "Only include nouns",
                    "Only include verbs"
                ],
                correct: 1,
                explanation: "Closed class words (function words) rarely accept new members and include pronouns, prepositions, conjunctions, articles, and determiners."
            },
            {
                question: "Closed class words serve:",
                options: [
                    "Main meaning",
                    "Grammatical functions - showing relationships and structure",
                    "Only descriptive functions",
                    "Only naming functions"
                ],
                correct: 1,
                explanation: "Closed class words serve grammatical functions - they show relationships, indicate structure, and connect content words."
            }
        ],
        "Noun": [
            {
                question: "A noun names:",
                options: [
                    "Only objects",
                    "A person, place, thing, idea, or quality",
                    "Only actions",
                    "Only qualities"
                ],
                correct: 1,
                explanation: "A noun is a word that names a person, place, thing, idea, or quality."
            },
            {
                question: "Proper nouns are:",
                options: [
                    "General terms",
                    "Specific names like 'John', 'London'",
                    "Only common things",
                    "Only abstract concepts"
                ],
                correct: 1,
                explanation: "Proper nouns are specific names (like 'John', 'London'), while common nouns are general terms (like 'dog', 'city')."
            },
            {
                question: "Nouns typically function as:",
                options: [
                    "Only verbs",
                    "Subjects or objects in sentences",
                    "Only adjectives",
                    "Only adverbs"
                ],
                correct: 1,
                explanation: "Nouns typically function as subjects or objects in sentences and can be modified by adjectives."
            },
            {
                question: "Concrete nouns refer to:",
                options: [
                    "Only abstract ideas",
                    "Things that can be perceived (seen, touched, heard, etc.)",
                    "Only emotions",
                    "Only actions"
                ],
                correct: 1,
                explanation: "Concrete nouns refer to things that can be perceived through the senses (like 'table', 'music', 'flower')."
            },
            {
                question: "Abstract nouns refer to:",
                options: [
                    "Only physical objects",
                    "Concepts, ideas, or qualities that cannot be perceived",
                    "Only people",
                    "Only places"
                ],
                correct: 1,
                explanation: "Abstract nouns refer to concepts, ideas, or qualities that cannot be perceived through the senses (like 'freedom', 'happiness', 'knowledge')."
            },
            {
                question: "Countable nouns can:",
                options: [
                    "Only be singular",
                    "Be singular or plural (e.g., 'book'/'books')",
                    "Only be plural",
                    "Never change form"
                ],
                correct: 1,
                explanation: "Countable nouns can be singular or plural (e.g., 'book'/'books'), while uncountable nouns cannot be counted (e.g., 'water', 'information')."
            }
        ],
        "Pronoun": [
            {
                question: "A pronoun:",
                options: [
                    "Only names things",
                    "Replaces or refers to a noun or noun phrase",
                    "Only describes actions",
                    "Only modifies nouns"
                ],
                correct: 1,
                explanation: "A pronoun is a word that replaces or refers to a noun or noun phrase, avoiding repetition."
            },
            {
                question: "Personal pronouns include:",
                options: [
                    "Only 'this' and 'that'",
                    "I, you, he, she, it, we, they",
                    "Only 'my' and 'your'",
                    "Only 'who' and 'which'"
                ],
                correct: 1,
                explanation: "Personal pronouns include: I, you, he, she, it, we, they - referring to people or things."
            },
            {
                question: "Possessive pronouns show:",
                options: [
                    "Only actions",
                    "Ownership or possession (my, your, his, her, its, our, their)",
                    "Only relationships",
                    "Only location"
                ],
                correct: 1,
                explanation: "Possessive pronouns show ownership or possession (my, your, his, her, its, our, their)."
            },
            {
                question: "Demonstrative pronouns include:",
                options: [
                    "Only 'I' and 'you'",
                    "This, that, these, those - pointing to specific things",
                    "Only 'my' and 'your'",
                    "Only 'who' and 'which'"
                ],
                correct: 1,
                explanation: "Demonstrative pronouns (this, that, these, those) point to specific things or people."
            },
            {
                question: "Relative pronouns introduce:",
                options: [
                    "Only questions",
                    "Relative clauses that modify nouns (who, which, that)",
                    "Only statements",
                    "Only commands"
                ],
                correct: 1,
                explanation: "Relative pronouns (who, which, that) introduce relative clauses that modify nouns."
            }
        ],
        "Verb": [
            {
                question: "A verb expresses:",
                options: [
                    "Only names",
                    "An action, occurrence, or state of being",
                    "Only qualities",
                    "Only relationships"
                ],
                correct: 1,
                explanation: "A verb is a word that expresses an action, occurrence, or state of being and is the core of predicates."
            },
            {
                question: "Transitive verbs:",
                options: [
                    "Take no objects",
                    "Take objects (e.g., 'eat an apple')",
                    "Only link subjects",
                    "Only express states"
                ],
                correct: 1,
                explanation: "Transitive verbs take objects (e.g., 'eat an apple'), while intransitive verbs don't require objects (e.g., 'sleep')."
            },
            {
                question: "Intransitive verbs:",
                options: [
                    "Always take objects",
                    "Do not require objects (e.g., 'sleep', 'arrive')",
                    "Only express actions",
                    "Only link subjects"
                ],
                correct: 1,
                explanation: "Intransitive verbs do not require objects (e.g., 'sleep', 'arrive', 'fall')."
            },
            {
                question: "Linking verbs connect:",
                options: [
                    "Only objects",
                    "The subject to a complement (e.g., 'is', 'seem', 'become')",
                    "Only actions",
                    "Only modifiers"
                ],
                correct: 1,
                explanation: "Linking verbs (like 'is', 'seem', 'become', 'appear') connect the subject to a complement that describes or identifies it."
            },
            {
                question: "Auxiliary verbs help:",
                options: [
                    "Only express meaning",
                    "Express tense, aspect, mood, or voice (e.g., 'have', 'be', 'do', 'will')",
                    "Only name things",
                    "Only modify nouns"
                ],
                correct: 1,
                explanation: "Auxiliary verbs (like 'have', 'be', 'do', 'will', 'can') help express tense, aspect, mood, or voice."
            }
        ],
        "Adverb": [
            {
                question: "An adverb modifies:",
                options: [
                    "Only nouns",
                    "Verbs, adjectives, other adverbs, or entire sentences",
                    "Only pronouns",
                    "Only prepositions"
                ],
                correct: 1,
                explanation: "An adverb modifies verbs, adjectives, other adverbs, or entire sentences, answering how, when, where, why, or to what extent."
            },
            {
                question: "Manner adverbs answer:",
                options: [
                    "When?",
                    "How? (quickly, carefully, well)",
                    "Where?",
                    "Why?"
                ],
                correct: 1,
                explanation: "Manner adverbs answer 'how?' (e.g., quickly, carefully, well, slowly)."
            },
            {
                question: "Time adverbs answer:",
                options: [
                    "How?",
                    "When? (yesterday, soon, now)",
                    "Where?",
                    "Why?"
                ],
                correct: 1,
                explanation: "Time adverbs answer 'when?' (e.g., yesterday, soon, now, later)."
            },
            {
                question: "Place adverbs answer:",
                options: [
                    "How?",
                    "Where? (here, everywhere, there)",
                    "When?",
                    "Why?"
                ],
                correct: 1,
                explanation: "Place adverbs answer 'where?' (e.g., here, everywhere, there, nearby)."
            },
            {
                question: "Many English adverbs end in:",
                options: [
                    "-ed",
                    "-ly (quickly, carefully, slowly)",
                    "-ing",
                    "-tion"
                ],
                correct: 1,
                explanation: "Many English adverbs end in '-ly' (quickly, carefully, slowly), though not all adverbs do (e.g., 'well', 'fast')."
            }
        ],
        "Adjective": [
            {
                question: "An adjective:",
                options: [
                    "Only names things",
                    "Modifies or describes a noun or pronoun",
                    "Only expresses actions",
                    "Only shows relationships"
                ],
                correct: 1,
                explanation: "An adjective is a word that modifies or describes a noun or pronoun, providing information about qualities, characteristics, or attributes."
            },
            {
                question: "Attributive adjectives appear:",
                options: [
                    "After the noun",
                    "Before the noun they modify",
                    "Only at the end of sentences",
                    "Only in questions"
                ],
                correct: 1,
                explanation: "Attributive adjectives appear before the noun they modify (e.g., 'the tall building')."
            },
            {
                question: "Predicative adjectives appear:",
                options: [
                    "Before the noun",
                    "After linking verbs (e.g., 'The building is tall')",
                    "Only at the beginning",
                    "Only in questions"
                ],
                correct: 1,
                explanation: "Predicative adjectives appear after linking verbs (e.g., 'The building is tall', 'She seems happy')."
            },
            {
                question: "Adjectives can be compared using:",
                options: [
                    "Only one form",
                    "Positive, comparative, and superlative forms (big, bigger, biggest)",
                    "Only two forms",
                    "Only the base form"
                ],
                correct: 1,
                explanation: "Adjectives can be compared: positive (big), comparative (bigger), superlative (biggest)."
            },
            {
                question: "Adjectives describe:",
                options: [
                    "Only actions",
                    "Size, color, shape, age, origin, material, or other properties",
                    "Only relationships",
                    "Only time"
                ],
                correct: 1,
                explanation: "Adjectives describe various properties: size (big), color (red), shape (round), age (old), origin (American), material (wooden), etc."
            }
        ],
        "Preposition": [
            {
                question: "A preposition shows:",
                options: [
                    "Only actions",
                    "Relationships between nouns/pronouns and other words (time, place, direction)",
                    "Only qualities",
                    "Only names"
                ],
                correct: 1,
                explanation: "A preposition shows relationships between nouns/pronouns and other words, typically indicating location, direction, time, or manner."
            },
            {
                question: "Prepositions form:",
                options: [
                    "Only single words",
                    "Prepositional phrases with their objects (e.g., 'in the classroom')",
                    "Only sentences",
                    "Only questions"
                ],
                correct: 1,
                explanation: "Prepositions form prepositional phrases with their objects (e.g., 'in the classroom', 'by tomorrow', 'with friends')."
            },
            {
                question: "Common prepositions include:",
                options: [
                    "Only 'and' and 'or'",
                    "In, on, at, by, for, with, from, to, of, about",
                    "Only 'the' and 'a'",
                    "Only 'I' and 'you'"
                ],
                correct: 1,
                explanation: "Common prepositions include: in, on, at, by, for, with, from, to, of, about, under, over, between, among."
            },
            {
                question: "Prepositions indicate:",
                options: [
                    "Only actions",
                    "Location (in, on, at), direction (to, from), time (by, during), manner (with, by)",
                    "Only qualities",
                    "Only names"
                ],
                correct: 1,
                explanation: "Prepositions indicate location (in, on, at), direction (to, from), time (by, during), or manner (with, by)."
            }
        ],
        "Interjection": [
            {
                question: "An interjection expresses:",
                options: [
                    "Only actions",
                    "Strong emotion, surprise, or reaction",
                    "Only relationships",
                    "Only qualities"
                ],
                correct: 1,
                explanation: "An interjection is a word or phrase that expresses strong emotion, surprise, or reaction (e.g., 'Wow!', 'Oh!', 'Ouch!')."
            },
            {
                question: "Interjections are:",
                options: [
                    "Always connected grammatically",
                    "Grammatically independent - they don't connect to the sentence",
                    "Only used in questions",
                    "Only used in commands"
                ],
                correct: 1,
                explanation: "Interjections are grammatically independent - they don't connect grammatically to the rest of the sentence."
            },
            {
                question: "Examples of interjections include:",
                options: [
                    "Only 'the' and 'a'",
                    "Wow!, Oh!, Ouch!, Hey!, Alas!",
                    "Only 'I' and 'you'",
                    "Only 'and' and 'or'"
                ],
                correct: 1,
                explanation: "Examples of interjections include: Wow!, Oh!, Ouch!, Hey!, Alas!, Yay!, Oops!"
            }
        ],
        "Article and other word classes": [
            {
                question: "The definite article is:",
                options: [
                    "'a' or 'an'",
                    "'the' - refers to a specific, known noun",
                    "'this' or 'that'",
                    "'my' or 'your'"
                ],
                correct: 1,
                explanation: "The definite article 'the' refers to a specific, known noun (e.g., 'the book' - a particular book)."
            },
            {
                question: "Indefinite articles are:",
                options: [
                    "'the'",
                    "'a' and 'an' - refer to any member of a class",
                    "'this' and 'that'",
                    "'my' and 'your'"
                ],
                correct: 1,
                explanation: "Indefinite articles 'a' and 'an' refer to any member of a class (e.g., 'a book' - any book)."
            },
            {
                question: "Conjunctions connect:",
                options: [
                    "Only nouns",
                    "Words, phrases, or clauses (e.g., 'and', 'but', 'or', 'because')",
                    "Only verbs",
                    "Only adjectives"
                ],
                correct: 1,
                explanation: "Conjunctions connect words, phrases, or clauses (e.g., 'and', 'but', 'or', 'because', 'although')."
            },
            {
                question: "Determiners introduce:",
                options: [
                    "Only verbs",
                    "Nouns and indicate quantity, possession, or specificity (e.g., 'this', 'that', 'some', 'many')",
                    "Only adjectives",
                    "Only adverbs"
                ],
                correct: 1,
                explanation: "Determiners introduce nouns and indicate quantity, possession, or specificity (e.g., 'this', 'that', 'some', 'many', 'each')."
            }
        ]
    },
    
    "LIN 107": {
        "What is language?": [
            {
                question: "Language is a:",
                options: [
                    "Simple collection of words",
                    "Complex, rule-governed system of communication unique to humans",
                    "Only written system",
                    "Only spoken sounds"
                ],
                correct: 1,
                explanation: "Language is a complex, rule-governed system of communication unique to humans, using arbitrary vocal symbols combined according to grammatical rules."
            },
            {
                question: "Language has duality of patterning, meaning:",
                options: [
                    "Only one level",
                    "Meaningless sounds form meaningful units",
                    "No structure",
                    "Only continuous signals"
                ],
                correct: 1,
                explanation: "Duality of patterning means meaningless sounds combine to form meaningful units (words, sentences)."
            },
            {
                question: "Language uses arbitrary symbols, meaning:",
                options: [
                    "Words resemble what they represent",
                    "There's no natural connection between words and their meanings",
                    "Words are always logical",
                    "All languages use the same words"
                ],
                correct: 1,
                explanation: "Arbitrariness means there's no natural connection between words and their meanings - the relationship is conventional."
            },
            {
                question: "Language is both:",
                options: [
                    "Only cognitive",
                    "A cognitive ability (in the mind) and a social phenomenon (used in communities)",
                    "Only social",
                    "Only written"
                ],
                correct: 1,
                explanation: "Language is both a cognitive ability (in the mind) and a social phenomenon (used in communities)."
            },
            {
                question: "Language enables humans to:",
                options: [
                    "Only communicate basic needs",
                    "Share thoughts, feelings, information, and experiences",
                    "Only speak",
                    "Only write"
                ],
                correct: 1,
                explanation: "Language enables humans to share thoughts, feelings, information, and experiences, making complex communication possible."
            }
        ],
        "Characteristics of Language": [
            {
                question: "Productivity in language means:",
                options: [
                    "Language is fixed",
                    "Ability to create infinite new sentences",
                    "Language is limited",
                    "Only memorized phrases"
                ],
                correct: 1,
                explanation: "Productivity is the ability to create infinite new sentences using finite linguistic resources."
            },
            {
                question: "Interchangeability means:",
                options: [
                    "Only one-way communication",
                    "Speakers can be both senders and receivers",
                    "Fixed roles",
                    "Only receiving"
                ],
                correct: 1,
                explanation: "Interchangeability means speakers can be both senders and receivers of messages."
            },
            {
                question: "Displacement allows language to:",
                options: [
                    "Refer only to present objects",
                    "Refer to past, future, or distant things not present",
                    "Only describe actions",
                    "Only express emotions"
                ],
                correct: 1,
                explanation: "Displacement allows language to refer to past, future, or distant things not present in time or space."
            },
            {
                question: "Cultural transmission means language is:",
                options: [
                    "Inherited biologically",
                    "Learned from the community, not inherited",
                    "Automatic at birth",
                    "The same for everyone"
                ],
                correct: 1,
                explanation: "Cultural transmission means language is learned from the community, not inherited biologically."
            },
            {
                question: "Discreteness in language means:",
                options: [
                    "Language is continuous",
                    "Language uses distinct, separate units",
                    "Language is unclear",
                    "Language has no structure"
                ],
                correct: 1,
                explanation: "Discreteness means language uses distinct, separate units (sounds, words) rather than continuous signals."
            },
            {
                question: "Reflexivity allows language to:",
                options: [
                    "Only talk about objects",
                    "Talk about language itself (metalinguistic ability)",
                    "Only make sounds",
                    "Only write words"
                ],
                correct: 1,
                explanation: "Reflexivity means language can be used to talk about language itself (metalinguistic ability)."
            }
        ],
        "Language Universality": [
            {
                question: "Language universals are:",
                options: [
                    "Features found only in some languages",
                    "Features found in all human languages",
                    "Only vocabulary similarities",
                    "Only grammar rules"
                ],
                correct: 1,
                explanation: "Language universals are features found in all human languages, suggesting a common language faculty."
            },
            {
                question: "Universal features include:",
                options: [
                    "Only vocabulary",
                    "All languages have consonants, vowels, nouns, verbs, and can form questions",
                    "Only grammar",
                    "Only sounds"
                ],
                correct: 1,
                explanation: "Universal features include: all languages have consonants and vowels, nouns and verbs, can form questions and negations, and can express past/present/future."
            },
            {
                question: "Language universals suggest:",
                options: [
                    "Languages are completely different",
                    "Humans share a common language faculty",
                    "Only some people can learn language",
                    "Language is not innate"
                ],
                correct: 1,
                explanation: "Language universals suggest that humans share a common language faculty - an innate ability to acquire language."
            },
            {
                question: "All languages can:",
                options: [
                    "Only express present events",
                    "Express past, present, and future; form questions and negations; create new words",
                    "Only express past events",
                    "Only express future events"
                ],
                correct: 1,
                explanation: "All languages can express past/present/future, form questions and negations, and create new words - these are universal capabilities."
            },
            {
                question: "While languages share universals, they also:",
                options: [
                    "Are exactly the same",
                    "Vary greatly in how they express these universal features",
                    "Never differ",
                    "Only differ in vocabulary"
                ],
                correct: 1,
                explanation: "While languages share universals, they vary greatly in how they express these features, showing both unity and diversity."
            }
        ],
        "Language Family": [
            {
                question: "A language family is:",
                options: [
                    "Unrelated languages grouped together",
                    "A group of languages sharing a common ancestor",
                    "Only modern languages",
                    "Only similar-sounding languages"
                ],
                correct: 1,
                explanation: "A language family is a group of languages that share a common ancestor (proto-language) and are genetically related."
            },
            {
                question: "The Indo-European family includes:",
                options: [
                    "Only English",
                    "English, Spanish, Hindi, Russian",
                    "Only European languages",
                    "Only Asian languages"
                ],
                correct: 1,
                explanation: "The Indo-European family includes languages like English, Spanish, Hindi, Russian, and many others sharing a common ancestor."
            },
            {
                question: "Languages in a family share similarities in:",
                options: [
                    "Only vocabulary",
                    "Vocabulary, grammar, and sound systems due to shared origin",
                    "Only grammar",
                    "Only sounds"
                ],
                correct: 1,
                explanation: "Languages in a family share similarities in vocabulary, grammar, and sound systems because they evolved from a common ancestor."
            },
            {
                question: "The comparative method helps linguists:",
                options: [
                    "Only learn languages",
                    "Reconstruct proto-languages and trace language relationships",
                    "Only translate",
                    "Only teach languages"
                ],
                correct: 1,
                explanation: "The comparative method helps linguists reconstruct proto-languages and trace relationships between languages in a family."
            },
            {
                question: "Major language families include:",
                options: [
                    "Only Indo-European",
                    "Indo-European, Sino-Tibetan, Afro-Asiatic, Niger-Congo, Austronesian",
                    "Only European languages",
                    "Only Asian languages"
                ],
                correct: 1,
                explanation: "Major language families include: Indo-European, Sino-Tibetan, Afro-Asiatic, Niger-Congo, Austronesian, and many others."
            },
            {
                question: "Understanding language families helps us understand:",
                options: [
                    "Only grammar",
                    "Human migration, history, and cultural connections",
                    "Only vocabulary",
                    "Only pronunciation"
                ],
                correct: 1,
                explanation: "Understanding language families helps us understand human migration patterns, history, and cultural connections between peoples."
            }
        ]
    },
    
    "LIN 109": {
        "What is Communication?": [
            {
                question: "Communication is:",
                options: [
                    "Only speaking",
                    "The process of exchanging information, ideas, thoughts, or messages",
                    "Only writing",
                    "Only listening"
                ],
                correct: 1,
                explanation: "Communication is the process of exchanging information, ideas, thoughts, feelings, or messages between individuals or groups."
            },
            {
                question: "Effective communication requires:",
                options: [
                    "Only words",
                    "Shared understanding of symbols, codes, and context",
                    "Only gestures",
                    "Only writing"
                ],
                correct: 1,
                explanation: "Effective communication requires shared understanding of symbols, codes, and context between sender and receiver."
            },
            {
                question: "Communication involves:",
                options: [
                    "Only sending",
                    "A sender encoding a message, transmitting it, and a receiver decoding it",
                    "Only receiving",
                    "Only writing"
                ],
                correct: 1,
                explanation: "Communication involves a sender encoding a message, transmitting it through a channel, and a receiver decoding it."
            },
            {
                question: "Communication can be:",
                options: [
                    "Only verbal",
                    "Verbal (using words) or non-verbal (gestures, body language, facial expressions)",
                    "Only non-verbal",
                    "Only written"
                ],
                correct: 1,
                explanation: "Communication can be verbal (using words) or non-verbal (gestures, body language, facial expressions, tone)."
            },
            {
                question: "Communication is fundamental for:",
                options: [
                    "Only entertainment",
                    "Human interaction, cooperation, learning, and social organization",
                    "Only work",
                    "Only education"
                ],
                correct: 1,
                explanation: "Communication is fundamental to human interaction, enabling cooperation, learning, relationship-building, and social organization."
            }
        ],
        "Channels of communication": [
            {
                question: "Channels of communication include:",
                options: [
                    "Only face-to-face",
                    "Face-to-face, written, digital, broadcast, print, telephone",
                    "Only digital",
                    "Only broadcast"
                ],
                correct: 1,
                explanation: "Channels include: face-to-face, written, digital, broadcast, print, and telephone - each with different characteristics."
            },
            {
                question: "Face-to-face communication offers:",
                options: [
                    "Only written feedback",
                    "Direct, personal interaction with immediate feedback",
                    "Only delayed feedback",
                    "Only one-way communication"
                ],
                correct: 1,
                explanation: "Face-to-face communication offers direct, personal interaction with immediate feedback and non-verbal cues."
            },
            {
                question: "Digital channels include:",
                options: [
                    "Only email",
                    "Social media, websites, apps, email, messaging",
                    "Only social media",
                    "Only websites"
                ],
                correct: 1,
                explanation: "Digital channels include social media, websites, apps, email, messaging platforms, and streaming services."
            },
            {
                question: "Each communication channel has different:",
                options: [
                    "Only speed",
                    "Characteristics: immediacy, reach, permanence, interactivity, richness",
                    "Only reach",
                    "Only permanence"
                ],
                correct: 1,
                explanation: "Each channel has different characteristics: immediacy (how fast), reach (how many people), permanence (how long it lasts), interactivity, and richness (amount of information)."
            },
            {
                question: "Modern communication often uses:",
                options: [
                    "Only one channel",
                    "Multiple channels simultaneously for maximum effectiveness",
                    "Only two channels",
                    "Only traditional channels"
                ],
                correct: 1,
                explanation: "Modern communication often uses multiple channels simultaneously (e.g., social media + email + face-to-face) for maximum effectiveness."
            }
        ],
        "Types of Communication": [
            {
                question: "Verbal communication uses:",
                options: [
                    "Only gestures",
                    "Spoken or written words",
                    "Only body language",
                    "Only facial expressions"
                ],
                correct: 1,
                explanation: "Verbal communication uses spoken or written words to convey messages."
            },
            {
                question: "Mass communication reaches:",
                options: [
                    "Only small groups",
                    "Large, diverse audiences through media",
                    "Only individuals",
                    "Only families"
                ],
                correct: 1,
                explanation: "Mass communication reaches large, diverse, and often anonymous audiences simultaneously through mass media channels."
            },
            {
                question: "Non-verbal communication includes:",
                options: [
                    "Only words",
                    "Body language, gestures, facial expressions, tone, eye contact",
                    "Only writing",
                    "Only speaking"
                ],
                correct: 1,
                explanation: "Non-verbal communication includes body language, gestures, facial expressions, tone of voice, eye contact, and posture."
            },
            {
                question: "Interpersonal communication is:",
                options: [
                    "Only public",
                    "One-on-one or small group communication",
                    "Only mass",
                    "Only formal"
                ],
                correct: 1,
                explanation: "Interpersonal communication is one-on-one or small group communication, typically more personal and interactive."
            },
            {
                question: "Public communication includes:",
                options: [
                    "Only private conversations",
                    "Speeches, presentations, public speaking",
                    "Only writing",
                    "Only listening"
                ],
                correct: 1,
                explanation: "Public communication includes speeches, presentations, public speaking, and addressing larger audiences."
            },
            {
                question: "Intrapersonal communication is:",
                options: [
                    "Only with others",
                    "Internal dialogue, thinking, self-reflection",
                    "Only speaking",
                    "Only writing"
                ],
                correct: 1,
                explanation: "Intrapersonal communication is internal dialogue, thinking, self-reflection - communication with oneself."
            }
        ],
        "Importance of communication": [
            {
                question: "Communication is essential for:",
                options: [
                    "Only entertainment",
                    "Building relationships, sharing knowledge, coordinating activities, and social organization",
                    "Only work",
                    "Only education"
                ],
                correct: 1,
                explanation: "Communication is essential for building relationships, sharing knowledge, expressing needs, coordinating activities, resolving conflicts, and facilitating social organization."
            },
            {
                question: "Without communication:",
                options: [
                    "Society would function normally",
                    "Human society would be impossible",
                    "Only work would be affected",
                    "Only education would be affected"
                ],
                correct: 1,
                explanation: "Without communication, human society would be impossible - it enables cooperation, cultural transmission, and complex social structures."
            },
            {
                question: "Communication enables:",
                options: [
                    "Only speaking",
                    "Cooperation, cultural transmission, and development of complex social structures",
                    "Only writing",
                    "Only listening"
                ],
                correct: 1,
                explanation: "Communication enables cooperation, cultural transmission, and the development of complex social structures."
            },
            {
                question: "Effective communication skills are crucial for:",
                options: [
                    "Only entertainment",
                    "Personal, academic, and professional success",
                    "Only work",
                    "Only education"
                ],
                correct: 1,
                explanation: "Effective communication skills are crucial for personal, academic, and professional success in all areas of life."
            }
        ],
        "Mass communication": [
            {
                question: "Mass communication is:",
                options: [
                    "One-to-one communication",
                    "One-to-many communication reaching large audiences",
                    "Only personal",
                    "Only private"
                ],
                correct: 1,
                explanation: "Mass communication is one-to-many communication, where a single source reaches many receivers simultaneously."
            },
            {
                question: "Mass communication serves functions like:",
                options: [
                    "Only entertainment",
                    "Informing (news), educating (documentaries), entertaining (shows), persuading (advertising)",
                    "Only news",
                    "Only advertising"
                ],
                correct: 1,
                explanation: "Mass communication serves multiple functions: informing (news), educating (documentaries), entertaining (shows), and persuading (advertising)."
            },
            {
                question: "Mass communication shapes:",
                options: [
                    "Only technology",
                    "Public opinion, influences culture, and creates shared experiences",
                    "Only equipment",
                    "Only production"
                ],
                correct: 1,
                explanation: "Mass communication shapes public opinion, influences culture, and creates shared experiences across large populations."
            },
            {
                question: "Characteristics of mass communication include:",
                options: [
                    "Only small audience",
                    "Large audience, heterogeneous audience, anonymous receivers, rapid transmission, use of technology",
                    "Only personal interaction",
                    "Only private"
                ],
                correct: 1,
                explanation: "Characteristics include: large audience, heterogeneous (diverse) audience, anonymous receivers, rapid transmission, and use of technology."
            }
        ],
        "Types of Mass communication": [
            {
                question: "Types of mass communication include:",
                options: [
                    "Only television",
                    "Print media, broadcast media, digital media, outdoor media, film",
                    "Only radio",
                    "Only internet"
                ],
                correct: 1,
                explanation: "Types include: print media (newspapers, magazines), broadcast media (radio, TV), digital media (websites, social media), outdoor media (billboards), and film."
            },
            {
                question: "Print media offers:",
                options: [
                    "Only immediacy",
                    "Permanence and depth - readers can revisit content",
                    "Only speed",
                    "Only interactivity"
                ],
                correct: 1,
                explanation: "Print media offers permanence and depth - readers can revisit content, take time to process information, and keep physical copies."
            },
            {
                question: "Broadcast media provides:",
                options: [
                    "Only permanence",
                    "Immediacy and reach - instant transmission to large audiences",
                    "Only depth",
                    "Only interactivity"
                ],
                correct: 1,
                explanation: "Broadcast media (radio, TV) provides immediacy and reach - instant transmission to large audiences simultaneously."
            },
            {
                question: "Digital media enables:",
                options: [
                    "Only one-way communication",
                    "Interactivity, targeting, and two-way communication",
                    "Only broadcasting",
                    "Only print"
                ],
                correct: 1,
                explanation: "Digital media enables interactivity, targeting specific audiences, and two-way communication between senders and receivers."
            },
            {
                question: "Modern mass communication often:",
                options: [
                    "Uses only one type",
                    "Combines multiple types, creating integrated media experiences",
                    "Uses only two types",
                    "Never combines types"
                ],
                correct: 1,
                explanation: "Modern mass communication often combines multiple types (e.g., TV + social media + websites), creating integrated media experiences."
            }
        ]
    },
    
    "LIN 201": {
        "Definition of phonology": [
            {
                question: "Phonology studies:",
                options: [
                    "Physical properties of sounds",
                    "How sounds function in a particular language",
                    "Only sound production",
                    "Only sound perception"
                ],
                correct: 1,
                explanation: "Phonology studies how sounds function in a particular language - their abstract representations, patterns, and rules."
            },
            {
                question: "Phonology deals with:",
                options: [
                    "Concrete, measurable sounds",
                    "Abstract, mental representations of sounds",
                    "Only acoustic properties",
                    "Only articulatory properties"
                ],
                correct: 1,
                explanation: "Phonology deals with abstract, mental representations of sounds and their role in language structure."
            },
            {
                question: "Phonology examines:",
                options: [
                    "Only sound production",
                    "Sound patterns, systems, and rules that govern sound distribution and combination",
                    "Only sound perception",
                    "Only acoustic properties"
                ],
                correct: 1,
                explanation: "Phonology examines sound patterns and systems, focusing on how sounds are organized and the rules that govern their distribution and combination."
            },
            {
                question: "Unlike phonetics, phonology is:",
                options: [
                    "Universal - same for all languages",
                    "Language-specific - each language has its own sound system",
                    "Only about production",
                    "Only about perception"
                ],
                correct: 1,
                explanation: "Unlike phonetics (which is universal), phonology is language-specific - each language has its own sound system and rules."
            }
        ],
        "Difference between phonetic and Phonology": [
            {
                question: "The main difference is:",
                options: [
                    "They are the same",
                    "Phonetics studies physical properties, phonology studies how sounds function in language",
                    "Phonology is easier",
                    "Phonetics is more important"
                ],
                correct: 1,
                explanation: "Phonetics studies physical properties of sounds (universal), while phonology studies how sounds function within a particular language system (language-specific)."
            },
            {
                question: "Phonetics asks:",
                options: [
                    "How are sounds organized in this language?",
                    "What sounds can humans produce?",
                    "What are the sound patterns?",
                    "What are the sound rules?"
                ],
                correct: 1,
                explanation: "Phonetics asks 'What sounds can humans produce?' (universal), while phonology asks 'How are sounds organized and used in this language?' (language-specific)."
            },
            {
                question: "Phonology asks:",
                options: [
                    "What sounds can humans produce?",
                    "How are sounds organized and used in this language?",
                    "How are sounds produced?",
                    "How are sounds perceived?"
                ],
                correct: 1,
                explanation: "Phonology asks 'How are sounds organized and used in this language?' - focusing on language-specific sound systems."
            },
            {
                question: "Phonetics is universal, meaning:",
                options: [
                    "Only some languages have sounds",
                    "All humans can produce similar sounds",
                    "Only one language exists",
                    "Sounds are language-specific"
                ],
                correct: 1,
                explanation: "Phonetics is universal - all humans can produce similar sounds, regardless of their language."
            },
            {
                question: "Phonology is language-specific, meaning:",
                options: [
                    "All languages have the same sound system",
                    "Each language has its own sound system and rules",
                    "Only one language has sounds",
                    "Sounds don't vary between languages"
                ],
                correct: 1,
                explanation: "Phonology is language-specific - each language has its own sound system, patterns, and rules."
            }
        ],
        "Phonological processes": [
            {
                question: "Assimilation is when:",
                options: [
                    "Sounds become different",
                    "A sound becomes more like a neighboring sound",
                    "Sounds are deleted",
                    "Sounds are added"
                ],
                correct: 1,
                explanation: "Assimilation is when a sound becomes more like a neighboring sound (e.g., 'impossible' where 'in-' becomes 'im-' before 'p')."
            },
            {
                question: "Vowel reduction occurs when:",
                options: [
                    "Vowels become longer",
                    "Full vowels become schwa in unstressed positions",
                    "Vowels are deleted",
                    "Vowels are added"
                ],
                correct: 1,
                explanation: "Vowel reduction is when full vowels become schwa (ə) in unstressed positions, helping maintain ease of pronunciation."
            },
            {
                question: "Elision (deletion) occurs when:",
                options: [
                    "Sounds are added",
                    "Sounds are deleted in certain contexts",
                    "Sounds become longer",
                    "Sounds become different"
                ],
                correct: 1,
                explanation: "Elision is when sounds are deleted in certain contexts (e.g., 'I'm' instead of 'I am', 'don't' instead of 'do not')."
            },
            {
                question: "Epenthesis (insertion) occurs when:",
                options: [
                    "Sounds are deleted",
                    "Sounds are inserted to break up difficult sequences",
                    "Sounds become different",
                    "Sounds become longer"
                ],
                correct: 1,
                explanation: "Epenthesis is when sounds are inserted to break up difficult sequences (e.g., adding a vowel between consonants)."
            },
            {
                question: "Metathesis occurs when:",
                options: [
                    "Sounds are deleted",
                    "The order of sounds is switched",
                    "Sounds are added",
                    "Sounds become different"
                ],
                correct: 1,
                explanation: "Metathesis is when the order of sounds is switched (e.g., 'ask' pronounced as 'aks' in some dialects)."
            }
        ],
        "Minimal Pair/Minimal set": [
            {
                question: "A minimal pair consists of:",
                options: [
                    "Two identical words",
                    "Two words that differ in meaning and differ in only one sound",
                    "Two unrelated words",
                    "Two words with same meaning"
                ],
                correct: 1,
                explanation: "A minimal pair consists of two words that differ in meaning and differ in only one sound segment in the same position (e.g., 'bat' and 'pat')."
            },
            {
                question: "Minimal pairs help identify:",
                options: [
                    "Only allophones",
                    "Phonemes - meaningful sound units",
                    "Only sounds",
                    "Only words"
                ],
                correct: 1,
                explanation: "Minimal pairs are crucial for identifying phonemes (meaningful sound units) in a language."
            },
            {
                question: "An example of a minimal pair is:",
                options: [
                    "'cat' and 'dog'",
                    "'bat' and 'pat' - differ only in the initial sound",
                    "'run' and 'walk'",
                    "'big' and 'small'"
                ],
                correct: 1,
                explanation: "'bat' and 'pat' are a minimal pair - they differ in meaning and differ in only one sound (the initial consonant)."
            },
            {
                question: "A minimal set contains:",
                options: [
                    "Only two words",
                    "Three or more words that differ in only one sound",
                    "Only identical words",
                    "Only unrelated words"
                ],
                correct: 1,
                explanation: "A minimal set contains three or more words that differ in only one sound (e.g., 'bat', 'pat', 'mat', 'hat')."
            },
            {
                question: "If two sounds can create a minimal pair, they are:",
                options: [
                    "Allophones of the same phoneme",
                    "Different phonemes - they contrast meaningfully",
                    "Always the same",
                    "Never different"
                ],
                correct: 1,
                explanation: "If two sounds can create a minimal pair, they are different phonemes - they contrast meaningfully in the language."
            }
        ],
        "Complementary distribution": [
            {
                question: "Complementary distribution occurs when:",
                options: [
                    "Sounds appear in the same environment",
                    "Sounds never appear in the same phonetic environment",
                    "Sounds are always different",
                    "Sounds are always the same"
                ],
                correct: 1,
                explanation: "Complementary distribution occurs when two or more sounds never appear in the same phonetic environment - they are mutually exclusive."
            },
            {
                question: "Sounds in complementary distribution are:",
                options: [
                    "Different phonemes",
                    "Allophones (variants) of the same phoneme",
                    "Always different",
                    "Always the same"
                ],
                correct: 1,
                explanation: "When sounds are in complementary distribution, they are considered allophones (variants) of the same phoneme."
            },
            {
                question: "If sounds are in complementary distribution, they:",
                options: [
                    "Can appear anywhere",
                    "Occur in different, predictable environments",
                    "Always appear together",
                    "Never occur"
                ],
                correct: 1,
                explanation: "If sounds are in complementary distribution, they occur in different, predictable environments - where one appears, the other doesn't."
            },
            {
                question: "An example of complementary distribution is:",
                options: [
                    "[p] and [b] in English",
                    "[p] and [pʰ] in English - [p] after [s], [pʰ] elsewhere",
                    "[t] and [d] in English",
                    "[k] and [g] in English"
                ],
                correct: 1,
                explanation: "In English, [p] (unaspirated) appears after [s] (as in 'spin'), while [pʰ] (aspirated) appears elsewhere (as in 'pin') - they're in complementary distribution."
            }
        ],
        "Free variation": [
            {
                question: "Free variation occurs when:",
                options: [
                    "Sounds cannot be interchanged",
                    "Sounds can be used interchangeably without changing meaning",
                    "Sounds always change meaning",
                    "Sounds are always different"
                ],
                correct: 1,
                explanation: "Free variation occurs when two or more sounds can be used interchangeably in the same environment without changing meaning."
            },
            {
                question: "In free variation, the choice between sounds:",
                options: [
                    "Always changes meaning",
                    "Is not predictable and doesn't change meaning",
                    "Is always predictable",
                    "Never matters"
                ],
                correct: 1,
                explanation: "In free variation, the choice between sounds is not predictable and doesn't change meaning - either variant is acceptable."
            },
            {
                question: "An example of free variation is:",
                options: [
                    "'bat' and 'pat'",
                    "Pronouncing 'economics' with [i] or [ɛ] in the first syllable",
                    "'cat' and 'dog'",
                    "'run' and 'walk'"
                ],
                correct: 1,
                explanation: "Some speakers pronounce 'economics' with [i] (ee-konomics) and others with [ɛ] (eh-konomics) - this is free variation."
            }
        ],
        "Tone": [
            {
                question: "Tone refers to:",
                options: [
                    "Only volume",
                    "Use of pitch to distinguish word meaning",
                    "Only speed",
                    "Only quality"
                ],
                correct: 1,
                explanation: "Tone refers to the use of pitch to distinguish word meaning in tone languages (like Mandarin, Thai)."
            },
            {
                question: "In tone languages:",
                options: [
                    "Pitch doesn't matter",
                    "The same sounds can have different meanings depending on pitch",
                    "Only consonants matter",
                    "Only vowels matter"
                ],
                correct: 1,
                explanation: "In tone languages, the same sequence of sounds can have different meanings depending on the pitch pattern used."
            },
            {
                question: "Tone languages include:",
                options: [
                    "Only English",
                    "Mandarin Chinese, Thai, Vietnamese, and many African languages",
                    "Only European languages",
                    "Only American languages"
                ],
                correct: 1,
                explanation: "Tone languages include Mandarin Chinese, Thai, Vietnamese, and many African languages, where pitch changes word meaning."
            },
            {
                question: "In non-tone languages like English:",
                options: [
                    "Pitch always changes word meaning",
                    "Pitch is used for intonation (sentence meaning) but not word meaning",
                    "Pitch doesn't exist",
                    "Pitch is always the same"
                ],
                correct: 1,
                explanation: "In non-tone languages like English, pitch is used for intonation (conveying sentence meaning, emotion) but not for distinguishing word meanings."
            }
        ],
        "Data analysis": [
            {
                question: "Phonological data analysis involves:",
                options: [
                    "Only listening",
                    "Transcribing data, finding minimal pairs, identifying allophones, discovering rules",
                    "Only reading",
                    "Only speaking"
                ],
                correct: 1,
                explanation: "Phonological data analysis involves transcribing data, looking for minimal pairs, identifying allophones, discovering phonological rules, and analyzing syllable structure."
            },
            {
                question: "The first step in phonological analysis is usually:",
                options: [
                    "Finding rules",
                    "Transcribing the data accurately using IPA",
                    "Identifying phonemes",
                    "Analyzing syllables"
                ],
                correct: 1,
                explanation: "The first step is usually transcribing the data accurately using the International Phonetic Alphabet (IPA)."
            },
            {
                question: "After transcribing, linguists look for:",
                options: [
                    "Only words",
                    "Minimal pairs to identify phonemes",
                    "Only sentences",
                    "Only meanings"
                ],
                correct: 1,
                explanation: "After transcribing, linguists look for minimal pairs to identify which sounds are separate phonemes in the language."
            },
            {
                question: "Phonological rules describe:",
                options: [
                    "Only word meanings",
                    "How sounds change in different environments",
                    "Only sentence structure",
                    "Only vocabulary"
                ],
                correct: 1,
                explanation: "Phonological rules describe how sounds change in different environments (e.g., assimilation, vowel reduction)."
            },
            {
                question: "Syllable structure analysis examines:",
                options: [
                    "Only word meanings",
                    "How sounds combine to form syllables (onset, nucleus, coda)",
                    "Only sentence structure",
                    "Only vocabulary"
                ],
                correct: 1,
                explanation: "Syllable structure analysis examines how sounds combine to form syllables, including onset (beginning), nucleus (vowel), and coda (end)."
            }
        ]
    },
    
    "LIN 203": {
        "Morpheme": [
            {
                question: "A morpheme is:",
                options: [
                    "A complete word only",
                    "The smallest meaningful unit of language",
                    "Only a sound",
                    "Only a letter"
                ],
                correct: 1,
                explanation: "A morpheme is the smallest meaningful unit of language that cannot be further divided into smaller meaningful parts."
            },
            {
                question: "The word 'unhappiness' contains:",
                options: [
                    "One morpheme",
                    "Three morphemes: 'un-', 'happy', '-ness'",
                    "Two morphemes",
                    "Four morphemes"
                ],
                correct: 1,
                explanation: "'Unhappiness' contains three morphemes: 'un-' (not), 'happy' (root), and '-ness' (makes it a noun)."
            },
            {
                question: "The word 'cats' contains:",
                options: [
                    "One morpheme",
                    "Two morphemes: 'cat' (root) and '-s' (plural)",
                    "Three morphemes",
                    "No morphemes"
                ],
                correct: 1,
                explanation: "'Cats' contains two morphemes: 'cat' (the root meaning the animal) and '-s' (the plural marker)."
            },
            {
                question: "Morphemes can be:",
                options: [
                    "Only words",
                    "Words or parts of words (affixes)",
                    "Only sounds",
                    "Only letters"
                ],
                correct: 1,
                explanation: "Morphemes can be words (free morphemes) or parts of words like prefixes and suffixes (bound morphemes)."
            },
            {
                question: "A root morpheme is:",
                options: [
                    "Only an affix",
                    "The core meaning-bearing part of a word",
                    "Only a prefix",
                    "Only a suffix"
                ],
                correct: 1,
                explanation: "A root morpheme is the core meaning-bearing part of a word to which affixes can be added (e.g., 'happy' in 'unhappiness')."
            }
        ],
        "Types of morphemes": [
            {
                question: "Free morphemes:",
                options: [
                    "Must attach to other morphemes",
                    "Can stand alone as words",
                    "Are always prefixes",
                    "Are always suffixes"
                ],
                correct: 1,
                explanation: "Free morphemes can stand alone as words (e.g., 'cat', 'book', 'happy')."
            },
            {
                question: "Derivational morphemes:",
                options: [
                    "Only modify grammar",
                    "Create new words or change word class",
                    "Never change meaning",
                    "Only add to roots"
                ],
                correct: 1,
                explanation: "Derivational morphemes create new words or change word class (e.g., 'happy' → 'happiness' changes adjective to noun)."
            },
            {
                question: "Inflectional morphemes:",
                options: [
                    "Change word class",
                    "Modify words grammatically without changing word class",
                    "Create new words",
                    "Always change meaning"
                ],
                correct: 1,
                explanation: "Inflectional morphemes modify words grammatically without changing word class (e.g., 'cat' → 'cats' for plural, 'walk' → 'walked' for past tense)."
            },
            {
                question: "Bound morphemes:",
                options: [
                    "Can stand alone",
                    "Must attach to other morphemes (affixes like 'un-', '-ness', '-ed')",
                    "Are always words",
                    "Never attach to anything"
                ],
                correct: 1,
                explanation: "Bound morphemes must attach to other morphemes - they include prefixes (un-), suffixes (-ness, -ed), and infixes."
            },
            {
                question: "The difference between derivational and inflectional morphemes is:",
                options: [
                    "They are the same",
                    "Derivational creates new words/changes class; inflectional modifies grammar",
                    "Inflectional creates new words",
                    "Derivational only modifies grammar"
                ],
                correct: 1,
                explanation: "Derivational morphemes create new words or change word class, while inflectional morphemes modify words grammatically without changing class."
            },
            {
                question: "An example of a derivational morpheme is:",
                options: [
                    "'-s' in 'cats'",
                    "'-ness' in 'happiness' (changes adjective to noun)",
                    "'-ed' in 'walked'",
                    "'-ing' in 'walking'"
                ],
                correct: 1,
                explanation: "'-ness' in 'happiness' is derivational - it changes the adjective 'happy' into the noun 'happiness'."
            },
            {
                question: "An example of an inflectional morpheme is:",
                options: [
                    "'un-' in 'unhappy'",
                    "'-s' in 'cats' (plural) or '-ed' in 'walked' (past tense)",
                    "'-ness' in 'happiness'",
                    "'-ful' in 'helpful'"
                ],
                correct: 1,
                explanation: "'-s' in 'cats' and '-ed' in 'walked' are inflectional - they modify grammar (plural, past tense) without changing word class."
            }
        ],
        "Morphological processes": [
            {
                question: "Compounding is:",
                options: [
                    "Adding affixes",
                    "Combining two or more free morphemes to create new words",
                    "Shortening words",
                    "Changing word class"
                ],
                correct: 1,
                explanation: "Compounding combines two or more free morphemes to create new words (e.g., 'blackboard', 'greenhouse')."
            },
            {
                question: "Blending is:",
                options: [
                    "Only adding prefixes",
                    "Combining parts of two words (e.g., 'brunch' from 'breakfast' + 'lunch')",
                    "Only shortening",
                    "Only changing class"
                ],
                correct: 1,
                explanation: "Blending combines parts of two words to create a new word (e.g., 'brunch' from 'breakfast' + 'lunch')."
            },
            {
                question: "Affixation is:",
                options: [
                    "Only compounding",
                    "Adding prefixes, suffixes, or infixes to roots",
                    "Only blending",
                    "Only shortening"
                ],
                correct: 1,
                explanation: "Affixation is adding prefixes (before root), suffixes (after root), or infixes (within root) to create new words or modify meaning."
            },
            {
                question: "Reduplication is:",
                options: [
                    "Only shortening",
                    "Repeating all or part of a word to create new forms",
                    "Only blending",
                    "Only compounding"
                ],
                correct: 1,
                explanation: "Reduplication is repeating all or part of a word (e.g., 'ping-pong', 'helter-skelter') to create new forms or meanings."
            },
            {
                question: "Clipping is:",
                options: [
                    "Adding affixes",
                    "Shortening words (e.g., 'ad' from 'advertisement', 'phone' from 'telephone')",
                    "Only blending",
                    "Only compounding"
                ],
                correct: 1,
                explanation: "Clipping is shortening words by removing parts (e.g., 'ad' from 'advertisement', 'phone' from 'telephone')."
            },
            {
                question: "Acronyms are:",
                options: [
                    "Only full words",
                    "Words formed from initial letters (e.g., 'NASA', 'UNESCO')",
                    "Only shortened words",
                    "Only blended words"
                ],
                correct: 1,
                explanation: "Acronyms are words formed from initial letters of phrases (e.g., 'NASA' from 'National Aeronautics and Space Administration')."
            },
            {
                question: "Conversion (zero derivation) is:",
                options: [
                    "Adding affixes",
                    "Changing word class without adding affixes (e.g., 'email' noun → 'email' verb)",
                    "Only shortening",
                    "Only blending"
                ],
                correct: 1,
                explanation: "Conversion is changing word class without adding affixes (e.g., 'email' as noun → 'email' as verb, 'run' as verb → 'run' as noun)."
            },
            {
                question: "Back-formation is:",
                options: [
                    "Only adding suffixes",
                    "Creating a simpler word by removing what looks like an affix (e.g., 'edit' from 'editor')",
                    "Only adding prefixes",
                    "Only blending"
                ],
                correct: 1,
                explanation: "Back-formation creates a simpler word by removing what looks like an affix (e.g., 'edit' from 'editor', 'babysit' from 'babysitter')."
            }
        ]
    },
    
    "LIN 205": {
        "Diachronic and synchronic Linguistics": [
            {
                question: "Diachronic linguistics studies:",
                options: [
                    "Language at one point in time",
                    "Language change over time",
                    "Only current language",
                    "Only future language"
                ],
                correct: 1,
                explanation: "Diachronic linguistics (historical linguistics) studies language change over time, examining how languages evolve and develop."
            },
            {
                question: "Synchronic linguistics studies:",
                options: [
                    "Language change",
                    "Language at a particular point in time",
                    "Only past language",
                    "Only future language"
                ],
                correct: 1,
                explanation: "Synchronic linguistics studies language at a particular point in time, focusing on structure and function as it exists at a specific moment."
            },
            {
                question: "The main difference between diachronic and synchronic is:",
                options: [
                    "They are the same",
                    "Diachronic studies change over time; synchronic studies language at one point",
                    "Synchronic studies change",
                    "Diachronic studies only current language"
                ],
                correct: 1,
                explanation: "Diachronic linguistics studies language change over time (historical perspective), while synchronic linguistics studies language at a particular point in time (current state)."
            },
            {
                question: "Diachronic linguistics is also called:",
                options: [
                    "Synchronic linguistics",
                    "Historical linguistics",
                    "Only descriptive linguistics",
                    "Only prescriptive linguistics"
                ],
                correct: 1,
                explanation: "Diachronic linguistics is also called historical linguistics - it examines how languages change and evolve over time."
            },
            {
                question: "Synchronic linguistics focuses on:",
                options: [
                    "Only language history",
                    "Language structure and function at a specific moment",
                    "Only language change",
                    "Only future language"
                ],
                correct: 1,
                explanation: "Synchronic linguistics focuses on language structure and function as it exists at a specific moment, without considering historical development."
            }
        ],
        "How Language Changes overtime": [
            {
                question: "Languages change through:",
                options: [
                    "Only sound changes",
                    "Sound changes, lexical changes, grammatical changes, semantic changes",
                    "Only vocabulary",
                    "Only grammar"
                ],
                correct: 1,
                explanation: "Languages change through sound changes, lexical changes (new words, meaning shifts), grammatical changes, and semantic changes."
            },
            {
                question: "Language change is:",
                options: [
                    "Unnatural",
                    "Natural and inevitable",
                    "Rare",
                    "Only temporary"
                ],
                correct: 1,
                explanation: "Language change is natural and inevitable - no language remains static over time."
            },
            {
                question: "Sound changes include:",
                options: [
                    "Only vocabulary",
                    "Phonetic shifts, mergers, splits, and sound loss",
                    "Only grammar",
                    "Only meaning"
                ],
                correct: 1,
                explanation: "Sound changes include phonetic shifts (sounds change), mergers (sounds become the same), splits (one sound becomes two), and sound loss."
            },
            {
                question: "Lexical changes include:",
                options: [
                    "Only sound changes",
                    "New words, borrowed words, meaning shifts, word loss",
                    "Only grammar",
                    "Only pronunciation"
                ],
                correct: 1,
                explanation: "Lexical changes include new words (neologisms), borrowed words (loanwords), meaning shifts (semantic change), and word loss."
            },
            {
                question: "Grammatical changes include:",
                options: [
                    "Only vocabulary",
                    "Changes in word order, morphology, syntax, and grammatical categories",
                    "Only sounds",
                    "Only meaning"
                ],
                correct: 1,
                explanation: "Grammatical changes include changes in word order, morphology (affixes), syntax (sentence structure), and grammatical categories."
            },
            {
                question: "Semantic changes include:",
                options: [
                    "Only sound changes",
                    "Broadening, narrowing, meaning shifts, and pejoration/amelioration",
                    "Only grammar",
                    "Only pronunciation"
                ],
                correct: 1,
                explanation: "Semantic changes include broadening (meaning becomes wider), narrowing (meaning becomes more specific), meaning shifts, and pejoration/amelioration (negative/positive changes)."
            },
            {
                question: "Factors causing language change include:",
                options: [
                    "Only time",
                    "Contact with other languages, social factors, language acquisition, and natural tendencies",
                    "Only geography",
                    "Only technology"
                ],
                correct: 1,
                explanation: "Language change is caused by contact with other languages, social factors, how children acquire language, and natural linguistic tendencies."
            }
        ],
        "Relationship between Languages": [
            {
                question: "Genetically related languages:",
                options: [
                    "Are unrelated",
                    "Descend from a common ancestor",
                    "Only sound similar",
                    "Only have similar vocabulary"
                ],
                correct: 1,
                explanation: "Genetically related languages descend from a common ancestor (proto-language) and form language families."
            },
            {
                question: "The comparative method:",
                options: [
                    "Only studies modern languages",
                    "Reconstructs proto-languages by comparing related languages",
                    "Only studies sounds",
                    "Only studies grammar"
                ],
                correct: 1,
                explanation: "The comparative method helps linguists reconstruct proto-languages by comparing related languages and identifying systematic correspondences."
            },
            {
                question: "Languages in a family share:",
                options: [
                    "Only vocabulary",
                    "Similarities in vocabulary, grammar, and sound systems due to common origin",
                    "Only grammar",
                    "Only sounds"
                ],
                correct: 1,
                explanation: "Languages in a family share similarities in vocabulary, grammar, and sound systems because they evolved from a common ancestor."
            },
            {
                question: "The Indo-European family includes:",
                options: [
                    "Only English",
                    "English, Spanish, Hindi, Russian, and many others",
                    "Only European languages",
                    "Only Asian languages"
                ],
                correct: 1,
                explanation: "The Indo-European family includes English, Spanish, Hindi, Russian, and many other languages that descended from Proto-Indo-European."
            },
            {
                question: "Language families are organized:",
                options: [
                    "Only alphabetically",
                    "Hierarchically - families contain branches, branches contain sub-branches",
                    "Only by size",
                    "Only by location"
                ],
                correct: 1,
                explanation: "Language families are organized hierarchically - families contain branches, branches contain sub-branches, and so on."
            }
        ],
        "Naturality principle that guides languages": [
            {
                question: "The naturalness principle suggests languages tend toward:",
                options: [
                    "Complexity",
                    "Ease of articulation, perceptual clarity, regularity, and economy",
                    "Only irregularity",
                    "Only complexity"
                ],
                correct: 1,
                explanation: "The naturalness principle suggests languages develop in ways that are natural, efficient, and follow universal tendencies like ease of articulation and perceptual clarity."
            },
            {
                question: "Ease of articulation means:",
                options: [
                    "Sounds are always difficult",
                    "Languages tend to favor sounds and patterns that are easier to produce",
                    "Only complex sounds",
                    "Only difficult sounds"
                ],
                correct: 1,
                explanation: "Ease of articulation means languages tend to favor sounds and patterns that are easier to produce, leading to sound changes over time."
            },
            {
                question: "Perceptual clarity means:",
                options: [
                    "Sounds are always unclear",
                    "Languages maintain distinctions that are easy to perceive and distinguish",
                    "Only unclear sounds",
                    "Only confusing sounds"
                ],
                correct: 1,
                explanation: "Perceptual clarity means languages maintain distinctions that are easy to perceive and distinguish, ensuring effective communication."
            },
            {
                question: "Regularity in language means:",
                options: [
                    "Only irregular patterns",
                    "Languages tend toward regular, predictable patterns",
                    "Only unpredictable patterns",
                    "Only random patterns"
                ],
                correct: 1,
                explanation: "Regularity means languages tend toward regular, predictable patterns (e.g., regular verb conjugations) rather than irregular exceptions."
            },
            {
                question: "Economy in language means:",
                options: [
                    "Only complexity",
                    "Languages tend to be efficient, avoiding unnecessary complexity",
                    "Only redundancy",
                    "Only waste"
                ],
                correct: 1,
                explanation: "Economy means languages tend to be efficient, avoiding unnecessary complexity while maintaining clarity and expressiveness."
            }
        ]
    },
    
    "LIN 207": {
        "Introduction to Writing Systems & Orthography Design": [
            {
                question: "A writing system is:",
                options: [
                    "Only spoken language",
                    "How a language is written using visible symbols",
                    "Only sounds",
                    "Only grammar"
                ],
                correct: 1,
                explanation: "A writing system is how a language is written using visible symbols, allowing spoken language to be recorded and preserved."
            },
            {
                question: "Orthography design is:",
                options: [
                    "Only reading",
                    "The planned creation or standardization of a writing system",
                    "Only speaking",
                    "Only listening"
                ],
                correct: 1,
                explanation: "Orthography design is the planned creation or standardization of a writing system, especially for languages without a fixed writing system."
            },
            {
                question: "Writing systems allow:",
                options: [
                    "Only speaking",
                    "Spoken language to be recorded, preserved, and transmitted across time and space",
                    "Only listening",
                    "Only pronunciation"
                ],
                correct: 1,
                explanation: "Writing systems allow spoken language to be recorded, preserved, and transmitted across time and space, enabling communication beyond face-to-face interaction."
            },
            {
                question: "Orthography design considers:",
                options: [
                    "Only sounds",
                    "Phonemic representation, ease of learning, cultural factors, and practical use",
                    "Only grammar",
                    "Only vocabulary"
                ],
                correct: 1,
                explanation: "Orthography design considers phonemic representation (how sounds map to symbols), ease of learning, cultural factors, and practical use."
            },
            {
                question: "A good orthography should:",
                options: [
                    "Only be complex",
                    "Be learnable, consistent, and represent the language accurately",
                    "Only be irregular",
                    "Only be difficult"
                ],
                correct: 1,
                explanation: "A good orthography should be learnable, consistent (one sound = one symbol ideally), and accurately represent the language's sound system."
            }
        ],
        "Important Terms": [
            {
                question: "A grapheme is:",
                options: [
                    "Only a sound",
                    "The smallest written unit (letters or letter combinations)",
                    "Only a word",
                    "Only a sentence"
                ],
                correct: 1,
                explanation: "A grapheme is the smallest written unit (letters or letter combinations like 'a', 'b', 'sh')."
            },
            {
                question: "Orthography covers:",
                options: [
                    "Only sounds",
                    "Which symbols are used, spelling rules, capitalization, punctuation",
                    "Only grammar",
                    "Only vocabulary"
                ],
                correct: 1,
                explanation: "Orthography covers which symbols are used, spelling rules, capitalization, punctuation, and spacing."
            },
            {
                question: "A phoneme is:",
                options: [
                    "Only a letter",
                    "The smallest meaningful sound unit in a language",
                    "Only a word",
                    "Only a sentence"
                ],
                correct: 1,
                explanation: "A phoneme is the smallest meaningful sound unit in a language (e.g., /p/ and /b/ are different phonemes in English)."
            },
            {
                question: "The relationship between graphemes and phonemes:",
                options: [
                    "Is always one-to-one",
                    "Varies - sometimes one grapheme = one phoneme, sometimes more complex",
                    "Is always complex",
                    "Never exists"
                ],
                correct: 1,
                explanation: "The relationship varies - in some languages one grapheme = one phoneme (ideal), but in others it's more complex (e.g., English 'th' = one phoneme)."
            },
            {
                question: "Spelling rules determine:",
                options: [
                    "Only pronunciation",
                    "How words are written, including letter combinations and patterns",
                    "Only meaning",
                    "Only grammar"
                ],
                correct: 1,
                explanation: "Spelling rules determine how words are written, including which letter combinations are allowed and how sounds are represented."
            }
        ],
        "Logographic Writing Systems": [
            {
                question: "In logographic systems:",
                options: [
                    "Symbols represent sounds",
                    "Each symbol represents a word or meaning",
                    "Only consonants are written",
                    "Only vowels are written"
                ],
                correct: 1,
                explanation: "In logographic systems, each symbol represents a word or meaning (e.g., Chinese characters)."
            },
            {
                question: "Logographic systems:",
                options: [
                    "Are easy to learn",
                    "Require thousands of symbols and are hard to learn",
                    "Only need a few symbols",
                    "Only represent sounds"
                ],
                correct: 1,
                explanation: "Logographic systems require thousands of symbols and are very hard to learn, but meaning is clear and works across dialects."
            },
            {
                question: "An advantage of logographic systems is:",
                options: [
                    "Only ease of learning",
                    "Meaning is clear and works across different dialects/pronunciations",
                    "Only simplicity",
                    "Only speed"
                ],
                correct: 1,
                explanation: "An advantage is that meaning is clear regardless of pronunciation, so speakers of different dialects can read the same text."
            },
            {
                question: "A disadvantage of logographic systems is:",
                options: [
                    "Only clarity",
                    "Requiring thousands of symbols makes them difficult to learn and use",
                    "Only simplicity",
                    "Only efficiency"
                ],
                correct: 1,
                explanation: "A major disadvantage is requiring thousands of symbols, making them very difficult to learn, memorize, and use efficiently."
            },
            {
                question: "Examples of logographic systems include:",
                options: [
                    "Only English",
                    "Chinese characters, ancient Egyptian hieroglyphs",
                    "Only alphabetic systems",
                    "Only syllabic systems"
                ],
                correct: 1,
                explanation: "Examples include Chinese characters (hanzi) and ancient Egyptian hieroglyphs, where symbols represent words or meanings."
            }
        ],
        "Syllabic Writing Systems": [
            {
                question: "In syllabic systems:",
                options: [
                    "Symbols represent words",
                    "Each symbol represents a syllable",
                    "Symbols represent sounds",
                    "Only consonants are written"
                ],
                correct: 1,
                explanation: "In syllabic systems, each symbol represents a syllable (e.g., Japanese Kana)."
            },
            {
                question: "Syllabic systems work well for languages with:",
                options: [
                    "Only complex syllables",
                    "Simple syllable structures (like CV - consonant-vowel)",
                    "Only complex words",
                    "Only irregular syllables"
                ],
                correct: 1,
                explanation: "Syllabic systems work well for languages with simple syllable structures (like CV - consonant-vowel patterns)."
            },
            {
                question: "Examples of syllabic systems include:",
                options: [
                    "Only English",
                    "Japanese Kana (Hiragana, Katakana), Cherokee syllabary",
                    "Only alphabetic systems",
                    "Only logographic systems"
                ],
                correct: 1,
                explanation: "Examples include Japanese Kana (Hiragana and Katakana) and the Cherokee syllabary, where each symbol represents a syllable."
            },
            {
                question: "Syllabic systems need:",
                options: [
                    "Only a few symbols",
                    "More symbols than alphabetic systems but fewer than logographic systems",
                    "Thousands of symbols",
                    "Only one symbol"
                ],
                correct: 1,
                explanation: "Syllabic systems need more symbols than alphabetic systems (maybe 50-100) but far fewer than logographic systems (thousands)."
            }
        ],
        "Alphabetic Writing Systems": [
            {
                question: "In alphabetic systems:",
                options: [
                    "Symbols represent words",
                    "Symbols represent individual sounds (phonemes)",
                    "Only syllables are written",
                    "Only meanings are written"
                ],
                correct: 1,
                explanation: "In alphabetic systems, symbols represent individual sounds (phonemes) - the most widely used system globally."
            },
            {
                question: "Alphabetic systems:",
                options: [
                    "Need many symbols",
                    "Need few symbols and are very flexible",
                    "Are hard to learn",
                    "Only work for one language"
                ],
                correct: 1,
                explanation: "Alphabetic systems need few symbols, are very flexible, and can represent many languages (e.g., Latin alphabet for English, Spanish, French)."
            },
            {
                question: "The ideal alphabetic system has:",
                options: [
                    "Many symbols per sound",
                    "One symbol per phoneme (one-to-one correspondence)",
                    "Only irregular mapping",
                    "Only complex mapping"
                ],
                correct: 1,
                explanation: "The ideal alphabetic system has one symbol per phoneme (one-to-one correspondence), though many languages have more complex mappings."
            },
            {
                question: "Examples of alphabetic systems include:",
                options: [
                    "Only Chinese",
                    "Latin alphabet (English, Spanish, French), Cyrillic (Russian), Greek alphabet",
                    "Only Japanese",
                    "Only logographic"
                ],
                correct: 1,
                explanation: "Examples include the Latin alphabet (used for English, Spanish, French), Cyrillic (Russian), and Greek alphabet."
            },
            {
                question: "Alphabetic systems are:",
                options: [
                    "Only used for one language",
                    "The most widely used writing system globally",
                    "Only used in Europe",
                    "Rarely used"
                ],
                correct: 1,
                explanation: "Alphabetic systems are the most widely used writing system globally, adapted for many different languages."
            }
        ],
        "Abjad Writing Systems": [
            {
                question: "Abjad systems:",
                options: [
                    "Write all sounds",
                    "Mainly write consonants; vowels are optional",
                    "Only write vowels",
                    "Only write syllables"
                ],
                correct: 1,
                explanation: "Abjad systems mainly write consonants; vowels are optional or missing (e.g., Arabic, Hebrew)."
            },
            {
                question: "In abjad systems, vowels are:",
                options: [
                    "Always written",
                    "Optional or indicated with diacritical marks",
                    "Never exist",
                    "Only written"
                ],
                correct: 1,
                explanation: "In abjad systems, vowels are optional or indicated with diacritical marks (small marks above/below consonants) when needed."
            },
            {
                question: "Examples of abjad systems include:",
                options: [
                    "Only English",
                    "Arabic, Hebrew",
                    "Only Chinese",
                    "Only Japanese"
                ],
                correct: 1,
                explanation: "Examples include Arabic and Hebrew scripts, where consonants are primary and vowels are often omitted or marked with diacritics."
            },
            {
                question: "Abjad systems work well for languages with:",
                options: [
                    "Only vowels",
                    "Consonant-heavy root systems where vowels carry less meaning",
                    "Only simple words",
                    "Only complex words"
                ],
                correct: 1,
                explanation: "Abjad systems work well for languages with consonant-heavy root systems (like Semitic languages) where vowels carry less meaning."
            }
        ],
        "Abugida Writing Systems": [
            {
                question: "In abugida systems:",
                options: [
                    "Consonants and vowels are separate",
                    "Consonants have a built-in vowel that can be changed",
                    "Only consonants are written",
                    "Only vowels are written"
                ],
                correct: 1,
                explanation: "In abugida systems, consonants have a built-in vowel that can be changed with diacritical marks (e.g., Devanagari for Hindi)."
            },
            {
                question: "In abugida systems, to change the vowel:",
                options: [
                    "You write a new symbol",
                    "You add diacritical marks to modify the built-in vowel",
                    "You cannot change it",
                    "You delete the consonant"
                ],
                correct: 1,
                explanation: "To change the vowel in abugida systems, you add diacritical marks (small marks) to modify the consonant's built-in vowel."
            },
            {
                question: "Examples of abugida systems include:",
                options: [
                    "Only English",
                    "Devanagari (Hindi, Sanskrit), Ethiopic script",
                    "Only Arabic",
                    "Only Chinese"
                ],
                correct: 1,
                explanation: "Examples include Devanagari (used for Hindi, Sanskrit) and Ethiopic script, where consonants have built-in vowels."
            },
            {
                question: "Abugida systems are also called:",
                options: [
                    "Only alphabetic",
                    "Alphasyllabic or syllabic alphabets",
                    "Only logographic",
                    "Only abjad"
                ],
                correct: 1,
                explanation: "Abugida systems are also called alphasyllabic or syllabic alphabets because they combine features of alphabetic and syllabic systems."
            }
        ],
        "Featural Writing Systems": [
            {
                question: "In featural systems:",
                options: [
                    "Symbols are arbitrary",
                    "Symbols show how sounds are produced",
                    "Only meanings are shown",
                    "Only words are shown"
                ],
                correct: 1,
                explanation: "In featural systems, symbols show how sounds are produced (e.g., Korean Hangul - shapes reflect articulatory features)."
            },
            {
                question: "In featural systems, symbol shapes:",
                options: [
                    "Are completely arbitrary",
                    "Reflect articulatory features (how sounds are made)",
                    "Only show meaning",
                    "Only show grammar"
                ],
                correct: 1,
                explanation: "In featural systems, symbol shapes reflect articulatory features - the visual form suggests how the sound is produced."
            },
            {
                question: "The main example of a featural system is:",
                options: [
                    "Only English",
                    "Korean Hangul",
                    "Only Chinese",
                    "Only Arabic"
                ],
                correct: 1,
                explanation: "Korean Hangul is the main example of a featural system - the shapes of letters reflect how sounds are articulated (tongue position, etc.)."
            },
            {
                question: "Featural systems are:",
                options: [
                    "Very common",
                    "Rare - Korean Hangul is the main example",
                    "Only used in Europe",
                    "Only used in Asia"
                ],
                correct: 1,
                explanation: "Featural systems are rare - Korean Hangul is the main example of a writing system where symbol shapes reflect articulatory features."
            },
            {
                question: "An advantage of featural systems is:",
                options: [
                    "Only complexity",
                    "Symbols are logical and easier to learn because they reflect sound production",
                    "Only difficulty",
                    "Only arbitrariness"
                ],
                correct: 1,
                explanation: "An advantage is that symbols are logical and easier to learn because their shapes reflect how sounds are produced, making the system more intuitive."
            }
        ]
    },
    
    "LIN 209": {
        "The relationship between Linguistics and broadcasting": [
            {
                question: "Linguistics helps broadcasters understand:",
                options: [
                    "Only technology",
                    "Language variation, language change, pragmatics, discourse analysis",
                    "Only equipment",
                    "Only production"
                ],
                correct: 1,
                explanation: "Linguistics helps broadcasters understand language variation (dialects, accents), language change, pragmatics, discourse analysis, and sociolinguistics."
            },
            {
                question: "Broadcasting influences:",
                options: [
                    "Only technology",
                    "Language norms and standardization",
                    "Only equipment",
                    "Only production"
                ],
                correct: 1,
                explanation: "Broadcasting reaches mass audiences and influences language norms, making it a powerful force in language standardization and change."
            },
            {
                question: "Linguistics helps broadcasters with:",
                options: [
                    "Only equipment",
                    "Effective communication, audience analysis, language choice, and understanding language use",
                    "Only technology",
                    "Only production"
                ],
                correct: 1,
                explanation: "Linguistics helps broadcasters with effective communication, audience analysis, appropriate language choice, and understanding how language functions in different contexts."
            },
            {
                question: "Broadcasting and linguistics interact because:",
                options: [
                    "They are unrelated",
                    "Broadcasting uses language extensively, and linguistics studies how language works",
                    "Only technology matters",
                    "Only equipment matters"
                ],
                correct: 1,
                explanation: "They interact because broadcasting uses language extensively to communicate with audiences, and linguistics provides insights into how language works and how to use it effectively."
            },
            {
                question: "Sociolinguistics helps broadcasters understand:",
                options: [
                    "Only technology",
                    "Language variation across social groups, dialects, and how language reflects identity",
                    "Only equipment",
                    "Only production"
                ],
                correct: 1,
                explanation: "Sociolinguistics helps broadcasters understand language variation across social groups, dialects, accents, and how language reflects social identity and context."
            }
        ],
        "What is broadcasting": [
            {
                question: "Broadcasting is:",
                options: [
                    "Only radio",
                    "Distribution of audio or video content to dispersed audiences via electronic media",
                    "Only television",
                    "Only internet"
                ],
                correct: 1,
                explanation: "Broadcasting is the distribution of audio or video content to a dispersed audience via any electronic mass communications medium."
            },
            {
                question: "Broadcasting serves functions like:",
                options: [
                    "Only entertainment",
                    "Informing, educating, entertaining, and persuading",
                    "Only news",
                    "Only advertising"
                ],
                correct: 1,
                explanation: "Broadcasting serves multiple functions: informing (news), educating (documentaries), entertaining (shows), and persuading (advertising)."
            },
            {
                question: "Broadcasting is characterized by:",
                options: [
                    "Only small audiences",
                    "One-to-many communication reaching large, diverse, often anonymous audiences",
                    "Only personal communication",
                    "Only private communication"
                ],
                correct: 1,
                explanation: "Broadcasting is characterized by one-to-many communication, reaching large, diverse, and often anonymous audiences simultaneously."
            },
            {
                question: "Broadcasting uses:",
                options: [
                    "Only face-to-face communication",
                    "Electronic mass communications media (radio, TV, internet, streaming)",
                    "Only written communication",
                    "Only print media"
                ],
                correct: 1,
                explanation: "Broadcasting uses electronic mass communications media including radio, television, internet, streaming platforms, and mobile devices."
            },
            {
                question: "The term 'broadcasting' originally referred to:",
                options: [
                    "Only internet",
                    "Spreading seeds widely - now means spreading information widely",
                    "Only television",
                    "Only radio"
                ],
                correct: 1,
                explanation: "The term originally referred to spreading seeds widely in farming - now it means spreading information widely to mass audiences."
            }
        ],
        "Channels of communication": [
            {
                question: "Channels in broadcasting include:",
                options: [
                    "Only radio",
                    "Radio, television, internet, mobile platforms",
                    "Only television",
                    "Only internet"
                ],
                correct: 1,
                explanation: "Channels include: radio (audio-only), television (audio-visual), internet (websites, streaming, social media), and mobile platforms."
            },
            {
                question: "Radio broadcasting provides:",
                options: [
                    "Only visual content",
                    "Audio-only content, reaching audiences through sound",
                    "Only written content",
                    "Only images"
                ],
                correct: 1,
                explanation: "Radio broadcasting provides audio-only content, reaching audiences through sound, music, speech, and audio effects."
            },
            {
                question: "Television broadcasting provides:",
                options: [
                    "Only audio",
                    "Audio-visual content combining sound and images",
                    "Only text",
                    "Only audio"
                ],
                correct: 1,
                explanation: "Television broadcasting provides audio-visual content, combining sound and moving images to create a richer communication experience."
            },
            {
                question: "Internet broadcasting includes:",
                options: [
                    "Only websites",
                    "Websites, streaming platforms, podcasts, social media, video sharing",
                    "Only radio",
                    "Only television"
                ],
                correct: 1,
                explanation: "Internet broadcasting includes websites, streaming platforms (Netflix, YouTube), podcasts, social media, and video sharing platforms."
            },
            {
                question: "Mobile platforms enable:",
                options: [
                    "Only fixed location viewing",
                    "Portable, on-the-go access to broadcast content",
                    "Only desktop access",
                    "Only home viewing"
                ],
                correct: 1,
                explanation: "Mobile platforms (smartphones, tablets) enable portable, on-the-go access to broadcast content anytime, anywhere."
            }
        ],
        "Importance of broadcasting": [
            {
                question: "Broadcasting is crucial for:",
                options: [
                    "Only entertainment",
                    "Information dissemination, education, cultural preservation, social cohesion, democracy",
                    "Only news",
                    "Only advertising"
                ],
                correct: 1,
                explanation: "Broadcasting is crucial for information dissemination, education, cultural preservation, social cohesion, democracy, emergency communication, and globalization."
            },
            {
                question: "Broadcasting enables:",
                options: [
                    "Only local communication",
                    "Rapid information dissemination to large audiences across vast distances",
                    "Only personal communication",
                    "Only private communication"
                ],
                correct: 1,
                explanation: "Broadcasting enables rapid information dissemination to large audiences across vast distances, making it essential for news, education, and public awareness."
            },
            {
                question: "Broadcasting helps preserve:",
                options: [
                    "Only technology",
                    "Culture, language, traditions, and heritage through recorded content",
                    "Only equipment",
                    "Only production"
                ],
                correct: 1,
                explanation: "Broadcasting helps preserve culture, language, traditions, and heritage by recording and transmitting cultural content to future generations."
            },
            {
                question: "Broadcasting promotes social cohesion by:",
                options: [
                    "Only dividing people",
                    "Creating shared experiences, common knowledge, and cultural unity",
                    "Only isolating people",
                    "Only separating groups"
                ],
                correct: 1,
                explanation: "Broadcasting promotes social cohesion by creating shared experiences, common knowledge, and cultural unity across diverse populations."
            },
            {
                question: "Broadcasting supports democracy by:",
                options: [
                    "Only limiting information",
                    "Providing information, enabling public discourse, and holding power accountable",
                    "Only restricting access",
                    "Only controlling people"
                ],
                correct: 1,
                explanation: "Broadcasting supports democracy by providing information to citizens, enabling public discourse, and helping hold those in power accountable."
            },
            {
                question: "Broadcasting is essential for:",
                options: [
                    "Only entertainment",
                    "Emergency communication, public safety alerts, and crisis information",
                    "Only advertising",
                    "Only news"
                ],
                correct: 1,
                explanation: "Broadcasting is essential for emergency communication, public safety alerts, and disseminating critical information during crises and disasters."
            },
            {
                question: "Broadcasting facilitates globalization by:",
                options: [
                    "Only isolating cultures",
                    "Connecting people worldwide, sharing ideas, and promoting cross-cultural understanding",
                    "Only separating people",
                    "Only limiting communication"
                ],
                correct: 1,
                explanation: "Broadcasting facilitates globalization by connecting people worldwide, sharing ideas, cultures, and information, and promoting cross-cultural understanding."
            }
        ]
    },
    
    "YOR 201": {
        "Introduction to Yoruba phonetics": [
            {
                question: "Yoruba phonetics is primarily concerned with:",
                options: [
                    "Abstract sound patterns in the mind",
                    "Physical production and perception of Yoruba speech sounds",
                    "Writing conventions only",
                    "Translating Yoruba into English"
                ],
                correct: 1,
                explanation: "Phonetics focuses on how sounds are physically produced, transmitted, and perceived. Yoruba phonetics applies this to actual Yoruba speech, not just abstract patterns."
            },
            {
                question: "Which of the following best describes the goal of Yoruba phonetics?",
                options: [
                    "To prescribe correct spelling rules",
                    "To describe how Yoruba sounds are articulated and heard",
                    "To classify Yoruba proverbs",
                    "To study only written texts"
                ],
                correct: 1,
                explanation: "The goal of Yoruba phonetics is descriptive: to show how sounds are produced and perceived, providing a foundation for phonology and orthography."
            },
            {
                question: "In Yoruba phonetics, a 'segment' refers to:",
                options: [
                    "Any written letter in the alphabet",
                    "An individual sound unit such as a vowel or consonant",
                    "A full Yoruba sentence",
                    "Only tone marks"
                ],
                correct: 1,
                explanation: "A segment is a single sound unit (consonant or vowel). In Yoruba phonetics, segments combine with tone and syllable structure to form words."
            },
            {
                question: "Why is careful listening important in Yoruba phonetics?",
                options: [
                    "Because Yoruba has no written form",
                    "Because many contrasts depend on subtle differences in sound and tone",
                    "Because phonetics ignores actual speech",
                    "Because only spelling matters"
                ],
                correct: 1,
                explanation: "Yoruba has important contrasts in vowel quality, nasality, and tone. Careful listening is needed to identify and describe these accurately."
            },
            {
                question: "Yoruba phonetics is closely linked to:",
                options: [
                    "General phonetic theory only",
                    "Both general phonetic theory and specific Yoruba sound patterns",
                    "Only Yoruba literature",
                    "Only English phonology"
                ],
                correct: 1,
                explanation: "The course uses general phonetic concepts (articulatory, acoustic, auditory) to describe Yoruba-specific sound patterns."
            }
        ],
        "Yoruba vowel system": [
            {
                question: "Which of the following is a typical oral vowel in Yoruba?",
                options: [
                    "/i/",
                    "/y/",
                    "/ø/",
                    "/æ/"
                ],
                correct: 0,
                explanation: "Yoruba has vowels like /i, e, ɛ, a, ɔ, o, u/. Vowels such as /y, ø, æ/ do not belong to the standard Yoruba system."
            },
            {
                question: "Yoruba vowels are described using:",
                options: [
                    "Tongue height, tongue advancement, and lip rounding",
                    "Only loudness and duration",
                    "Hand gestures",
                    "Sentence position"
                ],
                correct: 0,
                explanation: "Like other languages, Yoruba vowels are classified by tongue height (high, mid, low), advancement (front, central, back), and lip rounding."
            },
            {
                question: "Advanced tongue root (ATR) harmony in Yoruba refers to:",
                options: [
                    "Vowels agreeing in length",
                    "Vowels agreeing in tongue root position within a word",
                    "Consonants agreeing in place of articulation",
                    "Syllables agreeing in tone"
                ],
                correct: 1,
                explanation: "ATR harmony describes how vowels in some Yoruba dialects must match in tongue root position, affecting which vowels can co-occur in a word."
            },
            {
                question: "Minimal pairs like 'bi' and 'bì' show that in Yoruba:",
                options: [
                    "Vowel quality is irrelevant",
                    "Vowel quality and tone can both create meaning contrasts",
                    "Only consonants matter",
                    "Spelling is more important than sound"
                ],
                correct: 1,
                explanation: "Changes in vowel quality or tone can create different meanings in Yoruba, so both are crucial in phonetic description."
            },
            {
                question: "In phonetic transcription, Yoruba vowels are represented:",
                options: [
                    "With IPA symbols that show their exact quality",
                    "With any convenient English letters",
                    "Only with tone marks",
                    "Without reference to pronunciation"
                ],
                correct: 0,
                explanation: "IPA symbols are used to represent the precise quality of Yoruba vowels, sometimes differing from ordinary orthography."
            }
        ],
        "Yoruba consonant system": [
            {
                question: "Which of the following consonants is characteristic of Yoruba?",
                options: [
                    "/kp/",
                    "/ʒ/",
                    "/θ/",
                    "/ð/"
                ],
                correct: 0,
                explanation: "Yoruba has labial‑velar stops /kp/ and /gb/, which are not found in many European languages."
            },
            {
                question: "Classifying Yoruba consonants involves describing their:",
                options: [
                    "Place and manner of articulation, and voicing",
                    "Colour and size",
                    "Spelling and frequency",
                    "Position on the page"
                ],
                correct: 0,
                explanation: "Consonants are classified by place (bilabial, alveolar, etc.), manner (stop, nasal, etc.), and voicing (voiced vs voiceless)."
            },
            {
                question: "Nasals in Yoruba can occur:",
                options: [
                    "Only at the beginning of words",
                    "As independent segments and as part of prenasalised clusters",
                    "Only word-finally",
                    "Only in borrowed words"
                ],
                correct: 1,
                explanation: "Yoruba has independent nasal consonants and prenasalised segments, which are important for accurate phonetic description."
            },
            {
                question: "The distribution of Yoruba consonants is constrained by:",
                options: [
                    "Syllable structure and neighbouring vowels",
                    "Page layout",
                    "Choice of font",
                    "Only semantic factors"
                ],
                correct: 0,
                explanation: "Consonant distribution is shaped by preferred CV syllable structure and the influence of surrounding vowels and nasality."
            },
            {
                question: "Labial‑velar stops like /kp/ and /gb/ are produced by:",
                options: [
                    "Using only the lips",
                    "Simultaneous closure at the lips and the velum",
                    "Only the tongue tip",
                    "Only the glottis"
                ],
                correct: 1,
                explanation: "These sounds involve a double articulation: one at the lips and one at the soft palate, giving them their special quality."
            }
        ],
        "Tone in Yoruba": [
            {
                question: "Yoruba is described as a tone language because:",
                options: [
                    "It is spoken musically",
                    "Pitch differences can change word meaning",
                    "It has many consonants",
                    "It has long words"
                ],
                correct: 1,
                explanation: "In Yoruba, words that are segmentally identical can differ in meaning solely because of pitch (tone) patterns."
            },
            {
                question: "The basic tonal system of Yoruba is usually analysed as:",
                options: [
                    "Two tones: high and low",
                    "Three tones: High, Mid, Low",
                    "Four tones",
                    "No tones"
                ],
                correct: 1,
                explanation: "Standard descriptions posit three level tones in Yoruba: High (H), Mid (M), and Low (L)."
            },
            {
                question: "Downstep in Yoruba refers to:",
                options: [
                    "A sudden drop from High to Low tone",
                    "A lowered High tone that follows another High tone",
                    "Rising tone from Low to High",
                    "Tone on borrowed words only"
                ],
                correct: 1,
                explanation: "Downstep is when a High tone is realised at a lower pitch than a preceding High, often due to a floating Low tone."
            },
            {
                question: "Tone sandhi in Yoruba describes:",
                options: [
                    "Random pitch changes",
                    "Systematic tone changes in connected speech",
                    "Only musical intonation",
                    "Stress placement"
                ],
                correct: 1,
                explanation: "Tone sandhi covers regular tonal alternations that occur when words are combined in phrases and sentences."
            },
            {
                question: "Marking tone in teaching texts is important because:",
                options: [
                    "Tone has no effect on meaning",
                    "Tone helps learners avoid confusing words with different meanings",
                    "It decorates the page",
                    "It replaces vowel letters"
                ],
                correct: 1,
                explanation: "Tone marks guide learners so that they pronounce and interpret Yoruba words correctly, especially in minimal pairs."
            }
        ],
        "Syllable structure and phonotactics in Yoruba": [
            {
                question: "The most common syllable structure in Yoruba is:",
                options: [
                    "CVC with many clusters",
                    "Simple CV syllables",
                    "VCC",
                    "Only consonants"
                ],
                correct: 1,
                explanation: "Yoruba strongly favours simple CV syllables, with very restricted consonant clusters."
            },
            {
                question: "Phonotactics in Yoruba refers to:",
                options: [
                    "Rules of sentence order",
                    "Allowed combinations of sounds within syllables and words",
                    "Rules for translating texts",
                    "Rules of handwriting"
                ],
                correct: 1,
                explanation: "Phonotactic rules specify which sound combinations are permitted and how borrowed words are adapted."
            },
            {
                question: "Borrowed words with complex clusters are often adapted into Yoruba by:",
                options: [
                    "Deleting all consonants",
                    "Inserting vowels to break up clusters",
                    "Removing all vowels",
                    "Leaving the cluster unchanged"
                ],
                correct: 1,
                explanation: "Epenthetic vowels are frequently inserted to fit Yoruba CV patterns, e.g., 'school' becoming something like 'súkùùlù'."
            },
            {
                question: "Knowledge of syllable structure is important for:",
                options: [
                    "Accurate phonetic transcription and later phonological analysis",
                    "Decorating exercise books",
                    "Choosing handwriting style",
                    "Ignoring tone"
                ],
                correct: 0,
                explanation: "Understanding allowed syllable shapes helps students transcribe words correctly and analyse sound patterns."
            },
            {
                question: "Yoruba generally avoids:",
                options: [
                    "Word‑initial vowels",
                    "Complex word‑final consonant clusters",
                    "CV syllables",
                    "Use of tone"
                ],
                correct: 1,
                explanation: "Complex clusters, especially at the ends of words, are rare and typically simplified to fit the preferred CV pattern."
            }
        ],
        "Phonetic transcription of Yoruba words": [
            {
                question: "Phonetic transcription of Yoruba words aims to:",
                options: [
                    "Represent actual pronunciation accurately using IPA",
                    "Copy ordinary spelling exactly",
                    "Ignore vowel quality and tone",
                    "Replace Yoruba with English"
                ],
                correct: 0,
                explanation: "Phonetic transcription uses IPA to show details of pronunciation, including vowel quality, nasality, length, and tone."
            },
            {
                question: "One difference between Yoruba orthography and phonetic transcription is that:",
                options: [
                    "Orthography never marks tone",
                    "Transcription can show fine details like nasalisation and vowel quality",
                    "Transcription uses fewer symbols",
                    "Orthography is always more precise"
                ],
                correct: 1,
                explanation: "Phonetic transcription is designed to be phonetically precise, including distinctions that ordinary spelling may not show consistently."
            },
            {
                question: "When moving from spelling to IPA, students must:",
                options: [
                    "Ignore tone and stress",
                    "Pay attention to actual sound patterns, not just letters",
                    "Translate into English first",
                    "Invent new symbols"
                ],
                correct: 1,
                explanation: "Accurate transcription depends on listening to real pronunciation and knowing how letters map onto sounds and tones."
            },
            {
                question: "Practice with Yoruba phonetic transcription helps students to:",
                options: [
                    "Memorise spelling only",
                    "Develop listening skills and consistency in analysing sounds",
                    "Avoid learning IPA",
                    "Ignore phonological processes"
                ],
                correct: 1,
                explanation: "Regular transcription practice strengthens listening ability and prepares students for advanced phonological analysis."
            },
            {
                question: "In narrow transcription of Yoruba, a transcriber may indicate:",
                options: [
                    "Only consonants",
                    "Details such as nasalisation, length, and subtle vowel quality differences",
                    "Only punctuation",
                    "Only word boundaries"
                ],
                correct: 1,
                explanation: "Narrow transcription includes fine phonetic details that go beyond broad phonemic representation."
            }
        ]
    },
    
    "YOR 203": {
        "Àkópọ̀ Kọ́ọ̀sì": [
            {
                question: "Kí ni ètè pàtàkì kọ́ọ̀sì YOR 203?",
                options: [
                    "Kí akẹ́kọ̀ọ́ máa sọ Gẹ̀ẹ́sì dáadáa",
                    "Kí akẹ́kọ̀ọ́ ní ìmọ̀ jinlẹ̀ ní àkọsílẹ̀, ìkọ̀wé àti kíkà Yorùbá",
                    "Kí akẹ́kọ̀ọ́ kọ́ amúlétutù",
                    "Kí akẹ́kọ̀ọ́ máa ka ìwé Látìn"
                ],
                correct: 1,
                explanation: "Kọ́ọ̀sì YOR 203 ń dojú kọ ìmúlò àkọsílẹ̀ Yorùbá, ìkọ̀wé onímọ̀ àti kíkà ìtàn àti àpilẹ̀kọ pẹ̀lú ìtúpalẹ̀ jinlẹ̀."
            },
            {
                question: "Gẹ́gẹ́ bí àkọsílẹ̀ kóọ̀sì, àwọn akẹ́kọ̀ọ́ gbọ́dọ̀:",
                options: [
                    "Kọ́ láti ka ìwé Yorùbá láì túmọ̀ ohunkóhun",
                    "Ni agbára láti kọ́, ṣe àtúnṣe, àti ka ìwé Yorùbá onímọ̀",
                    "Kó dá lórí kíkà ìwé Gẹ̀ẹ́sì nìkan",
                    "Má ṣe àtúnṣe aṣiṣe gírámà rárá"
                ],
                correct: 1,
                explanation: "Àfojúsùn ni kí akẹ́kọ̀ọ́ lè kọ́ àti ka Yorùbá ní ipele onímọ̀, kí wọn sì lè ṣe àtúnṣe ìkọ̀wé tí wọ́n kọ tàbí tí ẹlòmíràn kọ."
            },
            {
                question: "Ọ̀kan lára ohun tí a fojú kóọ̀sì YOR 203 kàn ni:",
                options: [
                    "Ìmúlò Yorùbá nínú fíìmù pẹ̀lú àwòrán",
                    "Ìdàgbàsókè ìkọ̀wé ìjíròrò onímọ̀ ní Yorùbá",
                    "Ìmúlò ètò kọ̀mpútà tuntun",
                    "Ìtàn àwon orílẹ̀-èdè míì"
                ],
                correct: 1,
                explanation: "Kọ́ọ̀sì náà fẹ́ kí akẹ́kọ̀ọ́ lè lo Yorùbá gẹ́gẹ́ bí èdè ìjíròrò onímọ̀ ní àwùjọ, ìwé ìmọ̀ àti iṣẹ́ àgbá."
            },
            {
                question: "Ìpele tí a ń retí kúrò lọ́dọ akẹ́kọ̀ọ́ YOR 203 ni:",
                options: [
                    "Pé kí wọ́n mọ àwọn ọ̀rọ̀ ojoojúmọ́ díẹ̀",
                    "Pé kí wọ́n lè kọ́ àti ka Yorùbá ní ipele ilé-ẹ̀kọ́ gíga",
                    "Pé kí wọ́n máa sọ èdè míì",
                    "Pé kí wọ́n má ní kíkọ́ rárá"
                ],
                correct: 1,
                explanation: "Kọ́ọ̀sì náà ń fọkàn tán pé akẹ́kọ̀ọ́ lè lo Yorùbá ní ipele ilé-ẹ̀kọ́ gíga fún ìwádìí, ìkọ̀wé, àti iṣẹ́."
            }
        ],
        "Àkọsílẹ̀ Yorùbá àti àfihàn àmì-òòrò": [
            {
                question: "Nínú àkọsílẹ̀ Yorùbá, anfààní lílo àmì‑òòrò tó bófin mu ni:",
                options: [
                    "Kí ìwé mọ́ lẹ́wà gan-an",
                    "Kí ìtumọ̀ tóónù, fawẹ́lì àti gírámà lè hàn kedere",
                    "Kí a lè dín iye ọ̀rọ̀ kù",
                    "Kí a lè yọ gbogbo tónù kúrò"
                ],
                correct: 1,
                explanation: "Àmì‑òòrò jẹ́ kókó fún fífi iyatọ̀ tónù, fawẹ́lì àti ìdálẹ́jú gírámà hàn kí ìtumọ̀ má bàjẹ́."
            },
            {
                question: "Àwọn àmì gígùn àti àmì ìdínkù nínú Yorùbá:",
                options: [
                    "Kì í ṣe pàtàkì fún ìtumọ̀",
                    "Ṣe ìfihàn ìyàtọ̀ tónù gíga àti kékeré",
                    "Jẹ́ àṣekágba àwòrán lasán",
                    "Ṣe aṣojú ìpinnu onkọ̀wé"
                ],
                correct: 1,
                explanation: "Àmì gígùn àti àmì ìdínkù ń ran wa lọ́wọ́ láti mọ tónù gíga tàbí kékèké, tó ṣe pàtàkì fún ìtumọ̀ ọ̀rọ̀."
            },
            {
                question: "Láti yà ìkọ̀wé onímọ̀ sọ́tọ̀ kúrò nínú èdè ojoojúmọ́, akẹ́kọ̀ọ́ gbọ́dọ̀:",
                options: [
                    "Lo èdè ìròyìn lasán",
                    "Tẹ̀lé ìlànà gírámà, tónù, àti àtọka àsọyé tó kedere",
                    "Kó yé ìtumọ̀ kankan",
                    "Má fi àmì‑òòrò kankan sílẹ̀"
                ],
                correct: 1,
                explanation: "Ìkọ̀wé onímọ̀ ní Yorùbá fẹ́ ìlànà gírámà, tónù àti àtúpalẹ̀ ọrọ̀ tó muna jù ti èdè ojoojúmọ́ lọ."
            },
            {
                question: "Ìmúlò àmì tóónù tó péye ń ran wa lọ́wọ́ láti:",
                options: [
                    "Dín ìwé kù",
                    "Yago fún ìdìbàjẹ́ ìtumọ̀ nínú ọ̀rọ̀ tó jọ ara wọn",
                    "Ṣe ìtàn ìtàn àròsọ",
                    "Yọ gbogbo ìbeèrè kúrò"
                ],
                correct: 1,
                explanation: "Ọ̀pọ̀ ọ̀rọ̀ Yorùbá jọ ara wọn ní fawẹ́lì àti końsónántì, tónù ló sì ń yà wọn. Àmì tónù tó dáa yago fún ìdàrú."
            }
        ],
        "Ìkọ̀wé ìtàn àti àpilẹ̀kọ ní èdè Yorùbá": [
            {
                question: "Ìkọ̀wé ìtàn rere ní Yorùbá gbọ́dọ̀ ní:",
                options: [
                    "Ìbẹ̀rẹ̀, àárín àti ìparí tó ṣòro láti yà",
                    "Ìbẹ̀rẹ̀, àárín àti ìparí tó hàn kedere",
                    "Ìpín kan ṣoṣo",
                    "Àìní akopọ̀"
                ],
                correct: 1,
                explanation: "Ìtàn onímọ̀ ní ìbẹ̀rẹ̀, àárín àti ìparí tó hàn gbangba, kí olùkà lè tọ́ ìrìnàjò ìtàn náà."
            },
            {
                question: "Nípa àpilẹ̀kọ ìtúpalẹ̀, akẹ́kọ̀ọ́ gbọ́dọ̀:",
                options: [
                    "Ṣàlàyé ìtàn nìkan láì ṣe ìtúpalẹ̀",
                    "Ṣe àfihàn àbá lórí, àlàyé, àti àpẹẹrẹ tó dá lórí ìrònú",
                    "Ko gbogbo ìtàn sílẹ̀ láì mọ àfojúsùn",
                    "Kó yá ìtàn sọ́tọ̀ kúrò ní gírámà"
                ],
                correct: 1,
                explanation: "Àpilẹ̀kọ ìtúpalẹ̀ ń bẹ̀rẹ̀ láti inú ìrònú, ó sì ń fi àbá, àlàyé àti àpẹẹrẹ hàn ní ìtọ́sọ́nà."
            },
            {
                question: "Ìlànà ìpín (paragraph) tó dára yẹ kí ó:",
                options: [
                    "Ni ọ̀rọ̀ jinlẹ̀ púpọ̀ láì sí ìlànà",
                    "Dárú pọ̀ láì sí àkòrí kan ṣoṣo",
                    "Ní àkòrí kan pẹ̀lú àwọn gbolohun tó ń ṣàlàyé e",
                    "Má ní àkòrí kankan"
                ],
                correct: 2,
                explanation: "Ìpín kọọkan gbọ́dọ̀ dojú kọ àkòrí kan, àwọn gbolohun inú rẹ̀ sì ń ṣàlàyé àkòrí yẹn."
            },
            {
                question: "Ìkọ̀wé ìròyìn àkọsílẹ̀ yàtọ̀ sí èdè ojoojúmọ́ nítorí pé:",
                options: [
                    "Ó ń lo ìṣe gírámà àti àtúpalẹ̀ tó muna",
                    "Ó kì í ṣàlàyé ohunkóhun",
                    "Ó ń lo òwe púpọ̀ ju ìmọ̀ lọ",
                    "Kò ní àfojúsùn olùkà kankan"
                ],
                correct: 0,
                explanation: "Ìròyìn onímọ̀ gbọdọ̀ tẹ̀lé ìlànà gírámà, àtọkasi orísun àti ìmúlò àfihàn ìmọ̀ tó mọ́lára."
            }
        ],
        "Ìmúlò ìtúmọ̀ àti kíkà ìwé Yorùbá": [
            {
                question: "Ní kíkà ìwé Yorùbá onímọ̀, ohun tí akẹ́kọ̀ọ́ kọ́kọ́ yẹ kí ó wá ni:",
                options: [
                    "Àwọn àwòrán",
                    "Àkọ́lé àkọlé àti àfojúsùn onkọ̀wé",
                    "Ìpinnu olùkà",
                    "Ìròyìn tita ìwé"
                ],
                correct: 1,
                explanation: "Ìmọ̀ àkọlé àti àfojúsùn onkọ̀wé ń ran akẹ́kọ̀ọ́ lọ́wọ́ láti lóye bí ìtúpalẹ̀ tó kù ṣe yẹ kí ó lọ."
            },
            {
                question: "Ìmúlò ìbéèrè ìtúmọ̀ tó jinlẹ̀ nínú kíkà:",
                options: [
                    "Ń ran akẹ́kọ̀ọ́ lọ́wọ́ láti wá ìtumọ̀ gangan àti ìfojúsọ́nà onkọ̀wé",
                    "Kò ní ìtópinpin kankan",
                    "Jẹ́ àṣekágba kọ́míkì",
                    "Kàn jẹ́ ayẹyẹ àrọ̀"
                ],
                correct: 0,
                explanation: "Ìbéèrè ìtúmọ̀ tó jinlẹ̀ ń jẹ́ kí akẹ́kọ̀ọ́ mọ ohun tí onkọ̀wé fẹ́ sọ, ìdí tí ó fi sọ ó, àti ìtàn àbá tó wà lẹ́yìn."
            },
            {
                question: "Ìtúpalẹ̀ kíkà ìwé Yorùbá tún ń ran akẹ́kọ̀ọ́ lọ́wọ́ láti:",
                options: [
                    "Ṣe àfikún ìmọ̀ wọn nípa gírámà àti àkópọ̀ ìtàn",
                    "Parun ìtàn náà",
                    "Kọ gbogbo gbolohun sílẹ̀ láì mọ ìtumọ̀",
                    "Ṣe àfikún àwọn àṣìṣe"
                ],
                correct: 0,
                explanation: "Nípa ìtúpalẹ̀ kíkà, akẹ́kọ̀ọ́ ń rí bí gírámà, akopọ̀ ìtàn àti tónù ṣe ń ṣiṣẹ́ pọ̀ láti dá ìtumọ̀ sílẹ̀."
            }
        ]
    },
    
    "GST 201": {
        "What is philosophy?": [
            {
                question: "Philosophy is best described as:",
                options: [
                    "A collection of personal opinions",
                    "Systematic and critical reflection on fundamental questions of life",
                    "Laboratory science only",
                    "Religious doctrine"
                ],
                correct: 1,
                explanation: "Philosophy uses disciplined reasoning and analysis to examine questions about reality, knowledge, value, and human existence."
            },
            {
                question: "One way philosophy differs from common‑sense thinking is that it:",
                options: [
                    "Rejects all reasoning",
                    "Requires clear arguments and justification for claims",
                    "Relies only on tradition",
                    "Avoids abstract questions"
                ],
                correct: 1,
                explanation: "While common sense may rest on habit, philosophy demands explicit reasons and logical support for beliefs."
            },
            {
                question: "Philosophical questions are often about:",
                options: [
                    "Everyday gossip",
                    "Ultimate issues such as reality, knowledge, and morality",
                    "Sports scores",
                    "Weather patterns"
                ],
                correct: 1,
                explanation: "Philosophy focuses on deep, general questions that underlie many areas of human thought and practice."
            },
            {
                question: "Philosophy relates to science in that it:",
                options: [
                    "Ignores scientific findings",
                    "Examines assumptions, concepts, and methods used in the sciences",
                    "Replaces experiments entirely",
                    "Only repeats scientific results"
                ],
                correct: 1,
                explanation: "Philosophy of science analyses the concepts and reasoning that structure scientific inquiry."
            },
            {
                question: "A key feature of philosophical activity is:",
                options: [
                    "Uncritical acceptance of authority",
                    "Careful reasoning and readiness to evaluate assumptions",
                    "Avoidance of debate",
                    "Reliance on emotion alone"
                ],
                correct: 1,
                explanation: "Philosophy encourages critical thinking, questioning of assumptions, and rational discussion of alternatives."
            }
        ],
        "Branches of philosophy": [
            {
                question: "Metaphysics is the branch of philosophy that studies:",
                options: [
                    "Moral values",
                    "The nature of reality and existence",
                    "Rules of correct reasoning",
                    "Beauty and art"
                ],
                correct: 1,
                explanation: "Metaphysics asks what kinds of things exist and how they are related, including questions about mind, matter, and identity."
            },
            {
                question: "Epistemology is primarily concerned with:",
                options: [
                    "What we ought to do",
                    "What knowledge is and how we know",
                    "How to create art",
                    "Political organisation"
                ],
                correct: 1,
                explanation: "Epistemology investigates the nature, sources, and limits of knowledge and justified belief."
            },
            {
                question: "Ethics as a branch of philosophy deals with:",
                options: [
                    "Sentence structure",
                    "Questions of right and wrong, good and bad",
                    "Logical form of arguments only",
                    "Physical health"
                ],
                correct: 1,
                explanation: "Ethics examines moral values, principles, and theories that guide human conduct."
            },
            {
                question: "Social and political philosophy studies:",
                options: [
                    "Only natural science",
                    "Justice, rights, authority, and the state",
                    "Only religious rituals",
                    "Grammar rules"
                ],
                correct: 1,
                explanation: "This branch explores how societies should be organised and how power and resources ought to be distributed."
            },
            {
                question: "Logic, as a philosophical branch, focuses on:",
                options: [
                    "Persuasion by any means",
                    "The principles of valid reasoning and argument",
                    "Historical events only",
                    "Personal preferences"
                ],
                correct: 1,
                explanation: "Logic studies how arguments can be structured so that the conclusion follows from the premises."
            }
        ],
        "Epistemology: knowledge and belief": [
            {
                question: "A traditional analysis of knowledge sees it as:",
                options: [
                    "Any belief one holds strongly",
                    "Justified true belief",
                    "A lucky guess",
                    "Only what experts say"
                ],
                correct: 1,
                explanation: "Classically, knowledge is understood as a belief that is true and supported by adequate justification."
            },
            {
                question: "Which of the following is typically NOT considered a standard source of knowledge?",
                options: [
                    "Perception",
                    "Memory",
                    "Testimony",
                    "Horoscopes"
                ],
                correct: 3,
                explanation: "Philosophers usually list perception, memory, testimony, and reason as key sources of knowledge; horoscopes lack rational justification."
            },
            {
                question: "Sceptical arguments in epistemology are important because they:",
                options: [
                    "Encourage us to abandon all inquiry",
                    "Force us to examine how strong our reasons for believing really are",
                    "Show that knowledge is impossible in every case",
                    "Replace science with superstition"
                ],
                correct: 1,
                explanation: "Sceptical challenges push us to clarify what counts as good evidence and reliable methods of belief‑formation."
            },
            {
                question: "The difference between knowledge and mere opinion is that knowledge:",
                options: [
                    "Can never be questioned",
                    "Is supported by good reasons and evidence",
                    "Is always popular",
                    "Depends only on feelings"
                ],
                correct: 1,
                explanation: "Opinions may be weak or baseless, but knowledge is tied to justification and objective support."
            },
            {
                question: "In academic work, epistemology is relevant because it:",
                options: [
                    "Discourages research",
                    "Helps students assess sources, evidence, and reliability",
                    "Ignores questions of truth",
                    "Replaces study with faith"
                ],
                correct: 1,
                explanation: "Understanding epistemology guides students in evaluating readings, arguments, and data critically."
            }
        ],
        "Metaphysics and the nature of reality": [
            {
                question: "The mind–body problem in metaphysics asks:",
                options: [
                    "How the brain is structured anatomically",
                    "How mental states are related to physical states",
                    "Why people dream",
                    "How to cure diseases"
                ],
                correct: 1,
                explanation: "The mind–body problem concerns whether the mind is distinct from the body and how they interact."
            },
            {
                question: "Materialism as a metaphysical view holds that:",
                options: [
                    "Only spiritual beings exist",
                    "Everything that exists is ultimately physical in nature",
                    "Only numbers exist",
                    "Nothing exists at all"
                ],
                correct: 1,
                explanation: "Materialists argue that all phenomena, including mental states, are grounded in physical reality."
            },
            {
                question: "Questions about identity over time ask:",
                options: [
                    "Why people change clothes",
                    "In what sense a person or object remains the same despite change",
                    "Why there are many people",
                    "How to get rich quickly"
                ],
                correct: 1,
                explanation: "Metaphysicians study how something can undergo change yet still be counted as the same individual."
            },
            {
                question: "Abstract objects like numbers raise metaphysical questions about:",
                options: [
                    "Whether such non‑spatial, non‑temporal things really exist",
                    "How to count money",
                    "The best way to teach arithmetic",
                    "Weather prediction"
                ],
                correct: 0,
                explanation: "Philosophers ask whether mathematical entities are real objects or just useful fictions."
            }
        ],
        "Ethics and moral reasoning": [
            {
                question: "Utilitarianism is an ethical theory that judges actions by:",
                options: [
                    "Their conformity to tradition",
                    "Their consequences for overall happiness or welfare",
                    "The social status of the agent",
                    "Religious rituals"
                ],
                correct: 1,
                explanation: "Utilitarianism holds that the morally right action is the one that maximises overall good or utility."
            },
            {
                question: "Deontological ethics emphasises:",
                options: [
                    "Only results",
                    "Duties, rules, and respect for persons",
                    "Personal gain",
                    "Majority opinion"
                ],
                correct: 1,
                explanation: "Deontologists argue that some actions are right or wrong in themselves, regardless of consequences."
            },
            {
                question: "Virtue ethics focuses on:",
                options: [
                    "Single isolated acts only",
                    "The character and habits of the moral agent",
                    "Economic success",
                    "Legal punishment"
                ],
                correct: 1,
                explanation: "Virtue ethics asks what kind of person one should become, stressing traits like honesty and courage."
            },
            {
                question: "A descriptive statement in ethics is one that:",
                options: [
                    "Says what ought to be done",
                    "Reports facts without evaluation",
                    "Always praises actions",
                    "Always condemns actions"
                ],
                correct: 1,
                explanation: "Descriptive claims state how things are, whereas normative claims evaluate actions as right or wrong."
            },
            {
                question: "Good moral reasoning requires that we:",
                options: [
                    "Avoid giving reasons",
                    "Apply our principles consistently across similar cases",
                    "Rely only on emotion",
                    "Change views to please others"
                ],
                correct: 1,
                explanation: "Consistency is central to moral argument; we should treat similar cases in similar ways unless we have a relevant difference."
            }
        ],
        "Logic and critical thinking": [
            {
                question: "An argument in logic consists of:",
                options: [
                    "Only a conclusion",
                    "Premises offered as reasons for a conclusion",
                    "Random statements",
                    "Questions only"
                ],
                correct: 1,
                explanation: "An argument links premises (reasons) to a conclusion, aiming to show that the conclusion should be accepted."
            },
            {
                question: "A valid argument is one in which:",
                options: [
                    "The premises and conclusion are all true",
                    "If the premises are true, the conclusion must be true",
                    "The conclusion is popular",
                    "The premises are emotional"
                ],
                correct: 1,
                explanation: "Validity concerns logical form: true premises cannot lead to a false conclusion in a valid argument."
            },
            {
                question: "An ad hominem fallacy occurs when someone:",
                options: [
                    "Attacks the person instead of addressing their argument",
                    "Uses statistics",
                    "Gives many examples",
                    "Explains a concept clearly"
                ],
                correct: 0,
                explanation: "Ad hominem attacks focus on the character of the speaker rather than the content of their reasoning."
            },
            {
                question: "A straw man fallacy involves:",
                options: [
                    "Ignoring all arguments",
                    "Misrepresenting an opponent's view to make it easier to attack",
                    "Using technical terms",
                    "Repeating premises"
                ],
                correct: 1,
                explanation: "In a straw man, one distorts the original position into a weaker version and then refutes that instead."
            },
            {
                question: "Learning basic logic helps students to:",
                options: [
                    "Accept every claim they hear",
                    "Evaluate arguments, detect fallacies, and reason clearly",
                    "Avoid reading academic texts",
                    "Rely only on authority"
                ],
                correct: 1,
                explanation: "Logic and critical thinking strengthen students' ability to analyse arguments in their studies and everyday life."
            }
        ]
    },
    "GST 101": {
        "English Communication: Spoken and Written": [
            {
                question: "The main difference between spoken and written English is:",
                options: [
                    "Spoken English is always more correct",
                    "Spoken English is immediate with feedback; written English is permanent and formal",
                    "Written English is never used in academic settings",
                    "There is no difference between them"
                ],
                correct: 1,
                explanation: "Spoken English allows real-time feedback and uses tone/gestures; written English is permanent and requires clarity through words alone."
            },
            {
                question: "Which is a characteristic of formal written communication?",
                options: [
                    "Use of contractions",
                    "Informal vocabulary",
                    "Complete sentence structure with proper punctuation",
                    "Casual tone similar to conversation"
                ],
                correct: 2,
                explanation: "Formal written communication requires complete sentences, proper punctuation, and standard grammar conventions."
            },
            {
                question: "Effective communication in English requires:",
                options: [
                    "Speaking loudly",
                    "Using complicated words",
                    "Understanding audience, context, and purpose",
                    "Never asking for clarification"
                ],
                correct: 2,
                explanation: "Successful communication depends on tailoring message to audience, understanding the context, and being clear about your purpose."
            }
        ],
        "Grammar Fundamentals": [
            {
                question: "Which sentence demonstrates correct subject-verb agreement?",
                options: [
                    "The team are playing well",
                    "The team is playing well",
                    "She don't like ice cream",
                    "The students has completed the work"
                ],
                correct: 1,
                explanation: "'The team' is a singular collective noun, so 'is' (singular verb) is correct."
            },
            {
                question: "A complex sentence contains:",
                options: [
                    "Two independent clauses joined by 'and'",
                    "One independent clause and at least one dependent clause",
                    "Only dependent clauses",
                    "Multiple verbs in the same clause"
                ],
                correct: 1,
                explanation: "A complex sentence has an independent clause that can stand alone plus one or more dependent clauses."
            },
            {
                question: "Which verb tense is used for an action completed before another past action?",
                options: [
                    "Simple past",
                    "Present perfect",
                    "Past perfect",
                    "Future perfect"
                ],
                correct: 2,
                explanation: "Past perfect (had + past participle) shows an action completed before another past event."
            },
            {
                question: "In the sentence 'She quickly ran to the store,' what part of speech is 'quickly'?",
                options: [
                    "Adjective",
                    "Adverb",
                    "Preposition",
                    "Noun"
                ],
                correct: 1,
                explanation: "'Quickly' is an adverb modifying the verb 'ran,' describing how the action was performed."
            }
        ],
        "Vocabulary Development and Word Usage": [
            {
                question: "Synonyms are words that:",
                options: [
                    "Sound the same but have different meanings",
                    "Have similar meanings but different connotations",
                    "Are spelled the same but pronounced differently",
                    "Come from different languages"
                ],
                correct: 1,
                explanation: "Synonyms have similar meanings, though they may differ in connotation (emotional association) and context appropriateness."
            },
            {
                question: "The difference between 'their,' 'there,' and 'they're' is:",
                options: [
                    "There is no difference",
                    "They are all adverbs",
                    "Homophones with different meanings and uses",
                    "Different spellings of the same word"
                ],
                correct: 2,
                explanation: "These homophones sound alike but differ: 'their' (possessive), 'there' (location), 'they're' (they are)."
            },
            {
                question: "Connotation refers to:",
                options: [
                    "The spelling of a word",
                    "The emotional or cultural association of a word beyond its literal meaning",
                    "The pronunciation of a word",
                    "The origin of a word"
                ],
                correct: 1,
                explanation: "Connotation is the emotional tone and associations a word carries, different from its denotation (literal meaning)."
            }
        ],
        "Reading Comprehension and Analysis": [
            {
                question: "The main idea of a text is:",
                options: [
                    "The first sentence of the text",
                    "The central thought the author wants to communicate",
                    "A detailed fact from the text",
                    "The title of the text"
                ],
                correct: 1,
                explanation: "The main idea is the primary point or purpose the author presents, which may be stated or implied."
            },
            {
                question: "When reading critically, you should:",
                options: [
                    "Accept everything the author says",
                    "Question the author's purpose, credibility, and evidence",
                    "Only read the introduction",
                    "Ignore the author's point of view"
                ],
                correct: 1,
                explanation: "Critical reading involves evaluating the text, author's credibility, evidence provided, and identifying potential bias."
            },
            {
                question: "Supporting details in a text serve to:",
                options: [
                    "Confuse the reader",
                    "Replace the main idea",
                    "Explain, prove, or develop the main idea",
                    "Tell unrelated stories"
                ],
                correct: 2,
                explanation: "Supporting details provide evidence, examples, or explanations that develop and substantiate the main idea."
            }
        ],
        "Writing Skills and Composition": [
            {
                question: "A thesis statement should:",
                options: [
                    "Be vague and general",
                    "Ask questions instead of making claims",
                    "Present the main argument or purpose clearly and specifically",
                    "Be placed at the end of the essay"
                ],
                correct: 2,
                explanation: "A strong thesis statement clearly presents the main argument or purpose and is typically placed early in the essay."
            },
            {
                question: "Revising a first draft differs from editing because:",
                options: [
                    "They are the same process",
                    "Revising addresses content and organization; editing focuses on grammar and mechanics",
                    "Editing comes before revising",
                    "Revising is only for professional writers"
                ],
                correct: 1,
                explanation: "Revising improves overall content and structure; editing corrects grammar, spelling, and punctuation errors."
            },
            {
                question: "A paragraph should contain:",
                options: [
                    "A topic sentence only",
                    "Only supporting details",
                    "A topic sentence, supporting sentences, and a concluding sentence",
                    "Multiple unrelated ideas"
                ],
                correct: 2,
                explanation: "A well-structured paragraph has a topic sentence (main idea), supporting sentences (evidence/examples), and often a concluding sentence."
            }
        ],
        "Listening and Spoken English": [
            {
                question: "Effective listening requires:",
                options: [
                    "Simply hearing sounds",
                    "Waiting for your turn to speak",
                    "Active attention, comprehension, and response to understand both literal and implied meaning",
                    "Taking notes on everything"
                ],
                correct: 2,
                explanation: "Active listening involves focusing, understanding content, recognizing implied meaning, and responding appropriately."
            },
            {
                question: "Stress in spoken English refers to:",
                options: [
                    "Anxiety about speaking",
                    "Emphasis placed on certain syllables or words",
                    "Speaking too quickly",
                    "Using difficult vocabulary"
                ],
                correct: 1,
                explanation: "Stress involves emphasis on syllables or words that affects meaning—'REcord' (noun) vs. 're-CORD' (verb)."
            },
            {
                question: "Intonation in spoken English involves:",
                options: [
                    "Grammar rules",
                    "Correct pronunciation of individual sounds",
                    "Pitch patterns that convey emotion and intent in sentences",
                    "Speaking speed"
                ],
                correct: 2,
                explanation: "Intonation is the melody of speech—how pitch rises and falls to convey questions, emotion, and meaning."
            }
        ],
        "Punctuation and Mechanics": [
            {
                question: "An apostrophe is used for:",
                options: [
                    "Separating items in a list",
                    "Showing possession and forming contractions",
                    "Ending a sentence",
                    "Introducing a quote"
                ],
                correct: 1,
                explanation: "Apostrophes show possession ('the student's book') and form contractions ('don't' = 'do not')."
            },
            {
                question: "Which sentence uses commas correctly?",
                options: [
                    "The dog, cat and bird are playing.",
                    "She studied hard, went to bed early, and woke up refreshed.",
                    "I like ice cream, pizza and, cookies.",
                    "He was tired, but, he continued working."
                ],
                correct: 1,
                explanation: "Option B correctly uses Oxford commas and parallel structure in a series with proper punctuation."
            },
            {
                question: "Capitalization rules include capitalizing:",
                options: [
                    "All nouns in a sentence",
                    "Proper nouns and the first word of sentences",
                    "Only verbs",
                    "Random words for emphasis"
                ],
                correct: 1,
                explanation: "Proper nouns (names, places) and the first word of sentences are capitalized according to standard English conventions."
            }
        ],
        "Academic English Skills": [
            {
                question: "Paraphrasing means:",
                options: [
                    "Copying text word-for-word",
                    "Writing someone else's ideas in your own words while citing the source",
                    "Changing one word in a sentence",
                    "Avoiding reading the original source"
                ],
                correct: 1,
                explanation: "Paraphrasing restates ideas in your own words with different sentence structure but maintains the same meaning and requires citation."
            },
            {
                question: "Academic integrity requires:",
                options: [
                    "Never using other people's ideas",
                    "Properly citing sources and giving credit for borrowed ideas",
                    "Writing everything without any research",
                    "Using other people's work without acknowledgment"
                ],
                correct: 1,
                explanation: "Academic integrity involves honesty in scholarship—properly crediting sources through citations and quotations."
            },
            {
                question: "When synthesizing information from multiple sources, you should:",
                options: [
                    "Combine all sources without distinguishing them",
                    "Use only the first source you find",
                    "Integrate, compare, and evaluate information from different sources into your own analysis",
                    "Copy the source that agrees with your opinion"
                ],
                correct: 2,
                explanation: "Synthesis involves combining ideas from multiple sources, showing relationships between them, and developing original analysis."
            },
            {
                question: "In academic writing, formal tone is important because:",
                options: [
                    "It makes writing boring",
                    "It demonstrates professionalism, clarity, and respect for the audience",
                    "It prevents understanding",
                    "It is never necessary"
                ],
                correct: 1,
                explanation: "Formal tone in academic writing establishes credibility, maintains objectivity, and demonstrates proper scholarly communication."
            }
        ]
    },
    "GST 203": {
        "Definition and Scope of Government": [
            {
                question: "Government is best defined as:",
                options: [
                    "The military of a country",
                    "The system of organization and authority through which a political community exercises power and makes decisions",
                    "Only the legislative branch",
                    "The wealthy elite of a society"
                ],
                correct: 1,
                explanation: "Government is the formal system of authority and institutions through which collective decisions are made and power is exercised over a political community."
            },
            {
                question: "The scope of government encompasses:",
                options: [
                    "Only law enforcement",
                    "Legislative, executive, and judicial functions",
                    "Only taxation",
                    "International relations exclusively"
                ],
                correct: 1,
                explanation: "Government's scope includes law-making (legislative), enforcement (executive), dispute resolution (judicial), and service delivery."
            },
            {
                question: "Which is a primary purpose of government?",
                options: [
                    "Maximizing individual wealth",
                    "Maintaining order, security, and delivering public services",
                    "Controlling all economic activity",
                    "Eliminating social differences"
                ],
                correct: 1,
                explanation: "Core government functions include maintaining order and security, delivering public services, protecting rights, and pursuing collective goals."
            }
        ],
        "Types of Government Systems": [
            {
                question: "Which type of government concentrates power in a single individual?",
                options: [
                    "Democracy",
                    "Autocracy",
                    "Oligarchy",
                    "Monarchy (constitutional)"
                ],
                correct: 1,
                explanation: "Autocracy concentrates power in one person—such as a dictator or absolute monarch—without significant power-sharing."
            },
            {
                question: "In a democracy, political power is:",
                options: [
                    "Held by the military",
                    "Concentrated in wealthy families",
                    "Distributed among the people through elections and representation",
                    "Controlled by religious institutions"
                ],
                correct: 2,
                explanation: "Democracy distributes power among the people through elections, representation, and democratic institutions."
            },
            {
                question: "A federal system differs from a unitary system in that:",
                options: [
                    "Federal systems have no central authority",
                    "Federal systems distribute power among national and regional levels",
                    "Unitary systems are more democratic",
                    "They are identical in structure"
                ],
                correct: 1,
                explanation: "Federal systems divide power between national and subnational governments; unitary systems concentrate power at the national level."
            },
            {
                question: "In a parliamentary system, the executive is:",
                options: [
                    "Completely separate from the legislature",
                    "Drawn from and accountable to the legislature",
                    "Always a military leader",
                    "Unaffected by legislative actions"
                ],
                correct: 1,
                explanation: "Parliamentary systems integrate executive and legislative functions—the executive is drawn from and depends on legislative support."
            }
        ],
        "Functions and Roles of Government": [
            {
                question: "Which function is unique to government?",
                options: [
                    "Providing entertainment",
                    "Creating binding collective decisions with enforcement power",
                    "Maximizing profits",
                    "Managing private businesses"
                ],
                correct: 1,
                explanation: "Government's unique function is creating and enforcing binding collective decisions that apply to the entire political community."
            },
            {
                question: "Public service provision by government includes:",
                options: [
                    "Only police services",
                    "Only education",
                    "Education, health, infrastructure, and welfare",
                    "No services—only private provision"
                ],
                correct: 2,
                explanation: "Government provides essential public services including education, healthcare, infrastructure, welfare, and many others for social well-being."
            },
            {
                question: "Economic regulation by government serves to:",
                options: [
                    "Eliminate all markets",
                    "Give government complete ownership of business",
                    "Manage markets, trade, labor standards, and resource allocation",
                    "Prevent any economic activity"
                ],
                correct: 2,
                explanation: "Economic regulation involves managing market functioning, protecting workers and consumers, and ensuring fair competition."
            }
        ],
        "Society: Concepts and Structure": [
            {
                question: "Society is distinguished from the state because:",
                options: [
                    "Society and state are the same thing",
                    "State is political organization while society encompasses all social relationships and institutions",
                    "Society has no government",
                    "Only the state has culture"
                ],
                correct: 1,
                explanation: "The state is political/governmental; society is the broader social realm including families, groups, associations, and communities."
            },
            {
                question: "Social stratification refers to:",
                options: [
                    "The number of social groups",
                    "Unequal distribution of wealth, status, and power in society",
                    "The study of language",
                    "Family organization only"
                ],
                correct: 1,
                explanation: "Social stratification is the hierarchical arrangement of social positions based on differential distribution of resources and rewards."
            },
            {
                question: "Which is an example of a social institution?",
                options: [
                    "A specific school building",
                    "One person's family",
                    "The family as a system for reproduction and socialization",
                    "A particular church"
                ],
                correct: 2,
                explanation: "Social institutions are established systems of social practice organized around particular functions—like family, religion, or education."
            }
        ],
        "Social Institutions and Organization": [
            {
                question: "Social institutions serve which function?",
                options: [
                    "Entertainment only",
                    "Meeting fundamental social needs and maintaining social order",
                    "Eliminating inequality",
                    "Creating new societies"
                ],
                correct: 1,
                explanation: "Institutions serve manifest functions (stated purposes) and latent functions (unintended consequences) in meeting social needs."
            },
            {
                question: "The family as a social institution primarily serves to:",
                options: [
                    "Generate wealth",
                    "Reproduction, socialization, and providing affection and support",
                    "Enforce government laws",
                    "Replace education"
                ],
                correct: 1,
                explanation: "Family is the primary unit for biological reproduction, cultural transmission/socialization, and emotional support."
            },
            {
                question: "How are social institutions interconnected?",
                options: [
                    "They operate completely independently",
                    "Changes in one institution affect others",
                    "Only the political institution matters",
                    "They never interact"
                ],
                correct: 1,
                explanation: "Social institutions are interdependent—changes in economic institutions affect family structure, education systems, etc."
            }
        ],
        "Introduction to Economy and Economic Systems": [
            {
                question: "An economy addresses which fundamental question:",
                options: [
                    "What is the meaning of life?",
                    "What to produce, how to produce, and for whom to produce",
                    "How to eliminate all differences?",
                    "Whether government exists"
                ],
                correct: 1,
                explanation: "Economics addresses production and distribution by answering what, how, and for whom production occurs."
            },
            {
                question: "Capitalism is characterized by:",
                options: [
                    "Government ownership of all property",
                    "Private ownership, market allocation, and profit motive",
                    "Equal distribution of all goods",
                    "No economic activity"
                ],
                correct: 1,
                explanation: "Capitalism features private ownership of productive resources, market-driven allocation, and profit seeking as primary motivation."
            },
            {
                question: "A mixed economy combines:",
                options: [
                    "Only capitalist elements",
                    "Only socialist elements",
                    "Market mechanisms and state intervention",
                    "No elements at all"
                ],
                correct: 2,
                explanation: "Mixed economies blend market allocation with government regulation and intervention—combining capitalist and socialist elements."
            },
            {
                question: "Which is an example of socialism's approach to ownership?",
                options: [
                    "Complete private ownership",
                    "Collective or state ownership of productive resources",
                    "Individual profit maximization",
                    "No organization at all"
                ],
                correct: 1,
                explanation: "Socialist systems feature collective or state ownership of productive resources, with distribution based on need rather than market forces."
            }
        ],
        "Economic Activities and Development": [
            {
                question: "The primary sector of economy includes:",
                options: [
                    "Manufacturing",
                    "Extracting natural resources (agriculture, mining, fishing)",
                    "Services like healthcare",
                    "Information technology"
                ],
                correct: 1,
                explanation: "The primary sector involves extracting raw materials and natural resources from the environment."
            },
            {
                question: "Development is measured through indicators such as:",
                options: [
                    "Only military strength",
                    "Per capita income, literacy rates, life expectancy, and access to services",
                    "Population size only",
                    "Geographic location"
                ],
                correct: 1,
                explanation: "Development indicators include economic (income), social (literacy, health), and infrastructure measures."
            },
            {
                question: "Which factor is crucial for economic development?",
                options: [
                    "Geographic isolation",
                    "Capital accumulation, technological innovation, human capital, and institutions",
                    "Preventing all trade",
                    "Eliminating education"
                ],
                correct: 1,
                explanation: "Development requires capital investment, innovation, skilled workers, and effective institutions—not isolation."
            },
            {
                question: "Developed countries are typically characterized by:",
                options: [
                    "Low income and limited industry",
                    "High income, diversified economy, and advanced technology",
                    "No government services",
                    "No international trade"
                ],
                correct: 1,
                explanation: "Developed countries have high per capita income, diversified economies, advanced technology, and extensive services."
            }
        ],
        "Interconnections: Government, Society, and Economy": [
            {
                question: "How do government, society, and economy interact?",
                options: [
                    "They operate completely independently",
                    "They are deeply interconnected, shaping and constraining each other",
                    "Only government matters",
                    "They are identical systems"
                ],
                correct: 1,
                explanation: "These systems are interdependent—government provides framework for economy; economy generates government resources; society provides both with legitimacy."
            },
            {
                question: "When economic collapse occurs, what typically happens?",
                options: [
                    "Government remains unaffected",
                    "Society is unharmed",
                    "Government loses resources and society experiences instability",
                    "Everything remains normal"
                ],
                correct: 2,
                explanation: "Economic crisis affects government revenue and legitimacy, disrupts social services, creates inequality, and can destabilize political systems."
            },
            {
                question: "Which is an example of policy affecting all three systems?",
                options: [
                    "A holiday announcement",
                    "A school building construction",
                    "Raising taxes or wages—affecting government revenue, economic activity, and social welfare",
                    "Weather changes"
                ],
                correct: 2,
                explanation: "Economic policy decisions have spillover effects—higher wages affect government budgets, business behavior, and household welfare simultaneously."
            },
            {
                question: "The COVID-19 pandemic exemplified system interconnection because:",
                options: [
                    "Only health was affected",
                    "Only economy was disrupted",
                    "Health crisis affected economy, which affected government, requiring coordinated response",
                    "Systems remained separate"
                ],
                correct: 2,
                explanation: "The pandemic showed how health (social issue) impacted economy (closures, unemployment), which affected government (revenue, response capacity)."
            }
        ]
    }
};

// Function to get questions for a course with rotation - up to 30 questions
function getQuestionsForCourse(courseCode, maxQuestions = 30) {
    if (!questionBank[courseCode]) {
        return [];
    }
    
    const selectedQuestions = [];
    const courseTopics = questionBank[courseCode];
    const allQuestions = [];
    
    // Collect all questions from all topics with their topic information
    for (const [topicName, questions] of Object.entries(courseTopics)) {
        questions.forEach((question, index) => {
            allQuestions.push({
                ...question,
                topic: topicName,
                topicKey: `${courseCode}-${topicName}`,
                questionIndex: index
            });
        });
    }
    
    // If we have 30 or fewer questions, return all (shuffled)
    if (allQuestions.length <= maxQuestions) {
        return shuffleArray(allQuestions);
    }
    
    // If we have more than 30 questions, select 30 with rotation
    // Use rotation system to ensure different questions each time
    const selected = [];
    const topicUsage = {};
    
    // Initialize usage tracking for each topic
    for (const [topicName] of Object.entries(courseTopics)) {
        const topicKey = `${courseCode}-${topicName}`;
        const usage = getQuestionUsage();
        if (!usage[topicKey]) {
            usage[topicKey] = { lastUsed: -1, count: 0 };
        }
        topicUsage[topicName] = usage[topicKey];
    }
    
    // Select questions with rotation until we have 30
    let attempts = 0;
    const maxAttempts = maxQuestions * 3; // Prevent infinite loops
    
    while (selected.length < maxQuestions && attempts < maxAttempts) {
        // Cycle through topics to ensure fair distribution
        const topicNames = Object.keys(courseTopics);
        const topicIndex = selected.length % topicNames.length;
        const topicName = topicNames[topicIndex];
        const questions = courseTopics[topicName];
        
        if (questions && questions.length > 0) {
            const topicKey = `${courseCode}-${topicName}`;
            const questionIndex = getNextQuestionIndex(topicKey, questions.length);
            
            const question = {
                ...questions[questionIndex],
                topic: topicName
            };
            
            // Check if this question is already selected (avoid duplicates)
            const isDuplicate = selected.some(q => 
                q.question === question.question && q.topic === question.topic
            );
            
            if (!isDuplicate) {
                selected.push(question);
            }
        }
        
        attempts++;
    }
    
    // If we still don't have 30, fill with random questions from remaining pool
    if (selected.length < maxQuestions) {
        const remaining = allQuestions.filter(q => 
            !selected.some(s => s.question === q.question && s.topic === q.topic)
        );
        
        while (selected.length < maxQuestions && remaining.length > 0) {
            const randomIndex = Math.floor(Math.random() * remaining.length);
            selected.push(remaining.splice(randomIndex, 1)[0]);
        }
    }
    
    // Shuffle the selected questions
    return shuffleArray(selected);
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Shuffle questions and their options
function shuffleQuestions(questions) {
    return questions.map(question => {
        const optionIndices = question.options.map((_, index) => index);
        const shuffledIndices = shuffleArray(optionIndices);
        const shuffledOptions = shuffledIndices.map(index => question.options[index]);
        const newCorrectIndex = shuffledIndices.indexOf(question.correct);
        
        return {
            question: question.question,
            options: shuffledOptions,
            correct: newCorrectIndex,
            explanation: question.explanation,
            topic: question.topic
        };
    });
}

