
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Lightbulb, Heart } from 'lucide-react';

const BackedMotivation = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F3EAFD] to-[#E1EBFD]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="bg-[#D6BCFA] text-[#7E69AB] px-4 py-1 mb-4">
            OUR MOTIVATION
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why We Do What We Do</h2>
          <p className="text-gray-600 text-lg">
            Our mission is to use grants and funds effectively and transparently to create a positive impact and achieve our transformation milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all border-none">
            <CardContent className="p-8">
              <div className="bg-[#F3EAFD] h-16 w-16 flex items-center justify-center rounded-2xl mb-6">
                <Target className="h-8 w-8 text-[#7E69AB]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Clear Vision</h3>
              <p className="text-gray-600">
                To transform educational institutes into centers of excellence that provide world-class education accessible to all students regardless of their financial background.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all border-none">
            <CardContent className="p-8">
              <div className="bg-[#F3EAFD] h-16 w-16 flex items-center justify-center rounded-2xl mb-6">
                <Heart className="h-8 w-8 text-[#7E69AB]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Core Values</h3>
              <p className="text-gray-600">
                We believe in transparency, accountability, and accessibility. Our motto: "Why pay fees, if it's free?" drives us to make quality education accessible to all.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all border-none">
            <CardContent className="p-8">
              <div className="bg-[#F3EAFD] h-16 w-16 flex items-center justify-center rounded-2xl mb-6">
                <Lightbulb className="h-8 w-8 text-[#7E69AB]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovative Approach</h3>
              <p className="text-gray-600">
                By leveraging CSR grants and alumni donations, we create sustainable models that can transform institutes without burdening students with high fees.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Transformation Milestone</h3>
              <p className="text-gray-600 mb-6">
                By 2026, we aim to transform:
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-[#7E69AB] mr-3"></div>
                  <span className="font-medium">1000+ institutes with our backing program</span>
                </div>
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-[#7E69AB] mr-3"></div>
                  <span className="font-medium">100,000+ students with quality education</span>
                </div>
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-[#7E69AB] mr-3"></div>
                  <span className="font-medium">25+ states across India with our presence</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F3EAFD] p-6 rounded-xl">
              <h4 className="font-semibold mb-4">What Makes Us Different?</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-[#7E69AB] rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">We don't charge institutes for recognition or awards</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#7E69AB] rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">We don't take commissions on high fees from students</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#7E69AB] rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">We have a strict child abuse and ethical policy</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#7E69AB] rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">We don't promote gambling, betting or other unethical activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackedMotivation;
