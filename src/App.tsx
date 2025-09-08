import { Routes, Route } from "react-router-dom"
import { Header } from "./app/layouts/Header"
import { RouterProvider } from "./app/providers/RouterProvider"

function App() {
  const routes = RouterProvider()

  return (
    <>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  )
}

export default App
