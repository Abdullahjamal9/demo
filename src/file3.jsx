import React, { Component } from 'react';
import './App.css'


class MyClass3 extends Component {
    state = {  } 
    render() { 

        const MyStyle = {
            background:'white',
            width:'200px',
            
            border: '2px black solid',
            boxShadow: '12px 13px 14px grey',
            borderRadius: '20px',
            borderBottom: '150px',
            margin: '40px',
            fontSize:'50px',
            padding:'20px',
            fontFamily:'Gadugi',
        }        
        return (

            <div className='App-header'>
                <h1> Hello</h1>
                <div style = {{display: 'flex'}}></div>
                <input  style = {MyStyle} ></input>



             </div>
        );
    }
}
 
export default MyClass3;