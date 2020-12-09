import * as React from 'react'
import * as ReactDom from 'react-dom'


class Index extends React.Component{
    render(){
        return(
            <div>
                index page 12131

            </div>
        )
    }
}

export default Index

ReactDom.render(
    <Index></Index>,
    document.getElementById("home")
);