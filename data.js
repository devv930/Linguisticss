// Global Data Source for Linguistics Website

// Site Pages
const sitePages = [
    { title: "Home", url: "index.html", keywords: "cover landing page" },
    { title: "Study Guide", url: "home.html", keywords: "courses topics linguistics 100 200 level" },
    { title: "Study Resources", url: "resources.html", keywords: "diagrams ipa chart vowel chart" },
    { title: "Flashcards", url: "flashcards.html", keywords: "terms definitions practice memory" },
    { title: "Practice Test", url: "test.html", keywords: "quiz exam questions" },
    { title: "Table of Contents", url: "toc.html", keywords: "list index" },
    { title: "AI Tutor", url: "ai-tutor.html", keywords: "help chat assistant" },
    { title: "Community", url: "community.html", keywords: "discussion chat group" },
    { title: "FAQs", url: "faq.html", keywords: "questions answers help" },
    { title: "About Us", url: "about.html", keywords: "team developers contact" },
    { title: "Certificate", url: "certificate.html", keywords: "certification award" },
    { title: "Certificate History", url: "certificate-history.html", keywords: "certificates history view collected" },
    { title: "Dashboard", url: "dashboard.html", keywords: "progress badges challenges achievements stats" },
    { title: "Profile", url: "profile.html", keywords: "user profile streak achievements statistics" }
];

// Flashcard Data
const flashcardData = [
    {
        term: "Phonology",
        definition: "The branch of linguistics that studies how sounds function in a particular language, focusing on sound patterns, organization, and rules."
    },
    {
        term: "Phonetics",
        definition: "The scientific study of speech sounds - how they are produced (articulatory), transmitted (acoustic), and perceived (auditory)."
    },
    {
        term: "Morphology",
        definition: "The branch of linguistics that studies word formation and the structure of words, including roots, affixes, and morphemes."
    },
    {
        term: "Syntax",
        definition: "The branch of linguistics that studies sentence structure and how words combine to form grammatical sentences."
    },
    {
        term: "Semantics",
        definition: "The branch of linguistics that studies meaning in language, including word meanings and how meanings combine."
    },
    {
        term: "Pragmatics",
        definition: "The branch of linguistics that studies language use in context and how meaning is conveyed beyond the literal words."
    },
    {
        term: "Morpheme",
        definition: "The smallest meaningful unit of language that cannot be further divided into smaller meaningful parts."
    },
    {
        term: "Phoneme",
        definition: "The smallest sound unit in a language that can distinguish meaning. For example, /p/ and /b/ are different phonemes in English."
    },
    {
        term: "Allophone",
        definition: "Variants of the same phoneme that don't change meaning. For example, aspirated [pʰ] and unaspirated [p] are allophones of /p/."
    },
    {
        term: "Minimal Pair",
        definition: "Two words that differ in meaning and differ in only one sound segment in the same position (e.g., 'bat' and 'pat')."
    },
    {
        term: "Arbitrariness",
        definition: "A characteristic of language where the relationship between words and their meanings is conventional, not natural."
    },
    {
        term: "Productivity",
        definition: "The ability of language to create infinite new sentences using finite linguistic resources."
    },
    {
        term: "Displacement",
        definition: "The ability of language to refer to things not present in time or space (past, future, or distant things)."
    },
    {
        term: "Competence",
        definition: "A speaker's underlying knowledge of their language - the mental grammar that allows production and understanding."
    },
    {
        term: "Performance",
        definition: "The actual use of language in real situations - what speakers actually say, including errors and variations."
    },
    {
        term: "Place of Articulation",
        definition: "Where in the vocal tract a sound is produced (e.g., bilabial, alveolar, velar)."
    },
    {
        term: "Manner of Articulation",
        definition: "How the air stream is modified to produce a sound (e.g., stop, fricative, nasal)."
    },
    {
        term: "Voicing",
        definition: "Whether the vocal cords vibrate during sound production. Voiced sounds have vibration, voiceless sounds don't."
    },
    {
        term: "Derivational Morphology",
        definition: "The process of creating new words or changing word class by adding affixes (e.g., 'happy' → 'happiness')."
    },
    {
        term: "Inflectional Morphology",
        definition: "The process of modifying words grammatically without changing word class (e.g., 'cat' → 'cats' for plural)."
    }
];

