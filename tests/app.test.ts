import supertest from 'supertest';

import app from '../src/index.js';
import prisma from '../src/config/database.js';
import userFactory from './factories/userFactory.js';