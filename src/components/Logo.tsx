import Image from "next/image";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "h-10 w-auto" }: LogoProps) {
  return (
    <Image
      src="/brand/logo-transparent.png"
      alt="AeroField Solutions"
      width={1077}
      height={372}
      className={`${className} object-contain`}
    />
  );
}
