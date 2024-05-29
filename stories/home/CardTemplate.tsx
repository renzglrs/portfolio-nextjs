import React from 'react'
import { cn } from "@/lib/utils";
import { Card } from '../../app/components/ui/card';

interface CardTemplateProps {
    children: React.ReactNode;
    className: string;
    backgroundColor?: string;
}

const CardTemplateComponent = ({ 
    children,
    className,
    backgroundColor,
}: CardTemplateProps) => {
  return (
    <div
        className={
            ["border-none rounded-md p-10 flex flex-col items-center justify-center", backgroundColor, className].join(" ")
        }
    >
        {children}
    </div>
  )
}

export default CardTemplateComponent;