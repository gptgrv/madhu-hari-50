This is a Next.js anniversary site for Dr Hari and Madhu Gupta.

## Setup

1. Copy `.env.example` to `.env.local`.
2. Create a Supabase project.
3. Run the SQL in [supabase/schema.sql](/Users/gaurav/projects/madhu-hari-50/supabase/schema.sql).
4. Add `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_WALL_BUCKET`, and `ADMIN_PASSWORD` to your local env and Vercel project settings.

The Wall of Love now stores wishes and uploaded media in Supabase so submissions persist across Vercel deployments.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Open the admin panel at `/admin` to edit, hide, approve, or delete Wall of Love entries.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
