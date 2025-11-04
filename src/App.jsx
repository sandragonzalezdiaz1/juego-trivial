import preguntas from "./data/preguntas";
import "./App.css";
import { useEffect, useState } from "react";
import {
  Title,
  Row,
  TextQuestion,
  Box,
  Category,
  AnswerButton,
} from "./styled";
import Confetti from "react-confetti";

// Función para desordenar las preguntas
const mezclarPreguntas = (array) => {
  const copia = [...array]; // Hace una copia superficial del array, sin crear referencias al array original
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Suma 1 para que incluya el maximo
    [copia[i], copia[j]] = [copia[j], copia[i]]; // Algoritmo Fisher Yates: para desordenar/barajear elementos del array
  }

  return copia;
};

function App() {
  const [preguntasBarajadas, setPreguntas] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [mensaje, setMensaje] = useState("");

  const letrasOpciones = ["A", "B", "C", "D"];
  const coloresOpciones = ["#a2d2ff", "#ffd6a5", "#caffbf", "#ffc6ff"];
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null); //Opción seleccionada
  const [esCorrecta, setEsCorrecta] = useState(null); // true / false
  const [mostrarConfeti, setMostrarConfeti] = useState(false);

  // Mezcla las preguntas solo una vez al cargar la app
  useEffect(() => {
    setPreguntas(mezclarPreguntas(preguntas));
  }, []);

  if (preguntasBarajadas.length === 0) return <div>Cargando...</div>;

  const pregunta = preguntasBarajadas[preguntaActual];

  const respuestaCorrecta = (opcion) => {
    setRespuestaSeleccionada(opcion);

    if (opcion === pregunta.respuesta) {
      setEsCorrecta(true);
      setMensaje("Respuesta correcta!!!🎉");
      setMostrarConfeti(true); // Activamos confeti

      // Cambia de pregunta después de un pequeño delay
      setTimeout(() => {
        if (preguntaActual < preguntasBarajadas.length - 1) {
          setPreguntaActual((prev) => prev + 1);
        } else {
          // Si nos encontramos en la ultima pregunta
          setPreguntaActual(0); // Vuelve a la primera pregunta
        }

        setMensaje(""); // Limpiar mensaje
        setRespuestaSeleccionada(null);
        setEsCorrecta(null);
        setMostrarConfeti(false); // Desactivamos confeti
      }, 5000);

    } else {
      setMensaje("La respuesta no es correcta, inténtalo de nuevo");
      setEsCorrecta(false);
    }
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999 }}>
       {mostrarConfeti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={200}/>
      )}
      <Title>TRIVIAL</Title>
      
      <Category>Categoría: {pregunta.categoria}</Category>
      <Row>
        <TextQuestion>{pregunta.pregunta}</TextQuestion>
        {pregunta.img.endsWith(".mp4") ? (
          <video controls style={{ width: "100%", marginTop: "20px" }}>
            <source src={pregunta.img} type="video/mp4" />
          </video>
        ) : pregunta.img.endsWith(".mp3") ? (
          <audio controls style={{ width: "100%", marginTop: "20px" }}>
            <source src={pregunta.img} type="audio/mpeg" />
          </audio>
        ) : (
          <img
            src={pregunta.img}
            alt="Imagen de la pregunta"
            style={{ width: "100%", marginTop: "20px" }}
          />
        )}
        <Box>
         
          {pregunta.opciones.map((opcion, indice) => {
            return (
              <p key={indice}>
                <AnswerButton
                  onClick={() => respuestaCorrecta(opcion)}
                  bgColor={coloresOpciones[indice]}
                  correct={respuestaSeleccionada === opcion ? esCorrecta : null}
                >
                  {letrasOpciones[indice]}
                </AnswerButton>
                {opcion}
              </p>
            );
          })}
        </Box>
        {mensaje && (
          <p style={{ fontWeight: "bold", fontSize: "24px" }}>{mensaje}</p>
        )}
      </Row>
    </div>
  );
}

export default App;
