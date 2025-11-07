/*
WAVE CHECK
Programmet ska kunna ge dig svar på vart det är bäst surf utifrån vind och swell. 
Tex. om vinden kommer från syd eller syd-west och swellet är mellan 0.3-1.5m är Baleal bra surf

Bra surf:
BALEAL
Vind - S/SW/SE
Swell - 1m

CANTINHO
Vind - W/SW
Swell - 1m

CERRO
Vind - S/SW/SE
Swell - 1m

SUPERTUBOS
Vind - NW/W
Swell - 0.5m

Default - Gå och klättra ist!

Kod: 
Functions 
Loopar

SET balealWind = [S, SW, SE]
SET balealSwell = 1
SET cantinhoWind = [W, SW]
SET cantinhoSwell = 1
SET cerroWind = [S, SW, SE]
SET cerroSwell = 1
SET supertubosWind = [NW, N]
SET supertubosSwell = 0.5

OM wind ELLER swell matchar någon/några av alternativen
PRINT "Bäst surf idag är i blablabla"

FUNCTION checkWind
END FUNCTION
CALL checkSurf
*/

// MY VARIABLES
/*
const balealSwell = 1;
const cantinhoSwell = 1;
const cerroSwell = 1;
const supertubosSwell = 0.5;
*/
const balealWind = ["S", "SW", "SE"];
const cerroWind = ["S", "SW", "SE"];
const cantinhoWind = ["W", "SW"];
const supertubosWind = ["NW", "N"];

const S = ["Baleal", "Cerro"],
  SE = ["Baleal", "Cerro"];
const SW = ["Baleal", "Cerro", "Cantonho"];
const W = "Cantinho";
const NW = "Supertubos",
  N = "Supertubos";

let todaysWind = "";
let todaysSwell = 0;

function saveWind() {
  todaysWind = document.getElementById("windInput").value.toUpperCase();
  console.log(`Saved today's wind: ${todaysWind}`);
}

function saveSwell() {
  todaysSwell = parseFloat(document.getElementById("swellInput").value);
  console.log(`Saved today's swell: ${todaysSwell} meters`);
}

function surfBaleal() {
  const balealWind = ["S", "SE", "SW"];
  const balealSwell = { min: 0.3, max: 1.5 };

  if (!todaysWind || !todaysSwell) {
    alert("Please save today's wind and swell first!");
    return;
  }

  if (todaysSwell > 3) {
    alert(
      `${todaysSwell} meter swell is waaay to big for you. Sit back and enjoy the show!`
    );
  } else if (
    balealWind.includes(todaysWind) &&
    todaysSwell >= balealSwell.min &&
    todaysSwell <= balealSwell.max
  ) {
    alert(
      `Today the wind comes from ${todaysWind} and the swell is ${todaysSwell} m high. It's perfect conditions in Baleal. Let's go!`
    );
  } else if (
    balealWind.includes(todaysWind) ||
    (todaysSwell >= balealSwell.min && todaysSwell <= balealSwell.max)
  ) {
    alert(
      `Today the wind comes from ${todaysWind} and the swell is ${todaysSwell} m high. It's good enough to have fun. Let's go!`
    );
  } else {
    alert(
      `Today the wind comes from ${todaysWind} and the swell is ${todaysSwell} m high. It's not good conditions in Baleal. Check another spot!`
    );
  }
}

function surfCantinho() {
  const cantinhoWind = ["W", "SW"];
  const cantinhoSwell = { min: 0.3, max: 1.5 };

  if (!todaysWind || !todaysSwell) {
    alert("Please save today's wind and swell first!");
    return;
  }

  if (todaysSwell > 3) {
    alert(
      `${todaysSwell} meter swell is waaay to big for you. Sit back and enjoy the show!`
    );
  } else if (
    cantinhoWind.includes(todaysWind) &&
    todaysSwell >= cantinhoSwell.min &&
    todaysSwell <= cantinhoSwell.max
  ) {
    alert(
      `Today the wind comes from ${todaysWind} and the swell is ${todaysSwell} m high. It's a perfect day to surf Cantinho. Let's go!`
    );
  } else if (
    cantinhoWind.includes(todaysWind) ||
    (todaysSwell >= cantinhoSwell.min && todaysSwell <= cantinhoSwell.max)
  ) {
    alert(
      `Today the wind comes from ${todaysWind} and the swell is ${todaysSwell} m high. It's good enough to have fun. Let's go!`
    );
  } else {
    alert(
      `Today the wind comes from ${todaysWind} and the swell is ${todaysSwell} m high. It's not good conditions in Cantinho. Check another spot!`
    );
  }
}

