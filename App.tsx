import { Provider } from 'react-redux';

import RootNavigationStack from './src/navigations/rootNavigationStack';
import { store } from './src/redux/store';
import Example1 from './src/screens/example1';
import Example2 from './src/screens/example2';

const App = () => {
  return <Example2 />;
  return (
    <Provider store={store}>
      <RootNavigationStack />
    </Provider>
  );
};

export default App;
