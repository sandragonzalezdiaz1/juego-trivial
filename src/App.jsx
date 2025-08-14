import preguntas from "./data/preguntas";
import './App.css'
import { useEffect, useState } from "react";
import { Title, Row, TextQuestion, Box, Category } from "./styled";

//Funcion para desordenar las preguntas
const mezclarPreguntas = (array) => {
  const copia = [...array]; //Spread operator: Hace una copia superficial del array, sin crear referencias al array original
  for (let i = copia.length - 1; i > 0; i--){
    const j = Math.floor(Math.random()*(i + 1)); //Sumamos 1 para que incluya el maximo
    [copia[i], copia[j]]= [copia[j], copia[i]]; //Algoritmo Fisher yates: para desordenar/barajear elementos del array

  }

  return copia; 

}

function App() {

  const [preguntasBarajadas, setPreguntas] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [mensaje, setMensaje] = useState("");

  //Mezcla las preguntas solo una vez al cargar la app
  useEffect(() => {
    setPreguntas(mezclarPreguntas(preguntas));
  }, []);

  if(preguntasBarajadas.length === 0) return <div>Cargando...</div>

  //const pregunta = preguntas[preguntaActual];
  const pregunta = preguntasBarajadas[preguntaActual];

  const respuestaCorrecta = (opcion) => {
    if(opcion === pregunta.respuesta){
      setMensaje("Respuesta correcta👌");

      // Cambiar de pregunta después de un pequeño delay
      setTimeout(() => {
         if(preguntaActual < preguntasBarajadas.length - 1){
          setPreguntaActual((prev) => prev + 1);
          setMensaje("");

        } else { //Si nos encontramos en la ultima pregunta
          setPreguntaActual(0); //Volvemos a la primera pregunta
          setMensaje(""); //Limpiar mensaje
        }
      }, 1000);

    } else {
      setMensaje("La respuesta no es correcta, inténtalo de nuevo");
    }
  }

  return (
    <div>
      <Title>TRIVIAL</Title>
      <Category>Categoría: {pregunta.categoria}</Category>
      <Row>
        <TextQuestion>{pregunta.pregunta}</TextQuestion>
        {
          pregunta.img.endsWith(".mp4") ? (
          <video controls style={{width:'100%', marginTop: '20px'}}>
            <source src={pregunta.img} type="video/mp4" />
          </video>
          ) : 
          pregunta.img.endsWith(".mp3") ? (
          <audio controls style={{width:'100%', marginTop: '20px'}}> 
            <source src={pregunta.img} type="audio/mpeg" />
          </audio>
          ) : (
          <img src={pregunta.img} alt="Imagen de la pregunta" style={{width:'100%', marginTop: '20px'}}/>
          )
        }
      <Box>
        {pregunta.opciones.map((opcion, indice) => {
          return <p key={indice}><button onClick={() => respuestaCorrecta(opcion)}>X</button>{opcion}</p>
        })

        }
      </Box>
      {mensaje && <p style={{fontWeight: "bold", fontSize:"24px"}}>{mensaje}</p>}
      </Row>
    </div>
  )
}

export default App
