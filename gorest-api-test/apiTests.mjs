import axios from 'axios';
import { expect } from 'chai';

// Axios instance with default headers
const api = axios.create({
  baseURL: 'https://gorest.co.in/public/v2',
  headers: {
    'Authorization': 'Bearer 2d0c0224abe227ac2011bbeba39ce9bc7722a5015de3f8eabc04f1d39dad9385',
    'Content-Type': 'application/json'
  }
});

describe('GoRest API Tests', () => {
  let userId;

  it('should create a new user', async () => {
    const response = await api.post('/users', {
      name: 'Audia',
      gender: 'female',
      email: `audiaws.${Date.now()}@example.com`,
      status: 'active'
    });
    expect(response.status).to.equal(201);
    expect(response.data).to.have.property('id');
    userId = response.data.id;
  });

  it('should get user details', async () => {
    const response = await api.get(`/users/${userId}`);
    expect(response.status).to.equal(200);
    expect(response.data).to.have.property('id', userId);
  });

  it('should update user details', async () => {
    const response = await api.put(`/users/${userId}`, {
      name: 'Audia Updated',
      status: 'inactive'
    });
    expect(response.status).to.equal(200);
    expect(response.data).to.have.property('name', 'Audia Updated');
  });

  it('should delete the user', async () => {
    const response = await api.delete(`/users/${userId}`);
    expect(response.status).to.equal(204);
  });

  it('should return 404 for non-existing user', async () => {
    try {
      await api.get(`/users/9999999`);
    } catch (error) {
      expect(error.response.status).to.equal(404);
    }
  });
});
