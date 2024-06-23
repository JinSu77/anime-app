'use client'

import { createClient } from "@/utils/supabase/client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import Cookies from "js-cookie";

export default function AuthGuard({children}){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
  
    useEffect(() => {
        async function getUser(){
            const supabase = createClient()
            const { data, error } = await supabase.auth.getUser()
            if (error || !data?.user) {
                console.log('no user');
                router.replace('/login');
            } else {
                Cookies.set('user', JSON.stringify(data.user), { expires: 7 });
                setUser(data.user);
                setLoading(false);
            }
        }
        getUser()
    }, [router])
    
    if (loading) {
      return <p>Loading...</p>;
    }

    return children;
 }