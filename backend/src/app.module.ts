import { Module } from '@nestjs/common';
import { FinanceModule } from './finance/finance.module';
import { ComplianceModule } from './compliance/compliance.module';
import { FleetModule } from './fleet/fleet.module';

@Module({
  imports: [
    FinanceModule, // Depreciation & VAT Engine
    ComplianceModule, // Legal & Data Rights Logic
    FleetModule, // Organization Management
  ],
})
export class AppModule {}
