import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/sliceAuth';
import { contactsSlice } from './contactsSlice';
import { filterReducer } from './filterSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsSlice.reducer,
  filter: filterReducer,
});
const persistedRootReducer = persistReducer(
  { key: 'root', storage, blacklist: ['filter'] },
  rootReducer
);

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
