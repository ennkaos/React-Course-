import CustomHooksCmpSection from '../UI/CustomHooksCmpSection';
import CustomHooksCmpTaskItem from './CustomHooksCmpTaskItem';
import classes from './CustomHooksCmpTasks.module.css';

const CustomHooksCmpTasks = (props) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map((task) => (
          <CustomHooksCmpTaskItem key={task.id}>{task.text}</CustomHooksCmpTaskItem>
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
    <CustomHooksCmpSection>
      <div className={classes.container}>{content}</div>
    </CustomHooksCmpSection>
  );
};

export default CustomHooksCmpTasks;
