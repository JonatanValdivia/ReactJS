//Temos que informar ao react em qual componente que ele irá trabalhar (wraper)

const root = document.getElementById('root')
let nome = "Jonatan"

class CompA extends React.Component{
  render(){
    return(
      <h3>Componente A</h3>
    )
  }
}

class CompB extends React.Component{
  render(){
    return(
      <h3>Componente B</h3>
    )
  }
}

class ComponentePai extends React.Component{
  render(){
    return(
      <div>
        <CompA/>
        <hr/> 
        <CompB/>
      </div>
    )
  }
}

//Princípios básicos de um function component
class MeuPrimeiroComponente extends React.Component{
  render(){
    return (
      <div>
        <p>Herdando o <b>React.Component</b></p>
        <p>E chamando o meu component</p>
      </div>
    )
  }
}

function MeuComponente(){ //Function component
  return(
    <div>
      <h3>React</h3>
      <p>Utilizando do React.js para fins de aprendizado, por: {nome}.</p>
    </div>
  );
}

function ComponentComParametro(props){
  return(
    <div>
      <p>Olá, <b>{props.nome}</b>! <br/> Com o apelido de <b>{props.apelido}</b>.
      </p>
    </div>
  )
}

class ComponenteComParametros2 extends React.Component{
  render(){
    return(
      <div>
        <p>Olá novamente, {this.props.nome}, com o apelido de {this.props.apelido}</p>
      </div>
    )
  }
}

function A (props){
  return(
    <div>
      {/* Primeira chave indica um script JavaScript e as segundas representam um objeto */}
      <p style={{color: "red", backgroundColor: 'black', padding: '20px'}}>{props.nome}</p>
    </div>
  )
}

function B (props){
  return(
    <div>
      <p style={{color: 'blue', backgroundColor: 'gray', padding: '20px'}}>{props.nome}</p>
    </div>
  )
}

function C (props){
  return(
    <div>
      <p style={{color: 'orange', backgroundColor: 'black' , padding: '20px'}}>{props.nome}</p>
    </div>
  )
}

function D (props){
  return(
    <div>
      <p style={{color: 'green', backgroundColor: 'gray' , padding: '20px'}}>{props.nome}</p>
    </div>
  )
}

class Adicao extends React.Component{
  render(){
    return(
      <div className="red">
        <p>O resultado de {this.props.a} + {this.props.b} = {this.props.a + this.props.b} <br/> Cálculo feito por {this.props.nome}</p>
      </div>
    )
  }
}

class Multiplicacao extends React.Component{
  render(){
    return(
      <div className="green">
        <p>O resultado de {this.props.a} x {this.props.b} = {this.props.a * this.props.b} <br/> Cálculo feito por {this.props.nome}</p>
      </div>
    )
  }
}

//ReactDOM render dentro de um componente
function Tempo(){
  const conteudo = (
    <div>
      <h2>Tempo atual</h2>
      <p>Estamos na seguinte hora: {new Date().toLocaleString()}</p>
    </div>
  )

  ReactDOM.render(
    conteudo,
    document.getElementById('render')
  )
}

setInterval(Tempo, 1000);

///

//Trabalhando com props/parâmetros em react.js
function App (){
  return(
    <div>
      <A nome="Ana"/>
      <B nome="Bia"/>
      <C nome="Cia"/>
      <D nome="Dia"/>
      <Adicao a={13} b={187} nome={"Jonatan"}/>
      <Multiplicacao a={14} b={39} nome={"Jonatan"} className="red"/>
    </div>
  )
}

//INTRODUÇÃO AO CONCEITO DE STATE
class App2 extends React.Component{
  
  constructor(){ //É escutado antes do método Render
    super()
    //Construimos dentro do contrutor uma coisa chamda State
    this.state = {
      nome: 'Jonatan',
      idade: 17
    }
  }

  render(){
    return(
      <div>
        <hr style={{height: '2px', backgroundColor: 'black'}}/>
        <p>Nome: {this.state.nome}, apelidado de {this.props.apelido}</p>
        <p>Idade: {this.state.idade} </p>
      </div>
    )
  }
}

class App3 extends React.Component{

  constructor(){
    super()
    this.state = {
      hobbie: 'Ler livros',
      titulo: 'O poder do subconsciente'
    }
  }

  render(){
    // this.props.autor = 'não sei men' -> dará erro por serem valores fixos
    // this.state.hobbie = 'Nadar' -> há como alterá-los, por serem valores mutáveis
    return(
      <div>
        <p>Hobbie: {this.state.hobbie}</p>
        <p>Livro preferido: {this.state.titulo}</p>
        <p>Autor: {this.props.autor}</p>
      </div>
    )
  }
}

//Agora podemos utilizar  uma expressão do ReactDOM para apresentar o conteúdo
ReactDOM.render(
  <div>
    <ComponentComParametro nome="Jonatan" apelido="Jon"/>
    <ComponenteComParametros2 nome="Jonatan V. Valdivia" apelido="Tõinta"/>
    <App/>
    <App2 apelido="Jon"/>
    <App3 autor="Joseph Murphy"/>
  </div>,
  
  

  //Conteúdo, cujo não pode ser renderizado com o HTML dentro de aspas, no caso, teremos que utilizar de JSX
  // JSX: sintaxe semelhante a do HTML, porém sem dar erros, mesmo estando dentro de um ambiente de JavaScript
  root //O elemento wraper
)
