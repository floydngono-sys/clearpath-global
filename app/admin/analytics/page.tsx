'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AnalyticsPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Analytics</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader><CardTitle className="text-sm">Monthly Users</CardTitle></CardHeader>
            <CardContent><p className="text-3xl font-bold">1,247</p><p className="text-sm text-green-600 mt-2">+12% from last month</p></CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-sm">Page Views</CardTitle></CardHeader>
            <CardContent><p className="text-3xl font-bold">54.2K</p><p className="text-sm text-green-600 mt-2">+8% from last month</p></CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-sm">Avg Session</CardTitle></CardHeader>
            <CardContent><p className="text-3xl font-bold">4m 32s</p><p className="text-sm text-green-600 mt-2">+2% from last month</p></CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
