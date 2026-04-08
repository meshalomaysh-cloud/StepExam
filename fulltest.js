const grammarQuestions = [
  { q: "By the time the manager arrived, the report ________.", options: ["A) finished", "B) has finished", "C) had been finished", "D) finishes"], correct: 2 },
  { q: "I ________ my homework when the lights went out.", options: ["A) am doing", "B) was doing", "C) did", "D) have done"], correct: 1 },
  { q: "She has been living in Riyadh ________ 2010.", options: ["A) for", "B) since", "C) ago", "D) during"], correct: 1 },
  { q: "If I ________ you, I would take the scholarship.", options: ["A) am", "B) was", "C) were", "D) be"], correct: 2 },
  { q: "He promised ________ us as soon as he lands.", options: ["A) calling", "B) call", "C) to call", "D) called"], correct: 2 },
  { q: "The climate ________ hotter every year.", options: ["A) gets", "B) is getting", "C) get", "D) has got"], correct: 1 },
  { q: "Look! The plane ________ off right now.", options: ["A) takes", "B) took", "C) is taking", "D) has taken"], correct: 2 },
  { q: "I wish I ________ more time to study last week.", options: ["A) have", "B) had", "C) had had", "D) would have"], correct: 2 },
  { q: "My brother ________ to Dubai three times this year.", options: ["A) went", "B) has been", "C) was going", "D) goes"], correct: 1 },
  { q: "Water ________ at 100 degrees Celsius.", options: ["A) boil", "B) is boiling", "C) boils", "D) boiled"], correct: 2 },

  { q: "You ________ smoke in the hospital; it's strictly forbidden.", options: ["A) shouldn't", "B) don't have to", "C) mustn't", "D) needn't"], correct: 2 },
  { q: "The exam was easy; you ________ worried so much.", options: ["A) shouldn't have", "B) couldn't have", "C) mustn't have", "D) needn't have"], correct: 3 },
  { q: "He ________ be at home; I saw his car in the driveway.", options: ["A) can", "B) must", "C) might", "D) should"], correct: 1 },
  { q: "________ you like some coffee?", options: ["A) Will", "B) Do", "C) Would", "D) Can"], correct: 2 },
  { q: "I ________ ride a bike when I was five.", options: ["A) can", "B) could", "C) might", "D) should"], correct: 1 },

  { q: "The keys are ________ the kitchen table.", options: ["A) in", "B) at", "C) on", "D) over"], correct: 2 },
  { q: "We are interested ________ learning new languages.", options: ["A) on", "B) in", "C) with", "D) about"], correct: 1 },
  { q: "She went to bed early ________ she was very tired.", options: ["A) although", "B) because", "C) but", "D) so"], correct: 1 },
  { q: "________ the rain, they decided to go for a walk.", options: ["A) Despite", " realizes", "C) Although", "D) Even though"], correct: 0 },
  { q: "He is both a doctor ________ a talented musician.", options: ["A) or", "B) and", "C) but", "D) also"], correct: 1 },

  { q: "This is the man ________ saved the child.", options: ["A) which", "B) whom", "C) who", "D) whose"], correct: 2 },
  { q: "That is the house ________ roof was damaged in the storm.", options: ["A) which", "B) who", "C) whose", "D) that"], correct: 2 },
  { q: "The red car is ________ than the blue one.", options: ["A) expensive", "B) more expensive", "C) most expensive", "D) expensiver"], correct: 1 },
  { q: "It was ________ day of my life.", options: ["A) the happier", "B) the happiest", "C) happy", "D) most happy"], correct: 1 },
  { q: "He doesn't have ________ money to buy a new laptop.", options: ["A) many", "B) enough", "C) few", "D) a lot"], correct: 1 },

  { q: "The letter ________ by the postman yesterday.", options: ["A) delivered", "B) was delivered", "C) has delivered", "D) is delivered"], correct: 1 },
  { q: "He asked me where ________.", options: ["A) do I live", "B) I lived", "C) did I live", "D) I live"], correct: 1 },
  { q: "The bridge ________ right now.", options: ["A) is building", "B) is being built", "C) builds", "D) has built"], correct: 1 },
  { q: "They said that they ________ coming the next day.", options: ["A) are", "B) were", "C) will be", "D) have been"], correct: 1 },
  { q: "The thief ________ by the police last night.", options: ["A) caught", "B) was caught", "C) is caught", "D) has caught"], correct: 1 },

  { q: "Neither Sarah ________ her sister likes spicy food.", options: ["A) or", "B) nor", "C) and", "D) with"], correct: 1 },
  { q: "Hardly ________ had I entered the room when the phone rang.", options: ["A) no", "B) ever", "C) any", "D) [None]"], correct: 3 },
  { q: "You had better ________ your medicine on time.", options: ["A) take", "B) taking", "C) to take", "D) took"], correct: 0 },
  { q: "The student ________ wallet was stolen went to the police.", options: ["A) who", "B) whose", "C) which", "D) whom"], correct: 1 },
  { q: "Avoid ________ mistakes if you want a high score.", options: ["A) to make", "B) make", "C) making", "D) made"], correct: 2 },
  { q: "I am looking forward ________ you soon.", options: ["A) to see", "B) seeing", "C) to seeing", "D) see"], correct: 2 },
  { q: "She is ________ intelligent that she finished the task in minutes.", options: ["A) such", "B) very", "C) so", "D) too"], correct: 2 },
  { q: "Unless it ________, we will have a picnic.", options: ["A) rains", "B) doesn't rain", "C) will rain", "D) rained"], correct: 0 },
  { q: "I'd rather ________ at home tonight.", options: ["A) to stay", "B) stay", "C) staying", "D) stayed"], correct: 1 },
  { q: "The more you practice, ________ you become.", options: ["A) the better", "B) better", "C) best", "D) the best"], correct: 0 }];
