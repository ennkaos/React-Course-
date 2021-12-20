import CustomHooksCmpSection from '../UI/CustomHooksCmpSection';
import CustomHooksCmpTaskForm from './CustomHooksCmpTaskForm';
import CustomHooksCmpUseHttp from '../../hooks/CustomHooksCmp-use-http';

const CustomHooksCmpNewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = CustomHooksCmpUseHttp();

  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: 'https://corso-react-c6785-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { text: taskText },
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <CustomHooksCmpSection>
      <CustomHooksCmpTaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </CustomHooksCmpSection>
  );
};

export default CustomHooksCmpNewTask;
