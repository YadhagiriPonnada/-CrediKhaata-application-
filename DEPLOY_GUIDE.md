# CrediKhaata Deployment Guide

This guide provides step-by-step instructions for deploying the CrediKhaata application to various hosting platforms.

## Prerequisites

- Git installed on your computer
- Node.js 14+ and npm 6+ installed
- MongoDB database (local or cloud-based)
- Account on your chosen deployment platform

## Deploy to Vercel (Recommended)

1. Fork or clone this repository to your GitHub account
   ```
   git clone https://github.com/YadhagiriPonnada/-CrediKhaata-application-.git
   cd -CrediKhaata-application-
   ```

2. Create a MongoDB database using MongoDB Atlas (free tier available):
   - Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a new cluster (M0 free tier)
   - Create a database user with read/write access
   - Set network access to allow connections from anywhere (0.0.0.0/0)
   - Get your connection string: `mongodb+srv://<username>:<password>@cluster0.mongodb.net/credikhaata`

3. Deploy to Vercel using GitHub integration:
   - Create an account on [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Add the following environment variables:
     ```
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_secure_jwt_secret
     NODE_ENV=production
     ```
   - Deploy your project

4. Once deployed, Vercel will provide you with a URL like `https://credikhaata-application.vercel.app`

## Deploy to Render.com (Alternative)

1. Sign up for a free account at [Render.com](https://render.com)

2. Create a new Web Service:
   - Connect your GitHub repository
   - Configure the service:
     - Name: `credikhaata`
     - Environment: `Node`
     - Build Command: `npm install && npm run build`
     - Start Command: `npm start`
   - Add environment variables:
     ```
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_secure_jwt_secret
     NODE_ENV=production
     PORT=10000
     ```
   - Deploy the service

3. Render will provide a URL like `https://credikhaata.onrender.com`

## Use Ngrok for Temporary Public URL

If you want to quickly share your locally running application with others:

1. Install ngrok:
   ```
   npm install -g ngrok
   ```

2. Start your application locally:
   ```
   npm start
   ```

3. In a separate terminal, create a tunnel:
   ```
   ngrok http 5000
   ```

4. Access the provided URL (e.g., https://abc123.ngrok.io)

## PowerShell Commands for Windows Users

Since `&&` doesn't work in PowerShell, use these commands instead:

```powershell
# Build frontend
cd temp-frontend; npm run build; cd ..

# Set production environment and start
$env:NODE_ENV="production"; npm start
```

## Troubleshooting

1. **MongoDB Connection Errors**
   - Check your connection string
   - Ensure network access is allowed (IP whitelist)
   - Verify database user credentials

2. **"[object Object]" ObjectId Errors**
   - Check customer ID validation in API handlers

3. **Frontend/Backend Communication Issues**
   - Verify API URL configuration in frontend services
   - Use browser dev tools to check for network errors

## Security Considerations

1. Always use environment variables for sensitive information
2. Set a strong JWT_SECRET value
3. Ensure MongoDB connection uses authentication
4. If using a cloud provider, set up proper access controls 