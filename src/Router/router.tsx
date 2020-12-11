import React from 'react'
import {Route,Switch } from 'react-router'
import Homepage from '../Page/homepage'
import Menu from '../Page/menu'
import Narbar from '../Page/narbar'

class Routers extends React.Component{
    render(){
        return(
            <div>
                <Narbar/>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/menu" component={Menu} />
                </Switch>
                </div>
        )
    }
}


export default Routers