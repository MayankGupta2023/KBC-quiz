const english = document.getElementById("english");
const hindi = document.getElementById("hindi");
const rules = document.getElementById("rules");

var question_number = 0;
var zebra = 0;

function playaudio(path) {
    let audioelement = new Audio(path);
    audioelement.play()
}

let intro = new Audio("./Requires/intro.mp3");
let swagat = new Audio("./Requires/bacchanintro.mp3")
let clock = new Audio("./Requires/clock.mp3")

document.getElementById("user-interact").style.top = "0px"
document.getElementById("game-page").style.top = "1000px"
document.getElementById("open-page").style.top = "1000px"

document.getElementById("game-page").style.display = "none"
document.getElementById("open-page").style.display = "none"







document.getElementById("interact").addEventListener("click", () => {

    intro.play()

    document.getElementById("points").style.display = "none"
    document.getElementById("bacchanimg").style.display = "block"

    document.getElementById("user-interact").style.top = "1000px";
    document.getElementById("open-page").style.top = "0px"
    question_number = 0;

    document.getElementById("game-page").style.display = "block"
    document.getElementById("open-page").style.display = "block"

    document.querySelector(".question").style.display = "none"
    document.querySelector(".option-box").style.display = "none"




})

var difficulty;



rules.style.display = "none"

english.addEventListener("click", () => {

    document.getElementById("rules-in-language").innerHTML = "1. On marking option correct you will get points. <br> <br> 2. On marking wrong option, game will over. <br><br> 3. There is no time limit for questions."
    document.getElementById("start").innerHTML = "Start"

})

hindi.addEventListener("click", () => {

    document.getElementById("rules-in-language").innerHTML = "1. विकल्प को सही चिन्हित करने पर आपको अंक मिलेंगे। <br><br> 2. गलत विकल्प चिन्हित करने पर खेल खत्म हो जाएगा।<br><br>3. प्रश्नों के लिए कोई समय सीमा नहीं है"
    document.getElementById("start").innerHTML = "शुरू करें"
})

document.querySelectorAll(".levels")[0].addEventListener("click", () => {
    console.log("click")
    difficulty = document.querySelectorAll(".levels")[0].innerHTML;
    console.log(difficulty)
    rules.style.display = "block"
    intro.pause()
})

document.querySelectorAll(".levels")[1].addEventListener("click", () => {
    console.log("click")
    difficulty = document.querySelectorAll(".levels")[1].innerHTML;
    console.log(difficulty)
    rules.style.display = "block"
    intro.pause()
})



document.querySelectorAll(".levels")[0].addEventListener("mouseenter", () => {
    playaudio("./Requires/tangg.mp3")
})

document.querySelectorAll(".levels")[1].addEventListener("mouseenter", () => {
    playaudio("./Requires/tangg.mp3")
})


document.getElementById("start").addEventListener("click", () => {
    document.getElementById("open-page").style.top = "1000px"
    document.getElementById("game-page").style.top = "0px"
    document.getElementById("rules").style.display = "none"

    swagat.play();
})

document.getElementById("start").addEventListener("mouseenter", () => {
    playaudio("./Requires/tangg.mp3")

})


document.querySelector(".question").style.display = "none"
document.querySelector(".option-box").style.display = "none"






