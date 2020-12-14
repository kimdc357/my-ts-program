import React from 'react'
import {Route,Switch } from 'react-router'
import Homepage from '../Page/homepage'
import Menu from '../Page/menu'
import Narbar from '../Page/narbar'
import Home from '../Page/Home/home'

class Routers extends React.Component{
    render(){
        return(
            <div>
                <Narbar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/menu" component={Menu} />
                </Switch>
                </div>
        )
    }
}


export default Routers