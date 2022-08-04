import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import Button from '../components/Button';
import Input from '../../src/components/Input';
import TaskCard from '../../src/components/TaskCard';
import DatePickerComponent from '../components/DatePicker';
import {styles} from './styles';
import { createTable, db } from '../../db';

export interface TaskData {
  task: string;
  task_id: string;
  expire_date: Date;
}

export const Home = () => {
  useEffect(() => {
    db;
    createTable();
  }, []);

  const [newTask, setNewTask] = useState('');
  const [myTasks, setMyTasks] = useState<TaskData[]>([]);
  const [greeting, setGreeting] = useState('');
  const [date, setDate] = useState<Date>(new Date());
  const [openDatePicker, setOpenDatePicker] = useState(false);

  const handleSetOpenDatePicker = () => {
    setOpenDatePicker(!openDatePicker);
  };

  const handleAddNewTask = () => {
    const data = {
      task: newTask,
      task_id: new Date().getTime(),
      expire_date: date,
    };

    db.transaction(tx => {
      tx.executeSql(
        `
        INSERT INTO Tasks (task, task_id, expire_date) VALUES (?,?,?);
      `,
        [data.task, data.task_id, data.expire_date.toString()],
        () => {
          handleRetrieveTasks();
        },
        error => console.log('Query error! ' + error.message),
      );
    });
  };

  const handleRetrieveTasks = () => {
    db.transaction(tx => {
      tx.executeSql(
        `
        SELECT * FROM TASKS ORDER BY ID
      `,
        [],
        (sqlTx, res) => {
          console.log('Categories retrieved successfuly!');
          var len = res.rows.length;
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({
                task: item.task,
                task_id: item.task_id,
                expire_date: new Date(item.expire_date),
              });
            }
            setMyTasks(results);
          }
        },
        error => console.log('Failed to retrieve items! ' + error),
      );
    });
  };

  const handleRemoveTask = (id: number) => {
    setMyTasks(oldState => oldState.filter(item => item.id !== id));
  };

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Bom dia');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Boa tarde');
    } else {
      setGreeting('Boa noite');
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Olá, Sh#rp</Text>
      <Text style={styles.greetings}>{greeting}</Text>

      <Input setNewSkill={setNewTask} />

      <Button
        title={'Adicionar'}
        activeOpacity={0.7}
        onPress={handleAddNewTask}
      />

      <DatePickerComponent
        setDate={setDate}
        date={date}
        open={openDatePicker}
        setOpen={handleSetOpenDatePicker}
      />

      <Text style={[styles.title, {marginVertical: 20}]}>Minhas tarefas</Text>

      <FlatList
        data={myTasks}
        keyExtractor={item => item.task}
        renderItem={({item}) => (
          <TaskCard
            date={item.expire_date}
            handleRemoveTask={handleRemoveTask}
            task={item.task}
          />
        )}
      />
    </SafeAreaView>
  );
};
