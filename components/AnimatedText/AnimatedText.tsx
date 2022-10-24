/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';

export interface AnimatedTextProps {
  words?: string[];
}

const AnimatedText: FC<AnimatedTextProps> = ({ words }) => {
  return (
    <h1 className='hero__title'>
      <div className='static-text'>Calidad, como</div>
      <div className='dynamic-text'>
        <div>
          <p>cualidad</p>
        </div>
        <div>
          <p>servicio</p>
        </div>
        <div>
          <p>cualidad</p>
        </div>
        <div>
          <p>servicio</p>
        </div>
      </div>
    </h1>
  );
};

export default AnimatedText;
