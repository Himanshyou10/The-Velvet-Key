# 🗝️ The Velvet Key

The Velvet Key is a **full-stack luxury hotel booking platform** built with the **MERN stack**, integrating **Clerk for secure authentication**, **Stripe for real-time payments**, **Cloudinary for image storage**, and **Nodemailer SMTP** to send booking confirmation emails. It offers a seamless experience for users to browse, book, and pay for luxury hotel rooms online with confidence and ease.

---

## 🚀 Live Link

👉 [The Velvet Key Live](https://the-velvet-key.vercel.app/)

---

## ✨ Features

- 🔑 **Authentication with Clerk** for secure user login/signup  
- 💳 **Stripe integration** for real-time and secure payments  
- 🏨 **Browse and book luxury hotels** with detailed room information  
- 🖼️ **Image storage and management** using Cloudinary  
- 📧 **Booking confirmation emails** sent via Nodemailer SMTP  
- 🎨 **Beautiful responsive UI** with Tailwind CSS  
- ⚡ **Full-stack MERN application** for scalable performance

---

## 🔧 Tech Stack

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB with Mongoose  
- **Authentication:** Clerk  
- **Payments:** Stripe  
- **Image Storage:** Cloudinary  
- **Email Service:** Nodemailer SMTP  
- **Deployment:** Vercel

---

## 📂 Installation

Clone the repository:

git clone https://github.com/Himanshyou10/The-Velvet-Key.git
cd The-Velvet-Key

## Install server dependencies
cd server
npm install

##Install client dependencies
cd ../client
npm install

## 🔑 Configure environment variables
Create a .env file in the server folder with:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLERK_SECRET_KEY=your_clerk_secret_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password


## Start server
cd server
npm start

## Start client
cd ../client
npm start


