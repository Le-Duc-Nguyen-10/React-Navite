import { ImageBackground, View, StatusBar, Image, Text, TouchableOpacity } from 'react-native';
import { style } from './style-flexbox';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
const FlexView = () => {
    const [fontsLoaded] = useFonts({
        myFont: require('../assets/fonts/Poppins-SemiBold.ttf'),
        myFontSecond: require('../assets/fonts/Poppins-Medium.ttf'),
    });

    // Chờ load font trước khi render UI
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={style.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <ImageBackground source={require('../assets/old-town.jpg')} style={style.background}>
                <View style={style.overlay} />
                <View style={style.containerheader}>
                    <Image source={require('../assets/back.png')} style={style.images} />
                    <Image source={require('../assets/more.png')} style={style.images} />
                </View>
                <View style={style.containerTitle}>
                    <Text style={style.title}>phố cổ hội an </Text>
                    <Text style={style.star}>
                        <Ionicons name="star" size={16} color="gold" /> 5.0
                    </Text>
                </View>
            </ImageBackground>
            <View style={style.containerBody}>
                <TouchableOpacity style={style.favoriteButton}>
                    <Ionicons name="heart" size={24} color="red" />
                </TouchableOpacity>
                <Text style={style.location}>
                    <Ionicons name="location" size={18} color="#007bff" /> Quảng Nam
                </Text>
                <Text style={style.info}>Thông tin chuyến đi </Text>
                <Text style={style.content} numberOfLines={6} ellipsizeMode="tail">
                    Hội An là thành phố trực thuộc tỉnh Quảng Nam Việt Nam. Phố cổ Hội An từng là một thương cảng quốc
                    tế sầm uất, gồm những di sản đã có từ hàng trăm trước , được UNESCo công nhận là di sản văn hóa thế
                    giới từ năm 1999. Hội An là thành phố trực thuộc tỉnh Quảng Nam, Việt Nam. Dạo quanh phố cổ, du
                    khách có thể ngắm nhìn những ngôi nhà với tường vàng rêu phong, những chiếc đèn lồng lung linh mỗi
                    khi đêm về.Ngoài ra, Hội An còn nổi tiếng với ẩm thực phong phú, như Cao lầu, Mì Quảng, Bánh mì
                    Phượng, và đặc biệt là các món ăn đường phố hấp dẫn.
                </Text>
            </View>
            <View style={style.containerFooter}>
                <Text style={style.price}>
                    $100 <Text style={style.perDay}>/ Ngày</Text>
                </Text>
                <TouchableOpacity style={style.bookButton}>
                    <Text style={style.bookButtonText}>Đặt ngay</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default FlexView;
