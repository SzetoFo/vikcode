/**
 * Created by TC on 2016/9/7.
 */
import React, {Component} from "react";
import {BackAndroid, DrawerLayoutAndroid, View, Text, Image, PixelRatio, StyleSheet, ToastAndroid} from "react-native";
import ScrollableTabView from "react-native-scrollable-tab-view";
import GankComponent from "./GankComponent";


let isFirst = true;
class GankShowComponent extends Component {

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', () => this.goBack());//监听安卓回退按钮
    }

    render() {
        const navigationView = (
            <View style={{flex: 1, backgroundColor: '#eff3f7'}}>
                <View style={styles.head}>
                    <Image style={{
                        width: 30 * PixelRatio.get(),
                        height: 30 * PixelRatio.get()
                    }}
                           source={require('./../image/icon_head.png') }/>
                    <Text style={{
                        marginTop: 20,
                        color: '#ffffff',
                        fontSize: 15,
                        fontWeight: 'bold',
                        fontStyle: 'italic'
                    }}>React Native</Text>
                </View>
                <Text style={{
                    margin: 10,
                    fontSize: 14,
                    textAlign: 'center',
                    color: '#757575'
                }}>我的收藏</Text>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={200}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <ScrollableTabView tabBarUnderlineStyle={{
                    position: 'absolute',
                    height: 3,
                    backgroundColor: '#ffffff',
                    bottom: 0,
                }}
                                   tabBarTextStyle={{fontSize: 14}}
                                   tabBarActiveTextColor='#ffffff'
                                   tabBarBackgroundColor='#FFDA44' tabBarInactiveTextColor="#212121"
                                   onChangeTab={(selectedTab) => {
                                       if (selectedTab.i == 3 && !isFirst) {//再次回到界面时,重新加载福利图
                                           this.refs.myGirl.loadImage();
                                       }
                                       isFirst = false;
                                   }}>
                    <GankComponent navigator={this.props.navigator} url='http://gank.io/api/data/all/10/1'
                                   tabLabel='ALL'/>
                    <GankComponent navigator={this.props.navigator} url='http://gank.io/api/data/Android/10/1'
                                   tabLabel='ANDROID'/>
                    <GankComponent navigator={this.props.navigator} url='http://gank.io/api/data/iOS/10/1'
                                   tabLabel='IOS'/>
                   
                </ScrollableTabView>
            </DrawerLayoutAndroid>

        );

    }

    /**
     * 回退
     */
    goBack() {
        const nav = this.props.navigator;
        const routers = nav.getCurrentRoutes();
        if (routers.length > 1 && nav) {
            nav.pop();
            return true;
        }
        return false;
    }

}

/**
 * 样式封装
 */
const styles = StyleSheet.create({
    head: {//头部样式
        backgroundColor: '#FFDA44',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    }
});

export default  GankShowComponent;