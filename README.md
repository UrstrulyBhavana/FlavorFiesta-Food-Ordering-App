```
# Flavor Fiesta: Food Ordering App

---

## Overview

Welcome to **Flavor Fiesta**, your ultimate destination for hassle-free food ordering. This application connects you with top local restaurants and chefs, providing an easy and enjoyable way to discover, order, and savor delicious food.

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
│   │   ├── Cart.js
│   │   ├── Error.js
│   │   ├── Contact.js
│   │   ├── About.js
│   │   ├── Grocery.js
│   └── utils
│       ├── appStore.js
│       ├── cartSlice.js
│       ├── constants.js
│       ├── useOnlineStatus.js
│       ├── useRestaurantMenu.js
├── index.css
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
- **Search Component**:
  - Validates restaurant filtering and searching functionality.
- **Contact Component**:
  - Ensures form elements are properly rendered.

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

5. **Responsive UI**:
   - Styled with TailwindCSS for mobile-first responsiveness.

6. **Error Handling**:
   - Display error components for unmatched routes or API issues.

7. **Offline Indicator**:
   - Real-time online/offline status indication.

8. **Testing**:
   - Unit testing implemented using Jest and React Testing Library.

9. **Grocery Page**:
   - A standalone page to display grocery items.
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

#### Screenshots:
![Application Screenshot 1](path/to/screenshot1.png)  
![Application Screenshot 2](path/to/screenshot2.png)

---

### API References :link:

- **Swiggy Restaurant API**: Fetches restaurant and menu details dynamically.

---

### Folder Overview :open_file_folder:

- **src/components**: Contains React components for the app.
- **src/utils**: Utility files such as custom hooks and Redux slices.
- **index.css**: TailwindCSS styles.

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

