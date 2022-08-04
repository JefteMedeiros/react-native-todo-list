import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({title, ...rest}) => {
  return (
    <TouchableOpacity {...rest} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
