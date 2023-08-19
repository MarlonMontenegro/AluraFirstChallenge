const textArea = document.querySelector(".textArea");
const resultMessage = document.querySelector(".area-message");

const encryptionKeyMatrix = [
    ["e", "enter"], ["i", "imes"],
    ["a", "ai"], ["o", "ober"], ["u", "ufat"]
];

function btnEncryption() {
    event.preventDefault();
    if (checkUpperCaseString(textArea.value) && hasAccents(textArea.value)) {
        const textEncryption = encryption(textArea.value);
        resultMessage.value = textEncryption;
        textArea.value = "";
        hideTextInformation();
        hideErrorMessage();
        displayTextAreaResult();
    } else {
        displayErrorMessage();
    }
}

function encryption(messageToEncrypt) {

    messageToEncrypt = messageToEncrypt.toLowerCase();

    for (let i = 0; i < encryptionKeyMatrix.length; i++) {
        if (messageToEncrypt.includes(encryptionKeyMatrix[i][0])) {
            messageToEncrypt = messageToEncrypt.replaceAll(encryptionKeyMatrix[i][0], encryptionKeyMatrix[i][1]);
        }
    }
    return messageToEncrypt;
}

function btnDecryption() {
    event.preventDefault();
    if (checkUpperCaseString(textArea.value) && hasAccents(textArea.value)) {
        const textDecryption = decryption(textArea.value);
        resultMessage.value = textDecryption;
        textArea.value = "";
        hideTextInformation();
        hideErrorMessage();
        displayTextAreaResult();
    } else {
        displayErrorMessage();
    }

}

function decryption(messageToDecrypt) {

    messageToDecrypt = messageToDecrypt.toLowerCase();

    for (let i = 0; i < encryptionKeyMatrix.length; i++) {
        if (messageToDecrypt.includes(encryptionKeyMatrix[i][1])) {
            messageToDecrypt = messageToDecrypt.replaceAll(encryptionKeyMatrix[i][1], encryptionKeyMatrix[i][0]);
        }
    }
    return messageToDecrypt;
}

function btnCopy() {
    const textArea = document.querySelector("#area-message");
    textArea.select();
    document.execCommand("copy");
}


function checkUpperCaseString(message) {
    return message == message.toLowerCase();
}

function hasAccents(str) {
    const accentRegex = /[áéíóúÁÉÍÓÚ]/;
    return !accentRegex.test(str);
}

function hideTextInformation() {
    const areaResult = document.getElementById("result-area");
    areaResult.style.display = "none";
}

function displayTextAreaResult() {
    const areaResult = document.getElementById("area-message");
    areaResult.style.display = "block";
}

function displayErrorMessage() {
    const areaResult = document.getElementById("alert-text");
    areaResult.style.color = "#ff3333";
}

function hideErrorMessage() {
    const areaResult = document.getElementById("alert-text");
    areaResult.style.color = "#000000";
}