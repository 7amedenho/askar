import { FC, ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  children?: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ icon, title, desc, children, className }) => {
  return (
    <div className={`relative w-full hover:translate-y-[-5px] duration-300 hover:text-red-800 ${className}`}>
      <div className="p-6 border border-gray-200 rounded-xl shadow-md bg-white flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 hover:shadow-lg transition-shadow duration-300">
        <div className="text-primary text-5xl">{icon}</div>
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
          <p className="text-gray-600 sm:px-4 mb-2">{desc}</p>
          {children && <div className="mt-4">{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default Card;
