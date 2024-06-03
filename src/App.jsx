import { ThemeProvider } from "@material-tailwind/react"
import { BrowserRouter } from "react-router-dom"
import RootRoute from "./navitation/RootRoute"
import theme from "./constants/theme"

const App = () => {
  return (
    <ThemeProvider value={theme}>
      <BrowserRouter>
        <RootRoute/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App