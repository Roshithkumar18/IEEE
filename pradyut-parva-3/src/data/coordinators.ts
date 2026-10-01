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
  photoPath?: string;
}

export const studentCoordinators: Coordinator[] = [
  { name: 'Santhosh P', role: 'Student Coordinator' },
  { name: 'Shreehitha E', role: 'Student Coordinator' },
  { name: 'Vikas N', role: 'Student Coordinator' },
  { name: 'Suman S', role: 'Student Coordinator' },
  { name: 'Pradish A', role: 'Student Coordinator' },
  { name: 'Bhoomika', role: 'Student Coordinator' },
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
    photoPath: '/assets/leadership/ceo.jpg',
  },
  {
    name: 'Dr. R Arun Kumar',
    role: 'COO',
    title: 'COO, Sairam Institutions',
    level: 2,
    photoPath: '/assets/leadership/coo.jpeg',
  },
  {
    name: 'Dr. B. Shadaksharappa',
    role: 'Principal',
    title: 'Principal, SSCE',
    level: 3,
    photoPath: '/assets/leadership/Dr. B. Shadaksharappa-Photoroom (1).jpg',
  },
  {
    name: 'Dr. A. Poonguzhali',
    role: 'Branch Counsellor & HOD',
    title: 'Branch Counsellor & HOD, ECE',
    department: 'ECE',
    level: 4,
    photoPath: '/assets/leadership/Dr. Poonguzhali.jpg',
  },
  {
    name: 'Dr. Narmatha P',
    role: 'Coordinator',
    title: 'Faculty Coordinator',
    level: 5,
    photoPath: '/assets/leadership/Narmadha.jpg',
  },
  {
    name: 'Dr. Ahila A',
    role: 'Coordinator',
    title: 'Faculty Coordinator',
    level: 5,
    photoPath: '/assets/leadership/Ahila.jpg',
  },
];

export const eventStudentCoordinators: LeadershipMember[] = [
  {
    name: 'Santhosh P',
    role: 'Student Coordinator',
    title: 'Student Coordinator',
    level: 6,
    photoPath: '/assets/leadership/SANTHOSH.P.JPG.jpeg',
  },
  {
    name: 'Shreehitha E [IV ECE]',
    role: 'Student Coordinator',
    title: 'Student Coordinator',
    level: 6,
    photoPath: '/assets/leadership/M.S.SREEHITHA.JPG.jpeg',
  },
  {
    name: 'Vikas N [III ECE]',
    role: 'Student Coordinator',
    title: 'Student Coordinator',
    level: 6,
    photoPath: '/assets/leadership/Vikas N.JPG.jpeg',
  },
  {
    name: 'Suman S [III ISE]',
    role: 'Student Coordinator',
    title: 'Student Coordinator',
    level: 6,
    photoPath: '/assets/leadership/Suman S.jpg.jpeg',
  },
  {
    name: 'Pradish A [III CSE]',
    role: 'Student Coordinator',
    title: 'Student Coordinator',
    level: 6,
    photoPath: '/assets/leadership/Pradish A.JPG.jpeg',
  },
  {
    name: 'Bhoomika [III AIML]',
    role: 'Student Coordinator',
    title: 'Student Coordinator',
    level: 6,
    photoPath: '/assets/leadership/Bhoomika R.JPG.jpeg',
  },
];

export const allLeadership: LeadershipMember[] = [
  ...leadership,
  ...eventStudentCoordinators,
];
