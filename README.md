# AutoTrack: Vehicle Financial Intelligence SaaS

AutoTrack is a premium Vehicle Expense, Financial Intelligence, and Fleet Management platform.

## 🚀 Technology Stack
- **Mobile**: React Native (Expo SDK 50+)
- **Backend/DB**: Supabase (PostgreSQL, Auth, Edge Functions, Storage)
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Billing**: Stripe Connect
- **Compliance**: GDPR/CCPA Ready

## 📁 Workspace Structure
```text
/autotrack
  ├── apps/
  │   ├── mobile/          # Expo Application (iOS/Android)
  │   └── web/             # Admin/Fleet Web Dashboard (Next.js)
  ├── supabase/
  │   ├── migrations/      # DB Schema & RLS Policies
  │   └── functions/       # Stripe Webhooks & PDF Reports
  ├── packages/
  │   └── shared/          # Types, Validation Logic, Constants
  └── README.md
```

## 🎨 Branding System
- **Colors**: Deep Blue (#0F172A), Teal Accent, Slate backgrounds.
- **Logo**: Integrated via watermark (5% opacity) on data cards.
- **Typography**: Inter (Body), SF Pro (Headings).

## 🛠 Features
1. **Financial Intelligence**: Depreciation engine, VAT tracking, Expense categorization.
2. **Fleet Management**: Organization-based RBAC, Driver/Vehicle mapping.
3. **Subscriptions**: Multi-tier billing (Free/Premium/Fleet).
4. **Maintenance**: Service logging & predictive scheduling.
