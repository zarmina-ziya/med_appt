import React, { useState, useRef } from "react";
import "./FindDoctorSearch.css";

const specialties = [
  "Dentist",
  "Gynecologist/obstetrician",
  "General Physician",
  "Dermatologist",
  "Ear-nose-throat (ENT) Specialist",
  "Homeopath",
];

const FindDoctorSearch = () => {
  const [query, setQuery] = useState("");
  const [showList, setShowList] = useState(false);

  const containerRef = useRef(null);

  // Handle clicking outside to close dropdown
  const handleBlur = (e) => {
    setTimeout(() => {
      if (
        containerRef.current &&
        !containerRef.current.contains(document.activeElement)
      ) {
        setShowList(false);
      }
    }, 150);
  };

  // Filter specialties based on input
  const filteredSpecialties = specialties.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-container" ref={containerRef}>
      
      {/* Search Input */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search doctors, clinics, hospitals, etc."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowList(true)}
          onBlur={handleBlur}
        />

        <button className="search-btn">
          🔍
        </button>
      </div>

      {/* Dropdown List */}
      {showList && (
        <ul className="suggestion-list">
          {filteredSpecialties.length > 0 ? (
            filteredSpecialties.map((item, index) => (
              <li key={index} className="suggestion-item">
                <span className="icon">🔍</span>
                <span>{item}</span>
                <span className="label">SPECIALITY</span>
              </li>
            ))
          ) : (
            <li className="no-result">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default FindDoctorSearch;