const gabru_question = [{
    question: 'Who among the given name is famous as Math Minor in Gabru Gang.',
    options: [{ A: "A: Punyam Singh" }, { B: "B: Ribhav Jain" }, { C: "C: Aviral Chawla" }, { D: "D: Tarun Singh" }, { Correct: "A: Punyam Singh" }],
    audio: "./Requires/pahla prashan.mp3",
    audio2: './Requires/bilkul sahi jawab.mp3'
},


{
    question: 'Which of the flollowing relatives you will not like them to meet Utkarsh Tiwari',
    options: [{ A: "A: Chachi" }, { B: "B: Mami" }, { C: "C: Bua" }, { D: "D: Bhatiji" }, { Correct: "C: Bua" }],
    audio: './Requires/dusra prashan.mp3',
    audio2: './Requires/well done.mp3'
},


{
    question: 'Who is assosiated with "dekho mera pamp aa gaya"',
    options: [{ A: "A: Arnav Jain" }, { B: "B: Aman Sagar" }, { C: "C: Aviral Chawla" }, { D: "D: Utkarsh Tiwari" }, { Correct: "B: Aman Sagar" }],
    audio: './Requires/teesra prashan.mp3',
    audio2: './Requires/bilkul sahi jawab.mp3',
    audio2: './Requires/well done 2.mp3'
},


{
    question: 'Which member of Gabru Gang, loves to go Chandigarh',
    options: [{ A: "A: Punyam Singh" }, { B: "B: Ribhav Jain" }, { C: "C: Ayush Arora" }, { D: "D: Tarun Singh" }, { Correct: "C: Ayush Arora" }],
    audio: './Requires/chotha prashan.mp3',
    audio2: './Requires/well done.mp3'
},


{
    question: 'Who will get highest Placement package in CSE 25 Batch',

    options: [{ A: "A: Rohit Tripathi" }, { B: "B: Arjun Shrivastav" }, { C: "C: Tarun Singh" }, { D: "D: Rahul Jayaram" }, { Correct: "D: Rahul Jayaram" }],
    audio: './Requires/paachva prashan.mp3',
    audio2: './Requires/bilkul sahi jawab.mp3'
},


{
    question: 'RKC stands for?',
    options: [{ A: "A: Raat Ke Chokidar" }, { B: "B: Raat Ke Crocodile" }, { C: "C: Raat Ke Chutiye" }, { D: "D: Raat Ke Chode" }, { Correct: "D: Raat Ke Chode" }],
    audio: './Requires/chatha prashan.mp3',
    audio2: './Requires/ye sahi jawab hai.mp3'
},


{
    question: 'Who suffers from the problem of seelan in the 3ed semester',
    options: [{ A: "A: Rahul-Ayush" }, { B: "B: Utkarsh-Tarun" }, { C: "C: Aviral-Aman" }, { D: "D: Mayank-Arnav" }, { Correct: "A: Rahul-Ayush" }],
    audio: './Requires/saatwa prashan.mp3',
    audio2: './Requires/bilkul sahi jawab.mp3'
},


{
    question: 'Who is the most famous among Girls in SNU',
    options: [{ A: "A: Punyam Singh" }, { B: "B: Arnav Jain" }, { C: "C: Aviral Chawla" }, { D: "D: Tarun Singh" }, { Correct: "B: Arnav Jain" }],
    audio: './Requires/aadhva prashan.mp3',
    audio2: './Requires/well done 2.mp3'
},


{
    question: 'Who Sleeps on the first seat in the class of Kannad',
    options: [{ A: "A: Rahul Jayaram" }, { B: "B: Utkarsh Tiwari" }, { C: "C: Punyam Singh" }, { D: "D: Tarun Singh" }, { Correct: "C: Punyam Singh" }],
    audio2: './Requires/ye sahi jawab hai.mp3',
    audio: './Requires/nova prashan.mp3',

},


{
    question: 'Complete the phrase "Rohit Tripathi ________ mei laathi"',
    options: [{ A: "A: Chhati" }, { B: "B: Gaand" }, { C: "C: Land" }, { D: "D: Utkarsh" }, { Correct: "B: Gaand" }],
    audio: './Requires/dasva prashan.mp3',
    audio2: './Requires/5crore.mp3'
}
]

