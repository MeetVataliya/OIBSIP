var stn = "";
let output = document.querySelector("#output");

//calculation
const math = (Array) => {
  // division
  if (Array.includes("/")) {
    var j = 0;
    for (var i = 0; i < Array.length; i++) {
      if (Array[i] == "/") {
        j += 1;
      }
    }
    for (var i = 0; i < j; i++) {
      var a = Array.indexOf("/");

      var fun = Number(Array[a - 1]) / Number(Array[a + 1]);

      Array[a - 1] = fun;

      Array.splice(a, a + 1);
    }
  }

  if (Array.includes("*")) {
    var j = 0;
    for (var i = 0; i < Array.length; i++) {
      if (Array[i] == "*") {
        j += 1;
      }
    }
    for (var i = 0; i < j; i++) {
      var a = Array.indexOf("*");

      var fun = Number(Array[a - 1]) * Number(Array[a + 1]);

      Array[a - 1] = fun;

      Array.splice(a, a + 1);
    }
  }

  if (Array.includes("+")) {
    var j = 0;
    for (var i = 0; i < Array.length; i++) {
      if (Array[i] == "+") {
        j += 1;
      }
    }
    for (var i = 0; i < j; i++) {
      var a = Array.indexOf("+");

      var fun = Number(Array[a - 1]) + Number(Array[a + 1]);

      Array[a - 1] = fun;

      Array.splice(a, a + 1);
    }
  }

  if (Array.includes("-")) {
    var j = 0;
    for (var i = 0; i < Array.length; i++) {
      if (Array[i] == "-") {
        j += 1;
      }
    }
    for (var i = 0; i < j; i++) {
      var a = Array.indexOf("-");

      var fun = Number(Array[a - 1]) - Number(Array[a + 1]);

      Array[a - 1] = fun;

      Array.splice(a, a + 1);
    }
  }

  output.innerHTML = Array;
};

// refining string
function clean() {
  let Array = stn.split(" ");

  if (Array[0] == "") {
    Array.splice(0, 1);
    Array.unshift(0);

    if (Array[1] == "+") {
      var fun = Number(Array[0]) + Number(Array[2]);

      Array[0] = fun;

      Array.splice(1, 2);
      console.log(Array);
    } else if (Array[1] == "-") {
      var fun = Number(Array[0]) - Number(Array[2]);

      Array[0] = fun;

      Array.splice(1, 2);
      console.log(Array);
    } else if (Array[1] == "/") {
      Array.splice(0, 2);
      console.log(Array);
    } else if (Array[1] == "*") {
      Array.splice(0, 2);
      console.log(Array);
    }
  }

  if (Array[Array.length - 1] == "") {
    Array.splice(-1);
    Array.push(0);

    console.log(Array);

    if (Array[Array.length - 2] == "+") {
      var a = Array.length - 1;

      var fun = Number(Array[a - 2]) + Number(Array[a]);

      Array[a - 2] = fun;

      Array.splice(-2);
      console.log(Array);
    } else if (Array[Array.length - 2] == "-") {
      var a = Array.length - 1;

      var fun = Number(Array[a - 2]) - Number(Array[a]);

      Array[a - 2] = fun;

      Array.splice(-2);
      console.log(Array);
    } else if (Array[Array.length - 2] == "/") {
      Array.splice(-2);
      console.log(Array);
    } else if (Array[Array.length - 2] == "*") {
      Array.splice(-2);
      console.log(Array);
    }
  }

  stn = Array;
  math(stn);
}

// making string
function string(a) {
  stn = String(stn) + String(a.value);
  output.innerHTML = stn;
}
