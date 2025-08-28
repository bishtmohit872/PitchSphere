"use server"

import { auth } from "@/auth"
import { parseServerActionResponse } from "./utils"
import slugify from "slugify"
import { write_client } from "@/sanity/lib/write-client"

export const createPitch = async(state,form,pitch)=>{
    const session = await auth()
    if(!session){
        return parseServerActionResponse({
            error:'Not signed In',
            status:"Error",
        })
    }

    const {title , description, category, link} =  Object.fromEntries(
        Array.from(form).filter(([key])=>key!=='pitch')
    )
    const slug = slugify(title,{lower:true,strict:true})

    try{
        const startup ={
            title,
            description,
            category,
            image:link,
            slug:{
                _type:slug,
                current:slug,
            },
            author:{
                _type:'reference',
                _ref:session?.id, 
            },
            pitch,
        }

        const result = await write_client.create({_type:'startup',...startup})
        return parseServerActionResponse({
            ...result,
            error:" ",
            status:'SUCCESS'
        })
    }
    catch(err){
        console.log(err)
        return parseServerActionResponse({
            error:JSON.stringify(err),
            status:"ERROR",
        })
    }
}