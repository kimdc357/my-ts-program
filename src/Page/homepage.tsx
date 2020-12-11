import * as React from 'react'
import * as ReactDom from 'react-dom'
import { messageAction } from '../Redux/actions'
import createstore from '../Redux/store'

class Homepage extends React.Component{

    render(){
        return(
            <div>
                homepage 1111111111
                <button onClick={this.onClicks}>but</button>
            </div>
        )
    }

    onClicks(){
        const action=messageAction('seccess')
        const store=createstore()
        console.log(action)
        console.log(store)
        //store.dispatch(action)
    }


}

export default Homepage

