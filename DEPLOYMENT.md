# Deploying to Vercel

Your portfolio is fully configured and optimized for Vercel deployment with Vite, TypeScript, and client-side routing.

---

## Method 1: Deploy via GitHub (Recommended)

This is the easiest method and enables automatic deployments whenever you update your code.

### Step 1: Push your code to GitHub
1. Create a new repository on [GitHub](https://github.com/new) (e.g. named `my-portfolio`).
2. Run these commands in your project terminal:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/my-portfolio.git
   git push -u origin main
   ```

### Step 2: Import into Vercel
1. Go to [vercel.com](https://vercel.com) and log in (or sign up with GitHub).
2. Click **"Add New..."** > **"Project"**.
3. Select your `my-portfolio` repository and click **"Import"**.
4. Vercel will automatically detect:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**.
6. Within 30 seconds, your site will be live with a free `https://your-portfolio.vercel.app` URL and automatic HTTPS!

---

## Method 2: Deploy directly from Terminal (Vercel CLI)

If you prefer to deploy directly from your command line:

1. In your project directory, run:
   ```bash
   npx vercel
   ```
2. Follow the on-screen prompts:
   - **Log in to Vercel**: Press `Enter` to log in via browser.
   - **Set up and deploy?**: Type `Y` and press `Enter`.
   - **Which scope?**: Select your personal account.
   - **Link to existing project?**: Type `N`.
   - **What's your project's name?**: Press `Enter` (or enter a custom name).
   - **In which directory is your code located?**: Press `Enter` (`./`).
   - **Want to modify settings?**: Type `N` (settings are already defined in `vercel.json`).
3. To deploy to production with your primary domain, run:
   ```bash
   npx vercel --prod
   ```

---

## Configuration Details
- **Configuration file**: `vercel.json` is pre-configured with SPA route rewrites to prevent 404 errors on deep linking.
- **Build validation**: Run `npm run build` locally anytime to test production builds before deploying.
