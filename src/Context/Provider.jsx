"use client"
import React, { useEffect, useState } from 'react';
import { EnrollAdded, WishListAdded } from './Courescontext';

const Provider = ({ children }) => {

    const [enroll, setEnroll] = useState([])
    const [Wishlist, setWistlish] = useState([])


    useEffect(() => {
        const saveEnroll = localStorage.getItem('enroll_Course')
        const saveWishlist = localStorage.getItem('wishlist_Course')


        if (saveEnroll) {
            setEnroll(JSON.parse(saveEnroll))
        }
        if (saveWishlist) {
            setWistlish(JSON.parse(saveWishlist))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('enroll_Course', JSON.stringify(enroll))
        localStorage.setItem('wishlist_Course', JSON.stringify(Wishlist))
    }, [enroll, Wishlist])



    return <EnrollAdded.Provider value={{ enroll, setEnroll }}>
        <WishListAdded.Provider value={{ Wishlist, setWistlish }}>

            {children}
        </WishListAdded.Provider>
    </EnrollAdded.Provider>
};

export default Provider;