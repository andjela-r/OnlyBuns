import * as child_process from "node:child_process";

export default function ProductLayout({
    children,
                                      }: {children: React.ReactNode;
}) {
    return <div>{children}
            <div>
                <h2>Featured products section</h2>
            </div>
    </div>
}