import React from 'react';
import { InteractiveTimeline } from './InteractiveFeatures';
import './ImportantDates.css';

const ImportantDates = () => {
  const timelineEvents = [
    {
      title: "Deadline for Abstract Submission",
      date: "10<sup>th</sup> October 2025",
      description: "Submit your research abstracts for review and consideration."
    },
    {
      title: "Last Date of Registration",
      date: "15<sup>th</sup> October 2025",
      description: "Last date for early bird registration with discounted fees."
    },
    {
      title: "Abstract Acceptance Notification",
      date: "18<sup>th</sup> October 2025",
      description: "Notification of accepted abstracts."
    },
    {
      title: "Deadline for full length Paper Submission",
      date: "15<sup>th</sup> October 2025",
      description: "Last date for full length paper submission."
    },
    {
      title: "Conference Date",
      date: "7<sup>th</sup> to 8<sup>th</sup> November 2025",
      description: "Two days of keynote speeches, presentations, and networking."
    }
  ];

  return (
    <section id="important-dates" className="section important-dates">
      <div className="dates-container">
        <div className="timeline-section">
          <h3>Dates To Remember</h3>
          <InteractiveTimeline events={timelineEvents} />
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;