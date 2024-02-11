import React, { createContext, useContext } from 'react';

// Creating a context
const NotificationContext = createContext();

// GrandChild component
const GreatGrandChild = () => {
    // Consuming context value
    const notification = useContext(NotificationContext);
    
    return (
        <div>
            <h1>GreatGrandChild</h1>
            <h3>My super parent Notification: {notification}</h3>
            <h1> I have learnt UseContext </h1>
        </div>
    );
}

// GrandChild component
const GrandChild = () => {
    return (
        <div>
            <h1>GrandChild</h1>
            <GreatGrandChild />
        </div>
    );
}

// Child component
const Child = () => {
    return (
        <div>
            <h1>Child</h1>
            <GrandChild />
        </div>
    );
}

// Parent component
const Parent = () => {
    const notification = "Give 1 lakh money his great grand child is born.";
    
    // Providing context value
    return (
        <NotificationContext.Provider value={notification}>
            <div>
                <h1>Parent</h1>
                <Child />
            </div>
        </NotificationContext.Provider>
    );
}

export default Parent;
