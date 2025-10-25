import { useState } from 'react';
import { Bell, Lock, User, Palette, Globe, Mail, Shield, Zap } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [jobAlerts, setJobAlerts] = useState(true);
  const [applicationUpdates, setApplicationUpdates] = useState(true);
  const [interviewReminders, setInterviewReminders] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account preferences and settings</p>
        </div>

        <Tabs defaultValue="notifications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="notifications">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy">
              <Shield className="h-4 w-4 mr-2" />
              Privacy
            </TabsTrigger>
            <TabsTrigger value="preferences">
              <Zap className="h-4 w-4 mr-2" />
              Preferences
            </TabsTrigger>
            <TabsTrigger value="account">
              <User className="h-4 w-4 mr-2" />
              Account
            </TabsTrigger>
          </TabsList>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card className="p-6">
              <h3 className="text-lg mb-4">Notification Settings</h3>
              <p className="text-gray-600 mb-6">Choose how you want to be notified about job opportunities and updates</p>

              <div className="space-y-6">
                {/* Email Notifications */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-gray-600" />
                      <div>
                        <Label>Email Notifications</Label>
                        <p className="text-sm text-gray-600">Receive notifications via email</p>
                      </div>
                    </div>
                    <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                  </div>
                </div>

                <Separator />

                {/* Push Notifications */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-gray-600" />
                      <div>
                        <Label>Push Notifications</Label>
                        <p className="text-sm text-gray-600">Receive push notifications on your device</p>
                      </div>
                    </div>
                    <Switch checked={pushNotifications} onCheckedChange={setPushNotifications} />
                  </div>
                </div>

                <Separator />

                {/* Specific Notifications */}
                <div className="space-y-4">
                  <h4>Notification Types</h4>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Job Alerts</Label>
                      <p className="text-sm text-gray-600">New job recommendations matching your profile</p>
                    </div>
                    <Switch checked={jobAlerts} onCheckedChange={setJobAlerts} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Application Updates</Label>
                      <p className="text-sm text-gray-600">Status changes on your applications</p>
                    </div>
                    <Switch checked={applicationUpdates} onCheckedChange={setApplicationUpdates} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Interview Reminders</Label>
                      <p className="text-sm text-gray-600">Reminders for upcoming interviews</p>
                    </div>
                    <Switch checked={interviewReminders} onCheckedChange={setInterviewReminders} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Weekly Digest</Label>
                      <p className="text-sm text-gray-600">Summary of your job search activity</p>
                    </div>
                    <Switch checked={weeklyDigest} onCheckedChange={setWeeklyDigest} />
                  </div>
                </div>
              </div>

              <Button className="mt-6">Save Notification Settings</Button>
            </Card>
          </TabsContent>

          {/* Privacy Tab */}
          <TabsContent value="privacy">
            <Card className="p-6">
              <h3 className="text-lg mb-4">Privacy & Security</h3>
              <p className="text-gray-600 mb-6">Control your privacy and data sharing preferences</p>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Profile Visibility</Label>
                    <p className="text-sm text-gray-600">Make your profile visible to recruiters</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Show Application History</Label>
                    <p className="text-sm text-gray-600">Display your application history to employers</p>
                  </div>
                  <Switch />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Anonymous Mode</Label>
                    <p className="text-sm text-gray-600">Browse jobs without tracking</p>
                  </div>
                  <Switch />
                </div>

                <Separator />

                <div>
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-gray-600 mb-3">Add an extra layer of security to your account</p>
                  <Button variant="outline">Enable 2FA</Button>
                </div>

                <Separator />

                <div>
                  <Label>Change Password</Label>
                  <p className="text-sm text-gray-600 mb-3">Update your account password</p>
                  <Button variant="outline">Change Password</Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences">
            <Card className="p-6">
              <h3 className="text-lg mb-4">Job Search Preferences</h3>
              <p className="text-gray-600 mb-6">Customize your job search experience</p>

              <div className="space-y-6">
                <div>
                  <Label>Preferred Job Locations</Label>
                  <Input placeholder="e.g., San Francisco, Remote, New York" className="mt-2" />
                </div>

                <div>
                  <Label>Job Types</Label>
                  <Select defaultValue="fulltime">
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fulltime">Full-time</SelectItem>
                      <SelectItem value="parttime">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="all">All Types</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Minimum Salary (Annual)</Label>
                  <Input type="number" placeholder="e.g., 100000" className="mt-2" />
                </div>

                <div>
                  <Label>Work Location Preference</Label>
                  <Select defaultValue="hybrid">
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote Only</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                      <SelectItem value="onsite">On-site</SelectItem>
                      <SelectItem value="any">Any</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>AI Recommendation Frequency</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realtime">Real-time</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="manual">Manual Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="mt-6">Save Preferences</Button>
            </Card>
          </TabsContent>

          {/* Account Tab */}
          <TabsContent value="account">
            <Card className="p-6">
              <h3 className="text-lg mb-4">Account Settings</h3>
              <p className="text-gray-600 mb-6">Manage your account information</p>

              <div className="space-y-6">
                <div>
                  <Label>Email Address</Label>
                  <Input type="email" defaultValue="alex.chen@email.com" className="mt-2" />
                </div>

                <div>
                  <Label>Full Name</Label>
                  <Input defaultValue="Alex Chen" className="mt-2" />
                </div>

                <div>
                  <Label>Phone Number</Label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" className="mt-2" />
                </div>

                <div>
                  <Label>Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Timezone</Label>
                  <Select defaultValue="pst">
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                      <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                      <SelectItem value="cst">Central Time (CT)</SelectItem>
                      <SelectItem value="est">Eastern Time (ET)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator className="my-6" />

              <div>
                <h4 className="text-red-600 mb-2">Danger Zone</h4>
                <p className="text-sm text-gray-600 mb-3">Permanently delete your account and all associated data</p>
                <Button variant="destructive">Delete Account</Button>
              </div>

              <Button className="mt-6">Save Account Settings</Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
