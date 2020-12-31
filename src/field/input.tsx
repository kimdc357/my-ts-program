import * as React from 'react'
import { Input } from 'antd'
import { InputProps } from 'antd/lib/input/Input'
import Password from 'antd/lib/input/Password';
import { connect } from 'react-redux'


export interface IInputProps{

}

export interface IInputState{

}

export type IptProps= IInputProps & InputProps;
export type IptState= IInputState & InputProps

export class Inputs extends React.Component<IptProps,IptState>{

    static Password: typeof Password;
    constructor(props?:IptProps){
        super(props)
    }
    

    render(){
        return(
            <Input {...this.props} /> 
        )
    }
}


const mapStateToProps=(state:any)=>{
    return{

    }
}

const mapDispatchToProps=(dispatch:any)=>{
    return{

    }
}

export  const InputsComponent=connect(mapStateToProps,mapDispatchToProps)(Inputs)