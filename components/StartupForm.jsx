"use client"

import { useState, useActionState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import MDEditor from "@uiw/react-md-editor"
import { Send } from "lucide-react"
import { formSchema } from "@/lib/validation"
import { z } from 'zod'
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { createPitch } from "@/lib/actions"
import { client } from "@/sanity/lib/client"
import { FETCH_ALL_STARTUPS } from "@/sanity/lib/queries"

const StartupForm = () => {
    const [errors, setErrors] = useState({})
    const [pitch, setPitch] = useState("")

    const { toast } = useToast();

    const router = useRouter()

    const fetchStartup = async () => {
        const data = await client.fetch(FETCH_ALL_STARTUPS)
        return data
    }


    const handleFormSubmit = async (prevState, formData) => {
        try {
            const formValues = {

                title: formData.get("title").toString(),
                description: formData.get("description").toString(),
                category: formData.get("category").toString(),
                link: formData.get("link").toString(),
                pitch,
            }
            const result = await formSchema.safeParseAsync(formValues)
            // console.log(result)
            // console.log("form data is here::", formValues)
            // const result = await createIdea(prevState,FormData,pitch)

            if (!result.success) {
                const errors = {}
                result.error.issues.forEach((err) => {
                    const field = err.path[0]   // jis field pe error hai
                    if (!errors[field]) errors[field] = []
                    errors[field].push(err.message)
                })

                setErrors(errors) // yeh wahi structure ban jaayega jaisa flatten deta hai
            }

            else if (result.success) {
                const creation = await createPitch(prevState, formData, pitch)
                if (creation.status == "SUCCESS") {

                    toast({
                        title: "Success",
                        description: "Your Startup has been created successfully",
                    })

                    fetchStartup()
                        .then((res) => {
                            // console.log("new startup id:",res._id);
                            router.push(`/startup/${res._id}`) // yaha bhi id aa jayegi
                        })
                        .catch((err) => {
                            console.error("Error:", err);
                        });

                    // console.log("data available ryt now", values)
                    // router.push(`/startup/${result._id}`)
                }

            }
            return result
        }
        catch (err) {
            console.error("Unexpected error:", err)
            toast({
                title: "error",
                description: "Please check your inputs and try again",
                variant: "destructive"
            })
            return { success: false }
        }
    }

    const [state, formAction, isPending] = useActionState(handleFormSubmit, { error: "", status: "INITIAL" })

    return (
        <form action={formAction} className='startup-form'>
            <div>
                <label htmlFor="title" className="startup-form_label">Title</label>
                <Input id="title" name="title" className="startup-form_input" required placeholder="Startup Title" />
                {
                    errors.title && <p className="startup-form_error">{errors.title}</p>
                }
            </div>

            <div>
                <label htmlFor="description" className="startup-form_label">Description</label>
                <Textarea id="description" name="description" className="startup-form_textarea" required placeholder="Startup Description" />
                {
                    errors.description && <p className="startup-form_error">{errors.description}</p>
                }
            </div>

            <div>
                <label htmlFor="category" className="startup-form_label">Category</label>
                <Input id="category" name="category" className="startup-form_input" required placeholder="Startup Category (Tech, Sports, Education, Health)" />
                {
                    errors.category && <p className="startup-form_error">{errors.cateogory}</p>
                }
            </div>

            <div>
                <label htmlFor="link" className="startup-form_label">Image URL</label>
                <Input id="link" name="link" className="startup-form_input" required placeholder="Startup Image URL" />
                {
                    errors.link && <p className="startup-form_error">{errors.link}</p>
                }
            </div>

            <div data-color-mode="light">
                <label htmlFor="pitch" className="startup-form_label">Pitch</label>
                <MDEditor value={pitch}
                    onChange={(e) => { setPitch(e) }}
                    id="pitch"
                    preview="edit"
                    height={300}
                    style={{ borderRadius: 20, overflow: "hidden", border: "2px solid black" }}
                    textareaProps={{
                        placeholder: 'Briefly Describe your ideas and what problem it solves'
                    }}
                    previewOptions={{
                        disallowedElement: ["style"]
                    }}
                />
                {
                    errors.pitch && <p className="startup-form_error">{errors.pitch}</p>
                }
            </div>

            <Button type="submit" className="startup-form_btn text-white" disabled={isPending}>
                {
                    isPending ? 'submitting...' : 'Submit your startup Pitch'
                }
                <Send className="size-6 ml-2" />
            </Button>


        </form>
    )
}

export default StartupForm