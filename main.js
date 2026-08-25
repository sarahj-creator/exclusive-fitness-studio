/**
 * EXCLUSIVE FITNESS STUDIO — SITE BEHAVIOUR
 * All content-driven markup pulls from EFS_CONFIG (js/config.js) so the
 * business can update contact info, hours, memberships, gallery and social
 * links from one place.
 */
(function () {
  "use strict";

  const cfg = typeof EFS_CONFIG !== "undefined" ? EFS_CONFIG : null;
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ---------------------------- header scroll state ---------------------------- */
  const header = $(".site-header");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ------------------------------- mobile menu ---------------------------------- */
  const menuToggle = $(".menu-toggle");
  const mobileMenu = $(".mobile-menu");
  if (menuToggle && mobileMenu) {
    const closeMenu = () => {
      mobileMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };
    const openMenu = () => {
      mobileMenu.classList.add("is-open");
      menuToggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    };
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("is-open");
      isOpen ? closeMenu() : openMenu();
    });
    $$("a", mobileMenu).forEach((a) => a.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ------------------------------ current nav state ------------------------------ */
  const currentPage = (location.pathname.split("/").pop() || "index.html");
  $$(".nav-links a, .mobile-menu__links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === currentPage || (href === "index.html" && currentPage === "")) {
      a.setAttribute("aria-current", "page");
    }
  });

  /* ------------------------------- reveal on scroll ------------------------------- */
  const revealEls = $$(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------------------------------- footer ------------------------------------- */
  if (cfg) {
    $$("[data-cfg-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
    $$("[data-cfg-brand]").forEach((el) => (el.textContent = cfg.brand.name));
    $$("[data-cfg-phone-text]").forEach((el) => (el.textContent = cfg.contact.phone.display));
    $$("[data-cfg-phone-href]").forEach((el) => el.setAttribute("href", cfg.contact.phone.href));
    $$("[data-cfg-email-text]").forEach((el) => (el.textContent = cfg.contact.email.display));
    $$("[data-cfg-email-href]").forEach((el) => el.setAttribute("href", cfg.contact.email.href));
    $$("[data-cfg-address]").forEach((el) => {
      el.innerHTML = `${cfg.contact.address.line1}<br>${cfg.contact.address.line2}<br>${cfg.contact.address.city}, ${cfg.contact.address.postcode}`;
    });
    $$("[data-cfg-access-hours]").forEach((el) => (el.textContent = cfg.hours.access));

    const hoursList = $("[data-cfg-hours-list]");
    if (hoursList) {
      hoursList.innerHTML = cfg.hours.staffed
        .map((h) => `<li class="footer-hours-row"><span>${h.days}</span><span>${h.time}</span></li>`)
        .join("");
    }
    $$("[data-cfg-hours-note]").forEach((el) => (el.textContent = cfg.hours.note));

    const socialLists = $$("[data-cfg-social]");
    socialLists.forEach((list) => {
      list.innerHTML = cfg.social
        .map((s) => `<li><a href="${s.url}" target="_blank" rel="noopener">${s.platform}</a></li>`)
        .join("");
    });
  }

  /* ------------------------------- services (home) -------------------------------- */
  const serviceGrid = $("[data-services-grid]");
  if (serviceGrid && cfg) {
    const icons = {
      clock: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9.5"/><path d="M12 7v5l3.2 2"/></svg>',
      target: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
      layers: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3 2 8l10 5 10-5-10-5Z"/><path d="m2 13 10 5 10-5"/><path d="m2 18 10 5 10-5"/></svg>',
    };
    serviceGrid.innerHTML = cfg.services
      .map(
        (s) => `
      <article class="service-card reveal">
        <div class="service-card__icon">${icons[s.icon] || ""}</div>
        <h3>${s.title}</h3>
        <p>${s.description}</p>
        <a class="btn btn--ghost-red" href="${s.href}">${s.cta}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </article>`
      )
      .join("");
  }

  /* ----------------------------- memberships ------------------------------------- */
  const membershipGrid = $("[data-membership-grid]");
  if (membershipGrid && cfg) {
    const check =
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>';
    membershipGrid.innerHTML = cfg.memberships
      .map(
        (m) => `
      <article class="membership-card reveal${m.featured ? " membership-card--featured" : ""}">
        <div>
          <h3>${m.name}</h3>
          <p class="membership-card__desc">${m.description}</p>
        </div>
        <div class="membership-card__price">
          ${m.price ? `${m.price}<small>/ ${m.period}</small>` : `<span style="font-size:1.15rem;">Enquire for pricing</span>`}
        </div>
        <ul class="membership-card__benefits">
          ${m.benefits.map((b) => `<li>${check}<span>${b}</span></li>`).join("")}
        </ul>
        <a href="contact.html" class="btn ${m.featured ? "btn--primary" : "btn--outline"} btn--block">${m.cta}</a>
      </article>`
      )
      .join("");
  }

  /* -------------------------------- gallery + lightbox ------------------------------ */
  const galleryGrid = $("[data-gallery-grid]");
  if (galleryGrid && cfg) {
    galleryGrid.innerHTML = cfg.gallery
      .map(
        (g, i) => `
      <button type="button" class="gallery-item${i === 0 ? " gallery-item--wide" : ""}" data-index="${i}" aria-label="View larger image: ${g.alt}">
        <img src="${g.src}" alt="${g.alt}" loading="lazy">
        <span class="gallery-item__overlay"><span>${g.category}</span></span>
      </button>`
      )
      .join("");

    const lightbox = $(".lightbox");
    const lbImg = $(".lightbox__frame img", lightbox);
    const lbCategory = $("[data-lb-category]", lightbox);
    const lbCount = $("[data-lb-count]", lightbox);
    let activeIndex = 0;

    const showImage = (i) => {
      const total = cfg.gallery.length;
      activeIndex = (i + total) % total;
      const item = cfg.gallery[activeIndex];
      lbImg.src = item.src;
      lbImg.alt = item.alt;
      if (lbCategory) lbCategory.textContent = item.category;
      if (lbCount) lbCount.textContent = `${activeIndex + 1} / ${total}`;
    };

    $$(".gallery-item", galleryGrid).forEach((btn) => {
      btn.addEventListener("click", () => {
        showImage(Number(btn.dataset.index));
        lightbox.classList.add("is-open");
        document.body.style.overflow = "hidden";
        $(".lightbox__close").focus();
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
    };
    $(".lightbox__close", lightbox)?.addEventListener("click", closeLightbox);
    $(".lightbox__prev", lightbox)?.addEventListener("click", () => showImage(activeIndex - 1));
    $(".lightbox__next", lightbox)?.addEventListener("click", () => showImage(activeIndex + 1));
    lightbox?.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (!lightbox?.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showImage(activeIndex + 1);
      if (e.key === "ArrowLeft") showImage(activeIndex - 1);
    });
  }

  /* -------------------------------- testimonials carousel ---------------------------- */
  const testiRoot = $("[data-testimonials]");
  if (testiRoot && cfg) {
    const track = $("[data-testi-track]", testiRoot);
    const dotsWrap = $("[data-testi-dots]", testiRoot);
    track.innerHTML = cfg.testimonials
      .map(
        (t, i) => `
      <div class="testi-slide${i === 0 ? " is-active" : ""}" data-slide="${i}">
        <div class="testi-quote-mark">&ldquo;</div>
        <p class="testi-text">${t.quote}</p>
        ${t.isPlaceholder ? '<span class="testi-badge">Placeholder — awaiting real review</span>' : ""}
        <p class="testi-meta">${t.name} &middot; ${t.detail}</p>
      </div>`
      )
      .join("");
    dotsWrap.innerHTML = cfg.testimonials
      .map((_, i) => `<button type="button" aria-label="Show testimonial ${i + 1}"${i === 0 ? ' class="is-active"' : ""}></button>`)
      .join("");

    let current = 0;
    const slides = $$(".testi-slide", track);
    const dots = $$("button", dotsWrap);
    const go = (i) => {
      current = (i + slides.length) % slides.length;
      slides.forEach((s, idx) => s.classList.toggle("is-active", idx === current));
      dots.forEach((d, idx) => d.classList.toggle("is-active", idx === current));
    };
    $("[data-testi-prev]", testiRoot)?.addEventListener("click", () => go(current - 1));
    $("[data-testi-next]", testiRoot)?.addEventListener("click", () => go(current + 1));
    dots.forEach((d, idx) => d.addEventListener("click", () => go(idx)));

    let autoplay = setInterval(() => go(current + 1), 6500);
    testiRoot.addEventListener("mouseenter", () => clearInterval(autoplay));
    testiRoot.addEventListener("mouseleave", () => (autoplay = setInterval(() => go(current + 1), 6500)));
  }

  /* ------------------------------------ forms ------------------------------------- */
  const validators = {
    required: (v) => v.trim().length > 0,
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    phone: (v) => v.trim().length === 0 || /^[0-9+()\-\s]{7,20}$/.test(v.trim()),
  };

  function setFieldError(field, message) {
    const errorEl = field.parentElement.querySelector(".field__error");
    const input = field;
    input.classList.add("is-invalid");
    input.setAttribute("aria-invalid", "true");
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.add("is-visible");
    }
  }
  function clearFieldError(field) {
    field.classList.remove("is-invalid");
    field.removeAttribute("aria-invalid");
    const errorEl = field.parentElement.querySelector(".field__error");
    if (errorEl) errorEl.classList.remove("is-visible");
  }

  function validateForm(form) {
    let valid = true;
    $$("[data-validate]", form).forEach((field) => {
      const rules = field.dataset.validate.split(" ");
      clearFieldError(field);
      for (const rule of rules) {
        if (rule === "required" && !validators.required(field.value)) {
          setFieldError(field, "This field is required.");
          valid = false;
          break;
        }
        if (rule === "email" && field.value.trim() && !validators.email(field.value)) {
          setFieldError(field, "Enter a valid email address.");
          valid = false;
          break;
        }
        if (rule === "phone" && !validators.phone(field.value)) {
          setFieldError(field, "Enter a valid phone number.");
          valid = false;
          break;
        }
      }
    });
    return valid;
  }

  function wireForm(formSelector, endpointKey) {
    const form = $(formSelector);
    if (!form || !cfg) return;
    const statusEl = $(".form-status", form.closest("[data-form-wrapper]") || form.parentElement) || form.parentElement.querySelector(".form-status");
    const submitBtn = $('[type="submit"]', form);

    $$("[data-validate]", form).forEach((field) => {
      field.addEventListener("blur", () => {
        if (field.value.trim() !== "" || field.dataset.validate.includes("required")) {
          const wasInvalid = field.classList.contains("is-invalid");
          if (wasInvalid) validateForm(form);
        }
      });
      field.addEventListener("input", () => {
        if (field.classList.contains("is-invalid")) clearFieldError(field);
      });
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (statusEl) statusEl.classList.remove("is-visible", "form-status--success", "form-status--error");

      if (!validateForm(form)) {
        const firstInvalid = $(".is-invalid", form);
        firstInvalid?.focus();
        return;
      }

      const endpoint = cfg.forms[endpointKey];
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());

      form.classList.add("is-loading");
      if (submitBtn) submitBtn.disabled = true;

      try {
        // NOTE: replace this with a real fetch() call to your backend,
        // form service, or serverless function once one is connected.
        // Example:
        // const res = await fetch(endpoint, {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(payload),
        // });
        // if (!res.ok) throw new Error("Request failed");

        await new Promise((resolve) => setTimeout(resolve, 1100)); // simulated latency

        form.reset();
        if (statusEl) {
          statusEl.textContent =
            "Thanks — your request has been received. A member of the team will be in touch shortly to confirm.";
          statusEl.classList.add("is-visible", "form-status--success");
        }
      } catch (err) {
        if (statusEl) {
          statusEl.textContent = "Something went wrong sending your request. Please try again, or call us directly.";
          statusEl.classList.add("is-visible", "form-status--error");
        }
      } finally {
        form.classList.remove("is-loading");
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  wireForm("[data-form='tour']", "tourEndpoint");
  wireForm("[data-form='contact']", "contactEndpoint");
})();
