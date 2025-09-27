import React from 'react';
import './KeyAreas.css';

const KeyAreas = () => {
    return (
        <section id="key-areas" className="section key-areas">
            <div className="key-areas-container">
                <div className="key-areas-header">
                    <h2>ABOUT THE CONFERENCE</h2>
                </div>

                {/* Conference Information */}
                <div className="conference-info-section">
                    <div className="conference-header">
                        <h3 className="conference-name">FIHTNFPS - 2025</h3>
                        <p className="conference-subtitle">UPHARMORA - 1.0 National Conference</p>
                    </div>

                    <div className="conference-content">
                        <div className="conference-description">
                            <p>The UPHARMORA - 1.0 National Conference 2025 with the theme "Fostering Innovation for a Healthier Tomorrow: Navigating the Future of Pharmaceutical Sciences" represents a landmark initiative by the Faculty of Pharmacy, United University Prayagraj. This pioneering conference aims to create a comprehensive platform for knowledge exchange, research collaboration, and professional networking in the pharmaceutical sciences domain.</p>

                            <p>Scheduled for 7<sup>th</sup> to 8<sup>th</sup> November 2025, this two-day national conference will bring together distinguished academicians, researchers, industry professionals, healthcare practitioners, and students from across the country. The conference will feature keynote addresses by renowned experts, technical sessions covering cutting-edge research, poster presentations, panel discussions, and interactive workshops designed to explore the latest advancements and future directions in pharmaceutical sciences.</p>

                            <p>This inaugural conference serves as a catalyst for fostering innovation, encouraging research collaboration, and building a strong network of pharmaceutical professionals committed to advancing healthcare outcomes and contributing to a healthier tomorrow for society.</p>
                        </div>

                        {/* Key Focus Areas */}
                        <div className="focus-areas-section">
                            <h4>Thrust Areas</h4>
                            <div className="thrust-areas-list">
                                <div className="thrust-item">
                                    <span className="thrust-arrow">➤</span>
                                    <span className="thrust-text">Drug Discovery and Development</span>
                                </div>
                                <div className="thrust-item">
                                    <span className="thrust-arrow">➤</span>
                                    <span className="thrust-text">Pharmaceutical Technology</span>
                                </div>
                                <div className="thrust-item">
                                    <span className="thrust-arrow">➤</span>
                                    <span className="thrust-text">Clinical Pharmacy</span>
                                </div>
                                <div className="thrust-item">
                                    <span className="thrust-arrow">➤</span>
                                    <span className="thrust-text">Regulatory Affairs</span>
                                </div>
                                <div className="thrust-item">
                                    <span className="thrust-arrow">➤</span>
                                    <span className="thrust-text">Pharmacovigilance</span>
                                </div>
                                <div className="thrust-item">
                                    <span className="thrust-arrow">➤</span>
                                    <span className="thrust-text">Nanotechnology in Drug Delivery</span>
                                </div>
                                <div className="thrust-item">
                                    <span className="thrust-arrow">➤</span>
                                    <span className="thrust-text">Artificial Intelligence in Pharmaceutical Research</span>
                                </div>
                                <div className="thrust-item">
                                    <span className="thrust-arrow">➤</span>
                                    <span className="thrust-text">Sustainable Pharmaceutical Practices</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeyAreas;
