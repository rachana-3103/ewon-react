import { useCallback, useEffect, useRef, RefObject } from "react";

export default (onClose: () => void): RefObject<HTMLDivElement> => {
    const ref = useRef<HTMLDivElement | null>(null);
    const escapeListener = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        },
        [onClose]
    );
    const clickListener = useCallback(
        (e: MouseEvent) => {
            if (!ref.current?.contains(e.target as Node)) {
                onClose?.();
            }
        },
        [onClose]
    );
    useEffect(() => {
        document.addEventListener("click", clickListener);
        document.addEventListener("keyup", escapeListener);
        return () => {
            document.removeEventListener("click", clickListener);
            document.removeEventListener("keyup", escapeListener);
        };
    }, [escapeListener, clickListener]);
    return ref;
};
