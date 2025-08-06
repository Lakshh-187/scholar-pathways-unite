import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import DocumentTypes from "@/components/documents/DocumentTypes";
import DocumentFilters from "@/components/documents/DocumentFilters";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Download, Eye, FilePen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const documents = [
  {
    id: 1,
    title: "Annual Report 2024",
    category: "reports",
    type: "pdf",
    date: "2024-03-15",
    size: "4.2 MB",
    downloads: 234,
  },
  {
    id: 2,
    title: "Student Handbook 2024",
    category: "guides",
    type: "pdf",
    date: "2024-01-10",
    size: "3.1 MB",
    downloads: 452,
  },
  {
    id: 3,
    title: "Research Methodology Guidelines",
    category: "curriculum",
    type: "doc",
    date: "2023-11-05",
    size: "1.8 MB",
    downloads: 326,
  },
  {
    id: 4,
    title: "Uniford Magazine - March 2024",
    category: "magazines",
    type: "magazine",
    date: "2024-03-01",
    size: "8.7 MB",
    downloads: 187,
  },
  {
    id: 5,
    title: "Scholarship Application Form",
    category: "forms",
    type: "doc",
    date: "2024-02-20",
    size: "0.6 MB",
    downloads: 895,
  },
  {
    id: 6,
    title: "Academic Calendar 2024-25",
    category: "roadmaps",
    type: "pdf",
    date: "2024-04-01",
    size: "1.2 MB",
    downloads: 267,
  },
  {
    id: 7,
    title: "Research Paper: AI in Education",
    category: "published",
    type: "pdf",
    date: "2023-12-12",
    size: "2.4 MB",
    downloads: 156,
  },
  {
    id: 8,
    title: "Summer Internship Directory",
    category: "guides",
    type: "pdf",
    date: "2024-02-15",
    size: "5.3 MB",
    downloads: 423,
  },
];

const featuredDocuments = [
  {
    id: 1,
    title: "Annual Report 2024",
    description: "Comprehensive overview of Uniford Foundation's activities, achievements and financial statements for the year 2024.",
    type: "pdf",
    category: "reports",
  },
  {
    id: 2,
    title: "Uniford Magazine - Spring Edition",
    description: "The latest issue featuring success stories, scholar interviews, and foundation updates.",
    type: "magazine",
    category: "magazines",
  },
  {
    id: 3,
    title: "Career Roadmap 2025",
    description: "Strategic guide for students planning their careers in emerging technologies and industries.",
    type: "pdf",
    category: "roadmaps",
  },
  {
    id: 4,
    title: "Research Paper: Future of Work",
    description: "Published research on how AI and automation are reshaping employment landscapes globally.",
    type: "pdf",
    category: "published",
  },
];

const Published = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [activeTab, setActiveTab] = useState("all");

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory;
    const matchesType = selectedType === "all" || doc.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-24 pb-16">
        <section className="bg-gradient-to-b from-purple-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
                RESOURCES CENTER
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Published Documents</h1>
              <p className="text-lg text-gray-600">
                Access our comprehensive collection of publications, reports, forms, and resources
              </p>
            </div>
            
            <Tabs defaultValue="featured" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="featured">Featured Documents</TabsTrigger>
                <TabsTrigger value="browse">Browse All Documents</TabsTrigger>
              </TabsList>
              
              <TabsContent value="featured" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredDocuments.map((doc) => (
                    <Card key={doc.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-unifor-light-purple p-3 rounded-lg">
                            {doc.type === "pdf" ? (
                              <FileText className="h-6 w-6 text-unifor-purple" />
                            ) : doc.type === "magazine" ? (
                              <FilePen className="h-6 w-6 text-unifor-purple" />
                            ) : (
                              <FileText className="h-6 w-6 text-unifor-purple" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">{doc.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="text-xs">
                                <Eye className="h-3.5 w-3.5 mr-1" /> View
                              </Button>
                              <Button variant="outline" size="sm" className="text-xs">
                                <Download className="h-3.5 w-3.5 mr-1" /> Download
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="browse" className="space-y-8">
                <DocumentTypes />
                
                <DocumentFilters 
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  selectedType={selectedType}
                  setSelectedType={setSelectedType}
                />
                
                <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Downloads</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredDocuments.length > 0 ? (
                        filteredDocuments.map((doc) => (
                          <TableRow key={doc.id}>
                            <TableCell className="font-medium">{doc.title}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="capitalize">
                                {doc.type}
                              </Badge>
                            </TableCell>
                            <TableCell>{doc.date}</TableCell>
                            <TableCell>{doc.size}</TableCell>
                            <TableCell>{doc.downloads}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Download className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                            No documents found matching your filters
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Published;
