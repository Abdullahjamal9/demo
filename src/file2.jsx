import React, { Component } from 'react';
import './App.css'

class MyClass1 extends Component {
    state = { 
        v1 : 0
     } 

     a = 2
    render() { 
        const MyStyle = {
            background:'blue',
            width:'200px',
            height:'200px',
            border: '2px black solid',
            boxShadow: '12px 13px 14px grey',
            borderRadius:'20px',
            borderBottomRightRadius:'100px',
            margin: '40px',
            fontSize:'50px',
            padding:'20px',
            fontFamily:'Gadugi',
        }
  

 
        return (
            <div className='App-header'>
                <h1>hello hh</h1>
                <div style = {{display:'flex'}}>
                <div style={MyStyle} >
                    <center><i><b>Good</b></i></center>

                </div>
                <div style={MyStyle} >
                    <center><i><b>a = {this.a}
                    </b></i></center>

                </div>
                <div style={MyStyle} >
                    <center><i><b>Good</b></i></center>

                </div>
                </div>
                <button onClick={
                    ()=>{
                        this.a++
                        this.setState( {v1 : 0} )

                    }

                }
                > Click</button>
                <br></br>
                <button onClick={
                    ()=>
                    {
                        this.a--
                        this.setState({v1 : 0})
                    }
                }
                >Ok</button>
            </div>
        );
    }
}
 
export default MyClass1;