const writingQuestions = [
  { q: "Which of the following sentences has the correct capitalization?", options: ["A) we visited the red sea.", "B) We visited the red sea.", "C) We visited the Red Sea.", "D) we visited the Red sea."], correct: 2 },
  { q: "Identify the sentence with the correct punctuation:", options: ["A) Ali, who is my friend, lives in Abha.", "B) Ali who is my friend lives in Abha.", "C) Ali who is my friend, lives in Abha", "D) Ali, who is my friend lives in Abha."], correct: 0 },
  { q: "Choose the correct sentence structure:", options: ["A) Always I study at night.", "B) I always study at night.", "C) I study always at night.", "D) At night I study always."], correct: 1 },
  { q: "Which of these is a complete sentence?", options: ["A) Walking to the park.", "B) Because he was late.", "C) The cat slept on the sofa.", "D) If you want to succeed."], correct: 2 },
  { q: "Choose the correctly spelled word:", options: ["A) Necessary", "B) Neccessary", "C) Necesary", "D) Necassary"], correct: 0 },
  { q: "Select the correct transition word: 'He studied hard; _______, he passed with a high score.'", options: ["A) However", "B) Therefore", "C) But", "D) Although"], correct: 1 },
  { q: "Which sentence uses the possessive 's' correctly?", options: ["A) The teachers lounge is big.", "B) The teacher's lounge is big.", "C) The teachers's lounge is big.", "D) The teachers' lounge is big."], correct: 1 },
  { q: "Identify the misspelled word in this list:", options: ["A) Environment", "B) Government", "C) Accomodate", "D) Professional"], correct: 2 },
  { q: "Which of the following is a run-on sentence?", options: ["A) I like tea, but she likes coffee.", "B) I like tea she likes coffee.", "C) I like tea; she likes coffee.", "D) I like tea. She likes coffee."], correct: 1 },
  { q: "Choose the best closing for a formal email:", options: ["A) Bye!", "B) Sincerely,", "C) See ya,", "D) Thanks a lot"], correct: 1 }
];
const readingQuestions = [
  { 
    type: "reading",
    passage: "Saudi Arabia is currently undergoing a massive transformation in its energy sector as part of Vision 2030. One of the most significant pillars of this change is the investment in renewable energy. The Shuaibah project, located near the city of Jeddah, stands as one of the largest solar power plants in the world. By utilizing thousands of high-tech solar panels, the plant aims to provide clean electricity to over 600,000 homes. This initiative is designed to diversify the Kingdom's energy sources, moving away from a total reliance on oil, while simultaneously protecting the environment by reducing carbon emissions.",
    q: "What is the primary objective of the Shuaibah project according to the text?", 
    options: ["A) To build new residential cities near Jeddah", "B) To diversify energy sources and protect the environment", "C) To increase the production and export of oil", "D) To manufacture solar panels locally in Saudi Arabia"], 
    correct: 1 
  },
  { 
    type: "reading",
    passage: "Saudi Arabia is currently undergoing a massive transformation... The Shuaibah project, located near the city of Jeddah...",
    q: "The word 'renewable' in the context of energy refers to sources that:", 
    options: ["A) Are very expensive to maintain", "B) Will eventually run out over time", "C) Do not deplete and are naturally replenished", "D) Produce high levels of pollution"], 
    correct: 2 
  },
  { 
    type: "reading",
    passage: "The Shuaibah project, located near the city of Jeddah, stands as one of the largest solar power plants in the world.",
    q: "Based on the passage, where is this major solar project situated?", 
    options: ["A) In the heart of the capital city, Riyadh", "B) Near the coastal city of Jeddah", "C) In the industrial area of Dammam", "D) Near the mountains of Abha"], 
    correct: 1 
  },
  { 
    type: "reading",
    passage: "...the plant aims to provide clean electricity to over 600,000 homes. This initiative is designed... to protect the environment by reducing carbon emissions.",
    q: "How does the project contribute to environmental protection?", 
    options: ["A) By planting trees around the solar panels", "B) By reducing the amount of carbon emissions", "C) By cleaning the water near Jeddah", "D) By reducing the number of cars on the road"], 
    correct: 1 
  },
  { 
    type: "reading",
    passage: "...the plant aims to provide clean electricity to over 600,000 homes.",
    q: "Approximately how many households are expected to benefit from the project's electricity?", 
    options: ["A) 60,000 homes", "B) 100,000 homes", "C) More than half a million homes", "D) Exactly one million homes"], 
    correct: 2 
  },
  
  { 
    type: "reading",
    passage: "In recent years, the landscape of education has shifted dramatically toward digital platforms. Online learning allows students to access high-quality materials from the comfort of their own homes, which is particularly beneficial for those living in remote areas. In 2026, many students preparing for standardized tests like the STEP exam rely on these platforms for practice. Modern e-learning saves significant time and effort by eliminating the need for daily commuting. However, experts suggest that while technology is helpful, students must remain disciplined and manage their time effectively to see real improvement.",
    q: "According to the passage, why do many students prefer digital platforms?", 
    options: ["A) Because they are cheaper than traditional books", "B) Because they save time and eliminate the need to travel", "C) Because they are only available for the STEP exam", "D) Because they do not require any discipline or effort"], 
    correct: 1 
  },
  { 
    type: "reading",
    passage: "In 2026, many students preparing for standardized tests like the STEP exam rely on these platforms for practice.",
    q: "The text mentions that STEP training is now commonly conducted:", 
    options: ["A) Only in physical libraries", "B) Through digital and online platforms", "C) In traditional classroom settings only", "D) By traveling to major cities"], 
    correct: 1 
  },
  { 
    type: "reading",
    passage: "Online learning allows students to access high-quality materials... which is particularly beneficial for those living in remote areas.",
    q: "Who does the text say benefits 'particularly' from online learning?", 
    options: ["A) Students who live far away from major cities", "B) Teachers who prefer working in offices", "C) People who do not own computers", "D) Students who have already passed the exam"], 
    correct: 0 
  },
  { 
    type: "reading",
    passage: "Modern e-learning saves significant time and effort... experts suggest that while technology is helpful, students must remain disciplined.",
    q: "The word 'effort' as used in the passage is closest in meaning to:", 
    options: ["A) Financial cost", "B) Physical and mental work", "C) Good luck", "D) Extra time"], 
    correct: 1 
  },
  { 
    type: "reading",
    passage: "However, experts suggest that while technology is helpful, students must remain disciplined and manage their time effectively.",
    q: "What is the 'expert' advice given at the end of the passage?", 
    options: ["A) To avoid using technology for studying", "B) To only study for ten minutes a day", "C) To use discipline and effective time management", "D) To wait until the day before the exam to start"], 
    correct: 2 
  },

  {
    type: "reading",
    passage: "The Riyadh Metro is a world-class public transport project that is currently redefining travel within the capital of Saudi Arabia. It is one of the largest urban rail projects ever built, consisting of six main lines that span a total of 176 kilometers across the city. The project features 85 stations, including several iconic interchanges designed by famous architects. Beyond just moving people, the metro aims to significantly reduce traffic congestion on Riyadh's busy roads and decrease air pollution. By providing a fast, reliable alternative to private cars, the government hopes to improve the overall quality of life for residents and visitors alike.",
    q: "What is the primary benefit of the Riyadh Metro mentioned in the text?",
    options: ["A) Increasing the price of private cars", "B) Reducing traffic congestion and air pollution", "C) Building more shopping malls at the stations", "D) Moving the capital to a different location"],
    correct: 1
  },
  {
    type: "reading",
    passage: "It is one of the largest urban rail projects ever built, consisting of six main lines that span a total of 176 kilometers.",
    q: "How many main rail lines make up the Riyadh Metro system?",
    options: ["A) Three", "B) Six", "C) Twelve", "D) Eighty-five"],
    correct: 1
  },
  {
    type: "reading",
    passage: "The Riyadh Metro is a world-class public transport project that is currently redefining travel... It is one of the largest urban rail projects ever built.",
    q: "The word 'redefining' in the text suggests that travel in Riyadh is:",
    options: ["A) Staying exactly the same", "B) Becoming more difficult", "C) Undergoing a major positive change", "D) Stopping entirely"],
    correct: 2
  },
  {
    type: "reading",
    passage: "The project features 85 stations, including several iconic interchanges designed by famous architects.",
    q: "According to the passage, the metro stations are notable because:",
    options: ["A) They are all underground", "B) Some were designed by famous architects", "C) They only accept cash payments", "D) They are closed during the weekends"],
    correct: 1
  },
  {
    type: "reading",
    passage: "...consisting of six main lines that span a total of 176 kilometers across the city.",
    q: "What is the total length of the Riyadh Metro network?",
    options: ["A) 85 kilometers", "B) 176 kilometers", "C) 2030 kilometers", "D) 600 kilometers"],
    correct: 1
  },

  {
    type: "reading",
    passage: "Maintaining a balanced diet is essential for long-term health and disease prevention. Nutritionists emphasize that eating a wide variety of vegetables and fruits is key because they provide vital vitamins, minerals, and antioxidants. These nutrients help the body's immune system fight off illnesses and improve energy levels throughout the day. Most health organizations recommend consuming at least five portions of different fruits and vegetables daily. Furthermore, reducing the intake of processed sugars and saturated fats can lower the risk of heart disease and obesity, leading to a much higher quality of life.",
    q: "What do fruits and vegetables provide to help the immune system?",
    options: ["A) Processed sugars and fats", "B) Vitamins, minerals, and antioxidants", "C) Only extra calories", "D) Caffeine and energy drinks"],
    correct: 1
  },
  {
    type: "reading",
    passage: "Nutritionists emphasize that eating a wide variety of vegetables and fruits is key... These nutrients help the body's immune system fight off illnesses.",
    q: "Why is a 'wide variety' of food recommended by nutritionists?",
    options: ["A) Because it makes the food look more colorful", "B) To ensure the body gets different types of vital nutrients", "C) Because it is cheaper than eating one type of food", "D) To make the meals take longer to prepare"],
    correct: 1
  },
  {
    type: "reading",
    passage: "Most health organizations recommend consuming at least five portions of different fruits and vegetables daily.",
    q: "What is the minimum daily recommendation for fruit and vegetable portions?",
    options: ["A) Two portions", "B) Three portions", "C) Five portions", "D) Eight portions"],
    correct: 2
  },
  {
    type: "reading",
    passage: "...reducing the intake of processed sugars and saturated fats can lower the risk of heart disease.",
    q: "According to the text, what should people eat less of to stay healthy?",
    options: ["A) Fresh water", "B) Processed sugars and saturated fats", "C) Leafy green vegetables", "D) Vitamins and minerals"],
    correct: 1
  },
  {
    type: "reading",
    passage: "Maintaining a balanced diet is essential for long-term health and disease prevention.",
    q: "The word 'essential' in the first sentence is closest in meaning to:",
    options: ["A) Optional", "B) Extremely important", "C) Very difficult", "D) Expensive"],
    correct: 1
  }
];
const listeningQuestions = [
    {
        q: "What time does the library close tonight?",
        options: ["9:00 PM", "10:00 PM", "9:30 PM", "10:30 PM"],
        correct: 1,
        type: "listening",
        audio: "library.mp3"
    },
    {
        q: "Why was Sarah in the library?",
        options: ["To meet a friend", "To return a book", "To write a paper", "To study for a math test"],
        correct: 2,
        type: "listening",
        audio: "library.mp3"
    },
    {
        q: "What piece of advice does Sarah give the listener?",
        options: ["To leave early", "To come back tomorrow", "That there is more time to study", "To change their research topic"],
        correct: 2,
        type: "listening",
        audio: "library.mp3"
    },

    {
        q: "Where is Khalid currently working?",
        options: ["A train station", "An airport", "A hotel", "A bus terminal"],
        correct: 1,
        type: "listening",
        audio: "travel.mp3"
    },
    {
        q: "What caused the flight delay?",
        options: ["Mechanical issues", "Lack of staff", "Bad weather", "Heavy traffic"],
        correct: 2,
        type: "listening",
        audio: "travel.mp3"
    },
    {
        q: "How much longer must passengers wait beyond the original time?",
        options: ["1 hour", "2 hours and 30 minutes", "3 hours", "45 minutes"],
        correct: 1,
        type: "listening",
        audio: "travel.mp3"
    },
    {
        q: "Who is eligible for a meal voucher?",
        options: ["Everyone on the flight", "Only the pilots", "Passengers with children or special needs", "People traveling to Dubai"],
        correct: 2,
        type: "listening",
        audio: "travel.mp3"
    },

    {
        q: "What is Dr. Nora’s main message?",
        options: ["Dreams are very important", "The brain is active during sleep", "Students should study at night", "How to avoid catching a cold"],
        correct: 1,
        type: "listening",
        audio: "health.mp3"
    },
    {
        q: "According to Dr. Nora, what does the brain do with new information?",
        options: ["It forgets it.", "It deletes it.", "It saves it for the long term.", "It shares it with others."],
        correct: 2,
        type: "listening",
        audio: "health.mp3"
    },
    {
        q: "What is the recommended sleep duration for adults?",
        options: ["5 to 6 hours", "6 to 7 hours", "7 to 8 hours", "9 to 10 hours"],
        correct: 2,
        type: "listening",
        audio: "health.mp3"
    }
];

