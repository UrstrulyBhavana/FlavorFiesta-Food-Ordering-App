import { Component } from 'react'
import UserClass from './UserClass'
import UserContext from "../utils/UserContext";

class About extends Component{
  constructor(props){
    super(props);

    //console.log("Parent Constructor")
  }

  componentDidMount(){
    //console.log("Parent Component Did Mount")
  }

   render() {
   // console.log("Parent Render")

    return(
      <div className='flex  flex-col items-center'>
        <h1 className='font-bold text-3xl m-2 p-8'>About Us Page</h1>

        {/* <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div> */}

        <h2 className='font-semibold px-5'>Welcome to Food Ordering App , your ultimate destination for delicious food at your fingertips! We are passionate about bringing you the best culinary experiences from local restaurants and food joints, making your dining moments effortless and enjoyable.At Our App, we believe food is more than just a meal , it's an experience. Our platform brings the finest local flavors directly to your doorstep, offering an easy and enjoyable way to discover, order, and savor a wide variety of dishes. Whether you’re in the mood for comfort food or an adventurous new cuisine, we connect you with top restaurants and chefs, ensuring every bite is fresh and delicious. With a focus on convenience, speed, and quality, we’re transforming the way you enjoy food, one order at a time.</h2>
         <UserClass  name={" First MB"} location={"Tirupati"} />
      </div>
    )
   }
}

export default About;
 

       
        
   
