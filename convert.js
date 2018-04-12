let translationKey = {
    a: 'owo',
    b: 'OwO',
    c: 'oWo',
    d: 'OWO',
    e: 'uwu',
    f: 'UwU',
    g: 'uWu',
    h: 'UWU',
    i: 'xwx',
    j: 'XwX',
    k: 'xWx',
    l: 'XWX',
    m: ';w;',
    n: ';W;',
    o: 'nwn',
    p: 'nWn',
    q: 'qwq',
    r: 'QwQ',
    s: 'qWq',
    t: 'QWQ',
    u: '@w@',
    v: '@W@',
    w: '~w~',
    x: '~W~',
    y: '^w^',
    z: '^W^',
    A: 'ovo',
    B: 'OvO',
    C: 'oVo',
    D: 'OVO',
    E: 'uvu',
    F: 'UvU',
    G: 'uVu',
    H: 'UVU',
    I: 'xvx',
    J: 'XvX',
    K: 'xVx',
    L: 'XVX',
    M: ';v;',
    N: ';V;',
    O: 'nvn',
    P: 'nVn',
    Q: 'qvq',
    R: 'QvQ',
    S: 'qVq',
    T: 'QVQ',
    U: '@v@',
    V: '@V@',
    W: '~v~',
    X: '~V~',
    Y: '^v^',
    Z: '^V^',
    ".": 'ono',
    ",": 'OnO',
    "?": 'oNo',
    "!": 'ONO',
};

let letterToOwO = letter => {
    let translation = translationKey[letter];
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
    let englishText = document.getElementById("english-textbox").value;

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