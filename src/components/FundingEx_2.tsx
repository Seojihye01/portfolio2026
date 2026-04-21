import React, { useState, useEffect } from "react";
import "./FundingEx_2.css";

const FundingEx_2 = () => {
  // 초기 시간 설정 (예: 10분 10초 10밀리초 등을 시뮬레이션하기 위한 총 초)
  // 시안의 00:10:10:10 형식을 [시:분:초:밀리초]로 가정하여 설정
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 10,
    seconds: 10,
    ms: 10,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds, ms } = prev;

        if (hours === 0 && minutes === 0 && seconds === 0 && ms === 0) {
          clearInterval(timer);
          return prev;
        }

        if (ms > 0) {
          ms -= 1;
        } else {
          ms = 99; // 밀리초 리셋
          if (seconds > 0) {
            seconds -= 1;
          } else {
            seconds = 59;
            if (minutes > 0) {
              minutes -= 1;
            } else {
              minutes = 59;
              if (hours > 0) {
                hours -= 1;
              }
            }
          }
        }

        return { hours, minutes, seconds, ms };
      });
    }, 10); // 10ms 마다 업데이트하여 밀리초 단위 구현

    return () => clearInterval(timer);
  }, []);

  // 두 자리 숫자로 포맷팅
  const format = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="funding_timer_bar">
      <span className="timer_label">Funding</span>
      <div className="timer_display">
        <span>{format(timeLeft.hours)}</span>
        <span className="divider">:</span>
        <span>{format(timeLeft.minutes)}</span>
        <span className="divider">:</span>
        <span>{format(timeLeft.seconds)}</span>
        <span className="divider">:</span>
        <span>{format(timeLeft.ms)}</span>
      </div>
    </div>
  );
};

export default FundingEx_2;