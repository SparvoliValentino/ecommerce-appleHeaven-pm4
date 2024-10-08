'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

interface ScreenContextType {
    isMobile: boolean;
}

const ScreenContext = createContext<ScreenContextType | undefined>(undefined);

export const ScreenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Set the initial value
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ScreenContext.Provider value={{ isMobile }}>
            {children}
        </ScreenContext.Provider>
    );
};

export const useScreen = () => {
    const context = useContext(ScreenContext);
    if (!context) {
        throw new Error('useScreen must be used within a ScreenProvider');
    }
    return context;
};
