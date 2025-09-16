import { HomePage } from "../../pages/HomePage"
import { ProjectsList } from "../../pages/ProjectsList"
import { ProjectPage } from "../../pages/ProjectPage"
import { TermsOfService } from "../../features/home/components/TermsOfService"
import { PrivacyPolicy } from "../../features/home/components/PrivacyPolicy"

export const RouterProvider = () => {
  return [
    { path: "/", element: <HomePage /> },
    { path: "/projects", element: <ProjectsList /> },
    { path: "/projects/:id", element: <ProjectPage /> },
    { path: "/privacy-policy", element: <PrivacyPolicy /> },
    { path: "/terms-of-service", element: <TermsOfService /> },
  ]
}