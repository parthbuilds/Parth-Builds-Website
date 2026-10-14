/**
 * Parth Builds - Project Details Dynamic Page Hydration
 * Reads the project ID from query parameter (?id=...) and populates the project details page.
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    if (typeof PROJECTS_DATA === "undefined") {
      console.warn("PROJECTS_DATA is not defined.");
      return;
    }

    // 1. Get Project ID from URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("id");

    // Default to 'chandi-gharana' if none provided or invalid
    const project = (projectId && PROJECTS_DATA[projectId]) ? PROJECTS_DATA[projectId] : PROJECTS_DATA["chandi-gharana"];

    if (!project) return;

    // 2. Update Document Title
    document.title = project.title + " | Parth Builds Portfolio";

    // 3. Hydrate Header / Hero Meta
    const categoryTagEl = document.getElementById("project-category-tag");
    if (categoryTagEl) categoryTagEl.textContent = project.category;

    const dateTagEl = document.getElementById("project-date-tag");
    if (dateTagEl) dateTagEl.textContent = project.date;

    const titleEl = document.getElementById("project-title");
    if (titleEl) titleEl.textContent = project.title;

    const taglineEl = document.getElementById("project-tagline");
    if (taglineEl) taglineEl.textContent = project.tagline || "";

    const clientEl = document.getElementById("project-client");
    if (clientEl) clientEl.textContent = project.client;

    const categoryEl = document.getElementById("project-category");
    if (categoryEl) categoryEl.textContent = project.category;

    const toolsEl = document.getElementById("project-tools");
    if (toolsEl) toolsEl.textContent = project.tools;

    const roleEl = document.getElementById("project-role");
    if (roleEl) roleEl.textContent = project.role;

    const statusEl = document.getElementById("project-status");
    if (statusEl) statusEl.textContent = project.date;

    // 4. Hydrate Banner Image
    const bannerEl = document.getElementById("project-banner");
    if (bannerEl) {
      bannerEl.src = project.bannerImg;
      bannerEl.alt = project.title;
    }

    // 5. Hydrate Action Buttons (Visit Live Site, Instagram, etc.)
    const actionsEl = document.getElementById("project-actions");
    if (actionsEl) {
      actionsEl.innerHTML = "";

      // Live Website / Concept button
      if (project.liveUrl) {
        const liveBtn = document.createElement("a");
        liveBtn.href = project.liveUrl;
        liveBtn.target = "_blank";
        liveBtn.rel = "noopener noreferrer";
        liveBtn.className = "flex items-center flex-wrap btn-primary mr-2 group";
        liveBtn.innerHTML = `
          ${project.liveButtonText || "Visit Site"}
          <span class="inline-block ml-3 group-hover:animate-arrow-move-up">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span>
        `;
        actionsEl.appendChild(liveBtn);
      }

      // Instagram profile button
      if (project.instagramUrl) {
        const instaBtn = document.createElement("a");
        instaBtn.href = project.instagramUrl;
        instaBtn.target = "_blank";
        instaBtn.rel = "noopener noreferrer";
        instaBtn.className = "flex items-center flex-wrap btn-primary-outline group";
        instaBtn.innerHTML = `
          View on Instagram
          <span class="inline-block ml-3 group-hover:animate-arrow-move-up">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span>
        `;
        actionsEl.appendChild(instaBtn);
      }

      // If no external public URL (e.g. Internal CRM or Marketing Campaign)
      if (!project.liveUrl && !project.instagramUrl) {
        const ctaBtn = document.createElement("a");
        ctaBtn.href = "contact.html";
        ctaBtn.className = "flex items-center flex-wrap btn-primary mr-2 group";
        ctaBtn.innerHTML = `
          Let’s Talk
          <span class="inline-block ml-3 group-hover:animate-arrow-move-up">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span>
        `;
        actionsEl.appendChild(ctaBtn);
      }
    }

    // 6. Hydrate Overview Paragraphs
    const overviewEl = document.getElementById("project-overview-content");
    if (overviewEl && project.overview) {
      overviewEl.innerHTML = project.overview
        .map(p => `<p class="paragraph mb-6">${p}</p>`)
        .join("");
    }

    // 7. Hydrate Features List
    const featuresEl = document.getElementById("project-features-list");
    if (featuresEl && project.features) {
      featuresEl.innerHTML = project.features
        .map(feat => `<li class="relative z-[1] before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-4 before:-z-[1] before:w-[6px] before:h-[6px] pl-10 mb-4">${feat}</li>`)
        .join("");
    }

    // 8. Hydrate Technical Execution
    const executionEl = document.getElementById("project-execution-content");
    if (executionEl && project.technicalExecution) {
      executionEl.innerHTML = project.technicalExecution
        .map(p => `<p class="paragraph mb-6">${p}</p>`)
        .join("");
    }

    // 9. Hydrate 8-Item Bento Showcase Gallery
    const bentoContainer = document.getElementById("project-bento-container");
    if (bentoContainer) {
      const BENTO_POOL = [
        { id: "chandi-gharana", title: "Chandi Gharana", category: "Concept Jewellery", img: "assets/images/portfolios/project8.png", bg: "#246D7D" },
        { id: "shubha-kuteer", title: "Shubha Kuteer", category: "CRM & Platform", img: "assets/images/portfolios/project9.png", bg: "#FAF6ED" },
        { id: "vamukh", title: "Vamukh", category: "Shopify Store", img: "assets/images/portfolios/project10.png", bg: "#3F191D" },
        { id: "serene-saath", title: "Serene Saath", category: "HealthTech & Booking", img: "assets/images/portfolios/project11.png", bg: "#F9F9F8" },
        { id: "winter-shoes", title: "Winter Shoes", category: "3D Footwear Concept", img: "assets/images/portfolios/project12.png", bg: "#F5B632" },
        { id: "pashet", title: "Pashet", category: "Luxury Commerce", img: "assets/images/portfolios/project13.png", bg: "#FFFDF7" },
        { id: "namma-ashram", title: "Namma Ashram", category: "Community Platform", img: "assets/images/portfolios/project14.png", bg: "#FEF8EC" },
        { id: "hoot-and-swirl", title: "Hoot & Swirl", category: "Artisanal Desserts", img: "assets/images/portfolios/project15.png", bg: "#F5B301" },
        { id: "mystery-owl", title: "Mystery Owl", category: "Escape Rooms Interactive", img: "assets/images/portfolios/project16.png", bg: "#FCF8EC" },
        { id: "bohemik", title: "Bohemik", category: "Handmade Jewellery", img: "assets/images/portfolios/project2.png", bg: "#D3FB50" },
        { id: "avs-visa-world", title: "AVS Visa World", category: "Global Visa & Travel", img: "assets/images/portfolios/project3.png", bg: "#D3FB50" },
        { id: "harmony", title: "Harmony Global", category: "Immigration Platform", img: "assets/images/portfolios/project4.png", bg: "#A4F551" }
      ];

      let items = [];
      if (project.bentoItems && Array.isArray(project.bentoItems) && project.bentoItems.length === 8) {
        items = project.bentoItems;
      } else {
        const currentItem = BENTO_POOL.find(p => p.id === project.id) || {
          id: project.id,
          title: project.title,
          category: project.category,
          img: project.bannerImg,
          bg: "#246D7D"
        };

        const others = BENTO_POOL.filter(p => p.id !== project.id);
        let hash = 0;
        for (let i = 0; i < project.id.length; i++) {
          hash = (hash + project.id.charCodeAt(i)) % others.length;
        }

        const rotatedOthers = [];
        for (let i = 0; i < 7; i++) {
          rotatedOthers.push(others[(hash + i) % others.length]);
        }

        items = [currentItem, ...rotatedOthers];
      }

      const slots = [
        { colSpan: "col-span-12 sm:col-span-7", height: "h-[260px] sm:h-[300px] lg:h-[320px]", delay: 100 },
        { colSpan: "col-span-12 sm:col-span-5", height: "h-[260px] sm:h-[300px] lg:h-[320px]", delay: 200 },
        { colSpan: "col-span-12 sm:col-span-4", height: "h-[220px] sm:h-[240px] lg:h-[260px]", delay: 300 },
        { colSpan: "col-span-12 sm:col-span-4", height: "h-[220px] sm:h-[240px] lg:h-[260px]", delay: 400 },
        { colSpan: "col-span-12 sm:col-span-4", height: "h-[220px] sm:h-[240px] lg:h-[260px]", delay: 500 },
        { colSpan: "col-span-12 sm:col-span-5", height: "h-[260px] sm:h-[300px] lg:h-[320px]", delay: 600 },
        { colSpan: "col-span-12 sm:col-span-7", height: "h-[260px] sm:h-[300px] lg:h-[320px]", delay: 700 },
        { colSpan: "col-span-12", height: "h-[220px] sm:h-[240px] lg:h-[260px]", delay: 800 }
      ];

      bentoContainer.innerHTML = items.map((item, idx) => {
        const slot = slots[idx] || slots[0];
        const isCurrent = item.id === project.id;
        const link = isCurrent ? (project.liveUrl || "#") : `project-details.html?id=${item.id}`;
        const targetAttr = isCurrent && project.liveUrl ? 'target="_blank" rel="noopener noreferrer"' : '';
        const badgeText = isCurrent ? "Featured Work" : item.category;

        return `
          <div class="${slot.colSpan}" data-aos="flip-down" data-aos-delay="${slot.delay}">
            <div class="overflow-hidden relative rounded-[20px] group shadow-sm hover:shadow-2xl transition-all duration-300 ${slot.height} w-full" style="background-color: ${item.bg || '#ffffff'};">
              <a href="${link}" ${targetAttr} class="block w-full h-full relative">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="${item.img}" alt="${item.title}">
                <div class="absolute inset-0 bg-black-800/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 sm:p-6 z-10">
                  <div class="flex items-center justify-between w-full text-white">
                    <div>
                      <span class="text-[11px] font-Inter uppercase text-primary font-semibold tracking-wider block mb-1">${badgeText}</span>
                      <h4 class="font-bold font-Syne leading-tight text-lg sm:text-xl capitalize">${item.title}</h4>
                    </div>
                    <span class="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white flex-shrink-0 group-hover:animate-arrow-move-up">
                      <svg width="18" height="18" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z" fill="currentColor"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z" fill="currentColor"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        `;
      }).join("");
    }

    // 10. Hydrate Results & Impact
    const resultsEl = document.getElementById("project-results-content");
    if (resultsEl && project.results) {
      resultsEl.innerHTML = project.results
        .map(p => `<p class="paragraph">${p}</p>`)
        .join("");
    }

    // 11. Hydrate Related Projects at bottom
    const relatedContainer = document.getElementById("related-projects-container");
    if (relatedContainer) {
      const allKeys = Object.keys(PROJECTS_DATA);
      const otherKeys = allKeys.filter(k => k !== project.id);
      // Pick 2 other projects
      const related1 = PROJECTS_DATA[otherKeys[0]];
      const related2 = PROJECTS_DATA[otherKeys[1] || otherKeys[0]];

      if (related1 && related2) {
        relatedContainer.innerHTML = `
          <div class="col-span-12 md:col-span-6" data-aos="flip-down">
            <div class="rounded-[20px] overflow-hidden mb-6 h-[260px] sm:h-[320px]">
              <img class="w-full h-full object-cover" src="${related1.bannerImg}" alt="${related1.title}">
            </div>
            <div class="flex flex-wrap flex-col gap-3">
              <div class="flex flex-wrap gap-2">
                <a class="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white" href="project-details.html?id=${related1.id}">${related1.category}</a>
              </div>
              <div class="flex flex-wrap items-center justify-between text-black-800 hover:text-orange group">
                <h4 class="font-bold font-Syne text-center leading-10 text-[20px] lg:text-[24px] xl:text-[32px] capitalize">
                  <a class="transition-all" href="project-details.html?id=${related1.id}">${related1.title}</a>
                </h4>
                <a href="project-details.html?id=${related1.id}" class="group-hover:animate-arrow-move-up">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z" fill="currentColor" fill-opacity="0.9"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z" fill="currentColor" fill-opacity="0.9"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="col-span-12 md:col-span-6" data-aos="flip-down" data-aos-delay="300">
            <div class="rounded-[20px] overflow-hidden mb-6 h-[260px] sm:h-[320px]">
              <img class="w-full h-full object-cover" src="${related2.bannerImg}" alt="${related2.title}">
            </div>
            <div class="flex flex-wrap flex-col gap-3">
              <div class="flex flex-wrap gap-2">
                <a class="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white" href="project-details.html?id=${related2.id}">${related2.category}</a>
              </div>
              <div class="flex flex-wrap items-center justify-between text-black-800 hover:text-orange group">
                <h4 class="font-bold font-Syne text-center leading-10 text-[20px] lg:text-[24px] xl:text-[32px] capitalize">
                  <a class="transition-all" href="project-details.html?id=${related2.id}">${related2.title}</a>
                </h4>
                <a href="project-details.html?id=${related2.id}" class="group-hover:animate-arrow-move-up">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z" fill="currentColor" fill-opacity="0.9"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z" fill="currentColor" fill-opacity="0.9"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        `;
      }
    }
  });
})();
