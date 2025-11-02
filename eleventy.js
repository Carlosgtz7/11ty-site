// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("thing", function(name, image, description) {
    return `
      <div class="thing">
        <img alt="${name}" src="${image}" loading="lazy"/>
        <div class="thing-text">
          <h2>${name}</h2>
          <p>${description}</p>
        </div>
      </div>
    `;
  });

  eleventyConfig.addShortcode("thing-large", function(name, image, description) {
    return `
      <div class="thing-large">
        <img alt="${name}" src="${image}" loading="lazy"/>
        <div class="thing-text-large">
          <h2>${name}</h2>
          <p>${description}</p>
        </div>
      </div>
    `;
  });
};