const play_question = [{
    question: 'In famous TV show TMKOC, What is name of shop of Jaithalal',
    options: [{ A: "A: Jaithalal Electronics" }, { B: "B: Gadha Electronic" }, { C: "C: Gada Electronics" }, { D: "D: Tapu-Daya" }, { Correct: "C: Gada Electronics" }],
    audio: "./Requires/pahla prashan.mp3",
    audio2: './Requires/bilkul sahi jawab.mp3'
},


{
    question: 'In which sports player use theri hands to knock a ball over net',
    options: [{ A: "A: Football" }, { B: "B: Cricket" }, { C: "C: Basketball" }, { D: "D: Kabaddi" }, { Correct: "C: Basketball" }],
    audio: './Requires/dusra prashan.mp3',
    audio2: './Requires/well done.mp3'
},


{
    question: 'Which of these dance forms is associated with north India',
    options: [{ A: "A: Bharatnatyam" }, { B: "B: Bhangda" }, { C: "C: Odissi" }, { D: "D: Hip-Hop" }, { Correct: "B: Bhangda" }],
    audio: './Requires/teesra prashan.mp3',
    audio2: './Requires/bilkul sahi jawab.mp3',
    audio2: './Requires/well done 2.mp3'
},


{
    question: 'Which religion central holy scripture is Guru Granth Sahib',
    options: [{ A: "A: Christian" }, { B: "B: Arab" }, { C: "C: Sikh" }, { D: "D: Hindu" }, { Correct: "C: Sikh" }],
    audio: './Requires/chotha prashan.mp3',
    audio2: './Requires/well done.mp3'
},


{
    question: 'Which billionaire become CEO of twitter after parag Agarwal',

    options: [{ A: "A: Jeff Bezoz" }, { B: "B: Jack Dorsey" }, { C: "C: Satya Nadela" }, { D: "D: Elon Musk" }, { Correct: "D: Elon Musk" }],
    audio: './Requires/paachva prashan.mp3',
    audio2: './Requires/bilkul sahi jawab.mp3'
},


{
    question: 'Who is the first cricketer to score a centuary in WTC final',
    options: [{ A: "A: Steve Smith" }, { B: "B: Virat Kohli" }, { C: "C: Rohit sharma" }, { D: "D: Travis Head" }, { Correct: "D: Travis Head" }],
    audio: './Requires/chatha prashan.mp3',
    audio2: './Requires/ye sahi jawab hai.mp3'
},


{
    question: 'Which of the following term is used for measuring population per unit area',
    options: [{ A: "A: Population density" }, { B: "B: Total Fertility rate" }, { C: "C: Infant Morality Rate" }, { D: "D: Size Rate" }, { Correct: "A: Population density" }],
    audio: './Requires/saatwa prashan.mp3',
    audio2: './Requires/bilkul sahi jawab.mp3'
},


{
    question: 'Which of these movies is not about sports person',
    options: [{ A: "A: Bhag milkh Bhag" }, { B: "B: Piku" }, { C: "C: Saina" }, { D: "D: Sabash Mitthu" }, { Correct: "B: Piku" }],
    audio: './Requires/aadhva prashan.mp3',
    audio2: './Requires/well done 2.mp3'
},


{
    question: 'Which of these industrialist serve as member of parliament',
    options: [{ A: "A: Dhirubhai Ambani" }, { B: "B: Anand Mahindra" }, { C: "C: Rahul Bajaj" }, { D: "D: Azim Premji" }, { Correct: "C: Rahul Bajaj" }],
    audio2: './Requires/ye sahi jawab hai.mp3',
    audio: './Requires/nova prashan.mp3',

},


{
    question: 'Who commanded the "Hector" the first British trading ship land to Surat',
    options: [{ A: "A: Paul Canning" }, { B: "B: William Hawkins" }, { C: "C: Thomas Roe" }, { D: "D: James Lanchester" }, { Correct: "B: William Hawkins" }],
    audio: './Requires/dasva prashan.mp3',
    audio2: './Requires/5crore.mp3'
}
]




function show() {
    document.querySelector(".option-box").style.display = "flex"
    document.querySelector(".question").style.display = "flex"

    playaudio("/Requires/next question.mp3")
    clock.currentTime = 0;
    clock.play()
}


