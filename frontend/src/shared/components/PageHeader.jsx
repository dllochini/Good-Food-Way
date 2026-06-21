import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PageHeader({
    title,
    subtitle,
    showBack = true,
}) {
    const navigate = useNavigate();

    return (

        <div>
            <div className="flex items-center gap-2">
                {showBack && (
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="rounded-md p-1 hover:bg-muted transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </button>
                )}

                <h1 className="text-2xl font-bold">
                    {title}
                </h1>
            </div>

            {subtitle && (
                <p className="mt-1 text-sm text-muted-foreground">
                    {subtitle}
                </p>
            )}
        </div>
    );
}