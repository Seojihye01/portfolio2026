import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fundingProjects } from "./FundingData"; 
import "./FundingEx_2.css";

const FundingEx_2 = () => {
  const { id } = useParams<{ id: string }>();
  
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    ms: 0,
  });

  useEffect(() => {
    const project = fundingProjects.find((p) => p.id === Number(id));
    
    // 1. remainingDays가 존재할 경우 시간으로 변환
    if (project && project.remainingDays !== undefined) {
      // 예: 3일 남음 -> 72시간 0분 0초
      setTimeLeft({
        hours: project.remainingDays * 24, 
        minutes: 0,
        seconds: 0,
        ms: 0,
      });
    }
  }, [id]);

  useEffect(() => {
    // 2. 타이머 작동 로직 (기존과 동일)
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
          ms = 99;
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
    }, 10);

    return () => clearInterval(timer);
  }, [id]);

  const format = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="funding_timer_bar">
      <span className="timer_label">Remaining</span>
      <div className="timer_display">
        {/* 3. 시안처럼 00:00:00:00 형식 유지 */}
        <span>{format(timeLeft.hours)}</span>
        <span className="divider">:</span>
        <span>{format(timeLeft.minutes)}</span>
        <span className="divider">:</span>
        <span>{format(timeLeft.seconds)}</span>
        <span className="divider">:</span>
        <span className="ms_text">{format(timeLeft.ms)}</span>
      </div>
    </div>
  );
};

export default FundingEx_2;