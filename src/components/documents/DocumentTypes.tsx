
import { FC } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, FileImage, FileVideo, FilePen } from "lucide-react";

export const documentCategories = [
  { id: "all", name: "All Categories" },
  { id: "reports", name: "Annual Reports" },
  { id: "legal", name: "Legal Documents" },
  { id: "magazines", name: "Magazines" },
  { id: "published", name: "Published Papers" },
  { id: "results", name: "Lists & Results" },
  { id: "curriculum", name: "Curriculum" },
  { id: "roadmaps", name: "Roadmaps" },
  { id: "guides", name: "Guides" },
  { id: "certificates", name: "Certificates" },
  { id: "forms", name: "Forms" },
];

export const documentTypes = [
  { id: "all", name: "All Types", icon: <FileText className="h-5 w-5" /> },
  { id: "pdf", name: "PDF", icon: <FileText className="h-5 w-5 text-red-500" /> },
  { id: "doc", name: "Word Document", icon: <FilePen className="h-5 w-5 text-blue-500" /> },
  { id: "ppt", name: "Presentation", icon: <FileText className="h-5 w-5 text-orange-500" /> },
  { id: "magazine", name: "Magazine", icon: <BookOpen className="h-5 w-5 text-purple-500" /> },
  { id: "img", name: "Image", icon: <FileImage className="h-5 w-5 text-green-500" /> },
  { id: "video", name: "Video", icon: <FileVideo className="h-5 w-5 text-blue-500" /> },
];

const DocumentTypes: FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {documentTypes.map((type) => (
        <Card key={type.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4 flex items-center gap-3">
            {type.icon}
            <span className="font-medium">{type.name}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DocumentTypes;
