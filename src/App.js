import React from 'react';
import './index.css'; // make sure you're importing your CSS file

function App() {
    return (
        <div className="layout">
            <div className="side-bar left-bar"></div>

            <div className="main-content">
                <div className="top-bar"></div>

                <div className="container">
                    <header className="section hero">
                        <div className="hero-text">
                            <h1>👋 Heyyyy, I'm Ria David</h1>
                            <p>Aspiring DevOps Engineer & Software Developer</p>
                            <p>Mercedes Benz Dreamer 🚗 | Final Year CS Student</p>
                        </div>

                        <div className="hero-gif-container">
                            <img
                                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExd211ZWdnN2F5YTFneXQyeDBoeXNhd2Z5bTZlNWdncTFzNGRvaGU4YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HzPtbOKyBoBFsK4hyc/giphy.gif" // ✅ Corrected path
                                alt="Cool Dev"
                                className="hero-gif"
                            />
                        </div>
                    </header>

                    <section className="section">
                        <h2>💻 Tech Stack</h2>
                        <ul>
                            <li>Languages: Python, C++, Java</li>
                            <li>Tools: Git, Docker, GitHub Actions</li>
                            <li>Learning: DSA, System Design</li>
                        </ul>
                    </section>

                    <section className="section">
                        <h2>🚀 Projects</h2>
                        <ul>
                            <li><strong> Visitor Management System using Streamlit</strong></li>
                            <li><strong>Trainer Locator App using Streamlit</strong></li>
                            <li><strong>Portfolio Site using React</strong> – You're looking at it!</li>
                        </ul>
                    </section>

                    <section className="section">
                        <h2>📫 Contact</h2>
                        <p><a href="mailto:riadavid.29@gmail.com">riadavid.29@gmail.com</a></p>
                        <p><a href="https://github.com/riadavid" target="_blank" rel="noreferrer">GitHub Profile</a></p>
                        <p><a href="https://www.linkedin.com/in/ria-david-126333254" target="_blank" rel="noreferrer">LinkedIn</a></p>
                    </section>
                </div>
            </div>

            <div className="side-bar right-bar"></div>
        </div>
    );
}

export default App;
