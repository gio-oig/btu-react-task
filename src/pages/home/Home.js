import { Protected } from '../../components/hoc';

const Home = () => {
  return <div className="container">Home</div>;
};

export default Protected(Home);
