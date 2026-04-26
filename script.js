const vocabularyDatabase = [
    { english: "Hello", creole: "Bonjou", pronunciation: "bon-jou", category: "greetings" },
    { english: "Hi", creole: "Alo", pronunciation: "a-lo", category: "greetings" },
    { english: "Good morning", creole: "Bonjou", pronunciation: "bon-jou", category: "greetings" },
    { english: "Good afternoon", creole: "Bon apremidi", pronunciation: "bon a-pre-mi-di", category: "greetings" },
    { english: "Good evening", creole: "Bonswa", pronunciation: "bon-swa", category: "greetings" },
    { english: "Good night", creole: "Bòn nwit", pronunciation: "bon nwee", category: "greetings" },
    { english: "How are you?", creole: "Kijan ou ye?", pronunciation: "ki-jan ou ye", category: "greetings" },
    { english: "I'm fine", creole: "Mwen anfòm", pronunciation: "mwen an-fom", category: "greetings" },
    { english: "Thank you", creole: "Mèsi", pronunciation: "meh-si", category: "greetings" },
    { english: "Thanks a lot", creole: "Mèsi anpil", pronunciation: "meh-si an-pil", category: "greetings" },
    { english: "You're welcome", creole: "Pa gen pwoblèm", pronunciation: "pa gen pwo-blem", category: "greetings" },
    { english: "Please", creole: "Tanpri", pronunciation: "tan-pri", category: "greetings" },
    { english: "Nice to meet you", creole: "Mwen kontan rankontre ou", pronunciation: "mwen kon-tan ran-kon-tre ou", category: "greetings" },
    { english: "See you later", creole: "N a wè pita", pronunciation: "na we pi-ta", category: "greetings" },
    { english: "See you tomorrow", creole: "N a wè demen", pronunciation: "na we de-men", category: "greetings" },
    { english: "Welcome", creole: "Byenveni", pronunciation: "byen-ve-ni", category: "greetings" },
    { english: "My name is...", creole: "Mwen rele...", pronunciation: "mwen re-le", category: "greetings" },
    { english: "What is your name?", creole: "Kijan ou rele?", pronunciation: "ki-jan ou re-le", category: "greetings" },
    { english: "I am Haitian", creole: "Mwen se Ayisyen", pronunciation: "mwen se ayi-syen", category: "greetings" },
    { english: "Have a good day", creole: "Pase yon bon jounen", pronunciation: "pa-se yon bon jou-ne", category: "greetings" },

    { english: "Zero", creole: "Zewo", pronunciation: "ze-wo", category: "numbers" },
    { english: "One", creole: "Youn", pronunciation: "youn", category: "numbers" },
    { english: "Two", creole: "De", pronunciation: "de", category: "numbers" },
    { english: "Three", creole: "Twa", pronunciation: "twa", category: "numbers" },
    { english: "Four", creole: "Kat", pronunciation: "kat", category: "numbers" },
    { english: "Five", creole: "Senk", pronunciation: "senk", category: "numbers" },
    { english: "Six", creole: "Sis", pronunciation: "sis", category: "numbers" },
    { english: "Seven", creole: "Sèt", pronunciation: "set", category: "numbers" },
    { english: "Eight", creole: "Uit", pronunciation: "wit", category: "numbers" },
    { english: "Nine", creole: "Nèf", pronunciation: "nef", category: "numbers" },
    { english: "Ten", creole: "Dis", pronunciation: "dis", category: "numbers" },
    { english: "Eleven", creole: "Onz", pronunciation: "onz", category: "numbers" },
    { english: "Twelve", creole: "Douz", pronunciation: "douz", category: "numbers" },
    { english: "Thirteen", creole: "Trèz", pronunciation: "trez", category: "numbers" },
    { english: "Fourteen", creole: "Katòz", pronunciation: "ka-toz", category: "numbers" },
    { english: "Fifteen", creole: "Kenz", pronunciation: "kenz", category: "numbers" },
    { english: "Sixteen", creole: "Sèz", pronunciation: "sez", category: "numbers" },
    { english: "Seventeen", creole: "Disèt", pronunciation: "di-set", category: "numbers" },
    { english: "Eighteen", creole: "Dizwit", pronunciation: "diz-wit", category: "numbers" },
    { english: "Nineteen", creole: "Diznèf", pronunciation: "diz-nef", category: "numbers" },
    { english: "Twenty", creole: "Ven", pronunciation: "ven", category: "numbers" },
    { english: "Thirty", creole: "Trant", pronunciation: "trant", category: "numbers" },
    { english: "Forty", creole: "Karant", pronunciation: "ka-rant", category: "numbers" },
    { english: "Fifty", creole: "Senkant", pronunciation: "sen-kant", category: "numbers" },
    { english: "One hundred", creole: "San", pronunciation: "san", category: "numbers" },
    { english: "One thousand", creole: "Mil", pronunciation: "mil", category: "numbers" },

    { english: "Yes", creole: "Wi", pronunciation: "wi", category: "common" },
    { english: "No", creole: "Non", pronunciation: "non", category: "common" },
    { english: "Please", creole: "Tanpri", pronunciation: "tan-pri", category: "common" },
    { english: "Excuse me", creole: "Eskize m", pronunciation: "es-ki-ze m", category: "common" },
    { english: "Sorry", creole: "Padon", pronunciation: "pa-don", category: "common" },
    { english: "I don't understand", creole: "Mwen pa konprann", pronunciation: "mwen pa kon-prann", category: "common" },
    { english: "I understand", creole: "Mwen konprann", pronunciation: "mwen kon-prann", category: "common" },
    { english: "Can you repeat?", creole: "Èske ou ka repete?", pronunciation: "es-ke ou ka re-pe-te", category: "common" },
    { english: "Speak slowly", creole: "Pale dousman", pronunciation: "pa-le dous-man", category: "common" },
    { english: "Do you speak English?", creole: "Èske ou pale anglè?", pronunciation: "eske ou pa-le angle", category: "common" },
    { english: "Where is...?", creole: "Ki kote...?", pronunciation: "ki ko-te", category: "common" },
    { english: "How much?", creole: "Konbyen?", pronunciation: "kon-byen", category: "common" },
    { english: "I need help", creole: "Mwen bezwen èd", pronunciation: "mwen be-zwen ed", category: "common" },
    { english: "Call the police", creole: "Rele lapolis", pronunciation: "re-le la-po-lis", category: "common" },
    { english: "Call a doctor", creole: "Rele yon doktè", pronunciation: "re-le yon dok-te", category: "common" },
    { english: "I am hungry", creole: "Mwen grangou", pronunciation: "mwen gran-gou", category: "common" },
    { english: "I am thirsty", creole: "Mwen swaf", pronunciation: "mwen swaf", category: "common" },
    { english: "I am tired", creole: "Mwen fatige", pronunciation: "mwen fa-ti-ge", category: "common" },
    { english: "I am happy", creole: "Mwen kontan", pronunciation: "mwen kon-tan", category: "common" },
    { english: "I am sad", creole: "Mwen tris", pronunciation: "mwen tris", category: "common" },
    { english: "I love you", creole: "Mwen renmen ou", pronunciation: "mwen ren-men ou", category: "common" },
    { english: "Let's go", creole: "Ann ale", pronunciation: "ann a-le", category: "common" },
    { english: "Wait", creole: "Tann", pronunciation: "tan", category: "common" },
    { english: "Come here", creole: "Vini la", pronunciation: "vi-ni la", category: "common" },
    { english: "Today", creole: "Jodi a", pronunciation: "jo-di a", category: "common" },
    { english: "Tomorrow", creole: "Demen", pronunciation: "de-men", category: "common" },
    { english: "Yesterday", creole: "Yè", pronunciation: "ye", category: "common" },
    { english: "Now", creole: "Kounye a", pronunciation: "kou-nye a", category: "common" },
    { english: "Later", creole: "Pita", pronunciation: "pi-ta", category: "common" },
    { english: "What time is it?", creole: "Ki lè li ye?", pronunciation: "ki le li ye", category: "common" },

    { english: "Water", creole: "Dlo", pronunciation: "dlo", category: "food" },
    { english: "Food", creole: "Manje", pronunciation: "man-je", category: "food" },
    { english: "Breakfast", creole: "Dejene", pronunciation: "de-je-ne", category: "food" },
    { english: "Lunch", creole: "Manje midi", pronunciation: "man-je mi-di", category: "food" },
    { english: "Dinner", creole: "Manje aswè", pronunciation: "man-je as-we", category: "food" },
    { english: "Rice", creole: "Diri", pronunciation: "di-ri", category: "food" },
    { english: "Beans", creole: "Pwa", pronunciation: "pwa", category: "food" },
    { english: "Corn meal", creole: "Mayi moulen", pronunciation: "ma-yi mou-len", category: "food" },
    { english: "Bread", creole: "Pen", pronunciation: "pen", category: "food" },
    { english: "Butter", creole: "Bè", pronunciation: "be", category: "food" },
    { english: "Salt", creole: "Sèl", pronunciation: "sel", category: "food" },
    { english: "Sugar", creole: "Sik", pronunciation: "sik", category: "food" },
    { english: "Pepper", creole: "Piman", pronunciation: "pi-man", category: "food" },
    { english: "Chicken", creole: "Poul", pronunciation: "poul", category: "food" },
    { english: "Goat meat", creole: "Vyann kabrit", pronunciation: "vyan ka-brit", category: "food" },
    { english: "Fish", creole: "Pwason", pronunciation: "pwa-son", category: "food" },
    { english: "Egg", creole: "Ze", pronunciation: "ze", category: "food" },
    { english: "Milk", creole: "Lèt", pronunciation: "let", category: "food" },
    { english: "Fruit", creole: "Fwi", pronunciation: "fwi", category: "food" },
    { english: "Mango", creole: "Mango", pronunciation: "man-go", category: "food" },
    { english: "Orange", creole: "Zoranj", pronunciation: "zo-ranj", category: "food" },
    { english: "Pineapple", creole: "Anana", pronunciation: "a-na-na", category: "food" },
    { english: "Banana", creole: "Bannann", pronunciation: "ba-nann", category: "food" },
    { english: "Plantain", creole: "Bannann peze", pronunciation: "ba-nann pe-ze", category: "food" },
    { english: "Coconut", creole: "Nwa kokoye", pronunciation: "nwa ko-ko-ye", category: "food" },
    { english: "Coffee", creole: "Kafe", pronunciation: "ka-fe", category: "food" },
    { english: "Tea", creole: "Te", pronunciation: "te", category: "food" },
    { english: "Juice", creole: "Ji", pronunciation: "ji", category: "food" },
    { english: "Delicious", creole: "Bon anpil", pronunciation: "bon an-pil", category: "food" },
    { english: "I want to eat", creole: "Mwen vle manje", pronunciation: "mwen vle man-je", category: "food" },

    { english: "Mother", creole: "Manman", pronunciation: "man-man", category: "family" },
    { english: "Father", creole: "Papa", pronunciation: "pa-pa", category: "family" },
    { english: "Parents", creole: "Paran", pronunciation: "pa-ran", category: "family" },
    { english: "Brother", creole: "Frè", pronunciation: "fre", category: "family" },
    { english: "Sister", creole: "Sè", pronunciation: "se", category: "family" },
    { english: "Older brother", creole: "Gran frè", pronunciation: "gran fre", category: "family" },
    { english: "Older sister", creole: "Gran sè", pronunciation: "gran se", category: "family" },
    { english: "Younger brother", creole: "Ti frè", pronunciation: "ti fre", category: "family" },
    { english: "Younger sister", creole: "Ti sè", pronunciation: "ti se", category: "family" },
    { english: "Son", creole: "Pitit gason", pronunciation: "pi-tit ga-son", category: "family" },
    { english: "Daughter", creole: "Pitit fi", pronunciation: "pi-tit fi", category: "family" },
    { english: "Child", creole: "Pitit", pronunciation: "pi-tit", category: "family" },
    { english: "Children", creole: "Timoun", pronunciation: "ti-moun", category: "family" },
    { english: "Wife", creole: "Madanm", pronunciation: "ma-danm", category: "family" },
    { english: "Husband", creole: "Mari", pronunciation: "ma-ri", category: "family" },
    { english: "Grandmother", creole: "Grann", pronunciation: "grann", category: "family" },
    { english: "Grandfather", creole: "Granpapa", pronunciation: "gran-pa-pa", category: "family" },
    { english: "Grandparents", creole: "Granparan", pronunciation: "gran-pa-ran", category: "family" },
    { english: "Aunt", creole: "Matant", pronunciation: "ma-tant", category: "family" },
    { english: "Uncle", creole: "Tonton", pronunciation: "ton-ton", category: "family" },
    { english: "Cousin", creole: "Kouzen", pronunciation: "kou-zen", category: "family" },
    { english: "Nephew", creole: "Nevè", pronunciation: "ne-ve", category: "family" },
    { english: "Niece", creole: "Nyes", pronunciation: "nyes", category: "family" },
    { english: "Family", creole: "Fanmi", pronunciation: "fan-mi", category: "family" },
    { english: "Home", creole: "Lakay", pronunciation: "la-kay", category: "family" }
];

