
import React, { useState } from "react";
import { 
  BookOpen, 
  Calendar, 
  ChevronDown,
  Download, 
  FileDown, 
  FileText, 
  Filter, 
  Folder, 
  GraduationCap, 
  Search, 
  SlidersHorizontal
} from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const OfficialDocuments = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  
  const documentCategories = [
    { id: "all", name: "All Categories" },
    { id: "curriculum", name: "Curriculum" },
    { id: "roadmaps", name: "Roadmaps" },
    { id: "guides", name: "Guides" },
    { id: "certificates", name: "Certificates" },
    { id: "forms", name: "Forms" },
  ];
  
  const documentTypes = [
    { id: "all", name: "All Types" },
    { id: "pdf", name: "PDF" },
    { id: "doc", name: "Word Document" },
    { id: "ppt", name: "Presentation" },
    { id: "img", name: "Image" },
  ];
  
  const documents = [
    {
      id: 1,
      title: "Scholar Program Curriculum",
      description: "Complete curriculum for the Uniford Scholar Program",
      category: "curriculum",
      type: "pdf",
      date: "2023-08-15",
      size: "4.2 MB",
      downloads: 3250,
    },
    {
      id: 2,
      title: "Campus to Corporate Roadmap",
      description: "Step-by-step roadmap for transitioning from campus to corporate",
      category: "roadmaps",
      type: "pdf",
      date: "2023-09-22",
      size: "2.8 MB",
      downloads: 2180,
    },
    {
      id: 3,
      title: "Internship Application Guide",
      description: "Comprehensive guide for applying to internships through Uniford",
      category: "guides",
      type: "pdf",
      date: "2023-07-10",
      size: "3.5 MB",
      downloads: 4120,
    },
    {
      id: 4,
      title: "Social Internship Certificate Template",
      description: "Template for social internship certification",
      category: "certificates",
      type: "doc",
      date: "2023-10-05",
      size: "1.2 MB",
      downloads: 1850,
    },
    {
      id: 5,
      title: "ID Card Application Form",
      description: "Application form for Scholar ID Card",
      category: "forms",
      type: "pdf",
      date: "2023-11-12",
      size: "0.8 MB",
      downloads: 5230,
    },
    {
      id: 6,
      title: "Project Expo Guidelines",
      description: "Guidelines and rules for participating in the Project Expo",
      category: "guides",
      type: "pdf",
      date: "2023-12-01",
      size: "2.1 MB",
      downloads: 1920,
    },
    {
      id: 7,
      title: "Leadership Skills Development",
      description: "Curriculum for developing leadership skills",
      category: "curriculum",
      type: "ppt",
      date: "2024-01-15",
      size: "5.6 MB",
      downloads: 1430,
    },
    {
      id: 8,
      title: "Entrepreneurship Roadmap",
      description: "Roadmap for student entrepreneurs",
      category: "roadmaps",
      type: "pdf",
      date: "2024-02-20",
      size: "3.2 MB",
      downloads: 2670,
    },
    {
      id: 9,
      title: "Verified Scholar Badge Guidelines",
      description: "Requirements and process for earning the Verified Scholar Badge",
      category: "guides",
      type: "pdf",
      date: "2024-03-08",
      size: "1.5 MB",
      downloads: 3120,
    },
    {
      id: 10,
      title: "Membership Refund Form",
      description: "Form for applying for a membership fee refund",
      category: "forms",
      type: "doc",
      date: "2024-04-01",
      size: "0.6 MB",
      downloads: 980,
    },
  ];
  
  const featuredDocuments = [
    {
      id: 1,
      title: "Complete Scholar Handbook",
      description: "Everything you need to know about the Uniford Scholar Program",
      icon: <BookOpen className="h-8 w-8 text-unifor-purple" />,
      category: "guides",
      type: "pdf",
      downloads: 8540,
    },
    {
      id: 2,
      title: "Career Development Roadmap",
      description: "Strategic plan for career growth and development",
      icon: <GraduationCap className="h-8 w-8 text-unifor-purple" />,
      category: "roadmaps",
      type: "pdf",
      downloads: 6320,
    },
    {
      id: 3,
      title: "Annual Scholar Calendar",
      description: "Calendar of all events, deadlines, and opportunities for the year",
      icon: <Calendar className="h-8 w-8 text-unifor-purple" />,
      category: "guides",
      type: "pdf",
      downloads: 5790,
    },
  ];
  
  // Filter documents based on search query and selected filters
  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory;
    const matchesType = selectedType === "all" || doc.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });
  
  const getDocumentTypeIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-5 w-5 text-red-500" />;
      case "doc":
        return <FileText className="h-5 w-5 text-blue-500" />;
      case "ppt":
        return <FileText className="h-5 w-5 text-orange-500" />;
      case "img":
        return <FileText className="h-5 w-5 text-green-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };
  
  const getDocumentTypeBadge = (type) => {
    switch (type) {
      case "pdf":
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">PDF</Badge>;
      case "doc":
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">DOC</Badge>;
      case "ppt":
        return <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">PPT</Badge>;
      case "img":
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">IMG</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-unifor-dark-purple to-unifor-purple text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Official Documents</h1>
              <p className="text-lg mb-8">
                Access all curriculums, roadmaps, guides, and official documents for Uniford Scholars
              </p>
              
              <div className="relative max-w-xl mx-auto">
                <Input
                  type="search"
                  placeholder="Search for documents..."
                  className="pl-10 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/70"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Documents */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Featured Documents</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredDocuments.map((doc) => (
                <Card key={doc.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="h-12 w-12 rounded-full bg-unifor-light-purple/30 flex items-center justify-center">
                        {doc.icon}
                      </div>
                      {getDocumentTypeBadge(doc.type)}
                    </div>
                    <CardTitle className="mt-4">{doc.title}</CardTitle>
                    <CardDescription>{doc.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mt-4">
                      <div className="text-sm text-gray-500">
                        Downloads: {doc.downloads.toLocaleString()}
                      </div>
                      <Button size="sm" className="gap-2">
                        <Download className="h-4 w-4" /> Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Documents Library */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Documents Library</h2>
              
              {/* Filters */}
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Input
                    type="search"
                    placeholder="Search documents..."
                    className="w-full pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                
                <div className="flex gap-4">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {documentCategories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Document Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {documentTypes.map((type) => (
                        <SelectItem key={type.id} value={type.id}>
                          {type.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Document Table */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <Tabs defaultValue="table" className="w-full">
                  <div className="px-4 pt-4 flex justify-between items-center border-b">
                    <TabsList>
                      <TabsTrigger value="table">Table View</TabsTrigger>
                      <TabsTrigger value="grid">Grid View</TabsTrigger>
                    </TabsList>
                    
                    <div className="text-sm text-gray-500">
                      {filteredDocuments.length} documents found
                    </div>
                  </div>
                  
                  <TabsContent value="table" className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Document</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Size</TableHead>
                          <TableHead>Downloads</TableHead>
                          <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredDocuments.length > 0 ? (
                          filteredDocuments.map((doc) => (
                            <TableRow key={doc.id}>
                              <TableCell>
                                <div className="flex items-start gap-3">
                                  {getDocumentTypeIcon(doc.type)}
                                  <div>
                                    <div className="font-medium">{doc.title}</div>
                                    <div className="text-sm text-gray-500">{doc.description}</div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline" className="capitalize">
                                  {doc.category}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                {getDocumentTypeBadge(doc.type)}
                              </TableCell>
                              <TableCell>{new Date(doc.date).toLocaleDateString()}</TableCell>
                              <TableCell>{doc.size}</TableCell>
                              <TableCell>{doc.downloads.toLocaleString()}</TableCell>
                              <TableCell className="text-right">
                                <Button size="sm" variant="outline" className="gap-1">
                                  <Download className="h-4 w-4" /> Download
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                              No documents found matching your search criteria
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </TabsContent>
                  
                  <TabsContent value="grid">
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredDocuments.length > 0 ? (
                        filteredDocuments.map((doc) => (
                          <Card key={doc.id} className="hover:shadow-md transition-shadow">
                            <CardHeader className="pb-2">
                              <div className="flex justify-between items-start">
                                {getDocumentTypeIcon(doc.type)}
                                {getDocumentTypeBadge(doc.type)}
                              </div>
                              <CardTitle className="text-lg mt-2">{doc.title}</CardTitle>
                              <CardDescription>{doc.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 mb-4">
                                <div>Category: <span className="capitalize">{doc.category}</span></div>
                                <div>Size: {doc.size}</div>
                                <div>Date: {new Date(doc.date).toLocaleDateString()}</div>
                                <div>Downloads: {doc.downloads.toLocaleString()}</div>
                              </div>
                              <Button size="sm" className="w-full gap-2">
                                <Download className="h-4 w-4" /> Download
                              </Button>
                            </CardContent>
                          </Card>
                        ))
                      ) : (
                        <div className="col-span-3 text-center py-12 text-gray-500">
                          No documents found matching your search criteria
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
        
        {/* Request Documents Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
              <p className="text-gray-600 mb-8">
                If you need any specific document that's not listed here, you can request it from our support team.
              </p>
              <Button size="lg" className="bg-unifor-purple hover:bg-unifor-dark-purple">
                Request Document
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OfficialDocuments;
