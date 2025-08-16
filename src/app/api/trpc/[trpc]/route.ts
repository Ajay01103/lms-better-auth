import { Hono } from "hono"
import { handle } from "hono/vercel"
import { trpcServer } from "@hono/trpc-server" // Deno 'npm:@hono/trpc-server'
import { appRouter } from "@/trpc/routers/_app"
import { createTRPCContext } from "@/trpc/init"

const app = new Hono()

app.use(
  "/api/trpc/*",
  trpcServer({
    router: appRouter,
    endpoint: "/api/trpc",
    createContext: createTRPCContext,
  })
)

export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const DELETE = handle(app)
