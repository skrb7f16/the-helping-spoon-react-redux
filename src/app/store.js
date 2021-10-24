import { configureStore } from '@reduxjs/toolkit';
import backDropSlice from '../features/backdrop/BackdropSlice';
import headerSclice from '../features/header/headerSclice';
import messageSlice from '../features/message/MessageSlice';
import newsFeedsSlice from '../features/newsfeeds/NewsFeedsSlice';
import userSlice from '../features/user/UserSlice';


export const store = configureStore({
  reducer: {
    header:headerSclice,
    backdrop:backDropSlice,
    message:messageSlice,
    user:userSlice,
    newsfeeds:newsFeedsSlice
  },
});
