import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function BlogDetailPage() {
  return (
    <>
      <Header />
      <main className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/blog">
            <Button variant="outline" className="mb-6">Back to Blog</Button>
          </Link>
          <Card className="p-8">
            <h1 className="text-4xl font-bold mb-4">Immigration Trends to Watch in 2024</h1>
            <div className="text-sm text-gray-500 mb-8">By Sarah Johnson on January 20, 2024 • 5 min read</div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Major Shifts in 2024</h2>
              <p>The immigration landscape is rapidly evolving. Here are key trends:</p>
              <h3 className="text-xl font-bold">1. Digital Nomad Programs Expand</h3>
              <p>More countries launching digital nomad visas to attract remote workers.</p>
              <h3 className="text-xl font-bold">2. Skills-Based Immigration</h3>
              <p>Shift toward prioritizing professional qualifications over national quotas.</p>
              <h3 className="text-xl font-bold">3. Climate Migration</h3>
              <p>New migration categories emerging for climate-related relocation.</p>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
