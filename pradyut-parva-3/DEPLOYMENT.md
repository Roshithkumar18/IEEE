# Deployment Guide

This guide covers deploying the Pradyut Parva 3 website to various hosting platforms.

## Prerequisites

- Node.js 16+ installed
- Project built successfully (`npm run build`)
- Official logo assets in place

## Build the Project

Before deploying, always build the production version:

```bash
npm run build
```

This creates optimized files in the `dist/` directory.

## Deployment Options

### 1. Vercel (Recommended)

Vercel provides free hosting with automatic deployments from Git.

#### Via Vercel CLI

```bash
npm install -g vercel
vercel
```

#### Via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub/GitLab/Bitbucket
3. Click "New Project"
4. Import your repository
5. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click "Deploy"

### 2. Netlify

#### Via Netlify CLI

```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### Via Netlify Dashboard

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder to deploy
3. Or connect your Git repository for automatic deployments

Build settings:
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

### 3. GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/pradyut-parva-3"
}
```

3. Update `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/pradyut-parva-3/',
})
```

4. Deploy:
```bash
npm run deploy
```

### 4. Traditional Web Hosting (cPanel, etc.)

1. Build the project:
```bash
npm run build
```

2. Upload contents of `dist/` folder to your web server's public directory (e.g., `public_html/`)

3. Ensure your server is configured to serve the `index.html` for all routes (for React Router)

#### Apache (.htaccess)

Create `.htaccess` in the root directory:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Custom Domain Setup

### Update Site Configuration

Before deploying with a custom domain, update `src/data/config.ts`:

```typescript
export const siteConfig = {
  websiteUrl: 'yourdomain.com',
  registrationUrl: 'yourdomain.com/register',
  eventsUrl: 'yourdomain.com/events',
  // ...
};
```

### DNS Configuration

Point your domain to your hosting provider:

**For Vercel/Netlify:**
- Add CNAME record pointing to their server
- Follow their custom domain setup guide

**For Traditional Hosting:**
- Add A record pointing to server IP
- Or CNAME record pointing to server domain

## Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Event filtering works
- [ ] Registration form submits (configure backend if needed)
- [ ] Images and logos display correctly
- [ ] Mobile responsive design works
- [ ] All links work (internal and external)
- [ ] SEO meta tags are correct
- [ ] Analytics/tracking added (if required)
- [ ] HTTPS enabled
- [ ] Custom domain configured (if applicable)

## Environment Variables (Optional)

If you need environment-specific configuration:

1. Create `.env.production`:
```
VITE_API_URL=https://api.yourdomain.com
VITE_ANALYTICS_ID=your-analytics-id
```

2. Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Backend Integration

The current website is frontend-only. To add backend functionality:

### Registration Form

Update `src/pages/Register.tsx` to send data to your backend:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('https://your-api.com/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      alert('Registration successful!');
    }
  } catch (error) {
    console.error('Registration failed:', error);
  }
};
```

## Monitoring & Analytics

### Google Analytics

Add to `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Support

For deployment issues:
- Check build logs for errors
- Ensure all dependencies are installed
- Verify Node.js version compatibility
- Check hosting provider documentation

---

**Need help?** Contact the development team or event coordinators.
