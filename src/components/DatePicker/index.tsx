import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {styles} from './styles';

interface DatePickerProps {
  date: Date;
  open: boolean;
  setOpen: (open: boolean) => void;
  setDate: (date: Date) => void;
}

const DatePickerComponent: React.FC<DatePickerProps> = ({
  open,
  date,
  setOpen,
  setDate,
}) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.7} onPress={() => setOpen(!open)}>
        <Text style={styles.datePicker}>Selecionar data</Text>
      </TouchableOpacity>
      <DatePicker
        androidVariant={'iosClone'}
        modal
        mode={'date'}
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default DatePickerComponent;
