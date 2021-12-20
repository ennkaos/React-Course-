import classes from './RouterRouteTstNoQuotesFound.module.css';

const RouterRouteTstNoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <a className='btn'>
        Add a Quote
      </a>
    </div>
  );
};

export default RouterRouteTstNoQuotesFound;
