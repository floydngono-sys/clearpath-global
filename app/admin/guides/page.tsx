'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const GUIDES = [
  { id: '1', title: 'US H-1B Guide', views: 1245 },
  { id: '2', title: 'UK Skilled Worker', views: 892 },
];

export default function GuidesAdminPage() {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Manage Guides</h1>
        <div className="space-y-4">
          {GUIDES.map((g) => (
            <Card key={g.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div><CardTitle>{g.title}</CardTitle><p className="text-sm text-gray-500">{g.views} views</p></div>
                <div className="flex gap-2"><Button variant="outline">Edit</Button><Button variant="ghost">Delete</Button></div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
