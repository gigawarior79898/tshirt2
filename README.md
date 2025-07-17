# Fashion Hub - Premium Fashion Platform

A full-stack fashion e-commerce platform with an immersive 3D landing page built with Next.js, Three.js, Tailwind CSS, and Sanity CMS.

## Features

- 🎨 **3D Interactive Landing Page** - Animated sphere with floating category labels
- 🛍️ **Product Catalog** - Browse products by category with detailed views
- 📱 **Responsive Design** - Optimized for all devices
- ⚡ **Performance Optimized** - Fast loading with Next.js 14
- 🎭 **Smooth Animations** - Framer Motion powered interactions
- 📊 **CMS Integration** - Sanity CMS for content management
- 🔍 **SEO Optimized** - Meta tags and structured data

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber
- **Animations**: Framer Motion
- **CMS**: Sanity
- **Icons**: Lucide React

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fashion-platform-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update the environment variables with your Sanity project details:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Sanity CMS Setup

1. Create a new Sanity project at [sanity.io](https://sanity.io)
2. Install Sanity CLI: `npm install -g @sanity/cli`
3. Initialize Sanity in a separate directory: `sanity init`
4. Copy the schemas from `src/sanity/schemas/` to your Sanity project
5. Deploy your Sanity studio: `sanity deploy`

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── category/          # Category pages
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── SphereScene.tsx    # 3D sphere component
│   ├── CategoryOverlay.tsx # Category navigation
│   ├── ProductGrid.tsx    # Product display
│   └── LoadingScreen.tsx  # Loading animation
├── sanity/               # Sanity schemas
│   └── schemas/          # Content type definitions
└── utils/                # Utility functions
    ├── api.ts            # API helpers
    └── sanity.ts         # Sanity client
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details