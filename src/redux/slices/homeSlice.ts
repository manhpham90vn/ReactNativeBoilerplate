import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListRequest, ListResponse } from 'src/data/apis/listApi';
import { UserResponse } from 'src/data/apis/userApi';
import { RootState } from 'src/redux/store';
import AppData from 'src/types/appData';
import AppError from 'src/types/appError';
import AppLoad from 'src/types/appLoad';

interface HomeData {
  list: ListResponse | null;
  user: UserResponse | null;
}

interface HomeState extends AppLoad, AppError, AppData<HomeData> {}

const initialState: HomeState = {
  isLoading: false,
  errorMessage: null,
  errorData: null,
  data: {
    list: null,
    user: null,
  },
};

const homeSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    init: (state: HomeState, action: PayloadAction<ListRequest>) => {
      state.isLoading = true;
    },
    initDone: (state: HomeState) => {
      state.isLoading = false;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    initError: (state: HomeState, action: PayloadAction<AppError>) => {
      state.isLoading = false;
    },
    listApiSuccess: (state: HomeState, action: PayloadAction<ListResponse>) => {
      if (state.data) {
        state.data.list = {
          ...state.data.list,
          ...action.payload,
        };
      }
    },
    userApiSuccess: (state: HomeState, action: PayloadAction<UserResponse>) => {
      if (state.data) {
        state.data.user = {
          ...state.data.user,
          email: action.payload.email,
          name: action.payload.name,
          date: action.payload.date,
        };
      }
    },
    reset: () => initialState,
  },
});

export const loadingSelector = (state: RootState) => state.home.isLoading;
export const errorSelector = (state: RootState) => state.home.errorMessage;
export const listSelector = (state: RootState) => state.home.data?.list;
export const userSelector = (state: RootState) => state.home.data?.user;
export const homeAction = homeSlice.actions;
export const homeReducer = homeSlice.reducer;
