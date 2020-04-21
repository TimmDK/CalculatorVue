let words: string[] = [];
let wordOutput: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("wordOutput");

let saveBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("saveBtn");
let showBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("showBtn");
let clearBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("clearBtn");

saveBtn.addEventListener("click", save);
showBtn.addEventListener("click", show);
clearBtn.addEventListener("click", clear);

function save():void{
    console.log("Test save");
    let wordInput: HTMLInputElement = <HTMLInputElement> document.getElementById("wordInput");
    let word: string = wordInput.value;
    wordOutput.innerHTML = "Du har gemt " + word;
    words.push(word);
}

function show():void{
    console.log("Test show");
    if(words && words.length)
    {    
        document.getElementById("wordOutput").innerHTML = words.toString();  
    }
    else
    {
        document.getElementById("wordOutput").innerHTML = "<i>Din liste er tom</i>"   
    }
}

function clear():void{
    words = [];
    document.getElementById("wordOutput").innerHTML = "Du har ryddet listen af dine gemte ord"
}
