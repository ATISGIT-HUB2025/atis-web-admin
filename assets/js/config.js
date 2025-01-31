(function () {
  var savedConfig = sessionStorage.getItem("__ATIS_CONFIG__");

  var html = document.getElementsByTagName("html")[0];

  var defaultConfig = {
    theme: "light", // ['light', 'dark']

    topbar: {
      color: "light", // ['light', 'dark']
    },

    menu: {
      size: "sm-hover-active", // [ 'default', 'sm-hover-active', 'sm-hover-active', 'condensed', 'full']
      color: "dark", // ['light', 'dark']
    },
  };

  this.html = document.getElementsByTagName("html")[0];

  config = Object.assign(JSON.parse(JSON.stringify(defaultConfig)), {});

  config.theme = html.getAttribute("data-bs-theme") || defaultConfig.theme;
  config.topbar.color =
    html.getAttribute("data-topbar-color") || defaultConfig.topbar.color;
  config.menu.color =
    html.getAttribute("data-menu-color") || defaultConfig.menu.color;
  config.menu.size =
    html.getAttribute("data-menu-size") || defaultConfig.menu.size;

  window.defaultConfig = JSON.parse(JSON.stringify(config));

  if (savedConfig !== null) {
    config = JSON.parse(savedConfig);
  }

  window.config = config;

  if (config) {
    html.setAttribute("data-bs-theme", config.theme);
    html.setAttribute("data-topbar-color", config.topbar.color);
    html.setAttribute("data-menu-color", config.menu.color);

    if (window.innerWidth <= 1140) {
      html.setAttribute("data-menu-size", "hidden");
    } else {
      html.setAttribute("data-menu-size", config.menu.size);
    }
  }
})();

// multiple select
document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("choices-multiple-remove-button");
  const choices = new Choices(element, {
    removeItemButton: true, // Allow items to be removable
    duplicateItemsAllowed: false, // Prevent duplicates
    placeholderValue: "Select tags",
    searchPlaceholderValue: "Search tags",
  });
});
