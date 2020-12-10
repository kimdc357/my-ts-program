import * as React from 'react'
import * as ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import store from './Redux/store'

class Index extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <div>
                index page 12131
     
                 </div>
            </Provider>
            
        )
    }
}

export default Index

ReactDom.render(
    <Index></Index>,
    document.getElementById("home")
);