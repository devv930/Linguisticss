// Test questions for each course
const testQuestions = {
    "LIN 101": [
        {
            question: "What is language?",
            options: [
                "A system of written symbols only",
                "A system of arbitrary vocal symbols used for communication",
                "Only spoken words",
                "A collection of words"
            ],
            correct: 1,
            explanation: "Language is a system of arbitrary vocal symbols used by human beings for communication, consisting of sounds, words, sentences, and meaning."
        },
        {
            question: "What is linguistics?",
            options: [
                "The study of languages only",
                "The scientific study of language",
                "Learning multiple languages",
                "Teaching languages"
            ],
            correct: 1,
            explanation: "Linguistics is the scientific study of language, examining its structure, function, acquisition, and use at various levels."
        },
        {
            question: "Which branch of linguistics studies speech sounds?",
            options: ["Syntax", "Phonetics", "Semantics", "Pragmatics"],
            correct: 1,
            explanation: "Phonetics is the branch that studies speech sounds - how they are produced, transmitted, and perceived."
        },
        {
            question: "What is micro-linguistics?",
            options: [
                "Study of language in society",
                "Study of the internal structure of language",
                "Study of language acquisition",
                "Study of language change"
            ],
            correct: 1,
            explanation: "Micro-linguistics focuses on the internal structure of language - phonetics, phonology, morphology, syntax, and semantics."
        },
        {
            question: "What is macro-linguistics?",
            options: [
                "Study of sentence structure",
                "Study of language in relation to external factors",
                "Study of word formation",
                "Study of sound systems"
            ],
            correct: 1,
            explanation: "Macro-linguistics examines language in relation to society, psychology, culture, and other disciplines."
        },
        {
            question: "Which characteristic allows language to refer to things not present?",
            options: ["Arbitrariness", "Displacement", "Productivity", "Duality"],
            correct: 1,
            explanation: "Displacement allows language to refer to things not present in time or space - past, future, or distant things."
        },
        {
            question: "What is competence?",
            options: [
                "Actual language use",
                "A speaker's underlying knowledge of their language",
                "Language errors",
                "Speaking ability"
            ],
            correct: 1,
            explanation: "Competence refers to a speaker's underlying knowledge of their language - the mental grammar that allows production and understanding."
        },
        {
            question: "What is performance?",
            options: [
                "Language knowledge",
                "The actual use of language in real situations",
                "Language rules",
                "Grammar knowledge"
            ],
            correct: 1,
            explanation: "Performance is the actual use of language in real situations, including errors, hesitations, and variations."
        },
        {
            question: "Which is NOT a branch of linguistics?",
            options: ["Phonology", "Morphology", "Biology", "Syntax"],
            correct: 2,
            explanation: "Biology is not a branch of linguistics. Main branches include phonology, morphology, syntax, semantics, and pragmatics."
        },
        {
            question: "What does arbitrariness mean in language?",
            options: [
                "Words resemble what they represent",
                "The relationship between words and meanings is conventional",
                "Words are always logical",
                "All languages use the same words"
            ],
            correct: 1,
            explanation: "Arbitrariness means the relationship between words and their meanings is conventional, not natural - there's no inherent connection."
        },
        {
            question: "What is productivity in language?",
            options: [
                "Language efficiency",
                "Ability to create infinite new sentences",
                "Language speed",
                "Language complexity"
            ],
            correct: 1,
            explanation: "Productivity (creativity) is the ability to produce and understand infinite new sentences using finite resources."
        },
        {
            question: "Which describes cultural transmission?",
            options: [
                "Language is inherited",
                "Language is learned from the community",
                "Language is genetic",
                "Language is automatic"
            ],
            correct: 1,
            explanation: "Cultural transmission means language is learned from the community, not inherited biologically."
        },
        {
            question: "What is duality of patterning?",
            options: [
                "Language has one level",
                "Language has two levels - sounds and meaning",
                "Language has many levels",
                "Language has no structure"
            ],
            correct: 1,
            explanation: "Duality of patterning means language has two levels: meaningless sounds combine to form meaningful units."
        },
        {
            question: "The relationship between language and linguistics is:",
            options: [
                "They are the same",
                "Language is the object of study, linguistics is the discipline",
                "Linguistics creates language",
                "Language studies linguistics"
            ],
            correct: 1,
            explanation: "Language is the object of study, while linguistics is the scientific discipline that studies it."
        },
        {
            question: "Which is a characteristic of human language?",
            options: ["Fixed responses", "Limited creativity", "Reflexivity", "No grammar"],
            correct: 2,
            explanation: "Reflexivity is a key characteristic - language can be used to talk about language itself."
        },
        {
            question: "What does syntax study?",
            options: ["Word meanings", "Sentence structure", "Speech sounds", "Language use"],
            correct: 1,
            explanation: "Syntax is the branch of linguistics that studies sentence structure and how words combine to form sentences."
        },
        {
            question: "What does semantics study?",
            options: ["Sentence structure", "Meaning", "Speech sounds", "Word formation"],
            correct: 1,
            explanation: "Semantics is the branch of linguistics that studies meaning in language."
        },
        {
            question: "Which is an example of macro-linguistics?",
            options: ["Phonology", "Syntax", "Sociolinguistics", "Morphology"],
            correct: 2,
            explanation: "Sociolinguistics is part of macro-linguistics, studying language in relation to society."
        },
        {
            question: "Competence vs Performance was introduced by:",
            options: ["Ferdinand de Saussure", "Noam Chomsky", "William Labov", "Leonard Bloomfield"],
            correct: 1,
            explanation: "Noam Chomsky introduced the distinction between competence (knowledge) and performance (actual use)."
        },
        {
            question: "What is pragmatics?",
            options: [
                "Study of sentence structure",
                "Study of language in context",
                "Study of word formation",
                "Study of speech sounds"
            ],
            correct: 1,
            explanation: "Pragmatics is the branch of linguistics that studies language use in context and how meaning is conveyed beyond words."
        },
        {
            question: "Which is NOT a characteristic of language?",
            options: ["Arbitrariness", "Productivity", "Immutability", "Displacement"],
            correct: 2,
            explanation: "Immutability is NOT a characteristic - languages change over time. Language is dynamic, not fixed."
        },
        {
            question: "What is morphology?",
            options: [
                "Study of sentence structure",
                "Study of word formation",
                "Study of meaning",
                "Study of sounds"
            ],
            correct: 1,
            explanation: "Morphology is the branch of linguistics that studies word formation and the structure of words."
        },
        {
            question: "The main difference between micro and macro linguistics is:",
            options: [
                "Micro is easier",
                "Micro focuses on internal structure, macro on external factors",
                "Macro is more important",
                "There is no difference"
            ],
            correct: 1,
            explanation: "Micro-linguistics focuses on internal language structure, while macro-linguistics examines language in relation to external factors."
        },
        {
            question: "What does 'discreteness' mean in language?",
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
            question: "Which branch studies language acquisition?",
            options: ["Phonetics", "Psycholinguistics", "Syntax", "Morphology"],
            correct: 1,
            explanation: "Psycholinguistics studies language acquisition, language processing, and the relationship between language and the mind."
        },
        {
            question: "What is historical linguistics?",
            options: [
                "Study of current language",
                "Study of language change over time",
                "Study of language structure",
                "Study of language meaning"
            ],
            correct: 1,
            explanation: "Historical linguistics (diachronic linguistics) studies how languages change and evolve over time."
        },
        {
            question: "Applied linguistics involves:",
            options: [
                "Only theory",
                "Practical applications of linguistic knowledge",
                "Only research",
                "Only teaching"
            ],
            correct: 1,
            explanation: "Applied linguistics involves practical applications of linguistic knowledge in education, technology, therapy, and other fields."
        },
        {
            question: "Which is true about language universals?",
            options: [
                "All languages are the same",
                "All languages share certain features",
                "Languages have no common features",
                "Only some languages have grammar"
            ],
            correct: 1,
            explanation: "Language universals are features found in all human languages, suggesting a common language faculty."
        },
        {
            question: "The relationship between competence and performance shows:",
            options: [
                "They are always the same",
                "What speakers know vs what they actually say",
                "Performance is more important",
                "Competence doesn't exist"
            ],
            correct: 1,
            explanation: "Competence (knowledge) vs Performance (actual use) distinguishes what speakers know from what they actually produce."
        },
        {
            question: "Which is an example of language reflexivity?",
            options: [
                "Speaking about objects",
                "Using language to talk about language",
                "Making sounds",
                "Writing words"
            ],
            correct: 1,
            explanation: "Reflexivity means language can be used to talk about language itself - like defining words or discussing grammar."
        }
    ],
    "LIN 103": [
        {
            question: "What is phonetics?",
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
            question: "Which branch of phonetics studies sound production?",
            options: ["Acoustic", "Auditory", "Articulatory", "Applied"],
            correct: 2,
            explanation: "Articulatory phonetics studies how speech sounds are produced by the vocal organs."
        },
        {
            question: "Which is a speech organ?",
            options: ["Heart", "Lungs", "Stomach", "Liver"],
            correct: 1,
            explanation: "The lungs are speech organs that provide the air stream needed for speech production."
        },
        {
            question: "What is the most flexible articulator?",
            options: ["Lips", "Tongue", "Teeth", "Palate"],
            correct: 1,
            explanation: "The tongue is the most flexible articulator and can move to different positions to produce various sounds."
        },
        {
            question: "What is the main air stream mechanism in English?",
            options: [
                "Pulmonic ingressive",
                "Pulmonic egressive",
                "Glottalic egressive",
                "Velaric ingressive"
            ],
            correct: 1,
            explanation: "English uses pulmonic egressive sounds - air flows out from the lungs, which is the most common mechanism."
        },
        {
            question: "What is place of articulation?",
            options: [
                "Where sound is produced in vocal tract",
                "How loud the sound is",
                "Sound duration",
                "Sound pitch"
            ],
            correct: 0,
            explanation: "Place of articulation refers to where in the vocal tract a sound is produced (e.g., bilabial, alveolar, velar)."
        },
        {
            question: "What is manner of articulation?",
            options: [
                "Where sound is produced",
                "How air stream is modified",
                "Sound volume",
                "Sound frequency"
            ],
            correct: 1,
            explanation: "Manner of articulation describes how the air stream is modified (e.g., stop, fricative, nasal)."
        },
        {
            question: "What is voicing?",
            options: [
                "Sound volume",
                "Whether vocal cords vibrate",
                "Sound location",
                "Sound type"
            ],
            correct: 1,
            explanation: "Voicing refers to whether the vocal cords vibrate during sound production (voiced) or not (voiceless)."
        },
        {
            question: "Which sound is voiceless?",
            options: ["/b/", "/d/", "/p/", "/z/"],
            correct: 2,
            explanation: "/p/ is voiceless - the vocal cords don't vibrate. /b/, /d/, and /z/ are voiced."
        },
        {
            question: "What does IPA stand for?",
            options: [
                "International Phonetic Association",
                "International Phonetic Alphabet",
                "International Phonetic Analysis",
                "International Phonetic Application"
            ],
            correct: 1,
            explanation: "IPA stands for International Phonetic Alphabet - a standardized system of symbols for all speech sounds."
        },
        {
            question: "Which is NOT a branch of phonetics?",
            options: ["Articulatory", "Acoustic", "Auditory", "Morphological"],
            correct: 3,
            explanation: "Morphological is not a branch of phonetics. The three branches are articulatory, acoustic, and auditory."
        },
        {
            question: "What produces voicing?",
            options: ["Lungs", "Tongue", "Vocal cords", "Lips"],
            correct: 2,
            explanation: "The vocal cords (in the larynx) produce voicing when they vibrate during sound production."
        },
        {
            question: "A bilabial sound is produced:",
            options: [
                "With tongue and palate",
                "With both lips",
                "With teeth and lips",
                "At the glottis"
            ],
            correct: 1,
            explanation: "A bilabial sound is produced using both lips, like /p/, /b/, and /m/."
        },
        {
            question: "What is a fricative?",
            options: [
                "Complete closure",
                "Narrow opening creating friction",
                "Nasal sound",
                "Liquid sound"
            ],
            correct: 1,
            explanation: "A fricative is produced with a narrow opening that creates friction, like /f/, /s/, /v/, /z/."
        },
        {
            question: "What is a stop/plosive?",
            options: [
                "Narrow opening",
                "Complete closure then release",
                "Nasal sound",
                "Continuous sound"
            ],
            correct: 1,
            explanation: "A stop (plosive) involves complete closure of the vocal tract followed by sudden release, like /p/, /t/, /k/."
        },
        {
            question: "Acoustic phonetics studies:",
            options: [
                "Sound production",
                "Physical properties of sound waves",
                "Sound perception",
                "Sound meaning"
            ],
            correct: 1,
            explanation: "Acoustic phonetics studies the physical properties of sound waves produced during speech."
        },
        {
            question: "Auditory phonetics studies:",
            options: [
                "Sound production",
                "Sound waves",
                "How sounds are perceived",
                "Sound spelling"
            ],
            correct: 2,
            explanation: "Auditory phonetics studies how speech sounds are perceived and processed by the ear and brain."
        },
        {
            question: "The IPA provides:",
            options: [
                "One symbol per sound",
                "Multiple symbols per sound",
                "No symbols",
                "Only for English"
            ],
            correct: 0,
            explanation: "The IPA provides one symbol per sound, allowing accurate transcription of any language."
        },
        {
            question: "Which is an alveolar sound?",
            options: ["/p/", "/t/", "/k/", "/m/"],
            correct: 1,
            explanation: "/t/ is an alveolar sound - produced at the alveolar ridge (the ridge behind the upper teeth)."
        },
        {
            question: "What is the velum?",
            options: [
                "Hard palate",
                "Soft palate",
                "Alveolar ridge",
                "Teeth"
            ],
            correct: 1,
            explanation: "The velum (soft palate) can be raised for oral sounds or lowered for nasal sounds."
        },
        {
            question: "A nasal sound requires:",
            options: [
                "Velum raised",
                "Velum lowered",
                "Lips closed",
                "Tongue raised"
            ],
            correct: 1,
            explanation: "Nasal sounds require the velum to be lowered, allowing air to flow through the nasal cavity."
        },
        {
            question: "Which sound is velar?",
            options: ["/p/", "/t/", "/k/", "/s/"],
            correct: 2,
            explanation: "/k/ is a velar sound - produced at the soft palate (velum)."
        },
        {
            question: "The larynx contains:",
            options: ["Lungs", "Vocal cords", "Tongue", "Teeth"],
            correct: 1,
            explanation: "The larynx (voice box) contains the vocal cords, which produce voicing."
        },
        {
            question: "What is the pharynx?",
            options: [
                "The mouth",
                "The throat cavity",
                "The nose",
                "The lungs"
            ],
            correct: 1,
            explanation: "The pharynx is the throat cavity, part of the vocal tract involved in speech production."
        },
        {
            question: "Which is NOT a place of articulation?",
            options: ["Bilabial", "Alveolar", "Loud", "Velar"],
            correct: 2,
            explanation: "'Loud' is not a place of articulation. Places include bilabial, alveolar, velar, etc."
        },
        {
            question: "An affricate is:",
            options: [
                "Stop only",
                "Fricative only",
                "Stop + fricative",
                "Nasal sound"
            ],
            correct: 2,
            explanation: "An affricate combines a stop and a fricative, like /tʃ/ (ch) and /dʒ/ (j)."
        },
        {
            question: "The IPA chart organizes sounds by:",
            options: [
                "Alphabetical order",
                "Place and manner of articulation",
                "Language",
                "Frequency"
            ],
            correct: 1,
            explanation: "The IPA chart organizes sounds by place and manner of articulation for consonants, and by tongue position for vowels."
        },
        {
            question: "Which is a liquid sound?",
            options: ["/p/", "/s/", "/l/", "/k/"],
            correct: 2,
            explanation: "/l/ is a liquid sound, along with /r/. Liquids are a type of consonant with specific articulatory properties."
        },
        {
            question: "What is a glide/semivowel?",
            options: [
                "/p/",
                "/s/",
                "/w/",
                "/t/"
            ],
            correct: 2,
            explanation: "/w/ is a glide (semivowel), along with /j/ (y). Glides are vowel-like consonants."
        },
        {
            question: "The oral cavity includes:",
            options: [
                "Only tongue",
                "Tongue, lips, teeth, palate",
                "Only lips",
                "Only teeth"
            ],
            correct: 1,
            explanation: "The oral cavity (mouth) includes the tongue, lips, teeth, alveolar ridge, hard palate, and soft palate."
        }
    ],
    "LIN 105": [
        {
            question: "What is grammar?",
            options: [
                "Only spelling rules",
                "System of rules governing word combination",
                "Only punctuation",
                "Only vocabulary"
            ],
            correct: 1,
            explanation: "Grammar is the system of rules that govern how words are combined to form meaningful sentences in a language."
        },
        {
            question: "What are word classes?",
            options: [
                "Only nouns and verbs",
                "Categories classifying words by function",
                "Only adjectives",
                "Only pronouns"
            ],
            correct: 1,
            explanation: "Word classes (parts of speech) are categories that classify words based on their grammatical function and meaning."
        },
        {
            question: "Which is an open class?",
            options: ["Pronouns", "Nouns", "Prepositions", "Articles"],
            correct: 1,
            explanation: "Nouns are open class words - they readily accept new members and carry main meaning."
        },
        {
            question: "Which is a closed class?",
            options: ["Nouns", "Verbs", "Prepositions", "Adjectives"],
            correct: 2,
            explanation: "Prepositions are closed class words - they contain a small, fixed set that changes slowly."
        },
        {
            question: "A noun names:",
            options: [
                "Only people",
                "Person, place, thing, idea, or quality",
                "Only things",
                "Only places"
            ],
            correct: 1,
            explanation: "A noun names a person, place, thing, idea, or quality."
        },
        {
            question: "A pronoun:",
            options: [
                "Names things",
                "Replaces or refers to a noun",
                "Describes nouns",
                "Shows action"
            ],
            correct: 1,
            explanation: "A pronoun replaces or refers to a noun or noun phrase to avoid repetition."
        },
        {
            question: "A verb expresses:",
            options: [
                "Only actions",
                "Action, occurrence, or state of being",
                "Only states",
                "Only occurrences"
            ],
            correct: 1,
            explanation: "A verb expresses an action, occurrence, or state of being."
        },
        {
            question: "An adverb modifies:",
            options: [
                "Only verbs",
                "Verbs, adjectives, other adverbs, or sentences",
                "Only nouns",
                "Only pronouns"
            ],
            correct: 1,
            explanation: "An adverb modifies verbs, adjectives, other adverbs, or entire sentences."
        },
        {
            question: "An adjective:",
            options: [
                "Shows action",
                "Modifies or describes a noun",
                "Replaces nouns",
                "Connects words"
            ],
            correct: 1,
            explanation: "An adjective modifies or describes a noun or pronoun, providing information about qualities."
        },
        {
            question: "A preposition shows:",
            options: [
                "Action",
                "Relationships between nouns and other words",
                "State of being",
                "Quality"
            ],
            correct: 1,
            explanation: "A preposition shows relationships between nouns/pronouns and other words, indicating location, direction, time, or manner."
        },
        {
            question: "An interjection expresses:",
            options: [
                "Grammar",
                "Strong emotion or reaction",
                "Relationships",
                "Description"
            ],
            correct: 1,
            explanation: "An interjection is a word or phrase that expresses strong emotion, surprise, or reaction."
        },
        {
            question: "The definite article is:",
            options: ["a", "an", "the", "some"],
            correct: 2,
            explanation: "'The' is the definite article, referring to a particular, known noun."
        },
        {
            question: "Indefinite articles are:",
            options: ["the", "a and an", "some", "many"],
            correct: 1,
            explanation: "'A' and 'an' are indefinite articles, referring to any member of a class."
        },
        {
            question: "Which is a proper noun?",
            options: ["city", "London", "dog", "book"],
            correct: 1,
            explanation: "'London' is a proper noun - a specific name, capitalized."
        },
        {
            question: "Which is a common noun?",
            options: ["John", "London", "city", "Monday"],
            correct: 2,
            explanation: "'City' is a common noun - a general term, not capitalized."
        },
        {
            question: "A linking verb:",
            options: [
                "Shows action",
                "Connects subject to complement",
                "Replaces nouns",
                "Modifies nouns"
            ],
            correct: 1,
            explanation: "A linking verb (like 'be', 'seem', 'become') connects the subject to a complement, showing state or condition."
        },
        {
            question: "An auxiliary verb:",
            options: [
                "Stands alone",
                "Helps main verbs",
                "Replaces verbs",
                "Describes verbs"
            ],
            correct: 1,
            explanation: "An auxiliary verb (like 'have', 'be', 'do', 'will') helps main verbs express tense, aspect, mood, or voice."
        },
        {
            question: "A transitive verb:",
            options: [
                "Takes no object",
                "Takes an object",
                "Is always passive",
                "Has no meaning"
            ],
            correct: 1,
            explanation: "A transitive verb takes an object (e.g., 'eat' in 'I eat apples')."
        },
        {
            question: "An intransitive verb:",
            options: [
                "Takes an object",
                "Takes no object",
                "Is always active",
                "Has no subject"
            ],
            correct: 1,
            explanation: "An intransitive verb takes no object (e.g., 'sleep' in 'I sleep')."
        },
        {
            question: "Which is a personal pronoun?",
            options: ["this", "who", "I", "which"],
            correct: 2,
            explanation: "'I' is a personal pronoun. Personal pronouns include I, you, he, she, it, we, they."
        },
        {
            question: "Which is a possessive pronoun?",
            options: ["I", "my", "who", "this"],
            correct: 1,
            explanation: "'My' is a possessive pronoun. Possessive pronouns include my, your, his, her, its, our, their."
        },
        {
            question: "A demonstrative pronoun is:",
            options: ["I", "this", "who", "my"],
            correct: 1,
            explanation: "'This' is a demonstrative pronoun. Demonstrative pronouns include this, that, these, those."
        },
        {
            question: "Which is a relative pronoun?",
            options: ["I", "this", "who", "my"],
            correct: 2,
            explanation: "'Who' is a relative pronoun. Relative pronouns include who, which, that."
        },
        {
            question: "An adverb of manner answers:",
            options: ["When?", "How?", "Where?", "Why?"],
            correct: 1,
            explanation: "An adverb of manner answers 'how?' (e.g., quickly, carefully)."
        },
        {
            question: "An adverb of time answers:",
            options: ["How?", "When?", "Where?", "Why?"],
            correct: 1,
            explanation: "An adverb of time answers 'when?' (e.g., yesterday, soon)."
        },
        {
            question: "An adverb of place answers:",
            options: ["How?", "When?", "Where?", "Why?"],
            correct: 2,
            explanation: "An adverb of place answers 'where?' (e.g., here, everywhere)."
        },
        {
            question: "Which is a conjunction?",
            options: ["happy", "and", "quickly", "book"],
            correct: 1,
            explanation: "'And' is a conjunction - it connects words, phrases, or clauses."
        },
        {
            question: "A determiner:",
            options: [
                "Shows action",
                "Introduces nouns",
                "Replaces nouns",
                "Describes nouns"
            ],
            correct: 1,
            explanation: "A determiner introduces nouns (e.g., this, that, some, many, the, a)."
        },
        {
            question: "Prescriptive grammar:",
            options: [
                "Describes actual usage",
                "Prescribes 'correct' usage",
                "Studies language change",
                "Studies meaning"
            ],
            correct: 1,
            explanation: "Prescriptive grammar prescribes rules for 'correct' usage, often based on written standards."
        },
        {
            question: "Descriptive grammar:",
            options: [
                "Prescribes rules",
                "Describes how language is actually used",
                "Only studies writing",
                "Only studies speech"
            ],
            correct: 1,
            explanation: "Descriptive grammar describes how language is actually used by speakers, focusing on patterns and regularities."
        }
    ],
    "LIN 107": [
        {
            question: "Language is:",
            options: [
                "Only written",
                "A complex, rule-governed communication system",
                "Only spoken",
                "Only sounds"
            ],
            correct: 1,
            explanation: "Language is a complex, rule-governed system of communication unique to humans, using arbitrary vocal symbols."
        },
        {
            question: "Which is a characteristic of language?",
            options: ["Fixed responses", "Arbitrariness", "Limited creativity", "No grammar"],
            correct: 1,
            explanation: "Arbitrariness is a key characteristic - words don't resemble what they represent."
        },
        {
            question: "Productivity in language means:",
            options: [
                "Language efficiency",
                "Ability to create infinite new sentences",
                "Language speed",
                "Language complexity"
            ],
            correct: 1,
            explanation: "Productivity (creativity) is the ability to create infinite new sentences using finite resources."
        },
        {
            question: "Displacement allows language to:",
            options: [
                "Refer only to present things",
                "Refer to past, future, or distant things",
                "Refer only to visible things",
                "Refer only to concrete things"
            ],
            correct: 1,
            explanation: "Displacement allows language to refer to things not present in time or space - past, future, or distant."
        },
        {
            question: "Cultural transmission means:",
            options: [
                "Language is inherited",
                "Language is learned from community",
                "Language is genetic",
                "Language is automatic"
            ],
            correct: 1,
            explanation: "Cultural transmission means language is learned from the community, not inherited biologically."
        },
        {
            question: "Duality of patterning refers to:",
            options: [
                "One level structure",
                "Two levels - sounds and meaning",
                "Three levels",
                "No structure"
            ],
            correct: 1,
            explanation: "Duality of patterning means language has two levels: meaningless sounds combine to form meaningful units."
        },
        {
            question: "Language universals are:",
            options: [
                "Features in some languages",
                "Features found in all languages",
                "Only in English",
                "Only in written language"
            ],
            correct: 1,
            explanation: "Language universals are features found in all human languages, suggesting a common language faculty."
        },
        {
            question: "A language family is:",
            options: [
                "Unrelated languages",
                "Languages sharing a common ancestor",
                "Only modern languages",
                "Only ancient languages"
            ],
            correct: 1,
            explanation: "A language family is a group of languages that share a common ancestor (proto-language) and are genetically related."
        },
        {
            question: "Which is a major language family?",
            options: [
                "European",
                "Indo-European",
                "Western",
                "Modern"
            ],
            correct: 1,
            explanation: "Indo-European is a major language family including English, Spanish, Hindi, Russian, and many others."
        },
        {
            question: "The comparative method:",
            options: [
                "Studies one language",
                "Reconstructs proto-languages by comparing related languages",
                "Only studies modern languages",
                "Only studies writing"
            ],
            correct: 1,
            explanation: "The comparative method helps linguists reconstruct proto-languages by comparing related languages."
        },
        {
            question: "Which is NOT a language universal?",
            options: [
                "All languages have consonants and vowels",
                "All languages have nouns and verbs",
                "All languages are the same",
                "All languages can form questions"
            ],
            correct: 2,
            explanation: "All languages are NOT the same - they vary greatly while sharing universal features."
        },
        {
            question: "Reflexivity in language means:",
            options: [
                "Language can talk about objects",
                "Language can talk about language itself",
                "Language reflects reality",
                "Language is reflective"
            ],
            correct: 1,
            explanation: "Reflexivity means language can be used to talk about language itself (metalinguistic ability)."
        },
        {
            question: "Discreteness means:",
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
            question: "Interchangeability means:",
            options: [
                "Only receivers",
                "Speakers can be both senders and receivers",
                "Only senders",
                "Fixed roles"
            ],
            correct: 1,
            explanation: "Interchangeability means speakers can be both senders and receivers of messages."
        },
        {
            question: "Which language family includes English?",
            options: [
                "Sino-Tibetan",
                "Indo-European",
                "Afro-Asiatic",
                "Niger-Congo"
            ],
            correct: 1,
            explanation: "English belongs to the Indo-European language family."
        },
        {
            question: "Proto-language is:",
            options: [
                "A modern language",
                "A reconstructed common ancestor",
                "A written language",
                "A dead language"
            ],
            correct: 1,
            explanation: "A proto-language is a reconstructed common ancestor of related languages in a language family."
        },
        {
            question: "Areal relationship occurs when:",
            options: [
                "Languages are unrelated",
                "Languages in proximity influence each other",
                "Languages are the same",
                "Languages don't change"
            ],
            correct: 1,
            explanation: "Areal relationships occur when languages in geographic proximity influence each other through borrowing."
        },
        {
            question: "Genetic relationship means:",
            options: [
                "Languages share DNA",
                "Languages share common ancestry",
                "Languages are the same",
                "Languages are modern"
            ],
            correct: 1,
            explanation: "Genetic relationship means languages descend from a common ancestor and share vocabulary, grammar, and sounds."
        },
        {
            question: "Which is true about language universals?",
            options: [
                "All languages are identical",
                "Languages share features but vary in expression",
                "Only some languages have universals",
                "Universals don't exist"
            ],
            correct: 1,
            explanation: "Languages share universal features but vary greatly in how they express these features."
        },
        {
            question: "Language families are organized:",
            options: [
                "Alphabetically",
                "Hierarchically",
                "By size",
                "By age"
            ],
            correct: 1,
            explanation: "Language families are organized hierarchically - families contain branches, branches contain sub-branches."
        },
        {
            question: "Which is a characteristic of human language?",
            options: ["Fixed responses", "Limited creativity", "Productivity", "No grammar"],
            correct: 2,
            explanation: "Productivity (creativity) is a key characteristic - ability to create infinite new sentences."
        },
        {
            question: "The relationship between words and meanings is:",
            options: [
                "Natural",
                "Arbitrary",
                "Logical",
                "Fixed"
            ],
            correct: 1,
            explanation: "The relationship is arbitrary - conventional, not natural. There's no inherent connection."
        },
        {
            question: "Which language family includes Arabic?",
            options: [
                "Indo-European",
                "Afro-Asiatic",
                "Sino-Tibetan",
                "Niger-Congo"
            ],
            correct: 1,
            explanation: "Arabic belongs to the Afro-Asiatic language family."
        },
        {
            question: "Language universals suggest:",
            options: [
                "Languages are unrelated",
                "Humans share a common language faculty",
                "Only one language is correct",
                "Languages don't change"
            ],
            correct: 1,
            explanation: "Language universals suggest that humans share a common, innate language faculty."
        },
        {
            question: "Which is NOT a language family?",
            options: [
                "Indo-European",
                "Sino-Tibetan",
                "European",
                "Afro-Asiatic"
            ],
            correct: 2,
            explanation: "'European' is not a language family - it's a geographic term. Indo-European is the actual family."
        },
        {
            question: "Language change is:",
            options: [
                "Impossible",
                "Natural and inevitable",
                "Only in writing",
                "Only in speech"
            ],
            correct: 1,
            explanation: "Language change is natural and inevitable - no language remains static over time."
        },
        {
            question: "The comparative method helps:",
            options: [
                "Study one language",
                "Trace language relationships and reconstruct ancestors",
                "Only study modern languages",
                "Only study writing"
            ],
            correct: 1,
            explanation: "The comparative method helps linguists trace language relationships and reconstruct proto-languages."
        },
        {
            question: "Which is true about language families?",
            options: [
                "All languages belong to one family",
                "Languages can be grouped into families based on shared ancestry",
                "Families don't exist",
                "Only modern languages have families"
            ],
            correct: 1,
            explanation: "Languages can be grouped into families based on shared ancestry and genetic relationships."
        },
        {
            question: "Understanding language families helps:",
            options: [
                "Only study grammar",
                "Trace migration, history, and cultural connections",
                "Only study sounds",
                "Only study meaning"
            ],
            correct: 1,
            explanation: "Understanding language families helps trace human migration patterns, cultural history, and language evolution."
        },
        {
            question: "Language universality shows:",
            options: [
                "Only diversity",
                "Both unity and diversity in human language",
                "Only unity",
                "No patterns"
            ],
            correct: 1,
            explanation: "Language universality shows both unity (shared features) and diversity (variation in expression) in human language."
        }
    ],
    "LIN 109": [
        {
            question: "What is communication?",
            options: [
                "Only speaking",
                "Process of exchanging information between individuals or groups",
                "Only writing",
                "Only listening"
            ],
            correct: 1,
            explanation: "Communication is the process of exchanging information, ideas, thoughts, feelings, or messages between individuals or groups."
        },
        {
            question: "Communication involves:",
            options: [
                "Only sender",
                "Sender, message, channel, and receiver",
                "Only receiver",
                "Only message"
            ],
            correct: 1,
            explanation: "Communication involves a sender encoding a message, transmitting it through a channel, and a receiver decoding it."
        },
        {
            question: "Which is a channel of communication?",
            options: ["Only face-to-face", "Face-to-face, written, digital, broadcast", "Only digital", "Only written"],
            correct: 1,
            explanation: "Channels include face-to-face, written, digital, broadcast, print, and telephone communication."
        },
        {
            question: "Verbal communication uses:",
            options: ["Only gestures", "Spoken or written words", "Only body language", "Only facial expressions"],
            correct: 1,
            explanation: "Verbal communication uses spoken or written words to convey messages."
        },
        {
            question: "Non-verbal communication includes:",
            options: [
                "Only words",
                "Body language, gestures, facial expressions, tone",
                "Only writing",
                "Only speaking"
            ],
            correct: 1,
            explanation: "Non-verbal communication includes body language, gestures, facial expressions, and tone of voice."
        },
        {
            question: "Interpersonal communication is:",
            options: [
                "One-to-many",
                "One-on-one or small group",
                "Mass audience",
                "Only written"
            ],
            correct: 1,
            explanation: "Interpersonal communication is one-on-one or small group interaction."
        },
        {
            question: "Mass communication reaches:",
            options: [
                "Small groups",
                "Large, diverse, anonymous audiences",
                "Only known people",
                "Only local audiences"
            ],
            correct: 1,
            explanation: "Mass communication reaches large, diverse, and anonymous audiences simultaneously."
        },
        {
            question: "Which is a type of mass communication?",
            options: ["Only radio", "Radio, television, internet, print", "Only television", "Only internet"],
            correct: 1,
            explanation: "Types of mass communication include radio, television, internet, print media, and film."
        },
        {
            question: "Communication is important for:",
            options: [
                "Only relationships",
                "Relationships, knowledge sharing, coordination, and more",
                "Only work",
                "Only education"
            ],
            correct: 1,
            explanation: "Communication is essential for building relationships, sharing knowledge, coordinating activities, and social organization."
        },
        {
            question: "Formal communication is:",
            options: [
                "Casual",
                "Structured and official",
                "Spontaneous",
                "Informal"
            ],
            correct: 1,
            explanation: "Formal communication is structured, official, and follows established protocols."
        },
        {
            question: "Informal communication is:",
            options: [
                "Official",
                "Casual and spontaneous",
                "Structured",
                "Formal"
            ],
            correct: 1,
            explanation: "Informal communication is casual, spontaneous, and doesn't follow strict protocols."
        },
        {
            question: "Public communication includes:",
            options: [
                "Only conversations",
                "Speeches and presentations",
                "Only writing",
                "Only listening"
            ],
            correct: 1,
            explanation: "Public communication includes speeches, presentations, and addressing larger audiences."
        },
        {
            question: "Intrapersonal communication is:",
            options: [
                "Between people",
                "Internal dialogue or thinking",
                "Public speaking",
                "Mass media"
            ],
            correct: 1,
            explanation: "Intrapersonal communication is internal dialogue, thinking, or self-talk."
        },
        {
            question: "Group communication occurs:",
            options: [
                "Only one-on-one",
                "Within organizations or communities",
                "Only in public",
                "Only in writing"
            ],
            correct: 1,
            explanation: "Group communication occurs within organizations, communities, or groups of people."
        },
        {
            question: "Which channel offers immediacy?",
            options: ["Only print", "Face-to-face and digital", "Only written", "Only broadcast"],
            correct: 1,
            explanation: "Face-to-face and digital channels offer immediacy - instant communication and feedback."
        },
        {
            question: "Which channel offers permanence?",
            options: ["Only speech", "Written and print media", "Only digital", "Only broadcast"],
            correct: 1,
            explanation: "Written and print media offer permanence - messages can be stored and referenced later."
        },
        {
            question: "Mass communication serves to:",
            options: [
                "Only inform",
                "Inform, educate, entertain, and persuade",
                "Only entertain",
                "Only persuade"
            ],
            correct: 1,
            explanation: "Mass communication serves multiple functions: informing (news), educating (documentaries), entertaining (shows), and persuading (advertising)."
        },
        {
            question: "Digital media enables:",
            options: [
                "Only one-way communication",
                "Interactivity and targeting",
                "Only broadcasting",
                "Only print"
            ],
            correct: 1,
            explanation: "Digital media enables interactivity, targeting, and two-way communication between senders and receivers."
        },
        {
            question: "Broadcast media provides:",
            options: [
                "Only permanence",
                "Immediacy and reach",
                "Only interactivity",
                "Only targeting"
            ],
            correct: 1,
            explanation: "Broadcast media (radio, TV) provides immediacy and wide reach to large audiences."
        },
        {
            question: "Print media offers:",
            options: [
                "Only immediacy",
                "Permanence and depth",
                "Only interactivity",
                "Only speed"
            ],
            correct: 1,
            explanation: "Print media offers permanence and depth - detailed information that can be stored and referenced."
        },
        {
            question: "Effective communication requires:",
            options: [
                "Only sender",
                "Shared understanding of symbols and context",
                "Only receiver",
                "Only channel"
            ],
            correct: 1,
            explanation: "Effective communication requires shared understanding of symbols, codes, and context between sender and receiver."
        },
        {
            question: "Which is NOT a type of communication?",
            options: ["Verbal", "Non-verbal", "Physical", "Interpersonal"],
            correct: 2,
            explanation: "'Physical' is not a standard type of communication. Types include verbal, non-verbal, interpersonal, group, public, mass, etc."
        },
        {
            question: "Mass communication is:",
            options: [
                "One-to-one",
                "One-to-many",
                "Many-to-one",
                "Many-to-many only"
            ],
            correct: 1,
            explanation: "Mass communication is one-to-many - a single source reaches many receivers simultaneously."
        },
        {
            question: "Which is a characteristic of mass communication?",
            options: [
                "Small audience",
                "Large, heterogeneous, anonymous audience",
                "Known receivers",
                "Personal interaction"
            ],
            correct: 1,
            explanation: "Mass communication reaches large, heterogeneous (diverse), and anonymous audiences."
        },
        {
            question: "Communication enables:",
            options: [
                "Only talking",
                "Cooperation, learning, and social organization",
                "Only writing",
                "Only listening"
            ],
            correct: 1,
            explanation: "Communication enables cooperation, learning, relationship-building, and the development of complex social structures."
        },
        {
            question: "Which is an advantage of digital communication?",
            options: [
                "Only one-way",
                "Interactivity and on-demand access",
                "Only permanence",
                "Only immediacy"
            ],
            correct: 1,
            explanation: "Digital communication offers interactivity and on-demand access - users can engage and access content when they want."
        },
        {
            question: "Outdoor media includes:",
            options: [
                "Only newspapers",
                "Billboards and posters",
                "Only radio",
                "Only television"
            ],
            correct: 1,
            explanation: "Outdoor media includes billboards, posters, and other visual displays in public spaces."
        },
        {
            question: "Film and cinema provide:",
            options: [
                "Only information",
                "Immersive experiences",
                "Only education",
                "Only entertainment"
            ],
            correct: 1,
            explanation: "Film and cinema provide immersive, audio-visual experiences that engage multiple senses."
        },
        {
            question: "Modern communication often:",
            options: [
                "Uses one channel",
                "Combines multiple channels",
                "Uses only traditional channels",
                "Uses only digital channels"
            ],
            correct: 1,
            explanation: "Modern communication often combines multiple channels simultaneously for maximum effectiveness and reach."
        },
        {
            question: "The choice of communication channel affects:",
            options: [
                "Nothing",
                "How messages are understood",
                "Only the sender",
                "Only the receiver"
            ],
            correct: 1,
            explanation: "The choice of channel affects how messages are understood, the structure of communication, and audience interaction."
        },
        {
            question: "Without communication:",
            options: [
                "Society would be fine",
                "Human society would be impossible",
                "Only work would suffer",
                "Only education would suffer"
            ],
            correct: 1,
            explanation: "Without communication, human society would be impossible - it enables cooperation, cultural transmission, and social organization."
        }
    ],
    "LIN 201": [
        {
            question: "What is phonology?",
            options: [
                "The study of physical properties of speech sounds",
                "The branch of linguistics that studies how sounds function in a language",
                "The study of word formation",
                "The study of sentence structure"
            ],
            correct: 1,
            explanation: "Phonology is the branch of linguistics that studies how sounds function in a particular language, focusing on sound patterns, organization, and rules."
        },
        {
            question: "What is the main difference between phonetics and phonology?",
            options: [
                "Phonetics studies sounds, phonology studies words",
                "Phonetics is universal, phonology is language-specific",
                "Phonetics is theoretical, phonology is practical",
                "There is no difference"
            ],
            correct: 1,
            explanation: "Phonetics studies the physical properties of sounds (universal), while phonology studies how sounds function within a particular language system (language-specific)."
        },
        {
            question: "Which phonological process occurs when 'in-' becomes 'im-' in 'impossible'?",
            options: ["Deletion", "Assimilation", "Metathesis", "Insertion"],
            correct: 1,
            explanation: "This is assimilation - the sound 'n' becomes 'm' to match the following 'p' sound, making pronunciation easier."
        },
        {
            question: "What is a minimal pair?",
            options: [
                "Two words with the same meaning",
                "Two words that differ in only one sound in the same position",
                "Two words with different spellings",
                "Two words from different languages"
            ],
            correct: 1,
            explanation: "A minimal pair consists of two words that differ in meaning and differ in only one sound segment in the same position (e.g., 'bat' and 'pat')."
        },
        {
            question: "Which of these is an example of a minimal pair?",
            options: ["cat - dog", "bat - pat", "run - running", "happy - unhappy"],
            correct: 1,
            explanation: "'bat' and 'pat' form a minimal pair because they differ only in the initial sound (/b/ vs /p/), and this difference changes the meaning."
        },
        {
            question: "What is complementary distribution?",
            options: [
                "Sounds that appear in the same environment",
                "Sounds that never appear in the same phonetic environment",
                "Sounds that are always pronounced the same",
                "Sounds from different languages"
            ],
            correct: 1,
            explanation: "Complementary distribution occurs when two or more sounds never appear in the same phonetic environment - they are mutually exclusive and are allophones of the same phoneme."
        },
        {
            question: "In English, aspirated [pʰ] and unaspirated [p] are examples of:",
            options: ["Minimal pairs", "Complementary distribution", "Free variation", "Different phonemes"],
            correct: 1,
            explanation: "They are in complementary distribution: [pʰ] appears at the beginning of stressed syllables, while [p] appears elsewhere. They are allophones of /p/."
        },
        {
            question: "What is free variation?",
            options: [
                "Sounds that never appear together",
                "Sounds that can be used interchangeably without changing meaning",
                "Sounds that always change meaning",
                "Sounds from different dialects"
            ],
            correct: 1,
            explanation: "Free variation occurs when two or more sounds can be used interchangeably in the same environment without changing the meaning of a word."
        },
        {
            question: "Which language is an example of a tone language?",
            options: ["English", "Spanish", "Mandarin Chinese", "French"],
            correct: 2,
            explanation: "Mandarin Chinese is a tone language where the same sequence of sounds can have different meanings depending on the pitch pattern used."
        },
        {
            question: "What does tone refer to in linguistics?",
            options: [
                "The volume of speech",
                "The use of pitch to distinguish word meaning",
                "The speed of speech",
                "The emotion in speech"
            ],
            correct: 1,
            explanation: "Tone refers to the use of pitch to distinguish word meaning in tone languages, where pitch patterns function like consonants or vowels."
        },
        {
            question: "Which process involves the removal of sounds in certain contexts?",
            options: ["Assimilation", "Deletion", "Insertion", "Metathesis"],
            correct: 1,
            explanation: "Deletion is a phonological process where sounds are removed in certain contexts to maintain ease of pronunciation."
        },
        {
            question: "What is the purpose of phonological processes?",
            options: [
                "To make languages harder",
                "To maintain ease of pronunciation",
                "To confuse learners",
                "To change word meanings"
            ],
            correct: 1,
            explanation: "Phonological processes help maintain ease of pronunciation and are often unconscious changes that occur in different linguistic contexts."
        },
        {
            question: "A minimal set is:",
            options: [
                "A pair of words",
                "A group of words that differ in only one sound segment",
                "Words with the same meaning",
                "Words from the same language family"
            ],
            correct: 1,
            explanation: "A minimal set is a group of words that differ in only one sound segment, such as 'bat', 'pat', 'mat', 'cat', 'hat'."
        },
        {
            question: "What are allophones?",
            options: [
                "Different phonemes",
                "Variants of the same phoneme",
                "Different languages",
                "Different words"
            ],
            correct: 1,
            explanation: "Allophones are variants of the same phoneme that occur in complementary distribution or free variation."
        },
        {
            question: "Which is NOT a phonological process?",
            options: ["Assimilation", "Dissimilation", "Translation", "Deletion"],
            correct: 2,
            explanation: "Translation is not a phonological process. Common processes include assimilation, dissimilation, deletion, insertion, metathesis, and vowel reduction."
        },
        {
            question: "Phonological data analysis typically includes:",
            options: [
                "Only transcribing data",
                "Transcribing, finding minimal pairs, identifying allophones, discovering rules",
                "Only finding rules",
                "Only identifying phonemes"
            ],
            correct: 1,
            explanation: "Phonological data analysis includes transcribing data, looking for minimal pairs, identifying allophones, discovering rules, analyzing syllable structure, and identifying processes."
        },
        {
            question: "What is vowel reduction?",
            options: [
                "Making vowels louder",
                "Full vowels becoming schwa in unstressed positions",
                "Removing all vowels",
                "Changing vowel quality"
            ],
            correct: 1,
            explanation: "Vowel reduction is when full vowels become schwa (a reduced vowel) in unstressed positions, a common phonological process."
        },
        {
            question: "Which term describes sounds that are phonemic (meaningful) in a language?",
            options: ["Allophones", "Phonemes", "Phones", "Graphemes"],
            correct: 1,
            explanation: "Phonemes are the meaningful sound units in a language - sounds that can distinguish words (like /b/ and /p/ in 'bat' vs 'pat')."
        },
        {
            question: "What is metathesis?",
            options: [
                "Sound deletion",
                "Reordering of sounds",
                "Sound insertion",
                "Sound change"
            ],
            correct: 1,
            explanation: "Metathesis is a phonological process involving the reordering of sounds, such as 'ask' historically becoming 'aks' in some dialects."
        },
        {
            question: "In phonological analysis, what helps identify phonemes?",
            options: [
                "Only transcription",
                "Minimal pairs and sets",
                "Only sound quality",
                "Only spelling"
            ],
            correct: 1,
            explanation: "Minimal pairs and sets are crucial for identifying phonemes because they show which sound differences are meaningful (phonemic) in a language."
        },
        {
            question: "What is dissimilation?",
            options: [
                "Sounds becoming more similar",
                "Sounds becoming less similar to avoid repetition",
                "Sound deletion",
                "Sound insertion"
            ],
            correct: 1,
            explanation: "Dissimilation is when sounds become less similar to avoid repetition, making pronunciation easier."
        },
        {
            question: "Which is true about phonetics vs phonology?",
            options: [
                "Phonetics asks 'How are sounds organized?', Phonology asks 'What sounds can humans produce?'",
                "Phonetics asks 'What sounds can humans produce?', Phonology asks 'How are sounds organized?'",
                "They ask the same questions",
                "Neither studies sounds"
            ],
            correct: 1,
            explanation: "Phonetics asks 'What sounds can humans produce?' (universal), while Phonology asks 'How are sounds organized and used in this language?' (language-specific)."
        },
        {
            question: "What is insertion in phonological processes?",
            options: [
                "Removing sounds",
                "Adding sounds",
                "Changing sounds",
                "Reordering sounds"
            ],
            correct: 1,
            explanation: "Insertion is a phonological process where sounds are added in certain contexts, often to break up difficult consonant clusters."
        },
        {
            question: "Tones in tone languages function like:",
            options: [
                "Only vowels",
                "Consonants or vowels in distinguishing words",
                "Only consonants",
                "Punctuation"
            ],
            correct: 1,
            explanation: "In tone languages, tones are phonemic and function like consonants or vowels in distinguishing words - they can change meaning."
        },
        {
            question: "What does it mean when sounds are in complementary distribution?",
            options: [
                "They are different phonemes",
                "They are allophones of the same phoneme",
                "They always appear together",
                "They have the same meaning"
            ],
            correct: 1,
            explanation: "When sounds are in complementary distribution, they never appear in the same environment and are considered allophones (variants) of the same phoneme."
        },
        {
            question: "Which is an example of free variation?",
            options: [
                "'pin' vs 'spin'",
                "'economics' pronounced with [s] or [z]",
                "'bat' vs 'pat'",
                "'cat' vs 'dog'"
            ],
            correct: 1,
            explanation: "The final sound in 'economics' can be pronounced as either [s] or [z] without affecting meaning - this is free variation."
        },
        {
            question: "What is the primary focus of phonology?",
            options: [
                "Physical sound production",
                "Abstract mental representations of sounds",
                "Word meanings",
                "Sentence structure"
            ],
            correct: 1,
            explanation: "Phonology deals with the abstract, mental representations of sounds and their role in language structure, not the physical properties."
        },
        {
            question: "Why are minimal pairs important?",
            options: [
                "They show word relationships",
                "They help identify which sound differences are phonemic",
                "They show spelling patterns",
                "They show meaning relationships"
            ],
            correct: 1,
            explanation: "Minimal pairs help linguists determine which sound differences are phonemic (meaningful) versus phonetic (non-meaningful) in a language."
        },
        {
            question: "What is the relationship between allophones and phonemes?",
            options: [
                "They are the same",
                "Allophones are variants of phonemes",
                "Phonemes are variants of allophones",
                "They are unrelated"
            ],
            correct: 1,
            explanation: "Allophones are different pronunciations (variants) of the same phoneme that occur in different environments or as free variation."
        },
        {
            question: "In phonological analysis, what does 'rule ordering' refer to?",
            options: [
                "The order of words in sentences",
                "The sequence in which phonological rules apply",
                "The order of sounds in words",
                "The order of languages"
            ],
            correct: 1,
            explanation: "Rule ordering refers to the sequence in which phonological rules apply, which can affect the final output of sound changes."
        }
    ],
    "LIN 203": [
        {
            question: "What is a morpheme?",
            options: [
                "A word",
                "The smallest meaningful unit of language",
                "A sound",
                "A sentence"
            ],
            correct: 1,
            explanation: "A morpheme is the smallest meaningful unit of language that cannot be further divided into smaller meaningful parts."
        },
        {
            question: "Which word contains three morphemes?",
            options: ["cat", "unhappiness", "run", "happy"],
            correct: 1,
            explanation: "'Unhappiness' contains three morphemes: 'un-' (not), 'happy' (root), and '-ness' (noun-forming suffix)."
        },
        {
            question: "What is a free morpheme?",
            options: [
                "A morpheme that must attach to others",
                "A morpheme that can stand alone as a word",
                "A morpheme with no meaning",
                "A morpheme that changes meaning"
            ],
            correct: 1,
            explanation: "Free morphemes can stand alone as words, like 'cat', 'book', or 'happy'."
        },
        {
            question: "What is a bound morpheme?",
            options: [
                "A morpheme that can stand alone",
                "A morpheme that must attach to other morphemes",
                "A morpheme with no meaning",
                "A complete word"
            ],
            correct: 1,
            explanation: "Bound morphemes must attach to other morphemes, like '-ed', '-ing', 'un-', or '-ness'."
        },
        {
            question: "Which is an example of a derivational morpheme?",
            options: ["-s (plural)", "-ed (past tense)", "-ness (creates noun)", "-ing (present)"],
            correct: 2,
            explanation: "'-ness' is derivational because it creates a new word and changes word class (adjective 'happy' becomes noun 'happiness')."
        },
        {
            question: "Which is an example of an inflectional morpheme?",
            options: ["un-", "-ness", "-s (plural)", "pre-"],
            correct: 2,
            explanation: "'-s' for plural is inflectional because it modifies the word grammatically without changing word class (both 'cat' and 'cats' are nouns)."
        },
        {
            question: "What is the root morpheme in 'unhappiness'?",
            options: ["un-", "happy", "-ness", "unhappy"],
            correct: 1,
            explanation: "'Happy' is the root morpheme - the core meaning-bearing element in the word."
        },
        {
            question: "What is affixation?",
            options: [
                "Combining words",
                "Adding prefixes, suffixes, infixes, or circumfixes",
                "Removing morphemes",
                "Changing word order"
            ],
            correct: 1,
            explanation: "Affixation is the process of adding prefixes, suffixes, infixes, or circumfixes to roots or stems."
        },
        {
            question: "What is compounding?",
            options: [
                "Adding affixes",
                "Combining two or more free morphemes",
                "Removing morphemes",
                "Changing sounds"
            ],
            correct: 1,
            explanation: "Compounding combines two or more free morphemes to create new words, like 'blackboard' or 'greenhouse'."
        },
        {
            question: "Which is an example of compounding?",
            options: ["unhappy", "blackboard", "walked", "running"],
            correct: 1,
            explanation: "'Blackboard' is a compound word formed by combining two free morphemes: 'black' and 'board'."
        },
        {
            question: "What is reduplication?",
            options: [
                "Removing parts of words",
                "Repeating all or part of a word",
                "Adding affixes",
                "Changing word class"
            ],
            correct: 1,
            explanation: "Reduplication is repeating all or part of a word, used in some languages for plural, intensity, or other grammatical functions."
        },
        {
            question: "What is conversion or zero-derivation?",
            options: [
                "Adding affixes to change word class",
                "Changing word class without adding affixes",
                "Removing morphemes",
                "Combining words"
            ],
            correct: 1,
            explanation: "Conversion (zero-derivation) changes word class without adding affixes, like 'email' (noun) becoming 'email' (verb)."
        },
        {
            question: "What is blending?",
            options: [
                "Combining whole words",
                "Combining parts of two words",
                "Removing sounds",
                "Adding affixes"
            ],
            correct: 1,
            explanation: "Blending combines parts of two words to create a new word, like 'brunch' from 'breakfast' + 'lunch'."
        },
        {
            question: "Which is an example of clipping?",
            options: ["advertisement → ad", "run → running", "happy → unhappy", "cat → cats"],
            correct: 0,
            explanation: "Clipping is shortening words, like 'ad' from 'advertisement' or 'phone' from 'telephone'."
        },
        {
            question: "What are allomorphs?",
            options: [
                "Different morphemes",
                "Different pronunciations of the same morpheme",
                "Different words",
                "Different languages"
            ],
            correct: 1,
            explanation: "Allomorphs are different pronunciations (or forms) of the same morpheme in different contexts, like the plural '-s' in 'cats' [s] vs 'dogs' [z]."
        },
        {
            question: "In English, inflectional morphemes are:",
            options: [
                "Always prefixes",
                "Always suffixes and limited in number",
                "Can be anywhere",
                "Unlimited"
            ],
            correct: 1,
            explanation: "In English, inflectional morphemes are always suffixes (like -s, -ed, -ing) and are limited to about 8 total."
        },
        {
            question: "What is backformation?",
            options: [
                "Adding affixes",
                "Creating simpler words from complex ones",
                "Combining words",
                "Removing all morphemes"
            ],
            correct: 1,
            explanation: "Backformation creates simpler words from complex ones, like 'edit' (verb) from 'editor' (noun), reversing the usual derivational process."
        },
        {
            question: "Which morphological process is most common in English?",
            options: ["Compounding", "Reduplication", "Affixation", "Conversion"],
            correct: 2,
            explanation: "Affixation (adding prefixes and suffixes) is the most common morphological process in English."
        },
        {
            question: "What is the difference between derivational and inflectional morphemes?",
            options: [
                "Derivational changes word class, inflectional doesn't",
                "Inflectional changes word class, derivational doesn't",
                "They are the same",
                "Derivational is always a prefix"
            ],
            correct: 0,
            explanation: "Derivational morphemes create new words or change word class (happy → happiness), while inflectional morphemes modify words grammatically without changing word class (cat → cats)."
        },
        {
            question: "What is a prefix?",
            options: [
                "An affix that comes after the root",
                "An affix that comes before the root",
                "A root morpheme",
                "A free morpheme"
            ],
            correct: 1,
            explanation: "A prefix is a bound morpheme that attaches before the root, like 'un-' in 'unhappy' or 'pre-' in 'preview'."
        },
        {
            question: "What is a suffix?",
            options: [
                "An affix that comes before the root",
                "An affix that comes after the root",
                "A root morpheme",
                "A free morpheme"
            ],
            correct: 1,
            explanation: "A suffix is a bound morpheme that attaches after the root, like '-ed' in 'walked' or '-ness' in 'happiness'."
        },
        {
            question: "Which word has only one morpheme?",
            options: ["unhappiness", "cats", "run", "walked"],
            correct: 2,
            explanation: "'Run' is a single free morpheme. 'Unhappiness' has 3, 'cats' has 2, and 'walked' has 2 morphemes."
        },
        {
            question: "What is an infix?",
            options: [
                "An affix before the root",
                "An affix after the root",
                "An affix inserted into a word",
                "A root morpheme"
            ],
            correct: 2,
            explanation: "An infix is an affix inserted into the middle of a word, though this is rare in English but common in some languages."
        },
        {
            question: "Morphemes are:",
            options: [
                "Always concrete",
                "Abstract units that may have different pronunciations",
                "Always pronounced the same",
                "Only found in English"
            ],
            correct: 1,
            explanation: "Morphemes are abstract units - they may have different pronunciations (allomorphs) in different contexts but maintain the same meaning."
        },
        {
            question: "What does morphology study?",
            options: [
                "Sentence structure",
                "Word formation and structure",
                "Sound systems",
                "Language meaning"
            ],
            correct: 1,
            explanation: "Morphology is the study of word formation and structure, including how words are built from morphemes."
        },
        {
            question: "Which is NOT a morphological process?",
            options: ["Affixation", "Compounding", "Syntax", "Reduplication"],
            correct: 2,
            explanation: "Syntax is the study of sentence structure, not a morphological process. Morphological processes include affixation, compounding, reduplication, etc."
        },
        {
            question: "In 'walked', what type of morpheme is '-ed'?",
            options: ["Derivational", "Inflectional", "Root", "Free"],
            correct: 1,
            explanation: "'-ed' is inflectional because it modifies the verb grammatically (past tense) without changing word class - 'walk' and 'walked' are both verbs."
        },
        {
            question: "What is the stem in 'unhappiness'?",
            options: ["un-", "happy", "unhappy", "-ness"],
            correct: 2,
            explanation: "The stem is 'unhappy' - it's what the suffix '-ness' attaches to. The root is 'happy'."
        },
        {
            question: "Which process creates 'brunch' from 'breakfast' and 'lunch'?",
            options: ["Compounding", "Blending", "Clipping", "Backformation"],
            correct: 1,
            explanation: "Blending combines parts of two words: 'br-' from 'breakfast' and '-unch' from 'lunch'."
        },
        {
            question: "What is the primary function of derivational morphemes?",
            options: [
                "To modify grammar",
                "To create new words or change word class",
                "To show tense",
                "To show number"
            ],
            correct: 1,
            explanation: "Derivational morphemes create new words or change word class (e.g., 'happy' adjective → 'happiness' noun), unlike inflectional morphemes which modify grammar."
        }
    ],
    "LIN 205": [
        {
            question: "What is diachronic linguistics?",
            options: [
                "Study of language at one point in time",
                "Study of language change over time",
                "Study of language structure",
                "Study of language meaning"
            ],
            correct: 1,
            explanation: "Diachronic linguistics (historical linguistics) studies language change over time, examining how languages evolve, split, merge, and develop."
        },
        {
            question: "What is synchronic linguistics?",
            options: [
                "Study of language change over time",
                "Study of language at a particular point in time",
                "Study of language families",
                "Study of language contact"
            ],
            correct: 1,
            explanation: "Synchronic linguistics studies language at a particular point in time, focusing on structure and function as it exists at a specific moment."
        },
        {
            question: "Which linguist emphasized the diachronic/synchronic distinction?",
            options: ["Noam Chomsky", "Ferdinand de Saussure", "William Labov", "Leonard Bloomfield"],
            correct: 1,
            explanation: "Ferdinand de Saussure emphasized the distinction between diachronic (through time) and synchronic (at one time) linguistics."
        },
        {
            question: "What is the Great Vowel Shift?",
            options: [
                "A sound change in English",
                "A grammatical change",
                "A vocabulary change",
                "A writing system change"
            ],
            correct: 0,
            explanation: "The Great Vowel Shift was a major systematic sound change in English pronunciation that occurred between 1400-1700, affecting long vowels."
        },
        {
            question: "Languages change due to:",
            options: [
                "Only internal factors",
                "Only external factors",
                "Both internal and external factors",
                "No factors"
            ],
            correct: 2,
            explanation: "Language change occurs due to both internal factors (ease of articulation, analogy) and external factors (language contact, social change, technology)."
        },
        {
            question: "What is a proto-language?",
            options: [
                "A modern language",
                "A reconstructed common ancestor of related languages",
                "A dead language",
                "A creole language"
            ],
            correct: 1,
            explanation: "A proto-language is a reconstructed common ancestor of related languages, like Proto-Indo-European, reconstructed using the comparative method."
        },
        {
            question: "What is the comparative method?",
            options: [
                "Comparing modern languages only",
                "Reconstructing proto-languages by comparing related languages",
                "Comparing writing systems",
                "Comparing dialects"
            ],
            correct: 1,
            explanation: "The comparative method reconstructs proto-languages by systematically comparing related languages to identify regular sound correspondences."
        },
        {
            question: "Genetically related languages:",
            options: [
                "Are in geographic proximity",
                "Descend from a common ancestor",
                "Have similar writing systems",
                "Are always mutually intelligible"
            ],
            correct: 1,
            explanation: "Genetically related languages descend from a common ancestor (proto-language) and form language families."
        },
        {
            question: "What is areal relationship?",
            options: [
                "Genetic relationship",
                "Relationship through geographic proximity and contact",
                "Relationship through writing",
                "No relationship"
            ],
            correct: 1,
            explanation: "Areal relationships occur when languages in geographic proximity influence each other through borrowing, even if they're not genetically related."
        },
        {
            question: "Which is an example of a language family?",
            options: ["English and French", "Indo-European", "All European languages", "All world languages"],
            correct: 1,
            explanation: "Indo-European is a language family that includes English, Spanish, Hindi, Russian, and many other languages descended from Proto-Indo-European."
        },
        {
            question: "What is semantic change?",
            options: [
                "Sound change",
                "Meaning change in words",
                "Grammatical change",
                "Writing system change"
            ],
            correct: 1,
            explanation: "Semantic change involves meanings expanding, narrowing, shifting, or becoming pejorative/ameliorative over time."
        },
        {
            question: "What is borrowing in language change?",
            options: [
                "Losing words",
                "Adopting words from other languages",
                "Changing sounds",
                "Changing grammar"
            ],
            correct: 1,
            explanation: "Borrowing is adopting words from other languages, a common external factor in language change."
        },
        {
            question: "The naturalness principle suggests languages tend to:",
            options: [
                "Become more complex",
                "Develop in natural, efficient ways",
                "Resist all change",
                "Change randomly"
            ],
            correct: 1,
            explanation: "The naturalness principle suggests languages tend to develop in ways that are natural, efficient, and follow universal tendencies."
        },
        {
            question: "What is ease of articulation?",
            options: [
                "Making sounds harder to produce",
                "Preferring sounds and structures easier to produce",
                "Avoiding all sound changes",
                "Using more sounds"
            ],
            correct: 1,
            explanation: "Ease of articulation is a naturalness principle where languages prefer sounds and structures that are easier to produce."
        },
        {
            question: "Language change is:",
            options: [
                "Unnatural and should be prevented",
                "Natural and inevitable",
                "Only temporary",
                "Only in vocabulary"
            ],
            correct: 1,
            explanation: "Language change is natural and inevitable - no language remains static over time."
        },
        {
            question: "What is regularization?",
            options: [
                "Making patterns more irregular",
                "Making irregular patterns more regular",
                "Removing all patterns",
                "Creating new patterns randomly"
            ],
            correct: 1,
            explanation: "Regularization is an internal factor where languages tend toward regular patterns, like irregular verbs becoming regular over time."
        },
        {
            question: "Changes in language typically spread:",
            options: [
                "Instantly to everyone",
                "Gradually through communities",
                "Only to young people",
                "Only to old people"
            ],
            correct: 1,
            explanation: "Language changes spread through communities gradually, often starting with younger speakers or specific social groups."
        },
        {
            question: "What is a pidgin?",
            options: [
                "A fully developed language",
                "A simplified contact language",
                "A proto-language",
                "A dead language"
            ],
            correct: 1,
            explanation: "A pidgin is a simplified contact language that develops when speakers of different languages need to communicate, often in trade situations."
        },
        {
            question: "What is a creole?",
            options: [
                "A pidgin",
                "A pidgin that becomes a native language",
                "A proto-language",
                "A dialect"
            ],
            correct: 1,
            explanation: "A creole is a pidgin that has become the native language of a community and has developed into a full language with native speakers."
        },
        {
            question: "The degree of language relationship is measured by:",
            options: [
                "Only vocabulary",
                "Shared vocabulary, grammar, and sound correspondences",
                "Only grammar",
                "Only writing systems"
            ],
            correct: 1,
            explanation: "The degree of relationship between languages is measured by shared vocabulary, grammar, and sound correspondences."
        },
        {
            question: "What is iconicity?",
            options: [
                "Form not reflecting meaning",
                "Form reflecting meaning where possible",
                "Random form-meaning relationship",
                "No relationship between form and meaning"
            ],
            correct: 1,
            explanation: "Iconicity is a naturalness principle where form reflects meaning where possible, making language more intuitive."
        },
        {
            question: "What is economy in language?",
            options: [
                "Using more resources",
                "Efficient use of linguistic resources",
                "Avoiding efficiency",
                "Creating complexity"
            ],
            correct: 1,
            explanation: "Economy is a naturalness principle involving efficient use of linguistic resources, avoiding unnecessary complexity."
        },
        {
            question: "Language families branch into:",
            options: [
                "Only individual languages",
                "Subfamilies and individual languages",
                "Only subfamilies",
                "Unrelated languages"
            ],
            correct: 1,
            explanation: "Language families branch into subfamilies (like Germanic, Romance within Indo-European) and then into individual languages."
        },
        {
            question: "What is lexical change?",
            options: [
                "Only adding words",
                "Adding words, losing words, or meaning shifts",
                "Only losing words",
                "Only sound change"
            ],
            correct: 1,
            explanation: "Lexical change involves new words being added (borrowing, coinage), old words being lost, or meanings shifting over time."
        },
        {
            question: "What is grammatical change?",
            options: [
                "Only simplification",
                "Simplification, complexification, or word order changes",
                "Only complexification",
                "Only vocabulary change"
            ],
            correct: 1,
            explanation: "Grammatical change can involve simplification or complexification of grammar, word order changes, and other structural modifications."
        },
        {
            question: "Some language changes are:",
            options: [
                "All permanent",
                "Temporary (slang) or permanent",
                "All temporary",
                "Never occur"
            ],
            correct: 1,
            explanation: "Some changes are temporary (like slang that fades), while others become permanent parts of the language."
        },
        {
            question: "Understanding language relationships helps:",
            options: [
                "Only with modern languages",
                "Trace migration patterns, cultural history, and language evolution",
                "Only with writing systems",
                "Only with sounds"
            ],
            correct: 1,
            explanation: "Understanding language relationships helps trace migration patterns, cultural history, and language evolution through time."
        },
        {
            question: "Naturalness competes with:",
            options: [
                "Only other natural factors",
                "Historical inertia, social factors, and language contact",
                "Nothing",
                "Only social factors"
            ],
            correct: 1,
            explanation: "Naturalness competes with other factors like historical inertia, social factors, and language contact, creating a balance in language development."
        },
        {
            question: "Languages sometimes maintain 'unnatural' features because of:",
            options: [
                "Only historical reasons",
                "Historical or social reasons",
                "No reason",
                "Only social reasons"
            ],
            correct: 1,
            explanation: "Languages balance naturalness with functionality, sometimes maintaining 'unnatural' features for historical or social reasons."
        },
        {
            question: "Diachronic studies might examine:",
            options: [
                "Only modern language",
                "How Old English became Modern English",
                "Only language structure",
                "Only vocabulary"
            ],
            correct: 1,
            explanation: "Diachronic studies examine language change over time, such as how Old English evolved into Modern English through various changes."
        }
    ],
    "LIN 207": [
        {
            question: "What is a writing system?",
            options: [
                "How language is spoken",
                "How a language is written using visible symbols",
                "Language grammar",
                "Language sounds"
            ],
            correct: 1,
            explanation: "A writing system is how a language is written using visible symbols, allowing spoken language to be recorded, shared, and preserved."
        },
        {
            question: "What is orthography design?",
            options: [
                "Speaking clearly",
                "The planned creation or standardization of a writing system",
                "Learning to read",
                "Teaching language"
            ],
            correct: 1,
            explanation: "Orthography design is the planned creation or standardization of a writing system, especially for languages that didn't have a fixed way of writing before."
        },
        {
            question: "A well-designed orthography:",
            options: [
                "Makes literacy harder",
                "Helps people read and learn easily",
                "Causes confusion",
                "Is unnecessary"
            ],
            correct: 1,
            explanation: "A well-designed orthography helps people read and learn easily and supports cultural identity, while a poorly designed one makes literacy harder."
        },
        {
            question: "What is a script?",
            options: [
                "A language",
                "The visual form of symbols (like Latin, Arabic, Cyrillic)",
                "A word",
                "A sound"
            ],
            correct: 1,
            explanation: "A script is the visual form of the symbols. One script can be used by many languages (e.g., Latin script is used for English, Spanish, French)."
        },
        {
            question: "What is orthography?",
            options: [
                "Only spelling",
                "The official spelling and writing rules covering symbols, spelling, capitalization, punctuation, and spacing",
                "Only punctuation",
                "Only capitalization"
            ],
            correct: 1,
            explanation: "Orthography is the official spelling and writing rules of a language, covering which symbols are used, spelling rules, capitalization, punctuation, and spacing."
        },
        {
            question: "What is a grapheme?",
            options: [
                "A sound",
                "The smallest written unit",
                "A word",
                "A sentence"
            ],
            correct: 1,
            explanation: "A grapheme is the smallest written unit, like letters or letter combinations (a, b, sh)."
        },
        {
            question: "What is a phoneme?",
            options: [
                "A written symbol",
                "The smallest sound unit that can change meaning",
                "A word",
                "A sentence"
            ],
            correct: 1,
            explanation: "A phoneme is the smallest sound unit that can change meaning. Orthography often tries to match graphemes to phonemes."
        },
        {
            question: "In logographic systems:",
            options: [
                "Symbols represent sounds",
                "Each symbol represents a word or meaning",
                "Symbols represent syllables",
                "Only consonants are written"
            ],
            correct: 1,
            explanation: "In logographic systems, each symbol represents a word or meaning, like Chinese characters."
        },
        {
            question: "Which is an example of a logographic system?",
            options: ["English alphabet", "Chinese characters", "Japanese Kana", "Arabic script"],
            correct: 1,
            explanation: "Chinese characters are an example of a logographic writing system where each symbol represents a word or meaning."
        },
        {
            question: "Pros of logographic systems include:",
            options: [
                "Easy to learn",
                "Meaning is clear; works across dialects",
                "Few symbols needed",
                "Perfect sound representation"
            ],
            correct: 1,
            explanation: "Logographic systems have clear meaning and work across dialects, but require learning thousands of symbols."
        },
        {
            question: "In syllabic systems:",
            options: [
                "Symbols represent words",
                "Each symbol represents a syllable",
                "Symbols represent individual sounds",
                "Only vowels are written"
            ],
            correct: 1,
            explanation: "In syllabic systems, each symbol represents a syllable, like Japanese Kana (hiragana and katakana)."
        },
        {
            question: "Which is an example of a syllabic system?",
            options: ["Chinese", "Japanese Kana", "English", "Arabic"],
            correct: 1,
            explanation: "Japanese Kana (hiragana and katakana) are examples of syllabic writing systems."
        },
        {
            question: "Pros of syllabic systems include:",
            options: [
                "Thousands of symbols",
                "Easy sound-to-symbol matching",
                "Works across all languages",
                "No symbols needed"
            ],
            correct: 1,
            explanation: "Syllabic systems have easy sound-to-symbol matching, but need many symbols if the language has many syllables."
        },
        {
            question: "In alphabetic systems:",
            options: [
                "Symbols represent words",
                "Symbols represent individual sounds (phonemes)",
                "Symbols represent syllables",
                "Only consonants are written"
            ],
            correct: 1,
            explanation: "In alphabetic systems, symbols represent individual sounds (phonemes), like the Latin, Cyrillic, or Greek alphabets."
        },
        {
            question: "Which is an example of an alphabetic system?",
            options: ["Chinese", "Japanese Kana", "Latin alphabet (English, Spanish)", "Arabic"],
            correct: 2,
            explanation: "The Latin alphabet used for English, Spanish, French, and many other languages is an alphabetic system."
        },
        {
            question: "Pros of alphabetic systems include:",
            options: [
                "Many symbols needed",
                "Few symbols; very flexible",
                "Hard to learn",
                "Only for one language"
            ],
            correct: 1,
            explanation: "Alphabetic systems need few symbols and are very flexible, though some sounds may not be perfectly represented."
        },
        {
            question: "In abjad systems:",
            options: [
                "All sounds are written",
                "Mainly consonants are written; vowels are optional",
                "Only vowels are written",
                "Symbols represent words"
            ],
            correct: 1,
            explanation: "Abjad systems mainly write consonants; vowels are optional or missing, like Arabic and Hebrew."
        },
        {
            question: "Which is an example of an abjad system?",
            options: ["English", "Arabic", "Chinese", "Japanese"],
            correct: 1,
            explanation: "Arabic and Hebrew are examples of abjad writing systems where mainly consonants are written."
        },
        {
            question: "In abugida systems:",
            options: [
                "Consonants have no vowels",
                "Consonants have a built-in vowel that can be changed",
                "Only vowels are written",
                "Symbols represent words"
            ],
            correct: 1,
            explanation: "In abugida systems, consonants have a built-in vowel that can be changed, like Devanagari used for Hindi."
        },
        {
            question: "Which is an example of an abugida system?",
            options: ["English", "Arabic", "Devanagari (Hindi)", "Chinese"],
            correct: 2,
            explanation: "Devanagari, used for Hindi and Sanskrit, is an example of an abugida writing system."
        },
        {
            question: "In featural systems:",
            options: [
                "Symbols are random",
                "Symbols show how sounds are produced",
                "Symbols represent words only",
                "No symbols are used"
            ],
            correct: 1,
            explanation: "In featural systems, symbols show how sounds are produced, like Korean Hangul where letter shapes reflect articulatory features."
        },
        {
            question: "Which is an example of a featural system?",
            options: ["English", "Chinese", "Korean Hangul", "Arabic"],
            correct: 2,
            explanation: "Korean Hangul is an example of a featural writing system where the shapes of letters reflect how sounds are produced."
        },
        {
            question: "Orthographies can be:",
            options: [
                "Only shallow",
                "Shallow (close sound-symbol correspondence) or deep (complex relationships)",
                "Only deep",
                "Neither shallow nor deep"
            ],
            correct: 1,
            explanation: "Orthographies can be shallow (like Spanish with close sound-symbol correspondence) or deep (like English with complex relationships)."
        },
        {
            question: "Good orthography design affects:",
            options: [
                "Only reading",
                "Literacy acquisition, reading efficiency, and language learning",
                "Only writing",
                "Only speaking"
            ],
            correct: 1,
            explanation: "Orthography design affects literacy acquisition, reading efficiency, and language learning - making it crucial for education."
        },
        {
            question: "Writing systems connect:",
            options: [
                "Only language and thinking",
                "Language, thinking, culture, education, and technology",
                "Only language and culture",
                "Only education"
            ],
            correct: 1,
            explanation: "Writing systems are not just about letters—they connect language, thinking, culture, education, and technology."
        },
        {
            question: "One script can be used by:",
            options: [
                "Only one language",
                "Many languages",
                "Only two languages",
                "No languages"
            ],
            correct: 1,
            explanation: "One script can be used by many languages. For example, the Latin script is used for English, Spanish, French, German, and many others."
        },
        {
            question: "When designing orthography, linguists must consider:",
            options: [
                "Only the sound system",
                "The language's sound system, cultural context, and practical needs",
                "Only cultural context",
                "Only practical needs"
            ],
            correct: 1,
            explanation: "When designing orthography for a language, linguists must consider the language's sound system, cultural context, and practical needs of the community."
        },
        {
            question: "The choice of writing system affects:",
            options: [
                "Only literacy rates",
                "Literacy rates, educational outcomes, and cultural identity",
                "Only educational outcomes",
                "Only cultural identity"
            ],
            correct: 1,
            explanation: "The choice of writing system affects literacy rates, educational outcomes, and cultural identity - making it a crucial decision."
        },
        {
            question: "Cons of logographic systems include:",
            options: [
                "Easy to learn",
                "Very hard to learn; thousands of symbols",
                "Few symbols",
                "Perfect representation"
            ],
            correct: 1,
            explanation: "Logographic systems are very hard to learn because they require memorizing thousands of symbols."
        },
        {
            question: "Cons of syllabic systems include:",
            options: [
                "Few symbols needed",
                "Needs many symbols if the language has many syllables",
                "Easy to learn all",
                "Perfect for all languages"
            ],
            correct: 1,
            explanation: "Syllabic systems need many symbols if the language has many syllables, which can make them complex."
        },
        {
            question: "Cons of alphabetic systems include:",
            options: [
                "Many symbols needed",
                "Some sounds may not be perfectly represented",
                "Hard to learn",
                "Only for one language"
            ],
            correct: 1,
            explanation: "While alphabetic systems are flexible, some sounds may not be perfectly represented, and spelling can become irregular over time."
        }
    ],
    "LIN 209": [
        {
            question: "What is broadcasting?",
            options: [
                "One-to-one communication",
                "Distribution of audio or video content to a dispersed audience",
                "Only radio",
                "Only television"
            ],
            correct: 1,
            explanation: "Broadcasting is the distribution of audio or video content to a dispersed audience via electronic mass communications medium."
        },
        {
            question: "Linguistics and broadcasting have:",
            options: [
                "No relationship",
                "A symbiotic relationship",
                "Only one-way influence",
                "Conflicting goals"
            ],
            correct: 1,
            explanation: "Linguistics and broadcasting have a symbiotic relationship - linguistics provides theoretical foundation, broadcasting offers linguistic data."
        },
        {
            question: "Linguistics helps broadcasters understand:",
            options: [
                "Only grammar",
                "Language variation, language change, pragmatics, discourse analysis, and sociolinguistics",
                "Only sounds",
                "Only words"
            ],
            correct: 1,
            explanation: "Linguistics helps broadcasters understand language variation, language change, pragmatics, discourse analysis, and sociolinguistics."
        },
        {
            question: "Broadcasting serves functions including:",
            options: [
                "Only entertainment",
                "Informing, educating, entertaining, and persuading",
                "Only informing",
                "Only persuading"
            ],
            correct: 1,
            explanation: "Broadcasting serves multiple functions: informing (news), educating (documentaries), entertaining (shows), and persuading (advertising)."
        },
        {
            question: "Channels of communication in broadcasting include:",
            options: [
                "Only radio",
                "Radio, television, internet, mobile platforms",
                "Only television",
                "Only internet"
            ],
            correct: 1,
            explanation: "Channels include radio, television, internet (streaming, podcasts), and mobile platforms, each with unique characteristics."
        },
        {
            question: "Broadcasting is important for:",
            options: [
                "Only entertainment",
                "Information dissemination, education, cultural preservation, social cohesion, and democracy",
                "Only news",
                "Only advertising"
            ],
            correct: 1,
            explanation: "Broadcasting is crucial for information dissemination, education, cultural preservation, social cohesion, democracy, and more."
        },
        {
            question: "What is language variation?",
            options: [
                "Only dialects",
                "Dialects, accents, and other language differences",
                "Only accents",
                "Language change"
            ],
            correct: 1,
            explanation: "Language variation includes dialects, accents, and other differences that linguistics helps broadcasters understand and use appropriately."
        },
        {
            question: "Broadcasting influences:",
            options: [
                "Only entertainment",
                "Language norms, language standardization, and language change",
                "Only language change",
                "Nothing"
            ],
            correct: 1,
            explanation: "Broadcasting reaches mass audiences and influences language norms, making it a powerful force in language standardization and change."
        },
        {
            question: "What is pragmatics?",
            options: [
                "Grammar rules",
                "How meaning is conveyed beyond words",
                "Sound systems",
                "Word formation"
            ],
            correct: 1,
            explanation: "Pragmatics studies how meaning is conveyed beyond words - context, implications, and speaker intentions - important for broadcasting."
        },
        {
            question: "What is discourse analysis?",
            options: [
                "Word analysis",
                "How messages are structured",
                "Sound analysis",
                "Grammar analysis"
            ],
            correct: 1,
            explanation: "Discourse analysis examines how messages are structured, which helps broadcasters create effective communication."
        },
        {
            question: "Modern broadcasting extends to:",
            options: [
                "Only radio and TV",
                "Internet streaming, podcasts, and digital platforms",
                "Only radio",
                "Only TV"
            ],
            correct: 1,
            explanation: "Modern broadcasting extends beyond traditional radio and TV to include internet streaming, podcasts, and digital platforms."
        },
        {
            question: "Each broadcasting channel has:",
            options: [
                "Same characteristics",
                "Unique characteristics in reach, immediacy, interactivity, and engagement",
                "No characteristics",
                "Only one characteristic"
            ],
            correct: 1,
            explanation: "Channels differ in reach, immediacy, interactivity, and audience engagement, affecting language use and message structure."
        },
        {
            question: "Broadcasting creates:",
            options: [
                "Only jobs",
                "Shared experiences and common knowledge, fostering community",
                "Only entertainment",
                "Only information"
            ],
            correct: 1,
            explanation: "Broadcasting creates shared experiences and common knowledge, fostering social cohesion and community."
        },
        {
            question: "Broadcasting enables:",
            options: [
                "Only entertainment",
                "Public discourse, political communication, and citizen engagement",
                "Only news",
                "Only advertising"
            ],
            correct: 1,
            explanation: "Broadcasting enables public discourse, political communication, and citizen engagement, supporting democracy."
        },
        {
            question: "Broadcasting shapes:",
            options: [
                "Only opinions",
                "Public opinion, influences language change, and serves as primary information source",
                "Only language",
                "Only culture"
            ],
            correct: 1,
            explanation: "Broadcasting shapes public opinion, influences language change, and serves as a primary source of information for billions worldwide."
        },
        {
            question: "What is sociolinguistics?",
            options: [
                "Only social aspects",
                "How language reflects and shapes society",
                "Only language structure",
                "Only society"
            ],
            correct: 1,
            explanation: "Sociolinguistics studies how language reflects and shapes society, helping broadcasters understand audience and context."
        },
        {
            question: "Broadcasters apply linguistic knowledge to:",
            options: [
                "Only pronunciation",
                "Choose appropriate language, understand regional variations, and create effective communication",
                "Only grammar",
                "Only vocabulary"
            ],
            correct: 1,
            explanation: "Broadcasters apply linguistic knowledge to choose appropriate language for audiences, understand regional variations, and create effective communication."
        },
        {
            question: "Cross-platform broadcasting:",
            options: [
                "Uses one channel",
                "Uses multiple channels simultaneously to maximize reach",
                "Doesn't exist",
                "Is outdated"
            ],
            correct: 1,
            explanation: "Modern broadcasting often uses multiple channels simultaneously (cross-platform broadcasting) to maximize reach and engagement."
        },
        {
            question: "The choice of channel affects:",
            options: [
                "Only audience size",
                "Language use, message structure, and audience interaction",
                "Only message length",
                "Only content type"
            ],
            correct: 1,
            explanation: "The choice of channel affects language use, message structure, and audience interaction - each channel has unique requirements."
        },
        {
            question: "Broadcasting is critical for:",
            options: [
                "Only entertainment",
                "Emergency communication during disasters",
                "Only news",
                "Only education"
            ],
            correct: 1,
            explanation: "Broadcasting is critical for public safety during disasters, providing emergency information to mass audiences."
        },
        {
            question: "Broadcasting facilitates:",
            options: [
                "Only local communication",
                "Cross-cultural communication and understanding (globalization)",
                "Only national communication",
                "Only regional communication"
            ],
            correct: 1,
            explanation: "Broadcasting facilitates cross-cultural communication and understanding, supporting globalization and international connections."
        },
        {
            question: "Key characteristics of broadcasting include:",
            options: [
                "Only one-to-many",
                "One-to-many communication, real-time or recorded transmission, mass reach, and professional production",
                "Only mass reach",
                "Only professional production"
            ],
            correct: 1,
            explanation: "Key characteristics include one-to-many communication, real-time or recorded transmission, mass reach, and professional production."
        },
        {
            question: "Broadcasting provides:",
            options: [
                "Only entertainment",
                "Educational content, documentaries, and learning resources accessible to many",
                "Only news",
                "Only music"
            ],
            correct: 1,
            explanation: "Broadcasting provides educational content, documentaries, and learning resources accessible to many people."
        },
        {
            question: "Broadcasting showcases:",
            options: [
                "Only mainstream culture",
                "Local cultures, languages, music, and traditions",
                "Only international culture",
                "Only modern culture"
            ],
            correct: 1,
            explanation: "Broadcasting showcases local cultures, languages, music, and traditions, supporting cultural preservation and promotion."
        },
        {
            question: "Broadcasting has:",
            options: [
                "No economic impact",
                "Significant economic impact through jobs, advertising, and supporting industries",
                "Only negative impact",
                "Only small impact"
            ],
            correct: 1,
            explanation: "Broadcasting has significant economic impact - it creates jobs, drives advertising, and supports various industries."
        },
        {
            question: "Internet broadcasting allows:",
            options: [
                "Only one-way communication",
                "Interactivity and on-demand access",
                "No interaction",
                "Only live content"
            ],
            correct: 1,
            explanation: "Internet broadcasting allows interactivity and on-demand access, unlike traditional one-way broadcasting."
        },
        {
            question: "Radio emphasizes:",
            options: [
                "Visual elements",
                "Voice and sound",
                "Text",
                "Images"
            ],
            correct: 1,
            explanation: "Radio emphasizes voice and sound, making linguistic elements like pronunciation, intonation, and voice quality crucial."
        },
        {
            question: "Television combines:",
            options: [
                "Only audio",
                "Audio-visual elements",
                "Only visual",
                "Only text"
            ],
            correct: 1,
            explanation: "Television combines audio-visual elements, requiring coordination of spoken language with visual content."
        },
        {
            question: "Broadcasting reaches:",
            options: [
                "Only local audiences",
                "Mass audiences, often anonymous and widely dispersed",
                "Only known audiences",
                "Only small groups"
            ],
            correct: 1,
            explanation: "Broadcasting reaches mass audiences, often anonymous and widely dispersed, requiring careful language choices."
        },
        {
            question: "The relationship between linguistics and broadcasting is crucial because:",
            options: [
                "They are unrelated",
                "Broadcasting reaches mass audiences and influences language norms",
                "Only linguistics matters",
                "Only broadcasting matters"
            ],
            correct: 1,
            explanation: "The relationship is crucial because broadcasting reaches mass audiences and influences language norms, making it a powerful force in language standardization and change."
        }
    ]
};

