import React, { createContext, useContext, useState, ReactNode } from 'react';

interface QuoteModalOptions {
  service?: string;
  zip?: string;
  date?: string;
}

interface QuoteModalContextType {
  isOpen: boolean;
  options: QuoteModalOptions;
  openQuoteModal: (opts?: QuoteModalOptions) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export const QuoteModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<QuoteModalOptions>({});

  const openQuoteModal = (opts?: QuoteModalOptions) => {
    setOptions(opts || {});
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  return (
    <QuoteModalContext.Provider value={{ isOpen, options, openQuoteModal, closeQuoteModal }}>
      {children}
    </QuoteModalContext.Provider>
  );
};

export const useQuoteModal = (): QuoteModalContextType => {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider');
  }
  return context;
};
