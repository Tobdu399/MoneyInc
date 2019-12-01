// Timers
var donutsWaitingTime;
var donutsWaitingTimeOriginal = 3;

var shrimpsWaitingTime;
var shrimpsWaitingTimeOriginal = 10;

var newspapersWaitingTime;
var newspapersWaitingTimeOriginal = 20;

// Lemons
var lemonsValue = 1;

var lemonsMultiplier = 1;
var lemonsMultiplierPrize = 20;

// Donuts
var donutsValue = 3;

var donutsMultiplier = 1;
var donutsMultiplierPrize = 250;

// Shrimps
var shrimpsValue = 8;

var shrimpsMultiplier = 1;
var shrimpsMultiplierPrize = 1300;

// Newspapers
var newspapersValue = 15;

var newspapersMultiplier = 1;
var newspapersMultiplierPrize = 2500;

// Reducer limits
var donutReducerPrize = 2000;
var donutReducerLimit = 0;

var shrimpReducerPrize = 4500;
var shrimpReducerLimit = 0;

var newspaperReducerPrize = 7000;
var newspaperReducerLimit = 0;

// --------------------------------------------
var accountCurrentBalance = 0;

function buyLemons() {
  document.getElementById("lemonsButton").disabled = true;
  document.getElementById("accountBalance").innerHTML = accountCurrentBalance += lemonsValue * lemonsMultiplier;
  document.getElementById("accountBalance").innerHTML = accountCurrentBalance + "€";

  document.getElementById("lemonsTimer").innerHTML = "+ " + lemonsValue * lemonsMultiplier + "€";
  setTimeout(function() {
    document.getElementById("lemonsTimer").innerHTML = "Saatavilla heti";
    document.getElementById("lemonsButton").disabled = false;
  }, 500);
}

// ---------------------------|Donuts|-------------------------
function buyDonuts() {
  // Make donutsWaitingTime global
  window.donutsWaitingTime = donutsWaitingTimeOriginal;
    buyDonuts1();
}

function buyDonuts1() {
  if (donutsWaitingTime >= 0.1) {
    buyDonuts2();
  }

  else {
    document.getElementById("accountBalance").innerHTML = accountCurrentBalance += donutsValue * donutsMultiplier;
    document.getElementById("accountBalance").innerHTML = accountCurrentBalance + "€";

    document.getElementById("donutsTimer").innerHTML = "+ " + donutsValue * donutsMultiplier + "€";

    setTimeout(function() {
      if (donutReducerLimit == 10) {
        document.getElementById("donutsTimer").innerHTML = "Saatavilla heti";
      }

      else {
        document.getElementById("donutsTimer").innerHTML = donutsWaitingTimeOriginal.toFixed(1) + " Sekunttia";
        document.getElementById("donutsButton").disabled = false;
      }
    }, 1000);
  }
}

function buyDonuts2() {
  document.getElementById("donutsButton").disabled = true;

  document.getElementById("donutsTimer").innerHTML = donutsWaitingTime.toFixed(1) + " Sekunttia";
  donutsWaitingTime -= 0.1;
  setTimeout(buyDonuts1, 100);
}
// ----------------------------------------------------------

// ---------------------------|Shrimps|-------------------------
function buyShrimps() {
  // Make shrimpsWaitingTime global
  window.shrimpsWaitingTime = shrimpsWaitingTimeOriginal;
    buyShrimps1();
}

function buyShrimps1() {
  if (shrimpsWaitingTime > 0) {
    buyShrimps2();
  }

  else {
    document.getElementById("accountBalance").innerHTML = accountCurrentBalance += shrimpsValue * shrimpsMultiplier;
    document.getElementById("accountBalance").innerHTML = accountCurrentBalance + "€";

    document.getElementById("shrimpsTimer").innerHTML = "+ " + shrimpsValue * shrimpsMultiplier + "€";

    setTimeout(function() {
      if (shrimpReducerLimit == 10) {
        document.getElementById("shrimpsTimer").innerHTML = "Saatavilla heti";
      }

      else {
        document.getElementById("shrimpsTimer").innerHTML = shrimpsWaitingTimeOriginal.toFixed(1) + " Sekunttia";
        document.getElementById("shrimpsButton").disabled = false;
      }
    }, 1000);
  }
}

