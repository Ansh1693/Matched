import React, { HTMLAttributes, forwardRef } from 'react'
import {VariantProps, cva} from "class-variance-authority";
import { cn } from '@/lib/utils'



const largeVariants = cva("text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter",{
    variants:{
        size:{
            default: "text-4xl sm:text-5xl lg:text-6xl",
            lg:"text-5xl sm:text-6xl lg:text-7xl",
            sm:"text-2xl sm:text-3xl lg:text-4xl",
        }
    },
    defaultVariants:{
        size:"default"
    }
})

interface Props extends HTMLAttributes<HTMLHeadingElement>,VariantProps<typeof largeVariants>{

}
const LargeHeading = forwardRef<HTMLHeadingElement,Props>(({className,size,children , ...props},ref)=>{
    return (
        // <div>LargeHeading</div>
        <p
        ref={ref}
        {...props}
        className={cn(largeVariants({ size, className }))}>
        {children}
      </p>
    )
})
LargeHeading.displayName = 'LargeHeading'

export default LargeHeading