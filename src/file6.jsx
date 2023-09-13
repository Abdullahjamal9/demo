import React, { Component } from 'react';

class MyClass6 extends Component {

    
    x = 100
    y = 100
    key_name = 'none'
    state = { 
        a : 0
     }

    fun1 = (e)=>
    {
        this.key_name = e.key
        
        //alert(e.key)
    }
    componentWillMount()
    {
        setInterval(() =>{
            // w,a,s,d
            switch(this.key_name)
            {
                case 'ArrowUp':
                    this.y -= 10
                    break

                case 'ArrowDown':
                    this.y += 10
                    break  
                    
                case 'ArrowLeft':
                    this.x -=10
                    break
                    
                case 'ArrowRight':
                    this.x += 10
                    break    
            }

            this.setState({a : 0})

        } , 200)

    }
    render() { 

        return (
           <center><div>
                <div style = {{display:'flex', flexDirection:'column', width:'500px', height:'500px', fontSize:'38px'}}>

                    <div>Snake Game</div>
                    <input onKeyDown={this.fun1} autoFocus></input>

                    <div style ={{position:'relative', width:'500px', height:'500px', border:'1px solid blue', borderRadius:'10px'}}>
                        <div style = {{position:'absolute', left:this.x, top:this.y, width:'8px', height:'8px', border:'1px solid blue', borderRadius:'10px', background:'blue'}}>

                        </div>

                    </div>

                </div>

            </div></center>
        );
    }
}
 
export default MyClass6;