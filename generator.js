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

const ramdonPhrase = Math.floor(Math.random()* phraseLove.length) 

const ramdonPhraseLove = phraseLove[ramdonPhrase] 

console.log(ramdonPhraseLove) 
