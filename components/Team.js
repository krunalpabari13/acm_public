import React from 'react';
import { Container, Row, Col } from "reactstrap";
import styles from '../styles/team.module.css';

const teamMembers = [
    { name: "John Doe", designation: "CEO", imgSrc: "/images/download.jpeg" },
    { name: "Jane Smith", designation: "CTO", imgSrc: "/images/images.jpeg" },
    { name: "Jane Smith", designation: "CTO", imgSrc: "/images/me.jpeg" },


    // Add more team members as necessary
  ];

  
export default function Team(){
    return (
        <section className="section bg-light" id="team">
      <div className={styles.container}>
      <h3 className="font-weight-normal text-dark">Meet Our <span className="text-warning">Team</span></h3>
        <div className={styles.grid}>
          {teamMembers.map(member => (
            <div key={member.name} className={styles.card}>
              <img src={member.imgSrc} alt={member.name} className={styles.image} />
              <h3>{member.name}</h3>
              <p>{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
      </section>
    );
  }