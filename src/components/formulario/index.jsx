import { useState, useEffect } from "react";

const Formulario = () => {

  let [matiraA, setMateriaA] = useState(0);
  let [matiraB, setMateriaB] = useState(0);
  let [matiraC, setMateriaC] = useState(0);
  let [nome, setNome] = useState('');


  useEffect(()=>{
    console.log("o componente iniciou");
  }, []);


  useEffect(()=>{
    console.log("o estado nome mudou");
  }, [nome]);

  useEffect(()=>{
    console.log("o estado materiaB mudou" + matiraB);
  }, [matiraB, matiraC]);

  const alteraNome = (evento) => {
    // setNome (estadoAnterior => {
    //   console.log(estadoAnterior);
      // return evento.target.value

      // console.log(evento.target.value)
    
  }

const renderizaResultado = () => {
  const soma = matiraA + matiraB + matiraC;
  const media = soma / 3 ;

  // console.log(soma);
  // console.log(media);

  if (media >= 7) {
    return (
      <p>Você foi aprovado</p>
    )
  } else {
    return(
      <p>Você nao foi aprovado</p>
    )
  }

}


  return (

    <form>

    <ul>
      {[1,2,3,4,5].map (item => (
        <li key={item}>{item}</li>
      ))}
    </ul>


      <input type="text" placeholder="Seu nome" onChange={alteraNome} />
      <input type="number" placeholder="Nota matéria A" onChange={(evento) => setMateriaA(parseInt(evento.target.value))}/>
      <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
      <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
      {renderizaResultado()}

    </form>

  )
}

export default Formulario;

