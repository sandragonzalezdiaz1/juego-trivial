import australia from "../imgs/australia.jpg"; 
import avatar from "../imgs/avatar.jpeg";
import baloncesto from "../imgs/baloncesto.jpg";
import guerra from "../imgs/guerra.jpg";
import html from "../imgs/html.jpg";
import monalisa from "../imgs/monalisa.jpg";
import reypop from "../imgs/reypop.jpg";
import rio from "../video/rio.mp4";
import audio from "../audio/audio.mp3";

export default [
  {
    categoria: "Ciencia",
    pregunta: "¿Cuál es el planeta más grande del sistema solar?",
    opciones: ["Júpiter", "Saturno", "Marte", "Neptuno"],
    respuesta: "Júpiter",
    img: audio
  },
  {
    categoria: "Historia",
    pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?",
    opciones: ["1935", "1939", "1941", "1945"],
    respuesta: "1939",
    img: guerra
  },
  {
    categoria: "Geografía",
    pregunta: "¿Cuál es la capital de Australia?",
    opciones: ["Sídney", "Melbourne", "Canberra", "Perth"],
    respuesta: "Canberra",
    img: australia
  },
  {
    categoria: "Cultura General",
    pregunta: "¿Quién pintó la Mona Lisa?",
    opciones: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Claude Monet"
    ],
    respuesta: "Leonardo da Vinci",
    img: monalisa
  },
  {
    categoria: "Deportes",
    pregunta: "¿Cuántos jugadores hay en un equipo de baloncesto en cancha?",
    opciones: ["4", "5", "6", "7"],
    respuesta: "5",
    img: baloncesto
  },
  {
    categoria: "Cine",
    pregunta: "¿Cuál es la película más taquillera de la historia?",
    opciones: ["Avatar", "Titanic", "Avengers: Endgame", "Star Wars: El despertar de la fuerza"],
    respuesta: "Avatar",
    img: avatar
  },
  {
    categoria: "Tecnología",
    pregunta: "¿Qué significa 'HTML'?",
    opciones: [
      "HyperText Markup Language",
      "HighText Machine Learning",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language"
    ],
    respuesta: "HyperText Markup Language",
    img: html
  },
  {
    categoria: "Música",
    pregunta: "¿Quién es conocido como el 'Rey del Pop'?",
    opciones: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"],
    respuesta: "Michael Jackson",
    img: reypop
  },
  {
    categoria: "Geografía",
    pregunta: "¿Cuál es el rio más largo de la Peninsula Ibérica'?",
    opciones: ["Ebro", "Guadiana", "Duero", "Tajo"],
    respuesta: "Tajo",
    img: rio
  }
];