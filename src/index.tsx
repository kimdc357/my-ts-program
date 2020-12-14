import * as React from 'react'
import * as ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import configureStore, { history } from './configureStore'
import { ConnectedRouter } from 'connected-react-router'
import Routers from './Router/router'
import 'antd/dist/antd.css';

const store = configureStore()
class Index extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Routers />
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