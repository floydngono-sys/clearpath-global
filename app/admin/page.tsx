'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, FileText, Users, Settings } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm"><Users className="w-5 h-5" /> Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">1,247</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm"><FileText className="w-5 h-5" /> Content</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">234</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm"><BarChart3 className="w-5 h-5" /> Views</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">54.2K</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm"><Settings className="w-5 h-5" /> Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">12</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader><CardTitle>Content Management</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <Link href="/admin/guides"><Button variant="outline" className="w-full">Manage Guides</Button></Link>
              <Link href="/admin/blog"><Button variant="outline" className="w-full">Manage Blog</Button></Link>
              <Link href="/admin/moderation"><Button variant="outline" className="w-full">Moderation</Button></Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>System</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <Link href="/admin/sources"><Button variant="outline" className="w-full">RSS Sources</Button></Link>
              <Link href="/admin/analytics"><Button variant="outline" className="w-full">Analytics</Button></Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
