const http = require('http');

function post(path, method, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const req = http.request({
      hostname: 'localhost',
      port: 8081,
      path: '/api/v1' + path,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    }, (res) => {
      let chunks = '';
      res.on('data', d => chunks += d);
      res.on('end', () => {
        try {
          resolve(JSON.parse(chunks));
        } catch(e) {
          resolve({ raw: chunks, statusCode: res.statusCode });
        }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function run() {
  console.log('--- 1. Testing Admin Auth ---');
  const authRes = await post('/admin/auth/verify', 'POST', { password: 'sensei@admin2026' });
  console.log('Auth:', authRes.success, authRes.message);

  console.log('--- 2. Testing Create Announcement ---');
  const annRes = await post('/announcements', 'POST', {
    icon: '🚀',
    category: 'Special Batch',
    text: 'Special Weekend Batch for SSC CGL Tier-1 starting soon',
    active: true,
    displayOrder: 10
  });
  console.log('Create Announcement:', annRes.success, annRes.data?.id);

  console.log('--- 3. Testing Toggle Announcement ---');
  if (annRes.data?.id) {
    const toggleRes = await post(`/announcements/${annRes.data.id}/toggle`, 'PATCH', {});
    console.log('Toggle Announcement:', toggleRes.success);
  }

  console.log('--- 4. Testing Create Enquiry ---');
  const enqRes = await post('/enquiries', 'POST', {
    name: 'Suresh Kumar',
    phone: '9845012345',
    email: 'suresh@gmail.com',
    courseCode: 'banking',
    batchPreference: 'Morning',
    locality: 'Rajajinagar'
  });
  console.log('Create Enquiry:', enqRes.success, enqRes.data?.id);

  console.log('--- 5. Testing Update Enquiry Status & Notes ---');
  if (enqRes.data?.id) {
    const statusRes = await post(`/enquiries/${enqRes.data.id}/status`, 'PATCH', {
      status: 'CONTACTED',
      notes: 'Spoke to student on phone, interested in IBPS PO.'
    });
    console.log('Update Status:', statusRes.success, statusRes.data?.status, statusRes.data?.adminNotes);
  }

  console.log('--- 6. Testing Update Program Fee ---');
  const feeRes = await post('/programs/banking/fee', 'PATCH', {
    feeDisplay: '₹16,999',
    feeSubtext: 'Including GST (Zero Hidden Fees)',
    validity: '3 Years Extended',
    timings: '10:00 AM – 12:00 PM / 1:00 PM – 3:00 PM'
  });
  console.log('Update Fee:', feeRes.success, feeRes.data?.feeDisplay, feeRes.data?.validity);
}

run().catch(console.error);
