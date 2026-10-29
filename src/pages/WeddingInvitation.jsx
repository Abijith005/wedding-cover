import React from "react";
import { Link } from "react-router-dom";
import "./WeddingInvitation.css";

/**
 * Demo destination page so the project runs immediately.
 * Replace this component with your existing invitation page when integrating.
 */
export default function WeddingInvitation() {
  return (
    <main className="invitation-page">
      <article className="invitation-paper">
        <p className="invitation-kicker">WITH LOVE AND BLESSINGS</p>
        <div className="invitation-flourish" aria-hidden="true">❧ ✦ ❧</div>
        <h1>Anjana <span>&amp;</span> Teveeto</h1>
        <p className="invitation-intro">
          Together with our families, we invite you to celebrate the beginning
          of our beautiful journey together.
        </p>
        <div className="invitation-rule" />
        <p className="invitation-label">THE WEDDING CEREMONY</p>
        <p className="invitation-date">14 January 2027 · 11:30 AM</p>
        <p className="invitation-place">Mananthavady, Kerala</p>
        <p className="invitation-note">
          Your presence and blessings will make our day even more special.
        </p>
        <Link className="back-link" to="/">← Back to the sealed invitation</Link>
      </article>
    </main>
  );
}