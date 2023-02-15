import { describe, expect, test } from 'vitest';

describe('API', () => {
    test('gets all certifications', async () => {
        // fetch all certifications from the API
        const data = await fetch('http://localhost:5000/api/certifications').then((response) => response.json());
        // assert that the response is an object with a certifications array
        expect(data).toHaveProperty('certifications');
    });

    test('creates a new certification', async () => {
        // create a new certification
        const data = await fetch('http://localhost:5000/api/certification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'Test Certification',
            }),
        }).then((response) => response.json());

        // assert that the response is an object with a certification object
        expect(data).toHaveProperty('certification');
        expect(data.certification).toHaveProperty('id');
        expect(data.certification).toHaveProperty('name');
        expect(data.certification).toHaveProperty('created_at');
        expect(data.certification.name).toBe('Test Certification');
    });

    test('deletes a certification', async () => {
        // create a new certification
        const data = await fetch('http://localhost:5000/api/certification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'Test Certification',
            }),
        }).then((response) => response.json());

        // delete the certification
        const deleted = await fetch(`http://localhost:5000/api/certification/${data.certification.id}`, {
            method: 'DELETE',
        }).then((response) => response.json());

        // assert that the response is an object with a certification object
        expect(deleted).toHaveProperty('certification');
        expect(deleted.certification).toHaveProperty('id');
        expect(deleted.certification).toHaveProperty('name');
        expect(deleted.certification).toHaveProperty('created_at');
        expect(deleted.certification.name).toBe('Test Certification');
    });
});
