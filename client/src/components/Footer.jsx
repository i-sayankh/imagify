import { assets } from "../assets/assets"

// Footer component definition
const Footer = () => {
    return (
        <div className="flex items-center justify-between gap-4 py-3 mt-20">
            {/* Logo section */}
            <img src={assets.logo} alt="Logo" width={150} />

            {/* Copyright information */}
            <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
                Copyright © Sayan Khutia | All rights reserved
            </p>

            {/* Social media icons section */}
            <div className="flex gap-2.5">
                {/* Facebook icon */}
                <img src={assets.facebook_icon} alt="Facebook" width={35} />
                {/* Twitter icon */}
                <img src={assets.twitter_icon} alt="Twitter" width={35} />
                {/* Instagram icon */}
                <img src={assets.instagram_icon} alt="Instagram" width={35} />
            </div>
        </div>
    )
}

export default Footer
