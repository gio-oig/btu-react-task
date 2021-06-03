import Guest from '../../components/hoc/guest';
import { Link } from 'react-router-dom';
import styles from './greeting-style.module.css';

function Greeting() {
  return (
    <div className={styles.container}>
      <div className={styles.greeting}>
        <h1 className={styles.hello}>PC PART PICKER</h1>
        <p className={styles.description}>
          This is Computer Parts picker please sign in to start building to Pc.
        </p>
        <Link to="/auth" className={styles.signinbtn}>
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default Guest(Greeting);
