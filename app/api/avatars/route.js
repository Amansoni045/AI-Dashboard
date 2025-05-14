export async function GET() {
  const dummyUsers = [
    {
      id: 1,
      firstName: 'Salman',
      lastName: 'Singh',
      image: 'https://api.dicebear.com/8.x/adventurer/svg?seed=Aman',
    },
    {
      id: 2,
      firstName: 'Jiya',
      lastName: 'Sharma',
      image: 'https://api.dicebear.com/8.x/adventurer/svg?seed=Riya',
    },
    {
      id: 3,
      firstName: 'Dev',
      lastName: 'Patel',
      image: 'https://api.dicebear.com/8.x/adventurer/svg?seed=Dev',
    },
    {
      id: 4,
      firstName: 'Priya',
      lastName: 'Mehta',
      image: 'https://api.dicebear.com/8.x/adventurer/svg?seed=Priya',
    },
    {
      id: 5,
      firstName: 'Rohan',
      lastName: 'Verma',
      image: 'https://api.dicebear.com/8.x/adventurer/svg?seed=Rohan',
    },
    {
      id: 6,
      firstName: 'Sneha',
      lastName: 'Kapoor',
      image: 'https://api.dicebear.com/8.x/adventurer/svg?seed=Sneha',
    },
  ];

  return Response.json({ users: dummyUsers });
}
