import classes from './RouterDetailsPageNoQuotesFound.module.css';

const RouterDetailsPageNoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <a className='btn'>
        Add a Quote
      </a>
    </div>
  );
};

export default RouterDetailsPageNoQuotesFound;
