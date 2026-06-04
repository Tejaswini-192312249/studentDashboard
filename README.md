# Next.js Student Learning Dashboard

A premium, dark-mode, animated Student Learning Dashboard featuring a responsive Bento Grid layout. This application fetches course progress live from a Supabase database, uses Framer Motion for high-fidelity animations, and is optimized for production-grade speed and reliability.

## 🎯 Overview
This dashboard acts as a visual learning hub for students, featuring:
- A welcoming **Hero Tile** showing the current learning streak (8 days representation).
- Dynamic **Course Tiles** that render dynamic Lucide icons, show live course progress, and feature interactive progress bar fill animations.
- A **Study Activity Tile** that visualizes coding consistency in a 12x8 contribution grid using customized color levels.
- A fully responsive **Sidebar** navigation that morphs between desktop (expanded/collapsed), tablet (icon-only), and mobile (bottom navigation bar) layouts.

## 🛠 Tech Stack
- **Framework:** Next.js 14+ (using App Router for optimized layouts, server-side data fetching, and built-in routing boundaries).
- **Database:** Supabase (PostgreSQL client integration for low-latency queries and real-time support).
- **Styling:** Tailwind CSS (utility-first styling for speed, utilizing Tailwind v4 custom theme tokens for a consistent dark palette).
- **Animations:** Framer Motion (buttery-smooth interactive transitions and spring physics).
- **Icons:** Lucide React (clean, scale-invariant SVG icons matching modern design systems).
- **Language:** TypeScript (for type safety and autocompletion, with zero `any` variables).

## 🏛 Architecture Decisions

### Server/Client Component Split
To maximize performance and SEO value, we divide our components into server-side and client-side roles:
1. **`app/page.tsx` (Server Component):** Fetches the data directly from Supabase on the server. This eliminates client-side network roundtrips, hides sensitive environment keys, and keeps the initial bundle size low.
2. **`components/Sidebar.tsx` (Client Component):** Marked with `"use client"` because it handles interactive state (the expanded/collapsed toggle, active nav items, and the Framer Motion `layoutId` active bar highlight snapping animation).
3. **`components/CourseTile.tsx` and `components/ProgressBar.tsx` (Client Components):** Marked with `"use client"` because they listen to user hover events and mount-triggered width animations (Framer Motion `animate`).
4. **`components/BentoGrid.tsx` (Client Component):** Marked with `"use client"` to trigger the staggered entrance animations when the child cards mount.

## 🔌 Supabase Integration
Data flows sequentially from the database down to individual presentation components:
1. **Query:** The Server Component in `app/page.tsx` calls `supabase.from('courses').select('*')` during request processing.
2. **Streaming & Hydration:** Next.js serves the layout shell immediately, while wrapping the `CoursesDashboard` block in a React `Suspense` container. When the database responds, Next.js streams the populated list.
3. **Props Distribution:** The raw `Course` records list is passed as a type-safe array prop to `BentoGrid.tsx`.
4. **Presentation:** The Bento Grid assigns individual `Course` items to their designated grid slots, passing them to the client-side `CourseTile.tsx` component which maps fields (e.g. `icon_name` using `iconMap` and `progress` to `ProgressBar.tsx`).

## 🎬 Animation Strategy
To avoid triggering layout shifts (which lower Core Web Vitals scores and cause jarring UI reflows), we adhere to a strict animation policy:
- **No Layout-Affecting Properties:** We animate only `opacity` and CSS `transform` (e.g. `scale`, `translateY`).
- **Cards Hover:** Course cards use `whileHover={{ scale: 1.02, borderColor: "#7c6cf0" }}`. The border color is handled on GPU paint, while `scale` utilizes composite layers to prevent repaints.
- **Active Navigation Indicator:** The `layoutId` layout animation snaps between nav items without re-calculating surrounding DOM layout geometries.
- **Progress Bar:** Animates the `width` variable using a `MotionValue` (`useMotionValue`) inside a `useEffect` on mount. This ensures the bar flows smoothly from `0%` to the current value without affecting other grid modules.

## 📱 Responsive Design
The viewport layout adapts seamlessly to three distinct breakpoints:
- **Desktop (> 1024px):** Sidebar is displayed on the left with a width toggle button (collapsing to `56px` or expanding to `180px` showing full labels). The Bento Grid arranges elements in a 3-column layout (`grid-template-columns: 2fr 1fr 1fr`).
- **Tablet (768px - 1024px):** Sidebar is locked to `56px` width (icons only, labels hidden). The grid changes to a balanced 2-column layout (`grid-template-columns: 1fr 1fr`).
- **Mobile (< 768px):** Sidebar converts into a fixed bottom navigation bar (`56px` high) featuring active tab indicators. The grid stacks all tiles into a single column (`grid-template-columns: 1fr`).

## ⚙️ Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/learning-dashboard.git
   cd learning-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create `.env.local` in the root folder:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```
   *(Ensure `.env.local` is listed in your `.gitignore` to protect credentials)*.

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` to preview the dashboard.

5. **Build for production:**
   ```bash
   npm run build
   ```

## 🧠 Challenges & Solutions

### 1. Hydration Mismatch with Framer Motion
**Problem:** Next.js pre-renders Server Components on the server, producing initial HTML. When loading client components that trigger layout or spring animations immediately on mount, the client-rendered output differed slightly from the server-rendered HTML, resulting in React hydration warning logs.
**Solution:** We structured layout animations to trigger only in `useEffect` hooks (e.g. progress bar width interpolation) and verified that layout-animating components are client-gated or use safe default static properties on initial render.

### 2. Dynamic Component Typings with Icon Maps
**Problem:** Dynamic mapping of text database fields (like `icon_name: 'code'`) to React icon components (from `lucide-react`) caused TypeScript compiler errors regarding type incompatibility and unresolved dynamic module imports.
**Solution:** Created a static, type-safe `iconMap` record in `utils/iconMap.ts` which explicitly lists the allowed Lucide icons and types the mapping as `Record<string, React.ComponentType<{ size?: number; className?: string }>>`. If the database returns an unexpected icon string, it falls back gracefully to a default `Code` icon.

### 3. Build-Time Static Page Generation without Live DB credentials
**Problem:** Next.js pre-collects page structure at compile time. Since `page.tsx` pulls config from Supabase, Next.js attempted to initialize the connection, throwing an `Invalid URL` error and blocking compilation if env keys were undefined or set to template placeholders.
**Solution:** Configured `lib/supabase.ts` with a URL validation fallback helper that checks the syntax of `process.env.NEXT_PUBLIC_SUPABASE_URL`. If the URL is empty or invalid, it returns a mock placeholder URL (`https://placeholder.supabase.co`) so client instantiation completes without throwing an error at build-time, while letting runtime errors be caught by our UI try-catch blocks.
