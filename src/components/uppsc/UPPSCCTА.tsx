import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const UPPSCCTА = () => {
  return (
    <section className="py-20 bg-yellow-400">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
          Ready to Join the Movement?
        </h2>
        <p className="text-black/70 text-lg max-w-2xl mx-auto mb-8">
          Transform your school with international standards and safety protocols. Join UPPSC today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/apply">
            <Button className="bg-black hover:bg-gray-900 text-white font-bold px-10 py-6 text-lg shadow-xl">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/sssa">
            <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold px-10 py-6 text-lg">
              Explore SSSA
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UPPSCCTА;
