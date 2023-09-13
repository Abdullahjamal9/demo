import React, { Component } from 'react';
import "./App.css"


class MyClass5 extends React.Component {
    state = {  

        Result : ''
    } 

    MyX = true
    c1 = ''
    c2 = ''
    c3 = ''
    c4 = ''
    c5 = ''
    c6 = ''
    c7 = ''
    c8 = ''
    c9 = ''

    Box_Style = {

        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        border:'white 3px solid',
        borderRadius:'50px',
        margin:'10px',
        cursor:'pointer',
        background:'darkblue',
        width:'100px',
        height:'100px',
        fontSize:'50px',
        color:'white',
        fontWeight:'bolder',
        

    }

    MyEnter = (e)=>
    {
        e.target.style.background = 'red'
    }
    MyLeave = (e)=>
    {
        e.target.style.background = 'darkblue'
    }

    myClick = (e)=>
    {
        //alert(a.target.id)
        if (this.MyX)
        {
            this[e.target.id] = 'X'
            this.MyX = false
        }
        else
        {
            this[e.target.id] = "O"
            this.MyX = true
        }
        this.setState({Result:'----'})

        if ( this.c1 == 'X' && this.c2 == 'X' && this.c3 == 'X' )
            this.setState({Result : 'Player 1: Win'})

        else if ( this.c4 == 'X' && this.c5 == 'X' && this.c6 == 'X' )
            this.setState({Result : 'Player 1: Win'})
        else if ( this.c7 == 'X' && this.c8 == 'X' && this.c9 == 'X' )
            this.setState({Result : 'Player 1: Win'})
 
        else if ( this.c1 == 'X' && this.c4 == 'X' && this.c7 == 'X' )
            this.setState({Result : 'Player 1: Win'})
        else if ( this.c2 == 'X' && this.c5 == 'X' && this.c8 == 'X' )
            this.setState({Result : 'Player 1: Win'})
        else if ( this.c3 == 'X' && this.c6 == 'X' && this.c9 == 'X' )
            this.setState({Result : 'Player 1: Win'})

        else if ( this.c1 == 'X' && this.c5 == 'X' && this.c9 == 'X' )
            this.setState({Result : 'Player 1: Win'})
        else if ( this.c3 == 'X' && this.c5 == 'X' && this.c7 == 'X' )
            this.setState({Result : 'Player 1: Win'})

        if ( this.c1 == 'O' && this.c2 == 'O' && this.c3 == 'O' )
            this.setState({Result : 'Player 2: Win'})

        else if ( this.c4 == 'O' && this.c5 == 'O' && this.c6 == 'O' )
            this.setState({Result : 'Player 2: Win'})
        else if ( this.c7 == 'O' && this.c8 == 'O' && this.c9 == 'O' )
            this.setState({Result : 'Player 2: Win'})

        else if ( this.c1 == 'O' && this.c4 == 'O' && this.c7 == 'O' )
            this.setState({Result : 'Player 2: Win'})
        else if ( this.c2 == 'O' && this.c5 == 'O' && this.c8 == 'O' )
            this.setState({Result : 'Player 2: Win'})
        else if ( this.c3 == 'O' && this.c6 == 'O' && this.c9 == 'O' )
            this.setState({Result : 'Player 2: Win'})

        else if ( this.c1 == 'O' && this.c5 == 'O' && this.c9 == 'O' )
            this.setState({Result : 'Player 2: Win'})
        else if ( this.c3 == 'O' && this.c5 == 'O' && this.c7 == 'O' )
            this.setState({Result : 'Player 2: Win'})

    }

    render() { 
        return <div>

        <div style = {{background: 'rgb(200,250,50)', display:'flex', justifyContent:'center'}}><h1>Tic Tac Toe</h1></div>
    
        <div style = {{ background:'rgb(200,150,50)' ,display:'flex', justifyContent:'center', }}>
        <div style = {this.Box_Style} onMouseEnter = {this.MyEnter} onMouseLeave = {this.MyLeave} onClick = {this.myClick} id = 'c1' > {this.c1} </div>
        <div style = {this.Box_Style} onMouseEnter = {this.MyEnter} onMouseLeave = {this.MyLeave} onClick = {this.myClick} id = 'c2'   > {this.c2} </div>
        <div style = {this.Box_Style} onMouseEnter = {this.MyEnter} onMouseLeave = {this.MyLeave} onClick = {this.myClick} id = 'c3'   > {this.c3} </div>
        </div>

        <div style = {{ background:'rgb(200,150,50)' ,display:'flex', justifyContent:'center', }}>
        <div style = {this.Box_Style} onMouseEnter = {this.MyEnter} onMouseLeave = {this.MyLeave}  onClick = {this.myClick} id = 'c4'  > {this.c4} </div>
        <div style = {this.Box_Style} onMouseEnter = {this.MyEnter} onMouseLeave = {this.MyLeave} onClick = {this.myClick} id = 'c5'  > {this.c5} </div>
        <div style = {this.Box_Style} onMouseEnter = {this.MyEnter} onMouseLeave = {this.MyLeave} onClick = {this.myClick} id = 'c6'   > {this.c6} </div>
        </div>

        <div style = {{ background:'rgb(200,150,50)' ,display:'flex', justifyContent:'center', }}>
        <div style = {this.Box_Style} onMouseEnter = {this.MyEnter} onMouseLeave = {this.MyLeave}  onClick = {this.myClick} id = 'c7'  > {this.c7} </div>
        <div style = {this.Box_Style} onMouseEnter = {this.MyEnter} onMouseLeave = {this.MyLeave}  onClick = {this.myClick} id = 'c8'  > {this.c8} </div>
        <div style = {this.Box_Style} onMouseEnter = {this.MyEnter} onMouseLeave = {this.MyLeave}  onClick = {this.myClick} id = 'c9'  > {this.c9} </div>
        </div>

        <div style = {{background: 'rgb(200,250,0)', display:'flex', justifyContent:'center'}}><h1>{this.state.Result}</h1></div>







        </div>
        ;
    }
}
 
export default MyClass5;