import * as React from 'react'
import { connect } from 'react-redux'
import { rootState } from '../../../redux/reducer'
import { Dispatch } from 'redux'
import { movingMenu } from '../../../redux/page/action'
import Tree, { TreeNode } from 'rc-tree'


export interface IMovingMenuProps {
    movingMenu?: (pid: number, disting: string) => void,
    childrens?: any,
    defaultExpandedKeys?: any,
    defaultSelectedKeys?: any,
    defaultCheckedKeys?: any,
    movingResult?: any,
    treeData?: any,
}

export interface IMovingMenuState {
    movingMenu?: (pid: number, disting: string) => void,
    childrens?: any,
    defaultExpandedKeys?: any,
    defaultSelectedKeys?: any,
    defaultCheckedKeys?: any,
    movingResult?: any,
    treeData?: any,
}

export class BaseMovingMenu extends React.Component<IMovingMenuProps, IMovingMenuState>{

    constructor(props?: IMovingMenuProps) {
        super(props)
        this.state = {
            childrens: [],
            treeData: [],
        }
    }
    
    componentWillMount(){
        this.props.movingMenu(0,'left1')
    }

    render() {
        return (
            <div className='movingmenu'>
                <Tree
                    className="myCls" showLine //checkable
                    defaultExpandedKeys={this.state.defaultExpandedKeys} //展开特定的treeNodes
                    onExpand={this.onExpand}                             //是否在treeNode上展开
                    defaultSelectedKeys={this.state.defaultSelectedKeys} //默认选择的treeNodes
                    defaultCheckedKeys={this.state.defaultCheckedKeys}   //默认检查的treeNodes
                    onSelect={this.onSelect}                            //点击treeNode触发
                    onCheck={this.onCheck}                             //单击treeNode /复选框以触发
                    loadData={this.onLoadData}                          //异步加载数据，返回值应该是一个承诺
                >
                    {this.findRoot(this.props.movingResult)}

                </Tree>
            </div>
        )
    }

    onExpand(expandedKeys: any) {
        console.log('onExpand', expandedKeys, arguments);

        //this.setState({expandedKeys:expandedKeys});
    }

    onSelect(selectedKeys: any, info: any) {
        console.log('selected', selectedKeys, info);
        //this.setState({selectedKeys:selectedKeys});

        //this.selKey = info.node.props.eventKey;
    }


    onCheck(checkedKeys: any, info: any) {
        console.log('onCheck', checkedKeys, info);
        //this.setState({checkedKeys:checkedKeys});

    }


    findRoot(Data: any) {
         //console.log('findRoot')
         //console.log(this.state.treeData)
         //console.log(Data)
        if (Data != undefined) {
            if (Data.length > 0) {
                if (this.state.treeData.length == 0) {
                    //let tree = Data.filter((item: any) => item.pid == 0);
                    this.setState({ treeData: Data })

                }
                Data = this.state.treeData
                var nodeStr = Data.map((node: any) => {
                    if (node.isLeaf == 0) {
                        return (
                            <TreeNode title={node.name} key={node.id}>{this.findChild(node)}</TreeNode>
                        );
                    } else {
                        return (
                            <TreeNode title={node.name} key={node.id} isLeaf={true}>{this.findChild(node)}</TreeNode>
                        );
                    }
                });
                return nodeStr;
            }
        }
    }

    findChild(node: any) {
        if (node != null) {
            if (node.child != null) {
                // console.log(node)
                let str = node.child.map((n: any) => {
                    let a = n.map((item: any) => {
                        if (item.isLeaf == 0) {
                            return (
                                <TreeNode title={item.name} key={item.id}>{this.findChild(item)}</TreeNode>
                            );
                        } else {
                            return (
                                <TreeNode title={item.name} key={item.id} isLeaf={true}></TreeNode>
                            );
                        }
                    })
                    return a
                })
                return str;
            }
        }
    }


    onLoadData = (treeNode: any): Promise<void> => {
        console.log('onLoadData')
        console.log(treeNode)

        this.props.movingMenu(treeNode.key,'left1')

        return new Promise((resolve) => {
            if (treeNode.child != null && treeNode.child.length > 0) {
                resolve();
            } else {
                setTimeout(() => {

                    let treeData = this.props.movingResult;
                    let setData = this.state.treeData
                    //动态加载树节点
                    this.createDynamicNode(setData, treeNode.props.eventKey, treeData);

                    resolve();
                }, 500);
            }
        });
    }

    createDynamicNode(treeData: any, eventKey: any, setData: any) {
        //  console.log('createDynamicNode')
        //  console.log(treeData,eventKey)

        treeData.map((item: any) => {
            if(item.child!=null){
                const tree=this.testmaps(treeData,eventKey,setData,)
                this.setState({ treeData: tree })
            }
            if (eventKey == item.id) {
                //const tree = this.testmap(test, item.name, item.id, setData)
                const tree =this.testmaps(treeData,eventKey,setData)
                this.setState({ treeData: tree })
            }
        });
    }


    testmaps=(data:any,id:any,setdata:any)=>{
        return data.map((item: any) =>
            item.child == null ?
                item.id == id ?
                    {
                        ...item,
                        child: [
                            setdata
                        ]
                    } : item
                : this.testmapChilds(item, id, setdata)
        );
    }

    testmapChilds = (data: any, id: any, setdata: any) => {
        let child = data.child.map((items: any) =>
            items.map((item: any) =>
                item.child == null ?
                    item.id == id ?
                        {
                            ...item,
                            child: [
                                setdata
                            ]
                        } : item
                    : this.testmapChilds(item, id, setdata)
            )
        )
        let returnItem = Object.assign(data, { child: child });
        return returnItem
    }


}

const mapStateToProps = (state: rootState) => {
    return {
        movingResult: state.pageState.movingResult
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        movingMenu: (pid: number, disting: string) => dispatch(movingMenu(pid, disting)),
    }
}

export const MovingMenuComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(BaseMovingMenu)