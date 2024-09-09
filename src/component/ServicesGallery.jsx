// src/components/ServiceGallery.js
import React from 'react';
import { Users, ThumbsUp, Truck, Trophy, Cog, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/images/s1.jpg'; 

const services = [
  { icon: <Users size={24} />, title: "CUSTOMER SERVICE", description: "We are a friendly group of knowledgeable and courteous people who coordinate and schedule your concrete pours." },
  { icon: <ThumbsUp size={24} />, title: "QUALITY CONTROL", description: "Our qualified specialists help us to create status of a group leader in the market." },
  { icon: <Truck size={24} />, title: "WAREHOUSE MATERIALS", description: "We have a complete inventory of all grades of steel products in our warehouses."
 },
  { icon: <Trophy size={24} />, title: "READY-MIX CONCRETE", description: "From Concept to Construction, Our Steel Stands Strong and True." },
  { icon: <Cog size={24} />, title: "SAND YARD OPERATIONS", description: "At Shreem Steel, our steel is synonymous with reliability. We ensure each product meets stringent quality controls, providing you with the confidence that your projects will be built on a foundation of strength." },
  { icon: <Tag size={24} />, title: "BLOCK SALES", description: "Discover the benefits of our steel products for your construction projects. With a focus on strength and low cost, our steel delivers exceptional performance and durability, providing great value for every application" },
];

// Array of colors for the icons
const iconColors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#A833FF', '#33FFF2'];

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 1, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5 } 
  },
};

const ServiceGallery = () => {
  return (
    <motion.div 
      className="service-gallery"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <h2 className="gallery-heading">Our Expertise </h2>
      <motion.div className="services-container">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="service-item"
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 2 }} // Adding rotation on hover for fun effect
          >
            <motion.div 
              className="service-icon" 
              style={{ backgroundColor: iconColors[index % iconColors.length] }}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {React.cloneElement(service.icon, { color: 'white' })}
            </motion.div>
            <h3>{service.title}</h3>
            <p className='p'>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <style jsx>{`
        .service-gallery {
          position: relative;
          top:-100px;
          background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage});
          
          background-size: cover;
          background-position: center;
          padding: 1rem;
          color: white;
        }
        .gallery-heading {
          text-align: center;
          margin-bottom: 2rem;
          font-size: 2.5rem;
          color:white;
        }
        .services-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }
        .service-item {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          padding: 1.5rem;
          text-align: center;
          transition: transform 0.3s ease;
        }
        .service-icon {
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto 1rem;
          
        }
        h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
        p {
          font-size: 1.02rem;
          line-height: 1.4;
        }
        .p {
          color: white; 
          font-size: 1.02rem;
        }
        @media (max-width: 768px) {
          .services-container {
            grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
          }
        }
        @media (max-width: 480px) {
          .services-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default ServiceGallery;
