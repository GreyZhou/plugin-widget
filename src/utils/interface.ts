// 组件描述
interface componentOptions { 
    render:Function  // 渲染函数
    name:string      // 组件名称
    created?:Function  // 实例化组件时的回调
    mounted?:Function  // dom 渲染完毕后的回调
    methods?:any  // 方法
    data?:Function  // 数据
    watch?:any  // 监听
}

// 虚拟dom 属性
interface vnode {
    type:string | Function | null // tag 名称或者组件构造函数
    key:number | string   // key
    props:any        // 属性等配置
    children?:Array<vnode>  // 子元素
    instance:any  // 组件实例
    dom: Node  // dom 引用
    _mountIndex?: number; // move计算时使用
    // text?: string  // 文本值
}

// 单个 patch 描述
interface patchOptions {
    type: string;
    // oldVnode?: any
    newVnode?: any
    // parentVnode?: any;
    dom?: any;
    parentDom?: any;
    beforeDom?: any;
    attrs?:any
    newText?:string;
    // index?: number;
    // toIndex?: number;
    // indexCode?: string;
    // text?: string
    // newNode?: vnode
    // attrs?:any 
}
// patches 合集
interface Patches {
    [index:number]:patchOptions[]
}

// 虚拟dom【允许真实 dom & 字符串 & 虚拟dom对象】
type vnodeLike = vnode | string | HTMLElement
