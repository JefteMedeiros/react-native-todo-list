import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  enabled: boolean
}

const Button: React.FC<ButtonProps> = ({enabled, title, ...rest}) => {
  return (
    <TouchableOpacity {...rest} style={enabled ? styles.button : [styles.button, {opacity: 0.7}]}>
      <Text style={enabled ? styles.buttonText : [styles.buttonText, {opacity: 0.7}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
