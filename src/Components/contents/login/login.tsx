import * as React from 'react'
import './login.scss'
import { Button, Input, Row, Col, Form } from 'antd'
import { connect } from 'react-redux'
import { rootState } from '../../../redux/reducer'
import { Dispatch } from 'redux'
import { IButtonsProps, IButtonsState, ButtonComponent, BaseButton } from '../../../field/button'
import { InputsComponent, IptProps, IptState } from '../../../field/input'
import { Verifaction } from './verifaction'
import { AlertComponents, IAlertProps, IAlertState } from '../../message/alert'
import { checkVerifactions, alertMessage} from '../../../redux/page/action'
import { login } from '../../../redux/user/action'
import { IUserInfo } from '../../../redux/user/reducer'
import { IAlertInfo } from '../../../redux/page/reducer'

export interface ILoginProps {
    login?: (userid: string, pwd: string) => void,
    user: IUserInfo,
    checkVerifactions?:(cv:string,v:string) => void,
    verifactionResult?:boolean
}

export interface ILoginState {
    login?: (userid: string, pwd: string) => void;
    userid: string,
    pwd: string,
    
}

type loginprops = ILoginProps & IButtonsProps & IptProps & IAlertProps;
type loginstate = ILoginState & IButtonsState & IptState & IAlertState;

export class BaseLogin extends React.Component<loginprops, loginstate>{

    constructor(props?: loginprops) {
        super(props)
        this.state = {
            userid: '',
            pwd: ''
        }
    }

    render() {
        return (
            <div className="login">
                <Row>
                    <Col span={8}>
                    </Col>
                    <Col span={8}>
                        <div className="logs">
                            <InputsComponent placeholder="用户名" onChange={this.ChangeUserid.bind(this)} />
                            <Input.Password placeholder="密码" onChange={this.ChangePwd.bind(this)} />
                            <Verifaction onChangeyan={(v, cv) => { this.onChangeyan(v, cv) }}></Verifaction>
                            <BaseButton type='primary' onClick={(e:any) => { this.BtnLogin(e) }} disabled={this.props.verifactionResult??true}>Login</BaseButton>
                            {/* <ButtonComponent type='primary' block >Login</ButtonComponent>           */}
                        </div>
                    </Col>
                    <Col span={8}><AlertComponents></AlertComponents></Col>
                </Row>
            </div>
        )
    }

    ChangeUserid(e: any) {
        this.setState({
            userid: e.target.value
        })
    }

    ChangePwd(e: any) {
        this.setState({
            pwd: e.target.value
        })
    }

    BtnLogin = (e: any) => {
        this.props.login(this.state.userid, this.state.pwd)
    }

    onChangeyan = (v: string, cv: string) => {
        this.props.checkVerifactions(cv,v)
        //console.log(this.props.verifactionResult)
        //console.log(this.props.user)
    }

}

const mapStateToProps = (state: rootState) => {
    return {
        alert: state.pageState.alert,
        user: state.userinfoState.userinfoState,
        verifactionResult:state.pageState.verifactionResult
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        login: (userid: string, a: string) => { dispatch(login(userid, a)) },
        alertMessage:(alert:IAlertInfo)=>{dispatch(alertMessage(alert))},
        checkVerifactions: (cv: string,v:string) => { dispatch( checkVerifactions(cv,v) ) },
    }
}

export const LoginComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(BaseLogin)