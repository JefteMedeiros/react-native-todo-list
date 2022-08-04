import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {format, isBefore} from 'date-fns';
import {styles} from './styles';
import {ptBR} from 'date-fns/locale';

interface TaskCardProps extends TouchableOpacityProps {
  task: string;
  id: string;
  handleRemoveTask: (id: string) => void;
  date: Date;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  handleRemoveTask,
  date,
  id
}) => {
  const [dateCheck, setDateCheck] = useState(false);

  useEffect(() => {
    if (isBefore(date, new Date())) {
      setDateCheck(false);
    } else {
      setDateCheck(true);
    }
  }, []);

  const formattedDate = format(date, "dd 'de' LLLL 'de' yyyy", {
    locale: ptBR,
  });

  return (
    <View style={dateCheck ? styles.taskContainer : styles.taskContainerPassed}>
      <View>
        <Text style={styles.taskText}>{task}</Text>
        <Text style={styles.taskText}>{formattedDate.toString()}</Text>
      </View>
      <TouchableOpacity
        onPress={() => handleRemoveTask(id)}
        activeOpacity={0.7}>
        <Text style={styles.buttonClose}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskCard;
