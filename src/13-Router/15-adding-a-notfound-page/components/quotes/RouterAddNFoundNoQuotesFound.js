import classes from './RouterAddNFoundNoQuotesFound.module.css';

const RouterAddNFoundNoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <a className='btn'>
        Add a Quote
      </a>
    </div>
  );
};

export default RouterAddNFoundNoQuotesFound;
