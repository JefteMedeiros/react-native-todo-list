import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {styles} from './styles';

interface InputProps {
  setNewSkill: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<InputProps> = ({setNewSkill}) => {
  return (
    <View>
      <TextInput
        placeholderTextColor="#555"
        placeholder="Nova tarefa"
        maxLength={40}
        style={styles.input}
        onChangeText={setNewSkill}
      />
    </View>
  );
};

export default Input;
