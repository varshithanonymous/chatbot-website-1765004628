
        "use client";
        import { useState } from 'react';
        export default function ContactForm() {
            const [status, setStatus] = useState('idle');
            const handleSubmit = (e) => { e.preventDefault(); setStatus('submitting'); setTimeout(() => setStatus('success'), 1500); };
            return (
                <form onSubmit={handleSubmit} style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', marginTop: '2rem' }}>
                    <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Contact Us</h3>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        <input type="text" placeholder="Name" required style={{ width: '100%', padding: '12px', borderRadius: '6px', border: 'none' }} />
                        <input type="email" placeholder="Email" required style={{ width: '100%', padding: '12px', borderRadius: '6px', border: 'none' }} />
                        <textarea placeholder="Message" rows="4" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: 'none' }}></textarea>
                        <button disabled={status === 'success'} style={{ padding: '12px', background: status === 'success' ? '#22c55e' : '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                            {status === 'success' ? 'Message Sent!' : 'Send Message'}
                        </button>
                    </div>
                </form>
            );
        }
        