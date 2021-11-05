import { useAtom } from 'jotai'
import { darkModeAtom } from './atom'

function useDarkMode(){
    const [darkMode, setDarkMode] = useAtom(darkModeAtom)
    return { darkMode, setDarkMode}
}

export default useDarkMode