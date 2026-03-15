export type GameProgram = {
  title: string;
  players: string;
  status: 'Active' | 'Forming';
  summary: string;
  code: string;
};

export type NewsItem = {
  category: string;
  title: string;
  date: string;
  summary: string;
};

export type EventItem = {
  month: string;
  day: string;
  title: string;
  detail: string;
};

export const games: GameProgram[] = [
  {
    code: 'LOL',
    title: 'League of Legends',
    players: '12 players',
    status: 'Active',
    summary: 'Compete in collegiate 5v5 matches with weekly scrims and VOD review.',
  },
  {
    code: 'VAL',
    title: 'Valorant',
    players: '10 players',
    status: 'Active',
    summary: 'Tactical FPS roster focused on teamwork, communication, and tournament play.',
  },
  {
    code: 'RL',
    title: 'Rocket League',
    players: '6 players',
    status: 'Active',
    summary: 'High-speed 3v3 competition with regular practice and replay coaching.',
  },
  {
    code: 'OW2',
    title: 'Overwatch 2',
    players: '12 players',
    status: 'Forming',
    summary: 'Build role-based squads and train for collegiate open events.',
  },
  {
    code: 'SF6',
    title: 'Street Fighter 6',
    players: '4 players',
    status: 'Active',
    summary: 'Join our fighting game community for brackets, labs, and local events.',
  },
  {
    code: 'SSB',
    title: 'Super Smash Bros.',
    players: '8 players',
    status: 'Forming',
    summary: 'Compete in singles and crew battles with campus and online events.',
  },
];

export const news: NewsItem[] = [
  {
    category: 'Tournament',
    title: 'Knights advance to CCCAA Regional Finals in League of Legends',
    date: 'Mar 10, 2026',
    summary: 'Norco closed the semifinal with disciplined macro and objective control.',
  },
  {
    category: 'Announcement',
    title: 'Spring 2026 tryouts now open for all rosters',
    date: 'Mar 3, 2026',
    summary: 'Students of all skill levels are encouraged to apply and attend orientation.',
  },
  {
    category: 'Highlight',
    title: 'Valorant squad wins campus invitational and goes 5-0',
    date: 'Feb 24, 2026',
    summary: 'A strong defensive setup and disciplined retakes led to an undefeated run.',
  },
];

export const events: EventItem[] = [
  {
    month: 'Mar',
    day: '20',
    title: 'Spring Kick-Off LAN Party',
    detail: 'Student Center - 3:00 PM',
  },
  {
    month: 'Apr',
    day: '05',
    title: 'Valorant Open Tournament',
    detail: 'Online - 6:00 PM',
  },
  {
    month: 'Apr',
    day: '19',
    title: 'CCCAA Regional Qualifier',
    detail: 'Live Stream + On-Campus',
  },
  {
    month: 'May',
    day: '03',
    title: 'End-of-Semester Celebration',
    detail: 'Gaming Lab - 5:00 PM',
  },
];

export const aboutFeatures = [
  {
    title: 'Competitive Teams',
    desc: 'Represent Norco College in regional collegiate leagues and invitationals.',
  },
  {
    title: 'Student Community',
    desc: 'Join campus events, LAN nights, and student-led gaming clubs.',
  },
  {
    title: 'Skill Development',
    desc: 'Improve communication, leadership, and strategic problem solving.',
  },
  {
    title: 'Campus Partnerships',
    desc: 'Collaborate with college programs, student services, and local events.',
  },
];
