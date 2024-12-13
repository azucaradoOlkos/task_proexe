import React from "react";

const Hero: React.FC = () => {
  return (
    <div style={styles.hero}>
      <div style={styles.heroContent}>
        {/* Tekstowa sekcja */}
        <div style={styles.heroText}>
          <h1 style={styles.title}>
            Launch a software businesses website today with us!
          </h1>
          <p style={styles.subtitle}>
            Launch a business today with our help and get it done with amazing
            launch features, websites and more with uifry. We help business like
            yours thrive every day and beyond.
          </p>
          <div style={styles.buttons}>
            <button style={styles.contactButton}>Contact Now</button>
            <button style={styles.demoButton}>Book a Demo Today</button>
          </div>
          <p style={styles.rating}>Rated 4.9 out of 1200 reviews</p>
        </div>

        {/* Obrazek z dodatkowymi informacjami */}
        <div style={styles.heroImageContainer}>
          <img
            src="/images/woman_with_computer.png"
            alt="Smiling woman with a laptop"
            style={styles.heroImage}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  hero: {
    display: "flex",
    flexDirection: "column" as const, // Domyślny układ dla mobile
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    backgroundColor: "#fff",
  },
  heroContent: {
    display: "flex",
    flexDirection: "column" as const, // Układ dla urządzeń mobilnych
    alignItems: "center",
    textAlign: "center" as const,
    width: "100%",
    maxWidth: "600px",
  },
  heroText: {
    marginBottom: "2rem",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1rem",
    marginBottom: "1.5rem",
    lineHeight: "1.5",
  },
  buttons: {
    display: "flex",
    flexDirection: "column" as const, // Przyciski jeden pod drugim
    gap: "1rem",
    marginBottom: "1rem",
  },
  contactButton: {
    padding: "0.8rem 1.5rem",
    fontSize: "1rem",
    backgroundColor: "#ffefe5",
    border: "none",
    color: "#000",
    cursor: "pointer",
    width: "100%",
  },
  demoButton: {
    padding: "0.8rem 1.5rem",
    fontSize: "1rem",
    backgroundColor: "#fff",
    border: "1px solid #000",
    color: "#000",
    cursor: "pointer",
    width: "100%",
  },
  rating: {
    fontSize: "0.9rem",
    color: "#666",
  },
  heroImageContainer: {
    marginTop: "2rem",
    textAlign: "center" as const,
  },
  heroImage: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  "@media (minWidth: 768px)": {
    heroContent: {
      flexDirection: "row" as const, // Układ dla desktop
      justifyContent: "space-between",
      alignItems: "center",
      textAlign: "left" as const,
    },
    buttons: {
      flexDirection: "row" as const, // Przyciski obok siebie
      width: "auto",
    },
    contactButton: {
      width: "auto",
    },
    demoButton: {
      width: "auto",
    },
    heroImageContainer: {
      marginTop: "0",
    },
  },
};

export default Hero;
