import React, { useState } from 'react';
import { styles } from './styles/styles';
import './App.css';



export default function App(){

  function del(){
    setPrevInput('0');
    setNextInput('0');
    setSign({
      sign: '',
      trueFalse: false,
    })
  };

  function equals(){
    switch(sign.sign){
      case '+':
        setPrevInput(+prevInput + +nextInput)
        setNextInput('0')
        setSign({
          sign: '',
          trueFalse: false
        })
        break;
      
      case '-':
        setPrevInput(+prevInput - +nextInput)
        setNextInput('0')
        setSign({
          sign: '',
          trueFalse: false
        })
        break;

      case '*':
        setPrevInput(+prevInput * +nextInput)
        setNextInput('0')
        setSign({
          sign: '',
          trueFalse: false
        })
        break;  

      case '/':
        setPrevInput(+prevInput / +nextInput)
        setNextInput('0')
        setSign({
          sign: '',
          trueFalse: false
        })
        break;   
    }
  };

  const [prevInput, setPrevInput] = useState('0')
  const [nextInput, setNextInput] = useState('0')
  const [sign, setSign] = useState({
    sign: '',
    trueFalse: false
  })
  const classes = styles()

  console.log(prevInput)  
console.log(nextInput)
console.log(sign)

  return (
    <div className={classes.app}>
      <div className={classes.calcDiv}>
        <div className={classes.inputDiv}>{nextInput !== '0' ? nextInput : prevInput}</div>
        <div className={classes.buttonsDiv}>
          <div className={classes.numsDiv}>
              <div className={classes.nums}>
                <div className={classes.one} onClick={sign.trueFalse ? 
                () => {
                  if(nextInput === '0'){
                    setNextInput('1')
                  }else{
                  setNextInput(nextInput + 1)
                }
                }:
                () => {
                  if(prevInput === '0'){
                    setPrevInput('1')
                  }else{
                  setPrevInput(prevInput + 1)
                  }
                }}>1</div>
                <div className={classes.two} onClick={sign.trueFalse ? 
                () => {
                  if(nextInput === '0'){
                    setNextInput('2')
                  }else{
                  setNextInput(nextInput + 2)
                  }
                }:
                () => {
                  if(prevInput === '0'){
                    setPrevInput('2')
                  }else{
                  setPrevInput(prevInput + 2)
                  }
                }}>2</div>
                <div className={classes.three} onClick={sign.trueFalse ? 
                () => {
                  if(nextInput === '0'){
                    setNextInput('3')
                  }else{
                  setNextInput(nextInput + 3)
                  }
                }:
                () => {
                  if(prevInput === '0'){
                    setPrevInput('3')
                  }else{
                  setPrevInput(prevInput + 3)
                  }
                }}>3</div>
                <div className={classes.four} onClick={sign.trueFalse ? 
                () => {
                  if(nextInput === '0'){
                    setNextInput('4')
                  }else{
                  setNextInput(nextInput + 4)
                  }
                }:
                () => {
                  if(prevInput === '0'){
                    setPrevInput('4')
                  }else{
                  setPrevInput(prevInput + 4)
                  }
                }}>4</div>
                <div className={classes.five} onClick={sign.trueFalse ? 
                () => {
                  if(nextInput === '0'){
                    setNextInput('5')
                  }else{
                  setNextInput(nextInput + 5)
                  }
                }:
                () => {
                  if(prevInput === '0'){
                    setPrevInput('5')
                  }else{
                  setPrevInput(prevInput + 5)
                  }
                }}>5</div>
                <div className={classes.six} onClick={sign.trueFalse ? 
                () => {
                  if(nextInput === '0'){
                    setNextInput('6')
                  }else{
                  setNextInput(nextInput + 6)
                  }
                }:
                () => {
                  if(prevInput === '0'){
                    setPrevInput('6')
                  }else{
                  setPrevInput(prevInput + 6)
                  }
                }}>6</div>
                <div className={classes.seven} onClick={sign.trueFalse ? 
                () => {
                  if(nextInput === '0'){
                    setNextInput('7')
                  }else{
                  setNextInput(nextInput + 7)
                  }
                }:
                () => {
                  if(prevInput === '0'){
                    setPrevInput('7')
                  }else{
                  setPrevInput(prevInput + 7)
                  }
                }}>7</div>
                <div className={classes.eigth} onClick={sign.trueFalse ? 
                () => {
                  if(nextInput === '0'){
                    setNextInput('8')
                  }else{
                  setNextInput(nextInput + 8)
                  }
                }:
                () => {
                  if(prevInput === '0'){
                    setPrevInput('8')
                  }else{
                  setPrevInput(prevInput + 8)
                  }
                }}>8</div>
                <div className={classes.nine} onClick={sign.trueFalse ? 
                () => {
                  if(nextInput === '0'){
                    setNextInput('9')
                  }else{
                  setNextInput(nextInput + 9)
                  }
                }:
                () => {
                  if(prevInput === '0'){
                    setPrevInput('9')
                  }else{
                  setPrevInput(prevInput + 9)
                  }
                }}>9</div>
                <div className={classes.zero} onClick={sign.trueFalse ? 
                () => {
                  if(nextInput !== '0'){
                  setNextInput(nextInput + 0)
                  }
                }:
                () => {
                  if(prevInput !== '0'){
                  setPrevInput(prevInput + 0)
                  }
                }}>0</div>
              </div>
              <div className={classes.signs}>
                <div className={classes.plus} onClick={() => {
                  
                  setSign({
                    sign: '+',
                    trueFalse: true,
                  })
                }}>+</div>
                <div className={classes.mult} onClick={() => {
                  
                  setSign({
                    sign: '*',
                    trueFalse: true,
                  })
                }}>*</div>
                <div className={classes.divide} onClick={() => {
                  
                  setSign({
                    sign: '/',
                    trueFalse: true,
                  })
                }}>/</div>
                <div className={classes.minus} onClick={() => {
                  
                  setSign({
                    sign: '-',
                    trueFalse: true,
                  })
                }}>-</div>
              </div>
          </div>
          <div className={classes.signDiv}>
            <div className={classes.del} onClick={() => del()}>Del</div>
            <div className={classes.equals} onClick={() => equals()}>=</div>
          </div>
        </div>
      </div>
    </div>
  )
}
