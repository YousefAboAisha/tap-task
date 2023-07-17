function getUniqueTags(mediaData) {
  // Maps into all the tags inside each object and add them into one array
  const allTags = mediaData.reduce((tags, media) => {
    return tags.concat(media.tags);
  }, []);

  // Set Data structure removes duplications
  const uniqueTags = [...new Set(allTags)];

  return uniqueTags;
}

const data = [
  {
    id: 1,
    title: "Stranger Scrims",
    duration: 40,
    tags: ["supernatural", "horror", "drama"],
  },
  {
    id: 2,
    title: "The Scrim of the Dragon",
    duration: 60,
    tags: ["drama", "fantasy"],
  },
  {
    id: 3,
    title: "Scrim Hunters",
    duration: 22,
    tags: ["reality", "home improvement"],
  },
  {
    id: 4,
    title: "This Old Scrim",
    duration: 30,
    tags: ["reality", "home improvement"],
  },
  {
    id: 5,
    title: "What We Do in the Scrim",
    duration: 55,
    tags: ["drama", "comedy", "supernatural"],
  },
  {
    id: 6,
    title: "The Scrimdalorian",
    duration: 58,
    tags: ["fantasy", "sci-fi", "adventure"],
  },
];

const uniqueTags = getUniqueTags(data);
console.log(uniqueTags);
