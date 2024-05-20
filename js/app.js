let colors = [];
const getRColor = ()=>{
    const rNumber = Math.floor(Math.random() * 16777215);


    const rColorCode = "#" + rNumber.toString(16)
    document.body.style.backgroundColor = rColorCode;
    document.getElementById("color-code").innerText = rColorCode;
    navigator.clipboard.writeText(rColorCode)

    colors.push(rColorCode);

    console.log(rNumber, rColorCode);
    console.log(colors);
    
}


document.getElementById('btn').addEventListener(
    "click",
    getRColor
);

getRColor();