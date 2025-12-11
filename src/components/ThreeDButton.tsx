import React from 'react';
import './ThreeDButton.css';

interface ThreeDButtonProps {
    text?: string;
    onClick?: () => void;
    className?: string;
}

const ThreeDButton: React.FC<ThreeDButtonProps> = ({ text = "Click Me!", onClick, className = "" }) => {
    return (
        <div className={`three-d-button-container ${className}`}>
            <button type="button" className="three-d-button" onClick={onClick}>
                <div className="top">{text}</div>
                <div className="bottom"></div>
            </button>
        </div>
    );
};

export default ThreeDButton;
