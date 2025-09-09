'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const TypingEffect = ({ text, typingSpeed = 150 }: { text: string; typingSpeed?: number }) => {
  // 현재 입력된 텍스트
  const [displayText, setDisplayText] = useState('');
  // 현재 입력된 텍스트의 인덱스
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    // 현재 입력된 텍스트의 인덱스가 텍스트의 길이보다 작으면
    if (currentIndex < text.length) {
      // 타이핑 효과 실행
      timer = setTimeout(() => {
        // 현재 입력된 텍스트에 새로운 문자 추가
        setDisplayText((prev) => prev + text[currentIndex]);
        // 현재 입력된 텍스트의 인덱스 증가
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);
      // useEffect 재실행 전 이전 타이머 정리
    }
    return () => clearTimeout(timer);
  }, [currentIndex, text, typingSpeed]);
  return (
    <div className="font-mono text-2xl">
      {/* 현재 입력된 텍스트 */}
      {displayText}
      {/* 깜빡거리는 타이핑 커서 */}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="ml-1 inline-block h-5 w-2 bg-black"
      />
    </div>
  );
};
