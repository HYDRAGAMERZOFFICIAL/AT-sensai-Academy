import React from 'react';
import { TransparencySection } from '../components/transparency/TransparencySection';
import { Link } from 'react-router-dom';

export function FeesPage() {
  return (
    <div className="page-fees" style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-16)' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
        <span className="badge badge-emerald" style={{ marginBottom: 'var(--space-2)' }}>100% Pricing Integrity</span>
        <h1>Transparent Fee & Schedule Governance</h1>
        <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}>
          All prices are inclusive of applicable GST with zero hidden costs, clear batch timings, and 3-Year course validity.
        </p>
      </div>

      <TransparencySection />

      <div className="container" style={{ marginTop: 'var(--space-12)' }}>
        <div style={{ background: '#fff', padding: 'var(--space-8)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border-subtle)', maxWidth: '900px', margin: '0 auto' }}>
          <h3 style={{ marginBottom: 'var(--space-4)' }}>Summary of Competitive Coaching Fees</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: 'var(--color-bg-alt)', borderBottom: '2px solid var(--color-border-subtle)' }}>
                  <th style={{ padding: 'var(--space-3)' }}>Programme</th>
                  <th style={{ padding: 'var(--space-3)' }}>Catalog Fee</th>
                  <th style={{ padding: 'var(--space-3)' }}>Validity</th>
                  <th style={{ padding: 'var(--space-3)' }}>Batch Options</th>
                  <th style={{ padding: 'var(--space-3)' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                  <td style={{ padding: 'var(--space-4)' }}><strong>Banking Programme</strong></td>
                  <td style={{ padding: 'var(--space-4)', fontWeight: 700, color: 'var(--color-primary-navy)' }}>₹16,999 (incl. GST)</td>
                  <td style={{ padding: 'var(--space-4)' }}>3 Years</td>
                  <td style={{ padding: 'var(--space-4)' }}>10:00 AM–12:00 PM / 1:00 PM–3:00 PM</td>
                  <td style={{ padding: 'var(--space-4)' }}><Link to="/programs/banking" className="btn btn-sm btn-outline">Details</Link></td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                  <td style={{ padding: 'var(--space-4)' }}><strong>SSC Programme</strong></td>
                  <td style={{ padding: 'var(--space-4)', fontWeight: 700, color: 'var(--color-primary-navy)' }}>₹18,999 (incl. GST)</td>
                  <td style={{ padding: 'var(--space-4)' }}>3 Years</td>
                  <td style={{ padding: 'var(--space-4)' }}>Morning, Afternoon, Weekend</td>
                  <td style={{ padding: 'var(--space-4)' }}><Link to="/programs/ssc" className="btn btn-sm btn-outline">Details</Link></td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                  <td style={{ padding: 'var(--space-4)' }}><strong>SSC + Banking Combo</strong></td>
                  <td style={{ padding: 'var(--space-4)', fontWeight: 700, color: 'var(--color-primary-navy)' }}>₹27,999 (incl. GST)</td>
                  <td style={{ padding: 'var(--space-4)' }}>3 Years</td>
                  <td style={{ padding: 'var(--space-4)' }}>Flexible Multi-Slot</td>
                  <td style={{ padding: 'var(--space-4)' }}><Link to="/programs/ssc-banking-combo" className="btn btn-sm btn-outline">Details</Link></td>
                </tr>
                <tr>
                  <td style={{ padding: 'var(--space-4)' }}><strong>School Foundation (8th-10th)</strong></td>
                  <td style={{ padding: 'var(--space-4)', fontWeight: 700, color: 'var(--color-primary-navy)' }}>₹18,000 to ₹30,000</td>
                  <td style={{ padding: 'var(--space-4)' }}>Full Academic Year</td>
                  <td style={{ padding: 'var(--space-4)' }}>6:30 PM–8:00 PM (6 Days/Wk)</td>
                  <td style={{ padding: 'var(--space-4)' }}><Link to="/programs/foundation" className="btn btn-sm btn-outline">Details</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
