// AI Service Integration
// This service can connect to OpenAI or other AI APIs

interface AIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export async function getAIResponse(
  messages: AIMessage[],
  agentType: string
): Promise<string> {
  // Option 1: Use OpenAI API (requires API key)
  // Safely access environment variables
  const OPENAI_API_KEY = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_OPENAI_API_KEY) || '';
  
  if (OPENAI_API_KEY && OPENAI_API_KEY !== 'YOUR_API_KEY_HERE' && OPENAI_API_KEY.startsWith('sk-')) {
    try {
      const systemPrompt = getSystemPrompt(agentType);
      
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('AI API Error:', error);
      // Fall back to mock responses
      return getMockResponse(messages, agentType);
    }
  }

  // Option 2: Use a free AI API (Hugging Face, etc.)
  // Uncomment and configure if you want to use Hugging Face
  /*
  const HF_API_KEY = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_HF_API_KEY) || '';
  
  if (HF_API_KEY) {
    try {
      const response = await fetch(
        'https://api-inference.huggingface.co/models/microsoft/DialoGPT-large',
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${HF_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            inputs: messages[messages.length - 1].content
          })
        }
      );
      
      const data = await response.json();
      return data.generated_text || data[0]?.generated_text || getMockResponse(messages, agentType);
    } catch (error) {
      console.error('HF API Error:', error);
      return getMockResponse(messages, agentType);
    }
  }
  */

  // Fallback: Enhanced mock responses for prototype
  return getMockResponse(messages, agentType);
}

function getSystemPrompt(agentType: string): string {
  const prompts = {
    'smart-match': `You are a Smart Match AI Agent for Cooply, a job search platform. Your role is to:
- Help users find jobs that match their skills, experience, and preferences
- Analyze job descriptions and user profiles to calculate match scores
- Provide personalized job recommendations
- Explain why certain jobs are good matches
- Be encouraging and helpful in your tone
Keep responses concise (2-3 sentences) and actionable.`,

    'application-tracker': `You are an Application Tracker AI Agent for Cooply. Your role is to:
- Help users track their job applications
- Provide status updates on pending applications
- Send reminders for follow-ups and deadlines
- Organize application timelines and next steps
- Be organized and proactive in your suggestions
Keep responses clear and action-oriented.`,

    'interview-coach': `You are an Interview Coach AI Agent for Cooply. Your role is to:
- Help users prepare for job interviews
- Provide practice questions and feedback
- Analyze responses using the STAR method
- Give tips on communication and presentation
- Build confidence with encouraging feedback
Keep responses supportive and constructive.`,

    'insight': `You are an Insight AI Agent for Cooply. Your role is to:
- Provide analytics about job search performance
- Share market trends and industry insights
- Analyze application success rates
- Give data-driven recommendations
- Help users understand their job search metrics
Keep responses informative with specific data points.`
  };

  return prompts[agentType as keyof typeof prompts] || prompts['smart-match'];
}

