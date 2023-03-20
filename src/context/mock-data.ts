export type BlogData = {
  title: string;
  mins: string;
  desc: string;
  url: string;
  recipe: string;
  id: number;
};

export type MockData = {
  mainBannerId: number;
  blogData: BlogData[];
  uniqueId: number;
  setMainBanner: (props: number) => void;
  setBlogData: (id: number, data: BlogData) => void;
  deleteBlogData: (id: number) => void;
  createBlogData: (data: BlogData) => void;
  isBlogExist: (id: number) => boolean;
};

export const MockData: MockData = {
  mainBannerId: 1,
  uniqueId: 13,
  setMainBanner: () => {},
  setBlogData: () => {},
  deleteBlogData: () => {},
  isBlogExist: () => {
    return false;
  },
  createBlogData: () => {},
  blogData: [
    {
      title: "Bauernbrot (German Farmer’s Bread)",
      mins: "5:00",
      id: 1,
      recipe: "Bauernbrot",
      desc: `Bauernbrot has a long history in Germany, dating back to the Middle Ages. At that time, bread was a staple food for most Germans, and farmers were responsible for baking their own bread using the grains they grew themselves. The bread they made was hearty and filling, meant to sustain them through long days of hard work.
            Over time, the recipe for Bauernbrot evolved, but the basic ingredients remained the same. Rye flour, which was abundant in Germany, became the main ingredient, along with wheat flour, water, salt, and sometimes sourdough. The bread was typically baked in wood-fired ovens, which gave it a distinctive flavor and crust.
            The ingredients of Bauernbrot are simple and wholesome, reflecting its origins as a bread baked by farmers. The main ingredient is rye flour, which gives the bread its dense and chewy texture. Wheat flour is also used, but in smaller amounts. Water is added to the flour to make a dough, and salt is added for flavor. Sourdough is sometimes used to give the bread a tangy flavor and to help it rise.
            Bauernbrot has several distinctive characteristics that make it a favorite among bread lovers. First and foremost is its dense and chewy texture. This is due to the high proportion of rye flour, which contains less gluten than wheat flour. The bread is also slightly sour and has a complex flavor, thanks to the use of sourdough and the long fermentation process.
            Another characteristic of Bauernbrot is its crust. The bread is typically baked at high temperatures, which creates a thick and crispy crust. The crust is often dusted with flour or scored with a pattern, which adds to its rustic appearance.`,
      url: "https://th.bing.com/th/id/OIP.sMkII4-lmtueW9yzv84sRwHaHa?pid=ImgDet&rs=1",
    },
    {
      title: "Sweet Potato with Avocado Toast and Soft-boiled Eggs",
      mins: "5:00",
      id: 2,
      recipe: "Sweet Potato",
      desc: `Sweet Potato with Avocado Toast and Soft-boiled Eggs is a Perfectly Balanced Meal.Are you looking for a healthy and delicious breakfast option that is both filling and nutritious? Look no further than Sweet Potato with Avocado Toast and Soft-boiled Eggs. This dish is a perfect combination of complex carbohydrates, healthy fats, and high-quality protein that will keep you feeling satisfied and energized throughout the day.
            First, let's talk about sweet potatoes. They are an excellent source of fiber, vitamins, and minerals. Sweet potatoes are also low on the glycemic index, meaning they won't cause a spike in blood sugar levels. They are easy to prepare and can be roasted, mashed, or baked. For this dish, we will be roasting them in the oven.
            To roast sweet potatoes, start by preheating the oven to 400°F (200°C). Peel and chop the sweet potatoes into bite-sized pieces, and toss them with olive oil, salt, and pepper. Spread them out on a baking sheet in a single layer and roast for about 25-30 minutes, or until they are tender and slightly caramelized.
            While the sweet potatoes are roasting, prepare the soft-boiled eggs. Bring a pot of water to a boil and then gently lower the eggs into the water using a spoon. Cook for about 6-7 minutes for a soft yolk, and then transfer them to a bowl of ice water to stop the cooking process. Once cooled, carefully peel the eggs and set them aside.
            Now it's time to make the avocado toast. Mash an avocado in a bowl and add a pinch of salt and pepper. Toast a slice of whole-grain bread and spread the mashed avocado on top. For an extra kick of flavor, add some red pepper flakes or a squeeze of fresh lemon juice.
            Finally, it's time to assemble the dish. Divide the roasted sweet potatoes onto two plates and top with the avocado toast. Cut the soft-boiled eggs in half and place them on top of the toast. Sprinkle with some chopped fresh herbs, such as parsley or cilantro, and enjoy!
            In conclusion, Sweet Potato with Avocado Toast and Soft-boiled Eggs is a delicious and healthy breakfast option that is easy to prepare and packed with nutrients. It's a perfect example of a well-balanced meal that includes complex carbohydrates, healthy fats, and high-quality protein. Give it a try and start your day off on the right foot!`,
      url: "https://th.bing.com/th/id/OIP.ZVDJnafBNtk6Uk-T-3IsAQHaLG?pid=ImgDet&rs=1",
    },
    {
      title: "Avocado toast with Sweet Potato ",
      mins: "5:00",
      id: 3,
      recipe: "Avocado toast",
      desc: `Avocado toast has become a staple in many brunch menus and Instagram feeds. It's delicious, easy to make, and incredibly versatile. However, if you're looking to switch things up, try adding sweet potato to your avocado toast. Here's why it's worth trying:
            Nutritious: Avocado is a superfood that is packed with healthy fats, fiber, and various vitamins and minerals. Sweet potatoes are also a nutritional powerhouse. They're a great source of fiber, vitamins A and C, and potassium.
            Flavorful: Avocado and sweet potato complement each other perfectly. The creaminess of the avocado balances out the sweetness of the potato. Plus, sweet potato adds a depth of flavor that plain avocado toast can sometimes lack.
            Easy to make: All you need to do is cook a sweet potato, mash it up, and spread it on your toast with mashed avocado. It's a simple way to make your avocado toast more interesting without adding too much extra work.
            Versatile: There are so many ways to customize your avocado toast with sweet potato. You can add toppings like crumbled feta cheese, chopped nuts, or a drizzle of balsamic glaze. You can also experiment with different spices and seasonings to create a flavor profile that suits your taste buds.
            To make avocado toast with sweet potato, start by roasting a sweet potato until it's tender. Then, mash it up in a bowl with a fork or potato masher. Spread the sweet potato mash on your toast and top it with mashed avocado. Sprinkle with salt and pepper, and any other toppings you like.`,
      url: "https://img.allw.mn/thumbs/lj/w9/tc1jj2dm5b4c91e5b393b977856388_1080x1080.jpg",
    },
    {
      title: "Veggie Burger recipe",
      mins: "5:00",
      id: 4,
      recipe: "Veggie Burger",
      desc: `Veggie burgers are an excellent choice for those who are looking for a healthier and more sustainable alternative to traditional meat burgers. They are also incredibly versatile and can be made using a variety of ingredients, making them perfect for vegans, vegetarians, and flexitarians alike. In this article, we will explore a delicious and easy-to-make veggie burger recipe that is sure to satisfy your taste buds.
            Preheat your oven to 375 degrees Fahrenheit.In a large bowl, mash the black beans with a fork or a potato masher until they are mostly smooth. Add in the cooked quinoa, chopped onion, minced garlic, smoked paprika, ground cumin, breadcrumbs, salt, and pepper. Mix well until everything is fully combined.
            Shape the mixture into four patties of equal size.Heat the olive oil in a skillet over medium-high heat. Add the patties to the skillet and cook for 3-4 minutes on each side, until they are lightly browned.
            Transfer the patties to a baking sheet and bake in the oven for 10-12 minutes, or until they are heated through and crispy on the outside.
            Serve your veggie burgers on a bun with your favorite toppings, such as lettuce, tomato, avocado, or vegan cheese.
            This veggie burger recipe is not only delicious but also packed with nutrients. Black beans are a great source of protein, fiber, and vitamins, while quinoa provides essential amino acids and antioxidants. The smoked paprika and cumin give the burgers a smoky and savory flavor, while the breadcrumbs help bind the ingredients together.
            In conclusion, this veggie burger recipe is a fantastic option for those who want a healthy, delicious, and easy-to-make meal. It's also an excellent way to incorporate more plant-based foods into your diet and reduce your carbon footprint. Give it a try and enjoy a flavorful and satisfying veggie burger!`,
      url: "https://i.pinimg.com/474x/61/33/76/613376b89518cef608f7b8cb97100671--black-bean-burgers-winter-recipes.jpg",
    },
    {
      title: "Green Papaya Slad",
      mins: "5:00",
      id: 5,
      recipe: "Baked Sweet",
      desc: `Cucumber salad is a refreshing and light dish made with thinly sliced cucumbers and a tangy dressing. It's a popular side dish in many countries and cultures, and it's often served alongside grilled meats or as a complement to spicy or rich dishes.
      To make cucumber salad, start by selecting fresh and crisp cucumbers. Peel and slice them thinly using a mandoline or a sharp knife, and place them in a bowl. You can also use a spiralizer to create fun cucumber noodles.
      Next, prepare the dressing. A simple dressing can be made by mixing rice vinegar, sugar, salt, and pepper together in a small bowl. Some variations include adding soy sauce, sesame oil, or chopped herbs like cilantro or dill. The dressing should be sweet, sour, and slightly salty.
      Pour the dressing over the sliced cucumbers and toss gently to combine. Let the salad marinate in the fridge for at least 30 minutes to allow the flavors to meld together. Before serving, give the salad a final toss to distribute the dressing evenly.
      Cucumber salad is a healthy and low-calorie dish that's rich in vitamins and antioxidants. It's a great way to use up extra cucumbers from your garden or farmers market. Plus, it's easy to customize by adding other vegetables like sliced onions, carrots, or radishes. Cucumber salad is a perfect dish for a summer BBQ or picnic, or as a refreshing side dish any time of the year`,
      url: "https://bing.com/th?id=OSK.83a51cd4ef55b4ddf0fba4cfb7192b34",
    },
    {
      title: "Strawberry-Banana Lactose Free Parfaits",
      mins: "5:00",
      id: 6,
      recipe: "Baked Sweet",
      desc: `If you're looking for a delicious and healthy treat, strawberry-banana lactose-free parfaits are an excellent choice. Not only are they rich in flavor, but they're also packed with nutrients that your body needs to function at its best.
      One of the best things about strawberry-banana lactose-free parfaits is that they're incredibly versatile. You can switch up the fruit and granola to create different flavor combinations. For example, you could use blueberries and raspberries instead of strawberries and bananas, or swap out the granola for chopped nuts or seeds.
      In addition to being delicious, lactose-free parfaits are also a great way to get some important nutrients into your diet. Yogurt is an excellent source of protein and calcium, both of which are important for maintaining strong bones and muscles. Meanwhile, the fruit and granola provide a healthy dose of fiber, vitamins, and minerals.
      If you're looking for a healthier dessert option that still satisfies your sweet tooth, strawberry-banana lactose-free parfaits are a great choice. They're easy to make, delicious, and packed with nutrients that your body needs. Give them a try today and see for yourself just how tasty and nutritious they can be!
      While most people are familiar with the traditional heart-shaped strawberry, there are actually many different shapes that this fruit can take on.
      One popular variation of the strawberry shape is the "mix shape." This refers to a collection of strawberries that are not uniform in size or shape, but instead have a variety of different shapes and sizes. Some may be large and plump, while others are smaller and more oblong. Some may be perfectly symmetrical, while others have irregular bumps and curves.
      The mix shape is a common occurrence in commercially grown strawberries, as each berry develops its own unique shape depending on factors like its position on the plant, exposure to sunlight, and overall growing conditions. While some people may prefer the uniformity of traditional heart-shaped strawberries, others appreciate the mix shape for its visual interest and variety.
      In addition to their unique shapes, strawberries also have a number of health benefits. They are low in calories but high in vitamin C, fiber, and antioxidants, making them a nutritious addition to any diet. They can be enjoyed fresh, sliced on top of cereal or yogurt, blended into smoothies, or baked into desserts like strawberry shortcake or pie.
      No matter what shape they come in, strawberries are a delicious and healthy fruit that can be enjoyed in a variety of ways. So whether you prefer the classic heart-shaped strawberry or the eclectic mix shape, be sure to add this tasty fruit to your next meal o
      `,
      url: "https://i5.walmartimages.com/asr/2fce99ed-e2c4-44c1-a40b-f11c61dd0a33_1.8703e4fc97f6c918fb13fe8ff2e44a82.jpeg",
    },
    {
      title: "Burger Restaurants in Bhavnagar",
      mins: "5:00",
      id: 7,
      recipe: "Baked Sweet",
      desc: `A hamburger, sometimes simply referred to as a burger, is a type of sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty is typically seasoned with various herbs and spices and may be cooked to different degrees of doneness, from rare to well-done, depending on the preference of the consumer.
      Hamburgers have become a popular food item worldwide, with many fast food chains and restaurants offering their own versions of the classic sandwich. They can be served with a variety of toppings and condiments, such as lettuce, tomato, onion, pickles, cheese, ketchup, mustard, and mayonnaise.
      The origin of the hamburger is somewhat disputed, with several stories and claims to its invention. One of the most widely accepted theories is that the modern hamburger was invented in the United States in the late 19th or early 20th century. It is said to have originated in the city of Hamburg, Germany, where beef was commonly minced and formed into patties.
      In the US, the hamburger gained popularity in the early 20th century as a convenient and inexpensive food item. It became a staple of fast food chains in the 1950s and 1960s and has since become a cultural icon of American cuisine.
      While the classic hamburger is made with beef, there are also many variations made with different types of meat, such as turkey, chicken, and even plant-based ingredients. Veggie burgers have become increasingly popular in recent years as more people are adopting plant-based diets or seeking alternatives to meat-based dishes.
      Overall, the hamburger remains a beloved food item that has stood the test of time and continues to be enjoyed by people all over the world.
      In addition to being delicious, this dish is also very nutritious. Sweet potatoes are high in fiber, vitamin A, and potassium, which are all essential nutrients for a healthy body. Cheese is a good source of protein, calcium, and vitamin D, which are all important for building and maintaining strong bones.`,
      url: "https://www.howsweeteats.com/wp-content/uploads/2018/06/veg-burgers-I-howsweeteats.com-15-350x350.jpg",
    },
    {
      title: "PastaAL Limone With Shrimp",
      mins: "5:00",
      id: 8,
      recipe: "Baked Sweet",
      desc: `Pasta is a beloved staple food in many parts of the world, particularly in Italy where it is a cultural icon. It is a versatile and comforting food that can be prepared in countless ways, making it a popular choice for both home-cooking and restaurant menus.
      Pasta is typically made from a dough consisting of wheat flour, water, and sometimes eggs. The dough is rolled out into thin sheets and then cut into various shapes, such as spaghetti, linguine, fettuccine, penne, and macaroni. Different shapes of pasta are often suited to different sauces or dishes, such as long and thin noodles being paired with light and delicate sauces, while chunkier shapes being paired with thicker and heartier sauces.
      Pasta dishes are typically served hot and can be prepared in a variety of ways. One of the most popular ways to serve pasta is with tomato sauce, which can be made with fresh or canned tomatoes, garlic, onions, and a variety of herbs and spices. Other popular pasta sauces include pesto, carbonara, Alfredo, and Bolognese.
      Pasta is also often served as a side dish, such as with roasted vegetables or as part of a salad. It can also be used as an ingredient in soups and stews. In many cultures, pasta dishes are a cornerstone of family meals and social gatherings, providing a comforting and satisfying meal that can be shared with loved ones.
      There are many different types of pasta available today, ranging from traditional wheat-based pasta to gluten-free options made from rice, corn, or other grains. Some varieties of pasta are also enriched with added vitamins and minerals, making them a nutritious option for those seeking a healthy meal.
      Overall, pasta is a beloved and versatile food that has been enjoyed for centuries. Whether you prefer your pasta with a simple tomato sauce or a complex blend of flavors and ingredients, there is a pasta dish out there for everyone.`,
      url: "https://i.pinimg.com/736x/6c/c1/02/6cc1020d1ec013bc44fa71137d9c81bf.jpg",
    },
    {
      title: "Baked sweet potatoes with cheese inside",
      mins: "5:00",
      id: 9,
      recipe: "Baked Sweet",
      desc: `Baked sweet potatoes are a popular and healthy side dish that can be enjoyed year-round. This versatile vegetable is high in fiber, vitamins, and minerals, making it an excellent addition to any diet. But have you ever considered adding cheese to your sweet potatoes? The combination of sweet and savory flavors is sure to tantalize your taste buds and leave you wanting more.
            To prepare this delicious dish, you will need a few ingredients. You will need sweet potatoes, cheese, butter, salt, and pepper. Begin by preheating your oven to 400°F (200°C). While your oven is heating up, wash your sweet potatoes and pierce them several times with a fork. Place them on a baking sheet lined with parchment paper and bake them for 45-60 minutes or until they are tender.
            Once your sweet potatoes are cooked, take them out of the oven and allow them to cool for a few minutes. Cut a slit in the top of each sweet potato, and carefully scoop out the flesh, leaving about 1/4 inch of the potato inside the skin. Mash the sweet potato flesh with butter, salt, and pepper to taste. Then, add your cheese of choice and mix well.
            Spoon the mashed sweet potato and cheese mixture back into the sweet potato skins. You can sprinkle some extra cheese on top if you like. Place the stuffed sweet potatoes back onto the baking sheet and bake for an additional 10-15 minutes or until the cheese is melted and bubbly.
            There are many different types of cheese that you can use for this recipe. Some of the most popular options include cheddar, mozzarella, and feta. Cheddar cheese is a classic choice that pairs well with the sweetness of the potato. Mozzarella cheese is another great option that will add a gooey, melty texture to the dish. Feta cheese is a tangy and salty choice that will provide a unique flavor profile.
            Baked sweet potatoes with cheese inside are a great side dish to serve with a variety of meals. They are perfect for Thanksgiving, Christmas, or any other holiday gathering. They can also be served as a main dish for a quick and easy weeknight meal. To round out the meal, serve the sweet potatoes with a side salad or some roasted vegetables.
            In addition to being delicious, this dish is also very nutritious. Sweet potatoes are high in fiber, vitamin A, and potassium, which are all essential nutrients for a healthy body. Cheese is a good source of protein, calcium, and vitamin D, which are all important for building and maintaining strong bones.`,
      url: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Basic-Homemade-Bread_EXPS_TOHcom20_32480_C01_26_2b-20.jpg",
    },
    {
      title: "Baked sweet potatoes with cheese inside",
      mins: "5:00",
      id: 10,
      recipe: "Baked Sweet",
      desc: `Baked sweet potatoes are a popular and healthy side dish that can be enjoyed year-round. This versatile vegetable is high in fiber, vitamins, and minerals, making it an excellent addition to any diet. But have you ever considered adding cheese to your sweet potatoes? The combination of sweet and savory flavors is sure to tantalize your taste buds and leave you wanting more.
            To prepare this delicious dish, you will need a few ingredients. You will need sweet potatoes, cheese, butter, salt, and pepper. Begin by preheating your oven to 400°F (200°C). While your oven is heating up, wash your sweet potatoes and pierce them several times with a fork. Place them on a baking sheet lined with parchment paper and bake them for 45-60 minutes or until they are tender.
            Once your sweet potatoes are cooked, take them out of the oven and allow them to cool for a few minutes. Cut a slit in the top of each sweet potato, and carefully scoop out the flesh, leaving about 1/4 inch of the potato inside the skin. Mash the sweet potato flesh with butter, salt, and pepper to taste. Then, add your cheese of choice and mix well.
            Spoon the mashed sweet potato and cheese mixture back into the sweet potato skins. You can sprinkle some extra cheese on top if you like. Place the stuffed sweet potatoes back onto the baking sheet and bake for an additional 10-15 minutes or until the cheese is melted and bubbly.
            There are many different types of cheese that you can use for this recipe. Some of the most popular options include cheddar, mozzarella, and feta. Cheddar cheese is a classic choice that pairs well with the sweetness of the potato. Mozzarella cheese is another great option that will add a gooey, melty texture to the dish. Feta cheese is a tangy and salty choice that will provide a unique flavor profile.
            Baked sweet potatoes with cheese inside are a great side dish to serve with a variety of meals. They are perfect for Thanksgiving, Christmas, or any other holiday gathering. They can also be served as a main dish for a quick and easy weeknight meal. To round out the meal, serve the sweet potatoes with a side salad or some roasted vegetables.
            In addition to being delicious, this dish is also very nutritious. Sweet potatoes are high in fiber, vitamin A, and potassium, which are all essential nutrients for a healthy body. Cheese is a good source of protein, calcium, and vitamin D, which are all important for building and maintaining strong bones.`,
      url: "https://th.bing.com/th/id/OIP.qdHqnzuqEI4cZ-VPs260XgHaHa?pid=ImgDet&rs=1",
    },
    {
      title: "Baked sweet potatoes with cheese inside",
      mins: "5:00",
      id: 11,
      recipe: "Baked Sweet",
      desc: `Baked sweet potatoes are a popular and healthy side dish that can be enjoyed year-round. This versatile vegetable is high in fiber, vitamins, and minerals, making it an excellent addition to any diet. But have you ever considered adding cheese to your sweet potatoes? The combination of sweet and savory flavors is sure to tantalize your taste buds and leave you wanting more.
            To prepare this delicious dish, you will need a few ingredients. You will need sweet potatoes, cheese, butter, salt, and pepper. Begin by preheating your oven to 400°F (200°C). While your oven is heating up, wash your sweet potatoes and pierce them several times with a fork. Place them on a baking sheet lined with parchment paper and bake them for 45-60 minutes or until they are tender.
            Once your sweet potatoes are cooked, take them out of the oven and allow them to cool for a few minutes. Cut a slit in the top of each sweet potato, and carefully scoop out the flesh, leaving about 1/4 inch of the potato inside the skin. Mash the sweet potato flesh with butter, salt, and pepper to taste. Then, add your cheese of choice and mix well.
            Spoon the mashed sweet potato and cheese mixture back into the sweet potato skins. You can sprinkle some extra cheese on top if you like. Place the stuffed sweet potatoes back onto the baking sheet and bake for an additional 10-15 minutes or until the cheese is melted and bubbly.
            There are many different types of cheese that you can use for this recipe. Some of the most popular options include cheddar, mozzarella, and feta. Cheddar cheese is a classic choice that pairs well with the sweetness of the potato. Mozzarella cheese is another great option that will add a gooey, melty texture to the dish. Feta cheese is a tangy and salty choice that will provide a unique flavor profile.
            Baked sweet potatoes with cheese inside are a great side dish to serve with a variety of meals. They are perfect for Thanksgiving, Christmas, or any other holiday gathering. They can also be served as a main dish for a quick and easy weeknight meal. To round out the meal, serve the sweet potatoes with a side salad or some roasted vegetables.
            In addition to being delicious, this dish is also very nutritious. Sweet potatoes are high in fiber, vitamin A, and potassium, which are all essential nutrients for a healthy body. Cheese is a good source of protein, calcium, and vitamin D, which are all important for building and maintaining strong bones.`,
      url: "https://th.bing.com/th/id/OIP.PvEb8JGKc1RpcWIhYT9UawHaHa?pid=ImgDet&rs=1",
    },
    {
      title: "Baked sweet potatoes with cheese inside",
      mins: "5:00",
      id: 12,
      recipe: "Baked Sweet",
      desc: `Baked sweet potatoes are a popular and healthy side dish that can be enjoyed year-round. This versatile vegetable is high in fiber, vitamins, and minerals, making it an excellent addition to any diet. But have you ever considered adding cheese to your sweet potatoes? The combination of sweet and savory flavors is sure to tantalize your taste buds and leave you wanting more.
            To prepare this delicious dish, you will need a few ingredients. You will need sweet potatoes, cheese, butter, salt, and pepper. Begin by preheating your oven to 400°F (200°C). While your oven is heating up, wash your sweet potatoes and pierce them several times with a fork. Place them on a baking sheet lined with parchment paper and bake them for 45-60 minutes or until they are tender.
            Once your sweet potatoes are cooked, take them out of the oven and allow them to cool for a few minutes. Cut a slit in the top of each sweet potato, and carefully scoop out the flesh, leaving about 1/4 inch of the potato inside the skin. Mash the sweet potato flesh with butter, salt, and pepper to taste. Then, add your cheese of choice and mix well.
            Spoon the mashed sweet potato and cheese mixture back into the sweet potato skins. You can sprinkle some extra cheese on top if you like. Place the stuffed sweet potatoes back onto the baking sheet and bake for an additional 10-15 minutes or until the cheese is melted and bubbly.
            There are many different types of cheese that you can use for this recipe. Some of the most popular options include cheddar, mozzarella, and feta. Cheddar cheese is a classic choice that pairs well with the sweetness of the potato. Mozzarella cheese is another great option that will add a gooey, melty texture to the dish. Feta cheese is a tangy and salty choice that will provide a unique flavor profile.
            Baked sweet potatoes with cheese inside are a great side dish to serve with a variety of meals. They are perfect for Thanksgiving, Christmas, or any other holiday gathering. They can also be served as a main dish for a quick and easy weeknight meal. To round out the meal, serve the sweet potatoes with a side salad or some roasted vegetables.
            In addition to being delicious, this dish is also very nutritious. Sweet potatoes are high in fiber, vitamin A, and potassium, which are all essential nutrients for a healthy body. Cheese is a good source of protein, calcium, and vitamin D, which are all important for building and maintaining strong bones.`,
      url: "https://1.bp.blogspot.com/-8JEbSC3yGFk/WH9K8d8k1YI/AAAAAAAABuY/W5GefHmAbxAJG5ebtx0yCOdh919NT8kwQCLcB/s400/IMG_7147.jpg",
    },
  ],
};
