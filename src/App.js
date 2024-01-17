// import logo from './logo.svg';
import React, {  useEffect, useState }  from 'react';
// import { Row,Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
     const[equal,setequal]=useState();
    const[btn1,setbtn1]=useState("2");
    const[btn2,setbtn2]=useState("8");
    const[btn3,setbtn3]=useState("5");
    const[btn4,setbtn4]=useState("");
    const[btn5,setbtn5]=useState("3");
    const[btn6,setbtn6]=useState("4");
    const[btn7,setbtn7]=useState("7");
    const[btn8,setbtn8]=useState("6");
    const[btn9,setbtn9]=useState("1");
    
    const game1 = () =>{
        if(btn2==""){
          setbtn2(btn1) 
          setbtn1("") 
        }
        if(btn4==""){
          setbtn4(btn1)
          setbtn1("")
        }
   }

    const game2 = () =>{
       if(btn1==""){
        setbtn1(btn2)
        setbtn2("")
       }
       if(btn3==""){
        setbtn3(btn2)
        setbtn2("")
       }
       if(btn5==""){
        setbtn5(btn2)
        setbtn2("")
       }
    }
    const game3 = () => {
        if(btn2==""){
          setbtn2(btn3)
          setbtn3("")
        }
        if(btn6==""){
          setbtn6(btn3)
          setbtn3("")
        }
    }
    const game4 = () => {
        if(btn1==""){
          setbtn1(btn4)
          setbtn4("")
        }
        if(btn5==""){
          setbtn5(btn4)
          setbtn4("")
        }
        if(btn7==""){
          setbtn7(btn4)
          setbtn4("")
        }
      }
    const game5 = () => {
       if(btn2==""){
        setbtn2(btn5)
        setbtn5("")
       }
       if(btn4==""){
        setbtn4(btn5)
        setbtn5("")
       }
       if(btn6==""){
        setbtn6(btn5)
        setbtn5("")
       }
       if(btn8==""){
        setbtn8(btn5)
        setbtn5("")
       }
    }
    const game6 = () => {
         if(btn3==""){
          setbtn3(btn6)
          setbtn6("")
         }
         if(btn5=="")
         {
          setbtn5(btn6)
          setbtn6("")
         }
         if(btn9=="")
         {
          setbtn9(btn6)
          setbtn6("")
         }

    }
    const game7 = () => {
      if(btn4=="")
      {
       setbtn4(btn7)
       setbtn7("")
      }
      if(btn8=="")
      {
       setbtn8(btn7)
       setbtn7("")
      }
    }
    const game8 = () => {
      if(btn5=="")
      {
       setbtn5(btn8)
       setbtn8("")
      }
      if(btn7=="")
      {
       setbtn7(btn8)
       setbtn8("")
      }
      if(btn9=="")
      {
       setbtn9(btn8)
       setbtn8("")
      }
    }
    const game9 = () => {
      if(btn6=="")
      {
       setbtn6(btn9)
       setbtn9("")
      }
      if(btn8=="")
      {
       setbtn8(btn9)
       setbtn9("")
      }
    }
    useEffect(() => {
      if(btn1=="1" && btn2=="2" && btn3=="3" && btn4=="4" && btn5=="5" && btn6=="6" && btn7=="7" && btn8=="8"){
        alert("you are won the game");
      }
    })
    
    const reset =() =>{
      setbtn1("2")
      setbtn2("8")
      setbtn3("5")
      setbtn4("")
      setbtn5("3")
      setbtn6("4")
      setbtn7("7")
      setbtn8("6")
      setbtn9("1")
    
  }
  
    
  return (
    <center>
        <div className='pb-4 line mb-5'>
       
            <h1 className='mb-4'>PUZZLE</h1>
            <div className='box ms-5'>            
                <div className='row'>
                  <div className='col-auto pb-2'><input type='button' className=' buttons' value={btn1} onClick={() => {game1()}}></input></div>
                  <div className='col-auto pb-2'><input type='button' className=' buttons' value={btn2}  onClick={() => {game2()}}></input></div>
                  <div className='col-auto pb-2'><input type='button' className=' buttons' value={btn3} onClick={() => {game3()}}></input></div>
                  
                  <div className='col-auto pb-2'><input type='button' className=' buttons' value={btn4} onClick={() => {game4()}}></input></div>
                  <div className='col-auto pb-2'><input type='button' className=' buttons' value={btn5}  onClick={() => {game5()}}></input></div>
                  <div className='col-auto pb-2'><input type='button' className=' buttons' value={btn6} onClick={() => {game6()}}></input></div>
                  
                
                  <div className='col-auto pb-2'><input type='button' className='buttons' value={btn7}  onClick={() => {game7()}}></input></div>
                  <div className='col-auto pb-2'><input type='button' className='buttons' value={btn8} onClick={() => {game8()}}></input></div>
                  <div className='col-auto pb-2'><input type='button' className='buttons' value={btn9} onClick={() => {game9()}}></input></div>
                </div>
                  
            </div>
            <div className='justify-content-center'>
              <button className='btn btn-primary p-4 mt-2 me-4' onClick={() => {reset()}}>RESET</button>
            </div>

      
        </div>
        </center>
  );
}

export default App;
