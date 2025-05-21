"use client"

import { formatter } from "@/lib/utils";
import { useEffect, useState } from "react";

interface CurrencyProps {
    value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({
    value
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="font-semibold">
            { value ? formatter.format(Number(value)) : formatter.format(Number(0))}
        </div>
    );
}
 
export default Currency;