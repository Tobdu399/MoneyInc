// Timers (moi)
var donutsWaitingTime;
var donutsWaitingTimeOriginal = 3;

var shrimpsWaitingTime;
var shrimpsWaitingTimeOriginal = 5;

var newspapersWaitingTime;
var newspapersWaitingTimeOriginal = 10;

var filmsWaitingTime;
var filmsWaitingTimeOriginal = 18;

var tvsWaitingTime;
var tvsWaitingTimeOriginal = 25;

var computersWaitingTime;
var computersWaitingTimeOriginal = 30;

// Lemons
var lemonsValue = 1;

var lemonsMultiplier = 1;
var lemonsMultiplierPrize = 20;

// Donuts
var donutsValue = 3;

var donutsMultiplier = 1;
var donutsMultiplierPrize = 250;

// Shrimps
var shrimpsValue = 10;

var shrimpsMultiplier = 1;
var shrimpsMultiplierPrize = 1300;

// Newspapers
var newspapersValue = 35;

var newspapersMultiplier = 1;
var newspapersMultiplierPrize = 2500;

// films
var filmsValue = 50;

var filmsMultiplier = 1;
var filmsMultiplierPrize = 4000;

// tvs
var tvsValue = 75;

var tvsMultiplier = 1;
var tvsMultiplierPrize = 5300;

// computers
var computersValue = 120;

var computersMultiplier = 1;
var computersMultiplierPrize = 6500;

// Reducer limits
var donutReducerPrize = 1000;
var donutReducerLimit = 0;

var shrimpReducerPrize = 2500;
var shrimpReducerLimit = 0;

var newspaperReducerPrize = 4000;
var newspaperReducerLimit = 0;

var filmReducerPrize = 5000;
var filmReducerLimit = 0;

var tvReducerPrize = 6300;
var tvReducerLimit = 0;

var computerReducerPrize = 7000;
var computerReducerLimit = 0;

// --------------------------------------------
var accountCurrentBalance = 100000000000;

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
  if (donutsWaitingTime > 0) {
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
    }, 500);
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
    }, 500);
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
    }, 500);
  }
}

function buyNewspapers2() {
  document.getElementById("newspapersButton").disabled = true;

  document.getElementById("newspapersTimer").innerHTML = newspapersWaitingTime.toFixed(1) + " Sekunttia";
  newspapersWaitingTime -= 0.1;
  setTimeout(buyNewspapers1, 100);
}
// ----------------------------------------------------------

// ---------------------------|Films|-------------------------
function buyFilms() {
  // Make filmsWaitingTime global
  window.filmsWaitingTime = filmsWaitingTimeOriginal;
    buyFilms1();
}

function buyFilms1() {
  if (filmsWaitingTime > 0) {
    buyFilms2();
  }

  else {
    document.getElementById("accountBalance").innerHTML = accountCurrentBalance += filmsValue * filmsMultiplier;
    document.getElementById("accountBalance").innerHTML = accountCurrentBalance + "€";

    document.getElementById("filmsTimer").innerHTML = "+ " + filmsValue * filmsMultiplier + "€";

    setTimeout(function() {
      if (filmReducerLimit == 10) {
        document.getElementById("filmsTimer").innerHTML = "Saatavilla heti";
      }

      else {
        document.getElementById("filmsTimer").innerHTML = filmsWaitingTimeOriginal.toFixed(1) + " Sekunttia";
        document.getElementById("filmsButton").disabled = false;
      }
    }, 500);
  }
}

function buyFilms2() {
  document.getElementById("filmsButton").disabled = true;

  document.getElementById("filmsTimer").innerHTML = filmsWaitingTime.toFixed(1) + " Sekunttia";
  filmsWaitingTime -= 0.1;
  setTimeout(buyFilms1, 100);
}
// ----------------------------------------------------------

// ---------------------------|Tvs|-------------------------
function buyTvs() {
  // Make tvsWaitingTime global
  window.tvsWaitingTime = tvsWaitingTimeOriginal;
    buyTvs1();
}

function buyTvs1() {
  if (tvsWaitingTime > 0) {
    buyTvs2();
  }

  else {
    document.getElementById("accountBalance").innerHTML = accountCurrentBalance += tvsValue * tvsMultiplier;
    document.getElementById("accountBalance").innerHTML = accountCurrentBalance + "€";

    document.getElementById("tvsTimer").innerHTML = "+ " + tvsValue * tvsMultiplier + "€";

    setTimeout(function() {
      if (tvReducerLimit == 10) {
        document.getElementById("tvsTimer").innerHTML = "Saatavilla heti";
      }

      else {
        document.getElementById("tvsTimer").innerHTML = tvsWaitingTimeOriginal.toFixed(1) + " Sekunttia";
        document.getElementById("tvsButton").disabled = false;
      }
    }, 500);
  }
}