const i18n = {
    en: {
        "nav.home": "Home",
        "nav.vocabulary": "Vocabulary",
        "nav.pronunciation": "Pronunciation",
        "nav.practice": "Practice",
        "nav.about": "About",
        "language.label": "Language",

        "home.title": "Welcome to Apprendre le Créole",
        "home.subtitle": "Learn and master the beauty of Haitian Creole",
        "home.start": "Start Learning",
        "home.learnMore": "Learn More",

        "features.vocab.title": "Rich Vocabulary",
        "features.vocab.desc": "Hundreds of words and phrases organized by categories",
        "features.pronunciation.title": "Pronunciation Guide",
        "features.pronunciation.desc": "Listen to native-like pronunciations and improve your accent",
        "features.exercise.title": "Interactive Exercises",
        "features.exercise.desc": "Practice with quizzes and interactive exercises",
        "features.speaking.title": "Speaking Practice",
        "features.speaking.desc": "Record and practice your Creole speaking skills",

        "vocabulary.title": "Creole Vocabulary",
        "pronunciation.title": "Pronunciation Guide",
        "pronunciation.subtitle": "Listen and practice along",
        "practice.title": "Interactive Practice",
        "practice.quiz": "Quiz",
        "practice.matching": "Matching",
        "practice.speaking": "Speaking Practice",

        "matching.instructions": "Match the English words with their Creole translations",

        "about.title": "About Haitian Creole",
        "about.whatTitle": "What is Haitian Creole?",
        "about.whatBody": "Haitian Creole is a vibrant language spoken in Haiti and by Haitian communities worldwide. It carries history, identity, and culture in everyday life.",
        "about.whyTitle": "Why learn Haitian Creole?",
        "about.why1": "🌍 Connect with Haitian communities across the world",
        "about.why2": "🎭 Explore a rich cultural heritage",
        "about.why3": "💼 Expand your professional opportunities",
        "about.why4": "🎵 Enjoy music, literature, and arts in their original language",
        "about.funTitle": "Fun Facts",
        "about.fun1": "Haitian Creole is spoken by millions of people worldwide",
        "about.fun2": "It is one of Haiti's official languages",
        "about.fun3": "It has a clear writing system that helps learners read quickly",
        "about.fun4": "Creole is central to Haitian identity, music, and storytelling",

        "progress.title": "Your Progress",
        "progress.default": "Learn new words to track your progress!",
        "progress.learned": "{learned}/{total} words learned",

        "category.all": "All",
        "category.greetings": "Greetings",
        "category.numbers": "Numbers",
        "category.common": "Common Phrases",
        "category.food": "Food & Drink",
        "category.family": "Family",

        "modal.creole": "Creole",
        "modal.pronunciation": "Pronunciation",
        "modal.category": "Category",
        "modal.listen": "🔊 Pronounce",
        "modal.learned": "✓ Mark as Learned",

        "pronounce.creole": "Creole",
        "pronounce.how": "How to say",
        "pronounce.listen": "🔊 Listen",

        "quiz.question": "What is the Creole word for \"{word}\"?",
        "quiz.complete": "Quiz Complete!",
        "quiz.score": "Your Score: {score}/5",
        "quiz.tryAgain": "Try Again",

        "speaking.title": "Speak the following word:",
        "speaking.listen": "🔊 Listen",
        "speaking.next": "Next Word",
        "speaking.saved": "✓ Recording saved!",
        "speaking.recording": "🔴 Recording...",
        "speaking.denied": "Microphone access denied",

        "footer": "© 2026 Apprendre le Créole. A platform for learning Haitian Creole language and culture. 🌴"
    },
    ht: {
        "nav.home": "Akèy",
        "nav.vocabulary": "Vokabilè",
        "nav.pronunciation": "Pwononsyasyon",
        "nav.practice": "Pratik",
        "nav.about": "Konsènan",
        "language.label": "Lang",

        "home.title": "Byenveni sou Apprendre le Créole",
        "home.subtitle": "Aprann epi metrize bote lang kreyòl ayisyen",
        "home.start": "Kòmanse Aprann",
        "home.learnMore": "Aprann Plis",

        "features.vocab.title": "Vokabilè Rich",
        "features.vocab.desc": "Plizyè santèn mo ak fraz klase pa kategori",
        "features.pronunciation.title": "Gid Pwononsyasyon",
        "features.pronunciation.desc": "Koute pwononsyasyon natif natal epi amelyore aksan ou",
        "features.exercise.title": "Egzèsis Entèaktif",
        "features.exercise.desc": "Pratike ak kestyonè ak egzèsis entèaktif",
        "features.speaking.title": "Pratik Pale",
        "features.speaking.desc": "Anrejistre epi pratike kapasite pale kreyòl ou",

        "vocabulary.title": "Vokabilè Kreyòl",
        "pronunciation.title": "Gid Pwononsyasyon",
        "pronunciation.subtitle": "Koute epi pratike ansanm",
        "practice.title": "Pratik Entèaktif",
        "practice.quiz": "Kisyonè",
        "practice.matching": "Matche",
        "practice.speaking": "Pratik Pale",

        "matching.instructions": "Matche mo anglè yo ak tradiksyon kreyòl yo",

        "about.title": "Konsènan Kreyòl Ayisyen",
        "about.whatTitle": "Kisa Kreyòl Ayisyen ye?",
        "about.whatBody": "Kreyòl ayisyen se yon bèl lang yo pale an Ayiti ak nan dyaspora ayisyen an toupatou sou latè. Li pote istwa, idantite ak kilti nan lavi chak jou.",
        "about.whyTitle": "Poukisa aprann kreyòl ayisyen?",
        "about.why1": "🌍 Konekte ak kominote ayisyen toupatou sou latè",
        "about.why2": "🎭 Dekouvri yon richès kiltirèl",
        "about.why3": "💼 Elaji opòtinite pwofesyonèl ou",
        "about.why4": "🎵 Jwi mizik, literati ak atizay nan lang orijinal yo",
        "about.funTitle": "Ti Reyalite Enteresan",
        "about.fun1": "Plizyè milyon moun pale kreyòl ayisyen atravè lemond",
        "about.fun2": "Li se youn nan lang ofisyèl Ayiti",
        "about.fun3": "Li gen yon òtograf klè ki ede moun li vit",
        "about.fun4": "Kreyòl la nan kè idantite, mizik ak istwa ayisyen",

        "progress.title": "Pwogrè Ou",
        "progress.default": "Aprann nouvo mo pou swiv pwogrè ou!",
        "progress.learned": "{learned}/{total} mo aprann",

        "category.all": "Tout",
        "category.greetings": "Salitasyon",
        "category.numbers": "Nimewo",
        "category.common": "Fraz Komen",
        "category.food": "Manje ak Bwè",
        "category.family": "Fanmi",

        "modal.creole": "Kreyòl",
        "modal.pronunciation": "Pwononsyasyon",
        "modal.category": "Kategori",
        "modal.listen": "🔊 Tande",
        "modal.learned": "✓ Make kòm Aprann",

        "pronounce.creole": "Kreyòl",
        "pronounce.how": "Kijan pou di l",
        "pronounce.listen": "🔊 Koute",

        "quiz.question": "Ki mo kreyòl pou \"{word}\"?",
        "quiz.complete": "Kisyonè a fini!",
        "quiz.score": "Nòt ou: {score}/5",
        "quiz.tryAgain": "Rekòmanse",

        "speaking.title": "Pale mo sa a:",
        "speaking.listen": "🔊 Koute",
        "speaking.next": "Pwochen Mo",
        "speaking.saved": "✓ Anrejistreman an sove!",
        "speaking.recording": "🔴 Anrejistreman an ap fèt...",
        "speaking.denied": "Aksè mikwofòn lan refize",

        "footer": "© 2026 Apprendre le Créole. Yon platfòm pou aprann lang ak kilti kreyòl ayisyen. 🌴"
    }
};

