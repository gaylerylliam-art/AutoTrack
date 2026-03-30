-- AUTOTRACK PRODUCTION LEDGER
-- UAE COMPLIANCE & FINANCIAL INTELLIGENCE SCHEMA

-- Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Organizations (B2B Fleet)
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  trn TEXT, -- Tax Registration Number
  tax_region TEXT DEFAULT 'UAE',
  default_tax_rate NUMERIC DEFAULT 5.0,
  subscription_status TEXT DEFAULT 'trial', -- 'trial', 'active', 'past_due'
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. User Roles & Identity
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users,
  org_id UUID REFERENCES organizations(id),
  full_name TEXT,
  role TEXT DEFAULT 'user', -- 'owner', 'fleet_manager', 'driver'
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Vehicle Inventory & Depreciation Engine
CREATE TABLE vehicles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  owner_id UUID REFERENCES auth.users,
  org_id UUID REFERENCES organizations(id),
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  year INTEGER NOT NULL,
  plate_number TEXT NOT NULL,
  
  -- Depreciation Engine (Straight-Line)
  purchase_price NUMERIC NOT NULL,
  purchase_date DATE NOT NULL,
  useful_life_months INTEGER DEFAULT 60,
  salvage_value NUMERIC DEFAULT 0,
  
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. Expenses & VAT (UAE Standard)
CREATE TABLE expenses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  vehicle_id UUID REFERENCES vehicles(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users,
  
  category TEXT NOT NULL, -- Incl: 'Fire & Safety and IT & Camera Infrastructure'
  subcategory TEXT, -- Incl: 'Dash cam', 'Fire extinguisher', etc.
  
  -- VAT System
  amount_base NUMERIC NOT NULL,
  tax_rate NUMERIC DEFAULT 5.0,
  tax_amount NUMERIC NOT NULL,
  total_amount NUMERIC NOT NULL,
  is_tax_inclusive BOOLEAN DEFAULT TRUE,
  
  receipt_url TEXT,
  description TEXT,
  date DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 5. Legal & Consent Tracking
CREATE TABLE legal_consents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users NOT NULL,
  terms_accepted BOOLEAN DEFAULT FALSE,
  privacy_accepted BOOLEAN DEFAULT FALSE,
  terms_version TEXT NOT NULL,
  privacy_version TEXT NOT NULL,
  accepted_at TIMESTAMPTZ DEFAULT now()
);

-- 6. Trip Tracking (GPS Intelligence)
CREATE TABLE trips (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  vehicle_id UUID REFERENCES vehicles(id) ON DELETE CASCADE,
  driver_id UUID REFERENCES auth.users,
  start_lat NUMERIC,
  start_lng NUMERIC,
  end_lat NUMERIC,
  end_lng NUMERIC,
  distance_km NUMERIC,
  duration_minutes INTEGER,
  classification TEXT DEFAULT 'personal', -- 'business', 'personal'
  start_time TIMESTAMPTZ,
  end_time TIMESTAMPTZ
);
