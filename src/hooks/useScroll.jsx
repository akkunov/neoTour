import { useState, useRef, useEffect } from 'react';

const useDragScroll = (ref) => {
    const [isDragging, setIsDragging] = useState(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleMouseDown = (event) => {
        setIsDragging(true);
        startX.current = event.pageX - ref.current.offsetLeft;
        scrollLeft.current = ref.current.scrollLeft;
    };

    const handleMouseMove = (event) => {
        if (!isDragging) return;
        event.preventDefault();
        const x = event.pageX - ref.current.offsetLeft;
        const walk = (x - startX.current) * 2;
        ref.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (event) => {
        startX.current = event.touches[0].pageX;
        scrollLeft.current = ref.current.scrollLeft;
    };

    const handleTouchMove = (event) => {
        if (!isDragging) return;
        const x = event.touches[0].pageX;
        const walk = (x - startX.current) * 2;
        ref.current.scrollLeft = scrollLeft.current - walk;
    };

    useEffect(() => {
        console.log(ref)
        const container = ref.current;
        if (container) {
            container.addEventListener('mousedown', handleMouseDown);
            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('mouseup', handleMouseUp);
            container.addEventListener('mouseleave', handleMouseUp);
            container.addEventListener('touchstart', handleTouchStart);
            container.addEventListener('touchmove', handleTouchMove);
            container.addEventListener('touchend', handleMouseUp);

            return () => {
                container.removeEventListener('mousedown', handleMouseDown);
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseup', handleMouseUp);
                container.removeEventListener('mouseleave', handleMouseUp);
                container.removeEventListener('touchstart', handleTouchStart);
                container.removeEventListener('touchmove', handleTouchMove);
                container.removeEventListener('touchend', handleMouseUp);
            };
        }
    }, [isDragging]);

    return [isDragging, setIsDragging] ;
};

export default useDragScroll;