function load_question(i) {


    if (difficulty == document.getElementById("addition").innerHTML) {
        playaudio(gabru_question[i].audio)


        document.querySelector('.question').innerHTML = gabru_question[i].question;

        document.getElementById("A").innerHTML = gabru_question[i].options[0].A;
        document.getElementById("B").innerHTML = gabru_question[i].options[1].B;
        document.getElementById("C").innerHTML = gabru_question[i].options[2].C;
        document.getElementById("D").innerHTML = gabru_question[i].options[3].D;



        setTimeout(show, 3000)
    }

    if (difficulty == document.getElementById("Play").innerHTML) {

        playaudio(play_question[i].audio)


        document.querySelector('.question').innerHTML = play_question[i].question;

        document.getElementById("A").innerHTML = play_question[i].options[0].A;
        document.getElementById("B").innerHTML = play_question[i].options[1].B;
        document.getElementById("C").innerHTML = play_question[i].options[2].C;
        document.getElementById("D").innerHTML = play_question[i].options[3].D;



        setTimeout(show, 3000)

    }











}



function option_reset() {
    document.getElementById("D").style.background = "radial-gradient(#242ea1,#02005b)"
    document.getElementById("B").style.background = "radial-gradient(#242ea1,#02005b)"
    document.getElementById("C").style.background = "radial-gradient(#242ea1,#02005b)"
    document.getElementById("A").style.background = "radial-gradient(#242ea1,#02005b)"

    document.getElementById("D").style.color = "white"
    document.getElementById("B").style.color = "white"
    document.getElementById("C").style.bcolor = "white"
    document.getElementById("A").style.color = "white"
}


document.getElementById("next").addEventListener("click", () => {

    if (question_number != 10 && zebra == 0) {
        option_reset();




        document.getElementById("bacchanimg").style.display = "none"
        document.getElementById("next").style.display = "none"
        swagat.pause()

        document.getElementById("points").style.display = "none"

        load_question(question_number);
    }


    if (question_number == 10 || zebra == 1) {

        console.log("end")
        document.getElementById("game-page").style.top = "1000px"
        document.getElementById("user-interact").style.top = "0px";

        zebra = 0;


    }



})

var select;

document.getElementById("A").addEventListener("click", () => {
    document.getElementById("A").style.background = "radial-gradient(#ffd145,#ffbf00)"
    document.getElementById("A").style.color = "black"
    select = document.getElementById("A").innerHTML;


    document.getElementById("B").style.background = "radial-gradient(#242ea1,#02005b)"
    document.getElementById("C").style.background = "radial-gradient(#242ea1,#02005b)"
    document.getElementById("D").style.background = "radial-gradient(#242ea1,#02005b)"
    document.getElementById("B").style.color = "white"
    document.getElementById("C").style.color = "white"
    document.getElementById("D").style.color = "white"

    playaudio("./Requires/Lock.mp3")
    clock.pause()


    document.getElementById("check").style.display = "block"


})


document.getElementById("B").addEventListener("click", () => {
    document.getElementById("B").style.background = "radial-gradient(#ffd145,#ffbf00)"
    document.getElementById("B").style.color = "black"
    select = document.getElementById("B").innerHTML;

    document.getElementById("A").style.background = "radial-gradient(#242ea1,#02005b)"
    document.getElementById("C").style.background = "radial-gradient(#242ea1,#02005b)"
    document.getElementById("D").style.background = "radial-gradient(#242ea1,#02005b)"
    document.getElementById("A").style.color = "white"
    document.getElementById("C").style.color = "white"
    document.getElementById("D").style.color = "white"

    playaudio("./Requires/Lock.mp3")
    clock.pause()

    document.getElementById("check").style.display = "block"

})

