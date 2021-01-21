import * as React from 'react'
import { connect } from 'react-redux'
import { rootState } from '../../../redux/reducer'
import { Dispatch } from 'redux'
import { headMenu } from '../../../redux/page/action'
import Tree, { TreeNode } from 'rc-tree'
import { takeRightWhile } from 'lodash'
import { iteratorSymbol } from 'immer/dist/internal'


export interface ILeftMenuProps {
    dynamicNodeList?: any,
    defaultExpandedKeys?: any,
    defaultSelectedKeys?: any,
    defaultCheckedKeys?: any,
    treeData?: any,
    headMenu?: (menu: {
        resolve?: (value?: any) => void,
    }) => void,
    headMenuResult?: any,
    childrens?: any
}

export interface ILeftMenuState {
    collapsed?: boolean,
    dynamicNodeList?: any,
    defaultExpandedKeys?: any,
    defaultSelectedKeys?: any,
    defaultCheckedKeys?: any,
    treeData?: any,
    expandedKeys?: any,
    selectedKeys?: any,
    checkedKeys?: any,
    headMenu?: (menu: {
        resolve?: (value?: any) => void,
    }) => void,
    headMenuResult?: any,
    childrens?: any
}

export class BaseLeftMenu extends React.Component<ILeftMenuProps, ILeftMenuState>{

    constructor(props?: ILeftMenuProps) {
        super(props)
        this.state = {
            collapsed: false,
            treeData: [
            ],
            childrens: [],
            headMenuResult: ''
        };
    }

    componentWillMount() {
        this.props.headMenu({});

    }


