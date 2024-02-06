#!/usr/bin/env NODE_ENV=development node_modules/.bin/nodemon -q -I --exec node --no-warnings --experimental-specifier-resolution=node --loader ts-node/esm

import { PrismaClient } from 'prisma-client';

new PrismaClient();
