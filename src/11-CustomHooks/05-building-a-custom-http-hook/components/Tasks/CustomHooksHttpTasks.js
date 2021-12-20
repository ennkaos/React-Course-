import CustomHooksHttpSection from '../UI/CustomHooksHttpSection';
import CustomHooksHttpTaskItem from './CustomHooksHttpTaskItem';
import classes from './CustomHooksHttpTasks.module.css';

const CustomHooksHttpTasks = (props) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map((task) => (
          <CustomHooksHttpTaskItem key={task.id}>{task.text}</CustomHooksHttpTaskItem>
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
    <CustomHooksHttpSection>
      <div className={classes.container}>{content}</div>
    </CustomHooksHttpSection>
  );
};

export default CustomHooksHttpTasks;
