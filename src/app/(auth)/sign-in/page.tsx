import { auth } from "@/lib/auth"
import { SignInView } from "@/modules/auth/views/sign-in-view"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

const SignInPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!!session) {
    redirect("/dashboard")
  }

  return <SignInView />
}

export default SignInPage
