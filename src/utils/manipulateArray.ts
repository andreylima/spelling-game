export function concatLettersFromItem(word : any){
    var wordString: string = ""
    word.forEach((item : any, index : number) => (
      wordString += item.content
    ))

    return wordString
}

export function getWrongLetters(correctAnswer : any, word : any){
    var wrongLettersArray = Array<string>()
    for (let index = 0; index < correctAnswer.length; index++) {
        if(correctAnswer[index] != word[index]['content']){
            wrongLettersArray.push(word[index]['id'])
        } 
    }
    return wrongLettersArray
}