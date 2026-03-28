import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import { Colors } from '../theme/tokens';
import { AppCard } from '../components/common/AppCard';

const { width } = Dimensions.get('window');

/* 
 * AutoTrack Branding Rule: Dashboard Header (Small Version) 
 * Path: C:\Users\Public\AutoTrack\Autotrack Logo.png
 */
const LOGO_SOURCE = require('../assets/branding/logo.png');

export const DashboardScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            
            {/* Header with Small Logo Version */}
            <View style={styles.header}>
                <View style={styles.headerTitleContainer}>
                    <Text style={styles.greeting}>Welcome back,</Text>
                    <Text style={styles.userName}>James Sterling</Text>
                </View>
                {/* Dashboard Branding Goal #2 */}
                <Image source={LOGO_SOURCE} style={styles.logoHeader} resizeMode="contain" />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                
                {/* Feature 1: Financial Intelligence - Summary Card */}
                <AppCard title="Financial Intelligence" subtitle="System summary for March 2026" showWatermark={true}>
                    <View style={styles.summaryRow}>
                        <View style={styles.summaryItem}>
                            <Text style={styles.summaryLabel}>Month-to-Date</Text>
                            <Text style={styles.summaryValue}>£4,285.40</Text>
                        </View>
                        <View style={styles.summaryItem}>
                            <Text style={styles.summaryLabel}>VAT/Tax Return</Text>
                            <Text style={[styles.summaryValue, { color: Colors.teal }]}>+£842.10</Text>
                        </View>
                    </View>
                </AppCard>

                {/* Feature 2: Vehicle Depreciation Engine Card */}
                <AppCard title="Asset Intelligence" subtitle="Real-time Depreciation Tracking" showWatermark={true}>
                    <View style={styles.depreciationRow}>
                        <View style={styles.progressContainer}>
                            <View style={[styles.progressBar, { width: '68%' }]} />
                        </View>
                        <Text style={styles.depreciationText}>Current Value: <Text style={styles.bold}>£24,800</Text></Text>
                        <Text style={styles.depreciationText}>Annual Depreciation Rate: <Text style={styles.bold}>12%</Text></Text>
                    </View>
                </AppCard>

                {/* Feature 3: Expense Categorization & Fleet Status */}
                <View style={styles.multiCardRow}>
                   <AppCard style={styles.halfCard} title="Fuel Ops">
                        <Text style={styles.cardValue}>42%</Text>
                        <Text style={styles.cardLabel}>Efficiency</Text>
                   </AppCard>
                   <AppCard style={styles.halfCard} title="Services">
                        <Text style={[styles.cardValue, { color: Colors.warning }]}>2</Text>
                        <Text style={styles.cardLabel}>Due in 30d</Text>
                   </AppCard>
                </View>

                {/* List Card: Recent Transactions */}
                <AppCard title="Recent Financial Transactions">
                   {[
                       { type: 'Service', date: 'Mar 24', cost: '£120.00', category: 'Maintenance' },
                       { type: 'Fuel Shell London', date: 'Mar 22', cost: '£85.40', category: 'Fuel' },
                       { type: 'Insurance Premium', date: 'Mar 20', cost: '£450.00', category: 'Compliance' },
                   ].map((item, index) => (
                       <View key={index} style={styles.listItem}>
                           <View>
                               <Text style={styles.listTitle}>{item.type}</Text>
                               <Text style={styles.listSubtitle}>{item.date} • {item.category}</Text>
                           </View>
                           <Text style={styles.listCost}>{item.cost}</Text>
                       </View>
                   ))}
                </AppCard>

                <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.actionButtonText}>+ Add New Expense</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.appBackground,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 20,
        paddingBottom: 10,
    },
    headerTitleContainer: {},
    greeting: {
        fontSize: 14,
        color: Colors.textMuted,
    },
    userName: {
        fontSize: 22,
        fontWeight: '700',
        color: Colors.textPrimary,
        marginTop: 4,
    },
    logoHeader: {
        width: 32,
        height: 32,
        opacity: 0.8,
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingBottom: 40,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    summaryItem: {},
    summaryLabel: {
        fontSize: 12,
        color: Colors.textMuted,
        marginBottom: 4,
    },
    summaryValue: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.textPrimary,
    },
    depreciationRow: {
        marginTop: 8,
    },
    progressContainer: {
        height: 8,
        backgroundColor: '#E2E8F0',
        borderRadius: 4,
        marginBottom: 16,
        marginTop: 8,
    },
    progressBar: {
        height: 8,
        backgroundColor: Colors.teal,
        borderRadius: 4,
    },
    depreciationText: {
        fontSize: 13,
        color: Colors.textSecondary,
        marginBottom: 4,
    },
    bold: {
        fontWeight: '700',
        color: Colors.textPrimary,
    },
    multiCardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfCard: {
        width: width * 0.42,
    },
    cardValue: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.primary,
        marginBottom: 4,
    },
    cardLabel: {
        fontSize: 12,
        color: Colors.textMuted,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    listTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.textPrimary,
    },
    listSubtitle: {
        fontSize: 11,
        color: Colors.textMuted,
        marginTop: 2,
    },
    listCost: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.textPrimary,
    },
    actionButton: {
        backgroundColor: Colors.primary,
        borderRadius: 16,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        shadowColor: Colors.primary,
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width:0, height: 4 },
    },
    actionButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
    },
});
