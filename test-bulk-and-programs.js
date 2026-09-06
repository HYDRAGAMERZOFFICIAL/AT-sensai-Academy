const http = require('http');

function post(url, data, method = 'POST') {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const postData = JSON.stringify(data || {});
    const req = http.request({
      hostname: urlObj.hostname,
      port: urlObj.port,
      path: urlObj.pathname + urlObj.search,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(body) });
        } catch (e) {
          resolve({ status: res.statusCode, raw: body });
        }
      });
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function runTests() {
  console.log('--- 1. Testing Create New Program Course ---');
  const progRes = await post('http://localhost:8081/api/v1/programs', {
    title: 'UPSC EPFO & State PSC Fast Track',
    code: 'epfo-psc-fast-track',
    category: 'combo',
    feeDisplay: '₹22,999',
    feeSubtext: 'Inclusive of GST & Prelims+Mains Test Series',
    validity: '2 Years Unlimited',
    timings: 'Weekend 9:00 AM – 2:00 PM',
    description: 'Targeted preparation for administrative exams.'
  });
  console.log('Create Program Status:', progRes.status, 'Title:', progRes.data.data.title);

  console.log('--- 2. Testing Update Program Fee ---');
  const feeRes = await post('http://localhost:8081/api/v1/programs/epfo-psc-fast-track/fee', {
    feeDisplay: '₹21,499',
    validity: '3 Years Extended Access'
  }, 'PATCH');
  console.log('Update Fee Status:', feeRes.status, 'New Fee:', feeRes.data.data.feeDisplay);

  console.log('--- 3. Testing Create 3 Dummy Enquiries for Bulk Actions ---');
  const e1 = await post('http://localhost:8081/api/v1/enquiries', { name: 'Student One', phone: '9900112233', courseCode: 'banking' });
  const e2 = await post('http://localhost:8081/api/v1/enquiries', { name: 'Student Two', phone: '9900112244', courseCode: 'ssc' });
  const e3 = await post('http://localhost:8081/api/v1/enquiries', { name: 'Student Three', phone: '9900112255', courseCode: 'combo' });
  const ids = [e1.data.data.id, e2.data.data.id, e3.data.data.id];
  console.log('Created Enquiry IDs:', ids);

  console.log('--- 4. Testing Bulk Status Update ---');
  const bulkStatusRes = await post('http://localhost:8081/api/v1/enquiries/bulk-status', {
    ids: ids,
    status: 'COUNSELED'
  });
  console.log('Bulk Status Result:', bulkStatusRes.status, 'Updated Count:', bulkStatusRes.data.data);

  console.log('--- 5. Testing Bulk Delete Enquiries ---');
  const bulkDelRes = await post('http://localhost:8081/api/v1/enquiries/bulk-delete', {
    ids: ids
  });
  console.log('Bulk Delete Result:', bulkDelRes.status, 'Deleted Count:', bulkDelRes.data.data);

  console.log('--- 6. Testing Delete Created Program ---');
  const delProgRes = await post('http://localhost:8081/api/v1/programs/epfo-psc-fast-track', {}, 'DELETE');
  console.log('Delete Program Result:', delProgRes.status, delProgRes.data);
}

runTests().catch(console.error);
