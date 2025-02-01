import React from 'react';
import { TitleText } from './styles';

export const CustomText = ({ children, ...props }) => {
  return (
    <TitleText {...props}>
      {children}
    </TitleText>
  );
};