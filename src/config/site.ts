import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "madhen",
  author: "madhenkumar",
  description: "My personal website built in Nextjs.",
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
  links: {
    github: "https://github.com/madhenkumar",
    facebook: "https://facebook.com/redpangilinan15",
    twitter: "https://twitter.com/_rdev7",
    linkedin: "www.linkedin.com/in/madhenkumar-r-770a19257",
  },
}