let learnedWords = new Set();
let currentCategory = "all";
let currentLanguage = localStorage.getItem("app-language") || "ht";
let availableVoices = [];

let quizState = {
    currentQuestion: 0,
    score: 0
};

let selectedItem = null;
let isRecording = false;
let mediaRecorder;
let audioChunks = [];

function t(key, vars = {}) {
    const dict = i18n[currentLanguage] || i18n.en;
    const fallback = i18n.en[key] || key;
    let text = dict[key] || fallback;

    Object.keys(vars).forEach((name) => {
        text = text.replace(`{${name}}`, String(vars[name]));
    });

    return text;
}

function escapeForSingleQuote(text) {
    return text.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

function initializeVoices() {
    availableVoices = window.speechSynthesis.getVoices();
}

function getBestCreoleVoice() {
    if (!availableVoices.length) {
        return null;
    }

    const prioritized = [
        (voice) => /^ht(-|$)/i.test(voice.lang),
        (voice) => /hait|creole/i.test(`${voice.name} ${voice.lang}`),
        (voice) => /^fr-HT$/i.test(voice.lang),
        (voice) => /^fr(-|$)/i.test(voice.lang),
        (voice) => /^en(-|$)/i.test(voice.lang)
    ];

    for (const matcher of prioritized) {
        const matched = availableVoices.find(matcher);
        if (matched) {
            return matched;
        }
    }

    return availableVoices[0];
}

function normalizeWordForSpeech(word) {
    return word
        .replace(/\.{3}/g, "")
        .replace(/\-/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function setLanguage(language) {
    currentLanguage = i18n[language] ? language : "en";
    localStorage.setItem("app-language", currentLanguage);
    document.documentElement.lang = currentLanguage === "ht" ? "ht" : "en";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        element.textContent = t(key);
    });

    displayVocabulary();
    displayPronunciationGuide();
    displayQuizQuestion();
    displayMatching();
    displaySpeakingPractice();
    updateProgress();
}

document.addEventListener("DOMContentLoaded", () => {
    initializeVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = initializeVoices;
    }

    const languageSelect = document.getElementById("languageSelect");
    languageSelect.value = currentLanguage;
    languageSelect.addEventListener("change", (event) => {
        setLanguage(event.target.value);
    });

    setLanguage(currentLanguage);
    initializeQuiz();
});

