import * as React from 'react'
import { connect } from 'react-redux'
import { Alert, Button, Input } from 'antd';
import { hiddenAlert, showMsg } from '../store/actions'
import { State } from '../reducers';
import { BaseComponent, basecomponentprops, basecomponentstate } from './basecomponent'
import './login.scss'
interface ILoginProps {

    visable?: boolean;
    showMsg?:any;
}

interface ILoginState {
    showMsg?:any;
}

type baseProps = ILoginProps & basecomponentprops;
type baseState = ILoginState & basecomponentstate;



class Login extends BaseComponent<baseProps, baseState> {
    constructor(props?: baseProps) {
        super(props);
    }
    render() {
        return (
            <BaseComponent clssName="login" {...this.props}>
                <div className={this.getClassName("login")}>
                    <Input></Input>
                    <Input type="password"></Input>
                    <Button onClick={()=>this.onBtnClick()}>t</Button>
                    <Button>c</Button>
                </div>
            </BaseComponent>

        )
    }

    onBtnClick() {
        console.log("111")
        this.props.showMsg("dddddd");
    }


}



const mapStateToProps = (state: State) => {
    return {
      
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        showMsg: (msg: string) => { dispatch(showMsg(msg)) }

    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

