import React, { Suspense } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WelcomeLayout } from "./layouts/Welcome";
import { NotFound } from "./components/NotFound";
import { WelcomePage } from "./components/WelcomePage";

const Photo = React.lazy(() => import("./features/Photo"));
const AddEdit = React.lazy(() => import("./features/Photo/pages/AddEdit"));
//https://viblo.asia/p/cung-tro-nen-lazy-voi-react-Eb85owOj52G
//mới vào nó sẽ ko load ngay mà chỉ khi nào vào đường link thì nó mới load

//ví dụ trong feature photo sẽ có 1 router nội bộ bên trong nữa
//thì khi đang ở App thì chỉ trỏ được tới feature tương ứng và lazy load nó
//khi dùng lazy thì phải có suspense, vì khi nào cần thì mới load, mà khi load thì phải tổn thời gian, nên phải cho nó loading

//redux toolkit là 1 thư viện giúp viết redux dễ hơn

const router = createBrowserRouter([
  { path: "*", element: <NotFound /> },
  {
    path: "/",
    element: <WelcomeLayout />,
    //tồn tại như 1 wrapper giúp bọc lại những component con ở bên trong, và dc dùng để hiển thị
    //navigation bar, dashboard
    children: [
      { path: "welcome", element: <WelcomePage /> },
      {
        path: "photo",
        children: [
          { path: "list", element: <Photo /> },
          { path: "add-edit", element: <AddEdit /> },
        ],
      },
    ],
  },
]);
//browser router giúp UI đồng bộ với URL

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
