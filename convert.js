let translationKey = {
    A: 'owo',
    B: 'OwO',
    C: 'oWo',
    D: 'OWO',
    E: 'uwu',
    F: 'UwU',
    G: 'uWu',
    H: 'UWU',
    I: 'xwx',
    J: 'XwX',
    K: 'xWx',
    L: 'XWX',
    M: ';w;',
    N: ';W;',
    O: 'nwn',
    P: 'nWn',
    Q: 'qwq',
    R: 'QwQ',
    S: 'qWq',
    T: 'QWQ',
    U: '@w@',
    V: '@W@',
    W: '~w~',
    X: '~W~',
    Y: '^w^',
    Z: '^W^',
};

let letterToOwO = letter => {
    let translation = translationKey[letter.toUpperCase()]
    if(translation !== undefined) {
        return translation + " ";
    } else if(letter === " ") {
        return letter;
    } else {
        return letter + " ";
    }
}

let owoToLetter = owo => {
    for(let i in translationKey) {
        if(translationKey[i] === owo) {
            return i;
        }
    }
    return owo;
}

let removeExtraWhitespace = text => {
    while(text.endsWith(" ")) {
        text = text.slice(0, -1);
    }
    return text;
}

document.getElementById("english-form").addEventListener("submit", event => {
    event.preventDefault();

    let newText = "";
    let englishText = document.getElementById("english-textbox").value.toUpperCase();

    for(let i of englishText) {
        newText += letterToOwO(i);
    }

    newText = removeExtraWhitespace(newText);

    document.getElementById("owo-textbox").value = newText;
})

document.getElementById("owo-form").addEventListener("submit", event => {
    event.preventDefault();

    let newText = "";
    let owoText = document.getElementById("owo-textbox").value.split(" ");
    
    let index = owoText.indexOf("")
    while(index !== -1) {
        owoText[index] = " ";
        index = owoText.indexOf("");
    }

    for(let i of owoText) {
        newText += owoToLetter(i)
    }

    newText = removeExtraWhitespace(newText);

    document.getElementById("english-textbox").value = newText;
})