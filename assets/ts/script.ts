class Smartphone {
  carica: number = 0;
  numeroChiamate: number = 0;
  credito: number = 0;
  oreChiamata: number = 0;
  minutiChiamata: number = 0;
  secondiChiamata: number = 0;

  constructor(carica: number = 0, numeroChiamate: number = 0, credito: number = 0, oreChiamata: number = 0, minutiChiamata: number = 0, secondiChiamata: number = 0) {
    this.carica = carica;
    this.numeroChiamate = numeroChiamate;
    this.credito = credito;
    this.oreChiamata = oreChiamata;
    this.minutiChiamata = minutiChiamata;
    this.secondiChiamata = secondiChiamata;
  }

  ricarica(unaRicarica: number) {
    this.credito += unaRicarica;
  }

  chiamata(durataOre: number, durataMinuti: number, durataSecondi: number) {
    this.carica - 0.2 * this.minutiChiamata;
    let ore = this.oreChiamata + durataOre;
    let minuti = this.minutiChiamata + durataMinuti;
    let secondi = this.secondiChiamata + durataSecondi;
    let orePiu = (this.oreChiamata += durataOre);
    let minPiu = (this.minutiChiamata += durataMinuti);
    let secPiu = (this.secondiChiamata += durataSecondi);
    orePiu < 60 ? (this.oreChiamata = ore) : orePiu;
    minPiu < 60 ? (this.minutiChiamata = minuti) : minPiu;
    minPiu;
    secPiu < 60 ? (this.secondiChiamata = secondi) : secPiu;
    this.numeroChiamate++;
  }

  numero404() {
    this.credito;
  }

  getNumeroChiamate() {
    this.numeroChiamate;
  }

  azzeraChiamate() {
    this.numeroChiamate = 0;
    this.oreChiamata = 0;
    this.minutiChiamata = 0;
  }
}

let iPhone = new Smartphone();
console.log(iPhone);

iPhone.ricarica(50);
iPhone.chiamata(4, 59, 10);
iPhone.chiamata(1, 10, 10);
iPhone.getNumeroChiamate();

// function time() {
//   let h: number = 0;
//   let mn: number = 0;
//   let s: number = 0;

//   let startTime = setInterval(function () {
//     s++;
//     if (s == 59) {
//       mn++;
//       s = 0;
//     } else if (mn == 59) {
//       h++;
//       mn = 0;
//     }
//   }, 1000);
// }
