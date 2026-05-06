import React, { useState, useEffect } from 'react';
// If these files are in sub-folders, add the folder name to the path:
import FindDoctorSearch from "./FindDoctorSearch/FindDoctorSearch";
import DoctorCard from "./DoctorCard/DoctorCard";

const BookingConsultation = () => {
    const [allDoctors, setAllDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    // Mock data - In a real app, this might come from an API
    const initialDoctors = [
        { name: "Jiao Yang", specialty: "Dentist", experience: 9, rating: 5, image: "/images/doc1.png", profile: "Expert in cosmetic dentistry" },
        { name: "Denis Raj", specialty: "Dentist", experience: 24, rating: 5, image: "/images/doc2.png", profile: "Root canal specialist" },
        { name: "Lyn Christie", specialty: "Dentist", experience: 11, rating: 4, image: "/images/doc3.png", profile: "General dental care expert" }
    ];

    useEffect(() => {
        setAllDoctors(initialDoctors);
        setFilteredDoctors(initialDoctors);
    }, []);

    const handleSearch = (searchText) => {
        if (searchText === '') {
            setFilteredDoctors(allDoctors);
            setIsSearching(false);
        } else {
            const filtered = allDoctors.filter(doc => 
                doc.specialty.toLowerCase().includes(searchText.toLowerCase()) ||
                doc.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredDoctors(filtered);
            setIsSearching(true);
        }
    };

    return (
        <div className="booking-consultation-container">
            <FindDoctorSearch onSearch={handleSearch} />
            
            <div className="search-results-container">
                <h2>{isSearching ? `${filteredDoctors.length} doctors found` : "Available Doctors"}</h2>
                <div className="doctor-list">
                    {filteredDoctors.length > 0 ? (
                        filteredDoctors.map((doc, index) => (
                            <DoctorCard key={index} {...doc} />
                        ))
                    ) : (
                        <p>No doctors found for this specialty.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingConsultation;