import React from 'react';
import './landing-page.css';
import logoIconSvg from '../assets/logo-icon.svg';
import logoTextSvg from '../assets/logo-text.svg';

export default function LandingPage() {
    return (
        <div>
            <div className="row">
                <div className="logo-container">
                    <img src={logoIconSvg} />
                    <img src={logoTextSvg} />
                </div>
                <div>
                    <p><strong>Aquiraz</strong></p>
                    <p>Ceará</p>
                </div>
            </div>
            <div className="row">
                <div>
                    <h2>
                        Leve<br />felicidade<br />para<br />o mundo
                    </h2>
                    <p>Visite orfanatos e mude o dia de muitas crianças</p>
                </div>
                <div>
                    <button>

                    </button>
                </div>
            </div>            
        </div>
    );
}