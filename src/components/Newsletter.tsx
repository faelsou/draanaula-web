import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) throw error;

      setStatus('success');
      setMessage('Obrigado por se inscrever!');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Erro ao se inscrever. Tente novamente.');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-lg font-medium text-white mb-4">
        Receba Novidades e Promoções
      </h3>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu melhor e-mail"
          required
          className="flex-1 px-4 py-2 rounded-lg bg-neutral-800 text-white placeholder-neutral-400 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-600"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-white text-neutral-900 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-neutral-100 transition disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          {status === 'loading' ? 'Enviando...' : 'Inscrever'}
        </button>
      </form>
      {message && (
        <p className={`mt-2 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Newsletter;