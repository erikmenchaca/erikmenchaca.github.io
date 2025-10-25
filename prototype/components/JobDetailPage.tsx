import { ArrowLeft, MapPin, DollarSign, Clock, Bookmark, Share2, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

interface JobDetailPageProps {
  onBack: () => void;
}

export function JobDetailPage({ onBack }: JobDetailPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <Button variant="ghost" onClick={onBack} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Jobs
        </Button>

        <div className="grid grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="col-span-2">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-16 w-16 rounded-lg bg-blue-500 flex items-center justify-center text-white text-2xl">
                  G
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl mb-2">Senior Software Engineer</h1>
                  <p className="text-gray-600 mb-2">Google</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Boston, USA</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      <span>$120k - $180k</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Full time</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-2 mb-6">
                <Badge>React</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Node.js</Badge>
                <Badge>AWS</Badge>
              </div>

              <Separator className="my-6" />

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl mb-3">About the Role</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're looking for a Senior Software Engineer to join our growing team. You'll be working on cutting-edge
                    technologies to build scalable web applications that serve millions of users worldwide. This role offers
                    the opportunity to work with a talented team of engineers and make a significant impact on our product.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl mb-3">Responsibilities</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Design and develop high-quality, scalable web applications</li>
                    <li>Collaborate with cross-functional teams to define and ship new features</li>
                    <li>Write clean, maintainable code and conduct code reviews</li>
                    <li>Mentor junior engineers and contribute to team growth</li>
                    <li>Participate in architectural decisions and technical planning</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl mb-3">Requirements</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>5+ years of software engineering experience</li>
                    <li>Strong proficiency in React, TypeScript, and modern web technologies</li>
                    <li>Experience with cloud platforms (AWS, GCP, or Azure)</li>
                    <li>Excellent problem-solving and communication skills</li>
                    <li>BS/MS in Computer Science or related field</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl mb-3">Benefits</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Competitive salary and equity package</li>
                    <li>Comprehensive health, dental, and vision insurance</li>
                    <li>401(k) matching and retirement planning</li>
                    <li>Flexible work arrangements and unlimited PTO</li>
                    <li>Professional development budget</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="col-span-1 space-y-4">
            <Card className="p-6">
              <Button className="w-full mb-3 bg-black text-white hover:bg-black/90">
                Apply Now
              </Button>
              <Button variant="outline" className="w-full">
                <Sparkles className="mr-2 h-4 w-4" />
                Ask AI Assistant
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="mb-4">AI Match Score</h3>
              <div className="text-center mb-4">
                <div className="text-5xl mb-2">87%</div>
                <p className="text-sm text-gray-600">Great match for your profile!</p>
              </div>
              <Separator className="my-4" />
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Skills Match</span>
                  <span>92%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Experience Level</span>
                  <span>85%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Location</span>
                  <span>95%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Salary Range</span>
                  <span>75%</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="mb-4">Company Info</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600 mb-1">Industry</p>
                  <p>Technology</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Company Size</p>
                  <p>10,000+ employees</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Founded</p>
                  <p>1998</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Website</p>
                  <a href="#" className="text-blue-600 hover:underline">google.com</a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-purple-50 border-purple-200">
              <h3 className="mb-2">AI Insights</h3>
              <p className="text-sm text-gray-700">
                Based on your profile, you're likely to succeed in this role. Your React and TypeScript
                experience aligns perfectly with their tech stack.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
