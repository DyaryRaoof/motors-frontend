import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navigation from './Navigation';
import { getMotors } from './api/motors';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMotors);
  }, []);
  return (
    <div>
      <Navigation />
    </div>
  );
}

export default App;
