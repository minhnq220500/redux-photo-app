import { createSlice } from "@reduxjs/toolkit";

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

//reducers là 1 object và mỗi key là 1 action creator

//với redux ko sử dụng redux toolkit thì mình cần phải clone ra 1 array mới để tránh ảnh hưởng đến
//array cũ, nhưng khi sử dụng redux toolkit thì mình có thể mutate trực tiếp trên mảng cũ mà ko làm ảnh hưởng đến giá trị của
//chính bản thân nó
//nên ko cần return, vì khi return thì giống như redux bình thường rồi, cần phải tạo ra 1 array mới và return nó,
//có thể dùng cách nào cũng được

//behind the scene redux toolkit sử dụng immerjs, immerjs giúp mình viết 1 code là mutable(thao tác trực tiếp trên mảng hiện tại
// mà ko cần clone ra 1 mảng mới),
//tuy nhiên behind the scene nó sẽ convert lại thành immutable

const photo = createSlice({
  name: "photos",
  initialState: initialPhotos,
  reducers: {
    addPhoto: (state: any, action: Action) => {
      // state.push(action.payload);

      const newPhotoList = action.payload;
      return (state = [newPhotoList]);
      // nếu return tức là mình muốn thay đổi hoàn toàn giá trị của state cũ bằng cái mới,
      // chứ ko phải cập nhật nó lại
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
      ); //nếu như tìm dc thì >=0, nếu ko tìm dc thì = -1
      if (photoIndex >= 0) {
        state[photoIndex] = newPhoto; //mình sẽ sửa trực tiếp giá trị của photo tại vị trí photoIndex thành newPhoto
      }
    },
    updatePhotolist: (state: any, action: Action) => {
      const newPhotoList = action.payload;
      return (state = [newPhotoList]);
      // nếu return tức là mình muốn thay đổi hoàn toàn giá trị của state cũ bằng cái mới,
      // chứ ko phải cập nhật nó lại
    },
  },
});

const { reducer, actions } = photo;
// photo này trả về 1 object bao gồm reducer và actions, reducer thì giống kiểu mình tạo ra
// 1 file photoReducer á, nhưng khi dùng redux toolkit thì nó chỉ cần làm như v thôi
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;

//đối với redux toolkit thì tất cả reducer,actions đều nằm trong file slice này

//sử dụng redux toolkit thì nó setup sẵn redux thunk và redux devtool cho mình luôn
//nhưng vẫn phải cái extension devtool trước

//Redux Thunk cho phép trả về các Action là một function thay vì chỉ là một PJO,
//nó đóng vai trò là một Middleware được đặt trước thời điểm reducer nhận request
// để nhận biết các action có trả về một PJO hay không, nếu đó là một PJO,
//Thunk sẽ chuyển action đó đến Reducer như thường lệ, nếu action trả về là một function,
//Redux Thunk sẽ "chặn" action đó lại và đợi cho đến khi một lệnh asynchronous nào đó trong function
//hoàn tất và trả về kết quả (như giá trị response ở trên).
//Đến đây chúng ta đã nhận được một PJO và Redux Thunk sẽ cho action này đến Reducer như bình thường.
