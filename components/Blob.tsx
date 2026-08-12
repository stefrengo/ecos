import { cn } from "@/lib/utils";

/**
 * Forma organica decorativa (segnaposto visivo) che richiama crescita e movimento.
 * Puramente decorativa: sempre marcata aria-hidden.
 */
export default function Blob({
  className,
  tone = "navy",
}: {
  className?: string;
  tone?: "navy" | "pink" | "orange" | "purple";
}) {
  const fill: Record<string, string> = {
    navy: "#E7ECF1",
    pink: "#FCE4F0",
    orange: "#FDECD4",
    purple: "#F1E3F3",
  };
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("absolute", className)}
      aria-hidden="true"
    >
      <path
        fill={fill[tone]}
        d="M45.7,-58.3C58.9,-49.6,69.2,-35.2,73.6,-19.1C78.1,-3,76.7,15,68.8,29.3C60.9,43.7,46.6,54.4,31.1,61.6C15.6,68.8,-1.1,72.4,-17.6,69.4C-34.1,66.5,-50.4,56.8,-61.1,42.5C-71.8,28.1,-76.9,9.1,-74.6,-8.6C-72.3,-26.2,-62.5,-42.6,-48.7,-51.6C-34.8,-60.7,-17.4,-62.4,0.3,-62.8C18,-63.1,32.6,-67,45.7,-58.3Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
