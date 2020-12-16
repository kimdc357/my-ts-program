import * as React from 'react'
import { IBasePageProps, IBasePageState } from '../pages/basepage'

export interface IBaseComponentProps {
    componenthidden?: boolean;
    clssName?: string;
}

export interface IBaseComponentState {
    componenthidden?: boolean;
}

export type basecomponentprops = IBaseComponentProps & IBasePageProps;
export type basecomponentstate = IBasePageState & IBaseComponentState;


export class BaseComponent<P extends basecomponentprops, S extends basecomponentstate> extends React.Component<P, S>{

    private _className = "program-component";


    constructor(props?: P) {
        super(props)
    }
    render() {
        return (
            <div className={this._className + " " + this.props.clssName ?? ""}>
                {this.props.children}
            </div>
        )

    }

    getClassName(className: string) {
        return "components " + className;
    }
}