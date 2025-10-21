export interface JwtPayload {
  userId: string;
  email: string;
  name: string;
  role: 'participant' | 'organizer';
}