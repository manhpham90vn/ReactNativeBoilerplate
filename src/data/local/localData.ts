import { LoginResponse } from 'src/data/apis/loginApi';
import {
  clearObjectData,
  getObjectData,
  StorageConstants,
  storeObjectData,
} from 'src/data/local/asyncStorage';

export const getToken = async (): Promise<LoginResponse> => {
  try {
    const result = await getObjectData(StorageConstants.TOKEN);
    return Promise.resolve(result);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const setToken = async (token: LoginResponse): Promise<void> => {
  try {
    return await storeObjectData(StorageConstants.TOKEN, token);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const clearToken = async (): Promise<void> => {
  try {
    return await clearObjectData(StorageConstants.TOKEN);
  } catch (e) {
    return Promise.reject(e);
  }
};
