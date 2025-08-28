# 🚀 PitchSphere - Next.js & Sanity Project

**PitchSphere** is a modern platform built with **Next.js** and **Sanity CMS** where **startups, entrepreneurs, and creators** can showcase their innovative ideas and pitches.  

---

## 🔥 Project Overview

PitchSphere helps users:

- Showcase innovative solutions professionally  
- Connect with investors directly  
- Maximize growth opportunities  

It leverages **Next.js server-side features, caching, ISR/PPR, and Sanity CMS** for optimal performance, SEO, and real-time content delivery.

---

## 🛠 Tech Stack & Tools

- **Frontend:** Next.js 13+ (App Router, Server Components, Suspense, Loading UI)  
- **Styling:** Tailwind CSS, Shadcn UI  
- **Icons:** lucide-react  
- **Fonts:** LocalFont (custom fonts)  
- **Backend / CMS:** Sanity (Content Operating System)  
- **Database:** Sanity (Document-based CMS)  
- **Error Monitoring:** Sentry  
- **Forms:** Next.js `form-action` with prefetching & progressive enhancement  
- **Deployment / Hosting:** Vercel  

---

## ⚡ Key Features

1. **Loading UI:** Custom `loading.js` for better UX during page load.  
2. **Server-side Data Fetching:** Minimal code, improved SEO, faster initial load.  
3. **Incremental Static Regeneration (ISR):** Update static pages after build.  
4. **Partial Pre-Rendering (PPR):** Hybrid static + dynamic rendering with Suspense.  
5. **Next.js Form Actions:** Client-side navigation & prefetching during form submission.  
6. **Sanity CMS Integration:**  
   - Secure & fast content delivery (SSL, asset compression, cache invalidation).  
   - Live Content API for real-time updates without page reload.  
   - GROQ queries for optimized data fetching.  
   - Server & client tokens for live updates.  
7. **Background Tasks:** `unstable_after` for tasks after response (analytics, logging, view counting).  
8. **Caching System:** Next.js & Sanity cache data automatically for faster repeated requests.  
9. **Monitoring & Error Tracking:** Sentry integration for real-time performance & error logging.  

---

## 💡 Sanity CMS Workflow

- Create schema files using `defineType` & `defineField`  
- Register schemas in `index.js`  
- Use GROQ queries with `client.fetch()` or `defineQuery` to fetch only required data  
- Optional: Live Content API for instant updates  
- Server-side & client-side caching ensures performance & scalability  

---

## 📈 Running Locally

```bash
# Clone the repo
git clone https://github.com/YourUsername/PitchSphere.git

# Navigate to project
cd PitchSphere

# Install dependencies
npm install

# Run development server
npm run dev
