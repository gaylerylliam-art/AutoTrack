import 'package:geolocator/geolocator.dart';
import 'dart:async';

class TripTrackingService {
  bool isTracking = false;
  List<Position> _path = [];
  DateTime? _startTime;
  
  // Trip Detection Thresholds
  static const double moveThreshold = 5.0; // 5 km/h to start trip
  static const double stopTimeThreshold = 300; // 5 mins idle to stop trip

  /**
   * Initialize & Request Background Permissions
   */
  Future<void> init() async {
    LocationPermission permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      await Geolocator.requestPermission();
    }
  }

  /**
   * Automatic Trip Listener
   */
  void startAutoDetection() {
    Geolocator.getPositionStream(
      locationSettings: const LocationSettings(
        accuracy: LocationAccuracy.high,
        distanceFilter: 10,
      )
    ).listen((Position position) {
      if (position.speed > moveThreshold && !isTracking) {
        _startTrip(position);
      } else if (position.speed < 1.0 && isTracking) {
        // Potential Trip Stop Logic (Start timer for 5 mins idle)
      }
      
      if (isTracking) {
        _path.add(position);
      }
    });
  }

  void _startTrip(Position pos) {
    isTracking = true;
    _startTime = DateTime.now();
    _path = [pos];
    print("Trip Started Automatically at $_startTime");
    // Trigger local or server-side notification
  }

  void _stopTrip() {
    isTracking = false;
    final endTime = DateTime.now();
    final duration = endTime.difference(_startTime!);
    final distance = _calculateDistance(_path);
    print("Trip Finished: ${distance.toStringAsFixed(2)} km in ${duration.inMinutes} mins");
    // Logic to push trip log to Supabase API
  }

  double _calculateDistance(List<Position> path) {
    double total = 0;
    for (int i = 0; i < path.length - 1; i++) {
        total += Geolocator.distanceBetween(
          path[i].latitude, path[i].longitude, 
          path[i+1].latitude, path[i+1].longitude
        );
    }
    return total / 1000; // Conversion to Km
  }
}
