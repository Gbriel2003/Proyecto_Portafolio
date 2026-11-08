"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { profile } from "@/lib/config";

export type LegalTab = "notice" | "privacy" | "cookies";

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: LegalTab;
  onClose: () => void;
}

export function LegalModal({ isOpen, initialTab = "privacy", onClose }: LegalModalProps) {
  const { t, lang } = useLang();
  const [selectedTab, setSelectedTab] = useState<LegalTab | null>(null);
  const activeTab = selectedTab ?? initialTab;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleClose = () => {
    setSelectedTab(null);
    onClose();
  };

  const isEs = lang === "es";

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-pitch" />
                <h2 id="legal-modal-title" className="font-sans text-base sm:text-lg font-bold text-foreground">
                  {t("legal.title")}
                </h2>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label={t("legal.close")}
                className="rounded-lg p-1.5 text-muted transition-colors hover:bg-panel2 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pitch"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-line bg-panel2/50 px-6">
              <button
                type="button"
                onClick={() => setSelectedTab("privacy")}
                className={`py-3 text-xs sm:text-sm font-mono font-medium transition-colors border-b-2 mr-6 ${
                  activeTab === "privacy"
                    ? "border-pitch text-pitch"
                    : "border-transparent text-muted hover:text-foreground"
                }`}
              >
                {t("legal.tabPrivacy")}
              </button>
              <button
                type="button"
                onClick={() => setSelectedTab("notice")}
                className={`py-3 text-xs sm:text-sm font-mono font-medium transition-colors border-b-2 mr-6 ${
                  activeTab === "notice"
                    ? "border-pitch text-pitch"
                    : "border-transparent text-muted hover:text-foreground"
                }`}
              >
                {t("legal.tabNotice")}
              </button>
              <button
                type="button"
                onClick={() => setSelectedTab("cookies")}
                className={`py-3 text-xs sm:text-sm font-mono font-medium transition-colors border-b-2 ${
                  activeTab === "cookies"
                    ? "border-pitch text-pitch"
                    : "border-transparent text-muted hover:text-foreground"
                }`}
              >
                {t("legal.tabCookies")}
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6 text-sm leading-relaxed text-muted space-y-4">
              {activeTab === "privacy" && (
                <div className="space-y-4">
                  <div className="rounded-xl border border-line/60 bg-panel2/40 p-4">
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-pitch mb-2">
                      {isEs ? "Información Básica sobre Protección de Datos" : "Basic Data Protection Overview"}
                    </h3>
                    <ul className="space-y-1.5 text-xs text-foreground/90 font-mono">
                      <li><strong>{isEs ? "Responsable:" : "Controller:"}</strong> {profile.name} ({profile.email})</li>
                      <li><strong>{isEs ? "Finalidad:" : "Purpose:"}</strong> {isEs ? "Responder y dar seguimiento a solicitudes de contacto profesional e ingeniería." : "Respond to and follow up on professional engineering and contact inquiries."}</li>
                      <li><strong>{isEs ? "Legitimación:" : "Lawful Basis:"}</strong> {isEs ? "Consentimiento expreso otorgado por el usuario al enviar el formulario." : "Explicit user consent provided upon form submission."}</li>
                      <li><strong>{isEs ? "Destinatarios:" : "Recipients:"}</strong> {isEs ? "Transmisión cifrada de correo vía Web3Forms API. No se ceden datos a terceros comerciales." : "Encrypted email transmission via Web3Forms API. No data is sold or shared with commercial third parties."}</li>
                    </ul>
                  </div>

                  <h4 className="font-bold text-foreground">{isEs ? "1. Compromiso de Privacidad" : "1. Privacy Commitment"}</h4>
                  <p>
                    {isEs
                      ? "En cumplimiento con los estándares internacionales de privacidad y el Reglamento General de Protección de Datos (RGPD UE 2016/679), tus datos personales serán tratados de forma lícita, leal y transparente."
                      : "In compliance with international privacy standards and the General Data Protection Regulation (GDPR EU 2016/679), your personal data is processed lawfully, fairly, and transparently."}
                  </p>

                  <h4 className="font-bold text-foreground">{isEs ? "2. Conservación y Derechos" : "2. Retention and Rights"}</h4>
                  <p>
                    {isEs
                      ? `Tus datos de contacto se conservarán únicamente durante el tiempo indispensable para entablar comunicación o el desarrollo de relaciones de ingeniería de software. Puedes ejercer tus derechos de acceso, rectificación, supresión y limitación del tratamiento escribiendo directamente a ${profile.email}.`
                      : `Your contact details are retained only for the time necessary to communicate regarding potential software engineering collaborations. You may exercise rights to access, rectify, delete, or restrict processing of your data by emailing ${profile.email}.`}
                  </p>
                </div>
              )}

              {activeTab === "notice" && (
                <div className="space-y-4">
                  <h4 className="font-bold text-foreground">{isEs ? "Titularidad del Sitio Web" : "Website Ownership"}</h4>
                  <p>
                    {isEs
                      ? `El presente sitio web es el portafolio profesional de ${profile.name}, Ingeniero de Sistemas egresado de la Universidad de Margarita (UNIMAR), domiciliado en ${profile.location}.`
                      : `This website represents the official engineering portfolio of ${profile.name}, Systems Engineer graduated from Universidad de Margarita (UNIMAR), located in ${profile.location}.`}
                  </p>

                  <h4 className="font-bold text-foreground">{isEs ? "Propiedad Intelectual" : "Intellectual Property"}</h4>
                  <p>
                    {isEs
                      ? "Los derechos de propiedad intelectual sobre el código fuente, diseño, capturas y contenidos corresponden a Gabriel Cardona o a sus respectivos licenciantes en proyectos de código abierto. Queda prohibida la reproducción no autorizada de marcas de terceros o logotipos corporativos."
                      : "Intellectual property rights regarding source code, design, screenshots, and content belong to Gabriel Cardona or respective open-source licensors. Unauthorized reproduction is strictly prohibited."}
                  </p>
                </div>
              )}

              {activeTab === "cookies" && (
                <div className="space-y-4">
                  <div className="rounded-xl border border-line/60 bg-panel2/40 p-4">
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-pitch mb-1">
                      {isEs ? "Sin Cookies de Rastreo Comercial" : "Zero Commercial Tracking Cookies"}
                    </h3>
                    <p className="text-xs text-foreground/90">
                      {isEs
                        ? "Este portafolio NO utiliza cookies analíticas de terceros (como Google Analytics) ni píxeles publicitarios intrusivos."
                        : "This portfolio does NOT employ third-party advertising cookies, trackers, or commercial profiling scripts."}
                    </p>
                  </div>

                  <h4 className="font-bold text-foreground">{isEs ? "Almacenamiento Local Técnico (localStorage)" : "Technical Local Storage (localStorage)"}</h4>
                  <p>
                    {isEs
                      ? "Conforme a la Directiva europea ePrivacy 2002/58/CE, se informa que este sitio utiliza exclusivamente almacenamiento local en tu navegador para fines técnicos indispensables:"
                      : "In accordance with EU ePrivacy Directive 2002/58/EC, this site utilizes strictly necessary technical local storage on your client device:"}
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li><strong className="text-foreground">theme:</strong> {isEs ? "Almacena tu preferencia de modo oscuro o claro." : "Stores dark or light theme user preference."}</li>
                    <li><strong className="text-foreground">lang:</strong> {isEs ? "Almacena tu preferencia de idioma (español o inglés)." : "Stores user language preference (Spanish or English)."}</li>
                  </ul>
                  <p className="text-xs">
                    {isEs
                      ? "Estos datos nunca salen de tu navegador ni se cruzan con perfiles de usuario."
                      : "These values remain entirely local to your browser and are never transmitted to external profiling databases."}
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex justify-end border-t border-line bg-panel2/30 px-6 py-3.5">
              <button
                type="button"
                onClick={handleClose}
                className="rounded-lg bg-panel border border-line px-4 py-2 font-mono text-xs font-semibold text-foreground transition-colors hover:border-pitch hover:text-pitch focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pitch"
              >
                {t("legal.close")}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
