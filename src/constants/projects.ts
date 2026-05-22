import { IProject } from "@/types";

export const featuredProjects: IProject[] = [
  {
    id: "1",
    title: "Green Bangladesh",
    description: `Green Bangladesh is a web app that visualizes tree density across all 64 districts of Bangladesh. It categorizes districts into environmental zones based on density, highlighting areas needing more plantation. Citizens can report newly planted trees, encouraging community participation and tracking environmental impact.`,
    image: "/project-images/green-bd-1.png",
    tags: ["CORE", "Environment"],
    techStack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Framer Motion", "Tenstack Query", "Better Auth", "d3.js", "Zod", "Express.js", "Prisma", "PostgreSQL"],
    liveDemoUrl: "https://green-bangladesh-client.vercel.app/",
    clientUrl: "https://github.com/AR-Toqi/Green-Bangladesh-Client",
    serverUrl: "https://github.com/AR-Toqi/Green-Bangladesh",
    challenges: [
      "Handling large geospatial datasets for 64 districts without compromising map rendering performance.",
      "Implementing an intuitive UI for non-technical citizens to accurately report new tree plantations.",
      "Ensuring data integrity and preventing spam submissions in public community reports."
    ],
    futureImplementations: [
      "Integration with satellite imagery APIs for automated tree density verification.",
      "Gamification features like leaderboards to encourage more citizen participation.",
      "Mobile app version for easier on-the-go reporting."
    ]
  },
  {
    id: "2",
    title: "MediStore",
    description: "MediStore is a full-stack online medicine e-commerce platform that enables customers to browse, search, and purchase medicines, while providing sellers with inventory management tools and administrators with a comprehensive dashboard for platform oversight.",
    image: "/project-images/medistore-thumb.png",
    tags: ["Ecommerce", "Health-Care"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "TanStack Query", "Node.js", "Express.js", "Prisma", "PostgreSQL", "Zod", "Better Auth", "Multer", "Cloudinary"],
    liveDemoUrl: "https://medistore-frontend-eight.vercel.app",
    clientUrl: "https://github.com/AR-Toqi/medi-store_frontend",
    serverUrl: "https://github.com/AR-Toqi/medi-store_backend",
    challenges: [
      "Server Components vs. Client Components — This was the biggest game-changer and the most challenging aspect of the entire project. Next.js App Router encourages keeping pages as Server Components by default for better performance and SEO. I made it a priority to keep all main pages as server components and extract any interactive or client-side logic (state, effects, event handlers) into separate client components. This architectural pattern made the application significantly faster — pages load with pre-rendered HTML from the server, and only the interactive parts hydrate on the client. Getting this separation right required careful planning of the component tree and a deep understanding of the React Server Component model.",
      "Search with TanStack Query — Implementing the real-time medicine search in the navbar was another challenge. I used TanStack React Query with a debounced input to fetch search results and display them in a dropdown. Coordinating the query caching, loading states, and dropdown visibility while keeping the search component as a client island within the server-rendered navbar required thoughtful composition.",
      "Authentication Across SSR & Client — Synchronizing JWT-based authentication between server-side rendering, middleware route protection, and client-side state was complex. Cookies needed to be forwarded manually during SSR fetches, and the automatic token refresh cycle had to work seamlessly on both sides without causing redirect loops.",
      "Image Uploads with Cloudinary — Handling formData with multer on the backend and ensuring proper content-type headers were set (or deliberately not set) on the frontend required careful debugging, especially for medicine and profile image uploads."
    ],
    futureImplementations: [
      "Medicine Expiry Date Tracking — Add an expiry date field to medicines. The system will automatically monitor expiry dates and send notifications to the admin when a medicine is about to expire or has expired. The admin can then review and remove expired medicines from the platform to ensure customer safety.",
      "Seller Verification by Admin — Currently sellers can onboard and start listing immediately. In the future, new seller profiles will require admin verification before they can list medicines. Admins will be able to review seller credentials(license number, shop details) and approve or reject seller applications, adding an extra layer of trust and quality control to the platform.",
      "Payment Gateway Integration — Integrate online payment options(SSLCommerz, Stripe, etc.) alongside the existing Cash on Delivery method.",
      "Product Reviews & Ratings — Enable customers to leave reviews and ratings on medicines they have purchased, helping other buyers make informed decisions."
    ]
  },
  {
    id: "3",
    title: "Wandr Travels",
    description: "Wandr Travels is a cutting-edge, AI-powered travel intelligence platform designed to transform how travelers discover, plan, and experience the world. Unlike traditional listing sites, Wandr Travels understands user intent, preferences, and budget to build fully personalized, day-by-day itineraries and provide real-time travel assistance.",
    image: "/project-images/Cinematic Amalfi Coast.png",
    tags: ["Travel", "AI", "Full-Stack"],
    techStack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "ShadCN UI", "Framer Motion", "TanStack Query v5", "React Hook Form", "Zod", "Node.js", "Express.js", "PostgreSQL", "Prisma", "OpenAI GPT-4o", "Google Gemini Pro"],
    liveDemoUrl: "https://wandr-travels.vercel.app",
    clientUrl: "https://github.com/AR-Toqi/ai-tourism-platform-client",
    serverUrl: "https://github.com/AR-Toqi/ai-tourism-platform-server",
    challenges: [
      "Architecting the AI Logic — Implementing a Context-Aware Memory System for the chat assistant, ensuring it understands the trajectory of a traveler's planning process rather than just answering one-off questions.",
      "Reliable Structured Data — Creating a robust validation layer using Zod and JSON Schemas to ensure AI's itinerary outputs always match frontend's day-by-day UI components without crashing.",
      "User-Friendly Complexity — Using Atomic Component Design to keep the UI clean while providing deep functionality, abstracting complex business logic into custom React Hooks and Middleware.",
      "Performance & Streaming — Implementing Streaming Responses (Server-Sent Events) so users see results immediately, significantly improving perceived performance and user experience."
    ],
    futureImplementations: [
      "Integrated Booking & Payments — Direct hotel and activity bookings powered by Stripe.",
      "Interactive Map Integration — Google Maps API for real-time navigation and destination pins.",
      "AI Voice Assistant — Hands-free travel planning via Web Speech API.",
      "Global Reach — Multi-language support (i18n) and localized content for international travelers.",
      "Collaborative Planning — Real-time 'Trip Rooms' where friends can plan itineraries together.",
      "Mobile Experience — Dedicated iOS and Android apps built with React Native."
    ]
  },
];