function buyTvs2() {
  document.getElementById("tvsButton").disabled = true;

  document.getElementById("tvsTimer").innerHTML = tvsWaitingTime.toFixed(1) + " Sekunttia";
  tvsWaitingTime -= 0.1;
  setTimeout(buyTvs1, 100);
}
// ----------------------------------------------------------

// ---------------------------|Computers|-------------------------
function buyComputers() {
  // Make computersWaitingTime global
  window.computersWaitingTime = computersWaitingTimeOriginal;
    buyComputers1();
}

function buyComputers1() {
  if (computersWaitingTime > 0) {
    buyComputers2();
  }

  else {
    document.getElementById("accountBalance").innerHTML = accountCurrentBalance += computersValue * computersMultiplier;
    document.getElementById("accountBalance").innerHTML = accountCurrentBalance + "€";

    document.getElementById("computersTimer").innerHTML = "+ " + computersValue * computersMultiplier + "€";

    setTimeout(function() {
      if (computerReducerLimit == 10) {
        document.getElementById("computersTimer").innerHTML = "Saatavilla heti";
      }

      else {
        document.getElementById("computersTimer").innerHTML = computersWaitingTimeOriginal.toFixed(1) + " Sekunttia";
        document.getElementById("computersButton").disabled = false;
      }
    }, 500);
  }
}

function buyComputers2() {
  document.getElementById("computersButton").disabled = true;

  document.getElementById("computersTimer").innerHTML = computersWaitingTime.toFixed(1) + " Sekunttia";
  computersWaitingTime -= 0.1;
  setTimeout(buyComputers1, 100);
}
// ----------------------------------------------------------

// Multipliers
function buyMultiplierForLemons() {
  if (accountCurrentBalance >= lemonsMultiplierPrize) {
    accountCurrentBalance -= lemonsMultiplierPrize;
    document.getElementById("accountBalance").innerHTML = accountCurrentBalance + "€";

    lemonsMultiplier = lemonsMultiplier * 2;
    document.getElementById("lemonsKerroin").innerHTML = "Kerroin: " + lemonsMultiplier + "x";

    lemonsMultiplierPrize = lemonsmultiplierPrize * 2;
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

    donutsMultiplierPrize = donutsmultiplierPrize * 2;
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

    shrimpsMultiplierPrize = shrimpsmultiplierPrize * 2;
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

    newspapersMultiplierPrize = newspapersmultiplierPrize * 2;
    document.getElementById("newspaperPrize").innerHTML = newspapersMultiplierPrize + "€";

    // Display the amount you can get now by buying this
    document.getElementById("newspapers-value").innerHTML = newspapersValue * newspapersMultiplier + "€";
  }

  else {
    alert("Sinulla ei ole tarpeeksi rahaa!");
  }
}

function buyMultiplierForFilms() {
  if (accountCurrentBalance >= filmsMultiplierPrize) {
    accountCurrentBalance -= filmsMultiplierPrize;
    document.getElementById("accountBalance").innerHTML = accountCurrentBalance + "€";

    filmsMultiplier = filmsMultiplier * 2;
    document.getElementById("filmsKerroin").innerHTML = "Kerroin: " + filmsMultiplier + "x";

    filmsMultiplierPrize = filmsMultiplierPrize * 2;
    document.getElementById("filmPrize").innerHTML = filmsMultiplierPrize + "€";

    // Display the amount you can get now by buying this
    document.getElementById("films-value").innerHTML = filmsValue * filmsMultiplier + "€";
  }

  else {
    alert("Sinulla ei ole tarpeeksi rahaa!");
  }
}

function buyMultiplierForTvs() {
  if (accountCurrentBalance >= tvsMultiplierPrize) {
    accountCurrentBalance -= tvsMultiplierPrize;
    document.getElementById("accountBalance").innerHTML = accountCurrentBalance + "€";

    tvsMultiplier = tvsMultiplier * 2;
    document.getElementById("tvsKerroin").innerHTML = "Kerroin: " + tvsMultiplier + "x";

    tvsMultiplierPrize = tvsMultiplierPrize * 2;
    document.getElementById("tvsPrize").innerHTML = tvsMultiplierPrize + "€";

    // Display the amount you can now get by buying this
    document.getElementById("tvs-value").innerHTML = tvsValue * tvsMultiplier + "€";
  }

  else {
    alert("Sinulla ei ole tarpeeksi rahaa!");
  }
}

