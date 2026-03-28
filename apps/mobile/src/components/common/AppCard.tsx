import React from 'react';
import { View, Text, StyleSheet, Image, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '../../theme/tokens';

/* 
 * Requirement: Subtle logo watermark inside cards. 
 * Path: C:\Users\Public\AutoTrack\Autotrack Logo.png
 */
const LOGO_SOURCE = require('../../../assets/branding/logo.png');

interface AppCardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  showWatermark?: boolean;
  style?: ViewStyle;
}

export const AppCard: React.FC<AppCardProps> = ({ 
  title, 
  subtitle, 
  children, 
  showWatermark = true,
  style 
}) => {
  return (
    <View style={[styles.card, style]}>
      {/* Subtle Logo Watermark positioned bottom-right */}
      {showWatermark && (
        <View style={styles.watermarkContainer}>
          <Image 
            source={LOGO_SOURCE} 
            style={styles.watermarkImage} 
            resizeMode="contain"
          />
        </View>
      )}

      {title && (
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      )}

      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 20, // Premium rounded radius
    padding: 20,
    marginVertical: 10,
    // Soft shadow/elevation
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    overflow: 'hidden', // Required for watermark positioning
    position: 'relative',
  },
  watermarkContainer: {
    position: 'absolute',
    bottom: -20, // Offset to make it subtle peek
    right: -20,
    width: 120,
    height: 120,
    opacity: 0.08, // Subtle presence
    zIndex: 0,
  },
  watermarkImage: {
    width: '100%',
    height: '100%',
    tintColor: Colors.primary, // Monochrome branding
  },
  header: {
    marginBottom: 12,
    zIndex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  subtitle: {
    fontSize: 12,
    color: Colors.textMuted,
    marginTop: 2,
  },
  content: {
    zIndex: 1, // Content above watermark
  },
});
