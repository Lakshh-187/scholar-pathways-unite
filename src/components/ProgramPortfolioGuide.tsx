
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, Download, Upload, BookOpen, Video, 
  Image, FileCheck, Link, ExternalLink, Paperclip 
} from "lucide-react";

const ProgramPortfolioGuide = () => {
  const attachments = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Portfolio Template",
      description: "Complete portfolio structure and design templates",
      type: "PDF",
      size: "2.4 MB",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Instructions Guide",
      description: "Step-by-step guide for creating your portfolio",
      type: "PDF",
      size: "1.8 MB",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Video Tutorial",
      description: "Complete walkthrough video for portfolio creation",
      type: "MP4",
      size: "25.6 MB",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Image className="h-6 w-6" />,
      title: "Design Assets",
      description: "Images, icons, and design elements pack",
      type: "ZIP",
      size: "8.2 MB",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Checklist",
      description: "Portfolio completion and quality checklist",
      type: "PDF",
      size: "450 KB",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <Link className="h-6 w-6" />,
      title: "Sample Portfolios",
      description: "Examples of successful scholar portfolios",
      type: "URL",
      size: "Online",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
            PORTFOLIO RESOURCES
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-unifor-dark-purple">
            Portfolio Instructions & Resources
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Download comprehensive guides, templates, and resources to create an outstanding portfolio
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button className="bg-unifor-purple hover:bg-unifor-dark-purple text-white">
            <Download className="mr-2 h-4 w-4" />
            Download All Resources
          </Button>
          <Button variant="outline" className="border-unifor-purple text-unifor-purple hover:bg-unifor-purple/10">
            <Upload className="mr-2 h-4 w-4" />
            Submit Portfolio
          </Button>
          <Button variant="outline" className="border-unifor-purple text-unifor-purple hover:bg-unifor-purple/10">
            <ExternalLink className="mr-2 h-4 w-4" />
            View Examples
          </Button>
        </div>

        {/* Attachments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {attachments.map((attachment, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-unifor-purple/30 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${attachment.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {attachment.icon}
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="text-xs">
                      {attachment.type}
                    </Badge>
                    <p className="text-xs text-gray-500 mt-1">{attachment.size}</p>
                  </div>
                </div>
                <CardTitle className="text-lg text-unifor-dark-purple group-hover:text-unifor-purple transition-colors">
                  {attachment.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {attachment.description}
                </p>
                <Button 
                  size="sm" 
                  className="w-full bg-unifor-purple/10 text-unifor-purple hover:bg-unifor-purple hover:text-white transition-all"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Instructions Summary */}
        <div className="bg-gradient-to-r from-unifor-dark-purple/5 to-unifor-purple/5 rounded-2xl p-8 border border-unifor-purple/20">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-unifor-purple to-unifor-light-purple mb-4">
              <Paperclip className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-unifor-dark-purple mb-4">
              Portfolio Creation Process
            </h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-unifor-purple text-white flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                1
              </div>
              <h4 className="font-semibold text-unifor-dark-purple mb-2 text-sm">Download Resources</h4>
              <p className="text-xs text-gray-600">Get all templates and guides</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-unifor-purple text-white flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                2
              </div>
              <h4 className="font-semibold text-unifor-dark-purple mb-2 text-sm">Follow Instructions</h4>
              <p className="text-xs text-gray-600">Use the step-by-step guide</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-unifor-purple text-white flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                3
              </div>
              <h4 className="font-semibold text-unifor-dark-purple mb-2 text-sm">Create Portfolio</h4>
              <p className="text-xs text-gray-600">Build your professional portfolio</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-unifor-purple text-white flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                4
              </div>
              <h4 className="font-semibold text-unifor-dark-purple mb-2 text-sm">Submit & Review</h4>
              <p className="text-xs text-gray-600">Submit for evaluation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramPortfolioGuide;
