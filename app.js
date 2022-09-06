var myDom = document.getElementById("body")
console.log(myDom, "myDom")

var hr1 =document.createElement("hr")
var hr2 =document.createElement("hr")
var h1 =document.createElement("h1")
var div1 = document.createElement("div")
div1.setAttribute("id","mainTopDetail")

var p1= document.createElement("p")
p1.setAttribute("id","score")

var p2= document.createElement("p")
p2.setAttribute("id","lifelIne")

var div1Child = document.createElement("div")
console.log(div1Child)
div1Child.setAttribute("id","randomColor")

var p3 = document.createElement("p")
p3.setAttribute("id","Timer")

var div2 = document.createElement("div")
div2.setAttribute("id","wrapper")
div2.setAttribute("class","container-fluid")
//---------------------------------------
var div2Child = document.createElement("div")
div2Child.setAttribute("id","main1")
div2Child.setAttribute("class","container")

var div2Child_div1 = document.createElement("div")
div2Child_div1.setAttribute("class","box")
div2Child_div1.setAttribute("id","ballon-1")
div2Child_div1.setAttribute("onClick","Ballons('ballon-1')")

var div2Child_div2 = document.createElement("div")
div2Child_div2.setAttribute("class","box")
div2Child_div2.setAttribute("id","ballon-2")
div2Child_div2.setAttribute("onClick","Ballons('ballon-2')")

var div2Child_div3 = document.createElement("div")
div2Child_div3.setAttribute("class","box")
div2Child_div3.setAttribute("id","ballon-3")
div2Child_div3.setAttribute("onClick","Ballons('ballon-3')")

var div2Child_div4 = document.createElement("div")
div2Child_div4.setAttribute("class","box")
div2Child_div4.setAttribute("id","ballon-4")
div2Child_div4.setAttribute("onClick","Ballons('ballon-4')")

var div2Child_div5 = document.createElement("div")
div2Child_div5.setAttribute("class","box")
div2Child_div5.setAttribute("id","ballon-5")
div2Child_div5.setAttribute("onClick","Ballons('ballon-5')")

var div2Child_div6 = document.createElement("div")
div2Child_div6.setAttribute("class","box")
div2Child_div6.setAttribute("id","ballon-6")
div2Child_div6.setAttribute("onClick","Ballons('ballon-6')")

var div2Child_div7 = document.createElement("div")
div2Child_div7.setAttribute("class","box")
div2Child_div7.setAttribute("id","ballon-7")
div2Child_div7.setAttribute("onClick","Ballons('ballon-7')")

var div2Child_div8 = document.createElement("div")
div2Child_div8.setAttribute("class","box")
div2Child_div8.setAttribute("id","ballon-8")
div2Child_div8.setAttribute("onClick","Ballons('ballon-8')")
//---------------------------------------
var div2Child_div2_mian2 = document.createElement("div")
div2Child_div2_mian2.setAttribute("id","main2")

var div2Child_div2_main2_div1 = document.createElement("div")
div2Child_div2_main2_div1.setAttribute("class","box")
div2Child_div2_main2_div1.setAttribute("id","ballon-9")
div2Child_div2_main2_div1.setAttribute("onClick","Ballons('ballon-9')")

var div2Child_div2_main2_div2 = document.createElement("div")
div2Child_div2_main2_div2.setAttribute("class","box")
div2Child_div2_main2_div2.setAttribute("id","ballon-10")
div2Child_div2_main2_div2.setAttribute("onClick","Ballons('ballon-10')")

var div2Child_div2_main2_div3 = document.createElement("div")
div2Child_div2_main2_div3.setAttribute("class","box")
div2Child_div2_main2_div3.setAttribute("id","ballon-11")
div2Child_div2_main2_div3.setAttribute("onClick","Ballons('ballon-11')")

var div2Child_div2_main2_div4 = document.createElement("div")
div2Child_div2_main2_div4.setAttribute("class","box")
div2Child_div2_main2_div4.setAttribute("id","ballon-12")
div2Child_div2_main2_div4.setAttribute("onClick","Ballons('ballon-12')")

