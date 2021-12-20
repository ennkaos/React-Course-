import classes from './RouterAddWrapperNoQuotesFound.module.css';

const RouterAddWrapperNoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <a className='btn'>
        Add a Quote
      </a>
    </div>
  );
};

export default RouterAddWrapperNoQuotesFound;
