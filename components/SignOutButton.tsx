"use client";
import { FC,useState } from 'react'
import { Button } from './ui/ButtonVariants';
import {signIn ,signOut} from 'next-auth/react'
import {toast} from '@/components/ui/Toast'
interface SignOutButtonProps {
  
}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const SignOut = async () => {
        setIsLoading(true)
        try{
            await signOut();
        }catch(err){
            toast({
                title:"Error signing in",
                message: "Please try again",
                type: "error"
            })
        }
    }

  return <Button onClick={SignOut} isLoading={isLoading}>
    Sign Out
  </Button>
}

export default SignOutButton;