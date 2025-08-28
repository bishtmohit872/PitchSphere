import { client } from "@/sanity/lib/client"
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries"
import StartupCard from "./StartupCard"


const UserStartups = async({id}) =>{
    const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY,{id})
    return(
        <>
            {
                startups.length>0 ? startups.map((startup)=>(
                    <StartupCard key={startup._id} post={startup}/>
                )):(
                    <p className="no-result">No-result</p>
                )
            }
        </>
    )
}

export default UserStartups