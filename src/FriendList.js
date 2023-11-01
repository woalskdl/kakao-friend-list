import { ScrollView, View } from "react-native"
import Profile from "./Profile"
import Margin from "./Margin";

export default ({data, isOpened}) => {
  return isOpened &&
  (
    <ScrollView showsVerticalScrollIndicator={false}>
      {data.map((item, idx) => (
        <View key={idx}>
          <Profile
            uri={item.uri}
            name={item.name}
            introduction={item.introduction}
          />
          <Margin height={13}/>
        </View>
        )
      )}
    </ScrollView>
  )
}