import { View, Text, Image } from "react-native"
import Margin from "./Margin";
import styled from 'styled-components/native';

const Container = styled.View`
  flexDirection: row;
`

const ProfileImage = styled.Image`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  borderRadius: ${({size}) => size * 0.4}px;
`

const TextContainer = styled.View`
  justifyContent: center;
  marginLeft: 10px
`

const NameText = styled.Text`
  fontWeight: ${({isMe}) => isMe ? 'bold' : 'normal'};
  fontSize: ${({isMe}) => isMe ? 16 : 15}px
`

const IntroductionText = styled.Text`
  fontSize: ${({isMe}) => isMe ? 12 : 11}px;
  color : grey;
`

export default ({name, introduction, uri, isMe}) => {
  const size = isMe ? 60 : 50;

  return (
    <Container>
      <ProfileImage source={{uri}} size={size}/>
      <TextContainer>
        <NameText isMe={isMe}>{name}</NameText>
        {
          introduction && (
            <View>
              <Margin height={isMe ? 6 : 2}/>
              <IntroductionText isMe={isMe}>{introduction}</IntroductionText>
            </View>
          )
        }
      </TextContainer>
    </Container>
  )
}