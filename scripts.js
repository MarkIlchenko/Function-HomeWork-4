function removeChars() {
    const inputString = document.getElementById("inputString").value;
    const inputChars = document.getElementById("inputChars").value.split("");
    let outputString = "";
    
    for (let i = 0; i < inputString.length; i++) {
        if (!inputChars.includes(inputString[i])) {
            outputString += inputString[i];
        }
    }
    
    document.getElementById("output").innerHTML = outputString;
}
