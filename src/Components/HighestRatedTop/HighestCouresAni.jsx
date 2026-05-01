"use client"
import React from 'react';
import HighestRatedCours from './HighestRatedCours';
import { motion } from 'framer-motion';

const HighestCouresAni = ({ topCoures }) => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4 py-7">
                {
                    topCoures.map((topCouress, index) => <motion.div
                        key={topCouress.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.03 }}
                    >
                        <HighestRatedCours topCouress={topCouress} ></HighestRatedCours>
                    </motion.div>)
                }
            </div>
        </div>
    );
};

export default HighestCouresAni;