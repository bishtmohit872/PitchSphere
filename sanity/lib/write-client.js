import "server-only"

import { createClient } from 'next-sanity'

import { dataset, projectId,token } from '../env'

export const write_client = createClient({
  projectId,
  dataset,
  apiVersion: "v2021-03-25",
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token,
})

if(!write_client.config().token){
    throw new Error('write token not found')
}
