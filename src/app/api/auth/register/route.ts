import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, company, password } = body;

    console.log('Registration attempt with email:', email);

    // Check if email is already taken
    if (email.toLowerCase() === 'admin@example.com' || email.toLowerCase() === 'user@example.com') {
      return NextResponse.json(
        { detail: 'Email is already registered' },
        { status: 400 }
      );
    }

    // Validate inputs
    if (!name || !email || !password) {
      return NextResponse.json(
        { detail: 'Name, email, and password are required' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { detail: 'Password must be at least 6 characters long' },
        { status: 400 }
      );
    }

    // Simulate a successful registration
    // In a real app, this would create a user in the database
    const newUser = {
      id: Math.floor(Math.random() * 1000) + 10, // Random ID
      email,
      first_name: name.split(' ')[0],
      last_name: name.split(' ').slice(1).join(' '),
      role: 'customer',
      company: company,
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    // Return success response with the new user
    return NextResponse.json({
      user: newUser,
      message: 'Registration successful',
    });
  } catch (error) {
    console.error('Error in register route:', error);
    return NextResponse.json(
      { detail: 'Internal server error' },
      { status: 500 }
    );
  }
} 