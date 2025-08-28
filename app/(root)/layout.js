import { Toaster } from "@/components/ui/toaster"
import Navbar from "../../components/Navbar"

const Layout = ({children})=>{
    return(
        <main className="font-work-sans">
            <Navbar/>
            {children}
            <Toaster/>
        </main>
    )
}

export default Layout