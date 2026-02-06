'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Plus } from 'lucide-react';

const ALERTS = [
  { id: '1', name: 'US Visa Updates', type: 'policy_changes', countries: ['US'] },
  { id: '2', name: 'Canada Immigration News', type: 'country_updates', countries: ['CA'] },
];

export default function AlertsPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Manage Alerts</h1>
          <Link href="/app/alerts/new">
            <Button className="bg-blue-600">
              <Plus className="w-4 h-4 mr-2" /> Create Alert
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          {ALERTS.map((alert) => (
            <Card key={alert.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle>{alert.name}</CardTitle>
                  <div className="flex gap-2 mt-2">
                    <Badge>{alert.type}</Badge>
                    {alert.countries.map((c) => <Badge key={c}>{c}</Badge>)}
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
