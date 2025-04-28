import { NextResponse } from 'next/server';

// Mock user credentials database
const users = {
  'admin@example.com': {
    password: 'admin123',
    id: '1',
    email: 'admin@example.com',
    first_name: 'Admin',
    last_name: 'User',
    role: 'admin',
  },
  'user@example.com': {
    password: 'user123',
    id: '2',
    email: 'user@example.com',
    first_name: 'Regular',
    last_name: 'User',
    role: 'user',
  }
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;
    
    console.log('Login attempt for:', email);
    
    // Validate credentials
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }
    
    const user = users[email];
    
    // Check if user exists and password matches
    if (!user || user.password !== password) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    // Create a simple token (in a real app, use JWT with proper signing)
    // This is just a mock - DO NOT use this approach in production
    const userData = { id: user.id, email: user.email, role: user.role };
    const header = btoa(JSON.stringify({ alg: 'none', typ: 'JWT' }));
    const payload = btoa(JSON.stringify(userData));
    const signature = btoa('mocksignature');
    const token = `${header}.${payload}.${signature}`;
    
    return NextResponse.json({
      access_token: token,
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Error in login route:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 