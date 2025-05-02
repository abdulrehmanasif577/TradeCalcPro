import { useState } from 'react';
import { Link } from 'wouter';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await apiRequest('POST', '/api/contact', { name, email, message });
      setSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-4 flex justify-between items-center">
        <Link href="/">
          <Button variant="outline" className="flex items-center space-x-2">
            <i className="fas fa-home"></i>
            <span>Back to Home</span>
          </Button>
        </Link>
      </div>
      
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-2">
          Contact Us
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Have questions or feedback? Reach out to our team.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-5 mb-6">
        {submitted ? (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 rounded-md">
            <div className="flex">
              <i className="fas fa-check-circle mt-0.5 mr-2"></i>
              <div>
                <p className="font-medium">Message sent successfully!</p>
                <p className="text-sm">We'll get back to you as soon as possible.</p>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="name" className="mb-1">Your Name</Label>
              <Input 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.name}</p>
              )}
            </div>
            
            <div className="mb-4">
              <Label htmlFor="email" className="mb-1">Email Address</Label>
              <Input 
                id="email" 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.email}</p>
              )}
            </div>
            
            <div className="mb-4">
              <Label htmlFor="message" className="mb-1">Message</Label>
              <Textarea 
                id="message" 
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.message}</p>
              )}
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        )}
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-5">
        <h2 className="text-lg font-heading font-semibold mb-4 text-gray-900 dark:text-white">
          Other Ways to Reach Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex">
            <div className="w-10 h-10 bg-primary-50 dark:bg-gray-700 text-primary-500 flex items-center justify-center rounded-lg">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Email Us</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">support@tradecalcpro.com</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-10 h-10 bg-primary-50 dark:bg-gray-700 text-primary-500 flex items-center justify-center rounded-lg">
              <i className="fas fa-clock"></i>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Response Time</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Within 24-48 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
