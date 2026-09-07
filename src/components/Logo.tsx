import Image from "next/image";
import { asset } from "@/lib/asset";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "h-10 w-auto" }: LogoProps) {
  return (
    <Image
      src={asset("/brand/logo-transparent.png")}
      alt="AeroField Solutions"
      width={1077}
      height={372}
      className={`${className} object-contain`}
    />
  );
}
