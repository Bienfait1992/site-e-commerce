import React, { FunctionComponent } from "react";

 const Footer: FunctionComponent = ()=>{
    return(
        <div>
 <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 E-Commerce. All rights reserved.</p>
        <nav>
          <ul className="flex justify-center space-x-4 mt-4">
            <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:underline">Terms of Service</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </footer>

        </div>
    );
}
export default Footer;