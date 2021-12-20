import classes from './RouterAddDataNoQuotesFound.module.css';

const RouterAddDataNoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <a className='btn'>
        Add a Quote
      </a>
    </div>
  );
};

export default RouterAddDataNoQuotesFound;
