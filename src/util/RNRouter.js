import { NavigationActions } from 'react-navigation';
class RNRouter {
    /**
     * 路由跳转
     * 
     * ·routeName- 目标路由名称，将在你的app router中注册 
     * ·params-将参数合并到目标router中 
     * ·action-(advanced) The sub-action to run in the child router, if the screen is a navigator. See Actions Doc for a full list of supported actions.

     */

    static open(route, params) {

        return function (that) {
            console.log('params------>',params)
            // const { props } = that;
            console.log('that---->', that)
            const navigateAction = NavigationActions.navigate({
                routeName: route,
                params:{...params},
                action: NavigationActions.navigate({ routeName: '' })
            })
            that.props.navigation.dispatch(navigateAction)
        }

    }
    /**
     * 路由返回
     * 
     * react-navigation是提供了goBack()到指定页面的方法的，那就是在goBack()中添加一个参数，但当你使用goBack('Main')的时候，
     * 你会发现并没有跳转，原因是react-navigation默认goBack()中的参数是系统随机分配的key，
     * 而不是手动设置的routeName，而方法内部又没有提供可以获得key的方法，所以这里只能通过修改源码将key换成routeName了。
     * 
     * 如果只是简单的返回上一页需要加上null参数，类似这样back(null)
     */
    static back(route) {
            console.log('route----->', route)
        return function (that) {
            const backAction = NavigationActions.back({
                key: route
            })
            that.props.navigation.dispatch(backAction)
        }
        // return NavigationActions.back(null)
    }

    /**
     * 路由重置
     * 
     */
    static resetTo(route,params){
        return function (that){
            const resetAction = NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: route, params: {} })
              ]
            })
            that.props.navigation.dispatch(resetAction);
        }
    }
}

global.PPZ.router = RNRouter;




            // NavigationActions.navigate({
            //     routeName: page,
            //     params: {
            //         ...params,
            //     },

            //     // navigate can have a nested navigate action that will be run inside the child router
            //     // action: NavigationActions.navigate({ routeName: route})


            // const { props } = that;
            // const navigateAction = NavigationActions.navigate({
            //     routeName: route,
            //     params: params,
            //     action: NavigationActions.navigate({ routeName: '' })
            // })
            // this.props.navigation.dispatch(navigationAction)