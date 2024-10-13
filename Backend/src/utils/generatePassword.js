const passwordGenerator = (length) => {
    let characters = "1234567890zxcvbnmasdfghjklqwertyuiopQWERTYUIOPLKJHGFDSAZXCVBNM!@#$%^&*()?><+{}";
    let password = "";
    for (let index = 0; index < length; index++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length)); 
    }

    return password;
};


module.exports = passwordGenerator;