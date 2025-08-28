import { client } from "@/sanity/lib/client"
import Ping from "./Ping"
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries"
import { write_client } from "@/sanity/lib/write-client"
import { after } from 'next/server' 

const View = async ({id}) =>{
    const {views:totalViews} = await client.withConfig({useCdn:false }).fetch(STARTUP_VIEWS_QUERY,{id})
    
    //here we are using "after" of next js
    after(async()=>{
        await write_client.patch(id).set({views:totalViews+1}).commit()
    })

    return(
        <div className="view-container">
            <div className="absolute -top-2 -right-2">
                <Ping/>
            </div>
            <p className="view-text">
                <span className="font-black">Views : {totalViews}</span>
            </p>
        </div>
    )
}

export default View