// Course Data
const courses100 = [
    {
        code: "LIN 101",
        title: "Introduction to Linguistics and Languages",
        topics: [
            {
                title: "Definition of Language",
                explanation: "Language is a system of arbitrary vocal symbols used by human beings for communication. It is a complex, rule-governed system that allows humans to express thoughts, feelings, ideas, and information. Language consists of sounds (phonetics/phonology), words (morphology), sentences (syntax), and meaning (semantics). It is unique to humans and is acquired naturally through exposure during childhood. Language enables us to share knowledge, express creativity, build relationships, and preserve culture across generations."
            },
            {
                title: "Definition of Linguistics",
                explanation: "Linguistics is the scientific study of language. It examines language as a system, investigating its structure, function, acquisition, and use. Linguistics analyzes language at various levels: sounds (phonetics/phonology), word formation (morphology), sentence structure (syntax), meaning (semantics), and language use in context (pragmatics). Linguists study both the universal properties of human language and the specific characteristics of individual languages. The field is both theoretical (understanding how language works) and applied (using linguistic knowledge in education, technology, therapy, etc.)."
            },
            {
                title: "Branches of Linguistics",
                explanation: "Linguistics has many branches: (1) Phonetics - study of speech sounds, (2) Phonology - study of sound systems, (3) Morphology - study of word formation, (4) Syntax - study of sentence structure, (5) Semantics - study of meaning, (6) Pragmatics - study of language in context, (7) Sociolinguistics - study of language and society, (8) Psycholinguistics - study of language and mind, (9) Historical linguistics - study of language change, (10) Applied linguistics - practical applications. Each branch focuses on different aspects of language, contributing to our overall understanding of how language works."
            },
            {
                title: "Micro and Macro Linguistics",
                explanation: "Micro-linguistics focuses on the internal structure of language - the formal systems and rules within language itself. It includes phonetics, phonology, morphology, syntax, and semantics. These areas study language as an abstract system. Macro-linguistics examines language in relation to external factors - how language interacts with society, psychology, culture, and other disciplines. It includes sociolinguistics, psycholinguistics, neurolinguistics, anthropological linguistics, and applied linguistics. Micro-linguistics asks 'How does language work?', while macro-linguistics asks 'How does language function in the world?'"
            },
            {
                title: "Relationship between Language and Linguistics",
                explanation: "Language is the object of study, while linguistics is the discipline that studies it. Language exists as a natural human phenomenon - a system of communication used by communities. Linguistics is the scientific approach to understanding, analyzing, and describing language. Linguists observe language use, identify patterns, formulate theories, and develop methods to study language systematically. The relationship is similar to that between biology and living organisms - biology studies life, linguistics studies language. Linguistics helps us understand how language works, how it's acquired, how it changes, and how it functions in human society."
            },
            {
                title: "Characteristics of Language",
                explanation: "Language has several key characteristics: (1) Arbitrariness - the relationship between words and their meanings is conventional, not natural, (2) Productivity/Creativity - speakers can produce and understand infinite new sentences, (3) Displacement - language can refer to things not present in time or space, (4) Cultural transmission - language is learned from the community, not inherited, (5) Duality of patterning - language has two levels (meaningless sounds combine to form meaningful units), (6) Discreteness - language uses distinct, separate units, (7) Reflexivity - language can be used to talk about language itself. These characteristics distinguish human language from animal communication systems."
            },
            {
                title: "Competence and performance",
                explanation: "Competence refers to a speaker's underlying knowledge of their language - the mental grammar that allows them to produce and understand sentences. It's the ideal, perfect knowledge of language rules. Performance is the actual use of language in real situations - what speakers actually say, including errors, hesitations, and variations. Competence is abstract and stable; performance is concrete and variable. The distinction, introduced by Noam Chomsky, helps linguists separate what speakers know (competence) from how they use that knowledge (performance). Performance can be affected by memory limitations, distractions, emotions, and other factors, while competence represents the speaker's linguistic knowledge."
            }
        ]
    },
    {
        code: "LIN 103",
        title: "Introduction to Phonetics",
        topics: [
            {
                title: "Definition of Phonetics",
                explanation: "Phonetics is the scientific study of speech sounds - how they are produced (articulatory phonetics), transmitted (acoustic phonetics), and perceived (auditory phonetics). It focuses on the physical properties of sounds, examining the actual sounds humans can produce regardless of language. Phonetics describes sounds objectively using the International Phonetic Alphabet (IPA), which provides symbols for every possible human speech sound. Unlike phonology, which studies how sounds function in specific languages, phonetics studies the universal physical properties of all speech sounds."
            },
            {
                title: "Branches of Phonetics",
                explanation: "Phonetics has three main branches: (1) Articulatory phonetics - studies how speech sounds are produced by the vocal organs (tongue, lips, vocal cords, etc.), focusing on the movements and positions of articulators, (2) Acoustic phonetics - studies the physical properties of sound waves produced during speech, analyzing frequency, amplitude, and duration, (3) Auditory phonetics - studies how speech sounds are perceived and processed by the ear and brain. Each branch provides different insights into speech sounds, and together they give a complete picture of how sounds are produced, transmitted, and understood."
            },
            {
                title: "Speech Organs",
                explanation: "Speech organs (articulators) are the parts of the body involved in producing speech sounds. They include: (1) Lungs - provide the air stream, (2) Larynx/vocal cords - produce voicing, (3) Pharynx - the throat cavity, (4) Oral cavity - the mouth, including tongue, lips, teeth, alveolar ridge, hard palate, soft palate (velum), (5) Nasal cavity - for nasal sounds. The tongue is the most flexible articulator and can move to different positions. The lips can be rounded or spread. The velum can be raised (oral sounds) or lowered (nasal sounds). Different combinations of these organs produce different speech sounds."
            },
            {
                title: "Body organs in speech production",
                explanation: "Multiple body systems work together in speech production: (1) Respiratory system (lungs, diaphragm) - provides the air stream, (2) Phonatory system (larynx, vocal cords) - produces voicing and pitch, (3) Articulatory system (tongue, lips, jaw, palate) - shapes the air stream into different sounds, (4) Resonatory system (pharynx, oral cavity, nasal cavity) - modifies sound quality. The process begins with exhalation from the lungs, the vocal cords may vibrate to add voicing, and then articulators shape the air stream into specific sounds. All these systems must coordinate precisely for clear speech production."
            },
            {
                title: "Air stream mechanism",
                explanation: "The air stream mechanism is how air flows to produce speech sounds. The main types are: (1) Pulmonic egressive - air flows out from the lungs (most common, used in all English sounds), (2) Pulmonic ingressive - air flows in (rare, used in some languages), (3) Glottalic egressive - air is compressed by raising the glottis (ejective sounds), (4) Glottalic ingressive - air is rarefied by lowering the glottis (implosive sounds), (5) Velaric ingressive - air is rarefied by tongue movement (click sounds). Most languages, including English, use only pulmonic egressive sounds, where air is pushed out from the lungs through the vocal tract."
            },
            {
                title: "Place and manner of Articulation",
                explanation: "Place of articulation refers to where in the vocal tract a sound is produced: bilabial (lips), labiodental (lip-teeth), dental (teeth), alveolar (alveolar ridge), palatal (hard palate), velar (soft palate), glottal (glottis). Manner of articulation describes how the air stream is modified: stops/plosives (complete closure), fricatives (narrow opening), affricates (stop + fricative), nasals (air through nose), liquids (l/r sounds), glides/semivowels (w/y sounds). These two dimensions classify consonants. For example, /p/ is a bilabial stop, /s/ is an alveolar fricative, and /m/ is a bilabial nasal."
            },
            {
                title: "Voicing",
                explanation: "Voicing refers to whether the vocal cords vibrate during sound production. Voiced sounds have vibrating vocal cords (e.g., /b/, /d/, /g/, /v/, /z/, all vowels). Voiceless sounds have no vocal cord vibration (e.g., /p/, /t/, /k/, /f/, /s/). Voicing is a key distinction in many languages - pairs like /p/ and /b/ differ only in voicing. You can feel voicing by placing your fingers on your throat - voiced sounds produce vibration, voiceless sounds don't. Voicing affects sound quality and is crucial for distinguishing many sounds in languages."
            },
            {
                title: "IPA chart",
                explanation: "The International Phonetic Alphabet (IPA) is a standardized system of symbols representing all possible human speech sounds. It provides one symbol per sound, allowing accurate transcription of any language. The IPA chart organizes sounds by place and manner of articulation for consonants, and by tongue position and lip rounding for vowels. It includes symbols for consonants (pulmonic and non-pulmonic), vowels, diacritics (modifications), suprasegmentals (stress, tone), and other symbols. The IPA enables linguists to transcribe sounds accurately, study language sounds systematically, and compare sounds across languages. It's essential for phonetic and phonological analysis."
            }
        ]
    },
    {
        code: "LIN 105",
        title: "Elementary Grammar",
        topics: [
            {
                title: "What is Grammar?",
                explanation: "Grammar is the system of rules that govern how words are combined to form meaningful sentences in a language. It includes rules for word formation (morphology), sentence structure (syntax), and how meaning is expressed. Grammar describes the patterns and regularities in how speakers of a language actually use it. There are two approaches: prescriptive grammar (rules for 'correct' usage, often based on written standards) and descriptive grammar (rules describing how language is actually used). Modern linguistics focuses on descriptive grammar - understanding how language actually works rather than prescribing how it should be used."
            },
            {
                title: "Word classes",
                explanation: "Word classes (parts of speech) are categories that classify words based on their grammatical function and meaning. The main word classes are: nouns, verbs, adjectives, adverbs, pronouns, prepositions, conjunctions, and interjections. Some languages also have articles, determiners, and particles. Words are classified based on their syntactic behavior (where they appear in sentences), morphological properties (how they change form), and semantic properties (what they mean). Word classes help us understand sentence structure and how words combine to create meaning."
            },
            {
                title: "Open class",
                explanation: "Open class words (content words) are word classes that readily accept new members. They include nouns, verbs, adjectives, and adverbs. These classes are 'open' because new words are constantly being added (e.g., new nouns like 'selfie', 'blog', verbs like 'google', 'tweet'). Open class words carry the main meaning in sentences and are typically stressed in speech. They form the core vocabulary of a language and can be modified by affixes. Most words in a language belong to open classes, and these classes can grow infinitely as language evolves."
            },
            {
                title: "Closed class",
                explanation: "Closed class words (function words) are word classes that rarely accept new members. They include pronouns, prepositions, conjunctions, articles, determiners, and auxiliary verbs. These classes are 'closed' because they contain a small, fixed set of words that change very slowly. Closed class words serve grammatical functions - they show relationships, indicate structure, and connect content words. Examples include 'the', 'and', 'of', 'he', 'will'. While open classes grow, closed classes remain relatively stable, though some changes do occur over long periods."
            },
            {
                title: "Noun",
                explanation: "A noun is a word that names a person, place, thing, idea, or quality. Nouns can be proper (specific names like 'John', 'London') or common (general terms like 'dog', 'city'). They can be concrete (perceivable like 'table') or abstract (concepts like 'freedom'). Nouns typically function as subjects or objects in sentences. In many languages, nouns have grammatical properties like number (singular/plural), gender, and case. Nouns can be modified by adjectives and can be preceded by articles or determiners. Examples: 'student', 'university', 'knowledge', 'happiness'."
            },
            {
                title: "Pronoun",
                explanation: "A pronoun is a word that replaces or refers to a noun or noun phrase. Pronouns avoid repetition and make language more efficient. Types include: personal pronouns (I, you, he, she, it, we, they), possessive pronouns (my, your, his, her, its, our, their), demonstrative pronouns (this, that, these, those), relative pronouns (who, which, that), interrogative pronouns (who, what, which), reflexive pronouns (myself, yourself), and indefinite pronouns (someone, anyone, everyone). Pronouns must agree with their antecedents in number, gender, and person."
            },
            {
                title: "Verb",
                explanation: "A verb is a word that expresses an action, occurrence, or state of being. Verbs are the core of predicates and indicate what the subject does or is. Types include: action verbs (run, write, think), linking verbs (be, seem, become), and auxiliary verbs (have, be, do, will, can). Verbs have properties like tense (past, present, future), aspect (completed, ongoing), mood (indicative, imperative, subjunctive), and voice (active, passive). Verbs can be transitive (taking objects) or intransitive (no object). Examples: 'study', 'is', 'has been writing', 'should go'."
            },
            {
                title: "Adverb",
                explanation: "An adverb is a word that modifies verbs, adjectives, other adverbs, or entire sentences. Adverbs typically answer questions like how, when, where, why, or to what extent. Types include: manner adverbs (quickly, carefully), time adverbs (yesterday, soon), place adverbs (here, everywhere), frequency adverbs (always, often), degree adverbs (very, quite, too), and sentence adverbs (fortunately, however). Many adverbs end in '-ly' in English, but not all. Adverbs provide additional information about actions, qualities, or circumstances. Examples: 'quickly', 'very', 'here', 'often', 'well'."
            },
            {
                title: "Adjective",
                explanation: "An adjective is a word that modifies or describes a noun or pronoun, providing information about qualities, characteristics, or attributes. Adjectives can describe size, color, shape, age, origin, material, or other properties. They typically appear before nouns (attributive) or after linking verbs (predicative). In English, adjectives don't change form for number or gender, but in some languages they do. Adjectives can be compared (big, bigger, biggest) and can be modified by adverbs (very big). Examples: 'tall', 'beautiful', 'intelligent', 'red', 'ancient'."
            },
            {
                title: "Preposition",
                explanation: "A preposition is a word that shows relationships between nouns/pronouns and other words in a sentence, typically indicating location, direction, time, or manner. Prepositions come before their objects (nouns or pronouns) to form prepositional phrases. Common prepositions include: 'in', 'on', 'at', 'by', 'for', 'with', 'from', 'to', 'of', 'about', 'under', 'over', 'between', 'among'. Prepositions are function words that help establish connections and provide context. Examples: 'in the classroom', 'by tomorrow', 'with friends', 'from the library'."
            },
            {
                title: "Interjection",
                explanation: "An interjection is a word or phrase that expresses strong emotion, surprise, or reaction. Interjections often stand alone and are followed by exclamation marks. They can express joy (Wow! Yay!), surprise (Oh! What!), pain (Ouch! Ow!), greeting (Hi! Hello!), agreement (Yes! Yeah!), disagreement (No! Nope!), or other emotions. Interjections are grammatically independent - they don't connect grammatically to the rest of the sentence. They add emotional color to language. Examples: 'Oh!', 'Wow!', 'Ouch!', 'Hey!', 'Alas!'"
            },
            {
                title: "Article and other word classes",
                explanation: "Articles are words that indicate whether a noun is specific (definite article 'the') or general (indefinite articles 'a', 'an'). 'The' refers to a particular, known noun, while 'a/an' refers to any member of a class. Other word classes include: conjunctions (connect words, phrases, clauses - 'and', 'but', 'or', 'because'), determiners (introduce nouns - 'this', 'that', 'some', 'many'), and particles (small words with grammatical functions, common in some languages). Each word class plays a specific role in sentence structure and meaning, working together to create coherent communication."
            }
        ]
    },
    {
        code: "LIN 107",
        title: "Languages of the World",
        topics: [
            {
                title: "What is language?",
                explanation: "Language is a complex, rule-governed system of communication unique to humans. It uses arbitrary vocal symbols (sounds) combined according to grammatical rules to express meaning. Language enables humans to share thoughts, feelings, information, and experiences. It has several key properties: it's creative (can produce infinite sentences), arbitrary (no natural connection between words and meanings), culturally transmitted (learned from community), and has duality of patterning (meaningless sounds form meaningful units). Language is both a cognitive ability (in the mind) and a social phenomenon (used in communities). It's essential for human thought, culture, and social organization."
            },
            {
                title: "Characteristics of Language",
                explanation: "Language has several key characteristics: (1) Arbitrariness - the relationship between words and their meanings is conventional, not natural, (2) Productivity/Creativity - speakers can produce and understand infinite new sentences, (3) Displacement - language can refer to things not present in time or space, (4) Cultural transmission - language is learned from the community, not inherited, (5) Duality of patterning - language has two levels (meaningless sounds combine to form meaningful units), (6) Discreteness - language uses distinct, separate units, (7) Reflexivity - language can be used to talk about language itself. These characteristics distinguish human language from animal communication systems."
            },
            {
                title: "Language Universals",
                explanation: "Language universals are features or patterns found in all or most human languages. Absolute universals (found in all languages) include having vowels and consonants, having a way to ask questions, having nouns and verbs, and having structure dependency. Statistical universals (found in most languages) include having a subject before the object. Implicational universals follow an 'if A then B' pattern (e.g., if a language has a dual number, it also has a plural). Universals suggest that all languages share a common underlying structure, possibly due to the nature of the human brain (Universal Grammar) or the common functions of language."
            },
            {
                title: "Classification of Languages",
                explanation: "Languages are classified in two main ways: (1) Genetic classification - groups languages by shared ancestry into families (e.g., Indo-European, Niger-Congo, Sino-Tibetan). This uses the comparative method to find cognates and sound correspondences. (2) Typological classification - groups languages by structural features, regardless of history. This includes word order (SVO, SOV, VSO), morphological type (isolating, agglutinating, fusional, polysynthetic), and phonological features (tone vs. non-tone). Classification helps linguists understand language relationships, history, and structural diversity."
            },
            {
                title: "Major Language Families",
                explanation: "The world's languages are grouped into major families. Key ones include: (1) Indo-European (Europe, S. Asia) - English, Spanish, Hindi, Russian. (2) Sino-Tibetan (E. Asia) - Mandarin, Tibetan, Burmese. (3) Niger-Congo (Africa) - Swahili, Yoruba, Igbo, Zulu. (4) Afroasiatic (N. Africa, Middle East) - Arabic, Hebrew, Hausa. (5) Austronesian (Pacific, SE Asia) - Malay, Tagalog, Hawaiian. (6) Trans-New Guinea (Papua New Guinea). (7) Altaic (C. Asia) - Turkish, Mongolian (controversial). Each family shares a common ancestor and distinct characteristics."
            },
            {
                title: "Endangered Languages",
                explanation: "An endangered language is one at risk of falling out of use as its speakers die out or shift to speaking another language. Causes include globalization, cultural assimilation, government policies, and economic pressure. Language death means the loss of unique cultural knowledge, history, and ways of thinking. Linguists work on language documentation (recording languages) and revitalization (helping communities bring languages back). UNESCO classifies languages from 'vulnerable' to 'extinct'. Protecting linguistic diversity is seen as crucial for preserving human heritage."
            }
        ]
    }
];

