import React, { FunctionComponent } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// import { Card } from "./card";
import { DataImages } from "../data/data";
import { NavLink } from "react-router-dom";


// import { u seState } from "react";
// type Props={
//     borderColor?: string
// };
const Home: FunctionComponent = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const testimonialsList = [
    { id: 1, name: 'John Doe', text: 'Great products and fast shipping!' },
    { id: 2, name: 'Jane Smith', text: 'Excellent customer service and quality.' },
  ];
  
  return (
      <div>

   
    
    
    {/* Fonctionnement */}
    <section id="features" className="py-16">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-8">Why Shop With Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-2">Free Shipping</h4>
            <p>Enjoy free shipping on all orders over $50.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-2">24/7 Support</h4>
            <p>Our team is here to help you, anytime.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-2">Money-Back Guarantee</h4>
            <p>Not satisfied? Get a full refund within 30 days.</p>
          </div>
        </div>
      </div>
    </section>


{/* Produits */}
<section id="products" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-8">Featured Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DataImages.map(({ avatar1, description, prix, date,id}) =>(
            <div  className="bg-white p-6 rounded-lg shadow-md">
              <img src={avatar1} alt="" className="mb-4 w-full h-40 object-cover rounded" />
              <h4 className="text-xl font-bold mb-2">{description}</h4>
              <p className="text-lg text-blue-600">{prix}$</p>
              <NavLink to={`/ListCard/${id}`} className="block mt-4 bg-blue-600 text-white py-2 rounded-full">Voir Plus</NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>

    




    



{/* Temoignages */}
<section id="testimonials" className="py-16">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-8">What Our Customers Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsList.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">"{testimonial.text}"</p>
              <h4 className="text-xl font-bold">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className=" text-white py-20 ring-1 ring-black ring-opacity-5 shadow-lg">
      <div className="container mx-auto text-center text-black">
        <h3 className="text-3xl font-semibold mb-4">Ready to Shop?</h3>
        <p className="text-lg mb-8">Check out our latest collection today.</p>
        <a href="#products" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold">Shop Now</a>
      </div>
    </section>

          </div>
          );
    
}
export default Home;