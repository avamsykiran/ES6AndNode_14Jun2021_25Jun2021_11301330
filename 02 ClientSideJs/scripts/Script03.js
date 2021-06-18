const sayHello = () => {
    let unm = prompt("Your name please ","Somebody")
    if(confirm(`Hai ${unm}! are you interested in joining our newsletters?`)){
        alert('Thank you for subcribing')
    }else {
        alert("Oh! its'ok")
    }
}

const openPage= () => {
    let w = open("",null,"fullscreen=yes");

    w.document.writeln("<h2>A new Page</h2>")
    w.document.writeln("<div id='container'></div>")

    let container = w.document.querySelector("#container");
    
    let btn = w.document.createElement("button")
    btn.innerText="CLOSE"
    btn.onclick=() => {w.close();}
    container.append(btn)

    let btn2 = w.document.createElement("button")
    btn2.innerText="goto google"
    btn2.onclick=() => {w.location.assign("http://www.google.com")}
    container.append(btn2)

}