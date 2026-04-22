import { useState } from "react";
import { AuthModal } from "../components/Modal/AuthModal";

export function LandingPage() {
    const [isAuthModal, setAuthModal] = useState(false);
    return (
        <div>
            <button onClick={() => setAuthModal(true)}>Login Button</button>
            {
                isAuthModal && <AuthModal onClose={() => setAuthModal(false)} />
            }
        </div>
    )
}