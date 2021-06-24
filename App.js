import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import RootNavigator from './src/navigation/RootNavigator';
import mealsReducer from './src/store/reducers/meals';

// Redux step03: combineReducers，createStoreを行い、storeをsetup
const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
