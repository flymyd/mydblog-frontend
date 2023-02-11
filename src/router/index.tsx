import {lazy, Suspense} from "react";
import {Framework} from "@/views/Index";
import Categories from "@/views/Categories";
import Tags from "@/views/Tags";
import Detail from "@/views/Detail";
import Archives from "@/views/Archives";
import FriendlyLink from "@/views/FriendlyLink";
import Projects from "@/views/Projects";
import Home from "@/views/Home";
import About from "@/views/About";
import {LoadingOverlay} from "@mantine/core";

/**
 * 懒加载组件
 * @param path
 * @returns
 */
function LazyWrapper(components: string, folder = "") {
  // React.lazy接受的组件必须为export default形式
  const url = `../views/${folder}${components}.tsx`;
  const Component = lazy(() => import(url))
  return (
    <Suspense fallback={<LoadingOverlay visible={true} overlayBlur={2}/>}>
      <Component/>
    </Suspense>
  );
}

let router = [
  // {
  //   path: "/About",
  //   element: <About />,
  // },
  {
    path: "/Projects/Escape",
    element: LazyWrapper('Escape', 'Projects/')
  },
  {
    path: "/Projects/KMS",
    element: LazyWrapper('KMS', 'Projects/')
  },
  {
    path: "/",
    element: <Framework/>,
    children: [
      {
        path: "",
        element: LazyWrapper('Home')
      },
      {
        path: "/Categories",
        element: LazyWrapper('Categories')
      },
      {
        path: "/Tags",
        element: LazyWrapper('Tags')
      },
      {
        path: "/Detail",
        element: LazyWrapper('Detail')
      },
      {
        path: "/Archives/:page",
        element: LazyWrapper('Archives')
      },
      {
        path: "/Projects",
        element: LazyWrapper('Projects')
      },
      {
        path: "/FriendlyLink",
        element: LazyWrapper('FriendlyLink')
      },
      {
        path: "/About",
        element: LazyWrapper('About'),
      },
    ],
  },
];

export default router;