function getMockResponse(messages: AIMessage[], agentType: string): string {
  const userMessage = messages[messages.length - 1]?.content.toLowerCase() || '';
  
  // Enhanced contextual responses based on conversation
  const responses: Record<string, string[]> = {
    'smart-match': [
      'I found 12 positions that match your profile! The Google Senior Software Engineer role has a 92% match based on your React and TypeScript experience. Would you like me to analyze the requirements?',
      'Based on your skills, I recommend focusing on companies that value full-stack development. Microsoft and Meta have roles that align perfectly with your background.',
      'Your profile shows strong technical skills. I can help you find roles that offer remote work and competitive salaries. What\'s your preferred location?',
      'I notice you have 5 years of experience with React. There are several senior positions that would be perfect for you. Shall we explore them?',
      'Perfect! I\'ve filtered the results to show the most relevant positions. Would you like me to sort them by match score, salary, or posting date?'
    ],
    'application-tracker': [
      'You have 3 active applications. Microsoft interview is scheduled for Nov 1st. Would you like me to help you prepare or send a reminder?',
      'Your Google application moved to "Under Review" status. Typically, they respond within 5-7 days. I\'ll notify you of any updates.',
      'You haven\'t followed up on your Salesforce application in 2 weeks. Would you like me to draft a follow-up email?',
      'Your application success rate is 65% - that\'s great! You\'ve had 2 interviews from 5 applications. Keep up the momentum!'
    ],
    'interview-coach': [
      'Great question to practice! For "Tell me about yourself," use this structure: Brief background → Key achievements → Why this role. Would you like to try answering?',
      'Your response was strong! To improve, add specific metrics. Instead of "improved performance," say "reduced load time by 40%." Want to try again?',
      'Let\'s practice behavioral questions. Here\'s one: "Describe a time you disagreed with a team member." Remember to use the STAR method.',
      'Excellent preparation! Your confidence has improved 15% since last session. Ready to tackle technical questions next?'
    ],
    'insight': [
      'Your job search is 23% more active than average users. You\'re viewing 8 jobs per day and applying to 2-3 quality positions. Great strategy!',
      'Tech jobs in Boston increased 15% this quarter. React and TypeScript skills are trending. Your profile matches 87% of current demand!',
      'Your application-to-interview ratio is strong at 40%. Industry average is 25%. Companies are responding well to your profile.',
      'Peak application times show Tuesdays and Wednesdays get 30% more responses. Consider timing your applications accordingly.'
    ]
  };

  const agentResponses = responses[agentType] || responses['smart-match'];
  
  // Detect location mentions
  const locationMatch = userMessage.match(/\b(san francisco|sf|boston|new york|nyc|seattle|austin|chicago|remote|hybrid)\b/i);
  const roleMatch = userMessage.match(/\b(ux|ui|design|product|software|engineer|developer|data|analyst|manager|marketing)\b/i);
  
  // Provide highly contextual responses based on keywords
  if (locationMatch && roleMatch) {
    const location = locationMatch[0];
    const role = roleMatch[0];
    return `Great! I found 18 ${role} positions in ${location}. The top matches include Figma (95% match), Airbnb (92%), and Adobe (89%). These companies are actively hiring and your portfolio aligns perfectly with their requirements. Would you like me to show you the detailed job descriptions?`;
  }
  
  if (locationMatch) {
    const location = locationMatch[0];
    return `I've filtered jobs in ${location}. There are 24 active positions matching your profile. The market is strong there - companies are offering competitive salaries ($110k-$160k average) and many support remote/hybrid work. What type of role interests you most?`;
  }
  
  if (roleMatch) {
    const role = roleMatch[0];
    return `Found 21 ${role} positions! Based on your experience, I recommend focusing on mid-to-senior level roles. Top companies hiring: Google, Microsoft, Figma, and Salesforce. Your skills match 85%+ of their requirements. Want to see the best matches first?`;
  }
  
  if (userMessage.includes('software') || userMessage.includes('engineer') || userMessage.includes('developer')) {
    return 'Excellent! I found 15 software engineering roles that match your profile. Based on your skills in React, TypeScript, and Node.js, I recommend the Google and Microsoft positions with 90%+ match scores. Would you like to see the detailed breakdown?';
  }
  
  if (userMessage.includes('status') || userMessage.includes('application')) {
    return 'You have 3 active applications: Google (Pending - submitted 3 days ago), Microsoft (Interview Scheduled for Nov 1), and Salesforce (Under Review - last update 5 days ago). Would you like me to send a follow-up reminder for any of these?';
  }
  
  if (userMessage.includes('prepare') || userMessage.includes('practice') || userMessage.includes('interview')) {
    return 'Let\'s prepare for your Microsoft interview! I\'ll start with a common behavioral question: "Tell me about a time when you had to learn a new technology quickly." Take your time to answer, and I\'ll provide feedback on your response.';
  }
  
  if (userMessage.includes('trend') || userMessage.includes('market') || userMessage.includes('insight')) {
    return 'Great question! Current market analysis shows: Tech jobs in Boston are up 18% this quarter. Top skills in demand: React (35%), TypeScript (28%), Python (25%). Your profile matches 87% of trending requirements. Companies are prioritizing candidates with your experience level!';
  }

  if (userMessage.includes('salary') || userMessage.includes('pay') || userMessage.includes('compensation')) {
    return 'Based on your experience and location, the average salary range is $120k-$180k for senior software engineer roles. Companies like Google and Microsoft typically offer the higher end plus equity. Would you like me to filter jobs by salary range?';
  }

  if (userMessage.includes('portfolio') || userMessage.includes('resume') || userMessage.includes('profile')) {
    return 'I\'ve analyzed your profile! Your skills are well-aligned with current market demands. I recommend highlighting your most recent projects and quantifiable achievements. Would you like me to suggest which experiences to emphasize for specific roles?';
  }
  
  if (userMessage.includes('company') || userMessage.includes('companies')) {
    return 'Based on your preferences and profile, I recommend: Figma (culture fit: 95%), Airbnb (growth opportunities), Google (compensation), and Salesforce (work-life balance). Each has 3-5 open positions matching your skills. Which interests you most?';
  }
  
  // Return a random contextual response
  const randomIndex = Math.floor(Math.random() * agentResponses.length);
  return agentResponses[randomIndex];
}

// Helper to create conversation context
export function createConversationContext(
  messages: { role: 'user' | 'assistant'; content: string }[]
): AIMessage[] {
  return messages.map(msg => ({
    role: msg.role,
    content: msg.content
  }));
}
