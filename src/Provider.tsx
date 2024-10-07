import { createContext, ReactNode, useState } from "react"

const Context = createContext({
    clickCount: 0,
    plusClickCount: () => {},
});

interface ProviderProps {
    children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
    const [clickCount, setClickCount] = useState(0);

    const plusClickCount = () => {
        setClickCount((prevCount) => prevCount + 1);
    };

    return (
        <Context.Provider value={{ clickCount, plusClickCount }}>
            {children}
        </Context.Provider>
    );
}

export { Provider, Context };