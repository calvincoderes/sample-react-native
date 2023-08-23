import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';


const TaskList = ({ tasks }) => {
  return (
    <View style={styles.taskListContainer}>
      <Text style={styles.taskListHeading}>Task List</Text>
      <View style={styles.tasksContainer}>
        {tasks.map((task, index) => (
          <Text key={index} style={styles.taskText}>
            {task}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskListContainer: {
    marginTop: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  taskListHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tasksContainer: {
    // maxHeight: '%', // Adjust the max height as needed
    padding: 10
  },
  taskText: {
    marginBottom: 5,
  },
});

export default TaskList;
