import classes from './RouterPracticeRedirectNoQuotesFound.module.css';

const RouterPracticeRedirectNoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <a className='btn'>
        Add a Quote
      </a>
    </div>
  );
};

export default RouterPracticeRedirectNoQuotesFound;
