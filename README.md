<div align="center">
  <h1>Md. Amran Hossen — Developer Portfolio</h1>
  <p>A premium, high-performance personal portfolio built with Next.js 15, React 19, and Tailwind CSS 4.</p>

  <p>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" /></a>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-007ACC?style=for-the-badge&logo=typescript" alt="TypeScript" /></a>
    <a href="https://motion.dev/"><img src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer" alt="Framer Motion" /></a>
  </p>
</div>

<br />

## ✨ Features

- **Modern Glassmorphism UI**: Beautifully designed frosted glass cards with multi-colored ambient glows (`blur-[120px]`) that track interactions and build a dynamic visual feel.
- **Flawless Dark/Light Mode**: Full responsive support for both color paradigms with high-contrast gradient scaling.
- **Animated Timelines & Grids**: Beautiful illuminated timeline tracks for experience and education, alongside stunning Bento-style interactive grids for skills.
- **Fluid & Responsive**: Built mobile-first, ensuring pixel-perfect scaling across mobile, tablet, and 4K desktop environments.
- **Centralized Configuration**: The entire application's data is managed via a single `config/portfolio.ts` file. Easily update your profile without ever digging into component logic.
- **Optimized Performance**: Next.js App Router utilization ensures near-instant server-rendered page loads.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Motion API (Framer Motion)](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js 18+** installed on your machine. 

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/md-amran-hossen-portfolio.git
   cd md-amran-hossen-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit [http://localhost:3000](http://localhost:3000) to view the application in action.

## ⚙️ Customization

This portfolio is fully dynamic. You do not need to rewrite UI components to update your information.

Navigate to `config/portfolio.ts` to seamlessly update:
- **Personal Details** (Name, Taglines, Bio, Resume link)
- **Social Links** (GitHub, LinkedIn, Email)
- **Projects** (Titles, Image mapping, Technology tags, Source/Demo links)
- **Categories & Skills**

## 🌐 Deployment

This application is fully optimized and ready to be deployed on **Netlify**. 

1. Push your code to your GitHub repository (e.g., `git push origin main`).
2. Sign in to [Netlify](https://app.netlify.com/) and click **Add new site** > **Import an existing project**.
3. Connect your GitHub account and select your repository.
4. Netlify will automatically detect Next.js. Ensure the build settings are:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Click **Deploy**. Your site will be built and go live automatically.

*(Note: Netlify offers native edge support for Next.js App Router applications, so SSR and server components will work perfectly out-of-the-box via zero-config deployments).*

---

<div align="center">
  <br/>
  <p>Designed and engineered continuously with ❤️ by Md. Amran Hossen.</p>
</div>