const fullTest = [
    ...(typeof grammarQuestions !== 'undefined' ? grammarQuestions : []),
    ...(typeof readingQuestions !== 'undefined' ? readingQuestions : []),
    ...(typeof listeningQuestions !== 'undefined' ? listeningQuestions : []),
    ...(typeof writingQuestions !== 'undefined' ? writingQuestions : [])
];

let currentIndex = 0;
let userAnswers = new Array(fullTest.length).fill(null);
let audioPlayCounts = {}; 
let timeLeft = 80 * 60; 

const timerElement = document.getElementById('timer');
const countdown = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerElement.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    if (timeLeft <= 0) {
        clearInterval(countdown);
        finishTest();
    }
    timeLeft--;
}, 1000);

function displayQuestion() {
    if (fullTest.length === 0) return;

    const qData = fullTest[currentIndex];
    
    const readingBox = document.getElementById('reading-box');
    const audioWrapper = document.getElementById('audio-wrapper');
    const audioPlayer = document.getElementById('quiz-audio');
    const playBtn = document.getElementById('play-btn');
    const playStatus = document.getElementById('play-status');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const progressPercent = ((currentIndex + 1) / fullTest.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    progressText.innerText = `السؤال ${currentIndex + 1} من ${fullTest.length}`;

    prevBtn.style.display = currentIndex === 0 ? "none" : "block";
    nextBtn.innerText = currentIndex === fullTest.length - 1 ? "إنهاء الإختبار" : "التالي";
    nextBtn.style.backgroundColor = currentIndex === fullTest.length - 1 ? "#27ae60" : "#00171f";

    
    if (qData.type === "reading") {
        readingBox.style.display = "block";
        audioWrapper.style.display = "none";
        document.getElementById('passage-text').innerText = qData.passage;
        if (audioPlayer) audioPlayer.pause();
    } 
    else if (qData.type === "listening") {
        readingBox.style.display = "none";
        audioWrapper.style.display = "block";
        
        if (!audioPlayCounts[qData.audio]) audioPlayCounts[qData.audio] = 0;
        
        if (!audioPlayer.src.includes(qData.audio)) {
            audioPlayer.src = qData.audio;
            audioPlayer.load();
        }

        const remaining = 2 - audioPlayCounts[qData.audio];
        playStatus.innerText = `المحاولات المتبقية: ${remaining}`;
        playBtn.disabled = remaining <= 0;
        
        if (remaining <= 0) {
            playBtn.innerText = "انتهت المحاولات";
        } else {
            playBtn.innerText = "تشغيل المقطع الصوتي";
        }
    } 
    else {
        readingBox.style.display = "none";
        audioWrapper.style.display = "none";
        if (audioPlayer) {
            audioPlayer.pause();
            audioPlayer.src = ""; 
        }
    }

    questionText.innerText = qData.q;
    optionsContainer.innerHTML = "";
    
    qData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        
        if (userAnswers[currentIndex] === index) {
            button.classList.add('selected');
        }

        button.onclick = () => selectOption(button, index);
        optionsContainer.appendChild(button);
    });
}

