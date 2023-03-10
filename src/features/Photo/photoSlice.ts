import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialPhotos = [
  {
    id: 91176,
    categoryId: 5,
    photo: "https://picsum.photos/id/532/300/300",
    title:
      "Enim laboris dolore consectetur et fugiat do amet eiusmod anim proident do culpa irure consectetur.",
  },
  {
    id: 82605,
    categoryId: 1,
    photo: "https://picsum.photos/id/43/300/300",
    title: "Ad officia magna veniam sunt.",
  },
  {
    id: 74760,
    categoryId: 3,
    photo: "https://picsum.photos/id/722/300/300",
    title:
      "Minim anim in sunt esse nisi sit magna consequat in sit laboris adipisicing.",
  },
  {
    id: 39588,
    categoryId: 5,
    photo: "https://picsum.photos/id/294/300/300",
    title: "Deserunt in tempor est id consectetur cupidatat.",
  },
  {
    id: 72133,
    categoryId: 4,
    photo: "https://picsum.photos/id/229/300/300",
    title:
      "Labore culpa velit sunt sit anim ad do veniam do proident sunt et nisi mollit.",
  },
  {
    id: 95333,
    categoryId: 1,
    photo: "https://picsum.photos/id/862/300/300",
    title:
      "Fugiat fugiat voluptate tempor minim ipsum nisi culpa magna officia ea deserunt tempor.",
  },
  {
    id: 62419,
    categoryId: 3,
    photo: "https://picsum.photos/id/515/300/300",
    title:
      "Excepteur nisi aliquip ex aliqua consectetur id laboris cillum elit dolor dolor anim sint.",
  },
  {
    id: 12569,
    categoryId: 5,
    photo: "https://picsum.photos/id/730/300/300",
    title:
      "Occaecat exercitation Lorem cupidatat adipisicing elit duis consequat esse et tempor eu enim cupidatat.",
  },
  {
    id: 47434,
    categoryId: 3,
    photo: "https://picsum.photos/id/287/300/300",
    title: "Veniam officia est nulla proident labore.",
  },
  {
    id: 52685,
    categoryId: 3,
    photo: "https://picsum.photos/id/859/300/300",
    title:
      "Ut incididunt do magna culpa consectetur id deserunt et enim elit quis.",
  },
  {
    id: 69928,
    categoryId: 5,
    photo: "https://picsum.photos/id/110/300/300",
    title:
      "Nisi velit fugiat voluptate fugiat magna officia qui fugiat ad non.",
  },
  {
    id: 86160,
    categoryId: 5,
    photo: "https://picsum.photos/id/649/300/300",
    title: "Id ex enim non dolore reprehenderit eu ullamco.",
  },
];

type Action = {
  type: string;
  payload: any;
};

//reducers l?? 1 object v?? m???i key l?? 1 action creator

//v???i redux ko s??? d???ng redux toolkit th?? m??nh c???n ph???i clone ra 1 array m???i ????? tr??nh ???nh h?????ng ?????n
//array c??, nh??ng khi s??? d???ng redux toolkit th?? m??nh c?? th??? mutate tr???c ti???p tr??n m???ng c?? m?? ko l??m ???nh h?????ng ?????n gi?? tr??? c???a
//ch??nh b???n th??n n??
//n??n ko c???n return, v?? khi return th?? gi???ng nh?? redux b??nh th?????ng r???i, c???n ph???i t???o ra 1 array m???i v?? return n??,
//c?? th??? d??ng c??ch n??o c??ng ???????c

//behind the scene redux toolkit s??? d???ng immerjs, immerjs gi??p m??nh vi???t 1 code l?? mutable(thao t??c tr???c ti???p tr??n m???ng hi???n t???i
// m?? ko c???n clone ra 1 m???ng m???i),
//tuy nhi??n behind the scene n?? s??? convert l???i th??nh immutable

