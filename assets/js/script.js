"use strict";
class Smartphone {
    constructor(carica = 0, numeroChiamate = 0, credito = 0, oreChiamata = 0, minutiChiamata = 0, secondiChiamata = 0) {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.credito = 0;
        this.oreChiamata = 0;
        this.minutiChiamata = 0;
        this.secondiChiamata = 0;
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.credito = credito;
        this.oreChiamata = oreChiamata;
        this.minutiChiamata = minutiChiamata;
        this.secondiChiamata = secondiChiamata;
    }
    ricarica(unaRicarica) {
        this.credito += unaRicarica;
    }
    chiamata(durataOre, durataMinuti, durataSecondi) {
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
iPhone.numero404();
iPhone.getNumeroChiamate();
iPhone.azzeraChiamate();
// NO TIME
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
