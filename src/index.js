import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
document.body.style.backgroundImage = "url('5.jpg')";
class Calculator extends React.Component{
   constructor(props)
    {
      super(props)
      this.state={scale :"c" , temp :0 }
    }

   handleCelsius = (e)=>{
     this.setState({scale:"c",temp:e.target.value})
     
   }

    handleFahrenhit = (e)=>{
      this.setState({scale:"f",temp:e.target.value})      

    }

    handleKelvin = (e)=>{
      this.setState({scale:"k",temp:e.target.value})      

    }


    render(){
        const temp = this.state.temp;
        const scale = this.state.scale
        const Celsius = scale === 'f' ? ((temp - 32)*5/9) : temp ;
        const Fahrenhit = scale === 'c' ? ((temp*9/5)+32) : temp;
        const Kelvin = scale === ' ' ?  parseInt(temp)-273.18: (parseInt(temp)+273.18) ;
      
      return(
        <div>
        <fieldset>
          <legend> Scale Celsius</legend>
          <input value={Celsius} onChange={this.handleCelsius}/>
          
        </fieldset>

        <fieldset>
        <legend> Scale Fahrenhit </legend>
        <input value={Fahrenhit} onChange={this.handleFahrenhit}/>
        
      </fieldset>

      <fieldset>
        <legend> Scale Kelvin </legend>
        <input value={Kelvin} onChange={this.handleKelvin}/>
        
      </fieldset>
      </div>

      )
    }
    


}
ReactDOM.render(
  <>
  <div>
  <p>
  {new Date().toLocaleDateString()}.
  
  <center><h1> Welcome to temperature convertor </h1>
  <p>just type the number to be convert in celsius or Fahrenhit </p>

  <Calculator/>
  
  </center>
  </p>
  </div>
   </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
