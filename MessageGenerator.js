let RandomGenerator = (num) => {
    return Math.floor(Math.random() * num);
}

let data = {
    firstWord: ['watching you','feeling you','having strange thoughts','experiencing your presence'],
    secondWord: ['you smiling','you staring at camera','you getting uncomfortable','you feeling amazed', 'you surprised'],
    thirdWord: ['to go now','to scare you now','to enter your mind now','to eat now']
};


const selectWords = (data) => {
    let finalSentence = [];
    for(let prop in data){
        let index = RandomGenerator(data[prop].length);
        switch(prop){
            case 'firstWord':
                finalSentence.push('I am ' + data.firstWord[index]);
                break;
            case 'secondWord':
                finalSentence.push('I can see ' + data.secondWord[index]);
                break;
            case 'thirdWord':
                finalSentence.push('I have ' + data.thirdWord[index]);
                break; 
        } 
    
    }
    for(let item in finalSentence){
        console.log(finalSentence[item]);
    }
    // return finalSentence;
}
selectWords(data);