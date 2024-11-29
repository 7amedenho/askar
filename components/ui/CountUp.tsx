"use client"
import React from 'react';
import CountUp from 'react-countup';

interface CountUpProps {
  start: number;
  end: number;
  duration: number;
  enableScrollSpy?: boolean;   // خاصية لتمكين ScrollSpy
  scrollSpyDelay?: number;     // تأخير الدخول إلى مجال العرض
  scrollSpyOnce?: boolean;     // عد مرة واحدة فقط عند التمرير
}

const CountUpComponent: React.FC<CountUpProps> = ({
  start,
  end,
  duration,
  enableScrollSpy = false,
  scrollSpyDelay = 0,
  scrollSpyOnce = false,
}) => {
  return (
    <div>
      <CountUp
        start={start}
        end={end}
        duration={duration}
        enableScrollSpy={enableScrollSpy}
        scrollSpyDelay={scrollSpyDelay}
        scrollSpyOnce={scrollSpyOnce}
      />
    </div>
  );
};

export default CountUpComponent;
