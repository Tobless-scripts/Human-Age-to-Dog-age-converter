function laterAge(){
    let userName = document.getElementById("userName").value;
    let myAge = parseInt(document.getElementById("myAge").value);
    let earlyYears = 2*10.5;
    let laterYears = (myAge - 2)*4;
    const myAgeInDogYears = earlyYears + laterYears;
    document.getElementById("dogAge").innerHTML = userName + "'s age in Dog Years: " + myAgeInDogYears + "Years Old";
}
