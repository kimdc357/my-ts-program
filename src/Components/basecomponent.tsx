import * as React from 'react'

export interface IBaseCompontetProps {

}

export interface IBaseCompontetState {

}


export abstract class BaseCompontet<P extends IBaseCompontetProps, S extends IBaseCompontetState> extends React.Component<P, S>{

    constructor(props?: P) {
        super(props)
    }
    render() {
        return (<div className='program-component'>
            {this.props.children}
        </div>)

    }
}