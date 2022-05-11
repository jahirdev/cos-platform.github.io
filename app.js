const classroom_objects = ['board','chair','clock','computer','crayon','desk','eraser','paper','pencil','table'];
const nature = ['bird','butterfly','cloud','frog','moon','mountain','ocean','rainbow','rock','star'];
const colors = ['black','blue','brown','green','orange','pink','purple','red','white','yellow'];
const family_members = ['baby','brother','father','grandfather','grandmother','mother','sister'];
const my_house = ['bathroom','bedroom','dining room','kitchen','mirror','lamp','living room','shower','sofa','stove'];
const clothes = ['dress','gloves','hat','jacket','pants','socks','shirt','shoes','skirt','t-shirt'];
const toys = ['ball','bike','car','drum','game','kite','puppet','top','train','truck'];
const body_parts = ['arm','ear','eyes','foot','hair','hand','head','leg','mouth','nose'];
const food = ['apple','cereal','cheese','chicken','fish','meat','milk','salad','sandwich','yogurt'];
const letter_p = ['penguin','pirate','pizza','pop corn','purse'];
const letter_b = ['baby','balloon','bear','boy','box'];
const letter_d = ['dentist','diamond','dinosaur','donut','duck'];
const letter_t =  ['taxi','tomato','train','triangle','turtle'];
const letter_s =  ['ship','snake','soap','star','sun'];
const letter_z =  ['zebra','zinnia','zeppelin','zoo','zorilla'];
const letter_a =  ['alligator','ambulance','ant','astronaut','apple'];
const letter_e =  ['elephant','envelop','egg','earth','eagle'];
const letter_i =  ['igloo','island','ice cream','insect','indian'];
const letter_o =  ['octopus','ostrich','oval','onion','owl'];
const letter_cos = ['kangaroo','school','honesty','love','respect','sports','music','english','work','friend'];


let msg = new SpeechSynthesisUtterance();
let voices = window.speechSynthesis.getVoices();
//console.log('num of voices: '+voices.length);
msg.lang = "en";
msg.voice = voices[9];
let word_practice = "";

function loadWord() {
    //console.log('loading word...');
    const indexRandom = Math.floor(Math.random()*classroom_objects.length);
    console.log('Word: '+classroom_objects[indexRandom]);
}

function verifySpeech() {
    console.info("verifying speeching...");
    if ('speechSynthesis' in window) {
        // Speech Synthesis supported 🎉
        console.log('Speech Synthesis supported 🎉');
        msg.text = "Hello Sebastían, It is time to practice, Are you ready?... Lets do it!!!!";
        window.speechSynthesis.speak(msg);
       }else{
         // Speech Synthesis Not Supported 😣
         alert("Sorry, your browser doesn't support text to speech!");
       }
}

function classroomClick() {
    //msg.text = "Classrom objects";
    //window.speechSynthesis.speak(msg);
    word_practice = getWord(classroom_objects);
}

function natureClick() {
    //msg.text = "Nature";
    //window.speechSynthesis.speak(msg);
    word_practice = getWord(nature);
}

function colorsClick() {
    //msg.text = "Colors";
    //window.speechSynthesis.speak(msg);
    word_practice = getWord(colors);
}

function familyClick() {
    //msg.text = "Family members";
    //window.speechSynthesis.speak(msg);
    word_practice = getWord(family_members);
}

function myHouseClick() {
    //msg.text = "My House";
    //window.speechSynthesis.speak(msg);
    word_practice = getWord(my_house);
}


function clothesClick() {
    //msg.text = "Clothes";
    //window.speechSynthesis.speak(msg);
    word_practice = getWord(clothes);
}

function toysClick() {
    //msg.text = "Toys";
    //window.speechSynthesis.speak(msg);
    word_practice = getWord(toys);
}

function bodyClick() {
    //msg.text = "Body parts";
    //window.speechSynthesis.speak(msg);
    word_practice = getWord(body_parts);
}

function foodClick() {
    //msg.text = "Food";
    //window.speechSynthesis.speak(msg);
    word_practice = getWord(food);
}

function letterPClick() {
    //msg.text = "Food";
    //window.speechSynthesis.speak(msg);
    word_practice = getWord(letter_p);
}
function letterBClick() {
    //msg.text = "Food";
    //window.speechSynthesis.speak(msg);
    word_practice = getWord(letter_b);
}
function letterDClick() {
    //msg.text = "Food";
    //window.speechSynthesis.speak(msg);
    word_practice = getWord(letter_d);
}
function letterTClick() {
    //msg.text = "Food";
    //window.speechSynthesis.speak(msg);
    word_practice = getWord(letter_t);
}
function letterSClick() {
    //msg.text = "Food";
    //window.speechSynthesis.speak(msg);
    word_practice = getWord(letter_s);
}
function letterZClick() {
    //msg.text = "Food";
    //window.speechSynthesis.speak(msg);
    word_practice = getWord(letter_z);
}
function letterAClick() {
    //msg.text = "Food";
    //window.speechSynthesis.speak(msg);
    word_practice = getWord(letter_a);
}
function letterEClick() {
    //msg.text = "Food";
    //window.speechSynthesis.speak(msg);
    word_practice = getWord(letter_e);
}
function letterIClick() {
    //msg.text = "Food";
    //window.speechSynthesis.speak(msg);
    word_practice = getWord(letter_i);
}
function letterOClick() {
    //msg.text = "Food";
    //window.speechSynthesis.speak(msg);
    word_practice = getWord(letter_o);
}

function letterCOSClick() {
    //msg.text = "Food";
    //window.speechSynthesis.speak(msg);
    word_practice = getWord(letter_cos);
}


function getWord(arrayWords) {
    const indexRandom = Math.floor(Math.random()*arrayWords.length);
    console.log('Word: '+arrayWords[indexRandom]);   
    let newWord = arrayWords[indexRandom];
    const element = document.getElementById("idWord");
    element.innerHTML = newWord;
    return newWord;
}

function textToSpeech() {
    msg.rate = 1;
    msg.text = word_practice;
    window.speechSynthesis.speak(msg);
}

async function spellingWord() {
    window.speechSynthesis.cancel();
    let word_spelling = '';
    let word_array = Array.from(word_practice);
    msg.rate = 0.5
    
    
    for(let i=0;i<word_practice.length;i++) {
        word_spelling += word_array[i]+'  ';
        await sleep(700);   
        //console.log('letter: '+word_array[i]);    
        await spellingSpeech(word_array[i])
    }
    console.log('Word spelling: '+word_spelling);
    
    
}

 async function spellingSpeech(wordPiece) {
    window.speechSynthesis.cancel();
    await sleep(800);   
    msg.text = wordPiece;
    window.speechSynthesis.speak(msg);
    console.log('diciendo: '+wordPiece);
}

function spellingWordBKP() {
    let word_spelling = '';
    let word_array = Array.from(word_practice);
    msg.rate = 0.5
    
    for(let i=0;i<word_practice.length;i++) {
        word_spelling += word_array[i]+'  ';
    }
    console.log('Word spelling: '+word_spelling);
    msg.text = word_spelling;
    window.speechSynthesis.speak(msg);
}


sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));