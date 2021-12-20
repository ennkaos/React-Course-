import React, { useEffect, useState } from 'react';

import CustomHooksCmpTasks from './components/Tasks/CustomHooksCmpTasks';
import CustomHooksCmpNewTask from './components/NewTask/CustomHooksCmpNewTask';
import CustomHooksCmpUseHttp from './hooks/CustomHooksCmp-use-http';

function CustomHooksCmp() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = CustomHooksCmpUseHttp();

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
      <CustomHooksCmpNewTask onAddTask={taskAddHandler} />
      <CustomHooksCmpTasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default CustomHooksCmp;
