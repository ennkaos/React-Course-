import classes from './RouterPracticeNRoutesNoQuotesFound.module.css';

const RouterPracticeNRoutesNoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <a className='btn'>
        Add a Quote
      </a>
    </div>
  );
};

export default RouterPracticeNRoutesNoQuotesFound;
