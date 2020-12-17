import * as React from 'react'
import * as ReactDom from 'react-dom'
import { message_info } from '../Redux/actions'
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
        const action=message_info('seccess')
        const store=createstore()
        console.log(action)
        console.log(store)
       
    }


}

export default Homepage

