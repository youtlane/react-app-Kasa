import React from 'react';




export default function Banner({ type, title, backgroundImage }) {
    const bannerStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`
    };

    return (
        <div className="banner" style={bannerStyle}>
            {type === 'home' && (
                <h1>{title}</h1>
            )}
            {type === 'about' && title && (
                <h1>{title}</h1>
            )}
        </div>
    );
}