    render() {


        return (
            <div className='leftmenu'>

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
                    {this.findRoot(this.props.headMenuResult)}
                    {/* <TreeNode title="根节点" key="0-0">
                            {this.findRoot(this.props.headMenuResult)}
                </TreeNode> */}
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

    // onLoadData=(treeNode:any):Promise<void>=>{
    //     console.log('onLoadData')
    //     console.log(treeNode)
    //     // if(this.props.headMenuResult!=null){
    //     //     console.log(this.props.headMenuResult)
    //     // }
    //     console.log(treeNode.children)


    //     return new Promise((resolve) => {
    //         // treeNode.children={id:'i123d', pId:'2', rootPId:null}//[<TreeNode title={111} key={123}></TreeNode>]
    //         // console.log(treeNode.children)
    //         // resolve();
    //          if(treeNode.key!=null&&treeNode.key.length<0){
    //              resolve();
    //          }else{
    //              setTimeout(() => {
    //                // console.log(this.props.headMenuResult)
    //                 //let treeData=this.props.headMenuResult//this.state.headMenuResult;
    //                 let treeData=this.state.treeData//this.state.headMenuResult;
    //                 //动态加载树节点
    //                 console.log(111111111111111)
    //                 console.log(treeData)
    //                 this.createDynamicNode(treeData,treeNode.key,treeNode);
    //                 this.setState({ treeData });
    //                 resolve();
    //             },500);
    //          }
    //     });
    // }

    // createDynamicNode(node:any,id:any,tree:any){
    //     console.log('createDynamicNode')
    //     //tree.children(<TreeNode title={111} key={123}></TreeNode>)
    //     // return(
    //     //     tree.children(<TreeNode title={111} key={123}></TreeNode>)
    //     // )
    //     // if(node!=null){
    //     //     if(node.length>0){
    //     //          var str=node.map((n:any)=>{
    //     //             if(n.pid==id){
    //     //             if(n.isLeaf==0){
    //     //                return(
    //     //                    <TreeNode title={n.name} key={n.id}></TreeNode>
    //     //                );
    //     //             }else{
    //     //                 return(
    //     //                     <TreeNode title={n.name} key={n.id} isLeaf={true}></TreeNode>
    //     //                 );
    //     //             }
    //     //             }
    //     //          })
    //     //          return str;
    //     //    }
    //     //    }
    //     node.forEach((item:any)=>{

    //                 item.child=[
    //                     {title: '子节点1', key: '0-0-1-0',level:2},
    //                     {title: '子节点2', key: '0-0-1-1',level:2}
    //                 ]


    //     })
    // }



    findRoot(Data: any) {
        // console.log('findRoot')
        // console.log(this.state.treeData)

        if (Data != undefined) {
            if (Data.length > 0) {
                if (this.state.treeData.length == 0) {
                    let tree = Data.filter((item: any) => item.pid == 0);
                    this.setState({ treeData: tree })
                    //    console.log(33333333333333333) 
                    //    console.log(this.state.treeData)
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
        return new Promise((resolve) => {
            if (treeNode.child != null && treeNode.child.length > 0) {
                resolve();
            } else {
                setTimeout(() => {
                    let treeData = this.props.headMenuResult;
                    let setData = this.state.treeData
                    //动态加载树节点
                    this.createDynamicNode(treeData, treeNode.props.eventKey, setData);

                    resolve();
                }, 500);
            }
        });
    }

    createDynamicNode(treeData: any, eventKey: any, setData: any) {
        // console.log('createDynamicNode')
        // console.log(treeData,eventKey)
        const test = treeData
        test.map((item: any) => {
            if (eventKey == item.id) {
                // const copyListTemp =[...this.state.treeData];
                // console.log('copyListTemp')
                // console.log(copyListTemp)
                // copyListTemp.map((item, idx) =>
                //     console.log(idx+1,item,eventKey)
                //  )
                // this.setState({
                //     treeData: copyListTemp.map((item, idx) => idx+1 === eventKey ? { ...item, child: [{name: '子节点1', id: '123',level:2}] } : item)
                //   })
                //   console.log(55555555555555555)
                //   console.log(this.state.treeData)
                const tree = this.testmap(test, item.name, item.id, setData)
                this.setState({ treeData: tree })
            }
        });

        // test.map((item:any)=>({
        //     ...item,
        //     child:[{name: '子节点1', id: '123',level:2}]
        //     // if(item.child!=null){
        //     //     this.createDynamicNode(item.child,eventKey);
        //     // }else{

        //     //     if(eventKey==item.id){

        //     //         item.child=[
        //     //             {name: '子节点1', id: '123',level:2},
        //     //             {name: '子节点2', id: '321',level:2}
        //     //         ]
        //     //         console.log(item)
        //     //     }
        //     // }
        // })
        // );
        // console.log(test)

    }

    testmap = (data: any, name: any, id: any, setData: any) => {
        // console.log('testmap')
        // console.log(data,name,id)

        this.setState({ childrens: [] })
        // setData.map((item:any)=>{
        //     if(item.child!=null){
        //         this.testmapChild(item.child,id,data)
        //     }
        //     if(item.pid==id){
        //         this.setState({
        //             children:[...this.state.children,item]
        //         })
        //     }

        // })

        data.map((item: any) => {
            if (item.pid == id) {
                this.setState({
                    childrens: [...this.state.childrens, item]
                })
            }
        });

        //    var a= data.filter((item:any) => item.pid != id );
        //     console.log(setData)


        return setData.map((item: any) =>
            item.child == null ?
                item.id == id ?
                    {
                        ...item,
                        child: [
                            this.state.childrens
                        ]
                    } : item
                : this.testmapChild(item, id, this.state.childrens)
        );
    }

    testmapChild = (data: any, id: any, setdata: any) => {
        // data.child.map((item:any)=>{
        //     item.map((item:any)=>{
        //     if(item.id == id){
        //         console.log(6666666666666666)
        //         console.log(item)
        //     }
        // })
        // })

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
                    : this.testmapChild(item, id, setdata)
            )
        )

        let returnItem = Object.assign(data, { child: child });

        return returnItem
    }




    // //先查出根节点
    // findRoot(treeData:any) {


    //     if(treeData!=undefined){
    //     if(treeData.length>0){
    //         console.log(222222222222222222222)
    //         console.log(this.props.headMenuResult)

    //         if(this.state.headMenuResult==null){
    //             this.setState({headMenuResult:this.props.headMenuResult})
    //         }
    //     var nodeStr=treeData.map((node:any)=>{
    //         if(node.pid==0){
    //         if(node.isLeaf==0){
    //         return (
    //             <TreeNode title={node.name} key={node.id} ></TreeNode>
    //             // <TreeNode title={node.name} key={node.id} >{this.findChild(treeData,node.id)}</TreeNode>
    //         );
    //         }else{
    //             return(
    //                 <TreeNode title={node.name} key={node.id} isLeaf={true}></TreeNode>
    //             );
    //         }
    //         }
    //     });
    //     return nodeStr;
    //     }
    //     }
    // }

    // //循环递归展开树
    //  findChild(node:any,id:any){
    //     console.log('findChild')
    //     console.log(node,id)
    //    if(node!=null){
    //     if(node.length>0){
    //          var str=node.map((n:any)=>{
    //             if(n.pid==id){
    //             if(n.isLeaf==0){
    //                return(
    //                    <TreeNode title={n.name} key={n.id}>{this.findChild(node,n.id)}</TreeNode>
    //                );
    //             }else{
    //                 return(
    //                     <TreeNode title={n.name} key={n.id} isLeaf={true}>{this.findChild(node,n.id)}</TreeNode>
    //                 );
    //             }
    //             }
    //          })
    //          return str;
    //    }
    //    }
    // }


    toggleCollapsed() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };



    // onLoadData=(treeNode:any):Promise<void>=> {
    //     return new Promise((resolve) => {
    //       setTimeout(() => {
    //         const treeData = [...this.state.treeData]
    //         this.getNewTreeData(treeData, treeNode.props.eventKey, this.generateTreeNodes(treeNode), 2)
    //         this.setState({ treeData })
    //         resolve()
    //       }, 500)
    //     })
    //   }

    // generateTreeNodes(treeNode: any) {
    //     const arr = []
    //     const key = treeNode.props.eventKey
    //     for (let i = 0; i < 3; i++) {
    //         arr.push({ name: `leaf ${key}-${i}`, key: `${key}-${i}` })
    //     }
    //     return arr
    // }

    // setLeaf(treeData: any, curKey: any, level: any) {
    //     const loopLeaf = (data: any, lev: any) => {
    //         const l = lev - 1
    //         data.forEach((item: any) => {
    //             if ((item.key.length > curKey.length) ? item.key.indexOf(curKey) !== 0 :
    //                 curKey.indexOf(item.key) !== 0) {
    //                 return
    //             }
    //             if (item.children) {
    //                 loopLeaf(item.children, l)
    //             }
    //             else if (l < 1) {
    //                 item.isLeaf = true
    //             }
    //         })
    //     }
    //     loopLeaf(treeData, level + 1)
    // }

    // getNewTreeData(treeData: any, curKey: any, child: any, level: any) {
    //     const loop = (data: any) => {
    //         if (level < 1 || curKey.length - 3 > level * 2) return
    //         data.forEach((item: any) => {
    //             if (curKey.indexOf(item.key) === 0) {
    //                 if (item.children) {
    //                     loop(item.children)
    //                 }
    //                 else {
    //                     item.children = child
    //                 }
    //             }
    //         })
    //     }
    //     loop(treeData)
    //     this.setLeaf(treeData, curKey, level)
    // }

}

const mapStateToProps = (state: rootState) => {
    return {
        headMenuResult: state.pageState.headMenuResult
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        headMenu: (menu: { resolve?: (value?: any) => void, }) => dispatch(headMenu(menu)),
    }
}

export const LeftMenuComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(BaseLeftMenu)