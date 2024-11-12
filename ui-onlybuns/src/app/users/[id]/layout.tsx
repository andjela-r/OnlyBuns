import React from "react";

export default function UserProfile({
    children,
}: {children: React.ReactNode;}) {
    return(
        <div>
            {children}
        </div>
    );
}