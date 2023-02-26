
const phraseLove = [
   'I love you',
   'You mean everything to me',
   "I can't imagine my life without you",
   "You complete me",
   "I adore you",
   "You are my soulmate",
   "I am so lucky to have you in my life", 
   'My love for you is unconditional', 
   'You are the one Ive been waiting for', 
   'I will always love you'
]

for (let i =0; i < phraseLove.length; i++ ) {

}

const randomLove = (phrase) => {
  if (phrase <= 10) {
    return console.log(Math.floor(Math.random()*9))
  }
} 