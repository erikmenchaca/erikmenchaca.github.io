import { useState, useEffect, useRef } from 'react';
import { Sparkles, X, Send, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { getAIResponse, createConversationContext } from '../lib/ai-service';

interface AIButtonProps {
  activeAgent: string;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function AIButton({ activeAgent }: AIButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: getWelcomeMessage(activeAgent)
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  function getWelcomeMessage(agent: string) {
    const messages = {
      'smart-match': 'Hi! I\'m your Smart Match Agent. I can help you find jobs that perfectly match your skills and preferences. What kind of role are you looking for?',
      'application-tracker': 'Hello! I\'m your Application Tracker Agent. I can help you manage your applications, set reminders, and track your progress. What would you like to know?',
      'interview-coach': 'Welcome! I\'m your Interview Coach Agent. I can help you prepare for interviews, practice common questions, and give feedback. Ready to start?',
      'insight': 'Hey! I\'m your Insight Agent. I can provide analytics about your job search, market trends, and recommendations. What insights would you like?'
    };
    return messages[agent as keyof typeof messages] || messages['smart-match'];
  }

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Reset messages when agent changes
  useEffect(() => {
    setMessages([{
      role: 'assistant',
      content: getWelcomeMessage(activeAgent)
    }]);
  }, [activeAgent]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Get AI response using the AI service
      const conversationContext = createConversationContext([...messages, userMessage]);
      const aiResponse = await getAIResponse(conversationContext, activeAgent);
      
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'I apologize, but I encountered an error. Could you please try again?' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600"
      >
        <Sparkles className="mr-2 h-4 w-4" />
        AI Button
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setIsOpen(false)}>
          <Card className="w-full max-w-2xl h-[600px] flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-purple-500" />
                <h3>AI Assistant</h3>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.role === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-900 rounded-lg p-3 flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Thinking...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="p-4 border-t flex-shrink-0">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                />
                <Button onClick={handleSend} disabled={isLoading || !input.trim()}>
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                💡 Tip: To use real AI, add your OpenAI API key to environment variables
              </p>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}
