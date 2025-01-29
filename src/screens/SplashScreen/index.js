import React, {useEffect} from 'react';
import { CustomText, Logo, Container } from '../../components';

export const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    },3000);
  }, [navigation])

  return (
    <Container align='center' justify='center'>
      <Logo />
    </Container>
  );
};