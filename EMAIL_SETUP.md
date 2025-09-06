# Email Setup Instructions

## Contact Form Configuration

Your contact form is now working! However, to enable email sending, you need to configure your email credentials.

### Option 1: Gmail Setup (Recommended)

**IMPORTANT**: The error you're seeing is because Gmail requires an "App Password", not your regular password.

1. **Enable 2-Factor Authentication** on your Gmail account:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Turn on "2-Step Verification"

2. **Generate an App Password**:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Click "2-Step Verification" → "App passwords"
   - Select "Mail" as the app
   - Copy the 16-character password (format: xxxx xxxx xxxx xxxx)

3. **Set Environment Variables in Vercel**:
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings → Environment Variables
   - Add these variables:
     ```
     EMAIL=your-email@gmail.com
     EMAIL_PASS=your-16-character-app-password
     ```
   - **Important**: Use the App Password, NOT your regular Gmail password

4. **Redeploy** your project after adding environment variables

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

#### Common Gmail Errors:

1. **"Username and Password not accepted" (Error 535)**:
   - ❌ You're using your regular Gmail password
   - ✅ Use an App Password instead
   - ✅ Make sure 2-Factor Authentication is enabled

2. **"Less secure app access"**:
   - ❌ Don't enable "Less secure app access"
   - ✅ Use App Passwords instead

3. **"Invalid login"**:
   - Check that EMAIL and EMAIL_PASS are set correctly in Vercel
   - Make sure there are no extra spaces in the environment variables
   - Redeploy after adding environment variables

#### Alternative Email Services:

If Gmail doesn't work, you can use:
- **Outlook/Hotmail**: Similar setup with App Passwords
- **Yahoo Mail**: Requires App Passwords
- **Custom SMTP**: Configure with your hosting provider's SMTP settings

The form is now fully functional with proper error handling and user feedback!
