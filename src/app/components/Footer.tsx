import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer data-aos="fade-up" className="py-12 bg-gray-800 text-center">
      <h2 className="text-2xl font-semibold mb-4">READY TO TAKE YOUR SKILLS TO THE NEXT LEVEL?</h2>
      <p className="mb-6">I create dynamic and engaging teaching methodologies...</p>
      <Button variant="default">
        <MessageCircle className="mr-2" /> WhatsApp me!
      </Button>
    </footer>
  );
}