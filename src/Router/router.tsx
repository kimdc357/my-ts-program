import React from 'react'
import { Route, Switch } from 'react-router'
import {loginP} from '../pages/loginpage'
// import Menu from '../Page/menu'
//import Narbar from '../Page/narbar'

class Routers extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={loginP} />
                    {/* <Route path="/menu" component={Menu} /> */}
                </Switch>
            </div>
        )
    }
}


export default Routers