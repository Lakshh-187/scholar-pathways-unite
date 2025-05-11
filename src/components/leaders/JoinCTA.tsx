
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Handshake } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';

const JoinCTA: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  const onSubmit = (data: any) => {
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      reset();
    }, 3000);
  };
  
  return (
    <>
      <Button 
        className="fixed bottom-6 right-6 shadow-lg rounded-full px-6 py-6 font-medium text-base gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        onClick={() => setIsOpen(true)}
      >
        <Handshake className="h-5 w-5" />
        Become a Leader
      </Button>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">Join Our Leadership Council</DialogTitle>
            <DialogDescription>
              Share your expertise and help shape the future of education. Fill out the form below to apply.
            </DialogDescription>
          </DialogHeader>
          
          {isSubmitted ? (
            <div className="py-10 text-center">
              <div className="mb-4 flex justify-center">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-1">Application Submitted!</h3>
              <p className="text-gray-500">Thank you for your interest. We'll review your application and get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    {...register('fullName', { required: 'Name is required' })}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-red-500">{errors.fullName.message?.toString()}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email format"
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message?.toString()}</p>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="role" className="text-sm font-medium">
                  Desired Role
                </label>
                <select
                  id="role"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  defaultValue=""
                  {...register('role', { required: 'Please select a role' })}
                >
                  <option value="" disabled>Select a role</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="team">Core Team</option>
                  <option value="advisor">Advisor</option>
                  <option value="mentor">Mentor</option>
                  <option value="council">Council Member</option>
                </select>
                {errors.role && (
                  <p className="text-sm text-red-500">{errors.role.message?.toString()}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="experience" className="text-sm font-medium">
                  Relevant Experience
                </label>
                <Textarea
                  id="experience"
                  placeholder="Please share your relevant experience and qualifications..."
                  className="min-h-[120px]"
                  {...register('experience', { required: 'Experience information is required' })}
                />
                {errors.experience && (
                  <p className="text-sm text-red-500">{errors.experience.message?.toString()}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="linkedin" className="text-sm font-medium">
                  LinkedIn Profile URL
                </label>
                <input
                  id="linkedin"
                  type="url"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="https://linkedin.com/in/yourprofile"
                  {...register('linkedin', { required: 'LinkedIn profile is required' })}
                />
                {errors.linkedin && (
                  <p className="text-sm text-red-500">{errors.linkedin.message?.toString()}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="resume" className="text-sm font-medium">
                  Resume Upload
                </label>
                <input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  {...register('resume', { required: 'Resume is required' })}
                />
                <p className="text-xs text-gray-500">PDF, DOC or DOCX (max 5MB)</p>
                {errors.resume && (
                  <p className="text-sm text-red-500">{errors.resume.message?.toString()}</p>
                )}
              </div>
              
              <DialogFooter className="mt-6">
                <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Submit Application</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default JoinCTA;
