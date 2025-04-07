import { combineReducers, configureStore } from '@reduxjs/toolkit';
import teacherReducer from './reducers/Leadership/DeclareData/Department/teacherSlice';
import trainingLevelReducer from './reducers/Leadership/SystemSettings/TrainingLevelManagement/TrainingLevelManagementSlice';
import studentRetentionReducer from './reducers/Leadership/StudentProfile/StudentRetention/StudentRetention';

const rootStore = combineReducers({
  teacher: teacherReducer,
  trainingLevelManagement: trainingLevelReducer,
  studentRetention: studentRetentionReducer,
});

const store = configureStore({
  reducer: rootStore,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