function buyShrimps2() {
  document.getElementById("shrimpsButton").disabled = true;

  document.getElementById("shrimpsTimer").innerHTML = shrimpsWaitingTime.toFixed(1) + " Sekunttia";
  shrimpsWaitingTime -= 0.1;
  setTimeout(buyShrimps1, 100);
}
// ----------------------------------------------------------

// ---------------------------|Newspapers|-------------------------
function buyNewspapers() {
  // Make newspapersWaitingTime global
  window.newspapersWaitingTime = newspapersWaitingTimeOriginal;
    buyNewspapers1();
}

function buyNewspapers1() {
  if (newspapersWaitingTime > 0) {
    buyNewspapers2();
  }

  else {
    document.getElementById("accountBalance").innerHTML = accountCurrentBalance += newspapersValue * newspapersMultiplier;
    document.getElementById("accountBalance").innerHTML = accountCurrentBalance + "€";

    document.getElementById("newspapersTimer").innerHTML = "+ " + newspapersValue * newspapersMultiplier + "€";

    setTimeout(function() {
      if (newspaperReducerLimit == 10) {
        document.getElementById("newspapersTimer").innerHTML = "Saatavilla heti";
      }

      else {
        document.getElementById("newspapersTimer").innerHTML = newspapersWaitingTimeOriginal + " Sekunttia";
        document.getElementById("newspapersButton").disabled = false;
      }
    }, 1000);
  }
}

function buyNewspapers2() {
  document.getElementById("newspapersButton").disabled = true;

  document.getElementById("newspapersTimer").innerHTML = newspapersWaitingTime.toFixed(1) + " Sekunttia";
  newspapersWaitingTime -= 0.1;
  setTimeout(buyNewspapers1, 100);
}
// ----------------------------------------------------------

// Multipliers
function buyMultiplierForLemons() {
  if (accountCurrentBalance >= lemonsMultiplierPrize) {
    accountCurrentBalance -= lemonsMultiplierPrize;
    document.getElementById("accountBalance").innerHTML = accountCurrentBalance + "€";

    lemonsMultiplier = lemonsMultiplier * 2;
    document.getElementById("lemonsKerroin").innerHTML = "Kerroin: " + lemonsMultiplier + "x";

    lemonsMultiplierPrize = lemonsMultiplierPrize * 3;
    document.getElementById("lemonPrize").innerHTML = lemonsMultiplierPrize + "€";

    // Display the amount you can get now by buying this
    document.getElementById("lemons-value").innerHTML = lemonsValue * lemonsMultiplier + "€";
  }

  else {
    alert("Sinulla ei ole tarpeeksi rahaa!");
  }
}

function buyMultiplierForDonuts() {
  if (accountCurrentBalance >= donutsMultiplierPrize) {
    accountCurrentBalance -= donutsMultiplierPrize;

    document.getElementById("accountBalance").innerHTML = accountCurrentBalance + "€";

    donutsMultiplier = donutsMultiplier * 2;
    document.getElementById("donutsKerroin").innerHTML = "Kerroin: " + donutsMultiplier + "x";

    donutsMultiplierPrize = donutsMultiplierPrize * 4;
    document.getElementById("donutPrize").innerHTML = donutsMultiplierPrize + "€";

    // Display the amount you can get now by buying this
    document.getElementById("donuts-value").innerHTML = donutsValue * donutsMultiplier + "€";
  }

  else {
    alert("Sinulla ei ole tarpeeksi rahaa!");
  }
}

function buyMultiplierForShrimps() {
  if (accountCurrentBalance >= shrimpsMultiplierPrize) {
    accountCurrentBalance -= shrimpsMultiplierPrize;
    document.getElementById("accountBalance").innerHTML = accountCurrentBalance + "€";

    shrimpsMultiplier = shrimpsMultiplier * 2;
    document.getElementById("shrimpsKerroin").innerHTML = "Kerroin: " + shrimpsMultiplier + "x";

    shrimpsMultiplierPrize = shrimpsMultiplierPrize * 4;
    document.getElementById("shrimpPrize").innerHTML = shrimpsMultiplierPrize + "€";

    // Display the amount you can get now by buying this
    document.getElementById("shrimps-value").innerHTML = shrimpsValue * shrimpsMultiplier + "€";
  }

  else {
    alert("Sinulla ei ole tarpeeksi rahaa!");
  }
}

