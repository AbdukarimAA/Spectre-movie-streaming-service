import React from 'react';
import { motion } from "framer-motion"
import { useRef } from "react";
import {useFollowPointer} from "../../components/notFoundBack/UseFollowPointer";
import Navbar from "../../components/navbar/Navbar";
import './NotFound.scss';

const NotFound = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);

    return (
        <div className='notFoundPage'>
            {/*<Navbar />*/}
            <div className="not-found-span">
                <span>Nothing is Found</span>
            </div>
            <motion.div
                ref={ref}
                className="box"
                animate={{ x, y }}
                transition={{
                    type: "spring",
                    damping: 3,
                    stiffness: 100,
                    restDelta: 0.001
                }}
            />
        </div>
    );
};

export default NotFound;