import React, { useEffect, useState } from 'react';

import CustomHooksHttpTasks from './components/Tasks/CustomHooksHttpTasks';
import CustomHooksHttpNewTask from './components/NewTask/CustomHooksHttpNewTask';

function CustomHooksHttp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://corso-react-c6785-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <CustomHooksHttpNewTask onAddTask={taskAddHandler} />
      <CustomHooksHttpTasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default CustomHooksHttp;
