
# FlavourFiesta – React Food Ordering App

![Flavour Fiesta Demo](https://i.imgur.com/your-gif-link.gif)  

---

## Overview :-

Welcome to **Flavour Fiesta**, your ultimate destination for hassle-free food ordering. This application connects you with top local restaurants and chefs, providing an easy and enjoyable way to discover, order, and savor delicious food.

---

### Features :sparkles:

- **User Authentication**: Built-in user authentication to personalize user experience.
- **Dynamic Restaurant List**: Display restaurants fetched dynamically from the Swiggy API.
- **Search & Filter**: Search for restaurants and filter them based on top ratings.
- **Detailed Menu**: Explore restaurant menus with real-time updates.
- **Cart Management**: Add, view, and clear items from the cart seamlessly.
- **Lazy Loading**: Implements lazy loading for improved performance.
- **Error Handling**: Custom error component to manage route errors.
- **Responsive Design**: Mobile-first responsive layout with TailwindCSS.
- **Offline Status Indicator**: Shows the current online/offline status of the user.
- **Grocery Page**: A dedicated page to showcase grocery-related items.
- **Item and Restaurant Management**: Efficiently handles item listing and restaurant card components for modularity.
- **Category-Based Menu**: Displays menu categories with toggled visibility for efficient navigation.
- **Shimmer Loading Effect**: Placeholder animations for better user experience during data fetching.

---

### Built With :hammer_and_wrench:

#### Technologies Used:

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat-square)  
![Redux](https://img.shields.io/badge/-Redux-764ABC?logo=redux&logoColor=white&style=flat-square)  
![React Router](https://img.shields.io/badge/-React_Router-CA4245?logo=react-router&logoColor=white&style=flat-square)  
![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)  
![Parcel](https://img.shields.io/badge/-Parcel-BCC2D4?logo=parcel&logoColor=white&style=flat-square)  
![Font Awesome](https://img.shields.io/badge/-Font_Awesome-528DD7?logo=font-awesome&logoColor=white&style=flat-square)

#### Tools:
- **Unit Testing**: Jest and React Testing Library.
- **State Management**: Redux Toolkit.
- **Version Control**: GitHub.

---

### Application Structure :file_folder:

```plaintext
FlavorFiesta
├── src
│   ├── components
│   │   ├── Header.js
│   │   ├── Body.js
│   │   ├── RestaurantMenu.js
│   │   ├── RestaurantCategory.js
│   │   ├── Shimmer.js
│   │   ├── Cart.js
│   │   ├── Error.js
│   │   ├── Contact.js
│   │   ├── About.js
│   │   ├── Grocery.js
│   │   ├── ItemList.js
│   │   ├── RestaurantCard.js
│   │   ├── User.js
│   │   ├── UserClass.js
│   └── utils
│       ├── appStore.js
│       ├── cartSlice.js
│       ├── constants.js
│       ├── useOnlineStatus.js
│       ├── useRestaurantMenu.js
│       ├── UserContext.js
├── index.css
├── App.js
├── package.json
└── README.md
```

---

### Installation :computer:

1. **Clone the repository:**

```bash
$ git clone https://github.com/UrstrulyBhavana/Food-Ordering-App.git
$ cd Food-Ordering-App
```

2. **Install dependencies:**

```bash
$ npm install
```

3. **Start the development server:**

```bash
$ npm start
```

4. **Build for production:**

```bash
$ npm run build
```

---

### Testing :white_check_mark:

Run unit tests for the application:

```bash
$ npm test
```

#### Covered Test Cases:
- **Header Component**:
  - Checks the presence of login/logout buttons and cart items.
- **Restaurant Menu Component**:
  - Tests the add-to-cart functionality and menu rendering.
- **Restaurant Category Component**:
  - Validates the toggled visibility of category items.
- **Search Component**:
  - Validates restaurant filtering and searching functionality.
- **Contact Component**:
  - Ensures form elements are properly rendered.
- **ItemList Component**:
  - Validates item listing and add-to-cart functionality.
- **RestaurantCard Component**:
  - Ensures restaurant cards render correctly with mock data.
- **Shimmer Component**:
  - Confirms loading animations render correctly.

---

### Functionalities

```plaintext
1. **Authentication**:
   - Login/logout toggle button with state management.

2. **Dynamic Restaurant Listings**:
   - Fetch restaurant details from Swiggy API dynamically.
   - Lazy loading implemented for better performance.

3. **Search & Filter**:
   - Input-based search for restaurants.
   - Filter restaurants based on top ratings.

4. **Menu and Cart**:
   - View restaurant menus dynamically.
   - Add, update, and clear cart items.

5. **ItemList Component**:
   - Displays a list of items with detailed information.
   - Add items to the cart with a single click.

6. **RestaurantCard Component**:
   - Modular card design for showcasing restaurant details.

7. **RestaurantCategory Component**:
   - Displays categories of menu items with toggle functionality for expanded views.

8. **Shimmer Loading Effect**:
   - Renders placeholder loading animations during data fetch.

9. **User and UserClass Components**:
   - Display user details dynamically using both functional and class-based approaches.

10. **Responsive UI**:
   - Styled with TailwindCSS for mobile-first responsiveness.

11. **Error Handling**:
   - Display error components for unmatched routes or API issues.

12. **Offline Indicator**:
   - Real-time online/offline status indication.

13. **Testing**:
   - Unit testing implemented using Jest and React Testing Library.

14. **Grocery Page**:
   - A standalone page to display grocery items.

15. **App.js**:
   - Configures the main layout and routing for the application.
```

---

### Project Demonstration :memo:

#### How it Works:
1. Users can browse restaurants dynamically loaded from Swiggy API.
2. Search for specific restaurants or filter based on ratings.
3. View detailed menus and add items to the cart.
4. Manage the cart with add/remove options.
5. Check online/offline status.
6. Explore a separate grocery section.
7. View item details and add to cart using ItemList.
8. Browse restaurant details via RestaurantCard.
9. Toggle menu categories using RestaurantCategory.
10. Experience smooth loading with Shimmer animations.


---

### API References :link:

- **Swiggy Restaurant API**: Fetches restaurant and menu details dynamically.

---

### Folder Overview :open_file_folder:

- **src/components**: Contains React components for the app.
- **src/utils**: Utility files such as custom hooks and Redux slices.
- **index.css**: TailwindCSS styles.
- **App.js**: Main application file for layout and routing.

---

### Contributors :busts_in_silhouette:
- **Linga Bhavana**: Developer and maintainer.

---

### Contact :email:

For questions or suggestions, feel free to contact me:
- **Email**: urstrulybhavana1432@gmail.com
- **GitHub**: [UrstrulyBhavana](https://github.com/UrstrulyBhavana)

---

### License :page_facing_up:

This project is licensed under the MIT License. See the `LICENSE` file for details.
```

