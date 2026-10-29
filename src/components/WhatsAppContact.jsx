import { WHATSAPP_NUMBER } from '../lib/whatsapp.js';
import '../styles/whatsapp-contact.css';

export default function WhatsAppContact({
  kind = 'booking',
  description = true,
}) {
  return (
    <div className="flex flex-col items-start gap-5">
      {description && (
        <p className="text-primary-2 text-base leading-relaxed">
          {kind === 'contact'
            ? 'Échangez directement avec notre équipe sur WhatsApp.'
            : 'Choisissez votre soin et convenez d’un rendez-vous directement avec notre équipe sur WhatsApp.'}
        </p>
      )}
      <a className="whatsapp-submit" href={`https://wa.me/${WHATSAPP_NUMBER}`}>
        <i className="iconify tabler--brand-whatsapp" aria-hidden="true" />
        {kind === 'contact' ? 'Discuter sur WhatsApp' : 'Réserver mon rituel'}
      </a>
    </div>
  );
}