// Test state
let currentTest = {
    course: "",
    courseCode: "",
    questions: [],
    answers: [],
    currentQuestionIndex: 0,
    startTime: null
};

let timerInterval = null;
let startTime = null;

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
    // First shuffle the questions array
    const shuffledQuestions = shuffleArray(questions);
    
    // Then shuffle options within each question and update correct answer index
    return shuffledQuestions.map(question => {
        // Create array of option indices
        const optionIndices = question.options.map((_, index) => index);
        const shuffledIndices = shuffleArray(optionIndices);
        
        // Create new options array in shuffled order
        const shuffledOptions = shuffledIndices.map(index => question.options[index]);
        
        // Find new index of correct answer
        const newCorrectIndex = shuffledIndices.indexOf(question.correct);
        
        return {
            question: question.question,
            options: shuffledOptions,
            correct: newCorrectIndex,
            explanation: question.explanation
        };
    });
}

// Initialize
function startTest() {
    const courseSelect = document.getElementById('courseSelect');
    const selectedCourse = courseSelect.value;
    
    if (!selectedCourse) {
        alert('Please select a course first!');
        return;
    }
    
    // Use new question bank system if available, otherwise fall back to old system
    let originalQuestions = [];
    
    if (typeof getQuestionsForCourse === 'function' && typeof questionBank !== 'undefined' && questionBank[selectedCourse]) {
        // Use new rotation system - gets up to 30 different questions each time
        originalQuestions = getQuestionsForCourse(selectedCourse, 30);
    } else if (testQuestions[selectedCourse]) {
        // Fall back to old system
        originalQuestions = testQuestions[selectedCourse];
    } else {
        alert('Test questions not available for this course!');
        return;
    }
    
    if (originalQuestions.length === 0) {
        alert('No questions available for this course. Please try another course.');
        return;
    }
    
    // Shuffle questions and options
    const shuffledQuestions = shuffleQuestions(originalQuestions);
    
    // Initialize test
    currentTest.course = selectedCourse;
    currentTest.courseCode = selectedCourse;
    currentTest.questions = shuffledQuestions;
    currentTest.answers = new Array(currentTest.questions.length).fill(null);
    currentTest.currentQuestionIndex = 0;
    currentTest.startTime = new Date();
    
    // Hide controls, show test
    document.getElementById('testControls').style.display = 'none';
    document.getElementById('testContainer').style.display = 'block';
    document.getElementById('resultsContainer').style.display = 'none';
    
    // Update course title
    document.getElementById('testCourseTitle').textContent = selectedCourse;
    document.getElementById('totalQuestions').textContent = currentTest.questions.length;
    
    // Start timer
    startTimer();
    
    // Display first question
    displayQuestion();
    updateNavigationButtons();
}

