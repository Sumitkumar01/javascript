// object json api

const course = {
  name: "JavaScript",
  price: 190,
  isPublished: true,
  courseTopics: ["loops", "arrays", "objects"],
  courseAuthor: {
    name: "MD. Rakibul Hasan",
  },
};

// destructuring
// const { name, price } = course;
// console.log(name, price);
// const { courseAuthor} = course;
// const { courseAuthor:Author } = course; // another way to destructuring
// console.log(Author);// {name: 'MD. Rakibul Hasan'}

// // destructuring nested object
// const { name:authorName } = course.courseAuthor;
// console.log(authorName); // MD. Rakibul Hasan

// // destructuring nested array
// const { courseTopics: topics } = course;
// console.log(topics); // ['loops', 'arrays', 'objects']

// api json

//  {
// "name": 'JavaScript',
// "price": 190,
// "isPublished": true,
// "author": "MD. Rakibul Hasan",
// }
