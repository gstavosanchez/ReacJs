import React from 'react';
import './App.css';

/*function HelloWorld(proops){
  console.log(props);
  return(
  <div id="hello">
    <h3>{props.subtitle}</h3>
    {props.mytext}
    </div>
  )
} */
class HelloWorld extends React.Component{
  state = { ///Estado
    show:true
  }

  toggleShow = () =>{
    this.setState({show:!this.state.show})
  }

  render(){
    if(this.state.show){
      return(
        <div id="hello">
        <h3>{this.props.subtitle}</h3>
        {this.props.mytext}
        <button onClick={ this.toggleShow}>Toggle Show</button>
      </div>
      )
    } else {
      return <h1>No hay elemntos
        <button onClick={ this.toggleShow}>Toggle Show</button>
      </h1>
    }

  }
}
function App() {
  return (
    <div>
      This is my component:
      <HelloWorld mytext="Hola Mundo" subtitle="skfjlksjd;kfjsdkf"/>
      <HelloWorld mytext="Tu culo" subtitle="Componente2"/>
      <HelloWorld mytext="Hola!" subtitle = "Componente 3"/>
      </div>
  );
}
/////Propos
/* Es es lo mismo que lo de arriba escrito de formas diferentes
class App extends React.Component{
  render() {
    return <div>This is my component <HelloWorld/></div>
  }
}
const App = () => <div>This is my component:<HelloWorld/></div>

*/
export default App;
