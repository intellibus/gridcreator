import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { project } from '../src';

const test = suite('Grid Creator Initial Setup');

test('Project Name is Correct', async () => {
  assert.equal(project, 'gridcreator');
});

export const { run } = test;
