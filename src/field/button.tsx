import * as React from 'react'
import { Button  } from 'antd'
import { ButtonType ,BaseButtonProps } from 'antd/lib/button/button'
import { connect } from 'react-redux'
import { State } from '../redux/reducer'


export interface IButtonsProps{
    btnname?:string
    btntype?:ButtonType
}

export interface IButtonsState{
    btnname?:string
    btntype?:ButtonType
}


export type btnprops=IButtonsProps & BaseButtonProps
export type btnstate=IButtonsState & BaseButtonProps



export class Buttons extends React.Component<btnprops,btnstate>{

    constructor(props?:btnprops){
        super(props)
    }

    render(){
        return(
            <Button {...this.props} 
                onClick={this.onClickBtn}
                
            >
            </Button>
        )
    }

    onClickBtn(){

    }

}

const mapStateToProps=(state:State)=>{
    return{
       
    }
}

const mapDispatchToProps=(dispatch:any)=>{
    return{
       
    }
}

export const ButtonAPP=connect(mapStateToProps,mapDispatchToProps)(Buttons)