document.getElementById("C").addEventListener("click", () => {
    document.getElementById("C").style.background = "radial-gradient(#ffd145,#ffbf00)"
    document.getElementById("C").style.color = "black"
    select = document.getElementById("C").innerHTML;

    document.getElementById("B").style.background = "radial-gradient(#242ea1,#02005b)"
    document.getElementById("A").style.background = "radial-gradient(#242ea1,#02005b)"
    document.getElementById("D").style.background = "radial-gradient(#242ea1,#02005b)"
    document.getElementById("B").style.color = "white"
    document.getElementById("A").style.color = "white"
    document.getElementById("D").style.color = "white"

    playaudio("./Requires/Lock.mp3")
    clock.pause()

    document.getElementById("check").style.display = "block"
    console.log(select)

})

document.getElementById("D").addEventListener("click", () => {
    document.getElementById("D").style.background = "radial-gradient(#ffd145,#ffbf00)"
    document.getElementById("D").style.color = "black"
    select = document.getElementById("D").innerHTML;


    document.getElementById("B").style.background = "radial-gradient(#242ea1,#02005b)"
    document.getElementById("C").style.background = "radial-gradient(#242ea1,#02005b)"
    document.getElementById("A").style.background = "radial-gradient(#242ea1,#02005b)"
    document.getElementById("B").style.color = "white"
    document.getElementById("C").style.color = "white"
    document.getElementById("A").style.color = "white"

    playaudio("./Requires/Lock.mp3")
    clock.pause()

    document.getElementById("check").style.display = "block"

})


function hide() {
    document.querySelector(".question").style.display = "none"
    document.querySelector(".option-box").style.display = "none"
}

function chek() {
    document.getElementById("points").style.display = "block"
    document.getElementById("check").style.display = "none"
    document.getElementById("next").style.display = "block"

    question_number = question_number + 1;
}


