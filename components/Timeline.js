import React from 'react';

const EventTimeline = () => {
  const events = [
    { id: 1, title: "Event 1", description: "Event 1 description goes here." },
    { id: 2, title: "Event 2", description: "Event 2 description goes here." },
    { id: 3, title: "Event 2", description: "Event 2 description goes here." },
    { id: 4, title: "Event 2", description: "Event 2 description goes here." },
    { id: 5, title: "Event 2", description: "Event 2 description goes here." },
    { id: 6, title: "Event 2", description: "Event 2 description goes here." }
    // Add more events as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-3/4 bg-white shadow-lg p-8 rounded-md">
        <h1 className="text-2xl font-semibold mb-4">Event Timeline</h1>
        <div className="timeline relative">
          {events.map((event) => (
            <div key={event.id} className="event" style={{ top: `${(event.id - 1) * 50}%` }}>
              <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;
