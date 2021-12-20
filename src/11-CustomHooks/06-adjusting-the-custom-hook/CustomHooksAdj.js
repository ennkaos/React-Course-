import React, { useEffect, useState } from 'react';

import CustomHooksAdjTasks from './components/Tasks/CustomHooksAdjTasks';
import CustomHooksAdjNewTask from './components/NewTask/CustomHooksAdjNewTask';
import CustomHooksAdjUseHttp from './hooks/CustomHooksAdj-use-http';

function CustomHooksAdj() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = CustomHooksAdjUseHttp();

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    fetchTasks(
      { url: 'https://corso-react-c6785-default-rtdb.europe-west1.firebasedatabase.app/tasks.json' },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <CustomHooksAdjNewTask onAddTask={taskAddHandler} />
      <CustomHooksAdjTasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default CustomHooksAdj;
