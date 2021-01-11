import * as React from 'react'
import { Button } from 'antd'
import { ButtonType, ButtonProps } from 'antd/lib/button/button'
import { connect } from 'react-redux'



export interface IButtonsProps {
    btnname?: string,
    btntype?: ButtonType,
    onClick?: (e: any) => void
}

export interface IButtonsState {
    btnname?: string,
    btntype?: ButtonType
}


export type btnprops = IButtonsProps & ButtonProps
export type btnstate = IButtonsState & ButtonProps



export class BaseButton extends React.Component<btnprops, btnstate>{

    constructor(props?: btnprops) {
        super(props)
    }

    render() {
        return (
            <Button {...this.props}
                onClick={(e) => this.onClickBtn(e)}

            >
            </Button>
        )
    }

    onClickBtn = (e: any) => {
        // console.log(111)
        if (this.props.onClick)
            this.props.onClick(e);
    }

}

const mapStateToProps = (state: any) => {
    return {

    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {

    }
}

export const ButtonComponent = connect(mapStateToProps, mapDispatchToProps)(BaseButton)

