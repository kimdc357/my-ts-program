import * as React from 'react'
import * as ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import createstore,{ history } from './Redux/store'
import { ConnectedRouter } from 'connected-react-router'
import Routers from './Router/router'
import Home from './Page/Home/home'

import './index.scss'

const store=createstore()

class Index extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Home/>
                </ConnectedRouter>
            </Provider>
            
        )
    }
}

export default Index

ReactDom.render(
    <Index></Index>,
    document.getElementById("home")
);