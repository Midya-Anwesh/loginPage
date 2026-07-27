import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice';
import coachCommentReducer from '../features/comment/coachCommentSlice';
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist'
// import persistStore from "redux-persist/es/persistStore";

const customLocalStorage = {
    getItem: (key: string) => {
        return Promise.resolve(localStorage.getItem(key));
    },
    setItem: (key: string, value: string) => {
        localStorage.setItem(key, value);
        return Promise.resolve();
    },
    removeItem: (key: string) => {
        localStorage.removeItem(key);
        return Promise.resolve();
    }
};

const persistConfig = {
    key: 'root',
    storage: customLocalStorage
}

const rootReducer = combineReducers({
    user: userReducer,
    coachComment: coachCommentReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;