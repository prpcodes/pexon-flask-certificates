import { describe, expect, test } from 'vitest';

// These tests are expected to run in the same order every time,
// so they can use the same cert object and no garbage is left in the database after the tests.

describe('API', () => {
    let cert: any;
    test('gets all certifications', async () => {
        // fetch all certifications from the API
        const res = await fetch('http://localhost:5000/api/certifications').then((response) => response.json());
        // assert that the response is an object with a certifications array
        expect(res).toHaveProperty('certifications');
    });

    test('creates a new certification', async () => {
        cert = await fetch('http://localhost:5000/api/certification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'Test Certification',
            }),
        }).then((response) => response.json());

        // assert that the response is an object with a certification object
        expect(cert).toHaveProperty('certification');
        expect(cert.certification).toHaveProperty('id');
        expect(cert.certification).toHaveProperty('name');
        expect(cert.certification).toHaveProperty('created_at');
        expect(cert.certification.name).toBe('Test Certification');
    });

    test('creates and deletes a certification', async () => {
        const res = await fetch(`http://localhost:5000/api/certification/${cert.certification.id}`, {
            method: 'DELETE',
        }).then((response) => response.json());

        // assert that the response is an object with a certification object
        expect(res).toHaveProperty('certification');
        expect(res.certification).toHaveProperty('id');
        expect(res.certification).toHaveProperty('name');
        expect(res.certification).toHaveProperty('created_at');
        expect(res.certification.name).toBe('Test Certification');
    });
});
