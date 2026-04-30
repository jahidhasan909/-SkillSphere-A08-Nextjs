import { Card } from '@heroui/react';
import React from 'react';

const HighestRatedCours = ({ topCouress }) => {
    return (
        <div>
            <Card className="w-[320px]" variant="tertiary">
                <Card.Header>
                    <Card.Title>{topCouress.title}</Card.Title>
                    <Card.Description>Higher prominence (bg-surface-tertiary)</Card.Description>
                </Card.Header>
                <Card.Content>
                    <p>Use for primary or featured content</p>
                </Card.Content>
            </Card>
        </div>
    );
};

export default HighestRatedCours;