import CustomHooksAdjSection from '../UI/CustomHooksAdjSection';
import CustomHooksAdjTaskItem from './CustomHooksAdjTaskItem';
import classes from './CustomHooksAdjTasks.module.css';

const CustomHooksAdjTasks = (props) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map((task) => (
          <CustomHooksAdjTaskItem key={task.id}>{task.text}</CustomHooksAdjTaskItem>
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
    <CustomHooksAdjSection>
      <div className={classes.container}>{content}</div>
    </CustomHooksAdjSection>
  );
};

export default CustomHooksAdjTasks;
