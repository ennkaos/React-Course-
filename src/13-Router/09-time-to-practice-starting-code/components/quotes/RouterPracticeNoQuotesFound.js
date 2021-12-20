import classes from './RouterPracticeNoQuotesFound.module.css';

const RouterPracticeNoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <a className='btn'>
        Add a Quote
      </a>
    </div>
  );
};

export default RouterPracticeNoQuotesFound;
