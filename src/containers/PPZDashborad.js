import { TabNavigator } from 'react-navigation';
import { Image, StyleSheet } from 'react-native';
import React from 'react';

import Home from '../pages/home';
import Product from '../pages/product';
import Account from '../pages/account';
import More from '../pages/more';
import _ from 'lodash'

// const Dashboard = TabNavigator(
//     {
//         home:{ screen: Home,
//         navigationOptions:{
//             tabBarLabel: '首页',
//              tabBarIcon: ({tintColor}) => (
//                  <Image
//                  source={require('./img/home_up.png')}
//                  />
//              )
//         }
//         },
//         product:{ screen: Product},
//         account:{ screen: Account},
//         more:{ screen: More},
//     },
//     {
//         lazy:true,
//         animationEnabled:false,
//         swipeEnabled:false,
//         tabBarPosition:'bottom',
//         tabBarOptions: {
//              activeTintColor: '#2196f3',
//             tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
//             inactiveTintColor: '#999999',
//             showIcon: true,
//             style: {
//                 backgroundColor: '#fff'
//             },
//             indicatorStyle: {
//                 opacity: 0
//             },
//             tabStyle: {
//                 padding: 0
//             }
//         }
//     }
// )
// export default Dashboard;

const map = {
    account: {
        screen: Account,
        navigationOptions: {
            tabBarLabel: '用户',
            tabBarVisible: true,
            title: '用户',
        }
    },
    home: {
        screen: Home,
        navigationOptions: {
            header: null,
            tabBarLabel: '图片',
            title: '图片',
            tabBarVisible: true,
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('./img/home.png')}
                    style={[{ tintColor: tintColor }, styles.icon]}
                />
            ),
        }
    },
    product: {
        screen: Product,
        navigationOptions: {
            tabBarLabel: ' 产品',
            tabBarVisible: true,
            title: '产品',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('./img/product.png')}
                    style={[{ tintColor: tintColor }, styles.icon]}
                />
            ),
        }
    },
    more: {
        screen: More,
        navigationOptions: {
            tabBarLabel: '更多',
            tabBarVisible: true,
            title: '更多',
        }
    },
}
// 注册tabs
const dashboard = TabNavigator(_.assign({}, map), {
    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
        scrollEnabled: false,//是否启用可滚动选项卡。android
        upperCaseLabel: false,
        activeTintColor: '#ff6347', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0// 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: '#f5f5f5', // TabBar 背景色
            height: 50,
            borderTopWidth: 0,
            borderTopColor: '#eeeeee',
        },
        labelStyle: {
            fontSize: 10, // 文字大小
            marginTop: 0
        },
    }
});
const styles = StyleSheet.create({//每一个tab样式 可单独指定
    icon: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        top: 0
    }
});


export default dashboard