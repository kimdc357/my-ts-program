import React from 'react'
import { Link } from 'react-router-dom'

class Narbar extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Link to='/'>home</Link>   <Link to='/menu'>menu</Link>
                </div>
            </div>
        )
    }
}

export default Narbar