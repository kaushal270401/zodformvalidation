import { SunIcon,MoonIcon } from "@chakra-ui/icons";
import { useColorMode,Box, IconButton } from "@chakra-ui/react";

const ThemeSelector=()=>{
    const{colorMode ,toggleColorMode}=useColorMode()
    return(
        <Box>
            <IconButton icon={colorMode==="light"?<SunIcon/>:<MoonIcon/>} onClick={toggleColorMode}/>
        </Box>
    )
}
export default ThemeSelector;