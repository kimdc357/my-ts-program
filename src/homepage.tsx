import * as React from 'react'
import * as ReactDom from 'react-dom'

class Homepage extends React.Component{

    render(){
        return(
            <div>
                homepage 123123123
            </div>
        )
    }
}

export default Homepage

ReactDom.render(
    <Homepage></Homepage>,
    document.getElementById("home")
);