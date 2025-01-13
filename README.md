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


               Dependencies:

React: Main library for building the UI.

Redux: Manages the cart state using react-redux and @reduxjs/toolkit.

React Router: Handles navigation between different pages (react-router-dom).

Tailwind CSS: Provides utility-first CSS classes for styling.

Jest: Testing framework.

React Testing Library: Used for testing React components.

Parcel: Bundler for building and serving the project.


               Configuration Files:-

.gitignore:  Specifies files and directories to be ignored by Git.

.parcelrc:   Configuration for the Parcel bundler.

.postcssrc:  Configures PostCSS with Tailwind CSS.

babel.config.js:  Configures Babel for JSX and ES6+ transpilation.

index.css:   Main CSS file using Tailwind CSS utilities.

index.html:   Entry point HTML file with a root div for React.

package.json:  Lists dependencies and scripts for building, testing, and running the app.

tailwind.config.js:  Configures Tailwind CSS with custom content paths.
               


               Scripts:
               
start: Runs the app using Parcel in development mode.

build: Builds the app for production.

test: Runs unit tests with Jest.

watch-test: Runs tests in watch mode.

Overall, this project demonstrates a well-structured, scalable React application with strong emphasis on state management, modular design, efficient data fetching, responsive UI, and robust testing practices.





![urstrulybhavana-flavour-fiesta-app-netlify-app](https://github.com/user-attachments/assets/79945122-2509-4d3a-8f47-6d8aa833bb8b)




![ezgif com-optimize](https://github.com/user-attachments/assets/5c276d1a-71be-4b46-82a7-590ae86711a4)



