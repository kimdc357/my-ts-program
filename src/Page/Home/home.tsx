import * as React from 'react'
import { Layout} from 'antd'
import Headers from './header'
import Footers from './footer'
import Contents from './content'


class Home extends React.Component{
    render(){
        return(
            <div>
                <Layout>
                    <Headers/>
                    <Contents/>
                    <Footers/>
                </Layout>
            </div>
        )
    }
}

export default Home