import { RefreshControl, ScrollView, StatusBar, Text } from 'react-native';
import { style } from './styleReFrehControlStatusBar';
import React, { useState } from 'react';
const refreshControlStatusBar = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [barStyle, setBarStyle] = useState('light-content');
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setBarStyle((prev) => (prev === 'light-content' ? 'dark-content' : 'light-content'));
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    });
    return (
        <ScrollView
            contentContainerStyle={style.container}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} style={{ marginTop: 20 }} />}
        >
            <StatusBar barStyle={barStyle} translucent />
            <Text style={style.content}>Kéo xuống để thay đổi màu StatusBar</Text>
        </ScrollView>
    );
};
export default refreshControlStatusBar;