function selectOption(button, index) {
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(opt => opt.classList.remove('selected'));
    button.classList.add('selected');
    userAnswers[currentIndex] = index;
}

function playAudio() {
    const audioPlayer = document.getElementById('quiz-audio');
    const playBtn = document.getElementById('play-btn');
    const playStatus = document.getElementById('play-status');
    const qData = fullTest[currentIndex];

    if (audioPlayCounts[qData.audio] >= 2) return;

    audioPlayer.play();
    playBtn.disabled = true;
    playBtn.innerText = "جاري التشغيل...";

    audioPlayer.onended = () => {
        audioPlayCounts[qData.audio]++;
        const remaining = 2 - audioPlayCounts[qData.audio];
        playStatus.innerText = `المحاولات المتبقية: ${remaining}`;
        
        if (remaining > 0) {
            playBtn.disabled = false;
            playBtn.innerText = "تشغيل المقطع الصوتي";
        } else {
            playBtn.innerText = "انتهت المحاولات";
        }
    };
}

function handleNext() {
    if (userAnswers[currentIndex] === null) {
        alert("الرجاء اختيار إجابة قبل الانتقال");
        return;
    }
    if (currentIndex < fullTest.length - 1) {
        currentIndex++;
        displayQuestion();
    } else {
        if (confirm("هل أنت متأكد من إنهاء الإختبار؟")) finishTest();
    }
}

