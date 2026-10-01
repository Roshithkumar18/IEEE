# Deploy to Vercel - Step by Step

## Option 1: Via Vercel Dashboard (Easiest - Recommended)

This is the easiest method and gives you the most control.

### Steps:

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com
   - Sign in with your account (you're already logged in as futureforge1)

2. **Create New Project**
   - Click "Add New..." → "Project"
   - Or visit: https://vercel.com/new

3. **Import Repository**
   
   **Option A - If project is in Git:**
   - Select your Git provider (GitHub/GitLab/Bitbucket)
   - Find and import `pradyut-parva-3` repository
   
   **Option B - If project is not in Git:**
   - You need to push it to GitHub first:
     ```bash
     cd "c:\ieee help\pradyut-parva-3"
     git init
     git add .
     git commit -m "Initial commit: Pradyut Parva 3 website"
     git remote add origin YOUR_GITHUB_REPO_URL
     git push -u origin main
     ```
   - Then import from GitHub

4. **Configure Project**
   - **Framework Preset:** Vite
   - **Root Directory:** ./
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for deployment
   - You'll get a URL like: `https://pradyut-parva-3.vercel.app`

6. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add: `ssceieeeday2026.in`
   - Follow DNS configuration instructions

---

## Option 2: Via Command Line

If you prefer CLI deployment:

### Prerequisites:
- Ensure you're logged in to Vercel CLI
- Project must be in a Git repository (optional but recommended)

### Steps:

1. **Open Command Prompt** (not PowerShell)
   ```cmd
   cd "c:\ieee help\pradyut-parva-3"
   ```

2. **Deploy to Vercel**
   ```cmd
   vercel --prod
   ```

3. **Follow the prompts:**
   - **Set up and deploy?** → Yes (Y)
   - **Which scope?** → Select your team (futureforge1)
   - **Link to existing project?** → No (N)
   - **What's your project's name?** → `pradyut-parva-3`
   - **In which directory is your code located?** → `./`
   - **Override settings?** → No (N)

4. **Wait for deployment**
   - Vercel will build and deploy automatically
   - You'll receive a production URL

5. **View your site**
   - Copy the URL from the terminal
   - Visit the URL in your browser

---

## Option 3: Quick Deploy Script

I've created `deploy-vercel.bat` for you.

**To use:**
1. Double-click `deploy-vercel.bat`
2. Press any key to continue
3. When prompted, select "Create a new project"
4. Follow the interactive prompts

---

## After Deployment

### Your Live URL:
After deployment, you'll get a URL like:
- **Production:** `https://pradyut-parva-3.vercel.app`
- **Preview:** `https://pradyut-parva-3-git-main-yourteam.vercel.app`

### Verify Deployment:
- [ ] Home page loads correctly
- [ ] All 13 events are visible
- [ ] Navigation works
- [ ] Events filter works
- [ ] Registration form displays
- [ ] Mobile responsive
- [ ] All pages accessible

### Update Content Later:
1. Edit files in `src/data/` folder
2. Commit changes to Git
3. Push to GitHub
4. Vercel auto-deploys (or run `vercel --prod` again)

### Add Custom Domain:
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add `ssceieeeday2026.in`
3. Update your domain's DNS:
   - Add A record: `76.76.21.21`
   - Or CNAME record: `cname.vercel-dns.com`
4. Wait for DNS propagation (up to 48 hours)

---

## Troubleshooting

**Build Fails:**
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally first

**Routes Don't Work:**
- Vercel automatically handles SPA routing with our `vercel.json`
- If issues persist, check `vercel.json` configuration

**Images Don't Load:**
- Ensure logo files are in `public/assets/logos/`
- Check file names match exactly
- Use lowercase file extensions (.png not .PNG)

**Need Help:**
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

---

## Current Status

✅ **Build successful** - Project compiled without errors
✅ **Vercel config ready** - `vercel.json` configured
✅ **Production ready** - All files optimized

**Next Step:** Choose Option 1 (Dashboard) or Option 2 (CLI) above to deploy!
