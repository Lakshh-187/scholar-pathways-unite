import React from "react";
import { Button } from "@/components/ui/button";
import { Award, ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const NominateCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Ready to Showcase Your
            <span className="text-yellow-500"> School's Excellence?</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join hundreds of schools already recognized as "Great Place to Learn". 
            Start your nomination journey today.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 gap-2 px-8 py-6 text-lg">
              <Award className="w-5 h-5" />
              Start Nomination
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-100 gap-2 px-8 py-6 text-lg"
              asChild
            >
              <Link to="/apply">
                <MessageCircle className="w-5 h-5" />
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl">
              <Phone className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
              <p className="text-gray-600 text-sm">+91 9876543210</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <Mail className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
              <p className="text-gray-600 text-sm">nominations@sssa.org</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <MessageCircle className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-1">WhatsApp</h4>
              <p className="text-gray-600 text-sm">Quick Response Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NominateCTA;