var div2Child_div2_main2_div5 = document.createElement("div")
div2Child_div2_main2_div5.setAttribute("class","box")
div2Child_div2_main2_div5.setAttribute("id","ballon-13")
div2Child_div2_main2_div5.setAttribute("onClick","Ballons('ballon-13')")

var div2Child_div2_main2_div6 = document.createElement("div")
div2Child_div2_main2_div6.setAttribute("class","box")
div2Child_div2_main2_div6.setAttribute("id","ballon-14")
div2Child_div2_main2_div6.setAttribute("onClick","Ballons('ballon-14')")

var div2Child_div2_main2_div7 = document.createElement("div")
div2Child_div2_main2_div7.setAttribute("class","box")
div2Child_div2_main2_div7.setAttribute("id","ballon-15")
div2Child_div2_main2_div7.setAttribute("onClick","Ballons('ballon-15')")

var div2Child_div2_main2_div8 = document.createElement("div")
div2Child_div2_main2_div8.setAttribute("class","box")
div2Child_div2_main2_div8.setAttribute("id","ballon-16")
div2Child_div2_main2_div8.setAttribute("onClick","Ballons('ballon-16')")
//---------------------------------------
var div2Child_div2_mian3 = document.createElement("div")
div2Child_div2_mian3.setAttribute("id","main3")

var div2Child_div2_main3_div1 = document.createElement("div")
div2Child_div2_main3_div1.setAttribute("class","box")
div2Child_div2_main3_div1.setAttribute("id","ballon-17")
div2Child_div2_main3_div1.setAttribute("onClick","Ballons('ballon-17')")

var div2Child_div2_main3_div2 = document.createElement("div")
div2Child_div2_main3_div2.setAttribute("class","box")
div2Child_div2_main3_div2.setAttribute("id","ballon-18")
div2Child_div2_main3_div2.setAttribute("onClick","Ballons('ballon-18')")

var div2Child_div2_main3_div3 = document.createElement("div")
div2Child_div2_main3_div3.setAttribute("class","box")
div2Child_div2_main3_div3.setAttribute("id","ballon-19")
div2Child_div2_main3_div3.setAttribute("onClick","Ballons('ballon-19')")

var div2Child_div2_main3_div4 = document.createElement("div")
div2Child_div2_main3_div4.setAttribute("class","box")
div2Child_div2_main3_div4.setAttribute("id","ballon-20")
div2Child_div2_main3_div4.setAttribute("onClick","Ballons('ballon-20')")

var div2Child_div2_main3_div5 = document.createElement("div")
div2Child_div2_main3_div5.setAttribute("class","box")
div2Child_div2_main3_div5.setAttribute("id","ballon-21")
div2Child_div2_main3_div5.setAttribute("onClick","Ballons('ballon-21')")

var div2Child_div2_main3_div6 = document.createElement("div")
div2Child_div2_main3_div6.setAttribute("class","box")
div2Child_div2_main3_div6.setAttribute("id","ballon-22")
div2Child_div2_main3_div6.setAttribute("onClick","Ballons('ballon-22')")

var div2Child_div2_main3_div7 = document.createElement("div")
div2Child_div2_main3_div7.setAttribute("class","box")
div2Child_div2_main3_div7.setAttribute("id","ballon-23")
div2Child_div2_main3_div7.setAttribute("onClick","Ballons('ballon-23')")

var div2Child_div2_main3_div8 = document.createElement("div")
div2Child_div2_main3_div8.setAttribute("class","box")
div2Child_div2_main3_div8.setAttribute("id","ballon-24")
div2Child_div2_main3_div8.setAttribute("onClick","Ballons('ballon-24')")




var p3Text = document.createTextNode("Timer:0")
var textH1 = document.createTextNode("Ballon Game")
var textP1 = document.createTextNode("Score:0")
var textP2 = document.createTextNode("Life Line:")


h1.appendChild(textH1)
p1.appendChild(textP1)
p2.appendChild(textP2)
p3.appendChild(p3Text)
myDom.appendChild(h1)
myDom.appendChild(hr1)
myDom.appendChild(div1)
div1.appendChild(p1)
div1.appendChild(p2)
div1.appendChild(div1Child)
myDom.appendChild(p3)
myDom.appendChild(hr2)
myDom.appendChild(div2)

