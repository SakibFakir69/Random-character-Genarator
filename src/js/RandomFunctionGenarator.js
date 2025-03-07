


// here create a randome function genarator


console.log("start")
const RandomeNumberAplhabetCharacterGenrator = (range) => {

    let Num = "0123456789";
    const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialCharacters = "!@#$%^&*()_+-=[]{}|;:'\",.<>/?`~";

    /// start bulding

    let GenrateNumber="";

    for(let i=1; i<range; i++)
    {
        let number = Math.floor(Math.random()*Num.length);
        // here get index number with set range 
        // now need convetto  string 

        GenrateNumber+=Num[number];
        // here convert genrate number ans set to GenrateNumber variable

        let uppercase = Math.floor(Math.random()*upperCaseAlphabet.length);

        GenrateNumber+=upperCaseAlphabet[uppercase];
        // here set uppercase letter

        let lowercase = Math.floor(Math.random()*lowerCaseAlphabet.length);

        GenrateNumber+=lowerCaseAlphabet[lowercase];
        // set to genrate number 

        // now genrate character spical chacter

        const char = Math.floor(Math.random()*specialCharacters.length);

        GenrateNumber+=specialCharacters[char];





    }

    return GenrateNumber;











}


export default RandomeNumberAplhabetCharacterGenrator;
