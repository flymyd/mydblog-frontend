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

/**
 * 懒加载组件
 * @param path
 * @returns
 */
function LazyWrapper(path: string) {
  // React.lazy接受的组件必须为export default形式
  const Component = lazy(() => import(`../views${path}`))
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    path: "/",
    element: <Framework/>,
    children: [
      {
        path: "",
        element: <Home></Home>
      },
      {
        path: "/Categories",
        element: <Categories/>
      },
      {
        path: "/Tags",
        element: <Tags/>
      },
      {
        path: "/Detail",
        element: <Detail/>
      },
      {
        path: "/Archives/:page",
        element: <Archives/>
      },
      {
        path: "/Projects",
        element: <Projects/>
      },
      {
        path: "/FriendlyLink",
        element: <FriendlyLink/>
      },
      {
        path: "/About",
        element: <About />,
      },
    ],
  },
];

export default router;
