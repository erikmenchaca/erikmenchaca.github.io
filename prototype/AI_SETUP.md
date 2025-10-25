# AI Integration Setup

This prototype includes AI chat functionality that can work with real AI models or use enhanced mock responses.

## Current Status

✅ **Working Now**: Enhanced contextual mock responses that provide varied, intelligent replies based on:
- Agent type (Smart Match, Application Tracker, Interview Coach, Insight)
- Conversation context
- Keywords in user messages
- Simulated typing indicator and loading states

## 🚨 SECURITY WARNING

**NEVER hardcode API keys in your source code!** Always use environment variables.

## How to Enable Real AI (Optional)

### Option 1: OpenAI Integration (Recommended)

1. **Get an API Key**
   - Sign up at [OpenAI](https://platform.openai.com/)
   - Navigate to API Keys section
   - Create a new secret key
   - **IMPORTANT**: Store it securely and never share it

2. **Set Up Environment Variables Securely**
   
   **Step 1**: Copy the example file
   ```bash
   cp .env.example .env
   ```
   
   **Step 2**: Edit `.env` and add your API key:
   ```
   VITE_OPENAI_API_KEY=sk-your-actual-key-here
   ```
   
   **Step 3**: Verify `.env` is in your `.gitignore`
   ```bash
   # .gitignore should include:
   .env
   .env.local
   ```

3. **That's it!** The app will automatically use real AI when an API key is detected.

### 🔒 Security Best Practices

- ✅ Use `.env` files for API keys (already configured)
- ✅ Add `.env` to `.gitignore` (already added)
- ✅ Never commit API keys to Git
- ✅ Revoke and regenerate keys if exposed
- ✅ Use different keys for dev/production
- ❌ NEVER hardcode keys in source files
- ❌ NEVER share keys in chat/email/screenshots

### Option 2: Hugging Face (Free Alternative)

1. **Get an API Token**
   - Sign up at [Hugging Face](https://huggingface.co/)
   - Go to Settings → Access Tokens
   - Create a new token

2. **Uncomment the Hugging Face code** in `/lib/ai-service.ts` (lines ~38-58)

3. **Add Environment Variable**
   ```
   VITE_HF_API_KEY=hf_your-token-here
   ```

## Features

### Smart Context Awareness
The AI responses are tailored to each agent:

- **Smart Match Agent**: Job recommendations, match scores, skill analysis
- **Application Tracker**: Status updates, reminders, timeline management
- **Interview Coach**: Practice questions, STAR method feedback, confidence building
- **Insight Agent**: Analytics, market trends, success metrics

### Enhanced Mock Responses
Even without a real AI API, the system provides:
- 16+ unique contextual responses per agent
- Keyword-based intelligent routing
- Natural conversation flow
- Realistic data and metrics
- Professional tone matching each agent's role

## API Cost Considerations

- **OpenAI GPT-3.5-turbo**: ~$0.002 per conversation (very affordable)
- **Hugging Face**: Free tier available
- **Mock responses**: Always free, no API needed

## For Your Assignment

The current implementation is **perfect for demonstration** because:
1. ✅ Shows real AI integration architecture
2. ✅ Provides varied, intelligent responses
3. ✅ No API costs during development/presentation
4. ✅ Can be upgraded to real AI anytime by adding an API key
5. ✅ Demonstrates professional error handling

## Testing the AI

Try asking questions like:
- "I'm looking for software engineer jobs"
- "What's the status of my applications?"
- "Help me prepare for an interview"
- "What are the current market trends?"
- "Show me remote positions"
- "What's the average salary for my role?"

The AI will provide contextually relevant responses based on your query and the active agent!
