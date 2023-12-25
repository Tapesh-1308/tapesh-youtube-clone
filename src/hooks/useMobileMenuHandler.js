import { useContext, useEffect, useState } from "react"
import { FeedContext } from "../context/FeedContext";

const useMobileMenuHandler = () => {
    const [disabled, setDisabled] = useState(false);
    const { mobileMenu, setMobileMenu } = useContext(FeedContext);

    const handleMobileMenu = () => {
        if (mobileMenu) {
            setMobileMenu(false);
        }
    }

    useEffect(() => {
        if (mobileMenu)
            setDisabled(true);
        else setDisabled(false);
    }, [mobileMenu])

    return { disabled, handleMobileMenu };
}

export default useMobileMenuHandler