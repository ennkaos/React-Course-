import { useState } from 'react';

import CustomHooksMoreSection from '../UI/CustomHooksMoreSection';
import CustomHooksMoreTaskForm from './CustomHooksMoreTaskForm';

const CustomHooksMoreNewTask = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const enterTaskHandler = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://corso-react-c6785-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
        {
          method: 'POST',
          body: JSON.stringify({ text: taskText }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  return (
    <CustomHooksMoreSection>
      <CustomHooksMoreTaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </CustomHooksMoreSection>
  );
};

export default CustomHooksMoreNewTask;
