/**
 * AutoTrack Branding Color Tokens
 */
export const Colors = {
  // Brand
  primary: '#0F172A', // Deep Blue
  teal: '#2DD4BF',    // Teal Accent
  
  // Text
  textPrimary: '#111827',
  textSecondary: '#374151',
  textMuted: '#6B7280',
  
  // Backgrounds
  appBackground: '#F7F8FA',
  cardBackground: '#FFFFFF',
  softCard: '#F1F5F9', // Light Slate blue hint
  secondarySoftCard: '#EEF2FF', // Indigo hint
  
  // Action/Semantic
  success: '#10B981',
  danger: '#EF4444',
  warning: '#F59E0B',
  
  // Borders
  border: '#E2E8F0',
};

export const Typography = {
  heading: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: Colors.textPrimary,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: Colors.textPrimary,
  },
  body: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.textSecondary,
  },
  label: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: Colors.textMuted,
  },
};
