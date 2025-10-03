
import { useState } from "react";

export default function useModalHook() {
    const [isOpen, setOpen] = useState(false);
    
    return {  // return an object
        isOpen,
        open: () => setOpen(true),
        close: () => setOpen(false),
    }
}   