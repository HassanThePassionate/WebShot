import React from "react";
import { shapesData } from "@/constant/shapeData";
import { cn } from "@/lib/utils";
import ColorPicker from "../borderSelector/ColorPicker2";
import LinePicker from "../BorderPicker";
interface Props {
  onClick: (icon: React.ReactNode) => void;
  selectedIcon?: React.ReactNode;
}
const Shapes = ({ onClick, selectedIcon }: Props) => {
  return (
    <ul className='flex items-center gap-2 px-4 w-full'>
      {shapesData.map((item, index) => (
        <li
          key={index}
          className={cn(
            "flex items-center gap-1.5 rounded-md py-2 px-3  hover:bg-light cursor-pointer text-sm ",
            selectedIcon === item.icon && "border-2 border-dotted"
          )}
          onClick={() => onClick(item.icon)}
        >
          {item.icon}
          <span className='mt-0.5'>{item.name}</span>
        </li>
      ))}
      <li className='flex items-center gap-1.5 rounded-md hover:bg-light cursor-pointer'>
        <ColorPicker select />
      </li>
      <li className='flex items-center gap-1.5 rounded-md hover:bg-light cursor-pointer'>
        <LinePicker />
      </li>
    </ul>
  );
};

export default Shapes;
