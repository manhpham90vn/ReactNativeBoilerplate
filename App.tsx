import { Provider } from 'react-redux';

import RootNavigationStack from './src/navigations/rootNavigationStack';
import { store } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigationStack />
    </Provider>
  );
};

export default App;