const photo = createSlice({
  name: "photos",
  initialState: initialPhotos,
  reducers: {
    addPhoto: (state: any, action: Action) => {
      // state.push(action.payload);

      const newPhotoList = action.payload;
      return (state = [newPhotoList]);
      // n???u return t???c l?? m??nh mu???n thay ?????i ho??n to??n gi?? tr??? c???a state c?? b???ng c??i m???i,
      // ch??? ko ph???i c???p nh???t n?? l???i
    },
    removePhoto: (state: any, action: Action) => {
      // const removePhotoIndex=action.payload;
      // state.splice(removePhotoIndex,1)
      const removePhotoId = action.payload;
      state.filter((photo: any) => photo.id !== removePhotoId);
    },
    updatePhoto: (state: any, action: Action) => {
      const newPhoto = action.payload;
      const photoIndex = state.findIndex(
        (photo: any) => photo.id === newPhoto.id
      ); //n???u nh?? t??m dc th?? >=0, n???u ko t??m dc th?? = -1
      if (photoIndex >= 0) {
        state[photoIndex] = newPhoto; //m??nh s??? s???a tr???c ti???p gi?? tr??? c???a photo t???i v??? tr?? photoIndex th??nh newPhoto
      }
    },
    updatePhotolist: (state: any, action: Action) => {
      const newPhotoList = action.payload;
      return (state = [newPhotoList]);
      // n???u return t???c l?? m??nh mu???n thay ?????i ho??n to??n gi?? tr??? c???a state c?? b???ng c??i m???i,
      // ch??? ko ph???i c???p nh???t n?? l???i
    },
  },
});

const { reducer, actions } = photo;
// photo n??y tr??? v??? 1 object bao g???m reducer v?? actions, reducer th?? gi???ng ki???u m??nh t???o ra
// 1 file photoReducer ??, nh??ng khi d??ng redux toolkit th?? n?? ch??? c???n l??m nh?? v th??i
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;

//?????i v???i redux toolkit th?? t???t c??? reducer,actions ?????u n???m trong file slice n??y

//s??? d???ng redux toolkit th?? n?? setup s???n redux thunk v?? redux devtool cho m??nh lu??n
//nh??ng v???n ph???i c??i extension devtool tr?????c

//Redux Thunk cho ph??p tr??? v??? c??c Action l?? m???t function thay v?? ch??? l?? m???t PJO,
//n?? ????ng vai tr?? l?? m???t Middleware ???????c ?????t tr?????c th???i ??i???m reducer nh???n request
// ????? nh???n bi???t c??c action c?? tr??? v??? m???t PJO hay kh??ng, n???u ???? l?? m???t PJO,
//Thunk s??? chuy???n action ???? ?????n Reducer nh?? th?????ng l???, n???u action tr??? v??? l?? m???t function,
//Redux Thunk s??? "ch???n" action ???? l???i v?? ?????i cho ?????n khi m???t l???nh asynchronous n??o ???? trong function
//ho??n t???t v?? tr??? v??? k???t qu??? (nh?? gi?? tr??? response ??? tr??n).
//?????n ????y ch??ng ta ???? nh???n ???????c m???t PJO v?? Redux Thunk s??? cho action n??y ?????n Reducer nh?? b??nh th?????ng.

// createAsyncThunk
// createAsyncThunk d??ng ????? t????ng t??c ko ch??? v???i v???i API, mi???n n?? l?? async action l?? ???????c
// v?? d??? t??? x??? l?? m???t t??c v??? g?? ???? m?? ko g???i API, nh??ng c??ng c???n ?????i, th?? c??ng t??nh l?? async action

// c??n reducers th?? ko ?????nh ngh??a ??c t??n action
// c??n extra reducers th?? quy???t ?????nh ??c, n??n v???i async action th?? ch??? c?? th??? s??? d???ng extraReducers hen

// th???ng extraReducer c?? th??? nh???n m???t c??i action b???t k??? nha, k??? c??? action ?????n t??? slice kh??c n??.
// async action d??ng khi m??nh mu???n g???i API ????? l???y d??? li???u, sau ???? c???p nh???t l???i state

// 1. Reducers: ?????nh ngh??a c??c h??m t??nh n??ng: Add, Update, Delete, Filter v?? Sort.
// n?? t??? t???o action v???i c??i name theo quy t???c c???a n??

// 2. ExtraReducers: ?????nh ngh??a c??c tr???ng th??i pending, rejected v?? fulfilled.
// n?? t??? t???o action NH??NG v???i c??i NAME m??nh ?????t (m??nh cho c??i t??n action g?? l?? t??y m??nh)