document.getElementById("check").addEventListener("click", () => {

    if (difficulty == document.getElementById("addition").innerHTML) {

        setTimeout(hide, 1500);




        if (select == gabru_question[question_number].options[4].Correct) {


            playaudio(gabru_question[question_number].audio2)

            if (select == gabru_question[question_number].options[0].A) {
                document.getElementById("A").style.background = "radial-gradient(#3c811c,#3e7920)"
                document.getElementById("A").style.color = "white"

            }

            if (select == gabru_question[question_number].options[1].B) {
                document.getElementById("B").style.background = "radial-gradient(#3c811c,#3e7920)"
                document.getElementById("B").style.color = "white"

            }

            if (select == gabru_question[question_number].options[2].C) {
                document.getElementById("C").style.background = "radial-gradient(#3c811c,#3e7920)"
                document.getElementById("C").style.color = "white"

            }

            if (select == gabru_question[question_number].options[3].D) {
                document.getElementById("D").style.background = "radial-gradient(#3c811c,#3e7920)"
                document.getElementById("D").style.color = "white"

            }


            if (question_number == 0) {
                document.getElementById("points").innerHTML = "Points: 1000"
            }

            if (question_number == 1) {
                document.getElementById("points").innerHTML = "Points: 2000"
            }

            if (question_number == 2) {
                document.getElementById("points").innerHTML = "Points: 5000"
            }

            if (question_number == 3) {
                document.getElementById("points").innerHTML = "Points: 10000"
            }

            if (question_number == 4) {
                document.getElementById("points").innerHTML = "Points: 50000"
            }

            if (question_number == 5) {
                document.getElementById("points").innerHTML = "Points: 1 Lakh"
            }

            if (question_number == 6) {
                document.getElementById("points").innerHTML = "Points:10 Lakh"
            }

            if (question_number == 7) {
                document.getElementById("points").innerHTML = "Points:25 Lakh"
            }

            if (question_number == 8) {
                document.getElementById("points").innerHTML = "Points: 50 Lakh"
            }

            if (question_number == 9) {
                document.getElementById("points").innerHTML = "Points: 1 Crore"
            }



        } else if (select != gabru_question[question_number].options[4].Correct) {

            zebra = 1;

            playaudio("./Requires/wrong answer.mp3")

            if (select == gabru_question[question_number].options[0].A) {
                document.getElementById("A").style.background = "radial-gradient(#ffa0a0, #da0000)"
                document.getElementById("A").style.color = "white"


                if (gabru_question[question_number].options[4].Correct == gabru_question[question_number].options[1].B) {
                    document.getElementById("B").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("B").style.color = "white"
                }

                if (gabru_question[question_number].options[4].Correct == gabru_question[question_number].options[2].C) {
                    document.getElementById("C").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("C").style.color = "white"
                }

                if (gabru_question[question_number].options[4].Correct == gabru_question[question_number].options[3].D) {
                    document.getElementById("D").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("D").style.color = "white"
                }

            }

            if (select == gabru_question[question_number].options[1].B) {
                document.getElementById("B").style.background = "radial-gradient(#f55959, #b80101)"
                document.getElementById("B").style.color = "white"


                if (gabru_question[question_number].options[4].Correct == gabru_question[question_number].options[0].A) {
                    document.getElementById("A").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("A").style.color = "white"
                }

                if (gabru_question[question_number].options[4].Correct == gabru_question[question_number].options[2].C) {
                    document.getElementById("C").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("C").style.color = "white"
                }

                if (gabru_question[question_number].options[4].Correct == gabru_question[question_number].options[3].D) {
                    document.getElementById("D").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("D").style.color = "white"
                }

            }

            if (select == gabru_question[question_number].options[2].C) {
                document.getElementById("C").style.background = "radial-gradient(#f55959, #b80101)"
                document.getElementById("C").style.color = "white"

                if (gabru_question[question_number].options[4].Correct == gabru_question[question_number].options[1].B) {
                    document.getElementById("B").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("B").style.color = "white"
                }

                if (gabru_question[question_number].options[4].Correct == gabru_question[question_number].options[0].A) {
                    document.getElementById("A").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("A").style.color = "white"
                }

                if (gabru_question[question_number].options[4].Correct == gabru_question[question_number].options[3].D) {
                    document.getElementById("D").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("D").style.color = "white"
                }

            }

            if (select == gabru_question[question_number].options[3].D) {
                document.getElementById("D").style.background = "radial-gradient(#f55959, #b80101)"
                document.getElementById("D").style.color = "white"

                if (gabru_question[question_number].options[4].Correct == gabru_question[question_number].options[1].B) {
                    document.getElementById("B").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("B").style.color = "white"
                }

                if (gabru_question[question_number].options[4].Correct == gabru_question[question_number].options[2].C) {
                    document.getElementById("C").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("C").style.color = "white"
                }

                if (gabru_question[question_number].options[4].Correct == gabru_question[question_number].options[0].A) {
                    document.getElementById("A").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("A").style.color = "white"
                }

            }


        }



        setTimeout(chek, 1500);


    }

    if (difficulty == document.getElementById("Play").innerHTML){

       
        setTimeout(hide, 1500);


        if (select == play_question[question_number].options[4].Correct) {


            playaudio(play_question[question_number].audio2)

            if (select == play_question[question_number].options[0].A) {
                document.getElementById("A").style.background = "radial-gradient(#3c811c,#3e7920)"
                document.getElementById("A").style.color = "white"

            }

            if (select == play_question[question_number].options[1].B) {
                document.getElementById("B").style.background = "radial-gradient(#3c811c,#3e7920)"
                document.getElementById("B").style.color = "white"

            }

            if (select == play_question[question_number].options[2].C) {
                document.getElementById("C").style.background = "radial-gradient(#3c811c,#3e7920)"
                document.getElementById("C").style.color = "white"

            }

            if (select == play_question[question_number].options[3].D) {
                document.getElementById("D").style.background = "radial-gradient(#3c811c,#3e7920)"
                document.getElementById("D").style.color = "white"

            }


            if (question_number == 0) {
                document.getElementById("points").innerHTML = "Points: 1000"
            }

            if (question_number == 1) {
                document.getElementById("points").innerHTML = "Points: 2000"
            }

            if (question_number == 2) {
                document.getElementById("points").innerHTML = "Points: 5000"
            }

            if (question_number == 3) {
                document.getElementById("points").innerHTML = "Points: 10000"
            }

            if (question_number == 4) {
                document.getElementById("points").innerHTML = "Points: 50000"
            }

            if (question_number == 5) {
                document.getElementById("points").innerHTML = "Points: 1 Lakh"
            }

            if (question_number == 6) {
                document.getElementById("points").innerHTML = "Points:10 Lakh"
            }

            if (question_number == 7) {
                document.getElementById("points").innerHTML = "Points:25 Lakh"
            }

            if (question_number == 8) {
                document.getElementById("points").innerHTML = "Points: 50 Lakh"
            }

            if (question_number == 9) {
                document.getElementById("points").innerHTML = "Points: 1 Crore"
            }



        } else if (select != play_question[question_number].options[4].Correct) {

            zebra = 1;

            playaudio("./Requires/wrong answer.mp3")

            if (select == play_question[question_number].options[0].A) {
                document.getElementById("A").style.background = "radial-gradient(#ffa0a0, #da0000)"
                document.getElementById("A").style.color = "white"


                if (play_question[question_number].options[4].Correct == play_question[question_number].options[1].B) {
                    document.getElementById("B").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("B").style.color = "white"
                }

                if (play_question[question_number].options[4].Correct == play_question[question_number].options[2].C) {
                    document.getElementById("C").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("C").style.color = "white"
                }

                if (play_question[question_number].options[4].Correct == play_question[question_number].options[3].D) {
                    document.getElementById("D").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("D").style.color = "white"
                }

            }

            if (select == play_question[question_number].options[1].B) {
                document.getElementById("B").style.background = "radial-gradient(#f55959, #b80101)"
                document.getElementById("B").style.color = "white"


                if (play_question[question_number].options[4].Correct == play_question[question_number].options[0].A) {
                    document.getElementById("A").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("A").style.color = "white"
                }

                if (play_question[question_number].options[4].Correct == play_question[question_number].options[2].C) {
                    document.getElementById("C").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("C").style.color = "white"
                }

                if (play_question[question_number].options[4].Correct == play_question[question_number].options[3].D) {
                    document.getElementById("D").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("D").style.color = "white"
                }

            }

            if (select == play_question[question_number].options[2].C) {
                document.getElementById("C").style.background = "radial-gradient(#f55959, #b80101)"
                document.getElementById("C").style.color = "white"

                if (play_question[question_number].options[4].Correct == play_question[question_number].options[1].B) {
                    document.getElementById("B").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("B").style.color = "white"
                }

                if (play_question[question_number].options[4].Correct == play_question[question_number].options[0].A) {
                    document.getElementById("A").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("A").style.color = "white"
                }

                if (play_question[question_number].options[4].Correct == play_question[question_number].options[3].D) {
                    document.getElementById("D").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("D").style.color = "white"
                }

            }

            if (select == play_question[question_number].options[3].D) {
                document.getElementById("D").style.background = "radial-gradient(#f55959, #b80101)"
                document.getElementById("D").style.color = "white"

                if (play_question[question_number].options[4].Correct == play_question[question_number].options[1].B) {
                    document.getElementById("B").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("B").style.color = "white"
                }

                if (play_question[question_number].options[4].Correct == play_question[question_number].options[2].C) {
                    document.getElementById("C").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("C").style.color = "white"
                }

                if (play_question[question_number].options[4].Correct == play_question[question_number].options[0].A) {
                    document.getElementById("A").style.background = "radial-gradient(#3c811c,#3e7920)"
                    document.getElementById("A").style.color = "white"
                }

            }


        }



        setTimeout(chek, 1500);
        
    }








})










