# Next.js E-Commerce project with Wix

## Welcome to My E-Commerce Project!  

This project is a modern e-commerce platform built using Next.js, integrated with Wix as a backend CMS for product and store management. This is my first venture into combining the power of Next.js with Wix’s robust content and product APIs.  

## Purpose  

The goal of this project is to create a fully functional, user-friendly e-commerce platform that allows businesses to showcase and sell their products online efficiently. With a seamless front-end user experience and an easy-to-manage backend, this project serves as a foundation for scaling e-commerce solutions.  

## Technologies Used  

### Front End:  
- Next.js  
- React  
- Tailwind CSS  

### Backend & CMS:  
- Wix Headless CMS  
- GraphQL API  

### Additional Technologies:  
- Vercel (Hosting)  
- Stripe (Payment Gateway Integration)  
- GitHub Actions (CI/CD)  
- Axios (API Requests)  

## Features Implemented  

- **Dynamic Product Pages:** Each product is dynamically fetched from Wix's CMS, ensuring accurate and up-to-date product information.  
- **Shopping Cart:** A robust shopping cart system with add, remove, and quantity update functionality.  
- **Payment Integration:** Secure payment processing using Stripe for a seamless checkout experience.  
- **Responsive Design:** Fully responsive layout for both desktop and mobile users.  
- **Category Filters:** Users can filter and sort products by categories for easier navigation.  
- **Fast Page Loads:** Optimized Next.js server-side rendering and static site generation (SSG).  

## Project Walk-Through  

This project is inspired by a walkthrough from the [Lama Dev YouTube Channel](https://www.youtube.com/watch?v=I0BOUiFe9WY&ab_channel=LamaDev), where I followed along to learn and customize the implementation.  

## How to Run the Project  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/your-username/nextjs-ecommerce-wix.git  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Create a `.env.local` file in the root directory and include the following environment variables:  
   ```env  
   WIX_API_URL=your_wix_api_url  
   WIX_API_KEY=your_wix_api_key  
   STRIPE_API_KEY=your_stripe_api_key  
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key  
   ```  

4. Start the development server:  
   ```bash  
   npm run dev  
   ```  

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  


## Future Enhancements  

- Implement user authentication for personalized shopping experiences.  
- Add order history and tracking functionality.  
- Integrate advanced product search
