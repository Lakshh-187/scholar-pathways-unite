import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import AttachmentModal, { AttachmentItem } from "./AttachmentModal";
import { Button } from "@/components/ui/button";

const quickItems: AttachmentItem[] = [
  { title: "School Safety Checklist (Revised)", href: "https://drive.google.com/file/d/1zNW7a9LUxw_EbujGA--wfM7Am-B0GVz2/view?usp=sharing", size: "PDF", downloads: 2341 },
  { title: "Child Safeguarding Toolkit", href: "https://drive.google.com/file/d/1hMP9wyG-el7VvaMvx3isdO4J7VzlNMUi/view?usp=sharing", size: "PDF", downloads: 1892 },
  { title: "Manual on Safety and Security of Children", href: "https://drive.google.com/file/d/1lxbEbkgAIUDlyZK4xJBLychLu5dLCwJo/view?usp=sharing", size: "PDF", downloads: 1567 },
];

const moreItems: AttachmentItem[] = [
  // A. Child Safety / Protection Policies & Templates
  { title: "School Safety Checklist (Revised)", href: "https://drive.google.com/file/d/1zNW7a9LUxw_EbujGA--wfM7Am-B0GVz2/view?usp=sharing", size: "PDF", downloads: 2341 },
  { title: "Child Safeguarding Toolkit", href: "https://drive.google.com/file/d/1hMP9wyG-el7VvaMvx3isdO4J7VzlNMUi/view?usp=sharing", size: "PDF", downloads: 1892 },
  { title: "Manual on Safety and Security of Children", href: "https://drive.google.com/file/d/1lxbEbkgAIUDlyZK4xJBLychLu5dLCwJo/view?usp=sharing", size: "PDF", downloads: 1567 },
  { title: "Guidelines for School Safety", href: "https://drive.google.com/file/d/1pU9JjQr1cxGNIFin9haaRH7nDTp_K6zf/view?usp=sharing", size: "PDF", downloads: 987 },
  { title: "Safety Checklist", href: "https://drive.google.com/file/d/1eoz1BTun-0nRP_LhalJUe7DkRSX6RXbw/view?usp=sharing", size: "PDF", downloads: 1234 },
  { title: "Child Protection Policy Template", href: "https://drive.google.com/file/d/1-XfvmQGblcUM3jwwu5BpPyP54KyYi3JJ/view?usp=sharing", size: "PDF", downloads: 2156 },
  { title: "Child Protection Policy Framework", href: "https://drive.google.com/file/d/1NoAZ8-mM9NFvzFa3rsOYZ2FTy5A1PLxC/view?usp=sharing", size: "PDF", downloads: 1678 },
  { title: "Child Protection Policy Guide", href: "https://drive.google.com/file/d/1k8Ydq9Oeu_CK5A9wgjFtcPb3m4ZAeqML/view?usp=sharing", size: "PDF", downloads: 1445 },
  { title: "Policy on Safety and Security", href: "https://drive.google.com/file/d/1E_FzbUphBZzelgkQ2y9Uuz-xAUGUKkpU/view?usp=sharing", size: "PDF", downloads: 934 },
  { title: "Podar School Child Safety Policy", href: "https://drive.google.com/file/d/1qaPeD2i2t8z9wd30i6wipyJCWckDIgT5/view?usp=sharing", size: "PDF", downloads: 567 },
  { title: "AAP Safeguarding Policy", href: "https://drive.google.com/file/d/1_CIavh4Xh9dGJhU-P7T0FKHo7_zlYYSF/view?usp=sharing", size: "PDF", downloads: 1789 },
  { title: "Children Protection Policy 2022-23", href: "https://drive.google.com/file/d/13SvFNonry74WOiu82zCEwkDx7vhu0Qev/view?usp=sharing", size: "PDF", downloads: 2098 },
  
  // B. Code of Conduct / Rules
  { title: "Child Protection Training Manual", href: "https://drive.google.com/file/d/1bqVGA0pNQmD8AP1Jv4eWd5R_-Je6-GJL/view?usp=sharing", size: "PDF", downloads: 1567 },
  { title: "Vishal Vasvani Training Guide", href: "https://drive.google.com/file/d/1fiGF0DegIblNhbBj7BB1ISwYDdpIRkrr/view?usp=sharing", size: "PDF", downloads: 876 },
  { title: "Child Protection Committee Guidelines", href: "https://drive.google.com/file/d/1pmuekR02VctVsYTSjJmYuDIz5Vwdtk-G/view?usp=sharing", size: "PDF", downloads: 1234 },
  { title: "HIS Child Safeguarding Guidelines", href: "https://drive.google.com/file/d/1rPCKSvkIUB5O5WTQM3wBv_0M7BXLGsVs/view?usp=sharing", size: "PDF", downloads: 1890 },
  { title: "School Code of Conduct Manual", href: "https://drive.google.com/file/d/1T5DWteMyaDFkCaBDcc_clRuE4l1EOZyQ/view?usp=sharing", size: "PDF", downloads: 1456 },
  { title: "Template Code of Conduct ISS", href: "https://drive.google.com/file/d/1JwbWZNEpsDZa__4K1rXOcOGY2BF34FWh/view?usp=sharing", size: "PDF", downloads: 987 },
  { title: "Rules and Regulations", href: "https://drive.google.com/file/d/1SKJIgd_RZyT1QNvlcqwXGMY-rNxyQhx_/view?usp=sharing", size: "PDF", downloads: 1678 },
  { title: "Code of Conduct and School Rules 2022", href: "https://drive.google.com/file/d/1zv5j0RtkLzL6aOkZH8-TSyiPgEDtJKQZ/view?usp=sharing", size: "PDF", downloads: 2134 },
  { title: "Conduct Guidelines", href: "https://drive.google.com/file/d/1w8Z-CpQ2Aay8yspPGQY-NOxhnpeWjqs9/view?usp=sharing", size: "PDF", downloads: 789 },
  { title: "Student Code of Conduct 2023-2024", href: "https://drive.google.com/file/d/1UjgzAY26EcWTXLzO3KZ8Co-4zD-xKHfg/view?usp=sharing", size: "PDF", downloads: 1945 },
  { title: "Staff Code of Conduct", href: "https://drive.google.com/file/d/1zaoJhe47DEiGP8yX4BnBxJeJRG1_sh-U/view?usp=sharing", size: "PDF", downloads: 1567 },
  
  // Previous items
  { title: "5Rights Child Online Safety Toolkit", href: "https://drive.google.com/file/d/1oMOe8i6gIOLzVaHfYos3WyF9uayZ6hzR/view?usp=sharing", size: "PDF", downloads: 3245 },
  { title: "Sample Child Safe Reporting Policy", href: "https://docs.google.com/document/d/1f5DzGOaLK8bupERgn6l3oDmXO7FRKL1w/edit?usp=sharing&ouid=113475615610317589706&rtpof=true&sd=true", size: "DOC", downloads: 2789 },
  { title: "Child Protection Incident Report Form", href: "https://drive.google.com/file/d/1wjS0dkmiNsqX4icQr7QkuDVy8WeuhAG7/view?usp=sharing", size: "PDF", downloads: 2456 },
  { title: "Child and Youth Safety Reporting Form", href: "https://drive.google.com/file/d/1Skst-UEYQQsMTIkmCHHl2MI1bWZHfwmg/view?usp=sharing", size: "PDF", downloads: 1789 },
  { title: "Child Safety Incident Report Template", href: "https://drive.google.com/file/d/10J485YYbd6zWID1G9pB4vWuZcgh0V658/view?usp=sharing", size: "PDF", downloads: 1923 },
  { title: "Child Safety Incident Report Form", href: "https://drive.google.com/file/d/1NZHcWGJB1K-7yB2aro0X196bPxWN4HC5/view?usp=sharing", size: "PDF", downloads: 1634 },
  { title: "Form 22-SIR", href: "https://drive.google.com/file/d/1DBtFguTgi-JNPFwQezptwlVEs5uuLhSF/view?usp=sharing", size: "PDF", downloads: 1245 },
  { title: "Child Protection and Welfare Report Form", href: "https://drive.google.com/file/d/1EWEelbuC5TE5oF1vppeCKfEIubrQCDDa/view?usp=sharing", size: "PDF", downloads: 2087 },
  { title: "Reporting Concerns Form UK", href: "https://drive.google.com/file/d/1q4Zfins57SkqwoTWSh1iS_vKifsnNkYT/view?usp=sharing", size: "PDF", downloads: 1456 },
  { title: "Child Safety Documentation", href: "https://drive.google.com/file/d/1ZeEwYMczVQPqyH8WcXSwt7RmhgwdqhMx/view?usp=sharing", size: "PDF", downloads: 987 },
  { title: "Bullying Incident Report Form", href: "https://drive.google.com/file/d/1MSvqvSBz7al63g1aRaY1y0LjCqV8Jn6T/view?usp=sharing", size: "PDF", downloads: 1678 },
  { title: "Safeguarding Policy for Education Settings", href: "https://docs.google.com/document/d/1ONU2-6oAnZ9nVEdQ33oMrq4epbSYq9iJ/edit?usp=sharing&ouid=113475615610317589706&rtpof=true&sd=true", size: "DOC", downloads: 2345 },
  { title: "Code of Conduct Template", href: "https://docs.google.com/document/d/1hSZp9PfR967Gxqo_uArPiGDz2nICqSzz/edit?usp=sharing&ouid=113475615610317589706&rtpof=true&sd=true", size: "DOC", downloads: 1890 },
  { title: "Child Safe Template Pack", href: "https://docs.google.com/document/d/1FQJXjwe1y6hRjsJs5vWHmRll1Vr_BvuW/edit?usp=sharing&ouid=113475615610317589706&rtpof=true&sd=true", size: "DOC", downloads: 2156 },
  { title: "Child Safety Risk Register", href: "https://drive.google.com/file/d/1pZzbXyWqYjOb5Ectsf9_4GBoHyrza_iw/view?usp=sharing", size: "PDF", downloads: 1567 },
  { title: "Child Safe Awareness Policy Template", href: "https://docs.google.com/document/d/1aAC0eGNqR4022OsiUSEwMEobb_XVhr2S/edit?usp=sharing&ouid=113475615610317589706&rtpof=true&sd=true", size: "DOC", downloads: 1234 },
  { title: "Child Safety Code of Conduct for Schools", href: "https://drive.google.com/file/d/1pg1jPrDRJjB4fUUGmLPE3E9R_gw8yrHk/view?usp=sharing", size: "PDF", downloads: 1789 },
  { title: "Childcare Safeguarding Toolkit", href: "https://drive.google.com/file/d/1ObWYk7CjSAvOp0bBGxd64fQPpWDVj5Q7/view?usp=sharing", size: "PDF", downloads: 2098 },
  { title: "2024 Child Safety Risk Template", href: "https://drive.google.com/file/d/1MexClxFYLar6aYbMlgu0GSjM5ejPYZvy/view?usp=sharing", size: "PDF", downloads: 1345 },
  { title: "Child Protection Policy Planning Worksheet", href: "https://drive.google.com/file/d/1YVKPr-IhMDTAtn4tTG-te0YViG9DewJx/view?usp=sharing", size: "PDF", downloads: 987 },
  { title: "Core Body Document", href: "https://drive.google.com/file/d/1piPLZRZyho25T2zvbbmZuVhUqLiqKUpi/view?usp=sharing", size: "PDF", downloads: 1456 },
];

const UICSSResources: React.FC = () => {
  return (
    <section id="resources" className="py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Download Resources</h2>
            <p className="text-muted-foreground mt-2">Templates, SOPs, posters and guides for quick adoption</p>
          </div>
          <AttachmentModal title="Download Resources" items={moreItems} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickItems.map((i) => (
            <Card key={i.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{i.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-xs text-muted-foreground">{i.size}</p>
                    <span className="text-xs text-primary font-medium">↓{i.downloads}</span>
                  </div>
                </div>
                <a href={i.href} download>
                  <Button size="sm">Download</Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UICSSResources;
