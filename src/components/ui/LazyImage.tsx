import { cn } from "@/utils/cn";

type LazyImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

export default function LazyImage({
  src,
  alt,
  className,
  ...props
}: LazyImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={cn("block max-w-full", className)}
      {...props}
    />
  );
}
