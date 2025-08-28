import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";
// import {client} from '@/sanity/lib/client'

const Home = async({searchParams}) => {
  
  const {query} = await searchParams
  const params = query||null
  // const posts = await client.fetch(STARTUPS_QUERY)

  const session = await auth()

  // console.log("this is session id",session?.id)


  const {data: posts} = await sanityFetch({query: STARTUPS_QUERY, params: {search:params}})

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Fueling Startups, <br/> Building Tomorrow</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches , and Get Noticed in Virtual Competitions.
        </p>
        
        <SearchForm query={query}/>
      </section>
      
      <section className="section_container">
        <p className="text-30-semibold">
          { query?`Search results for "${query}"` : 'All Startups' }
        </p>

        <ul className="mt-7 card_grid">
          {
            posts?.length>0?(
              posts.map((post,index)=>(<StartupCard key={post?._id} post={post}/>))
              
            ):(
              <p className="no-results">No Startups found</p>
            )
          }
        </ul>
      </section>

      <SanityLive/>
    </>
  )
}

export default Home
