import { useId, useState } from 'react';
import { services } from '../data/services.js';
import '../styles/service-accordion.css';

function ServiceCard({ service, open, onToggle, prefix, appointmentLabel }) {
  const titleId = `${prefix}-${service.id}-title`;
  const descriptionId = `${prefix}-${service.id}-description`;
  const triggerId = `${prefix}-${service.id}-trigger`;
  const panelId = `${prefix}-${service.id}-panel`;

  return (
    <article className={`service-card${open ? ' is-open' : ''}`}>
      <div className="service-card-header">
        <button
          type="button"
          id={triggerId}
          className="service-card-trigger"
          aria-expanded={open}
          aria-controls={panelId}
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          onClick={onToggle}
        >
          <span className="service-card-control" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
        <div className="service-card-title">
          <img
            src={service.icon}
            alt=""
            className="lg:size-11 md:size-9 size-7 shrink-0"
          />
          <h3
            id={titleId}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-primary-3"
          >
            {service.title}
          </h3>
        </div>
        <div className="service-card-summary">
          <p
            id={descriptionId}
            className="text-primary-2 text-sm md:text-base leading-relaxed mb-4"
          >
            {service.description}
          </p>
          <a
            href="appointment.html"
            className="service-card-rdv inline-flex border border-primary-1 rounded-full px-4 py-1.5 text-sm font-medium text-primary-1 hover:bg-primary-1 hover:text-white transition-all"
          >
            {appointmentLabel}
          </a>
        </div>
      </div>
      <div
        id={panelId}
        className="service-card-panel"
        role="region"
        aria-labelledby={titleId}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="service-card-panel-clip">
          <div className="service-card-details">
            <ul className="service-card-grid">
              {service.subServices.map((subService, index) => (
                <li
                  key={subService.title}
                  className="service-mini-card"
                  style={{ '--service-order': index }}
                >
                  <div className="service-mini-photo">
                    <img
                      src={subService.image}
                      alt={subService.imageAlt || subService.title}
                      loading={open ? 'eager' : 'lazy'}
                      decoding="async"
                      width="1024"
                      height="1024"
                    />
                    <span
                      className="service-mini-photo-shade"
                      aria-hidden="true"
                    />
                    <span className="service-mini-number" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="service-mini-photo-mark"
                      aria-hidden="true"
                    >
                      <img src={service.icon} alt="" width="24" height="24" />
                    </span>
                  </div>
                  <div className="service-mini-content">
                    <h4 className="text-lg md:text-xl font-heading font-medium text-primary-3 leading-snug">
                      {subService.title}
                    </h4>
                    {subService.description && (
                      <p className="text-sm text-primary-2 leading-relaxed mt-2">
                        {subService.description}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ServiceAccordion({ appointmentLabel = 'Prendre RDV' }) {
  const [openId, setOpenId] = useState(null);
  const prefix = useId();

  return (
    <div className="service-accordion rounded-3xl flex flex-col gap-y-2.5">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          prefix={prefix}
          appointmentLabel={appointmentLabel}
          open={openId === service.id}
          onToggle={() =>
            setOpenId((current) => (current === service.id ? null : service.id))
          }
        />
      ))}
    </div>
  );
}
