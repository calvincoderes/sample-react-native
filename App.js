import React, { useState } from 'react';
import { View, Text, StatusBar, Button, ScrollView, SafeAreaView } from 'react-native';
import SettingsModal from './components/SettingsModal';
import TaskList from './components/TaskList';
import mainStyle from './styles/mainStyle';
import {generateBoxShadowStyle} from './styles/generateBoxShadowStyle'
import FontAwesome from '@expo/vector-icons/FontAwesome5';


export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [reminder, setReminder] = useState(0);
  const [childName, setChildName] = useState('');
  const [routineName, setRoutineName] = useState('My Routine');
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [routineStarted, setRoutineStarted] = useState(false);
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1', isChecked: false },
    { id: 2, text: 'Item 2', isChecked: false },
    { id: 3, text: 'Item 3', isChecked: false },
  ]);

  const toggleItem = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };


  

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const handleSave = () => {
    // Process and save the form data here
    closeModal();
  };

  const handleStartRoutine = () => {
    setRoutineStarted(true);
  };

  return (
    <SafeAreaView style={mainStyle.container}>
      {/* header component */}
      
      {/* body component */}
      <ScrollView horizontal={false} style={mainStyle.scrollViewDefault}>
        {/* {routineStarted && <TaskList tasks={tasks} />} */}
        
        {/* {items.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => toggleItem(item.id)}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <CheckBox value={item.isChecked} onValueChange={() => toggleItem(item.id)} />
          <Text style={{ marginLeft: 8 }}>{item.text}</Text>
        </TouchableOpacity>
      ))} */}
      </ScrollView>
      {/* footer component */}
      <StatusBar style="auto" />
    {/* Display Task List if Routine Started */}
    

    {/* Start Routine Button */}
    <View>
      {!routineStarted && (
        <Button title="Start Routine" onPress={handleStartRoutine} style={mainStyle.button} />
      )}
    </View>
    
    {/* Modal */}
    <SettingsModal
        visible={modalVisible}
        closeModal={closeModal}
        reminder={reminder}
        childName={childName}
        routineName={routineName}
        tasks={tasks}
        taskInput={taskInput}
        setReminder={setReminder}
        setChildName={setChildName}
        setRoutineName={setRoutineName}
        setTaskInput={setTaskInput}
        handleAddTask={handleAddTask}
        handleSave={handleSave}
    />
    </SafeAreaView>
  );
};
