const request = require('supertest');
const app = require('../api/app');

describe('Test the root path', () => {
  test('It should response the GET method', (done) => {
    request(app)
      .get('/')
      .then((res) => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});

describe('Test /api/txs', () => {
  test('It should response the GET method', async () => {
    const res = await request(app).get('/api/txs');
    expect(res.statusCode).toBe(200);
  });
  test('Verify param - address (empty)', async () => {
    const res = await request(app).get('/api/txs');
    expect(res.text).toBe('{"success":false,"errMsg":"param a not vaild"}');
  });
  test('Verify param - address (not vaild)', async () => {
    const res = await request(app).get('/api/txs?a=bbb');
    expect(res.text).toBe('{"success":false,"errMsg":"param a not vaild"}');
  });
  test(
    'Verify param - address (vaild)',
    async () => {
      const res = await request(app).get('/api/txs?a=0xeb2a81e229b68c1c22b6683275c00945f9872d90');
      const json = JSON.parse(res.text);
      expect(json.data.list).toBeTruthy();
    },
    1000 * 100
  );

  test(
    'Verify param - page size (vaild)',
    async () => {
      const res = await request(app).get('/api/txs?a=0xeb2a81e229b68c1c22b6683275c00945f9872d90&ps=10');
      const json = JSON.parse(res.text);
      expect(json.data.list).toBeTruthy();
    },
    1000 * 60
  );

  test(
    'Verify param - page index (vaild)',
    async () => {
      const res = await request(app).get('/api/txs?a=0xeb2a81e229b68c1c22b6683275c00945f9872d90&p=2');
      const json = JSON.parse(res.text);
      expect(json.data.list).toBeTruthy();
    },
    1000 * 60
  );

  test(
    'Verify param - page size (not vaild)',
    async () => {
      const res = await request(app).get('/api/txs?a=0xeb2a81e229b68c1c22b6683275c00945f9872d90&ps=aaa');
      expect(res.text).toBe('{"success":false,"errMsg":"param ps not vaild"}');
    },
    1000 * 60
  );

  test(
    'Verify param - page index (not vaild)',
    async () => {
      const res = await request(app).get('/api/txs?a=0xeb2a81e229b68c1c22b6683275c00945f9872d90&p=bbb');
      expect(res.text).toBe('{"success":false,"errMsg":"param p not vaild"}');
    },
    1000 * 60
  );

  test(
    'page 1 not equal page 2 ',
    async () => {
      const resP1 = await request(app).get('/api/txs?a=0xeb2a81e229b68c1c22b6683275c00945f9872d90&ps=10&p=1');
      const resP2 = await request(app).get('/api/txs?a=0xeb2a81e229b68c1c22b6683275c00945f9872d90&ps=10&p=2');

      const jsonP1 = JSON.parse(resP1.text);
      const jsonP2 = JSON.parse(resP2.text);
      expect(jsonP1.data.list.sort()).not.toEqual(jsonP2.data.list.sort());
    },
    1000 * 60
  );

  test(
    'page size equal  ',
    async () => {
      const pageSize = 10;
      const resP1 = await request(app).get(`/api/txs?a=0xeb2a81e229b68c1c22b6683275c00945f9872d90&ps=${pageSize}&p=1`);
      const jsonP1 = JSON.parse(resP1.text);
      expect(jsonP1.data.list.length).toEqual(pageSize);
    },
    1000 * 60
  );

  test(
    'cache insert',
    async () => {
      const resP1 = await request(app).get(`/api/txs?a=0xeb2a81e229b68c1c22b6683275c00945f9872d90&ps=10&p=1`);
      const has = app.locals.cache.has(`a=0xeb2a81e229b68c1c22b6683275c00945f9872d90&ps=10&p=1`);
      expect(resP1).toBeTruthy();
    },
    1000 * 60
  );

  test(
    'cache hit',
    async () => {
      await request(app).get(`/api/txs?a=0xeb2a81e229b68c1c22b6683275c00945f9872d90&ps=10&p=1`);
      await sleep(1000 * 5);
      const ttl1 = app.locals.cache.getRemainingTTL(`a=0xeb2a81e229b68c1c22b6683275c00945f9872d90&ps=10&p=1`);
      console.log(ttl1);
      await request(app).get(`/api/txs?a=0xeb2a81e229b68c1c22b6683275c00945f9872d90&ps=10&p=1`);
      const ttl2 = app.locals.cache.getRemainingTTL(`a=0xeb2a81e229b68c1c22b6683275c00945f9872d90&ps=10&p=1`);
      console.log(ttl2);
      expect(ttl2).toBeGreaterThan(ttl1);
    },
    1000 * 60
  );
});
function sleep(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}
