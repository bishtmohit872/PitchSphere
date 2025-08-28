import Link from "next/link"
import Image from "next/image"

import { auth, signOut, signIn } from "@/auth"
import { redirect } from "next/dist/server/api-utils"
import { BadgePlus, LogOut } from "lucide-react"

const Navbar = async () => {
    const session = await auth()
    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image className="inline" src="/logo.png" alt="logo" width={60} height={60} />
                    <span className="text-black text-lg font-semibold">PitchSphere</span>
                </Link>

                <div className="flex items-center justify-between gap-5 text-black font-semibold text-lg lg:!w-[400px]">
                    {
                        session && session?.user ? (
                            <>
                                <Link href="/startup/create">
                                    <span className="max-sm:hidden">Create</span>
                                    <BadgePlus className="size-6 sm:hidden mb-1"/>
                                </Link>

                                <form action={async () => {
                                    "use server"
                                    await signOut({ redirect: "/" })
                                }}>
                                    <button type="submit">
                                        <span className="max-sm:hidden">Logout</span>
                                        <LogOut className="size-6 sm:hidden text-red-500" />
                                    </button>
                                </form>

                                <Link href={`/user/${session?.id} `}>
                                    <div className="flex items-center justify-between">

                                        <span className="hidden sm:block">{session?.user?.name}</span>
                                        <span><Image className="inline ml-2 border-2 border-grey rounded-full" src={session?.user?.image} alt="logo" width={40} height={40} /></span>
                                    </div>
                                </Link>
                            </>
                        ) : (
                            <form action={async () => {
                                "use server"
                                await signIn('github')
                            }}>
                                <button type="submit">Login</button>
                            </form>
                        )
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar