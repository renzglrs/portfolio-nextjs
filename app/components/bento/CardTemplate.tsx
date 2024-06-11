import React from 'react'
import { cn } from "@/app/lib/utils";
import { Card } from '../ui/card';

const CardTemplate = ({ 
    children,
    className,
    backgroundColor,
}: {
    children: React.ReactNode;
    className: string;
    backgroundColor?: string;
}) => {
  return (
    <Card
        className={
            cn(
                "border-none rounded-md p-10 flex flex-col items-center justify-center", 
                backgroundColor, 
                className
            )
        }
    >
        {children}
    </Card>
  )
}

export default CardTemplate;