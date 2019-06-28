#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { StackLibraryStack } from '../lib/stack-library-stack';

const app = new cdk.App();
new StackLibraryStack(app, 'StackLibraryStack');
