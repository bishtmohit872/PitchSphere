1) loading UI (loading.js) in particular router folder

As our page reload till that point of time loading.js file will be load.

2) Data Fetching

In traditional way we use useeffect hook for fetching from the api
In next js we can fetch api in server side and make code easy to write

example:

const Home = async()=>{
    const response = await fetch('url')
    if (!response.ok) throw new error('failed to fetch the data')
    const album = await response.json()

    return(

        here you will map the album variable to render the component.
    )
}

In next.js there is new feature called "servercomponentHmrCache" that allow to cache fetch reponses in server component across the hot module refresh 

#In server side fetching has less number of code as compare to client side fetching and simplified logic
#server side fetching allow imporove initial load time 
#server side fetching improve SEO  
#improves security
#reduced network waterfall

ISR: Incremental side rendering
extension of SSG update static content after you build the website.
it will create static page at build time behaving like SSG and after some time passed it will create or update those static pages once again after you deploy your website


Partial Pre-Rendering (PPR): 
A New model that combining Static and Dynamic Rendering.
It allow us to render a static shell of a page while streaming a dynamic content.

It allow the hybrid approach in single page.

how its work:

During build time nextjs generate the static shell of the pages.
that shell include the layout and any static part of the page, in the form of component.
This static shell include placeholder for dynamic content.

We do it by wrapping dynamic component in a suspense tag .
when a user request the page the static shell served immediately and then dynamic content stream in as it become available

3) using nextjs form-element feature which can prefetching of loading ui and client side navigation on submission and progressive enhancement.

4) "Shadcn,"lucide-react" used in this project 

5) Added extrafont by "Localfont" in project.

6) Use Sanity (content operating system):- SSL encryption, global edge network, asset compression, cache invalidation, dynamic code execution

7) SANITY: DATABASE
Step to create databse in sanity
7.1) create a file having the name that you want to give for your table(document)
7.2) then create structure with the help definetype and definefield
7.3) then register your schema in index.js file
7.4) optional: then you can add the schema name in structure.js file so that it can show in left side column
7.5) To fetch the data from sanity we use GROQ query, it is open source language
7.6) Remember when you write the query in js file with the help of definequery then put query inside the backtick (`) okay not in single inverted comman or either inside the double inverted comma
7.7) we can fetch the definequery from client.fetch() method okay

8) So next js work on caching system and almost same pattern used by sanity
HOW IT IS WORK :
=>AT first request that request will be uncached request so it will fetch and first it will check from cached data, if data not found then it will take out from data source. If the same request come again within 60 sec (this can be set by user , iam taking default time for example) then it will search from cached data, it does'nt matter that how much request you made within 60 sec it will try to fetch from cached data.

After 60 second then it will automatically update the data from data source and you application will be updated again. This is how the next js work on cache system and same for sanity - content operation system

9) If you install sanity then you can turn off this feature by going to client.js file and change the value of usecdn to "false"

10) To get immediately live data without refresh the page , we can use "Live Content API"

"Live Content API" provide you live delivery of data, 
=>provide better experience without the complexity, 
=>provides you scalablity typically that comes with building real time complexity.

11) Server-only package:- That specific can be used in server-only

12) And I used sanityFetch and sanityLive for getting live update immediately without reloading the page, and these features require server and browser token
"https://www.sanity.io/docs/developer-guides/live-content-guide" this is documentation for setup.

13) Sanity uses the GROQ query and this is much more optimized and fast because with the that query you will able to fetch only neccessary think not extra things, just like GRAPHQL

14) I made write-client.js file to write on sanity schema and to make it running in background i used "unstable_after".
unstable_after allows you to schedule tasks that run after the response has been sent to the client. This means the response is not delayed, and additional work such as logging, analytics, sending emails, or background jobs can continue in the background. It is useful for handling side effects without blocking the main response flow.

For example: we have view.js file which show the total number of views ryt ,after requesting the view.js file and after the response we get for view.js file then that function will run automatically to increase the count without blocking the response or any other task.

# NOTE: In lastest nextjs version "unstable_after" name change into "after"

15) we used useActionState hook in form
16) we also use ZOD for form validation

17) At last project is on final stage and at this stage we want to make our project reliable. If multiple user come along then then our app should not break at that point , so for this we wil use "SENTRY" platform. 

18) this is end url for sentry:  /sentry-example-page
19) parallel data fetching by promise.all method
### BONUS POINT:

1) if you have nested objects like , data={ name:"mohit",author:{book:"programming world"} }
if you want to destructure the book then you can go like 

const { name, author:{book} } = data

this is how you can destructture nested object got it

2) In next.js we have an component called Image which coming from 'next/image' so it is smart component because it can check the src link, whether the link is verified or trustable link or not, this help to secure the nextjs application as well as prevent from unknown malicious link

3) Remember if you are using the Image from 'next/image' then always configure the link which are using in src attribute of image tag , then you can use that link inside the image tag 
### END OF BONUS POINT








