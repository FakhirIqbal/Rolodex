// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthContextType = {
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
};
export const AuthProvider: React.FC = ({ children }: any) => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        // Check if a token exists in localStorage
        const token = localStorage.getItem('authToken');

        // Update the authentication state based on the presence of the token
        setLoggedIn(!!token);
    }, []);

    const login = (token: any) => {
        // Save the token to localStorage
        localStorage.setItem('token', token);
        // Update the authentication state
        setLoggedIn(true);
    };

    const logout = () => {
        // Remove the token from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        // Update the authentication state
        setLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};