function displayQuestion() {
    const question = currentTest.questions[currentTest.currentQuestionIndex];
    const questionContainer = document.getElementById('questionContainer');
    const currentAnswer = currentTest.answers[currentTest.currentQuestionIndex];
    
    document.getElementById('currentQuestion').textContent = currentTest.currentQuestionIndex + 1;
    
    let optionsHTML = question.options.map((option, index) => {
        const isChecked = currentAnswer === index ? 'checked' : '';
        const isSelected = currentAnswer === index ? 'selected' : '';
        return `
            <li class="option ${isSelected}" onclick="selectOption(${index})">
                <input type="radio" name="answer" value="${index}" ${isChecked} onclick="selectOption(${index})">
                <span>${option}</span>
            </li>
        `;
    }).join('');
    
    questionContainer.innerHTML = `
        <div class="question">
            <div class="question-text">${question.question}</div>
            <ul class="options">
                ${optionsHTML}
            </ul>
        </div>
    `;
}

function selectOption(optionIndex) {
    currentTest.answers[currentTest.currentQuestionIndex] = optionIndex;
    displayQuestion();
    updateNavigationButtons();
}

function previousQuestion() {
    if (currentTest.currentQuestionIndex > 0) {
        currentTest.currentQuestionIndex--;
        displayQuestion();
        updateNavigationButtons();
    }
}

