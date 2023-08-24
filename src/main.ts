import "./style.css";

const colors = ["red", "blue", "violet", "green", "pink", "grey", "beige", "yellow"];
const nav = document.querySelector("nav") as HTMLElement;
const btnStart = document.querySelector(".start") as HTMLButtonElement;
const container = document.querySelector(".container") as HTMLDivElement;
let winElement = document.querySelector(".end") as HTMLDivElement;
let affichageCpt = document.querySelector(".count") as HTMLDivElement;
let restartBtn = document.querySelector(".restart") as HTMLElement;
let cpt = 0;
let last: HTMLElement | null;
let tilesWin = [];


const gameStart = btnStart.addEventListener("click", () =>{
  init();
});

const gameRestart = restartBtn.addEventListener("click", () => {
  reinit();
  init();
});

gameStart;
gameRestart;

/*const tiles = new Array(16).fill('').map( (_, i) => {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.classList.add("not-revealed");
  tile.setAttribute('color', colors[Math.floor(i/2)])
  tile.addEventListener("click", () => {
    tile.classList.toggle(colors[Math.floor(i/2)])
    tile.classList.toggle("not-revealed");
    if (last === null) {
      last = tile;
    }
    else if (last?.getAttribute("color") === tile.getAttribute("color")) {
      tilesWin.push(last);
      if (tilesWin.length == 8){
        container.style.opacity = "0.2";
        winElement.style.display = "block";
      }
      else {
      last = null;
      cpt++;
      }
    }
    else {
      setTimeout(() => {
        last?.classList.toggle(last.getAttribute("color"));
        last?.classList.toggle("not-revealed");
        tile.classList.toggle(colors[Math.floor(i/2)]);
        tile.classList.toggle("not-revealed");
        last = null;
      }, 1000);
      cpt++;
    }
  });
  return tile;
});*/

function init(){
  nav.remove();
  affichageCpt.innerText = `Nombre de coups : ${cpt}`;
  const tiles = new Array(16).fill('').map( (_, i) => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.classList.add("not-revealed");
    tile.setAttribute('color', colors[Math.floor(i/2)])
    tile.addEventListener("click", () => {
      tile.classList.toggle(colors[Math.floor(i/2)])
      tile.classList.toggle("not-revealed");
      if (last === null) {
        last = tile;
      }
      else if (last?.getAttribute("color") === tile.getAttribute("color")) {
        tilesWin.push(last);
        if (tilesWin.length == 8){
          container.style.opacity = "0.2";
          winElement.style.display = "block";
        }
        else {
        last = null;
        cpt++;
        }
      }
      else {
        setTimeout(() => {
          last?.classList.toggle(last.getAttribute("color") || "");
          last?.classList.toggle("not-revealed");
          tile.classList.toggle(colors[Math.floor(i/2)]);
          tile.classList.toggle("not-revealed");
          last = null;
        }, 1000);
        cpt++;
      }
    });
    return tile;
  });
  tiles.sort( () => Math.random() - 0.5);
  tiles.forEach( tile => container.appendChild(tile));
};

function reinit(){
  winElement.style.display = "none";
  cpt = 0;
  const findTiles = document.querySelectorAll(".tile");
  findTiles?.forEach ( tile => tile.remove());
  container.style.opacity = "1";
  tilesWin = [];
}
