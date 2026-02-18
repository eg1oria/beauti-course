import Image from 'next/image';
import s from './Flower.module.scss';
import cn from 'classnames';

type FlowerDecorProps = {
  position?: 'left' | 'right';
  bottom?: string;
  className?: string;
};

export default function FlowerDecor({
  position = 'right',
  bottom = '-10.9vw',
  className,
}: FlowerDecorProps) {
  return (
    <Image
      src="/flower.webp"
      alt=""
      width={1050}
      height={700}
      className={cn(s.flower, s[`flower__${position}`], className)}
      style={{
        bottom,
        width: 'clamp(400px, 72.9vw, 1050px)',
        height: 'auto',
      }}
    />
  );
}
