/**
 * +Quick.ai Backend Service
 * Handles Booking and Contact form submissions.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet.
 * 2. In the sheet, go to Extensions -> Apps Script.
 * 3. Paste this code into the editor.
 * 4. Update NOTIFICATION_EMAIL with your target email.
 * 5. Click "Deploy" -> "New Deployment".
 * 6. Select "Web App".
 * 7. Set "Execute as" to "Me" and "Who has access" to "Anyone".
 * 8. Copy the Web App URL and paste it into Contact.tsx (GOOGLE_SCRIPT_URL).
 */

const NOTIFICATION_EMAIL = 'hello@quickai.com'; // Change this to your business email

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Check if header row exists, if not create it
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp', 
        'Source', 
        'Full Name', 
        'Email', 
        'Phone', 
        'Company', 
        'Service', 
        'Message'
      ]);
    }
    
    // Append the new lead
    sheet.appendRow([
      new Date(),
      data.source || 'Unknown',
      data.fullName || '',
      data.email || '',
      data.phoneNumber || '',
      data.companyName || '',
      data.service || '',
      data.message || ''
    ]);
    
    // Send Email Notification
    sendEmailNotification(data);
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(data) {
  const subject = `New ${data.source || 'Lead'} – +Quick.ai`;
  
  const body = `
    New form submission received from +Quick.ai website.
    
    Details:
    ----------------------------------
    Source: ${data.source}
    Full Name: ${data.fullName}
    Email: ${data.email}
    Phone: ${data.phoneNumber}
    Company: ${data.companyName}
    Service: ${data.service}
    
    Message:
    ${data.message}
    ----------------------------------
    
    Date: ${new Date().toLocaleString()}
  `;
  
  GmailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);
}