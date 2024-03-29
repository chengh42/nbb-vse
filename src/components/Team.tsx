import {Team} from "@/types/Team";
import Image from "next/image";

export default function Team({afko, logo, positie}: Team) {
  const placeholder = <p className="relative block w-16 h-16">{afko}</p>;
  return (
    <div className="flex flex-row justify-between items-center w-32 p-2 m-4">
      <p className="text-lg">{positie}</p>
      {logo.length === 0 ? (
        placeholder
      ) : (
        <div className="relative block w-16 h-16 hover:w-20 hover:h-20 hover:transition-all">
          <Image
            src={logo}
            alt={afko}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
    </div>
  );
}
