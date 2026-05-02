"use client"
import React, { useState } from 'react';
import { EnrollAdded, WishListAdded } from './Courescontext';

const Provider = ({ children }) => {

    const [enroll, setEnroll] = useState([])
    const [Wishlist, setWistlish] = useState([])



    return <EnrollAdded.Provider value={{ enroll, setEnroll }}>
        <WishListAdded.Provider value={{Wishlist, setWistlish}}>

        {children}
        </WishListAdded.Provider>
    </EnrollAdded.Provider>
};

export default Provider;