function surfCerro() {
  const cerroWind = ["S", "SW", "SE"];
  const cerroSwell = { min: 0.3, max: 1.5 };

  if (!todaysWind || !todaysSwell) {
    alert("Please save today's wind and swell first!");
    return;
  }

  if (todaysSwell > 3) {
    alert(
      `${todaysSwell} meter swell is waaay to big for you. Sit back and enjoy the show!`
    );
  } else if (
    cerroWind.includes(todaysWind) &&
    todaysSwell >= cerroSwell.min &&
    todaysSwell <= cerroSwell.max
  ) {
    alert(
      `Today the wind comes from ${todaysWind} and the swell is ${todaysSwell} m high. It's a perfect day to surf Cerro. Let's go!`
    );
  } else if (
    cerroWind.includes(todaysWind) ||
    (todaysSwell >= cerroSwell.min && todaysSwell <= cerroSwell.max)
  ) {
    alert(
      `Today the wind comes from ${todaysWind} and the swell is ${todaysSwell} m high. It's good enough to have fun. Let's go!`
    );
  } else {
    alert(
      `Today the wind comes from ${todaysWind} and the swell is ${todaysSwell} m high. It's not good conditions in Cerro. Check another spot!`
    );
  }
}

function surfSuperTubos() {
  const superTubosWind = ["N", "NW"];
  const superTubosSwell = { min: 0.3, max: 1.5 };

  if (!todaysWind || !todaysSwell) {
    alert("Please save today's wind and swell first!");
    return;
  }

  if (todaysSwell > 3) {
    alert(
      `${todaysSwell} meter swell is waaay to big for you. Sit back and enjoy the show!`
    );
  } else if (
    superTubosWind.includes(todaysWind) &&
    todaysSwell >= superTubosSwell.min &&
    todaysSwell <= superTubosSwell.max
  ) {
    alert(
      `Today the wind comes from ${todaysWind} and the swell is ${todaysSwell} m high. It's a perfect day to surf Supertubos. Let's go!`
    );
  } else if (
    superTubosWind.includes(todaysWind) ||
    (todaysSwell >= superTubosSwell.min && todaysSwell <= superTubosSwell.max)
  ) {
    alert(
      `Today the wind comes from ${todaysWind} and the swell is ${todaysSwell} m high. It's good enough to have fun. Let's go!`
    );
  } else {
    alert(
      `Today the wind comes from ${todaysWind} and the swell is ${todaysSwell} m high. It's not good conditions in Supertubos. Check another spot!`
    );
  }
}

function checkSurf() {
  const southWinds = { S, SE, SW };
  const westWinds = { SW, W };
  const northWinds = { NW, N };

  if (!todaysWind || !todaysSwell) {
    alert("Please save today's wind and swell first!");
    return;
  }

  if (southWinds[todaysWind] && todaysSwell >= 0.3 && todaysSwell <= 1.5) {
    alert(`${southWinds[todaysWind].join(" and ")} is good for surf today!`);
  } else if (
    westWinds[todaysWind] &&
    todaysSwell >= 0.3 &&
    todaysSwell <= 1.5
  ) {
    alert(`${westWinds[todaysWind]} is best for surf today`);
  } else if (
    northWinds[todaysWind] &&
    todaysSwell >= 0.3 &&
    todaysSwell <= 1.5
  ) {
    alert(`${northWinds[todaysWind]} is good for surf today`);
  } else {
    alert(
      `Im sorry, but today is not a good surf day in Peniche. Have a beer instead!`
    );
  }
}
