import request from 'supertest';
import express from 'express';
import apiValidator from '../../src/server/api-validator';

const app = express();
app.use(express.json());
app.post('/validate', apiValidator);

describe('API Validator', () => {
  test('validates HTML correctly', async () => {
    const response = await request(app)
      .post('/validate')
      .send({ html: '<div class="col">Test</div>' })
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toHaveLength(1);
    expect(response.body[0].message).toContain('Column without parent row detected');
  });

  test('handles valid HTML', async () => {
    const response = await request(app)
      .post('/validate')
      .send({ html: '<div class="row"><div class="col">Test</div></div>' })
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toHaveLength(0);
  });

  test('handles invalid input', async () => {
    const response = await request(app)
      .post('/validate')
      .send({})
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body.error).toBe('Invalid input');
  });
});
