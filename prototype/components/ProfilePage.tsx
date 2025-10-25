import { useState } from 'react';
import { User, Mail, MapPin, Briefcase, GraduationCap, Award, FileText, Settings, Camera, Linkedin, Github, Globe } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function ProfilePage() {
  const [editMode, setEditMode] = useState(false);

  const profile = {
    name: 'Alex Chen',
    email: 'alex.chen@email.com',
    location: 'San Francisco, CA',
    title: 'Senior UX Designer',
    bio: 'Passionate UX designer with 6+ years of experience creating user-centered digital products. Specialized in design systems, interaction design, and user research.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    links: {
      linkedin: 'linkedin.com/in/alexchen',
      github: 'github.com/alexchen',
      portfolio: 'alexchen.design'
    }
  };

  const skills = [
    'UX Design', 'UI Design', 'Figma', 'Adobe XD', 'Sketch',
    'User Research', 'Prototyping', 'Design Systems', 'Wireframing',
    'Usability Testing', 'Information Architecture', 'Interaction Design'
  ];

  const experiences = [
    {
      company: 'Tech Startup Inc',
      position: 'Senior UX Designer',
      period: '2021 - Present',
      description: 'Leading design initiatives for core product features, managing a team of 3 designers.'
    },
    {
      company: 'Design Agency',
      position: 'UX Designer',
      period: '2019 - 2021',
      description: 'Designed user experiences for various client projects across fintech and e-commerce.'
    },
    {
      company: 'Digital Solutions',
      position: 'Junior UX Designer',
      period: '2018 - 2019',
      description: 'Contributed to web and mobile app designs, conducted user research and usability testing.'
    }
  ];

  const education = [
    {
      school: 'University of Design',
      degree: 'Master of Design',
      field: 'Interaction Design',
      period: '2016 - 2018'
    },
    {
      school: 'State University',
      degree: 'Bachelor of Arts',
      field: 'Graphic Design',
      period: '2012 - 2016'
    }
  ];

  const certifications = [
    { name: 'Google UX Design Certificate', issuer: 'Google', year: '2023' },
    { name: 'Interaction Design Foundation', issuer: 'IDF', year: '2022' },
    { name: 'Design Thinking Certificate', issuer: 'IDEO', year: '2021' }
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl">Profile</h1>
          <Button 
            variant={editMode ? 'default' : 'outline'}
            onClick={() => setEditMode(!editMode)}
            className="gap-2"
          >
            <Settings className="h-4 w-4" />
            {editMode ? 'Save Changes' : 'Edit Profile'}
          </Button>
        </div>

        {/* Profile Card */}
        <Card className="p-8 mb-6">
          <div className="flex items-start gap-6">
            {/* Avatar */}
            <div className="relative">
              <Avatar className="w-32 h-32">
                <AvatarImage src={profile.avatar} alt={profile.name} />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              {editMode && (
                <Button 
                  size="sm" 
                  className="absolute -bottom-2 -right-2 rounded-full h-10 w-10 p-0"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Basic Info */}
            <div className="flex-1">
              {editMode ? (
                <div className="space-y-4">
                  <Input defaultValue={profile.name} placeholder="Name" />
                  <Input defaultValue={profile.title} placeholder="Job Title" />
                  <Input defaultValue={profile.email} placeholder="Email" type="email" />
                  <Input defaultValue={profile.location} placeholder="Location" />
                  <Textarea defaultValue={profile.bio} placeholder="Bio" rows={3} />
                </div>
              ) : (
                <>
                  <h2 className="text-2xl mb-1">{profile.name}</h2>
                  <p className="text-xl text-gray-600 mb-3">{profile.title}</p>
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      {profile.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {profile.location}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{profile.bio}</p>
                  
                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github className="h-4 w-4" />
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Globe className="h-4 w-4" />
                      Portfolio
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </Card>

        {/* Tabs for different sections */}
        <Tabs defaultValue="skills" className="space-y-6">
          <TabsList>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          {/* Skills Tab */}
          <TabsContent value="skills">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl">Skills & Expertise</h3>
                {editMode && (
                  <Button variant="outline" size="sm">Add Skill</Button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1.5">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience">
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-1">{exp.position}</h3>
                      <p className="text-gray-600 mb-2">{exp.company}</p>
                      <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                      <p className="text-gray-700">{exp.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
              {editMode && (
                <Button variant="outline" className="w-full">Add Experience</Button>
              )}
            </div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-1">{edu.degree}</h3>
                      <p className="text-gray-600 mb-1">{edu.school}</p>
                      <p className="text-sm text-gray-500 mb-2">{edu.field}</p>
                      <p className="text-sm text-gray-500">{edu.period}</p>
                    </div>
                  </div>
                </Card>
              ))}
              {editMode && (
                <Button variant="outline" className="w-full">Add Education</Button>
              )}
            </div>
          </TabsContent>

          {/* Certifications Tab */}
          <TabsContent value="certifications">
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-1">{cert.name}</h3>
                      <p className="text-gray-600">{cert.issuer}</p>
                      <p className="text-sm text-gray-500">Issued {cert.year}</p>
                    </div>
                  </div>
                </Card>
              ))}
              {editMode && (
                <Button variant="outline" className="w-full">Add Certification</Button>
              )}
            </div>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents">
            <Card className="p-6">
              <h3 className="text-xl mb-4">Documents & Files</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-blue-600" />
                    <div>
                      <p>Resume_AlexChen_2024.pdf</p>
                      <p className="text-sm text-gray-500">Updated Oct 20, 2024</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Download</Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-purple-600" />
                    <div>
                      <p>Portfolio_2024.pdf</p>
                      <p className="text-sm text-gray-500">Updated Oct 15, 2024</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Download</Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-green-600" />
                    <div>
                      <p>CoverLetter_Template.pdf</p>
                      <p className="text-sm text-gray-500">Updated Oct 10, 2024</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Download</Button>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">Upload Document</Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
