# BEC Chat

**BEC Chat** is a real-time messaging application built for the alumni of Bapatla Engineering College (BEC). This platform allows alumni to connect, network, and chat seamlessly with their peers.

## Features

- **Real-Time Messaging**: Instant chat functionality for seamless communication.
- **User Authentication**: Secure login with Google or email/password.
- **Unique Chat Links**: Shareable URLs for direct chat access.
- **User Search**: Find users by name or email.
- **Responsive Design**: Mobile-friendly and responsive UI.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, NextAuth.js
- **Database**: MongoDB with Prisma ORM
- **Real-Time Communication**: Pusher
- **Image Storage**: Cloudinary
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- MongoDB Database

### Environment Variables

Create a `.env` file in the root of your project and add the following:

```env
DATABASE_URL=
NEXTAUTH_SECRET=
BROWSERSLIST_IGNORE_OLD_DATA=

GOOGLE_ID=
GOOGLE_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_PUSHER_APP_KEY=
PUSHER_APP_ID=
PUSHER_SECRET=
PUSHER_CLUSTER=
```

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/amruthexe/Bec-chat.git
   cd Bec-chat
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Generate Prisma Client:**
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

## Deployment

1. **Deploy to Vercel:**
   - Connect your GitHub repo to Vercel.
   - Add the environment variables in the Vercel dashboard.
   - Deploy the project.

## Folder Structure

```
.
├── components          # Reusable UI components
├── pages              # Next.js page routes
├── prisma             # Prisma schema and migrations
├── public             # Public assets
├── styles             # Global styles (Tailwind CSS)
├── .env               # Environment variables
├── package.json       # Project dependencies
└── README.md          # Project documentation
```

## Usage

- **Sign In/Up** with Google or email/password.
- **Search** for alumni by name or email.
- **Chat** in real-time with alumni.
- **Share** your unique chat link to connect instantly.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Prisma](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)
- [Pusher](https://pusher.com/)
- [Cloudinary](https://cloudinary.com/)
- [Vercel](https://vercel.com/)

