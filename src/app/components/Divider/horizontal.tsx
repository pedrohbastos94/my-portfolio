import { cn } from "@/app/lib/utils";

type HorizontalDivierProps = {
  className?: string;
};

export default function HorizontalDivier({ className }: HorizontalDivierProps) {
  return (
    <div className={cn("w-full my-8 border-b border-b-gray-800", className)} />
  );
}
