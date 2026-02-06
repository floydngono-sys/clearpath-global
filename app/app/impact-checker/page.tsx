'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function ImpactCheckerPage() {
  const [showResults, setShowResults] = useState(false);

  if (showResults) {
    return (
      <div className="py-20">
        <div className="max-w-2xl mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" /> You're Eligible!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Based on your assessment, you qualify for multiple visa pathways.</p>
              <div>
                <h4 className="font-semibold mb-2">Recommendations:</h4>
                <ul className="space-y-2">
                  <li>• Strong candidate for Skilled Worker Visa</li>
                  <li>• Consider applying within 6 months</li>
                  <li>• Update professional certifications</li>
                </ul>
              </div>
              <Button className="bg-blue-600" onClick={() => window.location.reload()}>Start Over</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Immigration Impact Checker</h1>
        <Card>
          <CardHeader>
            <CardTitle>Quick Assessment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Answer a few questions to assess your immigration eligibility.</p>
            <Button onClick={() => setShowResults(true)} className="w-full bg-blue-600">Start Assessment</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
