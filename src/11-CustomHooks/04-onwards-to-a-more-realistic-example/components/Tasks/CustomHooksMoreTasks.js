import CustomHooksMoreSection from '../UI/CustomHooksMoreSection';
import CustomHooksMoreTaskItem from './CustomHooksMoreTaskItem';
import classes from './CustomHooksMoreTasks.module.css';

const CustomHooksMoreTasks = (props) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map((task) => (
          <CustomHooksMoreTaskItem key={task.id}>{task.text}</CustomHooksMoreTaskItem>
        ))}
      </ul>
    );
  }

  let content = taskList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = 'Loading tasks...';
  }

  return (
    <CustomHooksMoreSection>
      <div className={classes.container}>{content}</div>
    </CustomHooksMoreSection>
  );
};

export default CustomHooksMoreTasks;
