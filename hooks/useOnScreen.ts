import {useState, useEffect, RefObject} from 'react';
export default function useOnScreen(ref:RefObject<HTMLElement>) {

    const [isIntersecting, setIntersecting] = useState(false);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting)
        }
      )
      if( ref && ref.current){
        observer.observe(ref.current)
      }
      // Remove the observer as soon as the component is unmounted
      return () => {       
        if( ref && ref.current){
          observer.observe(ref.current)
        } 
      }
    }, [])
  
    return isIntersecting
  }