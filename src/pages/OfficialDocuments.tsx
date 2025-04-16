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
import DocumentTypes from "@/components/documents/DocumentTypes";
import DocumentFilters from "@/components/documents/DocumentFilters";

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
      title: " platforms & Programs ",
      description: "Outsources platforms & old curriculam   Program",
      category: "Guide",
      type: "pdf",
      date: "2023-08-15",
      size: "4.2 MB",
      downloads: 3250,
      url: "https://drive.google.com/file/d/1fvnTwTTZCfOjUNl7aIvTNXs5YQDje0bl/view",
    },
    {
      id: 2,
      title: "Uniford Platforms & Programs ",
      description: "Step-by-step roadmap for transitioning from campus to corporate",
      category: "Guide",
      type: "pdf",
      date: "2024-09-22",
      size: "2.8 MB",
      downloads: 2180,
      url: "https://drive.google.com/file/d/1UhxGOg-8KlhFSaoxlebO_pXKl1N2VBNe/view",
    },
    {
      id: 3,
      title: "Uniford Portals ",
      description: "Email- info@uniford.org & password 1 to 8 in uniford.org",
      category: "guides",
      type: "pdf",
      date: "2023-07-10",
      size: "3.5 MB",
      downloads: 4120,
      url: "https://drive.google.com/file/d/1NgXVXn76xiQCr4jNE1HaXLxLyd4ouW10/view",
    },
    {
      id: 4,
      title: "Intern in organization",
      description: "on-boarding detail & benefits ",
      category: "Guide",
      type: "pdf",
      date: "2023-10-05",
      size: "1.2 MB",
      downloads: 1850,
      url: "https://drive.google.com/file/d/18zZY5c4hPWpO8Os9TKkI7VK_tRqxjLuj/view",
    },
    {
      id: 5,
      title: "Scholar Benefits Booklet",
      description: "a booklet cover scholar benefits ",
      category: "Guide",
      type: "pdf",
      date: "2023-11-12",
      size: "0.8 MB",
      downloads: 5230,
      url: "https://drive.google.com/file/d/1s-NkVi238UfZ9nPcR4ZLWClMpnrdKm60/view",
    },
    {
      id: 6,
      title: "Scholar Guide 2023 old",
      description: "Guidelines and rules for participating using ID card",
      category: "guides",
      type: "pdf",
      date: "2023-12-01",
      size: "2.1 MB",
      downloads: 1920,
      url: "https://drive.google.com/file/d/1u3BCUWAl6DEujjgGIAc3t1n007ze8Bmc/view",
    },
    {
      id: 7,
      title: " Uniford Scholar Council",
      description: "Empowering scholars to lead and grow.",
      category: "Guide",
      type: "ppt",
      date: "2024-01-15",
      size: "5.6 MB",
      downloads: 1430,
      url: "https://drive.google.com/file/d/1f-pvSDyd2sNvBVOnggMan6HFYzP1uKEw/view",
    },
    {
      id: 8,
      title: "💼 Leadership & Management by YLS",
      description: "Roadmap for student entrepreneurs & Initiator",
      category: "roadmaps",
      type: "pdf",
      date: "2024-02-20",
      size: "3.2 MB",
      downloads: 2670,
      url: "https://drive.google.com/file/d/1S8DExEOoet-jD0iQ2ejZfPFwBmeSGEds/view",
    },
    {
      id: 9,
      title: "🚀 Entrepreneurship (AI & Financial Literacy Advancement)",
      description: "Unlock entrepreneurial potential with cutting-edge AI and financial literacy programs.",
      category: "guides",
      type: "pdf",
      date: "2024-03-08",
      size: "1.5 MB",
      downloads: 3120,
      url: "https://drive.google.com/file/d/1ZY76PqWZq1mVFN5fItDPTnOdHFAXcQ4Y/view",
    },
    {
      id: 10,
      title: "🌀 Illusion - A Black Hole Campaign",
      description: "Uncover the truth about scams, myths, and facts to make informed decisions.",
      category: "Guide",
      type: "pdf",
      date: "2024-04-01",
      size: "0.6 MB",
      downloads: 980,
      url: "https://drive.google.com/file/d/1NFwhGuri2e3sj2BRxGJKLWzpaR_-PXvq/view",
    },
     {
      id: 11,
      title: " 6i Campaign",
      description: "Drive social initiatives that create meaningful impact.",
      category: "guides",
      type: "pdf",
      date: "2023-10-26",
       size: "1.2 MB",
      downloads: 100,
      url: "https://drive.google.com/file/d/1UyPhrPXGSduznwoM7euuOLtoMrkO_F36/view",
    },
    {
      id: 12,
      title: "Uniford Parliament for youths ",
      description: "Information about Uniford Parliament for youths",
      category: "guides",
      type: "pdf",
      date: "2023-10-26",
       size: "1.8 MB",
      downloads: 150,
      url: "https://drive.google.com/file/d/18ZjrEWedABrYw6xyPwTnG_zKn-pjGvaA/view",
    },
    {
      id: 13,
      title: "Social Internship",
      description: "detail task of social internships",
      category: "Guide",
      type: "pdf",
      date: "2023-10-26",
       size: "0.5 MB",
      downloads: 200,
      url: "https://drive.google.com/file/d/1Ce7ekLK_npBvNkdgInyPiaMaytTTzgIK/view",
    },
    {
      id: 14,
      title: "ID card On-boarding",
      description: "details of ID card On-boarding ",
      category: "Guide",
      type: "pdf",
      date: "2023-10-26",
      size: "0.6 MB",
      downloads: 220,
      url: "https://drive.google.com/file/d/15FvJTc-wB3Q4QGjcHby9TaLOA08hbFja/view",
    },
     {
      id: 15,
      title: " donated kits ",
      description: "Link to join the Uniford Biggest Campaign",
      category: "guides",
      type: "pdf",
      date: "2023-10-26",
       size: "0.1 MB",
      downloads: 500,
      url: "https://zaap.bio/be-aware",
    },
    {
      id: 16,
      title: "Premium Resources & FAQ",
      description: "Access premium resources and FAQ",
      category: "guides",
      type: "pdf",
      date: "2024-10-26",
      size: "3.5 MB",
      downloads: 6300,
      url: "https://drive.google.com/file/d/1jOWEcddhaQ30KMzDNd2v0y_I8P9RvhWR/view",
    },
     {
      id: 17,
      title: "Verified scholar - old",
      description: "Details about parameters of verified scholar",
      category: "guides",
      type: "pdf",
      date: "2024-10-26",
       size: "1.4 MB",
      downloads: 200,
      url: "https://drive.google.com/file/d/17gPzq_Yrf4TFcS7EiHxRUUAtm_oIlk16/view",
    },
    {
      id: 18,
      title: "SEP-700",
      description: "All worldwide opportunities",
      category: "guides",
      type: "pdf",
      date: "2024-10-26",
       size: "0.7 MB",
      downloads: 12350,
      url: "https://drive.google.com/file/d/1EDxL9Lnw3MGP2mkj8qz-PAOzjXi8v55_/view",
    },
    {
      id: 19,
      title: "114 + Premium Kits",
      description: "Access to 114+ premium kits",
      category: "guides",
      type: "pdf",
      date: "2023-10-26",
      size: "1.0 MB",
      downloads: 400,
      url: "https://drive.google.com/file/d/1b7GwH5iQ1rUd4Jq3bA-reXe9oASynRim/view?usp=drive_link",
    },
    {
      id: 20,
      title: "How to apply scholar Id",
      description: "Video guide on how to apply for a scholar ID",
      category: "guides",
      type: "pdf",
      date: "2023-10-26",
       size: "2.0 MB",
      downloads: 450,
      url: "https://drive.google.com/file/d/15FvJTc-wB3Q4QGjcHby9TaLOA08hbFja/view?usp=drive_link",
    },
       {
      id: 21,
      title: "Onboarding",
      description: "Onboarding document",
      category: "guides",
      type: "pdf",
      date: "2023-10-26",
       size: "2.5 MB",
      downloads: 450,
      url: "https://drive.google.com/file/d/1Ce7ekLK_npBvNkdgInyPiaMaytTTzgIK/view?usp=sharing",
    },
    {
      id: 22,
      title: "Social Internship",
      description: "Social Internship details",
      category: "guides",
      type: "pdf",
      date: "2023-10-26",
       size: "1.9 MB",
      downloads: 250,
      url: "https://drive.google.com/file/d/1rCzSYaeaU7xe3IOjQnLEGgqZibbqLMcY/view?usp=sharing",
    },
    {
      id: 23,
      title: "Roadmap by Harvard Research",
      description: "Roadmap by Harvard Research document",
      category: "roadmaps",
      type: "pdf",
      date: "2023-10-26",
       size: "3.9 MB",
      downloads: 350,
      url: "https://drive.google.com/file/d/1keEvTRQcq0m-AESPCTulsoEGOOhbYwmT/view?usp=sharing",
    },
    {
      id: 24,
      title: "Uniford Council Recogn",
      description: "Uniford council recognition document",
      category: "certificates",
      type: "pdf",
      date: "2023-10-26",
       size: "2.2 MB",
      downloads: 120,
      url: "https://drive.google.com/file/d/1HH9TGmSirZiKxJpeKcFYeuwxt3BYHnDc/view?usp=sharing",
    },
    {
      id: 25,
      title: "ID card Policy & Application Process",
      description: "ID card policy and application process document",
      category: "guides",
      type: "pdf",
      date: "2023-10-26",
       size: "1.7 MB",
      downloads: 180,
      url: "https://drive.google.com/file/d/18ZjrEWedABrYw6xyPwTnG_zKn-pjGvaA/view?usp=sharing",
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
      url:"https://drive.google.com/file/d/1u3BCUWAl6DEujjgGIAc3t1n007ze8Bmc/view?usp=sharing",
    },
    {
      id: 2,
      title: "Career Development Roadmap",
      description: "Strategic plan for career growth and development",
      icon: <GraduationCap className="h-8 w-8 text-unifor-purple" />,
      category: "roadmaps",
      type: "pdf",
      downloads: 6320,
       url:"https://drive.google.com/file/d/1rCzSYaeaU7xe3IOjQnLEGgqZibbqLMcY/view?usp=sharing",
    },
    {
      id: 3,
      title: "Annual Scholar Calendar",
      description: "Calendar of all events, deadlines, and opportunities for the year",
      icon: <Calendar className="h-8 w-8 text-unifor-purple" />,
      category: "guides",
      type: "pdf",
      downloads: 5790,
       url:"https://drive.google.com/file/d/1s-NkVi238UfZ9nPcR4ZLWClMpnrdKm60/view?usp=sharing",
    },
  ];
  
   const openDocumentInNewTab = (url: string) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      // Handle cases where the URL is not provided
      alert("Document URL not available.");
    }
  };

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
        case "link":
        return <FileText className="h-5 w-5 text-blue-500" />;
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
        case "link":
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">LINK</Badge>;
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

        {/* Document Types Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Document Types</h2>
            <DocumentTypes />
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
                      <Button size="sm" className="gap-2" onClick={() =>
                           openDocumentInNewTab(doc.url)
                          }>
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
              
              <DocumentFilters
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
              />
              
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
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="gap-1"
                                  onClick={() => openDocumentInNewTab(doc.url)}>
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
                              <Button
                                size="sm"
                                className="w-full gap-2"
                                onClick={() => openDocumentInNewTab(doc.url)}
                              >
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
