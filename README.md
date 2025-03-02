# Narrativ - A Blogging Platform

## Overview
Narrativ is a modern **blogging platform** designed for writers and readers to create, share, and engage with content. Built with **MERN stack (MongoDB, Express.js, React.js, Node.js)** and **Clerk authentication**, it offers a seamless experience for users to publish and explore blog posts.

## Features
✅ **User Authentication** - Secure login/signup using **Clerk** authentication.  
✅ **Create & Manage Blogs** - Users can **write, edit, and delete** blog posts.  
✅ **Rich Text Editor** - Intuitive editor for **formatted content**.  
✅ **Like & Comment** - Engage with posts by liking and commenting.  
✅ **Responsive UI** - Built with **Next.js & Tailwind CSS** for a smooth user experience.  
✅ **SEO Optimized** - Blog posts are optimized for search engines.  

## Tech Stack
- **Frontend**: React.js (Next.js), Tailwind CSS, ShadCN UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ORM
- **Authentication**: Clerk
- **Deployment**: Vercel (Frontend), Railway (Backend)

## Installation & Setup
1. **Clone the repository:**  
   ```bash
   git clone https://github.com/ADX119/Narrativ.git
   cd Narrativ
   ```

2. **Install dependencies:**  
   ```bash
   npm install
   ```

3. **Setup environment variables:**  
   Create a `.env` file in the root and add:
   ```env
   MONGO_URI=your_mongodb_uri
   CLERK_SECRET_KEY=your_clerk_secret
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   ```

4. **Start the development server:**  
   ```bash
   npm run dev
   ```

5. **Access the app:**  
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints
| Method | Endpoint          | Description              |
|--------|------------------|--------------------------|
| GET    | /api/posts       | Get all blog posts       |
| POST   | /api/posts       | Create a new blog post   |
| GET    | /api/posts/:id   | Get a specific post      |
| PUT    | /api/posts/:id   | Update a blog post      |
| DELETE | /api/posts/:id   | Delete a blog post      |


