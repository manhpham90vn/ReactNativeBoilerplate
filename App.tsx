import { Provider } from 'react-redux';

import RootNavigationStack from './src/navigations/rootNavigationStack';
import { store } from './src/redux/store';
import Example1 from './src/screens/example1';

const App = () => {
  return <Example1 />;
  return (
    <Provider store={store}>
      <RootNavigationStack />
    </Provider>
  );
};

export default App;
