
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, Calendar, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Sample data for notifications, announcements, and events
const notifications = [
  {
    id: 1,
    title: 'ID Card Distribution',
    message: 'ID cards are ready for collection. Visit the admin block with your UID.',
    date: '2025-05-15',
    isNew: true,
  },
  {
    id: 2,
    title: 'Social Internship Deadline',
    message: 'Last date to submit your social internship documentation is May 30.',
    date: '2025-05-30',
    isDeadlineSoon: true,
  },
  {
    id: 3,
    title: 'Profile Verification',
    message: 'Submit your profile for verification before starting any applications.',
    date: '2025-05-20',
    isNew: false,
  },
];

const announcements = [
  {
    id: 1,
    title: 'New Partnership Program',
    message: 'We have partnered with 5 new companies for internship opportunities.',
    date: '2025-05-10',
    isNew: true,
  },
  {
    id: 2,
    title: 'Website Maintenance',
    message: 'The portal will be down for maintenance on May 18th from 2-4 AM.',
    date: '2025-05-18',
    isNew: false,
  },
];

const events = [
  {
    id: 1,
    title: 'Pitch Your Idea - Round 1',
    date: '2025-05-25',
    location: 'Virtual Event',
    isRegistrationOpen: true,
  },
  {
    id: 2,
    title: 'Career Guidance Session',
    date: '2025-06-02',
    location: 'Auditorium Hall',
    isRegistrationOpen: true,
  },
  {
    id: 3,
    title: 'Leadership Workshop',
    date: '2025-06-10',
    location: 'Conference Room B',
    isRegistrationOpen: false,
  },
];

const LiveUpdates = () => {
  // Function to format dates
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="space-y-8 sticky top-4">
      {/* Notifications */}
      <Card className="overflow-hidden animate-fade-in shadow-lg border-t-4 border-t-unifor-purple">
        <CardHeader className="bg-gradient-to-r from-accent/30 to-white p-4">
          <CardTitle className="text-xl flex items-center gap-2">
            <Bell className="h-5 w-5 text-unifor-purple" />
            <span>Latest Notifications</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
            {notifications.map((notification) => (
              <div key={notification.id} className="border-b pb-3 last:border-0">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium">{notification.title}</h3>
                  <div className="flex gap-1">
                    {notification.isNew && (
                      <Badge variant="default" className="bg-unifor-purple">NEW</Badge>
                    )}
                    {notification.isDeadlineSoon && (
                      <Badge variant="destructive">Deadline Soon</Badge>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{notification.message}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {formatDate(notification.date)}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Announcements */}
      <Card className="overflow-hidden animate-fade-in shadow-lg border-t-4 border-t-unifor-blue">
        <CardHeader className="bg-gradient-to-r from-blue-100 to-white p-4">
          <CardTitle className="text-xl flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-unifor-blue" />
            <span>Announcements</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="border-b pb-3 last:border-0">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium">{announcement.title}</h3>
                  {announcement.isNew && (
                    <Badge variant="default" className="bg-unifor-blue">NEW</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{announcement.message}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {formatDate(announcement.date)}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card className="overflow-hidden animate-fade-in shadow-lg border-t-4 border-t-unifor-dark-purple">
        <CardHeader className="bg-gradient-to-r from-purple-100 to-white p-4">
          <CardTitle className="text-xl flex items-center gap-2">
            <Calendar className="h-5 w-5 text-unifor-dark-purple" />
            <span>Upcoming Events</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="border-b pb-3 last:border-0">
                <h3 className="font-medium">{event.title}</h3>
                <p className="text-sm flex items-center gap-1 mt-1">
                  <Calendar className="h-3 w-3" />
                  <span>{formatDate(event.date)}</span>
                </p>
                <p className="text-sm text-muted-foreground">{event.location}</p>
                <div className="mt-2">
                  {event.isRegistrationOpen ? (
                    <Badge className="bg-green-500 hover:bg-green-600">Registration Open</Badge>
                  ) : (
                    <Badge variant="outline">Coming Soon</Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveUpdates;
