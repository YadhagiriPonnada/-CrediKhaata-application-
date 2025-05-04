# CrediKhaata - Loan Tracker for Shopkeepers

A full-stack application to help small shopkeepers track credit sales and manage customer loans.

## Live Demo

Visit the live application: [CrediKhaata App](https://credikhaata-application.vercel.app/)

## Features

- **Customer Management**: Add, edit, and track customers with personal details and credit limits
- **Loan Tracking**: Record credit sales with due dates, interest rates, and payment terms
- **Payment Collection**: Register full or partial repayments against outstanding loans
- **Overdue Alerts**: Get notified about overdue payments and send reminders to customers
- **Dashboard Analytics**: Visual summary of outstanding loans, repayments, and business metrics

## Tech Stack

- **Frontend**: React, React Bootstrap, React Router, Axios
- **Backend**: Node.js, Express.js, JWT Authentication
- **Database**: MongoDB with Mongoose
- **Deployment**: Vercel, MongoDB Atlas

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas)
- npm or yarn

### Local Development

1. Clone the repository
   ```
   git clone https://github.com/YadhagiriPonnada/-CrediKhaata-application-.git
   cd -CrediKhaata-application-
   ```

2. Install server dependencies
   ```
   npm install
   ```

3. Install frontend dependencies
   ```
   cd temp-frontend
   npm install
   cd ..
   ```

4. Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/credikhaata
   JWT_SECRET=your_secure_secret_key
   NODE_ENV=development
   PORT=5000
   ```

5. Start the development server (backend)
   ```
   npm run dev
   ```

6. In a new terminal, start the frontend
   ```
   cd temp-frontend
   npm start
   ```

7. Visit `http://localhost:3000` in your browser

### PowerShell Commands for Windows

If you're using PowerShell, use these commands because it doesn't support the `&&` operator:

```powershell
# Start backend
npm run dev

# In a new terminal window
cd temp-frontend; npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new shopkeeper
- `POST /api/auth/login` - Login and get JWT token
- `GET /api/auth/profile` - Get current user profile

### Customer Management
- `POST /api/customers` - Add a new customer
- `GET /api/customers` - List all customers
- `GET /api/customers/:id` - Get customer by ID

### Loan Management
- `POST /api/loans` - Create a new loan
- `GET /api/loans` - View all loans (with filtering)
- `GET /api/loans/:id` - View specific loan details

### Repayment Management
- `POST /api/repayments` - Record a repayment
- `GET /api/repayments?loanId=...` - Get repayments for a loan

## Deployment

This application is deployed on Vercel. For detailed deployment instructions, see the [DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md) file.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.