function buyMultiplierForComputers() {
  if (accountCurrentBalance >= computersMultiplierPrize) {
    accountCurrentBalance -= computersMultiplierPrize;
    document.getElementById("accountBalance").innerHTML = accountCurrentBalance + "€";

    computersMultiplier = computersMultiplier * 2;
    document.getElementById("computersKerroin").innerHTML = "Kerroin: " + computersMultiplier + "x";

    computersMultiplierPrize = computersMultiplierPrize * 2;
    document.getElementById("computersPrize").innerHTML = computersMultiplierPrize + "€";

    // Display the amount you can now get by buying this
    document.getElementById("computers-value").innerHTML = computersValue * computersMultiplier + "€";
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

      shrimpReducerPrize = shrimpReducerPrize * 3;
      document.getElementById("shrimp-reducer-prize").innerHTML = shrimpReducerPrize + "€";

      shrimpsWaitingTimeOriginal -= 0.5;
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

      newspapersWaitingTimeOriginal -= 1;
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

function filmTimeReducer() {
  if (accountCurrentBalance >= filmReducerPrize) {
    if (filmReducerLimit < 10) {
      filmReducerLimit += 1;

      accountCurrentBalance = accountCurrentBalance - filmReducerPrize;
      document.getElementById("accountBalance").innerHTML = accountCurrentBalance + "€";

      filmReducerPrize = filmReducerPrize * 3;
      document.getElementById("film-reducer-prize").innerHTML = filmReducerPrize + "€";

      filmsWaitingTimeOriginal -= 1.8;
      document.getElementById("filmsTimer").innerHTML = filmsWaitingTimeOriginal.toFixed(1) + " Sekunttia";
    }

    if (filmReducerLimit == 10) {
      document.getElementById("filmsTimer").innerHTML = "Saatavilla heti";
      remove4();
    }
  }

  else {
    alert("Sinulla ei ole tarpeeksi rahaa!");
  }
}

function tvTimeReducer() {
  if (accountCurrentBalance >= tvReducerPrize) {
    if (tvReducerLimit < 10) {
      tvReducerLimit += 1;

      accountCurrentBalance = accountCurrentBalance - tvReducerPrize;
      document.getElementById("accountBalance").innerHTML = accountCurrentBalance + "€";

      tvReducerPrize = tvReducerPrize * 3;
      document.getElementById("tv-reducer-prize").innerHTML = tvReducerPrize + "€";

      tvsWaitingTimeOriginal -= 2.5;
      document.getElementById("tvsTimer").innerHTML = tvsWaitingTimeOriginal.toFixed(1) + " Sekunttia";
    }

    if (tvReducerLimit == 10) {
      document.getElementById("tvsTimer").innerHTML = "Saatavilla heti";
      remove5();
    }
  }

  else {
    alert("Sinulla ei ole tarpeeksi rahaa!");
  }
}

function computerTimeReducer() {
  if (accountCurrentBalance >= computerReducerPrize) {
    if (computerReducerLimit < 10) {
      computerReducerLimit += 1;

      accountCurrentBalance = accountCurrentBalance - computerReducerPrize;
      document.getElementById("accountBalance").innerHTML = accountCurrentBalance + "€";

      computerReducerPrize = computerReducerPrize * 3;
      document.getElementById("computer-reducer-prize").innerHTML = computerReducerPrize + "€";

      computersWaitingTimeOriginal -= 3;
      document.getElementById("computersTimer").innerHTML = computersWaitingTimeOriginal.toFixed(1) + " Sekunttia";
    }

    if (computerReducerLimit == 10) {
      document.getElementById("computersTimer").innerHTML = "Saatavilla heti";
      remove5()
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

function remove4() {
  var elem4 = document.getElementById("filmReducer");
  elem4.parentNode.removeChild(elem4);
  return false;
}

function remove5() {
  var elem5 = document.getElementById("tvReducer");
  elem5.parentNode.removeChild(elem5);
  return false;
}

function remove6() {
  var elem6 = document.getElementById("computerReducer");
  elem6.parentNode.removeChild(elem6);
  return false;
}
