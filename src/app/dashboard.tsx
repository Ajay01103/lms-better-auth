"use client"

import { useTRPC } from "@/trpc/client"
import { useSuspenseQuery } from "@tanstack/react-query"
import React, { Suspense } from "react"

export const Dashboard = () => {
  const trpc = useTRPC()
  const { data } = useSuspenseQuery(trpc.hello.queryOptions({ text: "Hello ajay" }))

  return <Suspense fallback={<p>Loading</p>}>Dashboard {data?.greeting}</Suspense>
}