const courses200 = [
    {
        code: "LIN 201",
        title: "Introduction to Phonology",
        topics: [
            {
                title: "Definition of Phonology",
                explanation: "Phonology is the study of the sound system of a language. Unlike phonetics, which studies the physical properties of sounds, phonology studies how sounds are organized and function within a specific language to convey meaning. It looks at the rules governing sound combinations (phonotactics), how sounds change in different environments (phonological processes), and the mental representation of sounds (phonemes). Phonology asks questions like: 'What sounds distinguish meaning in this language?', 'Which sound combinations are allowed?', and 'How does the pronunciation change in context?'"
            },
            {
                title: "Phoneme and Allophone",
                explanation: "A phoneme is the smallest abstract sound unit that can distinguish meaning in a language (e.g., /p/ and /b/ in 'pat' and 'bat'). It is a mental category. An allophone is a specific physical realization of a phoneme in speech. A single phoneme can have multiple allophones depending on the context. For example, the phoneme /t/ in English has different allophones in 'top' [tʰ] (aspirated), 'stop' [t] (unaspirated), 'butter' [ɾ] (flapped), and 'bat' [t̚] (unreleased). Native speakers perceive allophones of the same phoneme as the 'same sound', even though they are physically different."
            },
            {
                title: "Minimal Pair/Minimal set",
                explanation: "A minimal pair consists of two words that differ in meaning and differ in only one sound segment in the same position. For example, 'bat' and 'pat' form a minimal pair because they differ only in the initial sound (/b/ vs /p/), and this difference changes the meaning. Minimal pairs are crucial for identifying phonemes (meaningful sound units) in a language. A minimal set is a group of words that differ in only one sound segment, such as 'bat', 'pat', 'mat', 'cat', 'hat' - all differing only in the initial consonant. Minimal pairs and sets help linguists determine which sound differences are phonemic (meaningful) versus phonetic (non-meaningful) in a language."
            },
            {
                title: "Complementary distribution",
                explanation: "Complementary distribution occurs when two or more sounds never appear in the same phonetic environment - they are mutually exclusive. When sounds are in complementary distribution, they are considered allophones (variants) of the same phoneme. For example, in English, the aspirated [pʰ] (as in 'pin') and unaspirated [p] (as in 'spin') are in complementary distribution: [pʰ] appears at the beginning of stressed syllables, while [p] appears elsewhere. Since they never contrast (you can't find minimal pairs), they are allophones of the phoneme /p/. This concept helps linguists understand the phonemic inventory of a language."
            },
            {
                title: "Free variation",
                explanation: "Free variation occurs when two or more sounds can be used interchangeably in the same environment without changing the meaning of a word. These sounds are allophones of the same phoneme, but unlike complementary distribution, they can appear in the same context. For example, the final sound in 'economics' can be pronounced as either [s] or [z] without affecting meaning. Another example is the pronunciation of 'either' as ['iːðər] or ['aɪðər]. Free variation often reflects regional, social, or individual differences in pronunciation. It's important to note that while the choice doesn't affect meaning, it may carry social or stylistic significance."
            },
            {
                title: "Tone",
                explanation: "Tone refers to the use of pitch to distinguish word meaning in a language. In tone languages (like Mandarin Chinese, Thai, or many African languages), the same sequence of sounds can have different meanings depending on the pitch pattern used. For example, in Mandarin, 'ma' can mean 'mother' (high tone), 'hemp' (rising tone), 'horse' (falling-rising tone), or 'scold' (falling tone). Tones are phonemic in these languages - they function like consonants or vowels in distinguishing words. Tone languages use pitch at the word level, which is different from intonation (pitch patterns at the sentence level used in all languages for questions, emphasis, etc.)."
            },
            {
                title: "Data analysis",
                explanation: "Phonological data analysis involves examining language data to identify patterns, rules, and the sound system of a language. The process typically includes: (1) Transcribing data phonetically, (2) Looking for minimal pairs to identify phonemes, (3) Identifying allophones through complementary distribution or free variation, (4) Discovering phonological rules that explain sound changes, (5) Analyzing syllable structure and stress patterns, (6) Identifying phonological processes at work. Analysts look for systematic patterns, exceptions, and rule ordering. This analysis helps understand how sounds are organized in a language, what rules govern their distribution, and how they change in different contexts. It's a crucial skill for understanding any language's sound system."
            }
        ]
    },
    {
        code: "LIN 203",
        title: "Introduction to Morphology",
        topics: [
            {
                title: "Morpheme",
                explanation: "A morpheme is the smallest meaningful unit of language that cannot be further divided into smaller meaningful parts. It is the basic building block of words. Morphemes can be words themselves (like 'cat', 'run') or parts of words (like '-ed' in 'walked', 'un-' in 'unhappy'). Every word consists of one or more morphemes. For example, 'unhappiness' contains three morphemes: 'un-' (meaning 'not'), 'happy' (the root meaning), and '-ness' (making it a noun). Morphemes are abstract units - they may have different pronunciations (allomorphs) in different contexts, but they maintain the same meaning. Understanding morphemes is essential for analyzing word structure and formation."
            },
            {
                title: "Types of morphemes",
                explanation: "Morphemes are classified into several types: (1) Free morphemes - can stand alone as words (e.g., 'cat', 'book', 'happy'), (2) Bound morphemes - must attach to other morphemes (e.g., '-ed', '-ing', 'un-', '-ness'), (3) Root morphemes - the core meaning-bearing element (e.g., 'happy' in 'unhappiness'), (4) Affixes - bound morphemes that attach to roots (prefixes like 'un-', suffixes like '-ness', infixes inserted into words, circumfixes that surround words), (5) Derivational morphemes - create new words or change word class (e.g., 'happy' → 'happiness' changes adjective to noun), (6) Inflectional morphemes - modify words grammatically without changing word class (e.g., 'cat' → 'cats' for plural, 'walk' → 'walked' for past tense). In English, inflectional morphemes are always suffixes and are limited in number."
            },
            {
                title: "Morphological processes",
                explanation: "Morphological processes are the ways languages form words and modify existing words. Major processes include: (1) Affixation - adding prefixes, suffixes, infixes, or circumfixes (most common in English), (2) Compounding - combining two or more free morphemes to create new words (e.g., 'blackboard', 'greenhouse'), (3) Reduplication - repeating all or part of a word (e.g., 'helter-skelter', or in other languages for plural or intensity), (4) Conversion/Zero-derivation - changing word class without adding affixes (e.g., 'email' noun → 'email' verb), (5) Blending - combining parts of two words (e.g., 'brunch' from 'breakfast' + 'lunch'), (6) Clipping - shortening words (e.g., 'ad' from 'advertisement'), (7) Backformation - creating simpler words from complex ones (e.g., 'edit' from 'editor'), (8) Acronyms and abbreviations. These processes vary across languages and help create new vocabulary efficiently."
            }
        ]
    },
    {
        code: "LIN 205",
        title: "Comparative Historical Linguistics",
        topics: [
            {
                title: "Diachronic and synchronic Linguistics",
                explanation: "Diachronic linguistics (historical linguistics) studies language change over time, examining how languages evolve, split, merge, and develop. It looks at language through time, like a movie. Synchronic linguistics studies language at a particular point in time, focusing on the structure and function of language as it exists at a specific moment, like a snapshot. Ferdinand de Saussure emphasized this distinction. Diachronic studies might examine how Old English became Modern English, while synchronic studies analyze Modern English as it is today. Both approaches are essential: synchronic analysis helps understand current language structure, while diachronic analysis reveals how languages change and why, helping us understand language relationships and evolution."
            },
            {
                title: "How Language Changes overtime",
                explanation: "Languages change continuously through various mechanisms: (1) Sound changes - systematic shifts in pronunciation (e.g., Great Vowel Shift in English), (2) Lexical changes - new words added (borrowing, coinage), old words lost or meanings shifted, (3) Grammatical changes - simplification or complexification of grammar, word order changes, (4) Semantic changes - meanings expand, narrow, shift, or become pejorative/ameliorative. Changes occur due to internal factors (ease of articulation, analogy, regularization) and external factors (language contact, social change, technology). Changes spread through communities gradually, often starting with younger speakers or specific social groups. Some changes are temporary (slang), while others become permanent parts of the language. Language change is natural and inevitable - no language remains static."
            },
            {
                title: "Relationship between Languages",
                explanation: "Languages can be related through common ancestry (genetic relationship) or contact (areal relationship). Genetically related languages descend from a common ancestor (proto-language) and form language families (e.g., Indo-European family includes English, Spanish, Hindi, Russian). Comparative method reconstructs proto-languages by comparing related languages. Language families branch into subfamilies and individual languages. Areal relationships occur when languages in geographic proximity influence each other through borrowing, even if unrelated. Languages can also be related through pidgins and creoles. Understanding relationships helps trace migration patterns, cultural history, and language evolution. The degree of relationship is measured by shared vocabulary, grammar, and sound correspondences."
            },
            {
                title: "Naturality principle that guides languages",
                explanation: "The naturalness principle suggests that languages tend to develop in ways that are natural, efficient, and follow universal tendencies. This includes: (1) Ease of articulation - sounds and structures that are easier to produce are preferred, (2) Perceptual clarity - maintaining distinctions important for understanding, (3) Regularity - languages tend toward regular patterns (though exceptions exist), (4) Economy - efficient use of linguistic resources, avoiding unnecessary complexity, (5) Iconicity - form reflecting meaning where possible, (6) Universal tendencies - certain patterns appear across languages (e.g., subject-verb-object word order is common). However, naturalness competes with other factors like historical inertia, social factors, and language contact. Languages balance naturalness with functionality, sometimes maintaining 'unnatural' features for historical or social reasons."
            }
        ]
    },
    {
        code: "LIN 207",
        title: "Writing System and Orthographic Design",
        topics: [
            {
                title: "Introduction to Writing Systems & Orthography Design",
                explanation: "A writing system is how a language is written using visible symbols. It allows spoken language to be recorded, shared, and preserved. Orthography design is the planned creation or standardization of a writing system, especially for languages that didn't have a fixed way of writing before. Writing systems are not just about letters—they connect language, thinking, culture, education, and technology. A well-designed orthography helps people read and learn easily and supports cultural identity. A poorly designed one makes literacy harder and causes confusion."
            },
            {
                title: "Important Terms",
                explanation: "Writing System: The full set of symbols and rules used to write a language. Script: The visual form of the symbols (like Latin, Arabic, or Cyrillic). One script can be used by many languages. Orthography: The official spelling and writing rules of a language. It covers which symbols are used, spelling rules, capitalization, punctuation, and spacing. Grapheme: The smallest written unit (letters or letter combinations like a, b, sh). Phoneme: The smallest sound unit that can change meaning. Orthography often tries to match graphemes to phonemes."
            },
            {
                title: "Logographic Writing Systems",
                explanation: "In logographic systems, each symbol represents a word or meaning. Example: Chinese characters. Pros: Meaning is clear; works across dialects. Cons: Very hard to learn; thousands of symbols needed. This system uses visual symbols that directly represent words or concepts rather than sounds, making it possible for speakers of different dialects to read the same text even if they pronounce words differently."
            },
            {
                title: "Syllabic Writing Systems",
                explanation: "In syllabic systems, each symbol represents a syllable. Example: Japanese Kana (hiragana and katakana). Pros: Easy sound-to-symbol matching; more intuitive than logographic systems. Cons: Needs many symbols if the language has many syllables. This system is more efficient than logographic systems but can become complex for languages with many possible syllable combinations."
            },
            {
                title: "Alphabetic Writing Systems",
                explanation: "In alphabetic systems, symbols represent individual sounds (phonemes). Examples: Latin alphabet (used for English, Spanish, French), Cyrillic (used for Russian, Bulgarian), Greek alphabet. Pros: Few symbols needed; very flexible; can represent many languages. Cons: Some sounds may not be perfectly represented; spelling can become irregular over time. This is the most widely used system globally and allows for efficient learning once the basic symbols are mastered."
            },
            {
                title: "Abjad Writing Systems",
                explanation: "Abjad systems mainly write consonants; vowels are optional or missing. Examples: Arabic, Hebrew. Pros: Efficient for certain languages where consonants carry more meaning; compact writing. Cons: Can be confusing for beginners; requires knowledge of the language to determine correct vowels. These systems work well for Semitic languages where root words are based on consonant patterns."
            },
            {
                title: "Abugida Writing Systems",
                explanation: "In abugida systems, consonants have a built-in vowel that can be changed. Example: Devanagari (used for Hindi, Sanskrit). Each consonant symbol includes a default vowel sound, and diacritical marks modify or remove this vowel. This system efficiently represents languages with complex consonant-vowel combinations while maintaining a manageable number of base symbols."
            },
            {
                title: "Featural Writing Systems",
                explanation: "In featural systems, symbols show how sounds are produced. Example: Korean Hangul. The shapes of the letters reflect the articulatory features of the sounds they represent (e.g., tongue position, mouth shape). This makes the system more intuitive and easier to learn, as the visual form of the symbol relates directly to how the sound is produced."
            },
            {
                title: "Bottom Line: Writing Systems Summary",
                explanation: "Writing systems differ in how they represent language sounds and meanings. Good orthography design makes reading easier, learning faster, and helps preserve culture. The choice of writing system affects literacy rates, educational outcomes, and cultural identity. When designing orthography for a language, linguists must consider the language's sound system, cultural context, and practical needs of the community."
            }
        ]
    },
    {
        code: "LIN 209",
        title: "Linguistics and Broadcasting",
        topics: [
            {
                title: "The relationship between Linguistics and broadcasting",
                explanation: "Linguistics and broadcasting have a symbiotic relationship. Linguistics provides the theoretical foundation for understanding language use in broadcasting, while broadcasting offers a rich source of linguistic data. Linguistics helps broadcasters understand: language variation (dialects, accents), language change (how language evolves in media), pragmatics (how meaning is conveyed beyond words), discourse analysis (how messages are structured), and sociolinguistics (how language reflects and shapes society). Broadcasters apply linguistic knowledge to: choose appropriate language for audiences, understand regional variations, create effective communication, and analyze media discourse. The relationship is crucial because broadcasting reaches mass audiences and influences language norms, making it a powerful force in language standardization and change."
            },
            {
                title: "What is broadcasting",
                explanation: "Broadcasting is the distribution of audio or video content to a dispersed audience via any electronic mass communications medium. It involves transmitting information, entertainment, news, or educational content to a wide, often anonymous audience simultaneously. Traditional broadcasting includes radio and television transmitted over airwaves, cable, or satellite. Modern broadcasting extends to internet streaming, podcasts, and digital platforms. Key characteristics include: one-to-many communication, real-time or recorded transmission, mass reach, and professional production. Broadcasting serves multiple functions: informing (news), educating (documentaries, educational programs), entertaining (shows, music), and persuading (advertising, political messages). It's a powerful medium that shapes public opinion, spreads information rapidly, and influences language and culture."
            },
            {
                title: "Channels of communication",
                explanation: "Channels of communication in broadcasting refer to the various mediums and methods used to transmit messages to audiences. These include: (1) Radio - audio-only broadcasting via AM/FM, digital radio, or internet streaming, (2) Television - audio-visual broadcasting via terrestrial, cable, satellite, or streaming, (3) Internet - websites, streaming platforms, podcasts, social media, (4) Print media - newspapers, magazines (though not technically broadcasting), (5) Mobile platforms - apps, SMS, mobile streaming. Each channel has unique characteristics: radio emphasizes voice and sound, television combines audio-visual elements, internet allows interactivity and on-demand access. Channels differ in reach, immediacy, interactivity, and audience engagement. Modern broadcasting often uses multiple channels simultaneously (cross-platform broadcasting) to maximize reach and engagement. The choice of channel affects language use, message structure, and audience interaction."
            },
            {
                title: "Importance of broadcasting",
                explanation: "Broadcasting is crucial in modern society for several reasons: (1) Information dissemination - rapidly spreads news, emergency information, and important announcements to mass audiences, (2) Education - provides educational content, documentaries, and learning resources accessible to many, (3) Cultural preservation and promotion - showcases local cultures, languages, music, and traditions, (4) Social cohesion - creates shared experiences and common knowledge, fostering community, (5) Democracy - enables public discourse, political communication, and citizen engagement, (6) Economic impact - creates jobs, drives advertising, supports industries, (7) Language standardization - influences language norms and helps standardize languages, (8) Entertainment - provides leisure and cultural enrichment, (9) Emergency communication - critical for public safety during disasters, (10) Globalization - facilitates cross-cultural communication and understanding. Broadcasting shapes public opinion, influences language change, and serves as a primary source of information for billions worldwide."
            },
            {
                title: "History of Broadcasting in Nigeria",
                explanation: "The history of broadcasting in Nigeria can be divided into several key phases. The earliest phase began under British colonial rule, when radio relay services were used mainly to transmit BBC programmes to colonial administrators and urban centres. In the 1950s, regional governments began to establish their own radio services to reach wider local audiences and promote regional identity. A major landmark came in 1959 with the establishment of Western Nigeria Television (WNTV) in Ibadan, widely recognised as the first television station in tropical Africa. After independence in 1960, federal and regional authorities expanded both radio and television networks to support nation-building, civic education, and cultural promotion. The military era saw tighter central control through organisations such as the Nigerian Television Authority (NTA) and the Federal Radio Corporation of Nigeria (FRCN), which were used to disseminate official information and foster national unity. From the 1990s onward, deregulation allowed private radio and television stations to emerge, leading to increased competition, diversification of content, and the growth of commercial and community broadcasting. In the contemporary digital era, Nigerian broadcasting has extended to satellite television, online streaming, and social media platforms, creating new opportunities and challenges for regulation, language use, and audience participation."
            }
        ]
    },
    {
        code: "YOR 201",
        title: "Introduction to Yoruba Phonetics",
        topics: [
            {
                title: "Introduction to Yoruba phonetics",
                explanation: "This topic introduces Yoruba phonetics as the study of how Yoruba speech sounds are produced, transmitted, and perceived. It links general phonetic concepts (articulatory, acoustic, and auditory phonetics) to the specific sound patterns of Yoruba. Students are reminded that Yoruba phonetics focuses on real-life speech, not just the written form, and that careful listening and accurate description are essential for later work in phonology and orthography. The topic clarifies key terms such as segment, syllable, and tone, and it shows how Yoruba phonetics fits into the wider study of African languages."
            },
            {
                title: "Yoruba vowel system",
                explanation: "Yoruba has a relatively small but highly structured vowel system that is central to pronunciation and orthography. This topic describes the basic set of oral vowels (such as /i, e, ɛ, a, ɔ, o, u/), their articulation in terms of tongue height, advancement, and lip rounding, and the role of advanced tongue root (ATR) harmony in some dialects. Students learn how these vowels are represented both in traditional Yoruba orthography and in the International Phonetic Alphabet (IPA). Attention is drawn to common pronunciation errors made by second‑language learners and to the importance of distinguishing similar vowels in minimal pairs."
            },
            {
                title: "Yoruba consonant system",
                explanation: "This topic examines the consonant inventory of Yoruba, including plosives, nasals, fricatives, approximants, and the labial‑velar stops /kp/ and /gb/. Each consonant is described in terms of place and manner of articulation, and examples are provided in common Yoruba words. The topic also explains the distribution of consonants in syllables, the occurrence of prenasalised and nasal segments, and the influence of neighbouring vowels on consonant realisation. By the end, students should be able to classify Yoruba consonants accurately and recognise them in IPA transcription."
            },
            {
                title: "Tone in Yoruba",
                explanation: "Yoruba is a tone language in which pitch differences signal lexical and grammatical contrasts. This topic explains the basic three‑tone system (High, Mid, Low) and shows how tone can change the meaning of words that are segmentally identical. Students study examples of tone patterns in nouns and verbs, observe how tone interacts with intonation in phrases, and learn conventional ways of marking tone in teaching texts and phonetic transcription. The topic also discusses common tone processes such as downstep and tone sandhi in connected speech."
            },
            {
                title: "Syllable structure and phonotactics in Yoruba",
                explanation: "This topic describes the typical syllable patterns of Yoruba, especially the dominance of simple CV syllables and the restricted occurrence of consonant clusters. It explains how syllable structure determines possible word shapes, the distribution of vowels and nasals, and the placement of tone. Students examine how borrowings from other languages are adapted to Yoruba phonotactics and why certain consonant clusters are broken up by epenthetic vowels. Understanding syllable structure prepares students for accurate phonetic transcription and later phonological analysis."
            },
            {
                title: "Phonetic transcription of Yoruba words",
                explanation: "Here students practise representing Yoruba words and short sentences using IPA symbols. The topic highlights the difference between ordinary Yoruba orthography and phonetic transcription, especially with respect to vowel quality, length, nasalisation, and tone. Guided examples show how to move from spelling to a careful narrow transcription and back again. The aim is to develop listening skills, symbol familiarity, and consistency, so that students can use phonetic transcription as a tool for further research on Yoruba sound patterns."
            }
        ]
    },
    {
        code: "YOR 203",
        title: "Ìmọ̀ Jinlẹ̀ ní Àmì-òòrò, Kíkọ́ àti Kíkà Yorùbá",
        topics: [
            {
                title: "Àkópọ̀ Kọ́ọ̀sì",
                explanation: "Kọ́ọ̀sì yìí ń ṣiṣẹ́ lórí ìtẹ̀síwájú ìmọ̀ nípa àtúnṣe àti ìmúlò àkọsílẹ̀ Yorùbá (àmì-òòrò), pẹ̀lú ìfọ̀kànsìn pàtàkì sí bí a ṣe ń kọ́, ṣe àtúnyẹ̀wò, àti ka ìtàn, àpilẹ̀kọ, àti àwọn ìwé onímọ̀ ní èdè Yorùbá. Àwọn akẹ́kọ̀ọ́ máa kọ́ bí wọ́n ṣe lè lo àkọsílẹ̀ tó bófin mu, ṣe àtúnṣe gírámà àti ìtúpalẹ̀ onírọ̀rùn, kí wọ́n sì túmọ̀ ìtumọ̀ jinlẹ̀ nínú àwọn ìwé àti àpilẹ̀kọ Yorùbá. Kọ́ọ̀sì náà tún dojú kọ ìmúlò èdè Yorùbá tó yẹ nínú ìkọ̀wé àkàwé, ìkọ̀wé ìmọ̀ ìjìnlẹ̀, àti ìkọ̀wé olówó-orọ̀ fún àjọṣepọ̀ ọ̀fíìsì àti àgbáyé onímọ̀.\n\nEnglish explanation: This course offers advanced study of Yoruba orthography, composition, and comprehension. It trains students to use standard Yoruba spelling conventions accurately, to revise and edit written texts, and to read complex literary and expository works with critical understanding. Emphasis is placed on coherent paragraph development, argumentative and expository writing in Yoruba, and the interpretation of meaning in different genres. The course aims to develop students who can write and read Yoruba at an advanced academic level and who can apply their skills in educational, media, and professional contexts."
            },
            {
                title: "Àkọsílẹ̀ Yorùbá àti àfihàn àmì-òòrò",
                explanation: "Ìṣàlàyé yìí ń ṣe àtúpalẹ̀ àkọsílẹ̀ Yorùbá gẹ́gẹ́ bí àbá àkọ́kọ́ fún ìmúlò èdè ní kikọ́. A ṣàlàyé bí àsàyàn lẹ́tà àti àmì‑òòrò ṣe ń fi ìyàtọ̀ fawọn fawẹ́lì, tóònù, àti ìdálẹ́jú gírámà hàn nínú ọ̀rọ̀. Àwọn akẹ́kọ̀ọ́ máa wo àwọn àpẹẹrẹ amúdájú láti inú ìwé ìtàn àti àpilẹ̀kọ, kí wọ́n sì kọ́ bí wọ́n ṣe lè lo àmì gígùn, àmì ìdínkù, àti àmì tóònù láì ṣe àṣìṣe. Àpakan ìtúmọ̀ Gẹ̀ẹ́sì fi hàn pé asọyé àtọkànwá nípa orthography jẹ́ amúgbára fún àtúnṣe ìwé àti fún ìtẹ̀síwájú ìmọ̀ ìjìnlẹ̀ nípa èdè."
            },
            {
                title: "Ìkọ̀wé ìtàn àti àpilẹ̀kọ ní èdè Yorùbá",
                explanation: "Nínú kókó yìí, a ń kó àwọn akẹ́kọ̀ọ́ sí ìsọ̀kan ìrírí àti ìmọ̀ nípa bí a ṣe ń kọ ìtàn, àròsọ, àti àpilẹ̀kọ ìtúpalẹ̀ ní èdè Yorùbá. A ṣàlàyé ìlànà ìpìlẹ̀ fún àkópọ̀ ìpín, ìlànà àlàyé kedere, àti lílò àpẹẹrẹ tó yẹ. Àkòrí náà fojú kan bí a ṣe lè yà ìròyìn àkọsílẹ̀ sọ́tọ̀ kúrò ní èdè ojoojúmọ́, kí ìkọ̀wé Yorùbá lè dúró gẹ́gẹ́ bí ìkọ̀wé onímọ̀ tí ó dá lórí ìlànà gírámà tó dára, àfojúrí olùkà, àti ìforúkọsílẹ̀ orísun."
            },
            {
                title: "Ìmúlò ìtúmọ̀ àti kíkà ìwé Yorùbá",
                explanation: "Kókó yìí ń tẹnumọ́ ìtúpalẹ̀ ọ̀rọ̀, gírámà, àti àkópọ̀ ìtumọ̀ nínú ìwé Yorùbá láti inú ìtàn, àwòrán ayé, tàbí ìwé onímọ̀. Àwọn akẹ́kọ̀ọ́ máa kọ́ bí wọ́n ṣe lè rí àkọ́lé àkọlé, àlàyé àbá lórí, àti ìdáhùn ìbéèrè ìtúmọ̀ tó jinlẹ̀. Àpakan Gẹ̀ẹ́sì ń fi hàn pé ìmúlò ọ̀nà ìtúpalẹ̀ kíkà yìí ń ran àwọn akẹ́kọ̀ọ́ lọ́wọ́ láti lóye ohun tí onkọ̀wé ń fojú inú hàn, kí wọ́n sì lè dáhùn ìbéèrè ìdánwò nípa ìtumọ̀, ìmúlò gírámà, àti àkópọ̀ ìpinnu."
            }
        ]
    },
    {
        code: "GST 201",
        title: "Philosophy",
        topics: [
            {
                title: "What is philosophy?",
                explanation: "This topic introduces philosophy as a systematic and critical reflection on fundamental questions about reality, knowledge, value, and human existence. It distinguishes philosophical inquiry from science, religion, and common‑sense opinion, while showing how these domains interact. Students learn that philosophy is not merely abstract speculation but a disciplined activity that uses careful reasoning, conceptual analysis, and argument evaluation to clarify ideas and challenge assumptions."
            },
            {
                title: "Branches of philosophy",
                explanation: "Here the main branches of philosophy are outlined: metaphysics (the study of reality and existence), epistemology (the theory of knowledge and justification), ethics (moral values, right and wrong action), logic (principles of correct reasoning), and social and political philosophy (justice, rights, authority, and the state). For each branch, key guiding questions and examples are presented, helping students see how philosophical problems arise from ordinary experience and from specialised disciplines such as law, science, and politics."
            },
            {
                title: "Epistemology: knowledge and belief",
                explanation: "This topic focuses on epistemology, asking what it means to know something rather than merely believe it. It introduces classic analyses of knowledge as justified true belief, discusses sources of knowledge such as perception, memory, testimony, and reason, and raises sceptical challenges to everyday and scientific claims. Students are encouraged to think critically about evidence, reliability, and the difference between opinion and well‑supported judgment, linking these ideas to academic study and research skills."
            },
            {
                title: "Metaphysics and the nature of reality",
                explanation: "In this topic, students explore metaphysical issues such as the existence of universals and particulars, the mind–body problem, identity over time, and the status of abstract objects like numbers. Different metaphysical positions (for example, materialism and dualism) are introduced in a balanced way. The goal is not to settle these debates but to show how careful argument and conceptual clarification can illuminate questions about what ultimately exists and how different kinds of entities are related."
            },
            {
                title: "Ethics and moral reasoning",
                explanation: "This topic introduces basic ethical theories such as utilitarianism, deontology, and virtue ethics, and applies them to practical moral issues. Students learn how to distinguish descriptive statements from normative claims, how to identify moral principles behind everyday judgments, and how to reason consistently about difficult cases. Emphasis is placed on respectful disagreement, argument clarity, and the ability to justify one’s moral views in a way that can be examined and criticised by others."
            },
            {
                title: "Logic and critical thinking",
                explanation: "The final topic introduces elements of informal and formal logic that underpin critical thinking. Students study the structure of arguments (premises and conclusions), common valid argument forms, and frequent fallacies such as ad hominem, straw man, and false dilemma. Simple symbolisation and truth‑table techniques may be introduced to show how logical form can be analysed precisely. The topic connects these tools to reading, writing, and decision‑making skills needed in other university courses and in everyday life."
            }
        ]
    },
    {
        code: "GST 203",
        title: "Government, Society & Economy",
        topics: [
            {
                title: "Definition and Scope of Government",
                explanation: "Government is the system of organization and authority through which a political community exercises power and makes decisions affecting its members. It represents the formal structures, institutions, and processes by which a society is governed. The scope of government encompasses legislative (law-making), executive (enforcement), and judicial (dispute resolution) functions. Government serves multiple purposes: maintaining order and security, delivering public services, regulating economic activity, protecting rights, and pursuing collective goals. Government can be understood at different levels—local, regional, national, and international. The definition and scope of government vary across political systems, reflecting different historical traditions, cultural values, and ideological commitments. Modern governments face the challenge of balancing centralization and decentralization, determining appropriate boundaries, and responding to changing social needs."
            },
            {
                title: "Types of Government Systems",
                explanation: "There are several major types of government systems, classified by who holds political power. Autocracy concentrates power in a single individual (monarchy, dictatorship), while democracy distributes power among the people through elections and representation. Other systems include oligarchy (rule by few elite), theocracy (religious rule), and totalitarianism (total state control). Government systems also vary in structure: unitary systems centralize power, federal systems distribute it among levels, and confederal systems emphasize component units. A key distinction is between presidential systems (executive and legislature separate), parliamentary systems (executive drawn from legislature), and hybrid systems. Each system has advantages and disadvantages regarding efficiency, accountability, representation, and rights protection. Real-world governments often combine elements of different types, and systems evolve over time through constitutional amendments, coups, revolutions, or reforms."
            },
            {
                title: "Functions and Roles of Government",
                explanation: "Governments perform several essential functions: (1) Law-making - legislating rules governing behavior, (2) Law enforcement - ensuring compliance through police and courts, (3) Public service provision - delivering education, health, infrastructure, welfare, (4) Economic regulation - managing markets, trade, labor, and resources, (5) Defense and security - protecting from external and internal threats, (6) Interest representation - giving voice to diverse groups and preferences, (7) Legitimacy provision - creating binding collective decisions, (8) Rights protection - safeguarding individual and group freedoms. Different governments emphasize these functions differently based on their ideological orientation, level of development, and social priorities. Liberal democracies typically emphasize rights protection and service delivery; strong states emphasize security and order; developmental states emphasize economic growth. The balance among these functions shapes the type of government and its relationship with society."
            },
            {
                title: "Society: Concepts and Structure",
                explanation: "Society is a collective body of people living together in an organized community with shared institutions, norms, values, and culture. It is distinguished from the state (political organization) and the economy (production and distribution system). Society encompasses the social realm—families, groups, associations, communities—where people interact and develop relationships. Sociological perspectives view society as having structure (relatively stable patterns), culture (shared beliefs and practices), and dynamics (change over time). Key characteristics of society include social stratification (unequal distribution of wealth, status, power), social institutions (family, religion, education), and collective identity. Societies develop patterns of inclusion and exclusion, defining who belongs and on what terms. Modern societies are increasingly complex, diverse, and interconnected, creating both opportunities for cooperation and sources of tension. Understanding society requires examining how different groups interact, how resources are distributed, and how power is exercised."
            },
            {
                title: "Social Institutions and Organization",
                explanation: "Social institutions are established systems of social practice, norms, and relationships organized around particular functions. Major institutions include: (1) Family - primary unit for reproduction, socialization, and affection, (2) Religion - addressing meaning, mortality, and moral community, (3) Education - transmitting knowledge, skills, and cultural values, (4) Economic institutions - organizing production, distribution, and consumption, (5) Political institutions - exercising authority and making collective decisions, (6) Health institutions - maintaining and improving health. Each institution has formal organizations (schools, hospitals, courts) and informal practices. Institutions are interconnected—changes in one affect others—and they evolve with social changes. Institutions serve manifest functions (stated purposes) and latent functions (unintended consequences). Understanding how institutions operate and interrelate is crucial for understanding social structure, stability, and change."
            },
            {
                title: "Introduction to Economy and Economic Systems",
                explanation: "An economy is the system of production, distribution, and consumption of goods and services within a society. It addresses fundamental questions: What to produce? How to produce? For whom to produce? Different economic systems answer these questions differently. Major economic systems include: (1) Capitalism - private ownership, market allocation, profit motive, (2) Socialism - collective ownership, planned allocation, need satisfaction, (3) Mixed economy - combining market and state mechanisms. Within capitalism are variants: laissez-faire (minimal state), welfare capitalism (strong safety nets), developmental capitalism (state-directed growth). Economic systems vary in degree of centralization (planned vs. market), ownership patterns (private, public, mixed), and distribution mechanisms (market, state, community). Real economies combine elements of different systems and evolve over time. Economic systems interact with political systems and social structure, each shaping the others. Understanding economic systems is essential for grasping inequality, growth, development, and social stability."
            },
            {
                title: "Economic Activities and Development",
                explanation: "Economic activities encompass the production, distribution, and consumption of goods and services. They are typically organized into sectors: (1) Primary sector - extracting natural resources (agriculture, mining), (2) Secondary sector - manufacturing goods, (3) Tertiary sector - providing services, (4) Quaternary sector - information and knowledge. Development is the process of improving economic capacity, living standards, technology, and institutions. Indicators of development include per capita income, literacy rates, life expectancy, and access to services. Development is uneven globally—some countries are developed (high income, diversified economy), some are developing (growing economy, improving conditions), some are least developed (low income, limited capacity). Development is driven by capital accumulation, technological innovation, human capital, institutions, and external trade. Debates about development center on whether to prioritize growth, equity, sustainability, or cultural preservation. Development is not automatic but requires policy, investment, and often international support."
            },
            {
                title: "Interconnections: Government, Society, and Economy",
                explanation: "Government, society, and economy are deeply interconnected systems shaping and constraining each other. Government provides the legal framework for economic activity, regulates markets, and delivers public goods that enable prosperity. Society provides the human capital, social cohesion, and trust necessary for both government and economic activity. The economy generates resources that fund government and provides employment and income that shape social structures. These systems can reinforce each other (virtuous cycles of development, accountability, prosperity) or undermine each other (corruption, inequality, institutional breakdown). Key tensions include balancing economic efficiency with equity, protecting individual freedom with collective welfare, and maintaining stability while adapting to change. Understanding these interconnections is crucial for grasping how societies develop, how they can fail, and how they might improve. Policy decisions in any one realm have spillover effects in others, requiring systemic thinking. The COVID-19 pandemic exemplified these interconnections—health crisis affecting economy affecting government, requiring coordinated responses."
            }
        ]
    }
];
