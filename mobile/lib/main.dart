import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  
  await Supabase.initialize(
    url: 'https://gaylerylliam-art-autotrack-production.supabase.co',
    anonKey: 'placeholder_key',
  );
  
  runApp(const AutoTrackApp());
}

class AutoTrackApp extends StatelessWidget {
  const AutoTrackApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'AutoTrack — Fleet Intelligence',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF0D9488)), // Teal
        useMaterial3: true,
      ),
      home: const DashboardWrapper(),
    );
  }
}

class DashboardWrapper extends StatelessWidget {
  const DashboardWrapper({super.key});

  @override
  Widget build(BuildContext context) {
    final session = Supabase.instance.client.auth.currentSession;
    
    if (session == null) {
      return const AuthScreen(); // Mandatory login/signup with Compliance Check
    }
    
    return const FleetDashboard(); // Main Vehicle Financial OS
  }
}

class AuthScreen extends StatelessWidget {
  const AuthScreen({super.key});
  @override
  Widget build(BuildContext context) => const Scaffold(body: Center(child: Text("AutoTrack Auth & Compliance")));
}

class FleetDashboard extends StatelessWidget {
  const FleetDashboard({super.key});
  @override
  Widget build(BuildContext context) => const Scaffold(body: Center(child: Text("AutoTrack Fleet Dashboard")));
}
