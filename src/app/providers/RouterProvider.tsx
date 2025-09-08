import { HomePage } from "../../pages/HomePage"
import { ProjectsList } from "../../pages/ProjectsList"
import { ProjectPage } from "../../pages/ProjectPage"

export const RouterProvider = () => {
  return [
    { path: "/", element: <HomePage /> },
    { path: "/projects", element: <ProjectsList /> },
    { path: "/projects/:id", element: <ProjectPage /> },
  ]
}