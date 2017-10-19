import { StackNavigator } from 'react-navigation';

import PPZSplash from './PPZSplash.js';

import PPZWelcome from './PPZWelcome.js';

import ChatScreen from './ChatScreen.js';

import dashboard from './PPZDashborad.js';

import EXHomeDetail from '../pages/home/EXHomeDetail.js';

import WebScreen from './PPZWebview.js';

import Register from '../pages/account/register';

import Resetpsd from '../pages/account/resetpsd';


const EXNavigator = StackNavigator(
    {
        Home: {
            screen: PPZSplash,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        dashboard: {
            screen: dashboard,
            navigationOptions: ({ navigation }) => ({

            })
        },

        homeDetail: { screen: EXHomeDetail },
        welcome: {
            screen: PPZWelcome,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        Chat: { screen: ChatScreen },
        webview: { screen: WebScreen },
        Register: { screen: Register },
        Resetpsd:{screen:Resetpsd},
    },

    {
        navigationOptions: ({ navigation }) => ({
            headerBackTitle: null,
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontSize: 20,
                alignSelf: 'center',
            },
            headerStyle: {
                backgroundColor: '#ff6347',
            }
        })
    }
)

export default EXNavigator;

