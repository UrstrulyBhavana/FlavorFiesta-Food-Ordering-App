This Food Ordering App is a single-page application (SPA) built with React using modern web development practices, featuring both functional and class-based components. The app offers a seamless user experience for browsing restaurant menus, searching for specific food items, and managing a shopping cart. 
The application leverages Redux for state management, React Router for client-side routing, and uses Tailwind CSS for styling.

1.     Header and Navigation:-

The Header component is a functional component displaying the app's logo, navigation links (Home, About Us, Contact, Grocery), online/offline status, and a dynamic cart item count using Redux state. Users can toggle between login and logout states using a button.

2.     Restaurant List and Search:-

The Body component (functional) fetches restaurant data from an API using the useEffect hook and displays it using the RestaurantCard component. Users can search for restaurants or filter top-rated ones. The search results are dynamically updated based on the user input.

3.     Restaurant Menu and Cart:-

The RestaurantMenu component displays a selected restaurant’s menu based on the ID from the URL using React Router. It uses the custom useRestaurantMenu hook for API data fetching. Users can add items to the cart, and the cart updates are handled via Redux actions (addItem, removeItem, and clearCart). The Cart component shows the list of items added, allowing users to clear the cart with a button click.

4.     Class-Based Components:-

The UserClass component demonstrates class-based components by fetching user data from GitHub API on component mount and updating the state. It showcases lifecycle methods like componentDidMount and componentDidUpdate.

5.     Redux State Management:-

The app uses Redux for state management, primarily in the cart feature. The cartSlice defines actions for adding, removing, and clearing items in the cart. The app store is configured using configureStore from Redux Toolkit.

6.     Testing:-

The app includes unit and integration tests using Jest and React Testing Library. Tests cover components like Header, Cart, Contact, and Search, ensuring UI elements render correctly, and functionalities like button clicks and cart updates behave as expected.

6.     Styling and Responsiveness:-

The app uses Tailwind CSS for responsive and modern styling, enhancing the user experience across devices.

Overall, this app demonstrates a complete React project with efficient state management, API integration, component-based design, and testing, following best practices for modern web development.


    Key Libraries and Tools Used:-

React: Main library for building the UI.

Redux: Manages the cart state using react-redux and @reduxjs/toolkit.

React Router: Handles navigation between different pages (react-router-dom).

Tailwind CSS: Provides utility-first CSS classes for styling.

Jest: Testing framework.

React Testing Library: Used for testing React components.

Parcel: Bundler for building and serving the project.









