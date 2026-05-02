"use client"
import { WishListAdded } from '@/Context/Courescontext';
import { Button, Card, CloseButton } from '@heroui/react';
import React, { useContext } from 'react';


const WishlistCard = ({ wishlist }) => {
    const { Wishlist, setWistlish } = useContext(WishListAdded)


    const handleWishlistRemove = () => {
        const filterWishlistRemove = Wishlist.filter(coures => coures.id !== wishlist.id)
        setWistlish(filterWishlistRemove)
    }
    return (
        <div>
            <Card className="w-full items-stretch md:flex-row rounded-md bg-white/40 backdrop-blur-lg border-white/70">

                <img
                    alt="Cherries"
                    className="w-[100px] object-contain/ rounded-md"
                    loading="lazy"
                    src={wishlist?.image}
                />

                <div className="flex flex-1 flex-col gap-3">
                    <Card.Header className="gap-1">
                        <Card.Title className="pr-8 font-bold text-[16px]">{wishlist?.title}</Card.Title>
                        <Card.Description>
                            {wishlist?.description}
                        </Card.Description>

                        <Button onClick={handleWishlistRemove} className="absolute top-2 right-3 w-[93px] text-xs rounded-md" variant='danger' >Remove Course</Button>

                    </Card.Header>
                    <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-foreground">Instructor : {wishlist?.instructor}</span>
                        </div>
                    </Card.Footer>
                </div>
            </Card>
        </div>
    );
};

export default WishlistCard;