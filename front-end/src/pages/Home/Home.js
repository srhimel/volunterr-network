import React from 'react';
import Event from '../components/Event/Event';
import './Home.css'

const Home = () => {
    return (
        <main className="home">
            <div className="container">
                <div className="title">
                    <h1>I grow by helping people in need.</h1>
                    <form className="header-form">
                        <input type="text" placeholder="Search..." />
                        <input type="submit" value="Search" />
                    </form>
                </div>
                <div className="events">
                    <Event />
                    <Event />
                    <Event />
                    <Event />
                    <Event />
                    <Event />
                    <Event />
                    <Event />
                    <Event />
                    <Event />
                    <Event />
                    <Event />
                </div>
            </div>
        </main>
    );
};

export default Home;