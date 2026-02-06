'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2 } from 'lucide-react';

const SAVED = [
  { id: '1', type: 'guide', title: 'US H-1B Visa Guide', category: 'Work Visa' },
  { id: '2', type: 'news', title: 'US Policy Updates 2024', category: 'Policy' },
  { id: '3', type: 'blog', title: 'Immigration Trends', category: 'Trends' },
];

export default function SavedPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Saved Items</h1>
        <div className="space-y-4">
          {SAVED.map((item) => (
            <Card key={item.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle>{item.title}</CardTitle>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="outline">{item.type}</Badge>
                    <Badge>{item.category}</Badge>
                  </div>
                </div>
                <Button variant="ghost">
                  <Trash2 className="w-4 h-4 text-red-600" />
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
