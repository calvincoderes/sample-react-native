import React from 'react';
import { View, Text, TextInput, ScrollView, Button, Modal, StyleSheet } from 'react-native';

const SettingsModal = ({ visible, closeModal, reminder, childName, routineName, tasks, taskInput, setReminder, setChildName, setRoutineName, setTaskInput, handleAddTask, handleSave }) => {
  return (
    <Modal visible={visible} animationType="slide" onRequestClose={closeModal}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalHeading}>Add Reminder</Text>
        <TextInput
          style={styles.input}
          placeholder="Reminder"
          keyboardType="numeric"
          value={reminder.toString()}
          onChangeText={text => setReminder(parseInt(text))}
        />
        <TextInput
          style={styles.input}
          placeholder="Child Name"
          value={childName}
          onChangeText={text => setChildName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Routine Name"
          value={routineName}
          onChangeText={text => setRoutineName(text)}
        />
        <Text style={styles.label}>Tasks</Text>
        <ScrollView style={styles.tasksContainer}>
          {tasks.map((task, index) => (
            <Text key={index}>{task}</Text>
          ))}
        </ScrollView>
        <TextInput
          style={styles.input}
          placeholder="Add Task"
          value={taskInput}
          onChangeText={text => setTaskInput(text)}
        />
        <Button title="Add" onPress={handleAddTask} />
        <Button title="Save" onPress={handleSave} />
        <Button title="Cancel" onPress={closeModal} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalHeading: {
    fontSize: 20,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  tasksContainer: {
    maxHeight: '40%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});

export default SettingsModal;
