'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp } from 'lucide-react';

const OPPORTUNITIES = [
  { role: 'Software Engineer', country: 'US', salary: '$120K-$180K', demand: 'Very High' },
  { role: 'Data Scientist', country: 'UK', salary: '£80K-£120K', demand: 'High' },
  { role: 'Product Manager', country: 'CA', salary: '$100K-$150K CAD', demand: 'High' },
];

export default function CareerPivotPage() {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Career Pivot Tool</h1>
        <p className="text-gray-600 mb-12">Explore international career opportunities</p>

        <div className="space-y-4">
          {OPPORTUNITIES.map((opp, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle>{opp.role}</CardTitle>
                  <p className="text-sm text-gray-600">{opp.country}</p>
                </div>
                <Badge className={opp.demand === 'Very High' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'}>
                  {opp.demand}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-blue-600">{opp.salary}</span>
                  <Button size="sm">Explore</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