function showSection(sectionId) {
    document.querySelectorAll(".section").forEach((section) => {
        section.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");
    window.scrollTo(0, 0);
}

function filterCategory(category, button) {
    currentCategory = category;

    document.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }

    displayVocabulary();
}

function displayVocabulary() {
    const grid = document.getElementById("vocabularyGrid");
    grid.innerHTML = "";

    const filteredWords = currentCategory === "all"
        ? vocabularyDatabase
        : vocabularyDatabase.filter((word) => word.category === currentCategory);

    filteredWords.forEach((word) => {
        const card = document.createElement("div");
        card.className = "vocabulary-card";
        card.innerHTML = `
            <div class="vocab-english">${word.english}</div>
            <div class="vocab-creole">${word.creole}</div>
            <div class="vocab-category">${t(`category.${word.category}`)}</div>
        `;

        card.addEventListener("click", () => showWordModal(word));
        grid.appendChild(card);
    });
}

function showWordModal(word) {
    const modal = document.getElementById("wordModal");
    const modalBody = document.getElementById("modalBody");

    const safeWord = escapeForSingleQuote(word.creole);
    const safeEnglish = escapeForSingleQuote(word.english);

    modalBody.innerHTML = `
        <h3>${word.english}</h3>
        <p><strong>${t("modal.creole")}:</strong> ${word.creole}</p>
        <p><strong>${t("modal.pronunciation")}:</strong> ${word.pronunciation}</p>
        <p><strong>${t("modal.category")}:</strong> <span class="vocab-category">${t(`category.${word.category}`)}</span></p>
        <button class="btn btn-primary" onclick="pronounceWord('${safeWord}')">${t("modal.listen")}</button>
        <button class="btn btn-secondary" onclick="markAsLearned('${safeEnglish}')">${t("modal.learned")}</button>
    `;

    modal.classList.add("show");
}

function closeWordModal() {
    document.getElementById("wordModal").classList.remove("show");
}

function markAsLearned(word) {
    learnedWords.add(word);
    updateProgress();
    closeWordModal();
}

function pronounceWord(word) {
    if (!("speechSynthesis" in window)) {
        return;
    }

    const utterance = new SpeechSynthesisUtterance(normalizeWordForSpeech(word));
    const voice = getBestCreoleVoice();

    if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
    } else {
        utterance.lang = "ht-HT";
    }

    utterance.rate = 0.88;
    utterance.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
}

