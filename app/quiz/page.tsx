'use client';

import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const QUESTIONS = [
  { id: 1, q: 'Current employment status?', options: ['Employed', 'Self-employed', 'Student', 'Unemployed'] },
  { id: 2, q: 'Reason for immigration?', options: ['Employment', 'Education', 'Family', 'Business'] },
  { id: 3, q: 'Education level?', options: ['High School', 'Bachelor', 'Master', 'Doctorate'] },
  { id: 4, q: 'Years of experience?', options: ['0-2', '2-5', '5-10', '10+'] },
  { id: 5, q: 'Preferred region?', options: ['Europe', 'North America', 'Asia', 'Australia'] },
  { id: 6, q: 'Timeline?', options: ['6 months', '6-12 months', '1-2 years', 'Not urgent'] },
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const question = QUESTIONS[current];
  const progress = ((current + 1) / QUESTIONS.length) * 100;

  const handleNext = () => {
    if (current < QUESTIONS.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    return (
      <>
        <Header />
        <main className="py-20">
          <div className="max-w-2xl mx-auto px-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">Based on your responses, you may qualify for multiple visa pathways!</p>
                <Button className="bg-blue-600" onClick={() => window.location.reload()}>
                  Retake Quiz
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="py-20">
        <div className="max-w-2xl mx-auto px-4">
          <Card>
            <CardHeader>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Question {current + 1} of {QUESTIONS.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
              <CardTitle>{question.q}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup value={answers[question.id] || ''} onValueChange={(v) => setAnswers({...answers, [question.id]: v})}>
                {question.options.map((opt) => (
                  <div key={opt} className="flex items-center space-x-2">
                    <RadioGroupItem value={opt} id={opt} />
                    <Label htmlFor={opt}>{opt}</Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex gap-4">
                <Button
                  onClick={() => setCurrent(current - 1)}
                  disabled={current === 0}
                  variant="outline"
                  className="flex-1"
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!answers[question.id]}
                  className="flex-1 bg-blue-600"
                >
                  {current === QUESTIONS.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
