import * as React from 'react'
import { Footer } from 'antd/lib/layout/layout'

class Footers extends React.Component{
    render(){
        return(
            <div>
                <Footer style={{ textAlign: 'center' }}>
                    my-programe @2020
                </Footer>
            </div>
        )
    }
}

export default Footers