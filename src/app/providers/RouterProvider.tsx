import { HomePage } from "../../pages/HomePage"
import { ProjectsList } from "../../pages/ProjectsList"
import { ProjectPage } from "../../pages/ProjectPage"
import { PrivacyPolicy } from "../../pages/PrivacyPolicy"
import { TermsOfService } from "../../pages/TermsOfService"

export const RouterProvider = () => {
  return [
    { path: "/", element: <HomePage /> },
    { path: "/projects", element: <ProjectsList /> },
    { path: "/projects/:id", element: <ProjectPage /> },
    { path: "/privacy-policy", element: <PrivacyPolicy /> },
    { path: "/terms-of-service", element: <TermsOfService /> },
  ]
}