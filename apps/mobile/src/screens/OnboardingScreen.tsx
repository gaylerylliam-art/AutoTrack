import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import { Colors } from '../theme/tokens';

const { width } = Dimensions.get('window');

/* 
 * Requirement: Logo in onboarding screen (top center)
 * Path: C:\Users\Public\AutoTrack\Autotrack Logo.png
 */
const LOGO_SOURCE = require('../assets/branding/logo.png');

export const OnboardingScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            
            <View style={styles.content}>
                
                {/* Rule #1: Branding Onboarding Top Center */}
                <View style={styles.logoContainer}>
                    <Image source={LOGO_SOURCE} style={styles.logoMain} resizeMode="contain" />
                    <Text style={styles.brandTitle}>AutoTrack</Text>
                </View>

                {/* Modern Fintech SaaS Visuals */}
                <View style={styles.heroContainer}>
                    <View style={styles.cardStack}>
                        <View style={[styles.heroCard, styles.heroCardBack]} />
                        <View style={[styles.heroCard, styles.heroCardMain]}>
                            <View style={styles.heroCardHeader} />
                            <View style={[styles.heroCardLine, { width: '80%' }]} />
                            <View style={[styles.heroCardLine, { width: '50%' }]} />
                        </View>
                    </View>
                </View>

                {/* Welcome Messaging - Calm and Trustworthy */}
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Financial Intelligence for Your Fleet</Text>
                    <Text style={styles.subtitle}>
                        Secure, production-grade tracking for expenses, taxes, and asset lifecycle. Experience the new standard in vehicle management.
                    </Text>
                </View>

                {/* Interaction Flow */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.mainButton}>
                        <Text style={styles.mainButtonText}>Get Started</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>Already have an account? Sign in</Text>
                    </TouchableOpacity>
                </View>

                {/* Compliance Footnote - Clean and Subtle */}
                <Text style={styles.complianceNote}>
                    By continuing, you agree to our Terms of Service & Privacy Policy.
                </Text>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.appBackground,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 32,
    },
    logoContainer: {
        alignItems: 'center',
        paddingTop: 40,
        marginBottom: 60,
    },
    logoMain: {
        width: 80,
        height: 80,
        marginBottom: 16,
    },
    brandTitle: {
        fontSize: 24,
        fontWeight: '800',
        color: Colors.primary,
        letterSpacing: 2,
    },
    heroContainer: {
        height: 180,
        width: '100%',
        alignItems: 'center',
        marginBottom: 40,
    },
    cardStack: {
        width: 240,
        height: 160,
        position: 'relative',
    },
    heroCard: {
        width: 200,
        height: 140,
        borderRadius: 24,
        position: 'absolute',
    },
    heroCardMain: {
        backgroundColor: Colors.cardBackground,
        top: 20,
        left: 20,
        padding: 24,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 10,
    },
    heroCardBack: {
        backgroundColor: Colors.primary,
        top: 0,
        left: 0,
        opacity: 0.1,
    },
    heroCardHeader: {
        width: 40,
        height: 40,
        backgroundColor: Colors.teal,
        borderRadius: 12,
        marginBottom: 20,
    },
    heroCardLine: {
        height: 8,
        backgroundColor: '#F1F5F9',
        borderRadius: 4,
        marginBottom: 12,
    },
    textContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: Colors.textPrimary,
        textAlign: 'center',
        marginBottom: 16,
        lineHeight: 34,
    },
    subtitle: {
        fontSize: 15,
        color: Colors.textSecondary,
        textAlign: 'center',
        lineHeight: 24,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        width: '100%',
        marginBottom: 20,
    },
    mainButton: {
        backgroundColor: Colors.primary,
        borderRadius: 16,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        shadowColor: Colors.primary,
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
    },
    mainButtonText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '700',
    },
    secondaryButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
    secondaryButtonText: {
        color: Colors.textSecondary,
        fontSize: 14,
        fontWeight: '600',
    },
    complianceNote: {
        fontSize: 12,
        color: Colors.textMuted,
        textAlign: 'center',
        lineHeight: 18,
    },
});
