# IELTS Course Product Page - README

## Project Overview

This is a Next.js application that displays an IELTS course product page similar to 10 Minute School's implementation. The page is built with React, TypeScript, and TailwindCSS, and consumes data from a provided API endpoint.

GitHub Repository: [https://github.com/salehshakib/home-assignment-task-by-10-min-school.git](https://github.com/salehshakib/home-assignment-task-by-10-min-school.git)

## Features

- Server-side rendering (SSR) for better SEO and initial load performance
- Localization support (English/Bangla) via API parameter
- Responsive design with TailwindCSS
- Reusable components for maintainability
- TypeScript for type safety
- Proper SEO implementation using data from the API
- Sections include:
  - Course title and description
  - Instructor information
  - Product trailer (YouTube embed)
  - Course layout/features
  - Learning outcomes
  - Exclusive features
  - Course details
  - Checklist items

## Code Splitting Approach

This project implements several code splitting strategies to optimize performance:

1. **Dynamic Imports**: Heavy components are dynamically imported to reduce initial bundle size.

2. **Route-based Splitting**: Next.js automatically splits code by pages.

3. **Component-level Splitting**: Larger components are split into smaller, reusable components that can be loaded independently.

4. **Library Splitting**: Heavy third-party libraries are loaded only when needed.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/salehshakib/home-assignment-task-by-10-min-school.git
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

### Running Production Build

```bash
npm start
# or
yarn start
```

## Docker Support

A Dockerfile is included for containerized deployment:

```bash
# Build the Docker image
docker build -t ielts-course-page .

# Run the container
docker run -p 3000:3000 ielts-course-page
```

## Environment Variables

Create a `.env.local` file in the root directory with the following:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.10minuteschool.com/discovery-service/api/v1
```

## Project Structure

```
/src
  /components
    /common      # Reusable UI components
    /sections    # Page section components
  /pages
    /api         # API routes
    /products    # Product pages
  /types         # TypeScript interfaces
  /utils         # Utility functions
```

## API Integration

The application fetches data from:

```
GET https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en
```

Required header:

```
X-TENMS-SOURCE-PLATFORM: web
```

## Deployment

The application can be deployed to any platform that supports Next.js applications, including:

- Vercel
- Netlify
- AWS Amplify
- Docker containers

## Technologies Used

- Next.js (React framework)
- TypeScript
- TailwindCSS
- React YouTube (for video embedding)
- Axios (for API calls)