function nextQuestion() {
    if (currentTest.currentQuestionIndex < currentTest.questions.length - 1) {
        currentTest.currentQuestionIndex++;
        displayQuestion();
        updateNavigationButtons();
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    prevBtn.disabled = currentTest.currentQuestionIndex === 0;
    
    if (currentTest.currentQuestionIndex === currentTest.questions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}

function submitTest() {
    // Check if all questions are answered
    const unanswered = currentTest.answers.some(answer => answer === null);
    if (unanswered) {
        if (!confirm('You have unanswered questions. Submit anyway?')) {
            return;
        }
    }
    
    // Stop timer
    stopTimer();
    
    // Calculate score
    let correct = 0;
    const wrongAnswers = [];
    
    currentTest.questions.forEach((question, index) => {
        if (currentTest.answers[index] === question.correct) {
            correct++;
        } else {
            wrongAnswers.push({
                question: question.question,
                userAnswer: question.options[currentTest.answers[index] || 0],
                correctAnswer: question.options[question.correct],
                explanation: question.explanation
            });
        }
    });
    
    const score = correct;
    const percentage = Math.round((correct / currentTest.questions.length) * 100);
    
    // Save certificate data if passed (70% or higher)
    const btnGetCertificate = document.getElementById('btnGetCertificate');
    const certificateEligibilityMessage = document.getElementById('certificateEligibilityMessage');
    if (percentage >= 70) {
        // Determine level
        let courseLevel = 'Beginner';
        if (currentTest.course.includes('10')) courseLevel = '100 Level';
        else if (currentTest.course.includes('20')) courseLevel = '200 Level';

        const certificateData = {
            passed: true,
            score: percentage,
            courseTitle: currentTest.course,
            courseLevel: courseLevel,
            date: new Date().toISOString(),
            studentName: null // Will be filled in certificate.html
        };
        localStorage.setItem('certificateData', JSON.stringify(certificateData));
        
        // Show button and eligibility message
        if (btnGetCertificate) btnGetCertificate.style.display = 'inline-block';
        if (certificateEligibilityMessage) certificateEligibilityMessage.style.display = 'block';
    } else {
        // Hide button if not passed
        if (btnGetCertificate) btnGetCertificate.style.display = 'none';
        if (certificateEligibilityMessage) certificateEligibilityMessage.style.display = 'none';
    }
    
    // Display results
    document.getElementById('testContainer').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'block';
    
    // Update score display
    document.getElementById('scoreNumber').textContent = score;
    document.getElementById('totalScore').textContent = currentTest.questions.length;
    document.getElementById('scorePercentage').textContent = percentage;
    
    // Record test score and completion for dashboard
    if (typeof userProfile !== 'undefined' && userProfile.recordTestScore) {
        userProfile.recordTestScore(currentTest.course, percentage);
    }
    
    // Display wrong answers with explanations
    const wrongAnswersContainer = document.getElementById('wrongAnswers');
    if (wrongAnswers.length === 0) {
        wrongAnswersContainer.innerHTML = `
            <div style="text-align: center; padding: 20px; background: #d4edda; border-radius: 6px; color: #155724;">
                <h3 style="color: #155724; margin-bottom: 10px;">🎉 Perfect Score!</h3>
                <p>You answered all questions correctly! Excellent work!</p>
            </div>
        `;
    } else {
        const wrongAnswersHTML = wrongAnswers.map((item, index) => `
            <div class="wrong-answer-item">
                <div class="question-text">Question ${index + 1}: ${item.question}</div>
                <p><strong>Your answer:</strong> <span style="color: #dc3545;">${item.userAnswer || 'Not answered'}</span></p>
                <p><strong>Correct answer:</strong> <span style="color: #28a745;">${item.correctAnswer}</span></p>
                <div class="explanation">
                    <strong>Explanation:</strong> ${item.explanation}
                </div>
            </div>
        `).join('');
        
        wrongAnswersContainer.innerHTML = `
            <h3>Review Your Mistakes (${wrongAnswers.length} incorrect)</h3>
            ${wrongAnswersHTML}
        `;
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function retakeTest() {
    const courseCode = currentTest.courseCode;
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('testControls').style.display = 'block';
    document.getElementById('courseSelect').value = courseCode;
    startTest();
}

function goHome() {
    window.location.href = 'home.html';
}

function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    startTime = Date.now();
    timerInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const minutes = Math.floor(elapsed / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        document.getElementById('timer').textContent = `Time: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
}

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const isExpanded = navMenu.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
        });
        
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }
});