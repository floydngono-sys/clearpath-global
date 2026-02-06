import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Globe, Zap, BarChart3, Users, BookOpen, TrendingUp, Check, Star } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Navigate Global Immigration with Confidence
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Access real-time policy data, expert insights, and personalized immigration pathways.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600" asChild>
                  <Link href="/auth">Get Started Free</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/quiz">Take the Quiz</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Core Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Globe, title: 'Global Coverage', description: 'Immigration data for 195+ countries' },
                { icon: Zap, title: 'Real-time Updates', description: 'Policy changes as they happen' },
                { icon: BarChart3, title: 'Data Intelligence', description: 'Research-backed analytics' },
              ].map((f, i) => {
                const Icon = f.icon;
                return (
                  <Card key={i}>
                    <CardHeader>
                      <Icon className="w-6 h-6 text-blue-600 mb-4" />
                      <CardTitle>{f.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{f.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">FAQ</h2>
            <Accordion type="single" collapsible>
              {[
                { q: 'How accurate is the immigration data?', a: 'Our data is from official government sources, verified daily.' },
                { q: 'Can I use ClearPath for free?', a: 'Yes! Public resources are free. Premium features available.' },
                { q: 'How do I get policy alerts?', a: 'Set up custom alerts in your dashboard.' },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
