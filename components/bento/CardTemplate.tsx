import React from 'react'
import { cn } from "@/lib/utils";
import { Card } from '../ui/card';
import Link from 'next/link';

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
        <Link href="https://github.com/renzglrs" target='_blank'>
            {children}
        </Link>
    </Card>
  )
}

export default CardTemplate;