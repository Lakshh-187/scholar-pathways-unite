import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import AttachmentModal, { AttachmentItem } from "./AttachmentModal";
import { Button } from "@/components/ui/button";

const quickItems: AttachmentItem[] = [
  { title: "5Rights Child Online Safety Toolkit", href: "https://drive.google.com/file/d/1oMOe8i6gIOLzVaHfYos3WyF9uayZ6hzR/view?usp=sharing", size: "PDF" },
  { title: "Sample Child Safe Reporting Policy", href: "https://docs.google.com/document/d/1f5DzGOaLK8bupERgn6l3oDmXO7FRKL1w/edit?usp=sharing&ouid=113475615610317589706&rtpof=true&sd=true", size: "DOC" },
  { title: "Child Protection Incident Report Form", href: "https://drive.google.com/file/d/1wjS0dkmiNsqX4icQr7QkuDVy8WeuhAG7/view?usp=sharing", size: "PDF" },
];

const moreItems: AttachmentItem[] = [
  { title: "5Rights Child Online Safety Toolkit", href: "https://drive.google.com/file/d/1oMOe8i6gIOLzVaHfYos3WyF9uayZ6hzR/view?usp=sharing", size: "PDF" },
  { title: "Sample Child Safe Reporting Policy", href: "https://docs.google.com/document/d/1f5DzGOaLK8bupERgn6l3oDmXO7FRKL1w/edit?usp=sharing&ouid=113475615610317589706&rtpof=true&sd=true", size: "DOC" },
  { title: "Child Protection Incident Report Form", href: "https://drive.google.com/file/d/1wjS0dkmiNsqX4icQr7QkuDVy8WeuhAG7/view?usp=sharing", size: "PDF" },
  { title: "Child and Youth Safety Reporting Form", href: "https://drive.google.com/file/d/1Skst-UEYQQsMTIkmCHHl2MI1bWZHfwmg/view?usp=sharing", size: "PDF" },
  { title: "Child Safety Incident Report Template", href: "https://drive.google.com/file/d/10J485YYbd6zWID1G9pB4vWuZcgh0V658/view?usp=sharing", size: "PDF" },
  { title: "Child Safety Incident Report Form", href: "https://drive.google.com/file/d/1NZHcWGJB1K-7yB2aro0X196bPxWN4HC5/view?usp=sharing", size: "PDF" },
  { title: "Form 22-SIR", href: "https://drive.google.com/file/d/1DBtFguTgi-JNPFwQezptwlVEs5uuLhSF/view?usp=sharing", size: "PDF" },
  { title: "Child Protection and Welfare Report Form", href: "https://drive.google.com/file/d/1EWEelbuC5TE5oF1vppeCKfEIubrQCDDa/view?usp=sharing", size: "PDF" },
  { title: "Reporting Concerns Form UK", href: "https://drive.google.com/file/d/1q4Zfins57SkqwoTWSh1iS_vKifsnNkYT/view?usp=sharing", size: "PDF" },
  { title: "Child Safety Documentation", href: "https://drive.google.com/file/d/1ZeEwYMczVQPqyH8WcXSwt7RmhgwdqhMx/view?usp=sharing", size: "PDF" },
  { title: "Bullying Incident Report Form", href: "https://drive.google.com/file/d/1MSvqvSBz7al63g1aRaY1y0LjCqV8Jn6T/view?usp=sharing", size: "PDF" },
  { title: "Safeguarding Policy for Education Settings", href: "https://docs.google.com/document/d/1ONU2-6oAnZ9nVEdQ33oMrq4epbSYq9iJ/edit?usp=sharing&ouid=113475615610317589706&rtpof=true&sd=true", size: "DOC" },
  { title: "Code of Conduct Template", href: "https://docs.google.com/document/d/1hSZp9PfR967Gxqo_uArPiGDz2nICqSzz/edit?usp=sharing&ouid=113475615610317589706&rtpof=true&sd=true", size: "DOC" },
  { title: "Child Safe Template Pack", href: "https://docs.google.com/document/d/1FQJXjwe1y6hRjsJs5vWHmRll1Vr_BvuW/edit?usp=sharing&ouid=113475615610317589706&rtpof=true&sd=true", size: "DOC" },
  { title: "Child Safety Risk Register", href: "https://drive.google.com/file/d/1pZzbXyWqYjOb5Ectsf9_4GBoHyrza_iw/view?usp=sharing", size: "PDF" },
  { title: "Child Safe Awareness Policy Template", href: "https://docs.google.com/document/d/1aAC0eGNqR4022OsiUSEwMEobb_XVhr2S/edit?usp=sharing&ouid=113475615610317589706&rtpof=true&sd=true", size: "DOC" },
  { title: "Child Safety Code of Conduct for Schools", href: "https://drive.google.com/file/d/1pg1jPrDRJjB4fUUGmLPE3E9R_gw8yrHk/view?usp=sharing", size: "PDF" },
  { title: "Childcare Safeguarding Toolkit", href: "https://drive.google.com/file/d/1ObWYk7CjSAvOp0bBGxd64fQPpWDVj5Q7/view?usp=sharing", size: "PDF" },
  { title: "2024 Child Safety Risk Template", href: "https://drive.google.com/file/d/1MexClxFYLar6aYbMlgu0GSjM5ejPYZvy/view?usp=sharing", size: "PDF" },
  { title: "Child Protection Policy Planning Worksheet", href: "https://drive.google.com/file/d/1YVKPr-IhMDTAtn4tTG-te0YViG9DewJx/view?usp=sharing", size: "PDF" },
  { title: "Core Body Document", href: "https://drive.google.com/file/d/1piPLZRZyho25T2zvbbmZuVhUqLiqKUpi/view?usp=sharing", size: "PDF" },
  { title: "Child Protection Policy", href: "https://drive.google.com/file/d/13SvFNonry74WOiu82zCEwkDx7vhu0Qev/view?usp=sharing", size: "PDF" },
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
                  <p className="text-xs text-muted-foreground mt-1">{i.size}</p>
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
