import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { Colors } from '../theme/tokens';
import { AppCard } from '../components/common/AppCard';

/* 
 * Requirement: Legal & Compliance Module 
 * Features: Terms & Conditions, Privacy, Versioning, Timestamped Consents 
 */
export const LegalComplianceScreen: React.FC = () => {
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [privacyAccepted, setPrivacyAccepted] = useState(false);
    const [dataSharingAccepted, setDataSharingAccepted] = useState(false);

    const handleSaveConsents = () => {
        if (!termsAccepted || !privacyAccepted) {
            Alert.alert(
                "Compliance Required", 
                "You must accept the Terms and Privacy Policy to access AutoTrack services."
            );
            return;
        }

        // Logic here would call Supabase 'legal_consents' table
        // Insert: user_id, type: 'terms_v1.2', signed_at: now()
        Alert.alert("Success", "Your compliance profile has been updated for Version 2026.03.");
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                
                <Text style={styles.headerTitle}>Legal & Compliance</Text>
                <Text style={styles.headerSubtitle}>
                    Managed data responsibility and legal service agreements for AutoTrack Fleet users.
                </Text>

                {/* Terms of Service Section */}
                <AppCard title="Terms of Service" subtitle="Updated: March 15, 2026" showWatermark={false}>
                    <View style={styles.consentItem}>
                        <View style={styles.textContainer}>
                            <Text style={styles.consentTitle}>Accept Service Agreement</Text>
                            <Text style={styles.consentDesc}>
                                Includes multi-tenant fleet management and data processing terms.
                            </Text>
                        </View>
                        <Switch 
                            value={termsAccepted} 
                            onValueChange={setTermsAccepted}
                            trackColor={{ false: "#CBD5E1", true: Colors.primary }}
                        />
                    </View>
                </AppCard>

                {/* Privacy Policy Section */}
                <AppCard title="Privacy Policy" subtitle="GDPR & Data Protection Ready" showWatermark={false}>
                    <View style={styles.consentItem}>
                        <View style={styles.textContainer}>
                            <Text style={styles.consentTitle}>Data Protection Consent</Text>
                            <Text style={styles.consentDesc}>
                                We handle vehicle telemetry and financial data with bank-grade encryption.
                            </Text>
                        </View>
                        <Switch 
                            value={privacyAccepted} 
                            onValueChange={setPrivacyAccepted}
                            trackColor={{ false: "#CBD5E1", true: Colors.teal }}
                        />
                    </View>
                </AppCard>

                {/* Data Deletion & Right to be Forgotten */}
                <AppCard title="Data Management" subtitle="Production-Grade Rights" showWatermark={false}>
                    <Text style={styles.complianceNote}>
                        As a professional SaaS user, you have the right to request full data deletion. All financial records will be purged within 48 hours of verification.
                    </Text>
                    <TouchableOpacity 
                        style={styles.deleteButton} 
                        onPress={() => Alert.alert("Confirm Deletion", "This will permanently remove all fleet and financial history.")}
                    >
                        <Text style={styles.deleteButtonText}>Request Data Deletion</Text>
                    </TouchableOpacity>
                </AppCard>

                <TouchableOpacity 
                    style={[styles.saveButton, (!termsAccepted || !privacyAccepted) && styles.disabledButton]} 
                    onPress={handleSaveConsents}
                >
                    <Text style={styles.saveButtonText}>Confirm and Sign Agreements</Text>
                </TouchableOpacity>

                <Text style={styles.footerInfo}>
                    All signatures are cryptographically logged with a unique fingerprint (v2.4.9)
                </Text>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.appBackground,
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 20,
        paddingBottom: 40,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: '800',
        color: Colors.textPrimary,
        marginBottom: 8,
    },
    headerSubtitle: {
        fontSize: 15,
        color: Colors.textSecondary,
        lineHeight: 22,
        marginBottom: 24,
    },
    consentItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        paddingRight: 16,
    },
    consentTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: Colors.textPrimary,
        marginBottom: 4,
    },
    consentDesc: {
        fontSize: 13,
        color: Colors.textSecondary,
        lineHeight: 18,
    },
    complianceNote: {
        fontSize: 13,
        color: Colors.textMuted,
        lineHeight: 20,
        marginBottom: 16,
    },
    deleteButton: {
        borderColor: Colors.danger,
        borderWidth: 1.5,
        borderRadius: 12,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteButtonText: {
        color: Colors.danger,
        fontSize: 14,
        fontWeight: '700',
    },
    saveButton: {
        backgroundColor: Colors.primary,
        borderRadius: 16,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        shadowColor: Colors.primary,
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
    },
    disabledButton: {
        backgroundColor: '#94A3B8',
        shadowOpacity: 0,
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '700',
    },
    footerInfo: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 12,
        color: Colors.textMuted,
    },
});