function displayPronunciationGuide() {
    const list = document.getElementById("pronunciationList");
    list.innerHTML = "";

    vocabularyDatabase.slice(0, 12).forEach((word) => {
        const safeWord = escapeForSingleQuote(word.creole);
        const item = document.createElement("div");
        item.className = "pronunciation-item";
        item.innerHTML = `
            <h4>${word.english}</h4>
            <p><strong>${t("pronounce.creole")}:</strong> ${word.creole}</p>
            <p><strong>${t("pronounce.how")}:</strong> ${word.pronunciation}</p>
            <button class="play-btn" onclick="pronounceWord('${safeWord}')">${t("pronounce.listen")}</button>
        `;
        list.appendChild(item);
    });
}

function initializeQuiz() {
    startNewQuiz();
}

function startNewQuiz() {
    quizState = {
        currentQuestion: 0,
        score: 0
    };

    displayQuizQuestion();
}

function displayQuizQuestion() {
    const quizContent = document.getElementById("quizContent");

    if (quizState.currentQuestion >= 5) {
        quizContent.innerHTML = `
            <div class="quiz-score">
                <h3>${t("quiz.complete")}</h3>
                <p>${t("quiz.score", { score: quizState.score })}</p>
                <button class="btn btn-primary" onclick="startNewQuiz()">${t("quiz.tryAgain")}</button>
            </div>
        `;
        return;
    }

    const randomWord = vocabularyDatabase[Math.floor(Math.random() * vocabularyDatabase.length)];
    const options = getQuizOptions(randomWord);
    const questionText = t("quiz.question", { word: randomWord.english });
    const safeCorrect = escapeForSingleQuote(randomWord.creole);

    quizContent.innerHTML = `
        <div class="quiz-question">
            <h4>${questionText}</h4>
            <div class="quiz-options">
                ${options.map((option, index) => {
                    const safeOption = option.replace(/"/g, "&quot;");
                    return `
                        <div class="quiz-option" data-answer="${safeOption}" onclick="selectQuizAnswer(${index}, '${safeCorrect}', this)">
                            ${option}
                        </div>
                    `;
                }).join("")}
            </div>
        </div>
    `;
}

