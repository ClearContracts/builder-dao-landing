// Project configuration with logo, name, and URL
const projectsConfig = [
  {
    name: "Anvil",
    logo: "images/projectLogos/anvil.png",
    url: "https://ada-anvil.io/",
  },
  {
    name: "Begin",
    logo: "images/projectLogos/begin.png",
    url: "https://begin.is/",
  },
  {
    name: "Clarity",
    logo: "images/projectLogos/clarity.png",
    url: "https://www.clarity.community/",
  },
  {
    name: "DexHunter",
    logo: "images/projectLogos/dexhunter.png",
    url: "https://dexhunter.io/",
  },
  {
    name: "Fluid Tokens",
    logo: "images/projectLogos/fluid-tokens.png",
    url: "https://fluidtokens.com/",
  },
  {
    name: "Flux Point Studios",
    logo: "images/projectLogos/flux-point.png",
    url: "https://fluxpointstudios.com/",
  },
  {
    name: "Gero",
    logo: "images/projectLogos/gero.png",
    url: "https://gerowallet.io/",
  },
  {
    name: "Handle",
    logo: "images/projectLogos/handle.png",
    url: "https://handle.me/",
  },
  {
    name: "Iagon",
    logo: "images/projectLogos/iagon.png",
    url: "https://iagon.com/",
  },
  {
    name: "Ikigai",
    logo: "images/projectLogos/ikigai.png",
    url: "https://ikigaitech.org/",
  },
  {
    name: "Indigo",
    logo: "images/projectLogos/indigo.png",
    url: "https://indigo-labs.io/",
  },
  {
    name: "MAYZ",
    logo: "images/projectLogos/mayz.png",
    url: "https://mayz.io/",
  },
  {
    name: "Metera",
    logo: "images/projectLogos/metera.png",
    url: "https://meteraprotocol.io/",
  },
  {
    name: "Minswap",
    logo: "images/projectLogos/minswap.png",
    url: "https://minswap.org/",
  },
  {
    name: "ORCFAX",
    logo: "images/projectLogos/orcfa.png",
    url: "https://orcfax.io/",
  },
  {
    name: "Snek",
    logo: "images/projectLogos/snek.png",
    url: "https://snek.com/",
  },
  {
    name: "SundaeSwap",
    logo: "images/projectLogos/sundae.png",
    url: "https://sundae.fi",
  },
  {
    name: "Tapdano",
    logo: "images/projectLogos/tapdano.png",
    url: "https://tapdano.com/",
  },
  {
    name: "TapTools",
    logo: "images/projectLogos/taptools.png",
    url: "https://www.taptools.io/",
  },
  {
    name: "Tokeo",
    logo: "images/projectLogos/tokeo.png",
    url: "https://tokeopay.io/",
  },
  {
    name: "Vespr",
    logo: "images/projectLogos/vespr.png",
    url: "https://vespr.xyz/",
  },
  {
    name: "Wanchain",
    logo: "images/projectLogos/wanchain.png",
    url: "https://wanchain.org/",
  },
  {
    name: "Xerberus",
    logo: "images/projectLogos/xerberus.png",
    url: "https://xerberus.io/",
  },
  {
    name: "XRay",
    logo: "images/projectLogos/xray.png",
    url: "https://xray.app/wiki/",
  },
];

// Function to create logo items
function createLogoItem(project, tooltipAbove = false) {
  const logoItem = document.createElement("div");
  logoItem.className = "logo-item";

  const img = document.createElement("img");
  img.src = project.logo;
  img.alt = `${project.name} logo`;

  // Create custom tooltip
  const tooltip = document.createElement("div");
  tooltip.className = "custom-tooltip";
  if (tooltipAbove) {
    tooltip.classList.add("tooltip-above");
  }
  tooltip.textContent = project.name;

  logoItem.appendChild(img);
  logoItem.appendChild(tooltip);

  // Add mouseenter/mouseleave events for tooltip
  logoItem.addEventListener("mouseenter", () => {
    tooltip.classList.add("active");
  });

  logoItem.addEventListener("mouseleave", () => {
    tooltip.classList.remove("active");
  });

  // Add click event to open URL in new tab
  logoItem.addEventListener("click", () => {
    window.open(project.url, "_blank");
  });

  return logoItem;
}

// Function to populate a carousel row
function populateCarousel(
  carouselId,
  projects,
  duplicateForScroll = true,
  tooltipAbove = false
) {
  const carousel = document.getElementById(carouselId);

  // Add project logos
  projects.forEach((project) => {
    carousel.appendChild(createLogoItem(project, tooltipAbove));
  });

  // Duplicate items to create seamless scrolling effect
  if (duplicateForScroll) {
    projects.forEach((project) => {
      const duplicatedItem = createLogoItem(project, tooltipAbove);
      carousel.appendChild(duplicatedItem);
    });
  }
}

// Shuffle array function (Fisher-Yates algorithm)
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Initialize carousel when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // First shuffle all projects
  const shuffledProjects = shuffleArray([...projectsConfig]);

  // Split into three equal groups (or as close to equal as possible)
  const totalProjects = shuffledProjects.length;
  const groupSize = Math.ceil(totalProjects / 3);

  // Create three distinct groups
  const group1 = shuffledProjects.slice(0, groupSize);
  const group2 = shuffledProjects.slice(groupSize, groupSize * 2);
  const group3 = shuffledProjects.slice(groupSize * 2);

  // Populate carousels
  populateCarousel("carousel-row-1", group1);
  populateCarousel("carousel-row-2", group2);
  populateCarousel("carousel-row-3", group3, true, true); // tooltipAbove for bottom row
  // Populate the three rows, each with a distinct set of logos
  populateCarousel("carousel-row-1", group1);
  populateCarousel("carousel-row-2", group2);
  populateCarousel("carousel-row-3", group3);
});
