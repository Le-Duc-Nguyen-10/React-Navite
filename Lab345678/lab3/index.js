import { StyleSheet, Text, View, TextInput } from "react-native";
import { styles } from "./styles";
const Lab3 = () => {
    return (
      <View>
        <View style = {styles.container}>
        <Text style = {styles.baseText}>
          Em vào đời bằng {' '}
          <Text style={[styles.boldText , {color: 'red'}]}>vang đỏ </Text>
          anh vào đời bằng{' '}
          <Text style ={[styles.boldText, {color : 'yellow'}]}>nước trà</Text>
        </Text>
        <Text style = {styles.baseText}>Bằng cơn mưa thơm{' '}
          <Text style ={[styles.boldText , {fontSize : 20 } , styles.italicText]}>mùi đất{' '}</Text>
          <Text>{' '}và{' '}<Text style = {[styles.italicText , {fontSize : 10}]}>bằng hoa dại mọc trước nhà</Text></Text>
        </Text>
        <Text style = {[styles.baseText ,styles.boldText , styles.italicText , {color : 'gray'}]}>Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ </Text>
        <Text style = {styles.baseText}>
          Lý trí em là{' '}
          <Text style = {{textDecorationLine : 'underline' , letterSpacing : 20 , fontWeight : 'bold'}}>{' '}công cụ{' '}</Text>
          còn trái tim anh là
          <Text style = {{textDecorationLine : 'underline' , letterSpacing : 20 , fontWeight : 'bold'}}>{' '}động cơ{' '}</Text>
        </Text>
        <Text style = {[styles.baseText , {textAlign : 'right'}]}>
          Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình
        </Text>
        <Text style = {[styles.baseText , {textAlign : 'center' , fontWeight : 'bold' , color : 'orange'}]}>
          Anh chỉ muốn chân mình đạp đất không muốn đạp ai dưới chân mình 
        </Text>
        <Text style = {[styles.baseText , {color : 'black', fontWeight : 'bold'}]}>
          Em vào đời bằng{' '}
          <Text style = {{color : 'white'}}>mây trắng</Text>{' '}
          em vào đời bằng{' '}<Text style = {{color : 'yellow'}}>nắng xanh</Text>
        </Text>
        <Text style = {[styles.baseText , {color : 'black', fontWeight : 'bold'}]}>
          Em vào đời bằng{' '}
          <Text  style = {{color : 'yellow'}}>đại lộ</Text>{' '}
          và con đường đó giờ{' '}<Text  style = {{color : 'white'}}>vắng anh</Text>
        </Text>
      </View>
      </View>
    )
};
export default Lab3;