import classes from './RouterRCodeNoQuotesFound.module.css';

const RouterRCodeNoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <a className='btn'>
        Add a Quote
      </a>
    </div>
  );
};

export default RouterRCodeNoQuotesFound;