function buyMultiplierForNewspapers() {
  if (accountCurrentBalance >= newspapersMultiplierPrize) {
    accountCurrentBalance -= newspapersMultiplierPrize;
    document.getElementById("accountBalance").innerHTML = accountCurrentBalance + "€";

    newspapersMultiplier = newspapersMultiplier * 2;
    document.getElementById("newspapersKerroin").innerHTML = "Kerroin: " + newspapersMultiplier + "x";

    newspapersMultiplierPrize = newspapersMultiplierPrize * 3;
    document.getElementById("newspaperPrize").innerHTML = newspapersMultiplierPrize + "€";

    // Display the amount you can get now by buying this
    document.getElementById("newspapers-value").innerHTML = newspapersValue * newspapersMultiplier + "€";
  }

  else {
    alert("Sinulla ei ole tarpeeksi rahaa!");
  }
}

// --------------------------------------------------------------------
// Reducers

function donutTimeReducer() {
  if (accountCurrentBalance >= donutReducerPrize) {
    if (donutReducerLimit < 10) {
      donutReducerLimit += 1;

      accountCurrentBalance = accountCurrentBalance - donutReducerPrize;
      document.getElementById("accountBalance").innerHTML = accountCurrentBalance + "€";

      donutReducerPrize = donutReducerPrize * 3;
      document.getElementById("donut-reducer-prize").innerHTML = donutReducerPrize + "€";

      donutsWaitingTimeOriginal -= 0.3;
      document.getElementById("donutsTimer").innerHTML = donutsWaitingTimeOriginal.toFixed(1) + " Sekunttia";
    }

    if (donutReducerLimit == 10) {
      document.getElementById("donutsTimer").innerHTML = "Saatavilla heti";
      remove1();
    }
  }

  else {
    alert("Sinulla ei ole tarpeeksi rahaa!");
  }
}

function shrimpTimeReducer() {
  if (accountCurrentBalance >= shrimpReducerPrize) {
    if (shrimpReducerLimit < 10) {
      shrimpReducerLimit += 1;

      accountCurrentBalance = accountCurrentBalance - shrimpReducerPrize;
      document.getElementById("accountBalance").innerHTML = accountCurrentBalance + "€";

      shrimpReducerPrize = shrimpReducerPrize * 4;
      document.getElementById("shrimp-reducer-prize").innerHTML = shrimpReducerPrize + "€";

      shrimpsWaitingTimeOriginal -= 1;
      document.getElementById("shrimpsTimer").innerHTML = shrimpsWaitingTimeOriginal.toFixed(1) + " Sekunttia";
    }

    if (shrimpReducerLimit == 10) {
      document.getElementById("shrimpsTimer").innerHTML = "Saatavilla heti";
      remove2();
    }
  }

  else {
    alert("Sinulla ei ole tarpeeksi rahaa!");
  }
}

function newspaperTimeReducer() {
  if (accountCurrentBalance >= newspaperReducerPrize) {
    if (newspaperReducerLimit < 10) {
      newspaperReducerLimit += 1;

      accountCurrentBalance = accountCurrentBalance - newspaperReducerPrize;
      document.getElementById("accountBalance").innerHTML = accountCurrentBalance + "€";

      newspaperReducerPrize = newspaperReducerPrize * 3;
      document.getElementById("newspaper-reducer-prize").innerHTML = newspaperReducerPrize + "€";

      newspapersWaitingTimeOriginal -= 2;
      document.getElementById("newspapersTimer").innerHTML = newspapersWaitingTimeOriginal.toFixed(1) + " Sekunttia";
    }

    if (newspaperReducerLimit == 10) {
      document.getElementById("newspapersTimer").innerHTML = "Saatavilla heti";
      remove3();
    }
  }

  else {
    alert("Sinulla ei ole tarpeeksi rahaa!");
  }
}

function remove1() {
  var elem1 = document.getElementById("donutReducer");
  elem1.parentNode.removeChild(elem1);
  return false;
}

function remove2() {
  var elem2 = document.getElementById("shrimpReducer");
  elem2.parentNode.removeChild(elem2);
  return false;
}

function remove3() {
  var elem3 = document.getElementById("newspaperReducer");
  elem3.parentNode.removeChild(elem3);
  return false;
}
