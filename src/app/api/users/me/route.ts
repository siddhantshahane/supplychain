import { NextRequest, NextResponse } from 'next/server';

// Mock database of users
const users = {
  'admin@example.com': {
    id: '1',
    email: 'admin@example.com',
    first_name: 'Admin',
    last_name: 'User',
    role: 'admin',
    company: 'Supply Chain Inc.',
  },
  'user@example.com': {
    id: '2',
    email: 'user@example.com',
    first_name: 'Regular',
    last_name: 'User',
    role: 'user',
    company: 'Client Company',
  }
};

export async function GET(req: NextRequest) {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { message: 'Unauthorized - Missing or invalid token' },
        { status: 401 }
      );
    }
    
    const token = authHeader.split(' ')[1];
    console.log('Received token:', token);
    
    // In a real implementation, you would verify the JWT token and extract user info
    // For this mock, we'll assume the token is an encoded email (very simplified)
    
    // Simulate token verification and user lookup
    // This is extremely simplified - in production you would properly verify JWT
    let userEmail;
    
    try {
      // Just for demo purposes, assume token contains email in base64
      // In reality, should properly verify JWT
      userEmail = atob(token.split('.')[1]);
      
      // Extract email from decoded payload
      // This is a simplified approach - real JWT handling would be more robust
      const payload = JSON.parse(userEmail);
      userEmail = payload.email || 'admin@example.com';
    } catch (error) {
      console.log('Token parsing error:', error);
      // For demo purposes, default to admin if token parsing fails
      userEmail = 'admin@example.com';
    }
    
    // Find user
    const user = users[userEmail] || users['admin@example.com']; // Default to admin for demo
    
    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(user);
  } catch (error) {
    console.error('Error in /api/users/me:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 