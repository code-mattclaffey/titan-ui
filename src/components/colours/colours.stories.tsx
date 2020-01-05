import React from 'react';

export default {
    title: 'Colours',
    componentSubtitle: '',
    description: '',
};

export const Colours = () => (
    <div className="s-colour-grid">
        <div
            className="s-colour-grid__item"
            style={{ backgroundColor: 'var(--primary)' }}
        >
            Primary
        </div>
        <div
            className="s-colour-grid__item"
            style={{ backgroundColor: 'var(--primary-light)' }}
        >
            Primary Light
        </div>
        <div
            className="s-colour-grid__item s-colour-grid__item--variant"
            style={{ backgroundColor: 'var(--secondary)' }}
        >
            Secondary
        </div>
        <div
            className="s-colour-grid__item s-colour-grid__item--variant"
            style={{ backgroundColor: 'var(--secondary-light)' }}
        >
            Secondary Light
        </div>
        <div
            className="s-colour-grid__item"
            style={{ backgroundColor: 'var(--black)' }}
        >
            Black
        </div>
        <div
            className="s-colour-grid__item s-colour-grid__item--variant"
            style={{ backgroundColor: 'var(--white)' }}
        >
            White
        </div>
        <div
            className="s-colour-grid__item s-colour-grid__item--variant"
            style={{ backgroundColor: 'var(--keyline)' }}
        >
            Keyline
        </div>
    </div>
);