div2.appendChild(div2Child)
div2Child.appendChild(div2Child_div1)
div2Child.appendChild(div2Child_div2)
div2Child.appendChild(div2Child_div3)
div2Child.appendChild(div2Child_div4)
div2Child.appendChild(div2Child_div5)
div2Child.appendChild(div2Child_div6)
div2Child.appendChild(div2Child_div7)
div2Child.appendChild(div2Child_div8)

div2Child.appendChild(div2Child_div2)
div2.appendChild(div2Child_div2_mian2)
div2Child_div2_mian2.append(div2Child_div2_main2_div1)
div2Child_div2_mian2.append(div2Child_div2_main2_div2)
div2Child_div2_mian2.append(div2Child_div2_main2_div3)
div2Child_div2_mian2.append(div2Child_div2_main2_div4)
div2Child_div2_mian2.append(div2Child_div2_main2_div5)
div2Child_div2_mian2.append(div2Child_div2_main2_div6)
div2Child_div2_mian2.append(div2Child_div2_main2_div7)
div2Child_div2_mian2.append(div2Child_div2_main2_div8)

div2.appendChild(div2Child_div2_mian3)
div2Child_div2_mian3.append(div2Child_div2_main3_div1)
div2Child_div2_mian3.append(div2Child_div2_main3_div2)
div2Child_div2_mian3.append(div2Child_div2_main3_div3)
div2Child_div2_mian3.append(div2Child_div2_main3_div4)
div2Child_div2_mian3.append(div2Child_div2_main3_div5)
div2Child_div2_mian3.append(div2Child_div2_main3_div6)
div2Child_div2_mian3.append(div2Child_div2_main3_div7)
div2Child_div2_mian3.append(div2Child_div2_main3_div8)

var colorArrayy = [
    "lightblue",
    "lightgreen",
    "blue",
    "pink",
    "brown",
    "pink",
    "pink",
    "gray",
    "yellow"
]
var lifeLineArray = ['❤️', '❤️', '❤️', '❤️', '❤️']
document.getElementById("lifelIne").innerText = "Life Line: " + lifeLineArray.join('');
var findColor = colorArrayy[Math.floor(Math.random() * colorArrayy.length)]
console.log(findColor)
for (let i = 1; i <= 24; i++) {
    var randomColor = colorArrayy[Math.floor(Math.random() * colorArrayy.length)];
    document.getElementById("ballon-" + i).style.backgroundColor = randomColor;
}

var boxRandom = document.getElementById("randomColor");
boxRandom.style.backgroundColor = findColor;

var score = 0;

function Ballons(ballonPick) {
    var ballonColors = document.getElementById(ballonPick);
    if (findColor.toLowerCase() === ballonColors.style.backgroundColor) {
        score = score + 1;
        document.getElementById("score").innerText = "Score: " + score;
        ballonColors.style.backgroundColor = "lightgreen";
    }
    else {
        score = score - 1;
        document.getElementById("score").innerText = "Score: " + score;
        lifeLineArray.pop();
        document.getElementById("lifelIne").innerText = "Life Line: " + lifeLineArray.join('');
        var randomColor = colorArrayy[Math.floor(Math.random() * colorArrayy.length)];
        ballonColors.style.backgroundColor = randomColor;
        if (lifeLineArray == '') {
            document.getElementById("lifelIne").innerText = "Life Line: " + "😞";
        }
    }
}


var startingMintes = 1;
var time = startingMintes * 60;
var countDown = document.getElementById("Timer");
var settime = setInterval(updateCountDown, 1000)
function updateCountDown() {
    var minutes = Math.floor(time / 60)
    let second = time % 60;
    second = second < 1 ? '0' + second : second;
    countDown.innerText = `${minutes} : ${second}`;
    time--;
    if (minutes === 0 && second == 00) {
        clearInterval(settime);
        if (score >= 1){
            document.getElementById("score").innerText = "You Win 🏆";
        }
        else if(score <= 0){
            document.getElementById("score").innerText = "You Lose 💔"
        }
    }
}
