import Image from 'next/image';
import s from './Flower.module.scss';
import cn from 'classnames';

type FlowerDecorProps = {
  position?: 'left' | 'right';
  bottom?: string;
  width?: string;
  className?: string;
};

export default function FlowerDecor({
  position = 'right',
  bottom,
  width,
  className,
}: FlowerDecorProps) {
  return (
    <Image
      src="/flower.webp"
      alt=""
      width={1050}
      height={700}
      className={cn(s.flower, s[`flower__${position}`], className)}
      style={
        {
          ...(bottom ? { ['--flower-bottom']: bottom } : {}),
          ...(width ? { ['--flower-w']: width } : {}),
        } as React.CSSProperties
      }
      priority={false}
    />
  );
}
