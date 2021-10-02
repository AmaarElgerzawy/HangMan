let username = prompt("Enter Your Name"),
letters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
  theGusses = {
    massengers: ["MOHAMED", "NOAH", "GUSSES", "EPRAHIM", "MOUSA", "HAROON"],
    countries: ["EGYPT", "PALASTINE", "SYRYA", "SAUDI ARABIA", "LEPANON"],
    programms: ["ADOBE PLAYER", "ANI PLAYER", "BLUE STACK", "VSUAL STUDIO"],
    games: ["MOBILE LEGENDS", "CLASH ROYAL", "WILD REFT", "ASSIAN CREED"],
    furniture: ["CHAIR", "TABLE", "BED", "OFFICE", "DOOR"],
  },
  mistakes = 1;


chechName(username);
uploadLetter(letters);
let x = randoming(theGusses);

window.addEventListener("load", function () {
  let btns = Array.from(document.querySelectorAll("#chooseletter > span"));
  if (x.includes(" ")) {
    SpansArray = Array.from(document.querySelectorAll("#game > span"));
    SpansArray[x.indexOf(" ")].classList.add("killed");
    SpansArray[x.indexOf(" ")].classList.add("speace");
  }
  btns.forEach(function (one) {
    one.addEventListener("click", function (e) {
      if (x.includes(e.target.innerHTML)) {
        x.forEach(function (ele , idx) {
          if (ele == e.target.innerHTML) {
            indexSpan = x.indexOf(ele , idx)
            SpansArray = Array.from(document.querySelectorAll("#game > span"));
            SpansArray[indexSpan].innerHTML = ele;
            SpansArray[indexSpan].classList.add("killed");
            ending = Array.from(document.querySelectorAll("#game > span.killed"));
          }
        })
        if (ending.length == x.length) {
          win(username);
        }
      } else {
        document.querySelector("#mistake > span").innerHTML = mistakes;
        drawing(mistakes - 1);
        ++mistakes;
        if (mistakes == 10) {
          lose();
        }
      }
      e.target.classList.add("died");
    })
  })
});


function uploadLetter(arr) {
  let ele = document.querySelector("#chooseletter");
  arr.forEach(element => {
    let createdSpan = document.createElement("span");
    createdSpan.innerHTML = element;
    ele.append(createdSpan);
  });
}
function chechName(name) {
  if (name !== "" && name !== " " && name !== null) {
    document.querySelector("#name > span").innerHTML = name;
  } else {
    document.querySelector("#name > span").innerHTML = "UnKnown";
  }
  return name;
}
function randoming(obj) {
  let arr = []
  for (let key in obj) {
    arr.push(key)
  }
  randomNum = Math.floor(Math.random() * arr.length)
  document.querySelector("#categ > span").innerHTML = arr[randomNum];
  let resultKey = obj[arr[randomNum]],
    randomValue = Math.floor(Math.random() * resultKey.length),
    final = Array.from(resultKey[randomValue]),
    spanGame = document.querySelector("#game");
  final.forEach(function (letter) {
    createdSpanGame = document.createElement("span");
    spanGame.append(createdSpanGame);
  })
  return final;
}
function drawing(e) {
  let theDraw = Array.from(document.querySelectorAll("#draw > div"));
  theDraw[e].classList.add("pass");
}
function win(name) {
  if (name === "TarekAmrPk" || name === "OmarAbdoPk") {
    setTimeout(function () {
      document.getElementById("win").classList.add("end");
      document.querySelector("#win > span").innerHTML = "شاطر يكسمك ..عاش يمعرص"
    }, 500);
    setTimeout(function () {
      alert("wanna replay again يبو نيكه?");
      alert("لا يمعرص مش هخليك تعيد هههههه")
    }, 1500);
  } else {
    setTimeout(function () {
      document.getElementById("win").classList.add("end");
      document.querySelector("#win > span").innerHTML = name;
      document.querySelector("#win > span").style.color = "black";
    }, 500);
    setTimeout(function () {
      alert("wanna replay ?");
      window.location.reload(true);
    }, 1500);
  }
  
}
function lose() {
  setTimeout(function () {
    document.getElementById("lose").classList.add("end");
    document.querySelector("#lose > span").innerHTML = x.join("");
    document.querySelector("#lose > span").style.color = "black";
  }, 500);
  setTimeout(function () {
    alert("wanna replay");
    window.location.reload(true);
  }, 1500);
}