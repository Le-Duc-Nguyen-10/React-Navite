import React, { useState } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons';
import FirstRoute from './FirstRoute';
import SecondRoute from './SecondRoute';

const initialLayout = { width: Dimensions.get('window').width };

const TabViewExample = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Sản phẩm', icon: 'person-outline' },
        { key: 'second', title: 'Bộ sưu tập', icon: 'videocam-outline' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={(props) => (
                <TabBar
                    {...props}
                    renderIcon={({ route, focused }) => (
                        <Ionicons name={route.icon} size={33} color={focused ? 'white' : 'gray'} />
                    )}
                    indicatorStyle={{ backgroundColor: 'white' }}
                    style={{ backgroundColor: '#5B9EE1' }}
                    labelStyle={{ color: 'white', fontSize: 1 }}
                />
            )}
        />
    );
};

export default TabViewExample;
