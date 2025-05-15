
import React from "react";
import { ClipboardList } from "lucide-react";

const ApplyHero = () => {
  return (
    <section className="bg-gradient-to-r from-unifor-dark-purple to-unifor-purple text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://www.uniford.org/uniford-main/uniford1.jpg" 
          alt="Students collaborating" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
            <span className="text-white font-medium tracking-wider text-sm">Uniford Council Applications</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Apply for Uniford Programs</h1>
          
          <p className="text-lg md:text-xl mb-8">
            Complete your applications, submit documents, request resources, and apply for 
            various Uniford programs all in one place.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mt-8">
            <div className="flex items-center justify-center mb-4">
              <ClipboardList size={32} className="text-white mr-3" />
              <h2 className="text-2xl font-bold">Important Guidelines</h2>
            </div>
            <ul className="text-left space-y-3 max-w-2xl mx-auto">
              <li className="flex items-start">
                <span className="bg-white text-unifor-purple rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                <span>All form links must be <strong>public</strong> and accessible without requiring special permissions.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-white text-unifor-purple rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                <span>Use the "Share Link" option instead of uploading files directly to ensure accessibility.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-white text-unifor-purple rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                <span>Complete all required fields in the applications to avoid processing delays.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-white text-unifor-purple rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</span>
                <span>Applications are reviewed within 2-5 business days after submission.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyHero;
