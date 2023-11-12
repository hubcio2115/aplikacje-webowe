import { v4 as uuidv4 } from 'uuid';
import type { Book } from './book.type';

const data: Book[] = [
  {
    id: uuidv4(),
    title: 'Programming TypeScript',
    author: 'Boris Cherny',
    year: 2019,
    rented: false,
  },
  {
    id: uuidv4(),
    title: 'Mastering TypeScript',
    author: 'Nathan Rozentals',
    year: 2017,
    rented: false,
  },
  {
    id: uuidv4(),
    title:
      'Learning TypeScript 2.x: Develop maintainable applications with TypeScript',
    author: 'Remo H. Jansen',
    year: 2017,
    rented: false,
  },
  {
    id: uuidv4(),
    title: 'Pro TypeScript: Application-Scale JavaScript Development',
    author: 'Steve Fenton',
    year: 2017,
    rented: false,
  },
  {
    id: uuidv4(),
    title: 'TypeScript Quickly',
    author: 'Yakov Fain and Anton Moiseev',
    year: 2018,
    rented: false,
  },
  {
    id: uuidv4(),
    title:
      'Hands-On Design Patterns with TypeScript: Discover the modern implementation of design patterns in TypeScript 3 and JavaScript',
    author: 'Remo H. Jansen',
    year: 2018,
    rented: false,
  },
  {
    id: uuidv4(),
    title: 'Building Scalable Apps with Redis and Node.js',
    author: 'Joshua Johanan',
    year: 2017,
    rented: false,
  },
  {
    id: uuidv4(),
    title: 'Effective TypeScript: 62 Specific Ways to Improve Your TypeScript',
    author: 'Dan Vanderkam',
    year: 2019,
    rented: false,
  },
  {
    id: uuidv4(),
    title: 'Beginning TypeScript 2.x: With Angular',
    author: 'Greg Lim',
    year: 2017,
    rented: false,
  },
  {
    id: uuidv4(),
    title: 'TypeScript Design Patterns',
    author: 'Vilic Vane',
    year: 2016,
    rented: false,
  },
];

export default data;
