import * as React from 'react'
import * as ReactDom from 'react-dom'

class Homepage extends React.Component{

    render(){
        return(
            <div>1111
                homepage 12312312355555555555
            </div>
        )
    }
}

export default Homepage

ReactDom.render(
    <Homepage></Homepage>,
    document.getElementById("home")
);