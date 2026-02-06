'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

export default function NewAlertPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [countries, setCountries] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || countries.length === 0) {
      toast.error('Fill in all fields');
      return;
    }
    toast.success('Alert created');
    router.push('/app/alerts');
  };

  return (
    <div className="py-20">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Create Alert</h1>
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label>Alert Name</Label>
                <Input placeholder="e.g., US Visa Updates" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <Label>Countries</Label>
                <div className="grid grid-cols-2 gap-4">
                  {['US', 'UK', 'CA', 'AU'].map((c) => (
                    <div key={c} className="flex items-center space-x-2">
                      <Checkbox
                        id={c}
                        checked={countries.includes(c)}
                        onCheckedChange={() =>
                          setCountries(countries.includes(c) ? countries.filter((x) => x !== c) : [...countries, c])
                        }
                      />
                      <Label htmlFor={c}>{c}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
                <Button type="submit" className="flex-1 bg-blue-600">Create</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
