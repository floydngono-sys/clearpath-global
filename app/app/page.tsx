'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, Bookmark, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';

export default function DashboardPage() {
  const { profile } = useAuth();

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome, {profile?.full_name || 'User'}!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-blue-600" /> Active Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-2">3</p>
              <Link href="/app/alerts">
                <Button variant="outline" size="sm">Manage Alerts</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-green-600" /> Saved Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-2">12</p>
              <Link href="/app/saved">
                <Button variant="outline" size="sm">View Saved</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-600" /> Profile Strength
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-2">72%</p>
              <Link href="/app/settings">
                <Button variant="outline" size="sm">Complete Profile</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/app/impact-checker">
                <Button variant="outline" className="w-full justify-start">Impact Checker</Button>
              </Link>
              <Link href="/app/chat">
                <Button variant="outline" className="w-full justify-start">AI Assistant</Button>
              </Link>
              <Link href="/app/career-pivot">
                <Button variant="outline" className="w-full justify-start">Career Pivot</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="border-b pb-2">
                <p className="font-medium text-sm">Saved "Canada Express Entry Guide"</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
              <div className="border-b pb-2">
                <p className="font-medium text-sm">Set up alert for US visa updates</p>
                <p className="text-xs text-gray-500">Yesterday</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
