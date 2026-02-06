'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ITEMS = [
  { id: '1', title: 'Guide: Startup Visas', author: 'John Doe' },
  { id: '2', title: 'Blog: New Zealand Work', author: 'Jane Smith' },
];

export default function ModerationPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Content Moderation</h1>
        <div className="space-y-4">
          {ITEMS.map((item) => (
            <Card key={item.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div><CardTitle>{item.title}</CardTitle><p className="text-sm text-gray-500">{item.author}</p></div>
                <Badge>Pending</Badge>
              </CardHeader>
              <CardContent><div className="flex gap-3"><Button className="bg-green-600">Approve</Button><Button variant="outline">Reject</Button></div></CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
