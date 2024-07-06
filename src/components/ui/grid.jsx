import { cn } from "@/lib/utils";

export const Grid = ({ children, className, ...props }) => {
  return (
    <div className={cn("grid", className)} {...props}>
      {children}
    </div>
  );
};

export const GridItem = ({ children, className, ...props }) => {
  return (
    <div className={cn("grid-item", className)} {...props}>
      {children}
    </div>
  );
};