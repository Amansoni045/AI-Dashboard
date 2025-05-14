export async function GET() {
    const dummyUsers = [
      {
        id: 1,
        firstName: 'Aman',
        lastName: 'Singh',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
      },
      {
        id: 2,
        firstName: 'Riya',
        lastName: 'Sharma',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      {
        id: 3,
        firstName: 'Dev',
        lastName: 'Patel',
        image: 'https://randomuser.me/api/portraits/men/75.jpg',
      },
    ];
  
    return Response.json({ users: dummyUsers });
  }
  








  