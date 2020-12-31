import React from 'react'
import {Route,Switch } from 'react-router'

import Home from './components/home'

class Routers extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
                </div>
        )
    }
}


export default Routers