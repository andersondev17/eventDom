import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import MobileNav from "./MobileNav"
import NavItems from "./NavItems"

export const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex justify-between items-center">
                <Link href="/" className="w-36">
                    <Image src="/assets/images/logo.svg" width={128} height={38}
                        alt="EventDom Logo"
                    />
                </Link>
                <SignedIn>
                    <nav className="hidden md:flex w-full max-w-xs">
                        <NavItems />
                    </nav>
                </SignedIn>
                <SignedIn >
                    <nav className="md:flex-between hidden w-full max-w-xs">
                        <MobileNav />
                    </nav>
                </SignedIn>
                <div className="flex w-32 justify-end gap-3">
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                        <MobileNav />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button className="rounded-full" size="lg">
                                Iniciar sesión
                            </Button>
                        </SignInButton>
                    </SignedOut>

                </div>
            </div>
        </header>
    )
}