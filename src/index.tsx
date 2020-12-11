import * as React from 'react'
import * as ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import createstore,{ history } from './Redux/store'
import { ConnectedRouter } from 'connected-react-router'
import Routers from './Router/router'

const store=createstore()

class Index extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Routers/>
                    {console.log('1111111111111111111')}
                   {console.log(history)}   
                    
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