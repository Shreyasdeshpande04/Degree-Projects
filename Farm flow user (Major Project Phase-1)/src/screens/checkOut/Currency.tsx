// CurrencyDisplay.tsx
import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface CurrencyDisplayProps {
  totalPrice: number;
  currency?: string;
  locale?: string;
}

const CurrencyDisplay: React.FC<CurrencyDisplayProps> = ({
  totalPrice,
  currency = 'INR',
  locale = 'en-IN',
}) => {
  const formattedAmount = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(totalPrice);

  return <Text style={styles.currencyText}>{formattedAmount}</Text>;
};

const styles = StyleSheet.create({
  currencyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

export default CurrencyDisplay;
