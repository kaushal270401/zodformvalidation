import { extendTheme } from "@chakra-ui/react"
import { containerTheme } from "./Theme/containerTheme"
import { buttonTheme } from "./Theme/Buttontheme";


const  theme =extendTheme({
    components: {
        Container: containerTheme,
        Button:buttonTheme,
      },
})

export default theme;