function getQuizOptions(correctWord) {
    const correctAnswer = correctWord.creole;
    const options = [correctAnswer];

    while (options.length < 4) {
        const randomWord = vocabularyDatabase[Math.floor(Math.random() * vocabularyDatabase.length)];
        if (!options.includes(randomWord.creole)) {
            options.push(randomWord.creole);
        }
    }

    return options.sort(() => Math.random() - 0.5);
}

function selectQuizAnswer(_index, correct, element) {
    const options = document.querySelectorAll(".quiz-option");
    options.forEach((opt) => {
        opt.style.pointerEvents = "none";
    });

    const selectedText = element.textContent.trim();

    if (selectedText === correct) {
        element.classList.add("correct");
        quizState.score++;
    } else {
        element.classList.add("incorrect");
        options.forEach((opt) => {
            if (opt.textContent.trim() === correct) {
                opt.classList.add("correct");
            }
        });
    }

    setTimeout(() => {
        quizState.currentQuestion++;
        displayQuizQuestion();
    }, 1200);
}

function switchPractice(tab, button) {
    document.querySelectorAll(".practice-tab").forEach((panel) => {
        panel.classList.remove("active");
    });

    document.getElementById(`${tab}-tab`).classList.add("active");

    document.querySelectorAll(".tab-btn").forEach((btn) => {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }
}

function displayMatching() {
    const matchingContent = document.getElementById("matchingContent");

    const selectedWords = vocabularyDatabase.slice(0, 6);
    const shuffledCreole = [...selectedWords].sort(() => Math.random() - 0.5);

    matchingContent.innerHTML = `
        <div class="matching-content">
            <div class="matching-column">
                ${selectedWords.map((word) => `
                    <div class="matching-item" data-english="${word.english}">
                        ${word.english}
                    </div>
                `).join("")}
            </div>
            <div class="matching-column">
                ${shuffledCreole.map((word) => `
                    <div class="matching-item" data-creole="${word.creole}">
                        ${word.creole}
                    </div>
                `).join("")}
            </div>
        </div>
    `;

    setupMatchingSelection();
}

function setupMatchingSelection() {
    const items = document.querySelectorAll(".matching-item");

    items.forEach((item) => {
        item.addEventListener("click", function handleClick() {
            if (this.classList.contains("matched")) {
                return;
            }

            if (!selectedItem) {
                selectedItem = this;
                this.style.opacity = "0.5";
                return;
            }

            checkMatch(selectedItem, this);
        });
    });
}

function checkMatch(item1, item2) {
    item1.style.opacity = "1";

    if (item1 === item2) {
        selectedItem = null;
        return;
    }

    const english = item1.dataset.english || item2.dataset.english;
    const creole = item1.dataset.creole || item2.dataset.creole;

    const correctMatch = vocabularyDatabase.find((word) => word.english === english && word.creole === creole);

    if (correctMatch) {
        item1.classList.add("matched");
        item2.classList.add("matched");
    }

    selectedItem = null;
}

function displaySpeakingPractice() {
    const speakingContent = document.getElementById("speakingContent");
    const randomWord = vocabularyDatabase[Math.floor(Math.random() * vocabularyDatabase.length)];
    const safeWord = escapeForSingleQuote(randomWord.creole);

    speakingContent.innerHTML = `
        <h4>${t("speaking.title")}</h4>
        <div class="speaking-word">${randomWord.creole}</div>
        <div class="speaking-buttons">
            <button class="btn btn-primary" onclick="pronounceWord('${safeWord}')">${t("speaking.listen")}</button>
            <button class="record-btn" id="recordBtn" onclick="toggleRecording()">🎤</button>
        </div>
        <p id="recordingStatus" style="margin-top: 1rem; color: var(--text-light);"></p>
        <button class="btn btn-secondary" onclick="displaySpeakingPractice()" style="margin-top: 1rem;">${t("speaking.next")}</button>
    `;
}

async function toggleRecording() {
    const recordBtn = document.getElementById("recordBtn");
    const recordingStatus = document.getElementById("recordingStatus");

    if (!isRecording) {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);
            audioChunks = [];

            mediaRecorder.ondataavailable = (event) => {
                audioChunks.push(event.data);
            };

            mediaRecorder.onstop = () => {
                recordingStatus.textContent = t("speaking.saved");
                setTimeout(() => {
                    recordingStatus.textContent = "";
                }, 2000);
            };

            mediaRecorder.start();
            isRecording = true;
            recordBtn.classList.add("recording");
            recordingStatus.textContent = t("speaking.recording");
        } catch (_error) {
            recordingStatus.textContent = t("speaking.denied");
        }
    } else {
        mediaRecorder.stop();
        isRecording = false;
        recordBtn.classList.remove("recording");
    }
}

function updateProgress() {
    const totalWords = vocabularyDatabase.length;
    const learnedCount = learnedWords.size;
    const percentage = Math.round((learnedCount / totalWords) * 100);

    document.getElementById("progressPercentage").textContent = `${percentage}%`;
    document.getElementById("progressFill").style.width = `${percentage}%`;
    document.getElementById("progressText").textContent = learnedCount > 0
        ? t("progress.learned", { learned: learnedCount, total: totalWords })
        : t("progress.default");
}

window.addEventListener("click", (event) => {
    const modal = document.getElementById("wordModal");
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

