import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function NewsDetailPage() {
  return (
    <>
      <Header />
      <main className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/news">
            <Button variant="outline" className="mb-6">Back to News</Button>
          </Link>
          <Card className="p-8">
            <h1 className="text-4xl font-bold mb-4">US Visa Policy Updates for 2024</h1>
            <p className="text-gray-600 mb-8">Published on January 15, 2024</p>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Key Changes</h2>
              <p>The US Department of State announced significant updates to visa processing procedures.</p>
              <h3 className="text-xl font-bold">Processing Timelines</h3>
              <p>Employment-based visas processed within 60-90 days for standard cases.</p>
              <h3 className="text-xl font-bold">Documentation Required</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Valid passport (6+ months validity)</li>
                <li>Employment letter from sponsor</li>
                <li>Educational credentials</li>
              </ul>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
