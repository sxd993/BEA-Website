import { HomePage } from "../../pages/HomePage"
import { ProjectsList } from "../../pages/ProjectsList"

export const RouterProvider = () => {
  return [
    { path: "/", element: <HomePage /> },
    { path: "/projects", element: <ProjectsList /> },
  ]
}