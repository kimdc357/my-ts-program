import React from 'react'
import { Link } from 'react-router-dom'
import { State } from '../Redux/reducer'
import { connect } from 'react-redux'

export interface IMenuProps {
    pathname: string
    search: string
    hash: string
}

export interface IMenuState {

}


class Menu extends React.Component<IMenuProps,IMenuState>{

    constructor(props?:IMenuProps){
        super(props)
        console.log(props);
    }

    componentDidMount(){
        console.log('3333333333333333333')
        console.log(this.state)
        console.log(this.props)
    }

    componentDidUpdate(){
        console.log('4444444444444')
        console.log(this.state)
        console.log(this.props)
    }

    

    render(){
        return(
            <div>
                menu 22222222222

                <Link to='/menu?id=123&name=456' >data1</Link>
                <Link to='/menu#data123' >data2</Link>
                <div>
                1:{this.props.pathname}
                2:{this.props.hash}
                3:{this.props.search}
                </div>

            </div>

        )
    }
}

const mapStateToProps = (state:any) => ({
    
    pathname: state.router.location.pathname,
    search: state.router.location.search,
    hash: state.router.location.hash,
    
})

export default connect(mapStateToProps)(Menu)