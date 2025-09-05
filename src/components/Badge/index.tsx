import clsx from "clsx";


type BadgeProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'xs' | 'sm' | 'md';
  outlined?: boolean;
  rounded?: boolean;
  withDot?: boolean;
  className?: string;
};
const variantMap = {
    primary: "bg-blue-700",success: "bg-green-200 color-green-600",warning: "border bg-yellow-400 color-yellow-400 ",danger : "bg-red-200 coloer-red-500 ", info:" bg-blue-300 color-blue-600",
};
const sizeMap = {
  xs: ['text-xs', 'px-[1.5px]', 'py-[0.5px]'],
  sm: ['text-sm', 'px-[2.5px]', 'py-[0.5px]'],
  md: ['text-base', 'px-3', 'py-1'],
};


export default function Badge({ children, variant, size, outlined, rounded, withDot, className }: BadgeProps) {
    const BadgeClass=clsx("",variantMap[variant],sizeMap[size] ,outlined?"bg-white border-":"", rounded ?"rounded":"rounded-full", children
    )

    }
  return <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">{withDot??<span className="mr-1.5 h-2 w-2 rounded-full"/>}{children}</span>;
}
