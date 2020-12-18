import * as React from 'react'
import * as ReactDom from 'react-dom'
import { connect } from 'react-redux'
import { Alert, Button } from 'antd';
import { hiddenAlert, showMsg } from '../store/actions'
import { State } from '../reducers';
import  LoginComponent  from '../components/login';
import { BasePage, basepageprops, basepagestate } from './basepage'
import './loginpage.scss'
import { BaseComponent } from '../components/basecomponent';

export interface ILoginPageProps extends basepageprops{


}

export interface ILoginPageState extends basepagestate{
  
}


export type loginpageprops = ILoginPageProps;
export type loginpagestate = ILoginPageState;




class LoginPage extends React.Component<loginpageprops, loginpagestate> {

    constructor(props:any){
        super(props)
    }


    render() {
        return (
            <BasePage {...this.props}>
                <div className="roo1111t">
                    <LoginComponent></LoginComponent>
                </div>
            </BasePage>



        )
    }
}

const mapStateToProps = (state: State) => ({
    isHiddenAlert:state.homepageState.hiddenAlert,
    message:state.homepageState.message
});



const mapDispatchToProps = (dispatch: any) => {
    return {
        showMsg: (msg: string) => { dispatch(showMsg(msg)) },
        hiddenAlert: (show: boolean) => { dispatch(hiddenAlert(show)) },


    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)
