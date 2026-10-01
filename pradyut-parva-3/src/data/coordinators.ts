export interface Coordinator {
  name: string;
  role: string;
  department?: string;
  phone?: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  title: string;
  department?: string;
  level: number; // 1=Chairman/CEO, 2=COO, 3=Principal, 4=Branch Counsellor, 5=Faculty Coordinators, 6=Student Coordinators
  imagePlaceholder?: boolean;
}

export const studentCoordinators: Coordinator[] = [
  { name: 'Santhosh P', role: 'Student Coordinator', department: 'III ECE' },
  { name: 'Shreehitha E', role: 'Student Coordinator', department: 'II ECE' },
  { name: 'Vikas S', role: 'Student Coordinator', department: 'III ECE' },
  { name: 'Suman', role: 'Student Coordinator', department: 'I ESE' },
  { name: 'Parshad A', role: 'Student Coordinator', department: 'CSE' },
  { name: 'Bhoomika', role: 'Student Coordinator', department: 'AIML' },
];

export const facultyCoordinators: Coordinator[] = [
  { name: 'Dr. Narmatha P', role: 'Faculty Coordinator' },
  { name: 'Dr. Ahila A', role: 'Faculty Coordinator' },
];

export const leadership: LeadershipMember[] = [
  {
    name: 'Dr. Sai Prakash LeoMuthu',
    role: 'Chairman & CEO',
    title: 'Chairman & CEO, Sairam Institutions',
    level: 1,
    imagePlaceholder: true,
  },
  {
    name: 'Mr. Arun Kumar',
    role: 'COO',
    title: 'COO, Sairam Institutions',
    level: 2,
    imagePlaceholder: true,
  },
  {
    name: 'Dr. B. Shadaksharappa',
    role: 'Principal',
    title: 'Principal, SSCE',
    level: 3,
    imagePlaceholder: true,
  },
  {
    name: 'Dr. A. Poonguzhali',
    role: 'Branch Counsellor & HOD',
    title: 'Branch Counsellor & HOD, ECE',
    department: 'ECE',
    level: 4,
    imagePlaceholder: true,
  },
  {
    name: 'Dr. Narmatha. P',
    role: 'Coordinator',
    title: 'Faculty Coordinator',
    level: 5,
    imagePlaceholder: true,
  },
  {
    name: 'Dr. Ahila A',
    role: 'Coordinator',
    title: 'Faculty Coordinator',
    level: 5,
    imagePlaceholder: true,
  },
];

export const eventStudentCoordinators: LeadershipMember[] = [
  {
    name: 'Santhosh P',
    role: 'Student Coordinator',
    title: 'Student Coordinator',
    department: 'III ECE',
    level: 6,
    imagePlaceholder: true,
  },
  {
    name: 'Shreehitha E',
    role: 'Student Coordinator',
    title: 'Student Coordinator',
    department: 'II ECE',
    level: 6,
    imagePlaceholder: true,
  },
  {
    name: 'Vikas S',
    role: 'Student Coordinator',
    title: 'Student Coordinator',
    department: 'III ECE',
    level: 6,
    imagePlaceholder: true,
  },
  {
    name: 'Suman',
    role: 'Student Coordinator',
    title: 'Student Coordinator',
    department: 'I ESE',
    level: 6,
    imagePlaceholder: true,
  },
  {
    name: 'Parshad A',
    role: 'Student Coordinator',
    title: 'Student Coordinator',
    department: 'CSE',
    level: 6,
    imagePlaceholder: true,
  },
];

export const allLeadership: LeadershipMember[] = [
  ...leadership,
  ...eventStudentCoordinators,
];
