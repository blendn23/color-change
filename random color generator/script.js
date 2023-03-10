const color = () =>{
    const randomNumber =Math.floor( Math.random() *16777215);
    const mcode = "#"+ randomNumber.toString(16);
    document.getElementById('heading').innerText= mcode;
    document.body.style.backgroundColor = mcode;
}

document.getElementById("btn").addEventListener(
    'click',
    color
)

color();