function handlePrev() {
    if (currentIndex > 0) {
        currentIndex--;
        displayQuestion();
    }
}

function finishTest() {
    clearInterval(countdown);
    let finalScore = 0;
    fullTest.forEach((question, index) => {
        if (userAnswers[index] === question.correct) finalScore++;
    });

    const percentage = Math.round((finalScore / fullTest.length) * 100);
    const quizCard = document.querySelector('.quiz-card');
    
    quizCard.innerHTML = `
        <div style="text-align:center; direction:rtl;">
            <h2 style="color: #00171f;">اكتمل الاختبار!</h2>
            <hr style="margin: 20px 0; border: 0; border-top: 1px solid #eee;">
            <p style="font-size: 1.8rem; font-weight: bold; color: #2c3e50;">درجتك: ${finalScore} من ${fullTest.length}</p>
            <div class="percentage-circle">${percentage}%</div>
            <div style="display: flex; gap: 10px; justify-content: center; margin-top: 25px;">
                <button onclick="location.reload()" class="nav-btn" style="background: #eee; color: #333;">إعادة</button>
                <button onclick="showReview()" class="nav-btn" style="background: #00171f; color: white;">المراجعة</button>
            </div>
        </div>
    `;
}

function showReview() {
    const quizCard = document.querySelector('.quiz-card');
    let reviewHTML = `<div style="direction: rtl;"><h2 style="text-align:center;">مراجعة الإجابات</h2><div style="max-height: 60vh; overflow-y: auto; text-align: left; direction: ltr; padding: 10px;">`;
    
    fullTest.forEach((question, index) => {
        const isCorrect = userAnswers[index] === question.correct;
        reviewHTML += `
            <div style="padding: 15px; border-radius: 10px; margin-bottom: 15px; border: 1px solid ${isCorrect ? '#27ae60' : '#e74c3c'}; background: ${isCorrect ? '#f0fff4' : '#fff5f5'};">
                <p><strong>Q${index + 1}:</strong> ${question.q}</p>
                <p style="color: ${isCorrect ? 'green' : 'red'}">Your Answer: ${question.options[userAnswers[index]] || "None"}</p>
                ${!isCorrect ? `<p style="color: green">Correct: ${question.options[question.correct]}</p>` : ''}
            </div>`;
    });
    reviewHTML += `</div><button onclick="location.reload()" class="nav-btn" style="width:100%; margin-top:20px; background:#00171f; color:white;">خروج</button></div>`;
    quizCard.innerHTML = reviewHTML;
}

displayQuestion();