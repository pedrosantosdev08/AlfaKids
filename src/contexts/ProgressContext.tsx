import React, { createContext, useState, ReactNode } from 'react';

type Progress = {
  alphabet: number;
  syllables: number;
  words: number;
};

export const ProgressContext = createContext<{
  progress: Progress;
  setProgress: (p: Partial<Progress>) => void;
}>({
  progress: { alphabet: 0, syllables: 0, words: 0 },
  setProgress: () => {}
});

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgressState] = useState<Progress>({ alphabet: 0, syllables: 0, words: 0 });

  const setProgress = (p: Partial<Progress>) => {
    setProgressState(prev => ({ ...prev, ...p }));
  };

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}
