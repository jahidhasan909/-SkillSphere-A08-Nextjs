"use client"
import { EnrollAdded } from '@/Context/Courescontext';
import { Button, Card } from '@heroui/react';
import React, { useContext } from 'react';


const EnrollCard = ({ enrolls }) => {

    const { enroll, setEnroll } = useContext(EnrollAdded)



    const handleEnrollRemove = () => {
        const filterEnrollRemove = enroll.filter(coures => coures.id !== enrolls.id)
        setEnroll(filterEnrollRemove)
    }

    return (
        <div>

            <Card className="w-full items-stretch md:flex-row rounded-md bg-white/40 backdrop-blur-lg border-white/70">

                <img
                    alt="Cherries"
                    className="w-[100px] object-contain/ rounded-md"
                    loading="lazy"
                    src={enrolls?.image}
                />

                <div className="flex flex-1 flex-col gap-3">
                    <Card.Header className="gap-1">
                        <Card.Title className="pr-8 font-bold text-[16px]">{enrolls?.title}</Card.Title>
                        <Card.Description>
                            {enrolls?.description}
                        </Card.Description>

                        <Button onClick={handleEnrollRemove} className="absolute top-2 right-3 rounded-md w-[93px] text-xs" variant='danger' >Remove Course</Button>

                    </Card.Header>
                    <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-foreground">Instructor : {enrolls?.instructor}</span>
                        </div>
                    </Card.Footer>
                </div>
            </Card>
        </div>
    );
};

export default EnrollCard;