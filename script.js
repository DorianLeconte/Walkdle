"use scrict";

//import { places } from "./data/places.js";

console.log("Hello World from script.js !");


/**
 * gives a random item from the place array.
 * will always give the same place on the same day.
 * @returns {name: string, mapsLink: string, image: string}
 * name is a simple string
 * mapsLink is a link to google maps (https://maps.app.goo.gl/xxx)
 * image is a relative path (data/image.png)
 */
function getRandomPlace() {
    const date = new Date();
    let seed = date.getFullYear() + date.getMonth() + date.getDate() + date.getDay();

    seed = seed % places.length;

    return places[seed];
}


/**
 * replaces the informations on the html page with the daily place
 */
function dailyWindow() {
    let place = getRandomPlace();
    let window = document.getElementById("endroit");

    let placeName = document.getElementById("placeName");
    placeName.textContent = place.name;

    let lien = document.getElementById("lien");
    lien.href = place.mapsLink;


    window.style.display = "flex";
}


/**
 * makes the "valider" button green
 */
function validate() {
    let bouton = document.getElementById("bouton");
    if (bouton.style.backgroundColor == "palevioletred") {
        bouton.style.backgroundColor = "aquamarine";
    }
    else {
        bouton.style.backgroundColor = "palevioletred";
    }
}






let daily = document.getElementById("today");
daily.addEventListener("click", dailyWindow);

let bouton = document.getElementById("bouton");
bouton.style.backgroundColor = "palevioletred";
bouton.addEventListener("click", validate);


class Place {
  constructor(name, mapsLink, image = "") {
    this.name = name;
    this.mapsLink = mapsLink;
    this.image = image;
  }
}

const stadeMalherbe = new Place("Stade Malherbe", "https://maps.app.goo.gl/9jo8c3zvK4uj3Zp99", "");
const parcNoisette = new Place("Parc des Noisettes", "https://maps.app.goo.gl/UVDJxeByVicqFgzH7", "");
const palaisSport = new Place("Palais des Sports", "https://maps.app.goo.gl/Jn98MEjkrUFYCYWDA", "");
const zenith = new Place("Zenith de Caen", "https://maps.app.goo.gl/woJ84doS25CmCZq58", "");
const arquetteRummet = new Place("Arquette rummet", "https://maps.app.goo.gl/FXL6myLTq8xbkB1e8", "");
const pont1 = new Place("Pont au dessus de l'Orne", "https://maps.app.goo.gl/WXPcbrpmRoeCCQkW9", "");
const collineOiseaux = new Place("Parc de la colline aux Oiseaux", "https://maps.app.goo.gl/JR344AknDXb8PFj46", "");
const memorial = new Place("Mémorial de Caen", "https://maps.app.goo.gl/SVQ9ukqeSMQMeEzr8", "");
const rondPoint1 = new Place("Rond Point un peu cool", "https://maps.app.goo.gl/S5HWnPMpn1CEp4P77", "");
const valleeJardins = new Place("La Vallée des jardins", "https://maps.app.goo.gl/KnGBm48bdGW1mKot8", "");
const jardinPlantes = new Place("Le Jardin des Plantes", "https://maps.app.goo.gl/rN6SpwvedRqfMcHbA", "");
const saintJulien = new Place("L'église Saint Julien", "https://maps.app.goo.gl/pVG3F1dxDnNzVfM39", "");
const chateau = new Place("Château de Guillaume le Conquérant", "https://maps.app.goo.gl/FHnkFPDeVwJ4JSDF8", "");
const parcAbbayeDame = new Place("Le Parc de l'Abbaye aux dames", "https://maps.app.goo.gl/mfZPNZKusiT5ajfW8", "");
const abbayeDames = new Place("l'Abbaye aux Dames", "https://maps.app.goo.gl/yniBwmSG4Xpt3F6E8", "");
const grandCedre = new Place("Le Grand Cèdre", "https://maps.app.goo.gl/AbVfjroAJQyTjFcG7", "");
const tribunal = new Place("le Tribunal Judiciaire", "https://maps.app.goo.gl/BFcHHRTFGcjEUhXP9", "");
const cargo = new Place("le Cargö", "https://maps.app.goo.gl/kC8nhEBgNs4M6sda7", "");
const tocqueville = new Place("Bibliothèque Alexis de Tocqueville", "https://maps.app.goo.gl/RBY6UQWr8QdsSmE3A", "");
const polaris = new Place("La sculpture Polaris", "https://maps.app.goo.gl/a7uwdG1RUxGFuPW87", "");
const claudeDecaen = new Place("Parc Claude Decaen", "https://maps.app.goo.gl/xP8EGHst4PfFPF3A6", "");
const parcCormelle = new Place("Parc de Cormelle le Royal", "https://maps.app.goo.gl/mgi2AFo4MaBtiQfS8", "");
const egliseSaintVigor = new Place("Eglise Saint Vigor", "https://maps.app.goo.gl/miMjG7jJhXtryHna6", "");
const parcOdon = new Place("Parc de l'Odon", "https://maps.app.goo.gl/rR5kGF3Rf5pgSNXc8", "");
const jardinsFamiliaux = new Place("Jardins Familiaux", "https://maps.app.goo.gl/QcZkK8udUoEdsuiL7", "");
const egliseSaintPierre = new Place("Eglise Saint Pierre", "https://maps.app.goo.gl/zUpHArWmdZEMyDMt9", "");
const placeRepublique = new Place("Place de la République", "https://maps.app.goo.gl/XJYbU1GgCGxV2Ky6A", "");
const esplanadeJmLouvel = new Place("Esplanade Jean Marie Louvel", "https://maps.app.goo.gl/62QKrHGp9uS4vcW78", "");
const hdv = new Place("Hôtel de ville", "https://maps.app.goo.gl/4kpjiCnKgutFanxb9", "");
const lettreXxl = new Place("des lettres XXL", "https://maps.app.goo.gl/cJiE7UxmDKfphjBn9", "");
const abbayeHommes = new Place("l'Abbaye aux Hommes", "https://maps.app.goo.gl/5jwaqC9upHzv8aBA7", "");
const palaisJustice = new Place("l'Ancien Palais de Justice", "https://maps.app.goo.gl/CEsNmM232nUEyvek7", "");
const patinoire = new Place("Patinoire", "https://maps.app.goo.gl/RBJGmbkujqqbB5Bw5", "");
const lacPrairie = new Place("le Lac de la Prairie", "https://maps.app.goo.gl/aZem7Gx7FAezVZA16", "");
const parcVenelle = new Place("Parc Venelle aux Champs", "https://maps.app.goo.gl/xJMZ7imRrrE29ikTA", "");
const rives = new Place("les Rives de l'Orne", "https://maps.app.goo.gl/zM1CxdgeZH7XCmJW8", "");

const places = [
  stadeMalherbe,
  parcNoisette,
  palaisSport,
  zenith,
  arquetteRummet,
  pont1,
  collineOiseaux,
  memorial,
  rondPoint1,
  valleeJardins,
  jardinPlantes,
  saintJulien,
  chateau,
  parcAbbayeDame,
  abbayeDames,
  grandCedre,
  tribunal,
  cargo,
  tocqueville,
  polaris,
  claudeDecaen,
  parcCormelle,
  egliseSaintVigor,
  parcOdon,
  jardinsFamiliaux,
  egliseSaintPierre,
  placeRepublique,
  esplanadeJmLouvel,
  hdv,
  lettreXxl,
  abbayeHommes,
  palaisJustice,
  patinoire,
  lacPrairie,
  parcVenelle,
  rives,
];