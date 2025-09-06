# Email Setup Instructions

## Contact Form Configuration

Your contact form is now working! However, to enable email sending, you need to configure your email credentials.

### Option 1: Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
3. **Create Environment File**:
   - Create a file named `.env.local` in your project root
   - Add the following content:
   ```
   EMAIL=your-email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

### Option 2: Development Mode (Current)

The form currently works in "development mode" where:
- ✅ Form validation works
- ✅ Success/error messages display
- ✅ Form data is logged to console
- ❌ No actual emails are sent

### Option 3: Production Deployment

For production (Vercel, Netlify, etc.):
1. Add environment variables in your hosting platform:
   - `EMAIL`: your-email@gmail.com
   - `EMAIL_PASS`: your-app-password
2. The form will automatically send emails

### Testing the Form

1. Fill out the contact form
2. Check the browser console for logged data
3. You should see a success message
4. Form fields will be cleared on successful submission

### Troubleshooting

- **Form not submitting**: Check browser console for errors
- **Email not sending**: Verify environment variables are set correctly
- **Gmail issues**: Make sure you're using an App Password, not your regular password

The form is now fully functional with proper error handling and user feedback!
