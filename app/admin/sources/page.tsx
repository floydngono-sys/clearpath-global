'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const SOURCES = [
  { id: '1', name: 'US State Department', url: 'state.gov/rss', status: 'active' },
  { id: '2', name: 'UK Home Office', url: 'homeoffice.gov.uk/rss', status: 'active' },
];

export default function SourcesPage() {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">RSS Sources</h1>
        <div className="space-y-4">
          {SOURCES.map((s) => (
            <Card key={s.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div><CardTitle>{s.name}</CardTitle><p className="text-sm text-gray-500">{s.url}</p></div>
                <div className="flex items-center gap-3"><Badge>{s.status}</Badge><Button variant="outline" size="sm">Sync</Button></div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
