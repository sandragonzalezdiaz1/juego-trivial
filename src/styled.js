import styled from "styled-components";

export const Title = styled.h1`
    text-align: center;
    font-size: 3.5rem;
    font-weight: bold;
    color: white;
    background: linear-gradient(90deg, #1d7ae4, #4bb0ff);
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    margin: 20px auto;
    max-width: 800px;
    letter-spacing: 2px;
`;

export const Category = styled.p`
     text-align: center;
    font-size: 1.5rem;
    color: #1d7ae4;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 25px;
    font-style: italic;
   
`;

export const Row = styled.div`
    display: grid; 
     grid-template-columns: 50% 50%; 
    max-width: 800px;
    margin: auto;
    align-items: center;
`;

export const TextQuestion = styled.p`

    font-size: 2rem; /*Duplica el tamaño de la fuente respecto al tamaño original */
    font-weight: bold;
    text-shadow: 1px 1px 1px gray; 
    text-align: center;
    margin-right: 40px;

`;


export const Box = styled.div`
    font-size: 1.5rem;
    padding-left: 35px;

    p {
        display: flex;
        align-items: center;

        button {
            margin-right: 14px;
            font-weight: bold;
            font-size: 2rem;
        }
    }
`;

export const AnswerButton = styled.button`
  background: #1d7ae4;
  color: white;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: #125aaa;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

