
import React, { useState } from 'react';
import { Folder } from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { organizations, leaders } from '@/data/leadersData';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const OrganizationStructure: React.FC = () => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section className="py-16">
      <div className="flex items-center gap-3 mb-8">
        <Folder className="h-7 w-7 text-slate-700" />
        <h2 className="text-3xl font-bold text-gray-800">Organizational Structure</h2>
      </div>
      
      <p className="text-lg text-gray-600 mb-10 max-w-3xl">
        Explore our organizational bodies and their members who help guide our vision and mission.
      </p>
      
      <div className="bg-slate-50 rounded-xl p-6">
        <Accordion type="single" collapsible className="w-full">
          {organizations.map((org) => {
            // Get all members of this organization
            const orgMembers = leaders.filter(leader => 
              org.members.includes(leader.id)
            );
            
            return (
              <AccordionItem key={org.id} value={`org-${org.id}`} className="border-b border-slate-200">
                <AccordionTrigger className="py-4 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-md bg-slate-200 flex items-center justify-center text-slate-700">
                      {org.type === 'board' && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                      )}
                      {org.type === 'council' && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                          <line x1="6" y1="1" x2="6" y2="4"></line>
                          <line x1="10" y1="1" x2="10" y2="4"></line>
                          <line x1="14" y1="1" x2="14" y2="4"></line>
                        </svg>
                      )}
                      {org.type === 'committee' && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      )}
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-medium">{org.name}</h3>
                      <p className="text-sm text-gray-500 capitalize">{org.type}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="py-2 pl-11">
                    <p className="text-gray-600 mb-6">{org.description}</p>
                    
                    <h4 className="text-sm font-medium text-gray-500 uppercase mb-4">Members ({orgMembers.length})</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {orgMembers.map((member) => (
                        <div key={member.id} className="bg-white rounded-lg p-4 flex items-center gap-3 border border-slate-100">
                          <Avatar>
                            {member.image ? (
                              <AvatarImage src={member.image} alt={member.name} />
                            ) : (
                              <AvatarFallback>
                                {getInitials(member.name)}
                              </AvatarFallback>
                            )}
                          </Avatar>
                          
                          <div>
                            <h5 className="font-medium">{member.name}</h5>
                            <p className="text-sm text-gray-600">{member.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default OrganizationStructure;
