import { useState } from 'react';
import { Video, Mic, MicOff, VideoOff, Play, RotateCcw, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function InterviewCoachPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      type: 'Behavioral',
      question: 'Tell me about a time when you had to deal with a difficult team member.',
      tips: [
        'Use the STAR method (Situation, Task, Action, Result)',
        'Focus on conflict resolution skills',
        'Show empathy and professionalism'
      ]
    },
    {
      type: 'Technical',
      question: 'Explain how you would optimize a slow-loading React application.',
      tips: [
        'Mention code splitting and lazy loading',
        'Discuss memoization techniques',
        'Talk about performance monitoring tools'
      ]
    },
    {
      type: 'Behavioral',
      question: 'Describe a project where you had to learn a new technology quickly.',
      tips: [
        'Show your learning process',
        'Highlight adaptability',
        'Mention the outcome and what you learned'
      ]
    }
  ];

  const mockInterviews = [
    { company: 'Google', position: 'Software Engineer', date: 'Nov 1, 2024', duration: '45 min', score: 85 },
    { company: 'Microsoft', position: 'Frontend Developer', date: 'Oct 28, 2024', duration: '30 min', score: 92 },
    { company: 'Meta', position: 'Full Stack Engineer', date: 'Oct 25, 2024', duration: '60 min', score: 78 },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Interview Coach Agent</h1>
          <p className="text-gray-600">Practice with AI-powered interview simulations and get real-time feedback</p>
        </div>

        <Tabs defaultValue="practice" className="space-y-6">
          <TabsList>
            <TabsTrigger value="practice">Practice</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="tips">Interview Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="practice" className="space-y-6">
            <div className="grid grid-cols-3 gap-6">
              {/* Video/Recording Area */}
              <div className="col-span-2">
                <Card className="p-6">
                  <div className="aspect-video bg-gray-900 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    {isRecording ? (
                      <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                        <div className="h-2 w-2 bg-white rounded-full animate-pulse" />
                        Recording
                      </div>
                    ) : (
                      <div className="text-center text-gray-400">
                        <Video className="h-16 w-16 mx-auto mb-4" />
                        <p>Click "Start Practice" to begin</p>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
                      {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                    </Button>
                    <Button 
                      size="lg" 
                      className="rounded-full px-8 bg-purple-500 hover:bg-purple-600"
                      onClick={() => setIsRecording(!isRecording)}
                    >
                      {isRecording ? 'Stop Practice' : 'Start Practice'}
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
                      <VideoOff className="h-5 w-5" />
                    </Button>
                  </div>
                </Card>

                {/* AI Feedback */}
                <Card className="p-6 mt-4 bg-purple-50 border-purple-200">
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <h3 className="mb-2">AI Feedback</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Great start! Try to maintain eye contact with the camera. Your answer structure is good,
                        but consider adding more specific metrics to strengthen your response.
                      </p>
                      <div className="space-y-2">
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>Communication</span>
                            <span>85%</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>Content Quality</span>
                            <span>78%</span>
                          </div>
                          <Progress value={78} className="h-2" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>Confidence</span>
                            <span>92%</span>
                          </div>
                          <Progress value={92} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Questions Panel */}
              <div className="col-span-1 space-y-4">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3>Current Question</h3>
                    <Badge>{questions[currentQuestion].type}</Badge>
                  </div>
                  <p className="text-sm mb-4">{questions[currentQuestion].question}</p>
                  <div className="space-y-2">
                    {currentQuestion < questions.length - 1 && (
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => setCurrentQuestion(prev => prev + 1)}
                      >
                        Next Question
                      </Button>
                    )}
                    <Button 
                      variant="ghost" 
                      className="w-full"
                      onClick={() => setCurrentQuestion(0)}
                    >
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Restart
                    </Button>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="mb-3">Quick Tips</h3>
                  <ul className="space-y-2 text-sm">
                    {questions[currentQuestion].tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-6 bg-blue-50 border-blue-200">
                  <h3 className="mb-2">Pro Tip</h3>
                  <p className="text-sm text-gray-700">
                    Practice makes perfect! Try recording yourself multiple times to build confidence.
                  </p>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <div className="grid gap-4">
              {mockInterviews.map((interview, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="mb-1">{interview.company} - {interview.position}</h3>
                      <p className="text-sm text-gray-600">{interview.date} • {interview.duration}</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-1">{interview.score}%</div>
                      <p className="text-sm text-gray-600">Score</p>
                    </div>
                    <Button variant="outline" className="ml-4">
                      <Play className="mr-2 h-4 w-4" />
                      Review
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tips" className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="mb-4">Before the Interview</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Research the company and role thoroughly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Prepare answers using the STAR method</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Test your tech setup 15 minutes early</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Prepare thoughtful questions to ask</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="mb-4">During the Interview</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Maintain eye contact with the camera</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Speak clearly and at a moderate pace</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Use specific examples and metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Show enthusiasm for the role</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="mb-4">Common Behavioral Questions</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Tell me about yourself</li>
                  <li>• Describe a challenging project</li>
                  <li>• How do you handle conflict?</li>
                  <li>• Why do you want this role?</li>
                  <li>• What are your strengths/weaknesses?</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="mb-4">Common Technical Questions</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Explain your approach to [technology]</li>
                  <li>• How do you optimize performance?</li>
                  <li>• Describe your development workflow</li>
                  <li>• How do you handle debugging?</li>
                  <li>• What's your testing strategy?</li>
                </ul>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
