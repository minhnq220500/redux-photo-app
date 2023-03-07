import { unwrapResult } from "@reduxjs/toolkit";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getMe = createAsyncThunk(
  "user/getMe",
  async (params: any, thunkAPI: any) => {
    //params có được khi gọi action getMe, truyền vào params nào thì nó sẽ nhận param ấy
    //thunkAPI là do createAsyncThunk pass thêm để mình có thể dispatch thêm action khác trong hàm
    //ví dụ: thunkAPI.dispatch(...)
    //   const currentUser = await userApi.getMe();
    //   return currentUser;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: {},
  },
  reducers: {},
  extraReducers: {
    [getMe.fulfilled]: (state: any, action: any) => {
      state.current = action.payload;
    },
  },
});

const { reducer: userReducer } = userSlice;
export default userReducer;

// try{
// const actionResult=await dispatch(getMe());
// const currentUser=unwrapResult(actionResult)
// }catch{
//     console.log('Failed to load')
// }
